import Head from "next/head";
import React from "react";

import axios from "axios";
import Helpers from "@/modules/Helper"
import Link from "next/link";
import Globals from "@/modules/Globals";
import SpinnerComponent from "@/components/UI/SpinnerComponent";
import JsLoader from "@/modules/JsLoader";


function closePopup() {
    $("#popupModel").addClass("d-none");
}

// var startupEmails: Array<string>;
export default class RegisterPage extends React.Component<
    {},
    {
        startupEmails: Array<string>;
        isLoaded: boolean
    }
> {
    private languageID: string = "00000000-0000-0000-0000-000000000000";

    constructor(props: any) {
        super(props);
        this.state = {
            startupEmails: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");
        axios.get(`${Globals.API_URL}RegisterAPI/getExistingEmails`).then((r: any) => {
            const dataModel: Array<string> = r.data;
            console.log(dataModel);
            this.setState({
                isLoaded: true,
                startupEmails: dataModel,
            })
        });
    }

    uploadImage(id: string) {
        var image = document.getElementById(id);
        $("." + id).val('');
        if ($("#" + id).val()) {
            var file = Helpers.getUploadFile(image);
            const reader = new FileReader();
            reader.onloadend = () => {

                var dataType = reader.result?.toString().substring(0, reader.result?.toString().indexOf(";")).replace("data:", "");

                var base64String = reader.result?.toString()
                    .replace('data:', '')
                    .replace(/^.+,/, '');

                var FinalImage = base64String?.toString();

                axios.post(`${Globals.API_URL}RegisterAPI/UploadImage`, {
                    "ImageBase64": FinalImage,
                    "dataType": dataType
                })
                    .then((data) => {
                        if (data) {
                            $("." + id).val(data.data);
                        }
                    })
            };
            reader.readAsDataURL(file);
        }
    }

    render(): React.ReactNode {
        const { startupEmails, isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />;
        }

        $(".trailer-section").addClass("d-none");
        $("#bottom-strip").addClass("d-none");

        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/partnerRegistration.js`);

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | AIM Startup Partner Register`}</title>
                    <meta name="title" content="AIM Startup Partner Register" />
                    <meta name="description" content="AIM Startup Partner Register" />
                </Head>
                <div className="startup-registerPage-wrapper portfolio-margin-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className='heading-startup section-heading'>Partner Register</h2>
                            </div>
                            <div className="col-12">
                                <h2 className='subHeading'>Dynamic features and activities fueling startup evolution and success</h2>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12">
                                <form method="POST" action="//ac.strategic.ae/proc.php" id="_form_468_" className="_form _form_468 _inline-form  _dark startup-register-form" noValidate data-styles-version="3">
                                    <input type="hidden" name="u" value="468" />
                                    <input type="hidden" name="f" value="468" />
                                    <input type="hidden" name="s" />
                                    <input type="hidden" name="c" value="0" />
                                    <input type="hidden" name="m" value="0" />
                                    <input type="hidden" name="act" value="sub" />
                                    <input type="hidden" name="v" value="2" />
                                    <input type="hidden" name="or" value="0482eec0e0d75cb0326ad52c0334068e" />
                                    <input type="hidden" name="field[38]" value="AIM Startup 2025 - Partner Registration" />
                                    <div className="_form-content startup-form-container">
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    First Name: <span className="danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    itemID="firstname"
                                                    name="firstname"
                                                    id="firstname"
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
                                                    name="lastname"
                                                    id="lastname"
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
                                                    name="email"
                                                    id="email"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Job Title: <span className="danger">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    itemID="field[23]"
                                                    name="field[23]"
                                                    className="jobtitle form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Mobile Number: (Include country code) <span className="danger">*</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    id="field[12]" name="field[12]"
                                                    className="form-control"
                                                    placeholder="eg: 971 **********"
                                                    required
                                                />
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="startuplogo" className="form-label">
                                                    Logo: <span className="danger">*</span>
                                                </label>
                                                <input
                                                    type="file"
                                                    name="companyLogo"
                                                    className="form-control"
                                                    accept="image/png, image/gif, image/jpeg"
                                                    itemID="companyLogo"
                                                    id="companyLogo"
                                                    onChange={(e) => {
                                                        this.uploadImage("companyLogo");
                                                    }}
                                                />
                                                <input type="text" hidden className="companyLogo form-control" id="field[254]" name="field[254]" value="" placeholder="" required />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Company: <span className="danger">*</span>
                                                </label>
                                                <input type="text" id="customer_account" className="form-control" name="customer_account" placeholder="Type your account" required />
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Establishment Date: <span className="danger">*</span>
                                                </label>
                                                <input type="date" className="date_field form-control" id="field[258]" name="field[258]" />
                                            </div>



                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Country: <span className="danger">*</span>
                                                </label>
                                                <select name="field[3]" id="field[3]" className="form-control country" required>
                                                    <option value="" selected>

                                                    </option>
                                                    <option value="Afghanistan" >
                                                        Afghanistan
                                                    </option>
                                                    <option value="Aland Islands" >
                                                        Aland Islands
                                                    </option>
                                                    <option value="Albania" >
                                                        Albania
                                                    </option>
                                                    <option value="Algeria" >
                                                        Algeria
                                                    </option>
                                                    <option value="American Samoa" >
                                                        American Samoa
                                                    </option>
                                                    <option value="Andorra" >
                                                        Andorra
                                                    </option>
                                                    <option value="Angola" >
                                                        Angola
                                                    </option>
                                                    <option value="Anguilla" >
                                                        Anguilla
                                                    </option>
                                                    <option value="Antigua and Barbuda" >
                                                        Antigua and Barbuda
                                                    </option>
                                                    <option value="Argentina" >
                                                        Argentina
                                                    </option>
                                                    <option value="Armenia" >
                                                        Armenia
                                                    </option>
                                                    <option value="Aruba" >
                                                        Aruba
                                                    </option>
                                                    <option value="Australia" >
                                                        Australia
                                                    </option>
                                                    <option value="Austria" >
                                                        Austria
                                                    </option>
                                                    <option value="Azerbaijan" >
                                                        Azerbaijan
                                                    </option>
                                                    <option value="Bahamas" >
                                                        Bahamas
                                                    </option>
                                                    <option value="Bahrain" >
                                                        Bahrain
                                                    </option>
                                                    <option value="Bangladesh" >
                                                        Bangladesh
                                                    </option>
                                                    <option value="Barbados" >
                                                        Barbados
                                                    </option>
                                                    <option value="Belarus" >
                                                        Belarus
                                                    </option>
                                                    <option value="Belgium" >
                                                        Belgium
                                                    </option>
                                                    <option value="Belize" >
                                                        Belize
                                                    </option>
                                                    <option value="Benin" >
                                                        Benin
                                                    </option>
                                                    <option value="Bermuda" >
                                                        Bermuda
                                                    </option>
                                                    <option value="Bhutan" >
                                                        Bhutan
                                                    </option>
                                                    <option value="Bolivia" >
                                                        Bolivia
                                                    </option>
                                                    <option value="Bosnia and Herzegovina" >
                                                        Bosnia and Herzegovina
                                                    </option>
                                                    <option value="Botswana" >
                                                        Botswana
                                                    </option>
                                                    <option value="Bouvet Island" >
                                                        Bouvet Island
                                                    </option>
                                                    <option value="Brazil" >
                                                        Brazil
                                                    </option>
                                                    <option value="British Indian Ocean Territory" >
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option value="Brunei Darussalam" >
                                                        Brunei Darussalam
                                                    </option>
                                                    <option value="Bulgaria" >
                                                        Bulgaria
                                                    </option>
                                                    <option value="Burkina Faso" >
                                                        Burkina Faso
                                                    </option>
                                                    <option value="Burundi" >
                                                        Burundi
                                                    </option>
                                                    <option value="Cambodia" >
                                                        Cambodia
                                                    </option>
                                                    <option value="Cameroon" >
                                                        Cameroon
                                                    </option>
                                                    <option value="Canada" >
                                                        Canada
                                                    </option>
                                                    <option value="Cape Verde" >
                                                        Cape Verde
                                                    </option>
                                                    <option value="Cayman Islands" >
                                                        Cayman Islands
                                                    </option>
                                                    <option value="Central African Republic" >
                                                        Central African Republic
                                                    </option>
                                                    <option value="Chad" >
                                                        Chad
                                                    </option>
                                                    <option value="Chile" >
                                                        Chile
                                                    </option>
                                                    <option value="China" >
                                                        China
                                                    </option>
                                                    <option value="Christmas Island" >
                                                        Christmas Island
                                                    </option>
                                                    <option value="Cocos (Keeling) Islands" >
                                                        Cocos (Keeling) Islands
                                                    </option>
                                                    <option value="Colombia" >
                                                        Colombia
                                                    </option>
                                                    <option value="Comoros" >
                                                        Comoros
                                                    </option>
                                                    <option value="Congo" >
                                                        Congo
                                                    </option>
                                                    <option value="Cook Islands" >
                                                        Cook Islands
                                                    </option>
                                                    <option value="Costa Rica" >
                                                        Costa Rica
                                                    </option>
                                                    <option value="Cote D&#039;Ivoire" >
                                                        Cote D&#039;Ivoire
                                                    </option>
                                                    <option value="Croatia" >
                                                        Croatia
                                                    </option>
                                                    <option value="Cuba" >
                                                        Cuba
                                                    </option>
                                                    <option value="Cyprus" >
                                                        Cyprus
                                                    </option>
                                                    <option value="Czech Republic" >
                                                        Czech Republic
                                                    </option>
                                                    <option value="Democratic Republic of the Congo" >
                                                        Democratic Republic of the Congo
                                                    </option>
                                                    <option value="Denmark" >
                                                        Denmark
                                                    </option>
                                                    <option value="Djibouti" >
                                                        Djibouti
                                                    </option>
                                                    <option value="Dominica" >
                                                        Dominica
                                                    </option>
                                                    <option value="Dominican Republic" >
                                                        Dominican Republic
                                                    </option>
                                                    <option value="Ecuador" >
                                                        Ecuador
                                                    </option>
                                                    <option value="Egypt" >
                                                        Egypt
                                                    </option>
                                                    <option value="El Salvador" >
                                                        El Salvador
                                                    </option>
                                                    <option value="Equatorial Guinea" >
                                                        Equatorial Guinea
                                                    </option>
                                                    <option value="Eritrea" >
                                                        Eritrea
                                                    </option>
                                                    <option value="Estonia" >
                                                        Estonia
                                                    </option>
                                                    <option value="Eswatini" >
                                                        Eswatini
                                                    </option>
                                                    <option value="Ethiopia" >
                                                        Ethiopia
                                                    </option>
                                                    <option value="Falkland Islands (Malvinas)" >
                                                        Falkland Islands (Malvinas)
                                                    </option>
                                                    <option value="Faroe Islands" >
                                                        Faroe Islands
                                                    </option>
                                                    <option value="Fiji" >
                                                        Fiji
                                                    </option>
                                                    <option value="Finland" >
                                                        Finland
                                                    </option>
                                                    <option value="France" >
                                                        France
                                                    </option>
                                                    <option value="French Guiana" >
                                                        French Guiana
                                                    </option>
                                                    <option value="French Polynesia" >
                                                        French Polynesia
                                                    </option>
                                                    <option value="French Southern Territories" >
                                                        French Southern Territories
                                                    </option>
                                                    <option value="Gabon" >
                                                        Gabon
                                                    </option>
                                                    <option value="Gambia" >
                                                        Gambia
                                                    </option>
                                                    <option value="Georgia" >
                                                        Georgia
                                                    </option>
                                                    <option value="Germany" >
                                                        Germany
                                                    </option>
                                                    <option value="Ghana" >
                                                        Ghana
                                                    </option>
                                                    <option value="Gibraltar" >
                                                        Gibraltar
                                                    </option>
                                                    <option value="Greece" >
                                                        Greece
                                                    </option>
                                                    <option value="Greenland" >
                                                        Greenland
                                                    </option>
                                                    <option value="Grenada" >
                                                        Grenada
                                                    </option>
                                                    <option value="Guadeloupe" >
                                                        Guadeloupe
                                                    </option>
                                                    <option value="Guam" >
                                                        Guam
                                                    </option>
                                                    <option value="Guatemala" >
                                                        Guatemala
                                                    </option>
                                                    <option value="Guinea" >
                                                        Guinea
                                                    </option>
                                                    <option value="Guinea-Bissau" >
                                                        Guinea-Bissau
                                                    </option>
                                                    <option value="Guyana" >
                                                        Guyana
                                                    </option>
                                                    <option value="Haiti" >
                                                        Haiti
                                                    </option>
                                                    <option value="Heard Island and Mcdonald Islands" >
                                                        Heard Island and Mcdonald Islands
                                                    </option>
                                                    <option value="Holy See (Vatican City State)" >
                                                        Holy See (Vatican City State)
                                                    </option>
                                                    <option value="Honduras" >
                                                        Honduras
                                                    </option>
                                                    <option value="Hong Kong" >
                                                        Hong Kong
                                                    </option>
                                                    <option value="Hungary" >
                                                        Hungary
                                                    </option>
                                                    <option value="Iceland" >
                                                        Iceland
                                                    </option>
                                                    <option value="India" >
                                                        India
                                                    </option>
                                                    <option value="Indonesia" >
                                                        Indonesia
                                                    </option>
                                                    <option value="Iran, Islamic Republic of" >
                                                        Iran, Islamic Republic of
                                                    </option>
                                                    <option value="Iraq" >
                                                        Iraq
                                                    </option>
                                                    <option value="Ireland" >
                                                        Ireland
                                                    </option>
                                                    <option value="Isle of Man" >
                                                        Isle of Man
                                                    </option>
                                                    <option value="Israel" >
                                                        Israel
                                                    </option>
                                                    <option value="Italy" >
                                                        Italy
                                                    </option>
                                                    <option value="Jamaica" >
                                                        Jamaica
                                                    </option>
                                                    <option value="Japan" >
                                                        Japan
                                                    </option>
                                                    <option value="Jordan" >
                                                        Jordan
                                                    </option>
                                                    <option value="Kazakhstan" >
                                                        Kazakhstan
                                                    </option>
                                                    <option value="Kenya" >
                                                        Kenya
                                                    </option>
                                                    <option value="Kiribati" >
                                                        Kiribati
                                                    </option>
                                                    <option value="Korea, Democratic People&#039;s Republic of" >
                                                        Korea, Democratic People&#039;s Republic of
                                                    </option>
                                                    <option value="Korea, Republic of" >
                                                        Korea, Republic of
                                                    </option>
                                                    <option value="Kosovo" >
                                                        Kosovo
                                                    </option>
                                                    <option value="Kuwait" >
                                                        Kuwait
                                                    </option>
                                                    <option value="Kyrgyzstan" >
                                                        Kyrgyzstan
                                                    </option>
                                                    <option value="Lao People&#039;s Democratic Republic" >
                                                        Lao People&#039;s Democratic Republic
                                                    </option>
                                                    <option value="Latvia" >
                                                        Latvia
                                                    </option>
                                                    <option value="Lebanon" >
                                                        Lebanon
                                                    </option>
                                                    <option value="Lesotho" >
                                                        Lesotho
                                                    </option>
                                                    <option value="Liberia" >
                                                        Liberia
                                                    </option>
                                                    <option value="Libyan Arab Jamahiriya" >
                                                        Libyan Arab Jamahiriya
                                                    </option>
                                                    <option value="Liechtenstein" >
                                                        Liechtenstein
                                                    </option>
                                                    <option value="Lithuania" >
                                                        Lithuania
                                                    </option>
                                                    <option value="Luxembourg" >
                                                        Luxembourg
                                                    </option>
                                                    <option value="Macao" >
                                                        Macao
                                                    </option>
                                                    <option value="Macedonia, the Former Yugoslav Republic of" >
                                                        Macedonia, the Former Yugoslav Republic of
                                                    </option>
                                                    <option value="Madagascar" >
                                                        Madagascar
                                                    </option>
                                                    <option value="Malawi" >
                                                        Malawi
                                                    </option>
                                                    <option value="Malaysia" >
                                                        Malaysia
                                                    </option>
                                                    <option value="Maldives" >
                                                        Maldives
                                                    </option>
                                                    <option value="Mali" >
                                                        Mali
                                                    </option>
                                                    <option value="Malta" >
                                                        Malta
                                                    </option>
                                                    <option value="Marshall Islands" >
                                                        Marshall Islands
                                                    </option>
                                                    <option value="Martinique" >
                                                        Martinique
                                                    </option>
                                                    <option value="Mauritania" >
                                                        Mauritania
                                                    </option>
                                                    <option value="Mauritius" >
                                                        Mauritius
                                                    </option>
                                                    <option value="Mayotte" >
                                                        Mayotte
                                                    </option>
                                                    <option value="Mexico" >
                                                        Mexico
                                                    </option>
                                                    <option value="Micronesia, Federated States of" >
                                                        Micronesia, Federated States of
                                                    </option>
                                                    <option value="Moldova, Republic of" >
                                                        Moldova, Republic of
                                                    </option>
                                                    <option value="Monaco" >
                                                        Monaco
                                                    </option>
                                                    <option value="Mongolia" >
                                                        Mongolia
                                                    </option>
                                                    <option value="Montenegro" >
                                                        Montenegro
                                                    </option>
                                                    <option value="Montserrat" >
                                                        Montserrat
                                                    </option>
                                                    <option value="Morocco" >
                                                        Morocco
                                                    </option>
                                                    <option value="Mozambique" >
                                                        Mozambique
                                                    </option>
                                                    <option value="Myanmar" >
                                                        Myanmar
                                                    </option>
                                                    <option value="Namibia" >
                                                        Namibia
                                                    </option>
                                                    <option value="Nauru" >
                                                        Nauru
                                                    </option>
                                                    <option value="Nepal" >
                                                        Nepal
                                                    </option>
                                                    <option value="Netherlands" >
                                                        Netherlands
                                                    </option>
                                                    <option value="Netherlands Antilles" >
                                                        Netherlands Antilles
                                                    </option>
                                                    <option value="New Caledonia" >
                                                        New Caledonia
                                                    </option>
                                                    <option value="New Zealand" >
                                                        New Zealand
                                                    </option>
                                                    <option value="Nicaragua" >
                                                        Nicaragua
                                                    </option>
                                                    <option value="Niger" >
                                                        Niger
                                                    </option>
                                                    <option value="Nigeria" >
                                                        Nigeria
                                                    </option>
                                                    <option value="Niue" >
                                                        Niue
                                                    </option>
                                                    <option value="Norfolk Island" >
                                                        Norfolk Island
                                                    </option>
                                                    <option value="North Macedonia" >
                                                        North Macedonia
                                                    </option>
                                                    <option value="Northern Mariana Islands" >
                                                        Northern Mariana Islands
                                                    </option>
                                                    <option value="Norway" >
                                                        Norway
                                                    </option>
                                                    <option value="Oman" >
                                                        Oman
                                                    </option>
                                                    <option value="Pakistan" >
                                                        Pakistan
                                                    </option>
                                                    <option value="Palau" >
                                                        Palau
                                                    </option>
                                                    <option value="Palestinian Territory, Occupied" >
                                                        Palestinian Territory, Occupied
                                                    </option>
                                                    <option value="Panama" >
                                                        Panama
                                                    </option>
                                                    <option value="Papua New Guinea" >
                                                        Papua New Guinea
                                                    </option>
                                                    <option value="Paraguay" >
                                                        Paraguay
                                                    </option>
                                                    <option value="Peru" >
                                                        Peru
                                                    </option>
                                                    <option value="Philippines" >
                                                        Philippines
                                                    </option>
                                                    <option value="Pitcairn" >
                                                        Pitcairn
                                                    </option>
                                                    <option value="Poland" >
                                                        Poland
                                                    </option>
                                                    <option value="Portugal" >
                                                        Portugal
                                                    </option>
                                                    <option value="Puerto Rico" >
                                                        Puerto Rico
                                                    </option>
                                                    <option value="Qatar" >
                                                        Qatar
                                                    </option>
                                                    <option value="Reunion" >
                                                        Reunion
                                                    </option>
                                                    <option value="Romania" >
                                                        Romania
                                                    </option>
                                                    <option value="Russian Federation" >
                                                        Russian Federation
                                                    </option>
                                                    <option value="Rwanda" >
                                                        Rwanda
                                                    </option>
                                                    <option value="Saint Helena" >
                                                        Saint Helena
                                                    </option>
                                                    <option value="Saint Kitts and Nevis" >
                                                        Saint Kitts and Nevis
                                                    </option>
                                                    <option value="Saint Lucia" >
                                                        Saint Lucia
                                                    </option>
                                                    <option value="Saint Pierre and Miquelon" >
                                                        Saint Pierre and Miquelon
                                                    </option>
                                                    <option value="Saint Vincent and the Grenadines" >
                                                        Saint Vincent and the Grenadines
                                                    </option>
                                                    <option value="Samoa" >
                                                        Samoa
                                                    </option>
                                                    <option value="San Marino" >
                                                        San Marino
                                                    </option>
                                                    <option value="Sao Tome and Principe" >
                                                        Sao Tome and Principe
                                                    </option>
                                                    <option value="Saudi Arabia" >
                                                        Saudi Arabia
                                                    </option>
                                                    <option value="Senegal" >
                                                        Senegal
                                                    </option>
                                                    <option value="Serbia" >
                                                        Serbia
                                                    </option>
                                                    <option value="Seychelles" >
                                                        Seychelles
                                                    </option>
                                                    <option value="Sierra Leone" >
                                                        Sierra Leone
                                                    </option>
                                                    <option value="Singapore" >
                                                        Singapore
                                                    </option>
                                                    <option value="Slovakia" >
                                                        Slovakia
                                                    </option>
                                                    <option value="Slovenia" >
                                                        Slovenia
                                                    </option>
                                                    <option value="Solomon Islands" >
                                                        Solomon Islands
                                                    </option>
                                                    <option value="Somalia" >
                                                        Somalia
                                                    </option>
                                                    <option value="Somaliland" >
                                                        Somaliland
                                                    </option>
                                                    <option value="South Africa" >
                                                        South Africa
                                                    </option>
                                                    <option value="South Georgia and the South Sandwich Islands" >
                                                        South Georgia and the South Sandwich Islands
                                                    </option>
                                                    <option value="South Sudan" >
                                                        South Sudan
                                                    </option>
                                                    <option value="Spain" >
                                                        Spain
                                                    </option>
                                                    <option value="Sri Lanka" >
                                                        Sri Lanka
                                                    </option>
                                                    <option value="Sudan" >
                                                        Sudan
                                                    </option>
                                                    <option value="Suriname" >
                                                        Suriname
                                                    </option>
                                                    <option value="Svalbard and Jan Mayen" >
                                                        Svalbard and Jan Mayen
                                                    </option>
                                                    <option value="Sweden" >
                                                        Sweden
                                                    </option>
                                                    <option value="Switzerland" >
                                                        Switzerland
                                                    </option>
                                                    <option value="Syrian Arab Republic" >
                                                        Syrian Arab Republic
                                                    </option>
                                                    <option value="Taiwan, Province of China" >
                                                        Taiwan, Province of China
                                                    </option>
                                                    <option value="Tajikistan" >
                                                        Tajikistan
                                                    </option>
                                                    <option value="Tanzania, United Republic of" >
                                                        Tanzania, United Republic of
                                                    </option>
                                                    <option value="Thailand" >
                                                        Thailand
                                                    </option>
                                                    <option value="Timor-Leste" >
                                                        Timor-Leste
                                                    </option>
                                                    <option value="Togo" >
                                                        Togo
                                                    </option>
                                                    <option value="Tokelau" >
                                                        Tokelau
                                                    </option>
                                                    <option value="Tonga" >
                                                        Tonga
                                                    </option>
                                                    <option value="Trinidad and Tobago" >
                                                        Trinidad and Tobago
                                                    </option>
                                                    <option value="Tunisia" >
                                                        Tunisia
                                                    </option>
                                                    <option value="Turkey" >
                                                        Turkey
                                                    </option>
                                                    <option value="Turkmenistan" >
                                                        Turkmenistan
                                                    </option>
                                                    <option value="Turks and Caicos Islands" >
                                                        Turks and Caicos Islands
                                                    </option>
                                                    <option value="Tuvalu" >
                                                        Tuvalu
                                                    </option>
                                                    <option value="Uganda" >
                                                        Uganda
                                                    </option>
                                                    <option value="Ukraine" >
                                                        Ukraine
                                                    </option>
                                                    <option value="United Arab Emirates" >
                                                        United Arab Emirates
                                                    </option>
                                                    <option value="United Kingdom" >
                                                        United Kingdom
                                                    </option>
                                                    <option value="United States" >
                                                        United States
                                                    </option>
                                                    <option value="United States Minor Outlying Islands" >
                                                        United States Minor Outlying Islands
                                                    </option>
                                                    <option value="Uruguay" >
                                                        Uruguay
                                                    </option>
                                                    <option value="Uzbekistan" >
                                                        Uzbekistan
                                                    </option>
                                                    <option value="Vanuatu" >
                                                        Vanuatu
                                                    </option>
                                                    <option value="Venezuela" >
                                                        Venezuela
                                                    </option>
                                                    <option value="Viet Nam" >
                                                        Viet Nam
                                                    </option>
                                                    <option value="Virgin Islands, British" >
                                                        Virgin Islands, British
                                                    </option>
                                                    <option value="Virgin Islands, U.S." >
                                                        Virgin Islands, U.S.
                                                    </option>
                                                    <option value="Wallis and Futuna" >
                                                        Wallis and Futuna
                                                    </option>
                                                    <option value="Western Sahara" >
                                                        Western Sahara
                                                    </option>
                                                    <option value="Yemen" >
                                                        Yemen
                                                    </option>
                                                    <option value="Zambia" >
                                                        Zambia
                                                    </option>
                                                    <option value="Zimbabwe" >
                                                        Zimbabwe
                                                    </option>
                                                </select>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <label htmlFor="date" className="form-label">
                                                    Website:
                                                </label>
                                                <input
                                                    type="text"
                                                    itemID="field[80]" name="field[80]"
                                                    className="website form-control"
                                                />
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label htmlFor="startuplogo" className="form-label">
                                                    Short Description: <span className="danger">*</span>
                                                </label>
                                                <textarea id="field[261]" className="description form-control" name="field[261]" style={{ height: "120px" }} required></textarea>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <fieldset className="_form-fieldset">
                                                    <div className="_row">
                                                        <label htmlFor="startuplogo" className="form-label">
                                                            Partnership Types <span className="danger">*</span>
                                                        </label>
                                                    </div>
                                                    <input data-autofill="false" type="hidden" id="field[344][]" name="field[344][]" value="~|" />
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Venture Capitalist" type="checkbox" name="field[344][]" value="Venture Capitalist" />

                                                        <label htmlFor="field_344Venture Capitalist">
                                                            Venture Capitalist
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Angel Investor" type="checkbox" name="field[344][]" value="Angel Investor" />

                                                        <label htmlFor="field_344Angel Investor">
                                                            Angel Investor
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Angel Network" type="checkbox" name="field[344][]" value="Angel Network" />

                                                        <label htmlFor="field_344Angel Network">
                                                            Angel Network
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Community Partner" type="checkbox" name="field[344][]" value="Community Partner" />

                                                        <label htmlFor="field_344Community Partner">
                                                            Community Partner
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Accelerator" type="checkbox" name="field[344][]" value="Accelerator" />

                                                        <label htmlFor="field_344Accelerator">
                                                            Accelerator
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Incubator" type="checkbox" name="field[344][]" value="Incubator" />

                                                        <label htmlFor="field_344Incubator">
                                                            Incubator
                                                        </label>

                                                    </div>
                                                    <div className="_row _checkbox-radio">
                                                        <input id="field_344Others" type="checkbox" name="field[344][]" value="Others" />

                                                        <label htmlFor="field_344Others">
                                                            Others
                                                        </label>

                                                    </div>
                                                </fieldset>
                                            </div>

                                            <div className="form-group col-12 col-lg-6 col-xl-6">
                                                <div className="form-group col-12">
                                                    <label htmlFor="startuplogo" className="form-label" style={{ display: "block" }}>
                                                        Do you have any startups in your portfolio?
                                                    </label>

                                                    <input id="field_346Yes" className="m-r-10" type="radio" name="field[346]" value="Yes" />
                                                    <span>
                                                        Yes
                                                    </span>
                                                    <input id="field_346No" className="m-r-10 m-l-30" type="radio" name="field[346]" value="No" defaultChecked />
                                                    <span>
                                                        No
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-12">
                                                <label htmlFor="startuplogo" className="form-label">
                                                    No of startups in portfolio
                                                </label>
                                                <input type="text" className="form-control" id="field[347]" name="field[347]" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="g-recaptcha" data-sitekey="6LcwIw8TAAAAACP1ysM08EhCgzd6q5JAOUR1a0Go">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 text-right">
                                                <button
                                                    id="_form_468_submit"
                                                    type="submit"
                                                    className="aim-link blue-link m-t-30">
                                                    <span>Submit</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="_form-thank-you success"
                                        style={{ display: "none" }}></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="global-pop-up-wrapper d-none" id="popupModel">
                    <div className="pop-up-content">
                        <a href="javascript:0"
                            onClick={(e) => {
                                closePopup()
                            }}
                        >
                            <img className="pop-up-image" src={`${Globals.BASE_URL}assets/imgs/partner-popup.png`} />
                        </a>

                        <div className="pop-up-close"
                            onClick={(e) => {
                                closePopup()
                            }}
                            style={{ left: "unset", right: "0" }}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
