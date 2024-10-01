import Head from "next/head";
import React from "react";
import axios from "axios";
import Globals from "@/modules/Globals";
import { Aimstratuppromocode } from "@/models/aimstratuppromocode";
import SpinnerComponent from "@/components/UI/SpinnerComponent";

var ip = "https://payment.aimcongress.com/api/";
var source = "AIM Startup 2025 - SME Pillar"
var PaidAmount = 0;
export default class RegisterPage extends React.Component<
    {},
    {
        startupEmails: Array<string>;
        isLoaded: boolean;
        PromoCodes: Array<Aimstratuppromocode>;
        pitchDeck: string;
        projectImage: string;
        startupLogo: string;
        ProfilePhoto: string;
        firstName: string;
        lastName: string;
        email: string;
    }
> {
    private languageID: string = "00000000-0000-0000-0000-000000000000";

    constructor(props: any) {
        super(props);
        this.state = {
            startupEmails: [],
            isLoaded: false,
            PromoCodes: [],
            pitchDeck: "",
            projectImage: "",
            startupLogo: "",
            ProfilePhoto: "",
            firstName: "",
            lastName: "",
            email: "",
        };
    }

    componentDidMount() {
        Globals.KontentClient.item("aim_startup_2025___sme_pillar_promo_codes")
            .languageParameter(Globals.CURRENT_LANG_CODENAME)
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    PromoCodes: response.item.items.value,
                    isLoaded: true
                });
            });
    }


    checkEmail() {
        var email = $("#email").val();
        $("#firstname").prop("readonly", false);
        $("#lastname").prop("readonly", false);
        $("#organization").prop("readonly", false);
        $("#promocode").prop("readonly", false);
        axios.get(`${ip}Order/List?source=${source}&email=${email}&payment_status=paid`).then((r: any) => {
            if (r.data) {
                var response: any = r.data;

                if (response.length > 0) {
                    let firstRecord = response[0];
                    $("#package").val(firstRecord.package);
                    $("#firstname").val(firstRecord.first_name);
                    $("#lastname").val(firstRecord.last_name);
                    $("#organization").val(firstRecord.organization);
                    $("#promocode").val(firstRecord.promocode);
                    $("#firstname").prop("readonly", true);
                    $("#lastname").prop("readonly", true);
                    $("#organization").prop("readonly", true);
                    $("#promocode").prop("readonly", true);
                }

                let totalAmount = 0;

                response.forEach((item: any) => {
                    totalAmount += item.aed_amount;
                });

                if (totalAmount > 0) {
                    totalAmount = Number((totalAmount / 3.68).toFixed(0));
                }

                PaidAmount = totalAmount;
                this.setAmount();
            }
        })

    }

    setAmount() {
        const { PromoCodes } = this.state;

        var amount = 0;
        var packageName = $("#package").val();
        if (packageName != "") {
            if (packageName == "Micro Enterprises Package") {
                $("#totalAmount").val("1250");
                amount = 1250;
            }
            else if (packageName == "Small Enterprises Package") {
                $("#totalAmount").val("2500");
                amount = 2500;
            }
            else {
                $("#totalAmount").val("3750");
                amount = 3750;
            }
            let originalValue: number = amount;

            const taxRate: number = 0.05;
            const taxAmount: number = originalValue * taxRate;
            const AmountWithTax: number = amount + taxAmount;

            amount = AmountWithTax;

            $("#promo-error").addClass("d-none");
            var promocode: any = $("#promocode").val();
            if (promocode) {
                const code = PromoCodes.find((f) => {
                    return (
                        f.promo_code.value == promocode
                    )
                })
                if (code) {
                    const discountPercentage: number = Number(code.discount_percentage.value) / 100;

                    const discountedValue: number = AmountWithTax - (AmountWithTax * discountPercentage);

                    amount = discountedValue;
                }
                else {
                    $("#promo-error").removeClass("d-none");
                }
            }

            $("#discountedAmount").val((amount).toFixed(0));
            var remainingAmount = amount - PaidAmount;
            if (remainingAmount <= 0) {
                $("#paymentSubmit").addClass("d-none");
                $("#completeAmount").removeClass("d-none");
                $("#amountToPay").val(0);
                $(".amountToPayWrap").addClass("d-none");
            }

            $("#remainingAmount").val((amount - PaidAmount).toFixed(0));
            $("#totalAmount").val(originalValue);
            $("#totalAmountTax").val(AmountWithTax.toFixed(0));
            $("#amountToPay").attr("max", (amount - PaidAmount).toFixed(0));
        }
        else {
            $("#remainingAmount").val(0);
            $("#totalAmount").val(0);
            $("#totalAmountTax").val(0);
            $("#amountToPay").attr("max", "0");
            $("#discountedAmount").val(0);
        }
    }

    submitForm(e: any) {
        e.preventDefault();

        if ($("#promo-error").hasClass("d-none")) {
            $("#paymentSubmit").addClass("d-none");

            var email = $("#email").val();
            var packageName = $("#package").val();
            var firstName = $("#firstname").val();
            var lastName = $("#lastname").val();
            var amountToPay: any = $("#amountToPay").val();
            var promocode = $("#promocode").val();
            var organization = $("#organization").val();

            var aed_amount = (amountToPay * 3.68).toFixed(0)

            axios.post(`${ip}Order/Generate`, {
                "source_link": window.location.href,
                "email": email,
                "package": packageName,
                "first_name": firstName,
                "last_name": lastName,
                "aed_amount": aed_amount,
                "order_description": amountToPay + " USD",
                "organization": organization,
                "promocode": promocode,
                "source": source
            })
                .then((response: any) => {
                    var data = response.data;
                    if (data) {
                        if (data.code == 200) {
                            window.location.href = response.data.payment_link;
                        }
                    }
                })
        }
    }

    render(): React.ReactNode {
        const { isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />;
        }

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | SME Pillars`}</title>
                    <meta name="title" content="SME Pillars" />
                    <meta name="description" content="SME Pillars" />
                </Head>
                <div className="startup-registerPage-wrapper portfolio-margin-top">
                    <section>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h2 className=' heading-startup section-heading ' id="registerHeading">SME Pillars</h2>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-12 mt-4">
                                    <form method="post"
                                        onSubmit={(e) => {
                                            this.submitForm(e);
                                        }}
                                    >
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input type="email" id="email" className="form-control"
                                                        onBlur={(e) => {
                                                            if (e.target.value) {
                                                                this.checkEmail();
                                                            }
                                                        }}
                                                        required />
                                                    <small>Email should be unique for one registration. If you are doing the partial payment for same registration, enter the same email id.</small>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Packages</label>
                                                    <select id="package" className="form-control"
                                                        onChange={(e) => {
                                                            this.checkEmail();
                                                        }}
                                                        required>
                                                        <option value="">Select Package</option>
                                                        <option value="Micro Enterprises Package">Micro Enterprises Package</option>
                                                        <option value="Small Enterprises Package">Small Enterprises Package</option>
                                                        <option value="Medium Enterprises Package">Medium Enterprises Package</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input type="text" id="firstname" className="form-control" required />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input type="text" id="lastname" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Organization</label>
                                                    <input type="text" id="organization" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Package Amount USD</label>
                                                    <input type="number" readOnly id="totalAmount" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Total Amount USD with 5% Tax</label>
                                                    <input type="number" readOnly id="totalAmountTax" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Promo Code</label>
                                                    <input type="text" id="promocode" onBlur={(e) => {
                                                        this.setAmount();
                                                    }} className="form-control" />
                                                    <p id="promo-error" className="text-danger d-none">Promocode is incorrect.</p>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Discounted Amount USD</label>
                                                    <input type="number" readOnly id="discountedAmount" className="form-control" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <div className="form-group">
                                                    <label>Remaining Amount USD</label>
                                                    <input type="number" readOnly id="remainingAmount" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="form-group amountToPayWrap">
                                                    <label>Enter Amount to Pay USD</label>
                                                    <input type="number" id="amountToPay" min={1} onChange={(e) => {
                                                    }} className="form-control" required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <button
                                                    id="paymentSubmit"
                                                    type="submit"
                                                    className="startup-btn mt-3"
                                                >
                                                    <span>Submit</span>
                                                </button>

                                                <p id="completeAmount" className="text-danger d-none">You already paid complete amount.</p>
                                            </div>
                                        </div>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
