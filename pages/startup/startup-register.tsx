import Head from "next/head";
import React from "react";

import Link from "next/link";
import axios from "axios";
import Globals from "@/modules/Globals";
import { Aimstratuppromocode } from "@/models/aimstratuppromocode";
import Helpers from "@/modules/Helper";
import JsLoader from "@/modules/JsLoader";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import PackagesComponent from "@/components/Portfolio/startup/PackagesComponent";
import { CountriesData } from "@/contants/countryData";

function closePopup() {
    $("#popupModel").addClass("d-none");
}

const preFixStyle: React.CSSProperties = {
    position: 'absolute',
    paddingTop: '18px',
    background: 'rgba(192,192,192,.6588235294)',
    width: '48px',
    height: '3.6875rem',
    borderTopLeftRadius: '.25rem',
    borderBottomLeftRadius: '.25rem',
    top: '5px',
    left: '18px',
    textAlign: 'center'
};

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
        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");


        Globals.KontentClient.item("aim_startup_promo_codes")
            .languageParameter(Globals.CURRENT_LANG_CODENAME)
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    PromoCodes: response.item.items.value,
                    isLoaded: true
                });
            });
    }



    checkPromoCode(code: string) {
        const { PromoCodes } = this.state;
        var vaild = false;
        if (code) {
            const promocode = PromoCodes.find((f) => {
                return (
                    f.promoCode.value == code
                )
            })
            if (promocode) {
                $(".promo-error").addClass("d-none");
                return promocode.discountPercentage.value;
            }
            else {
                $(".promo-error").removeClass("d-none");
                return 0;
            }

        }
        else {
            $(".promo-error").removeClass("d-none");
            return 0;
        }

    }

    calculateAmount() {
        var code = $(".promo-code-field").val();
        var promocode = 0;
        if (code) {
            promocode = Number(this.checkPromoCode(code.toString()));
        }
        var amount = 0;

        var radioValue = $("input[name='package-startup']:checked").val();
        if (radioValue) {
            amount = Number(radioValue);
        }
        $(".add-on-name").html('');
        var addons = "";
        var addonsPrice = 0;
        $('.checkbox:checked').each(function () {
            amount += Number($(this).val());
            addonsPrice += Number($(this).val());
            if (Number($(this).val()) == 1840) {
                $(".add-on-name").append("<div class='d-block'>Startup Pass: <span class='text-right float-right'>1840 AED</span></div>");
                // addons = addons + "Startup Pass, ";
            }
            if (Number($(this).val()) == 552) {
                $(".add-on-name").append("<div class='d-block'>Desert Safari Experience: <span class='text-right float-right'>552 AED</span></div>");
                // addons = addons + "Desert Safari Experience, ";
            }
            if (Number($(this).val()) == 1472) {
                $(".add-on-name").append("<div class='d-block'>Gala Dinner: <span class='text-right float-right'>1472 AED</span></div>");

                // addons = addons + "	Gala Dinner, ";
            }
        });

        if (addons) {
            addons = addons.trim();
            addons = addons.slice(0, -1);
        }
        // $(".add-on-name").html(addons);
        // $(".add-on-price").html(addonsPrice.toFixed(0));


        var discountPercent = 100 - promocode;
        var dicountedAmount = (amount * discountPercent) / 100;
        var taxAmount = dicountedAmount * 0.05;
        $(".total-amount").html(amount.toString());
        $(".discounted-amount").html(dicountedAmount.toFixed(0));
        $(".discount-amount").html((amount - dicountedAmount).toFixed(0));
        $(".tax-amount").html(taxAmount.toFixed(0));
        $(".total-after-discount").html((dicountedAmount + taxAmount).toFixed(0));
        $("#grandTotal").val((dicountedAmount + taxAmount).toFixed(0));
    }

    


    GetAlphaNumeric(orignalString: string) {
        const alphanumericOnly = orignalString.replace(/[^a-zA-Z0-9]/g, '');
        return alphanumericOnly;
    }

    UploadAsset(e: any, id: string) {
        const files = e.target.files;

        // Check if there are files
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                var status_id = this.GetAlphaNumeric(file.name);
                $(`#uploaded-label-${id}`).removeClass("d-none");
                $(`#uploaded-status-${id}`).append(`<tr id='counter_${id}_${i}' class='text-danger ${status_id}'><td><i class="fa fa-caret-right m-r-5" aria-hidden="true"></i>${file.name}</td><td class='text-center' id='counter_counter_${id}_${i}'>0%</td></tr>`);
                const formData = new FormData();
                formData.append('file', file);

                axios.post(`https://media.aimcongress.com/api/Upload/Asset`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    onUploadProgress: (progressEvent: any) => {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        $(`#counter_counter_${id}_${i}`).html(`${percentCompleted.toString()}%`);
                        if (percentCompleted >= 100) {
                            $(`#counter_${id}_${i}`).removeClass("text-danger");
                            $(`#counter_${id}_${i}`).addClass("text-success");
                        }
                    }
                }).then((data) => {
                    if (data) {
                        
                        var response = data.data;
                        debugger
                        if (response.Code == 200) {
                            $("." + id).val(response.FileUrl);
                        }
                    }
                })
            }
        }
    }



    render(): React.ReactNode {
        const { isLoaded, pitchDeck, startupLogo, projectImage, ProfilePhoto, firstName, lastName, email } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />;
        }

        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");

        try {
            JsLoader.loadFile(`${Globals.BASE_URL}assets/js/startupregistration.js`);
        } catch (e) {

        }



        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | Register as Startup`}</title>
                    <meta name="title" content="Register as Startup" />
                    <meta name="description" content="Register as Startup" />
                </Head>
                <div className="startup-registerPage-wrapper portfolio-margin-top">
                    <section>

                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h2 className=' heading-startup section-heading ' id="registerHeading">Startup Registration</h2>
                                </div>
                                {/* <div className="col-12">
                                    <h2 className='subHeading'>Dynamic features and activities fueling startup evolution and success</h2>
                                </div> */}
                            </div>


                            <div className="row">
                                <div className="col-12 mt-4">
                                    <form method="POST" action="https://strategic31677.activehosted.com/proc.php" id="_form_406_" className="_form _form_406 _inline-form  _dark startup-register-form" noValidate data-styles-version="5">
                                        <input type="hidden" name="u" value="406" />
                                        <input type="hidden" name="f" value="406" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />
                                        <input type="hidden" name="or" value="f8cc3a8b936478eb5176ec1465aee944" />
                                        <input type="hidden" name="field[38]" value="AIM Startup 2025 - Startup Registration" />
                                        <div className="_form-content">
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        First Name: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        itemID="firstname"
                                                        id="firstname"
                                                        name="firstname"
                                                        placeholder=""
                                                        className="form-control"
                                                        required

                                                    />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Last Name: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        itemID="lastname"
                                                        id="lastname"
                                                        name="lastname"
                                                        placeholder=""
                                                        className="form-control"
                                                        required

                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Email: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        itemID="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="abc@company.com"
                                                        className="amount-email form-control"
                                                        required



                                                    />
                                                    <p className="text-danger email-error d-none">Email already exist.</p>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Job Title: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        itemID="field[23]"
                                                        name="field[23]"
                                                        placeholder=" "
                                                        className="jobtitle form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label className="form-label">Mobile Phone<span className="text-danger"> *</span></label>

                                                    <div className="row">
                                                        <div className="col-4 col-md-4">
                                                            <select id="phoneCode" onChange={(e) => $(".pre-fix").html(e.target.value)} className="form-control" required name="phoneCode">
                                                                <option value="">Select Code</option>
                                                                <option value="93">Afghanistan +93</option>
                                                                <option value="358">Åland Islands +358</option>
                                                                <option value="355">Albania +355</option>
                                                                <option value="213">Algeria +213</option>
                                                                <option value="1684">American Samoa +1684</option>
                                                                <option value="376">Andorra +376</option>
                                                                <option value="244">Angola +244</option>
                                                                <option value="1264">Anguilla +1264</option>
                                                                <option value="672">Antarctica +672</option>
                                                                <option value="1268">Antigua & Barbuda +1268</option>
                                                                <option value="54">Argentina +54</option>
                                                                <option value="374">Armenia +374</option>
                                                                <option value="297">Aruba +297</option>
                                                                <option value="61">Australia +61</option>
                                                                <option value="43">Austria +43</option>
                                                                <option value="994">Azerbaijan +994</option>
                                                                <option value="1242">Bahamas +1242</option>
                                                                <option value="973">Bahrain +973</option>
                                                                <option value="880">Bangladesh +880</option>
                                                                <option value="1246">Barbados +1246</option>
                                                                <option value="375">Belarus +375</option>
                                                                <option value="32">Belgium +32</option>
                                                                <option value="501">Belize +501</option>
                                                                <option value="229">Benin +229</option>
                                                                <option value="1441">Bermuda +1441</option>
                                                                <option value="975">Bhutan +975</option>
                                                                <option value="591">Bolivia +591</option>
                                                                <option value="599">Caribbean Netherlands +599</option>
                                                                <option value="387">Bosnia & Herzegovina +387</option>
                                                                <option value="267">Botswana +267</option>
                                                                <option value="55">Bouvet Island +55</option>
                                                                <option value="55">Brazil +55</option>
                                                                <option value="246">British Indian Ocean Territory +246</option>
                                                                <option value="673">Brunei +673</option>
                                                                <option value="359">Bulgaria +359</option>
                                                                <option value="226">Burkina Faso +226</option>
                                                                <option value="257">Burundi +257</option>
                                                                <option value="855">Cambodia +855</option>
                                                                <option value="237">Cameroon +237</option>
                                                                <option value="1">Canada +1</option>
                                                                <option value="238">Cape Verde +238</option>
                                                                <option value="1345">Cayman Islands +1345</option>
                                                                <option value="236">Central African Republic +236</option>
                                                                <option value="235">Chad +235</option>
                                                                <option value="56">Chile +56</option>
                                                                <option value="86">China +86</option>
                                                                <option value="61">Christmas Island +61</option>
                                                                <option value="672">Cocos (Keeling) Islands +672</option>
                                                                <option value="57">Colombia +57</option>
                                                                <option value="269">Comoros +269</option>
                                                                <option value="242">Congo - Brazzaville +242</option>
                                                                <option value="242">Congo - Kinshasa +242</option>
                                                                <option value="682">Cook Islands +682</option>
                                                                <option value="506">Costa Rica +506</option>
                                                                <option value="225">Côte d’Ivoire +225</option>
                                                                <option value="385">Croatia +385</option>
                                                                <option value="53">Cuba +53</option>
                                                                <option value="599">Curaçao +599</option>
                                                                <option value="357">Cyprus +357</option>
                                                                <option value="420">Czechia +420</option>
                                                                <option value="45">Denmark +45</option>
                                                                <option value="253">Djibouti +253</option>
                                                                <option value="1767">Dominica +1767</option>
                                                                <option value="1809">Dominican Republic +1809</option>
                                                                <option value="593">Ecuador +593</option>
                                                                <option value="20">Egypt +20</option>
                                                                <option value="503">El Salvador +503</option>
                                                                <option value="240">Equatorial Guinea +240</option>
                                                                <option value="291">Eritrea +291</option>
                                                                <option value="372">Estonia +372</option>
                                                                <option value="251">Ethiopia +251</option>
                                                                <option value="500">Falkland Islands (Islas Malvinas) +500</option>
                                                                <option value="298">Faroe Islands +298</option>
                                                                <option value="679">Fiji +679</option>
                                                                <option value="358">Finland +358</option>
                                                                <option value="33">France +33</option>
                                                                <option value="594">French Guiana +594</option>
                                                                <option value="689">French Polynesia +689</option>
                                                                <option value="262">French Southern Territories +262</option>
                                                                <option value="241">Gabon +241</option>
                                                                <option value="220">Gambia +220</option>
                                                                <option value="995">Georgia +995</option>
                                                                <option value="49">Germany +49</option>
                                                                <option value="233">Ghana +233</option>
                                                                <option value="350">Gibraltar +350</option>
                                                                <option value="30">Greece +30</option>
                                                                <option value="299">Greenland +299</option>
                                                                <option value="1473">Grenada +1473</option>
                                                                <option value="590">Guadeloupe +590</option>
                                                                <option value="1671">Guam +1671</option>
                                                                <option value="502">Guatemala +502</option>
                                                                <option value="44">Guernsey +44</option>
                                                                <option value="224">Guinea +224</option>
                                                                <option value="245">Guinea-Bissau +245</option>
                                                                <option value="592">Guyana +592</option>
                                                                <option value="509">Haiti +509</option>
                                                                <option value="0">Heard & McDonald Islands +0</option>
                                                                <option value="39">Vatican City +39</option>
                                                                <option value="504">Honduras +504</option>
                                                                <option value="852">Hong Kong +852</option>
                                                                <option value="36">Hungary +36</option>
                                                                <option value="354">Iceland +354</option>
                                                                <option value="91">India +91</option>
                                                                <option value="62">Indonesia +62</option>
                                                                <option value="98">Iran +98</option>
                                                                <option value="964">Iraq +964</option>
                                                                <option value="353">Ireland +353</option>
                                                                <option value="44">Isle of Man +44</option>
                                                                <option value="972">Israel +972</option>
                                                                <option value="39">Italy +39</option>
                                                                <option value="1876">Jamaica +1876</option>
                                                                <option value="81">Japan +81</option>
                                                                <option value="44">Jersey +44</option>
                                                                <option value="962">Jordan +962</option>
                                                                <option value="7">Kazakhstan +7</option>
                                                                <option value="254">Kenya +254</option>
                                                                <option value="686">Kiribati +686</option>
                                                                <option value="850">North Korea +850</option>
                                                                <option value="82">South Korea +82</option>
                                                                <option value="381">Kosovo +381</option>
                                                                <option value="965">Kuwait +965</option>
                                                                <option value="996">Kyrgyzstan +996</option>
                                                                <option value="856">Laos +856</option>
                                                                <option value="371">Latvia +371</option>
                                                                <option value="961">Lebanon +961</option>
                                                                <option value="266">Lesotho +266</option>
                                                                <option value="231">Liberia +231</option>
                                                                <option value="218">Libya +218</option>
                                                                <option value="423">Liechtenstein +423</option>
                                                                <option value="370">Lithuania +370</option>
                                                                <option value="352">Luxembourg +352</option>
                                                                <option value="853">Macao +853</option>
                                                                <option value="389">North Macedonia +389</option>
                                                                <option value="261">Madagascar +261</option>
                                                                <option value="265">Malawi +265</option>
                                                                <option value="60">Malaysia +60</option>
                                                                <option value="960">Maldives +960</option>
                                                                <option value="223">Mali +223</option>
                                                                <option value="356">Malta +356</option>
                                                                <option value="692">Marshall Islands +692</option>
                                                                <option value="596">Martinique +596</option>
                                                                <option value="222">Mauritania +222</option>
                                                                <option value="230">Mauritius +230</option>
                                                                <option value="262">Mayotte +262</option>
                                                                <option value="52">Mexico +52</option>
                                                                <option value="691">Micronesia +691</option>
                                                                <option value="373">Moldova +373</option>
                                                                <option value="377">Monaco +377</option>
                                                                <option value="976">Mongolia +976</option>
                                                                <option value="382">Montenegro +382</option>
                                                                <option value="1664">Montserrat +1664</option>
                                                                <option value="212">Morocco +212</option>
                                                                <option value="258">Mozambique +258</option>
                                                                <option value="95">Myanmar (Burma) +95</option>
                                                                <option value="264">Namibia +264</option>
                                                                <option value="674">Nauru +674</option>
                                                                <option value="977">Nepal +977</option>
                                                                <option value="31">Netherlands +31</option>
                                                                <option value="599">Curaçao +599</option>
                                                                <option value="687">New Caledonia +687</option>
                                                                <option value="64">New Zealand +64</option>
                                                                <option value="505">Nicaragua +505</option>
                                                                <option value="227">Niger +227</option>
                                                                <option value="234">Nigeria +234</option>
                                                                <option value="683">Niue +683</option>
                                                                <option value="672">Norfolk Island +672</option>
                                                                <option value="1670">Northern Mariana Islands +1670</option>
                                                                <option value="47">Norway +47</option>
                                                                <option value="968">Oman +968</option>
                                                                <option value="92">Pakistan +92</option>
                                                                <option value="680">Palau +680</option>
                                                                <option value="970">Palestine +970</option>
                                                                <option value="507">Panama +507</option>
                                                                <option value="675">Papua New Guinea +675</option>
                                                                <option value="595">Paraguay +595</option>
                                                                <option value="51">Peru +51</option>
                                                                <option value="63">Philippines +63</option>
                                                                <option value="64">Pitcairn Islands +64</option>
                                                                <option value="48">Poland +48</option>
                                                                <option value="351">Portugal +351</option>
                                                                <option value="1787">Puerto Rico +1787</option>
                                                                <option value="974">Qatar +974</option>
                                                                <option value="262">Réunion +262</option>
                                                                <option value="40">Romania +40</option>
                                                                <option value="70">Russia +70</option>
                                                                <option value="250">Rwanda +250</option>
                                                                <option value="590">St. Barthélemy +590</option>
                                                                <option value="290">St. Helena +290</option>
                                                                <option value="1869">St. Kitts & Nevis +1869</option>
                                                                <option value="1758">St. Lucia +1758</option>
                                                                <option value="590">St. Martin +590</option>
                                                                <option value="508">St. Pierre & Miquelon +508</option>
                                                                <option value="1784">St. Vincent & Grenadines +1784</option>
                                                                <option value="684">Samoa +684</option>
                                                                <option value="378">San Marino +378</option>
                                                                <option value="239">São Tomé & Príncipe +239</option>
                                                                <option value="966">Saudi Arabia +966</option>
                                                                <option value="221">Senegal +221</option>
                                                                <option value="381">Serbia +381</option>
                                                                <option value="381">Serbia +381</option>
                                                                <option value="248">Seychelles +248</option>
                                                                <option value="232">Sierra Leone +232</option>
                                                                <option value="65">Singapore +65</option>
                                                                <option value="1">Sint Maarten +1</option>
                                                                <option value="421">Slovakia +421</option>
                                                                <option value="386">Slovenia +386</option>
                                                                <option value="677">Solomon Islands +677</option>
                                                                <option value="252">Somalia +252</option>
                                                                <option value="27">South Africa +27</option>
                                                                <option value="500">South Georgia & South Sandwich Islands +500</option>
                                                                <option value="211">South Sudan +211</option>
                                                                <option value="34">Spain +34</option>
                                                                <option value="94">Sri Lanka +94</option>
                                                                <option value="249">Sudan +249</option>
                                                                <option value="597">Suriname +597</option>
                                                                <option value="47">Svalbard & Jan Mayen +47</option>
                                                                <option value="268">Eswatini +268</option>
                                                                <option value="46">Sweden +46</option>
                                                                <option value="41">Switzerland +41</option>
                                                                <option value="963">Syria +963</option>
                                                                <option value="886">Taiwan +886</option>
                                                                <option value="992">Tajikistan +992</option>
                                                                <option value="255">Tanzania +255</option>
                                                                <option value="66">Thailand +66</option>
                                                                <option value="670">Timor-Leste +670</option>
                                                                <option value="228">Togo +228</option>
                                                                <option value="690">Tokelau +690</option>
                                                                <option value="676">Tonga +676</option>
                                                                <option value="1868">Trinidad & Tobago +1868</option>
                                                                <option value="216">Tunisia +216</option>
                                                                <option value="90">Turkey +90</option>
                                                                <option value="7370">Turkmenistan +7370</option>
                                                                <option value="1649">Turks & Caicos Islands +1649</option>
                                                                <option value="688">Tuvalu +688</option>
                                                                <option value="256">Uganda +256</option>
                                                                <option value="380">Ukraine +380</option>
                                                                <option value="971" selected>United Arab Emirates +971</option>
                                                                <option value="44">United Kingdom +44</option>
                                                                <option value="1">United States +1</option>
                                                                <option value="1">U.S. Outlying Islands +1</option>
                                                                <option value="598">Uruguay +598</option>
                                                                <option value="998">Uzbekistan +998</option>
                                                                <option value="678">Vanuatu +678</option>
                                                                <option value="58">Venezuela +58</option>
                                                                <option value="84">Vietnam +84</option>
                                                                <option value="1284">British Virgin Islands +1284</option>
                                                                <option value="1340">U.S. Virgin Islands +1340</option>
                                                                <option value="681">Wallis & Futuna +681</option>
                                                                <option value="212">Western Sahara +212</option>
                                                                <option value="967">Yemen +967</option>
                                                                <option value="260">Zambia +260</option>
                                                                <option value="263">Zimbabwe +263</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-8 col-md-8 p-l-0" style={{ position: "relative" }}>
                                                            <span className="pre-fix" style={preFixStyle}>971</span>
                                                            <input type="number" id="field[12]" name="field[12]" style={{ paddingLeft: "55px" }} className="form-control field_12 p-l-55" placeholder="561234567" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Website:
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="field[80]" name="field[80]"
                                                        className="website form-control"
                                                        placeholder="www.company.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Startup Name: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="customer_account" name="customer_account"
                                                        className="form-control"
                                                        placeholder=""
                                                        required
                                                    />
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Date of Establishment: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="field[258]" name="field[258]"
                                                        className="form-control estDate"
                                                        placeholder=""
                                                        required
                                                    />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Startup Stage: <span className="danger">*</span>
                                                    </label>
                                                    <select name="field[260]" id="field[260]" className="startupstage form-control">
                                                        <option value="" selected>
                                                            Select Startup Stage
                                                        </option>
                                                        <option value="Pre - Seed" >
                                                            Pre - Seed
                                                        </option>
                                                        <option value="Seed" >
                                                            Seed
                                                        </option>
                                                        <option value="Series A" >
                                                            Series A
                                                        </option>
                                                        <option value="Series B" >
                                                            Series B
                                                        </option>
                                                        <option value="Series C" >
                                                            Series C
                                                        </option>
                                                        <option value="Series D" >
                                                            Series D
                                                        </option>
                                                        <option value="Unicorn" >
                                                            Unicorn
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Startup Sector: <span className="danger">*</span>
                                                    </label>
                                                    <select name="field[259]" id="field[259]" className="startupsector form-control" >
                                                        <option selected value="">
                                                            Select Startup Sector
                                                        </option>
                                                        <option value="Edtech" >
                                                            Edtech
                                                        </option>
                                                        <option value="Fintech" >
                                                            Fintech
                                                        </option>
                                                        <option value="Gov Tech" >
                                                            Gov Tech
                                                        </option>
                                                        <option value="Food Tech &amp; Agritech" >
                                                            Food Tech &amp; Agritech
                                                        </option>
                                                        <option value="Health Tech" >
                                                            Health Tech
                                                        </option>
                                                        <option value="AR &amp; VR" >
                                                            AR &amp; VR
                                                        </option>
                                                        <option value="Mobility" >
                                                            Mobility
                                                        </option>
                                                        <option value="Cyber Security" >
                                                            Cyber Security
                                                        </option>
                                                        <option value="Retail Tech &amp; E-commerce" >
                                                            Retail Tech &amp; E-commerce
                                                        </option>
                                                        <option value="Greentech" >
                                                            Greentech
                                                        </option>
                                                        <option value="Metaverse" >
                                                            Metaverse
                                                        </option>
                                                        <option value="Deep Technology-Artificial Intelligence" >
                                                            Deep Technology-Artificial Intelligence
                                                        </option>
                                                        <option value="Deep Technology-Internet of Things" >
                                                            Deep Technology-Internet of Things
                                                        </option>
                                                        <option value="Deep Technology-Decentralized Finance" >
                                                            Deep Technology-Decentralized Finance
                                                        </option>
                                                        <option value="Deep Technology-Blockchain" >
                                                            Deep Technology-Blockchain
                                                        </option>
                                                        <option value="Deep Technology-Cryptocurrency" >
                                                            Deep Technology-Cryptocurrency
                                                        </option>
                                                        <option value="Deep Technology-Web 3" >
                                                            Deep Technology-Web 3
                                                        </option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="date" className="form-label">
                                                        Country: <span className="danger">*</span>
                                                    </label>
                                                    <select
                                                        name="field[3]"
                                                        itemID="field[3]"
                                                        className="country form-control"
                                                        required
                                                    >
                                                        <option value="">
                                                            Select Country
                                                        </option>
                                                        {CountriesData.map((country: any, index: number) => {
                                                            return (
                                                                <option value={country.value} key={`country-${index}`}>
                                                                    {country.label}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Logo: <span className="danger">*</span>
                                                    </label>
                                                    <input
                                                        type="file"
                                                        name="startuplogo"
                                                        className="form-control"
                                                        accept="image/png, image/gif, image/jpeg"
                                                        itemID="startuplogo"
                                                        placeholder=""
                                                        id="startuplogo"
                                                        onChange={(e) => {
                                                            this.UploadAsset(e, "startuplogo");
                                                        }}
                                                    />
                                                    <input type="text" hidden className="startuplogo form-control" id="field[254]" name="field[254]" placeholder="" required />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="form-group col-12">
                                                    <label htmlFor="startuplogo" className="form-label">
                                                        Short Description: <span className="danger">*</span>
                                                    </label>
                                                    <textarea id="field[261]" name="field[261]" placeholder="" className="description form-control" style={{ height: "120px" }} required></textarea>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <div className="h-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-right">
                                                    <button

                                                        id="_form_406_submit"
                                                        type="submit"
                                                        className="startup-btn mt-3">
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="_form-thank-you success"
                                            style={{ display: "none", padding: "0", margin: "0" }}
                                        >
                                            <p className="mt-5" style={{ color: "black", fontWeight: "bold", textAlign: "center", fontSize: "28px" }}>
                                                Thank you for submitting your startup details! <br />Next, please choose your preferred participation package to finalize your registration.
                                            </p>


                                            <PackagesComponent />
                                        </div>

                                    </form>









                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                {/* <div className="global-pop-up-wrapper d-none" id="popupModel">
                    <div className="pop-up-content">
                        <a href="javascript:0"
                            onClick={(e) => {
                                closePopup()
                            }}
                        >
                            <img className="pop-up-image" src={`${Globals.BASE_URL}assets/imgs/startup-popup.png`} />
                        </a>

                        <div className="pop-up-close"
                            onClick={(e) => {
                                closePopup()
                            }}
                            style={{ left: "unset", right: "0" }}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                </div> */}
            </React.Fragment>
        );
    }
}
