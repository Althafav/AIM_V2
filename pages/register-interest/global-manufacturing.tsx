import Head from "next/head";
import React from "react";


import Globals from "@/modules/Globals";
import JsLoader from "@/modules/JsLoader";

import { Bochurepage } from "@/models/bochurepage";
import { motion } from "framer-motion";
import SpinnerComponent from "@/components/UI/SpinnerComponent";

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
        pageData: Bochurepage;
        mainsource: string;
        subsource: string;
        isLoaded: boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Bochurepage(),
            mainsource: "",
            subsource: "",
            isLoaded: false,
        };
    }

    componentDidMount() {
        const params = new URLSearchParams(window.location.search);
        const mainsourceParameter = params.get('mainsource') || '/';
        const subSourceParameter = params.get('subsource') || '/';


        Globals.KontentClient.item("sponsors_form")
            .languageParameter(Globals.CURRENT_LANG_CODENAME)
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    pageData: response.item,
                    mainsource: mainsourceParameter,
                    subsource: subSourceParameter,
                    isLoaded: true,
                });
            });
    }

    checkBrochure() {
        if ($("#brochure").prop("checked") == true) {
            $("#field_229Yes").prop("checked", true);
            $("#field_229No").prop("checked", false);
        } else if ($("#brochure").prop("checked") == false) {
            $("#field_229Yes").prop("checked", false);
            $("#field_229No").prop("checked", true);
        }
    }

    checkSponsorship() {
        if ($("#Sponsorship").prop("checked") == true) {
            $("#field_230Yes").prop("checked", true);
            $("#field_230No").prop("checked", false);
        } else if ($("#Sponsorship").prop("checked") == false) {
            $("#field_230Yes").prop("checked", false);
            $("#field_230No").prop("checked", true);
        }
    }

    checkNewsletter() {
        if ($("#newsletter").prop("checked") == true) {
            $("#field_231Yes").prop("checked", true);
            $("#field_231No").prop("checked", false);
        } else if ($("#newsletter").prop("checked") == false) {
            $("#field_231Yes").prop("checked", false);
            $("#field_231No").prop("checked", true);
        }
    }

    render(): React.ReactNode {
        const { pageData, mainsource, subsource, isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />;
        }

        JsLoader.loadFile(`${Globals.BASE_URL}assets/js/registerInterest.js`);

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | CONTACT US`}</title>
                    <meta
                        name="title"
                        content={`${Globals.SITE_NAME} | Register Your Interest As Exhibitor`}
                    />
                    <meta
                        name="description"
                        content={`${Globals.SITE_NAME} | Register now to join AIM Congress 2024 in Abu Dhabi and connect`}
                    />
                </Head>

                <div className="inner-banner-section-wrapper"
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        src="/assets/imgs/brochure-banner-bg.jpg" alt="" className='banner-image' />

                    <div className="inner-text-container container">
                        <h1 className='banner-heading'>Register Your Interest</h1>
                    </div>
                </div>

                <section className="register-interest-form-wrapper container">

                    <div className="row">

                        <div className="col-12">


                            <div className="row">
                                <div className="col-12">
                                    <form
                                        method="POST"
                                        action="//ac.strategic.ae/proc.php"
                                        id="_form_394_"
                                        noValidate
                                    >
                                        <input type="hidden" name="u" value="394" />
                                        <input type="hidden" name="f" value="394" />
                                        <input type="hidden" name="s" />
                                        <input type="hidden" name="c" value="0" />
                                        <input type="hidden" name="m" value="0" />
                                        <input type="hidden" name="act" value="sub" />
                                        <input type="hidden" name="v" value="2" />
                                        <input
                                            type="hidden"
                                            name="or"
                                            value="87dd3af2187abe9a07709ed7f1daacda"
                                        />
                                        <input
                                            type="hidden"
                                            name="field[38]"
                                            value="AIM 2025-Global Manufacturing-RYI"
                                        />

                                        <input type="hidden" name="field[328]" value={mainsource} />
                                        <input type="hidden" name="field[329]" value={subsource} />

                                        <div className="_form-content">
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <input
                                                        type="text"
                                                        itemID="firstname"
                                                        name="firstname"
                                                        className="form-control"
                                                        placeholder="First Name *"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <input
                                                        type="text"
                                                        itemID="lastname"
                                                        name="lastname"
                                                        className="form-control"
                                                        placeholder="Last Name *"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <input
                                                        type="text"
                                                        itemID="customer_account"
                                                        name="customer_account"
                                                        className="form-control"
                                                        placeholder="Organization *"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <input
                                                        type="text"
                                                        itemID="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Email *"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <input
                                                        type="text"
                                                        itemID="field[23]"
                                                        name="field[23]"
                                                        className="form-control"
                                                        placeholder="Job Title *"
                                                        required
                                                    />
                                                </div>


                                                <div className="form-group col-12 col-lg-6 col-xl-6">


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
                                                            <input type="number" id="field[12]" name="field[12]" style={{ paddingLeft: "55px" }} className="form-control field_12 p-l-55" placeholder=" Mobile Phone" required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6">
                                                    <select
                                                        name="field[3]"
                                                        itemID="field[3]"
                                                        className="form-control"
                                                        required
                                                    >
                                                        <option value="" selected>
                                                            Select Country*
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
                                                        <option value="British Virgin Islands" >
                                                            British Virgin Islands
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
                                                        <option value="Iran" >
                                                            Iran
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
                                                        <option value="Micronesia" >
                                                            Micronesia
                                                        </option>
                                                        <option value="Moldova" >
                                                            Moldova
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
                                                        <option value="North Korea" >
                                                            North Korea
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
                                                        <option value="Palestine" >
                                                            Palestine
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
                                                        <option value="South Korea" >
                                                            South Korea
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
                                                        <option value="Taiwan" >
                                                            Taiwan
                                                        </option>
                                                        <option value="Tajikistan" >
                                                            Tajikistan
                                                        </option>
                                                        <option value="Tanzania" >
                                                            Tanzania
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
                                                        <option value="U.S. Virgin Islands" >
                                                            U.S. Virgin Islands
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
                                                    <select
                                                        name="field[4]"
                                                        itemID="field[4]"
                                                        className="form-control"
                                                        required
                                                    >
                                                        <option value="">Nature of Business *</option>
                                                        <option value="Accelerators" >
                                                            Accelerators
                                                        </option>
                                                        <option value="Adhesives & Paints" >
                                                            Adhesives & Paints
                                                        </option>
                                                        <option value="Aerospace" >
                                                            Aerospace
                                                        </option>
                                                        <option value="Agriculture" >
                                                            Agriculture
                                                        </option>
                                                        <option value="Agriculture and Agribusiness" >
                                                            Agriculture and Agribusiness
                                                        </option>
                                                        <option value="Architecture & Design" >
                                                            Architecture & Design
                                                        </option>
                                                        <option value="Artificial Intelligence" >
                                                            Artificial Intelligence
                                                        </option>
                                                        <option value="Arts and Culture" >
                                                            Arts and Culture
                                                        </option>
                                                        <option value="Associations and Federations" >
                                                            Associations and Federations
                                                        </option>
                                                        <option value="Automotive" >
                                                            Automotive
                                                        </option>
                                                        <option value="Automotive Glass" >
                                                            Automotive Glass
                                                        </option>
                                                        <option value="Aviation" >
                                                            Aviation
                                                        </option>
                                                        <option value="Banks and Other Financial Institutions" >
                                                            Banks and Other Financial Institutions
                                                        </option>
                                                        <option value="Beveled Glass" >
                                                            Beveled Glass
                                                        </option>
                                                        <option value="Building Materials" >
                                                            Building Materials
                                                        </option>
                                                        <option value="Business Council" >
                                                            Business Council
                                                        </option>
                                                        <option value="Chambers of Commerce and Industry" >
                                                            Chambers of Commerce and Industry
                                                        </option>
                                                        <option value="Chemical Industry" >
                                                            Chemical Industry
                                                        </option>
                                                        <option value="Coloured and Pure Glass" >
                                                            Coloured and Pure Glass
                                                        </option>
                                                        <option value="Commerce" >
                                                            Commerce
                                                        </option>
                                                        <option value="Conglomerate" >
                                                            Conglomerate
                                                        </option>
                                                        <option value="Construction and Engineering" >
                                                            Construction and Engineering
                                                        </option>
                                                        <option value="Consultancy" >
                                                            Consultancy
                                                        </option>
                                                        <option value="Consumer Goods" >
                                                            Consumer Goods
                                                        </option>
                                                        <option value="Contracting" >
                                                            Contracting
                                                        </option>
                                                        <option value="Corporate" >
                                                            Corporate
                                                        </option>
                                                        <option value="Cosmetics" >
                                                            Cosmetics
                                                        </option>
                                                        <option value="Decor Glass" >
                                                            Decor Glass
                                                        </option>
                                                        <option value="Defense/Military" >
                                                            Defense/Military
                                                        </option>
                                                        <option value="Digital Solution" >
                                                            Digital Solution
                                                        </option>
                                                        <option value="Diplomatic Mission" >
                                                            Diplomatic Mission
                                                        </option>
                                                        <option value="Dust Control & Vacuum Cleaners" >
                                                            Dust Control & Vacuum Cleaners
                                                        </option>
                                                        <option value="Economic Development" >
                                                            Economic Development
                                                        </option>
                                                        <option value="Education" >
                                                            Education
                                                        </option>
                                                        <option value="Energy and Mining" >
                                                            Energy and Mining
                                                        </option>
                                                        <option value="Event Organizer" >
                                                            Event Organizer
                                                        </option>
                                                        <option value="Facades and Cabins" >
                                                            Facades and Cabins
                                                        </option>
                                                        <option value="Facilities Management" >
                                                            Facilities Management
                                                        </option>
                                                        <option value="Fiber Glass" >
                                                            Fiber Glass
                                                        </option>
                                                        <option value="Fishery" >
                                                            Fishery
                                                        </option>
                                                        <option value="Flat Glass" >
                                                            Flat Glass
                                                        </option>
                                                        <option value="Flooring" >
                                                            Flooring
                                                        </option>
                                                        <option value="Food & Beverages" >
                                                            Food & Beverages
                                                        </option>
                                                        <option value="Foreign Affairs" >
                                                            Foreign Affairs
                                                        </option>
                                                        <option value="Furniture Manufacturers" >
                                                            Furniture Manufacturers
                                                        </option>
                                                        <option value="Glass Machinery" >
                                                            Glass Machinery
                                                        </option>
                                                        <option value="Glass Manufacturing" >
                                                            Glass Manufacturing
                                                        </option>
                                                        <option value="Government" >
                                                            Government
                                                        </option>
                                                        <option value="Government Department" >
                                                            Government Department
                                                        </option>
                                                        <option value="Government Programs and Initiatives" >
                                                            Government Programs and Initiatives
                                                        </option>
                                                        <option value="Green Technology and Climate Change" >
                                                            Green Technology and Climate Change
                                                        </option>
                                                        <option value="Hand Craft" >
                                                            Hand Craft
                                                        </option>
                                                        <option value="Handrail" >
                                                            Handrail
                                                        </option>
                                                        <option value="Healthcare and Pharmaceutical" >
                                                            Healthcare and Pharmaceutical
                                                        </option>
                                                        <option value="Heat Treated Glass" >
                                                            Heat Treated Glass
                                                        </option>
                                                        <option value="Hospitality" >
                                                            Hospitality
                                                        </option>
                                                        <option value="Immigration Service" >
                                                            Immigration Service
                                                        </option>
                                                        <option value="Incubators" >
                                                            Incubators
                                                        </option>
                                                        <option value="Infrastructure" >
                                                            Infrastructure
                                                        </option>
                                                        <option value="Insurance" >
                                                            Insurance
                                                        </option>
                                                        <option value="Inter-governmental organizations (IGOs)" >
                                                            Inter-governmental organizations (IGOs)
                                                        </option>
                                                        <option value="Investment & Trade" >
                                                            Investment & Trade
                                                        </option>
                                                        <option value="Investment and Freezones" >
                                                            Investment and Freezones
                                                        </option>
                                                        <option value="Investment Firm" >
                                                            Investment Firm
                                                        </option>
                                                        <option value="Investment Promotion Agency" >
                                                            Investment Promotion Agency
                                                        </option>
                                                        <option value="Investor" >
                                                            Investor
                                                        </option>
                                                        <option value="IT/ ICT and Telecommunication" >
                                                            IT/ ICT and Telecommunication
                                                        </option>
                                                        <option value="Law and Legal Affairs" >
                                                            Law and Legal Affairs
                                                        </option>
                                                        <option value="Life Sciences" >
                                                            Life Sciences
                                                        </option>
                                                        <option value="Lightning" >
                                                            Lightning
                                                        </option>
                                                        <option value="Local Government Units" >
                                                            Local Government Units
                                                        </option>
                                                        <option value="Logistics and Transportation" >
                                                            Logistics and Transportation
                                                        </option>
                                                        <option value="Luxury Goods & Jewelry" >
                                                            Luxury Goods & Jewelry
                                                        </option>
                                                        <option value="Management & Investment" >
                                                            Management & Investment
                                                        </option>
                                                        <option value="Manufacturing" >
                                                            Manufacturing
                                                        </option>
                                                        <option value="Maritime" >
                                                            Maritime
                                                        </option>
                                                        <option value="Marketing" >
                                                            Marketing
                                                        </option>
                                                        <option value="Marketing and Advertising" >
                                                            Marketing and Advertising
                                                        </option>
                                                        <option value="MDF/ Panels and Laminates" >
                                                            MDF/ Panels and Laminates
                                                        </option>
                                                        <option value="Media" >
                                                            Media
                                                        </option>
                                                        <option value="Ministries" >
                                                            Ministries
                                                        </option>
                                                        <option value="Non-Profit Organizations" >
                                                            Non-Profit Organizations
                                                        </option>
                                                        <option value="Oil and Gas" >
                                                            Oil and Gas
                                                        </option>
                                                        <option value="Others" >
                                                            Others
                                                        </option>
                                                        <option value="Paper Industry" >
                                                            Paper Industry
                                                        </option>
                                                        <option value="Partitions Skylights" >
                                                            Partitions Skylights
                                                        </option>
                                                        <option value="Pharmaceutical Glass" >
                                                            Pharmaceutical Glass
                                                        </option>
                                                        <option value="Plastics" >
                                                            Plastics
                                                        </option>
                                                        <option value="Plywood/ Hardboard Decorative" >
                                                            Plywood/ Hardboard Decorative
                                                        </option>
                                                        <option value="Private Equity" >
                                                            Private Equity
                                                        </option>
                                                        <option value="Private Sector" >
                                                            Private Sector
                                                        </option>
                                                        <option value="Professional Services" >
                                                            Professional Services
                                                        </option>
                                                        <option value="Property Development" >
                                                            Property Development
                                                        </option>
                                                        <option value="Property Portal" >
                                                            Property Portal
                                                        </option>
                                                        <option value="Property Valuation" >
                                                            Property Valuation
                                                        </option>
                                                        <option value="Protective Glass" >
                                                            Protective Glass
                                                        </option>
                                                        <option value="Publishing House" >
                                                            Publishing House
                                                        </option>
                                                        <option value="Pyrex Glass" >
                                                            Pyrex Glass
                                                        </option>
                                                        <option value="Raw Materials" >
                                                            Raw Materials
                                                        </option>
                                                        <option value="Real Estate" >
                                                            Real Estate
                                                        </option>
                                                        <option value="Real Estate Brokers" >
                                                            Real Estate Brokers
                                                        </option>
                                                        <option value="Regional Organizations" >
                                                            Regional Organizations
                                                        </option>
                                                        <option value="Retail" >
                                                            Retail
                                                        </option>
                                                        <option value="Robotics" >
                                                            Robotics
                                                        </option>
                                                        <option value="Securit" >
                                                            Securit
                                                        </option>
                                                        <option value="Shipbuilding" >
                                                            Shipbuilding
                                                        </option>
                                                        <option value="Shock Resistant Glass" >
                                                            Shock Resistant Glass
                                                        </option>
                                                        <option value="Smart Solutions" >
                                                            Smart Solutions
                                                        </option>
                                                        <option value="Software" >
                                                            Software
                                                        </option>
                                                        <option value="Sovereign Wealth Funds" >
                                                            Sovereign Wealth Funds
                                                        </option>
                                                        <option value="Special Economic Zones" >
                                                            Special Economic Zones
                                                        </option>
                                                        <option value="Spider Glass" >
                                                            Spider Glass
                                                        </option>
                                                        <option value="Sports and Recreation" >
                                                            Sports and Recreation
                                                        </option>
                                                        <option value="Startups" >
                                                            Startups
                                                        </option>
                                                        <option value="Supermarket" >
                                                            Supermarket
                                                        </option>
                                                        <option value="Supplier" >
                                                            Supplier
                                                        </option>
                                                        <option value="Table Wear" >
                                                            Table Wear
                                                        </option>
                                                        <option value="Technology" >
                                                            Technology
                                                        </option>
                                                        <option value="Textile and Apparel" >
                                                            Textile and Apparel
                                                        </option>
                                                        <option value="Timber/ Hardwood & Softwood" >
                                                            Timber/ Hardwood & Softwood
                                                        </option>
                                                        <option value="Tools & Cutting Machines" >
                                                            Tools & Cutting Machines
                                                        </option>
                                                        <option value="Tourism and Hospitality" >
                                                            Tourism and Hospitality
                                                        </option>
                                                        <option value="Trade & Industry" >
                                                            Trade & Industry
                                                        </option>
                                                        <option value="Transportation" >
                                                            Transportation
                                                        </option>
                                                        <option value="Treatment Products and Composite" >
                                                            Treatment Products and Composite
                                                        </option>
                                                        <option value="UN Specialized Agency" >
                                                            UN Specialized Agency
                                                        </option>
                                                        <option value="Universities & Academic Institutions" >
                                                            Universities & Academic Institutions
                                                        </option>
                                                        <option value="Utilities" >
                                                            Utilities
                                                        </option>
                                                        <option value="Veneer" >
                                                            Veneer
                                                        </option>
                                                        <option value="Venture Capital" >
                                                            Venture Capital
                                                        </option>
                                                        <option value="Venture Capital - PropTech" >
                                                            Venture Capital - PropTech
                                                        </option>
                                                        <option value="Water Recycle" >
                                                            Water Recycle
                                                        </option>
                                                        <option value="Wood" >
                                                            Wood
                                                        </option>
                                                        <option value="Wood Accessories (Doors-Windows-Fittings)" >
                                                            Wood Accessories (Doors-Windows-Fittings)
                                                        </option>
                                                        <option value="Wood Furniture Manufacturers" >
                                                            Wood Furniture Manufacturers
                                                        </option>
                                                        <option value="Wood Suppliers" >
                                                            Wood Suppliers
                                                        </option>
                                                        <option value="Wood Working Machinery" >
                                                            Wood Working Machinery
                                                        </option>
                                                        <option value="Wooden Windows and Doors" >
                                                            Wooden Windows and Doors
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-12 col-lg-6 col-xl-6 ">
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <span className="_form-label">
                                                                Interested to attend as *
                                                            </span>
                                                        </div>
                                                        <input
                                                            data-autofill="false"
                                                            type="hidden"
                                                            id="field[228][]"
                                                            name="field[228][]"
                                                            value="~|"
                                                        />
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Exhibitor"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Exhibitor"
                                                                className="any"
                                                                required

                                                            />
                                                            <span>
                                                                <label>Exhibitor</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Sponsor"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Sponsor"
                                                            />
                                                            <span>
                                                                <label>Sponsor</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Supporting Partner"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Supporting Partner"
                                                            />
                                                            <span>
                                                                <label>Supporting Partner</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Media Partner"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Media Partner"
                                                            />
                                                            <span>
                                                                <label>Media Partner</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Startups"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Startups"
                                                            />
                                                            <span>
                                                                <label>Startups</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Conference / Workshop Attendee"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Conference / Workshop Attendee"
                                                            />
                                                            <span>
                                                                <label>Conference / Workshop Attendee</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Awards"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Awards"
                                                            />
                                                            <span>
                                                                <label>Awards</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_228Visitor"
                                                                type="checkbox"
                                                                name="field[228][]"
                                                                value="Visitor"
                                                            />
                                                            <span>
                                                                <label>Visitor</label>
                                                            </span>
                                                        </div>
                                                    </fieldset>
                                                </div>

                                                <div className="form-group col-12 col-lg-6 col-xl-6 d-none">
                                                    <fieldset className="_form-fieldset">
                                                        <div className="_row">
                                                            <span className="_form-label">
                                                                Which AIM Portfolio are you interested in *
                                                            </span>
                                                        </div>
                                                        <input
                                                            data-autofill="false"
                                                            type="hidden"
                                                            id="field[61][]"
                                                            name="field[61][]"
                                                            value="~|"
                                                        />
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Foreign Direct Investment"
                                                                type="checkbox"
                                                                name="field[61][]"
                                                                value="Foreign Direct Investment"
                                                                className="any"
                                                                required
                                                            />
                                                            <span>
                                                                <label>Foreign Direct Investment</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Global Trade" type="checkbox" name="field[61][]" value="Global Trade"
                                                            />
                                                            <span>
                                                                <label>Global Trade</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Global Manufacturing" type="checkbox" name="field[61][]" value="Global Manufacturing"
                                                                checked
                                                            />
                                                            <span>
                                                                <label>
                                                                    Global Manufacturing
                                                                </label>
                                                            </span>
                                                        </div>

                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Future Cities"
                                                                type="checkbox"
                                                                name="field[61][]"
                                                                value="Future Cities"
                                                            />
                                                            <span>
                                                                <label>Future Cities</label>
                                                            </span>
                                                        </div>

                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Digital Economy"
                                                                type="checkbox"
                                                                name="field[61][]"
                                                                value="Digital Economy"
                                                            />
                                                            <span>
                                                                <label>Digital Economy</label>
                                                            </span>
                                                        </div>

                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Future Finance"
                                                                type="checkbox"
                                                                name="field[61][]"
                                                                value="Future Finance"
                                                            />
                                                            <span>
                                                                <label>Future Finance</label>
                                                            </span>
                                                        </div>
                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Startups &amp; Unicorns" type="checkbox" name="field[61][]" value="Startups &amp; Unicorns"
                                                            />
                                                            <span>
                                                                <label>Startups & Unicorns</label>
                                                            </span>
                                                        </div>

                                                        <div className="_row _checkbox-radio">
                                                            <input
                                                                id="field_61Entrepreneurs" type="checkbox" name="field[61][]" value="Entrepreneurs"
                                                            />
                                                            <span>
                                                                <label>Entrepreneurs</label>
                                                            </span>
                                                        </div>


                                                    </fieldset>
                                                </div>
                                            </div>

                                            <div className="row m-t-15">
                                                <div className="col-6 d-flex gap-2">
                                                    <input
                                                        id="brochure"
                                                        type="checkbox"
                                                        onClick={(e) => {
                                                            this.checkBrochure();
                                                        }}
                                                    />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Download Brochure
                                                        </label>
                                                    </span>
                                                </div>

                                                <div className="col-6 d-none">
                                                    <input
                                                        id="Sponsorship"
                                                        type="checkbox"
                                                        onClick={(e) => {
                                                            this.checkSponsorship();
                                                        }}
                                                    />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Download Sponsorship Packages
                                                        </label>
                                                    </span>
                                                </div>

                                                <div className="col-6 d-flex gap-2">
                                                    <input
                                                        id="newsletter"
                                                        type="checkbox"
                                                        onClick={(e) => {
                                                            this.checkNewsletter();
                                                        }}
                                                    />
                                                    <span>
                                                        <label className="checkbox-label">
                                                            Subscribe to our Newsletter
                                                        </label>
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="row" hidden>
                                                <div className="col-12">
                                                    <div className="_form_element _x94688527 _full_width ">
                                                        <fieldset className="_form-fieldset">
                                                            <legend className="_form-label">
                                                                AIM Download Brochure
                                                            </legend>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_229Yes"
                                                                    type="radio"
                                                                    name="field[229]"
                                                                    value="Yes"
                                                                />
                                                                <span>Yes</span>
                                                            </div>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_229No"
                                                                    type="radio"
                                                                    name="field[229]"
                                                                    value="No"
                                                                    checked
                                                                />
                                                                <span>No</span>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="_form_element _x76405091 _full_width ">
                                                        <fieldset className="_form-fieldset">
                                                            <legend className="_form-label">
                                                                AIM Download Sponsorship Packages
                                                            </legend>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_230Yes"
                                                                    type="radio"
                                                                    name="field[230]"
                                                                    value="Yes"
                                                                />
                                                                <span>Yes</span>
                                                            </div>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_230No"
                                                                    type="radio"
                                                                    name="field[230]"
                                                                    value="No"
                                                                    checked
                                                                />
                                                                <span>No</span>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="_form_element _x84871342 _full_width ">
                                                        <fieldset className="_form-fieldset">
                                                            <legend className="_form-label" >
                                                                AIM Subscribe to Newsletter
                                                            </legend>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_231Yes"
                                                                    type="radio"
                                                                    name="field[231]"
                                                                    value="Yes"
                                                                />
                                                                <span>Yes</span>
                                                            </div>
                                                            <div className="_row _checkbox-radio">
                                                                <input
                                                                    id="field_231No"
                                                                    type="radio"
                                                                    name="field[231]"
                                                                    value="No"
                                                                    checked
                                                                />
                                                                <span>No</span>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <button
                                                        id="_form_394_submit"
                                                        type="submit"
                                                        className="aim-link register-interest-submit-btn blue-link m-t-30"
                                                    >
                                                        <span>Submit</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="_form-thank-you" style={{ display: "none" }}>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

            </React.Fragment>
        );
    }
}
