import React from 'react'

export default function InvestorRegisterPage() {
    return (
        <div className='startup-registerPage-wrapper portfolio-margin-top'>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className='heading-startup section-heading'>Investor Register</h2>
                        </div>
                        <div className="col-12">
                            <h2 className='subHeading'>Dynamic features and activities fueling startup evolution and success</h2>
                        </div>
                    </div>


                    <div className="row">
                        <form  method="POST" action="//ac.strategic.ae/proc.php" id="_form_408_" className="_form _form_408 _inline-form  _dark startup-register-form" noValidate>

                            <input type="hidden" name="u" value="408" />
                            <input type="hidden" name="f" value="408" />
                            <input type="hidden" name="s" />
                            <input type="hidden" name="c" value="0" />
                            <input type="hidden" name="m" value="0" />
                            <input type="hidden" name="act" value="sub" />
                            <input type="hidden" name="v" value="2" />
                            <input type="hidden" name="or" value="84edec6b58447bfb95e57318bdf096a8" />
                            <input type="hidden" name="field[38]" value="AIM Startup 2025 - Investor Registration" />

                            <div className="_form-content">
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
                                        // onChange={(e) => {
                                        //   this.checkEmailExist(e.target.value);
                                        // }}
                                        />
                                        <p className="text-danger email-error d-none">Email already exist.</p>
                                    </div>

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="date" className="form-label">
                                            Password: <span className="danger">*</span>
                                        </label>
                                        <input type="password" id="field[257]" name="field[257]" className="password form-control" required />
                                    </div>
                                </div>
                                <div className="row">
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

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="date" className="form-label">
                                            Mobile Number: (use country code) <span className="danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            itemID="phone" name="phone"
                                            id="phone"
                                            className="form-control"
                                            placeholder="eg: +971 **********"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="date" className="form-label">
                                            AIM Investor Type: <span className="danger">*</span>
                                        </label>
                                        <select name="field[253]" className="investortype form-control" itemID="field[253]" required>
                                            <option selected value="">
                                                Select Type
                                            </option>
                                            <option value="Venture Capitalist">
                                                Venture Capitalist
                                            </option>
                                            <option value="Angel Network">
                                                Angel Network
                                            </option>
                                            <option value="Angel Investor">
                                                Angel Investor
                                            </option>
                                        </select>
                                    </div>

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Company Logo: <span className="danger">*</span>
                                        </label>
                                        <input
                                            type="file"
                                            name="startuplogo"
                                            className="form-control"
                                            accept="image/png, image/gif, image/jpeg"
                                            itemID="startuplogo"
                                            id="startuplogo"
                                            // onChange={(e) => {
                                            //     this.uploadImage("startuplogo");
                                            // }}
                                        />
                                        <input type="text" hidden className="startuplogo form-control" id="field[254]" name="field[254]" value="" placeholder="" required />
                                    </div>

                                </div>

                                <div className="row">
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

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Ticket size: <span className="danger">*</span>
                                        </label>
                                        <input type="text" id="field[101]" name="field[101]" className="ticketsize form-control" required />
                                    </div>



                                </div>

                                <div className="row">
                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Interested Stage: <span className="danger">*</span>
                                        </label>

                                        <fieldset className="_form-fieldset">
                                            <div className="_row">
                                            </div>
                                            <input data-autofill="false" type="hidden" id="field[264][]" name="field[264][]" value="~|" />
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Pre - Seed" type="checkbox" name="field[264][]" value="Pre - Seed" />
                                                <span>
                                                    <label>
                                                        Pre - Seed
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Seed" type="checkbox" name="field[264][]" value="Seed" />
                                                <span>
                                                    <label htmlFor="field_264Seed">
                                                        Seed
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Series A" type="checkbox" name="field[264][]" value="Series A" />
                                                <span>
                                                    <label>
                                                        Series A
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Series B" type="checkbox" name="field[264][]" value="Series B" />
                                                <span>
                                                    <label>
                                                        Series B
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Series C" type="checkbox" name="field[264][]" value="Series C" />
                                                <span>
                                                    <label>
                                                        Series C
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Series D" type="checkbox" name="field[264][]" value="Series D" />
                                                <span>
                                                    <label>
                                                        Series D
                                                    </label>
                                                </span>
                                            </div>
                                            <div className="_row _checkbox-radio">
                                                <input id="field_264Unicorn" type="checkbox" name="field[264][]" value="Unicorn" />
                                                <span>
                                                    <label>
                                                        Unicorn
                                                    </label>
                                                </span>
                                            </div>
                                        </fieldset>
                                    </div>

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <label htmlFor="date" className="form-label">
                                            Country: <span className="danger">*</span>
                                        </label>
                                        <select
                                            name="field[3]"
                                            itemID="field[3]"
                                            className="country form-control"
                                            required>
                                            <option value="">
                                                Select Country
                                            </option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antarctica">Antarctica</option>
                                            <option value="Antigua and Barbuda">
                                                Antigua and Barbuda
                                            </option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia and Herzegovina">
                                                Bosnia and Herzegovina
                                            </option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Bouvet Island">Bouvet Island</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Territory">
                                                British Indian Ocean Territory
                                            </option>
                                            <option value="Brunei Darussalam">
                                                Brunei Darussalam
                                            </option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">
                                                Central African Republic
                                            </option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">
                                                Christmas Island
                                            </option>
                                            <option value="Cocos (Keeling) Islands">
                                                Cocos (Keeling) Islands
                                            </option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Congo, the Democratic Republic of the">
                                                Congo, the Democratic Republic of the
                                            </option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cote D&#039;Ivoire">
                                                Cote D&#039;Ivoire
                                            </option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">
                                                Dominican Republic
                                            </option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">
                                                Equatorial Guinea
                                            </option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands (Malvinas)">
                                                Falkland Islands (Malvinas)
                                            </option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">
                                                French Polynesia
                                            </option>
                                            <option value="French Southern Territories">
                                                French Southern Territories
                                            </option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard Island and Mcdonald Islands">
                                                Heard Island and Mcdonald Islands
                                            </option>
                                            <option value="Holy See (Vatican City State)">
                                                Holy See (Vatican City State)
                                            </option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran, Islamic Republic of">
                                                Iran, Islamic Republic of
                                            </option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea, Democratic People&#039;s Republic of">
                                                Korea, Democratic People&#039;s Republic of
                                            </option>
                                            <option value="Korea, Republic of">
                                                Korea, Republic of
                                            </option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Lao People&#039;s Democratic Republic">
                                                Lao People&#039;s Democratic Republic
                                            </option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libyan Arab Jamahiriya">
                                                Libyan Arab Jamahiriya
                                            </option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macao">Macao</option>
                                            <option value="Macedonia, the Former Yugoslav Republic of">
                                                Macedonia, the Former Yugoslav Republic of
                                            </option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">
                                                Marshall Islands
                                            </option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia, Federated States of">
                                                Micronesia, Federated States of
                                            </option>
                                            <option value="Moldova, Republic of">
                                                Moldova, Republic of
                                            </option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="Netherlands Antilles">
                                                Netherlands Antilles
                                            </option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Northern Mariana Islands">
                                                Northern Mariana Islands
                                            </option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Palestinian Territory, Occupied">
                                                Palestinian Territory, Occupied
                                            </option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">
                                                Papua New Guinea
                                            </option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Pitcairn">Pitcairn</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russian Federation">
                                                Russian Federation
                                            </option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Saint Helena">Saint Helena</option>
                                            <option value="Saint Kitts and Nevis">
                                                Saint Kitts and Nevis
                                            </option>
                                            <option value="Saint Lucia">Saint Lucia</option>
                                            <option value="Saint Pierre and Miquelon">
                                                Saint Pierre and Miquelon
                                            </option>
                                            <option value="Saint Vincent and the Grenadines">
                                                Saint Vincent and the Grenadines
                                            </option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome and Principe">
                                                Sao Tome and Principe
                                            </option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Serbia and Montenegro">
                                                Serbia and Montenegro
                                            </option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">
                                                Solomon Islands
                                            </option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="South Georgia and the South Sandwich Islands">
                                                South Georgia and the South Sandwich Islands
                                            </option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Svalbard and Jan Mayen">
                                                Svalbard and Jan Mayen
                                            </option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syrian Arab Republic">
                                                Syrian Arab Republic
                                            </option>
                                            <option value="Taiwan, Province of China">
                                                Taiwan, Province of China
                                            </option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania, United Republic of">
                                                Tanzania, United Republic of
                                            </option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Timor-Leste">Timor-Leste</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">
                                                Trinidad and Tobago
                                            </option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks and Caicos Islands">
                                                Turks and Caicos Islands
                                            </option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">
                                                United Arab Emirates
                                            </option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="United States Minor Outlying Islands">
                                                United States Minor Outlying Islands
                                            </option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Viet Nam">Viet Nam</option>
                                            <option value="Virgin Islands, British">
                                                Virgin Islands, British
                                            </option>
                                            <option value="Virgin Islands, U.s.">
                                                Virgin Islands, U.s.
                                            </option>
                                            <option value="Wallis and Futuna">
                                                Wallis and Futuna
                                            </option>
                                            <option value="Western Sahara">Western Sahara</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="row focused-countries">
                                    <div className="col-12">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Interested Sector: <span className="danger">*</span>
                                        </label>
                                        <input data-autofill="false" type="hidden" id="field[262][]" name="field[262][]" value="~|" />

                                    </div>
                                    <div className="col-12 col-lg-6 col-xl-6">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Edtech" type="checkbox" name="field[262][]" value="Edtech" className="any" required />
                                            <span>
                                                <label>
                                                    Edtech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Fintech" type="checkbox" name="field[262][]" value="Fintech" />
                                            <span>
                                                <label>
                                                    Fintech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Gov Tech" type="checkbox" name="field[262][]" value="Gov Tech" />
                                            <span>
                                                <label>
                                                    Gov Tech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Food Tech &amp; Agritech" type="checkbox" name="field[262][]" value="Food Tech &amp; Agritech" />
                                            <span>
                                                <label>
                                                    Food Tech &amp; Agritech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Health Tech" type="checkbox" name="field[262][]" value="Health Tech" />
                                            <span>
                                                <label>
                                                    Health Tech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262AR &amp; VR" type="checkbox" name="field[262][]" value="AR &amp; VR" />
                                            <span>
                                                <label>
                                                    AR &amp; VR
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Mobility" type="checkbox" name="field[262][]" value="Mobility" />
                                            <span>
                                                <label>
                                                    Mobility
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Cyber Security" type="checkbox" name="field[262][]" value="Cyber Security" />
                                            <span>
                                                <label>
                                                    Cyber Security
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Retail Tech &amp; E-commerce" type="checkbox" name="field[262][]" value="Retail Tech &amp; E-commerce" />
                                            <span>
                                                <label>
                                                    Retail Tech &amp; E-commerce
                                                </label>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="form-group col-12 col-lg-6 col-xl-6">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Greentech" type="checkbox" name="field[262][]" value="Greentech" />
                                            <span>
                                                <label>
                                                    Greentech
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Metaverse" type="checkbox" name="field[262][]" value="Metaverse" />
                                            <span>
                                                <label>
                                                    Metaverse
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Artificial Intelligence" type="checkbox" name="field[262][]" value="Deep Technology-Artificial Intelligence" />
                                            <span>
                                                <label>
                                                    Deep Technology-Artificial Intelligence
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Internet of Things" type="checkbox" name="field[262][]" value="Deep Technology-Internet of Things" />
                                            <span>
                                                <label>
                                                    Deep Technology-Internet of Things
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Decentralized Finance" type="checkbox" name="field[262][]" value="Deep Technology-Decentralized Finance" />
                                            <span>
                                                <label>
                                                    Deep Technology-Decentralized Finance
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Blockchain" type="checkbox" name="field[262][]" value="Deep Technology-Blockchain" />
                                            <span>
                                                <label>
                                                    Deep Technology-Blockchain
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Cryptocurrency" type="checkbox" name="field[262][]" value="Deep Technology-Cryptocurrency" />
                                            <span>
                                                <label>
                                                    Deep Technology-Cryptocurrency
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Deep Technology-Web 3" type="checkbox" name="field[262][]" value="Deep Technology-Web 3" />
                                            <span>
                                                <label>
                                                    Deep Technology-Web 3
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Sector Agnostic" type="checkbox" name="field[262][]" value="Sector Agnostic" />
                                            <span>
                                                <label>
                                                    Sector Agnostic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_262Others" type="checkbox" name="field[262][]" value="Others" />
                                            <span>
                                                <label>
                                                    Others
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row focused-countries">
                                    <div className="col-12">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Focused Countries:
                                        </label>
                                        <input data-autofill="false" type="hidden" id="field[265][]" name="field[265][]" value="~|" />

                                    </div>
                                    <div className="col-12 col-lg-3 col-xl-3">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Afghanistan" type="checkbox" name="field[265][]" value="Afghanistan" />
                                            <span>
                                                <label htmlFor="field_265Afghanistan">
                                                    Afghanistan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Aland Islands" type="checkbox" name="field[265][]" value="Aland Islands" />
                                            <span>
                                                <label htmlFor="field_265Aland Islands">
                                                    Aland Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Albania" type="checkbox" name="field[265][]" value="Albania" />
                                            <span>
                                                <label htmlFor="field_265Albania">
                                                    Albania
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Algeria" type="checkbox" name="field[265][]" value="Algeria" />
                                            <span>
                                                <label htmlFor="field_265Algeria">
                                                    Algeria
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265American Samoa" type="checkbox" name="field[265][]" value="American Samoa" />
                                            <span>
                                                <label htmlFor="field_265American Samoa">
                                                    American Samoa
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Andorra" type="checkbox" name="field[265][]" value="Andorra" />
                                            <span>
                                                <label htmlFor="field_265Andorra">
                                                    Andorra
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Angola" type="checkbox" name="field[265][]" value="Angola" />
                                            <span>
                                                <label htmlFor="field_265Angola">
                                                    Angola
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Anguilla" type="checkbox" name="field[265][]" value="Anguilla" />
                                            <span>
                                                <label htmlFor="field_265Anguilla">
                                                    Anguilla
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Antarctica" type="checkbox" name="field[265][]" value="Antarctica" />
                                            <span>
                                                <label htmlFor="field_265Antarctica">
                                                    Antarctica
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Antigua and Barbuda" type="checkbox" name="field[265][]" value="Antigua and Barbuda" />
                                            <span>
                                                <label htmlFor="field_265Antigua and Barbuda">
                                                    Antigua and Barbuda
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Argentina" type="checkbox" name="field[265][]" value="Argentina" />
                                            <span>
                                                <label htmlFor="field_265Argentina">
                                                    Argentina
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Armenia" type="checkbox" name="field[265][]" value="Armenia" />
                                            <span>
                                                <label htmlFor="field_265Armenia">
                                                    Armenia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Aruba" type="checkbox" name="field[265][]" value="Aruba" />
                                            <span>
                                                <label htmlFor="field_265Aruba">
                                                    Aruba
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Australia" type="checkbox" name="field[265][]" value="Australia" />
                                            <span>
                                                <label htmlFor="field_265Australia">
                                                    Australia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Austria" type="checkbox" name="field[265][]" value="Austria" />
                                            <span>
                                                <label htmlFor="field_265Austria">
                                                    Austria
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Azerbaijan" type="checkbox" name="field[265][]" value="Azerbaijan" />
                                            <span>
                                                <label htmlFor="field_265Azerbaijan">
                                                    Azerbaijan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bahamas" type="checkbox" name="field[265][]" value="Bahamas" />
                                            <span>
                                                <label htmlFor="field_265Bahamas">
                                                    Bahamas
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bahrain" type="checkbox" name="field[265][]" value="Bahrain" />
                                            <span>
                                                <label htmlFor="field_265Bahrain">
                                                    Bahrain
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bangladesh" type="checkbox" name="field[265][]" value="Bangladesh" />
                                            <span>
                                                <label htmlFor="field_265Bangladesh">
                                                    Bangladesh
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Barbados" type="checkbox" name="field[265][]" value="Barbados" />
                                            <span>
                                                <label htmlFor="field_265Barbados">
                                                    Barbados
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Belarus" type="checkbox" name="field[265][]" value="Belarus" />
                                            <span>
                                                <label htmlFor="field_265Belarus">
                                                    Belarus
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Belgium" type="checkbox" name="field[265][]" value="Belgium" />
                                            <span>
                                                <label htmlFor="field_265Belgium">
                                                    Belgium
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Belize" type="checkbox" name="field[265][]" value="Belize" />
                                            <span>
                                                <label htmlFor="field_265Belize">
                                                    Belize
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Benin" type="checkbox" name="field[265][]" value="Benin" />
                                            <span>
                                                <label htmlFor="field_265Benin">
                                                    Benin
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bermuda" type="checkbox" name="field[265][]" value="Bermuda" />
                                            <span>
                                                <label htmlFor="field_265Bermuda">
                                                    Bermuda
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bhutan" type="checkbox" name="field[265][]" value="Bhutan" />
                                            <span>
                                                <label htmlFor="field_265Bhutan">
                                                    Bhutan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bolivia" type="checkbox" name="field[265][]" value="Bolivia" />
                                            <span>
                                                <label htmlFor="field_265Bolivia">
                                                    Bolivia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bosnia and Herzegovina" type="checkbox" name="field[265][]" value="Bosnia and Herzegovina" />
                                            <span>
                                                <label htmlFor="field_265Bosnia and Herzegovina">
                                                    Bosnia and Herzegovina
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Botswana" type="checkbox" name="field[265][]" value="Botswana" />
                                            <span>
                                                <label htmlFor="field_265Botswana">
                                                    Botswana
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bouvet Island" type="checkbox" name="field[265][]" value="Bouvet Island" />
                                            <span>
                                                <label htmlFor="field_265Bouvet Island">
                                                    Bouvet Island
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Brazil" type="checkbox" name="field[265][]" value="Brazil" />
                                            <span>
                                                <label htmlFor="field_265Brazil">
                                                    Brazil
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265British Indian Ocean Territory" type="checkbox" name="field[265][]" value="British Indian Ocean Territory" />
                                            <span>
                                                <label htmlFor="field_265British Indian Ocean Territory">
                                                    British Indian Ocean Territory
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Brunei Darussalam" type="checkbox" name="field[265][]" value="Brunei Darussalam" />
                                            <span>
                                                <label htmlFor="field_265Brunei Darussalam">
                                                    Brunei Darussalam
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Bulgaria" type="checkbox" name="field[265][]" value="Bulgaria" />
                                            <span>
                                                <label htmlFor="field_265Bulgaria">
                                                    Bulgaria
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Burkina Faso" type="checkbox" name="field[265][]" value="Burkina Faso" />
                                            <span>
                                                <label htmlFor="field_265Burkina Faso">
                                                    Burkina Faso
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Burundi" type="checkbox" name="field[265][]" value="Burundi" />
                                            <span>
                                                <label htmlFor="field_265Burundi">
                                                    Burundi
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cambodia" type="checkbox" name="field[265][]" value="Cambodia" />
                                            <span>
                                                <label htmlFor="field_265Cambodia">
                                                    Cambodia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cameroon" type="checkbox" name="field[265][]" value="Cameroon" />
                                            <span>
                                                <label htmlFor="field_265Cameroon">
                                                    Cameroon
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Canada" type="checkbox" name="field[265][]" value="Canada" />
                                            <span>
                                                <label htmlFor="field_265Canada">
                                                    Canada
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cape Verde" type="checkbox" name="field[265][]" value="Cape Verde" />
                                            <span>
                                                <label htmlFor="field_265Cape Verde">
                                                    Cape Verde
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cayman Islands" type="checkbox" name="field[265][]" value="Cayman Islands" />
                                            <span>
                                                <label htmlFor="field_265Cayman Islands">
                                                    Cayman Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Central African Republic" type="checkbox" name="field[265][]" value="Central African Republic" />
                                            <span>
                                                <label htmlFor="field_265Central African Republic">
                                                    Central African Republic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Chad" type="checkbox" name="field[265][]" value="Chad" />
                                            <span>
                                                <label htmlFor="field_265Chad">
                                                    Chad
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Chile" type="checkbox" name="field[265][]" value="Chile" />
                                            <span>
                                                <label htmlFor="field_265Chile">
                                                    Chile
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265China" type="checkbox" name="field[265][]" value="China" />
                                            <span>
                                                <label htmlFor="field_265China">
                                                    China
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Christmas Island" type="checkbox" name="field[265][]" value="Christmas Island" />
                                            <span>
                                                <label htmlFor="field_265Christmas Island">
                                                    Christmas Island
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cocos (Keeling) Islands" type="checkbox" name="field[265][]" value="Cocos (Keeling) Islands" />
                                            <span>
                                                <label htmlFor="field_265Cocos (Keeling) Islands">
                                                    Cocos (Keeling) Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Colombia" type="checkbox" name="field[265][]" value="Colombia" />
                                            <span>
                                                <label htmlFor="field_265Colombia">
                                                    Colombia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Comoros" type="checkbox" name="field[265][]" value="Comoros" />
                                            <span>
                                                <label htmlFor="field_265Comoros">
                                                    Comoros
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Congo" type="checkbox" name="field[265][]" value="Congo" />
                                            <span>
                                                <label htmlFor="field_265Congo">
                                                    Congo
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cook Islands" type="checkbox" name="field[265][]" value="Cook Islands" />
                                            <span>
                                                <label htmlFor="field_265Cook Islands">
                                                    Cook Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Costa Rica" type="checkbox" name="field[265][]" value="Costa Rica" />
                                            <span>
                                                <label htmlFor="field_265Costa Rica">
                                                    Costa Rica
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cote D&#039;Ivoire" type="checkbox" name="field[265][]" value="Cote D&#039;Ivoire" />
                                            <span>
                                                <label htmlFor="field_265Cote D&#039;Ivoire">
                                                    Cote D&#039;Ivoire
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Croatia" type="checkbox" name="field[265][]" value="Croatia" />
                                            <span>
                                                <label htmlFor="field_265Croatia">
                                                    Croatia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cuba" type="checkbox" name="field[265][]" value="Cuba" />
                                            <span>
                                                <label htmlFor="field_265Cuba">
                                                    Cuba
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Cyprus" type="checkbox" name="field[265][]" value="Cyprus" />
                                            <span>
                                                <label htmlFor="field_265Cyprus">
                                                    Cyprus
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Czech Republic" type="checkbox" name="field[265][]" value="Czech Republic" />
                                            <span>
                                                <label htmlFor="field_265Czech Republic">
                                                    Czech Republic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Democratic Republic of the Congo" type="checkbox" name="field[265][]" value="Democratic Republic of the Congo" />
                                            <span>
                                                <label htmlFor="field_265Democratic Republic of the Congo">
                                                    Democratic Republic of the Congo
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Denmark" type="checkbox" name="field[265][]" value="Denmark" />
                                            <span>
                                                <label htmlFor="field_265Denmark">
                                                    Denmark
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Djibouti" type="checkbox" name="field[265][]" value="Djibouti" />
                                            <span>
                                                <label htmlFor="field_265Djibouti">
                                                    Djibouti
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 col-xl-3">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Dominica" type="checkbox" name="field[265][]" value="Dominica" />
                                            <span>
                                                <label htmlFor="field_265Dominica">
                                                    Dominica
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Dominican Republic" type="checkbox" name="field[265][]" value="Dominican Republic" />
                                            <span>
                                                <label htmlFor="field_265Dominican Republic">
                                                    Dominican Republic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Ecuador" type="checkbox" name="field[265][]" value="Ecuador" />
                                            <span>
                                                <label htmlFor="field_265Ecuador">
                                                    Ecuador
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Egypt" type="checkbox" name="field[265][]" value="Egypt" />
                                            <span>
                                                <label htmlFor="field_265Egypt">
                                                    Egypt
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265El Salvador" type="checkbox" name="field[265][]" value="El Salvador" />
                                            <span>
                                                <label htmlFor="field_265El Salvador">
                                                    El Salvador
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Equatorial Guinea" type="checkbox" name="field[265][]" value="Equatorial Guinea" />
                                            <span>
                                                <label htmlFor="field_265Equatorial Guinea">
                                                    Equatorial Guinea
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Eritrea" type="checkbox" name="field[265][]" value="Eritrea" />
                                            <span>
                                                <label htmlFor="field_265Eritrea">
                                                    Eritrea
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Estonia" type="checkbox" name="field[265][]" value="Estonia" />
                                            <span>
                                                <label htmlFor="field_265Estonia">
                                                    Estonia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Ethiopia" type="checkbox" name="field[265][]" value="Ethiopia" />
                                            <span>
                                                <label htmlFor="field_265Ethiopia">
                                                    Ethiopia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Falkland Islands (Malvinas)" type="checkbox" name="field[265][]" value="Falkland Islands (Malvinas)" />
                                            <span>
                                                <label htmlFor="field_265Falkland Islands (Malvinas)">
                                                    Falkland Islands (Malvinas)
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Faroe Islands" type="checkbox" name="field[265][]" value="Faroe Islands" />
                                            <span>
                                                <label htmlFor="field_265Faroe Islands">
                                                    Faroe Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Fiji" type="checkbox" name="field[265][]" value="Fiji" />
                                            <span>
                                                <label htmlFor="field_265Fiji">
                                                    Fiji
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Finland" type="checkbox" name="field[265][]" value="Finland" />
                                            <span>
                                                <label htmlFor="field_265Finland">
                                                    Finland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265France" type="checkbox" name="field[265][]" value="France" />
                                            <span>
                                                <label htmlFor="field_265France">
                                                    France
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265French Guiana" type="checkbox" name="field[265][]" value="French Guiana" />
                                            <span>
                                                <label htmlFor="field_265French Guiana">
                                                    French Guiana
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265French Polynesia" type="checkbox" name="field[265][]" value="French Polynesia" />
                                            <span>
                                                <label htmlFor="field_265French Polynesia">
                                                    French Polynesia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265French Southern Territories" type="checkbox" name="field[265][]" value="French Southern Territories" />
                                            <span>
                                                <label htmlFor="field_265French Southern Territories">
                                                    French Southern Territories
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Gabon" type="checkbox" name="field[265][]" value="Gabon" />
                                            <span>
                                                <label htmlFor="field_265Gabon">
                                                    Gabon
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Gambia" type="checkbox" name="field[265][]" value="Gambia" />
                                            <span>
                                                <label htmlFor="field_265Gambia">
                                                    Gambia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Georgia" type="checkbox" name="field[265][]" value="Georgia" />
                                            <span>
                                                <label htmlFor="field_265Georgia">
                                                    Georgia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Germany" type="checkbox" name="field[265][]" value="Germany" />
                                            <span>
                                                <label htmlFor="field_265Germany">
                                                    Germany
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Ghana" type="checkbox" name="field[265][]" value="Ghana" />
                                            <span>
                                                <label htmlFor="field_265Ghana">
                                                    Ghana
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Gibraltar" type="checkbox" name="field[265][]" value="Gibraltar" />
                                            <span>
                                                <label htmlFor="field_265Gibraltar">
                                                    Gibraltar
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Greece" type="checkbox" name="field[265][]" value="Greece" />
                                            <span>
                                                <label htmlFor="field_265Greece">
                                                    Greece
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Greenland" type="checkbox" name="field[265][]" value="Greenland" />
                                            <span>
                                                <label htmlFor="field_265Greenland">
                                                    Greenland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Grenada" type="checkbox" name="field[265][]" value="Grenada" />
                                            <span>
                                                <label htmlFor="field_265Grenada">
                                                    Grenada
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guadeloupe" type="checkbox" name="field[265][]" value="Guadeloupe" />
                                            <span>
                                                <label htmlFor="field_265Guadeloupe">
                                                    Guadeloupe
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guam" type="checkbox" name="field[265][]" value="Guam" />
                                            <span>
                                                <label htmlFor="field_265Guam">
                                                    Guam
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guatemala" type="checkbox" name="field[265][]" value="Guatemala" />
                                            <span>
                                                <label htmlFor="field_265Guatemala">
                                                    Guatemala
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guinea" type="checkbox" name="field[265][]" value="Guinea" />
                                            <span>
                                                <label htmlFor="field_265Guinea">
                                                    Guinea
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guinea-Bissau" type="checkbox" name="field[265][]" value="Guinea-Bissau" />
                                            <span>
                                                <label htmlFor="field_265Guinea-Bissau">
                                                    Guinea-Bissau
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Guyana" type="checkbox" name="field[265][]" value="Guyana" />
                                            <span>
                                                <label htmlFor="field_265Guyana">
                                                    Guyana
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Haiti" type="checkbox" name="field[265][]" value="Haiti" />
                                            <span>
                                                <label htmlFor="field_265Haiti">
                                                    Haiti
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Heard Island and Mcdonald Islands" type="checkbox" name="field[265][]" value="Heard Island and Mcdonald Islands" />
                                            <span>
                                                <label htmlFor="field_265Heard Island and Mcdonald Islands">
                                                    Heard Island and Mcdonald Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Holy See (Vatican City State)" type="checkbox" name="field[265][]" value="Holy See (Vatican City State)" />
                                            <span>
                                                <label htmlFor="field_265Holy See (Vatican City State)">
                                                    Holy See (Vatican City State)
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Honduras" type="checkbox" name="field[265][]" value="Honduras" />
                                            <span>
                                                <label htmlFor="field_265Honduras">
                                                    Honduras
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Hong Kong" type="checkbox" name="field[265][]" value="Hong Kong" />
                                            <span>
                                                <label htmlFor="field_265Hong Kong">
                                                    Hong Kong
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Hungary" type="checkbox" name="field[265][]" value="Hungary" />
                                            <span>
                                                <label htmlFor="field_265Hungary">
                                                    Hungary
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Iceland" type="checkbox" name="field[265][]" value="Iceland" />
                                            <span>
                                                <label htmlFor="field_265Iceland">
                                                    Iceland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265India" type="checkbox" name="field[265][]" value="India" />
                                            <span>
                                                <label htmlFor="field_265India">
                                                    India
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Indonesia" type="checkbox" name="field[265][]" value="Indonesia" />
                                            <span>
                                                <label htmlFor="field_265Indonesia">
                                                    Indonesia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Iran, Islamic Republic of" type="checkbox" name="field[265][]" value="Iran, Islamic Republic of" />
                                            <span>
                                                <label htmlFor="field_265Iran, Islamic Republic of">
                                                    Iran, Islamic Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Iraq" type="checkbox" name="field[265][]" value="Iraq" />
                                            <span>
                                                <label htmlFor="field_265Iraq">
                                                    Iraq
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Ireland" type="checkbox" name="field[265][]" value="Ireland" />
                                            <span>
                                                <label htmlFor="field_265Ireland">
                                                    Ireland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Isle of Man" type="checkbox" name="field[265][]" value="Isle of Man" />
                                            <span>
                                                <label htmlFor="field_265Isle of Man">
                                                    Isle of Man
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Israel" type="checkbox" name="field[265][]" value="Israel" />
                                            <span>
                                                <label htmlFor="field_265Israel">
                                                    Israel
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Italy" type="checkbox" name="field[265][]" value="Italy" />
                                            <span>
                                                <label htmlFor="field_265Italy">
                                                    Italy
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Jamaica" type="checkbox" name="field[265][]" value="Jamaica" />
                                            <span>
                                                <label htmlFor="field_265Jamaica">
                                                    Jamaica
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Japan" type="checkbox" name="field[265][]" value="Japan" />
                                            <span>
                                                <label htmlFor="field_265Japan">
                                                    Japan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Jordan" type="checkbox" name="field[265][]" value="Jordan" />
                                            <span>
                                                <label htmlFor="field_265Jordan">
                                                    Jordan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kazakhstan" type="checkbox" name="field[265][]" value="Kazakhstan" />
                                            <span>
                                                <label htmlFor="field_265Kazakhstan">
                                                    Kazakhstan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kenya" type="checkbox" name="field[265][]" value="Kenya" />
                                            <span>
                                                <label htmlFor="field_265Kenya">
                                                    Kenya
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kiribati" type="checkbox" name="field[265][]" value="Kiribati" />
                                            <span>
                                                <label htmlFor="field_265Kiribati">
                                                    Kiribati
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Korea, Democratic People&#039;s Republic of" type="checkbox" name="field[265][]" value="Korea, Democratic People&#039;s Republic of" />
                                            <span>
                                                <label htmlFor="field_265Korea, Democratic People&#039;s Republic of">
                                                    Korea, Democratic People&#039;s Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Korea, Republic of" type="checkbox" name="field[265][]" value="Korea, Republic of" />
                                            <span>
                                                <label htmlFor="field_265Korea, Republic of">
                                                    Korea, Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kosovo" type="checkbox" name="field[265][]" value="Kosovo" />
                                            <span>
                                                <label htmlFor="field_265Kosovo">
                                                    Kosovo
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kuwait" type="checkbox" name="field[265][]" value="Kuwait" />
                                            <span>
                                                <label htmlFor="field_265Kuwait">
                                                    Kuwait
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Kyrgyzstan" type="checkbox" name="field[265][]" value="Kyrgyzstan" />
                                            <span>
                                                <label htmlFor="field_265Kyrgyzstan">
                                                    Kyrgyzstan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Lao People&#039;s Democratic Republic" type="checkbox" name="field[265][]" value="Lao People&#039;s Democratic Republic" />
                                            <span>
                                                <label htmlFor="field_265Lao People&#039;s Democratic Republic">
                                                    Lao People&#039;s Democratic Republic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Latvia" type="checkbox" name="field[265][]" value="Latvia" />
                                            <span>
                                                <label htmlFor="field_265Latvia">
                                                    Latvia
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-3 col-xl-3">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Lebanon" type="checkbox" name="field[265][]" value="Lebanon" />
                                            <span>
                                                <label htmlFor="field_265Lebanon">
                                                    Lebanon
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Lesotho" type="checkbox" name="field[265][]" value="Lesotho" />
                                            <span>
                                                <label htmlFor="field_265Lesotho">
                                                    Lesotho
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Liberia" type="checkbox" name="field[265][]" value="Liberia" />
                                            <span>
                                                <label htmlFor="field_265Liberia">
                                                    Liberia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Libyan Arab Jamahiriya" type="checkbox" name="field[265][]" value="Libyan Arab Jamahiriya" />
                                            <span>
                                                <label htmlFor="field_265Libyan Arab Jamahiriya">
                                                    Libyan Arab Jamahiriya
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Liechtenstein" type="checkbox" name="field[265][]" value="Liechtenstein" />
                                            <span>
                                                <label htmlFor="field_265Liechtenstein">
                                                    Liechtenstein
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Lithuania" type="checkbox" name="field[265][]" value="Lithuania" />
                                            <span>
                                                <label htmlFor="field_265Lithuania">
                                                    Lithuania
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Luxembourg" type="checkbox" name="field[265][]" value="Luxembourg" />
                                            <span>
                                                <label htmlFor="field_265Luxembourg">
                                                    Luxembourg
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Macao" type="checkbox" name="field[265][]" value="Macao" />
                                            <span>
                                                <label htmlFor="field_265Macao">
                                                    Macao
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Macedonia, the Former Yugoslav Republic of" type="checkbox" name="field[265][]" value="Macedonia, the Former Yugoslav Republic of" />
                                            <span>
                                                <label htmlFor="field_265Macedonia, the Former Yugoslav Republic of">
                                                    Macedonia, the Former Yugoslav Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Madagascar" type="checkbox" name="field[265][]" value="Madagascar" />
                                            <span>
                                                <label htmlFor="field_265Madagascar">
                                                    Madagascar
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Malawi" type="checkbox" name="field[265][]" value="Malawi" />
                                            <span>
                                                <label htmlFor="field_265Malawi">
                                                    Malawi
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Malaysia" type="checkbox" name="field[265][]" value="Malaysia" />
                                            <span>
                                                <label htmlFor="field_265Malaysia">
                                                    Malaysia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Maldives" type="checkbox" name="field[265][]" value="Maldives" />
                                            <span>
                                                <label htmlFor="field_265Maldives">
                                                    Maldives
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mali" type="checkbox" name="field[265][]" value="Mali" />
                                            <span>
                                                <label htmlFor="field_265Mali">
                                                    Mali
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Malta" type="checkbox" name="field[265][]" value="Malta" />
                                            <span>
                                                <label htmlFor="field_265Malta">
                                                    Malta
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Marshall Islands" type="checkbox" name="field[265][]" value="Marshall Islands" />
                                            <span>
                                                <label htmlFor="field_265Marshall Islands">
                                                    Marshall Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Martinique" type="checkbox" name="field[265][]" value="Martinique" />
                                            <span>
                                                <label htmlFor="field_265Martinique">
                                                    Martinique
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mauritania" type="checkbox" name="field[265][]" value="Mauritania" />
                                            <span>
                                                <label htmlFor="field_265Mauritania">
                                                    Mauritania
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mauritius" type="checkbox" name="field[265][]" value="Mauritius" />
                                            <span>
                                                <label htmlFor="field_265Mauritius">
                                                    Mauritius
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mayotte" type="checkbox" name="field[265][]" value="Mayotte" />
                                            <span>
                                                <label htmlFor="field_265Mayotte">
                                                    Mayotte
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mexico" type="checkbox" name="field[265][]" value="Mexico" />
                                            <span>
                                                <label htmlFor="field_265Mexico">
                                                    Mexico
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Micronesia, Federated States of" type="checkbox" name="field[265][]" value="Micronesia, Federated States of" />
                                            <span>
                                                <label htmlFor="field_265Micronesia, Federated States of">
                                                    Micronesia, Federated States of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Moldova, Republic of" type="checkbox" name="field[265][]" value="Moldova, Republic of" />
                                            <span>
                                                <label htmlFor="field_265Moldova, Republic of">
                                                    Moldova, Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Monaco" type="checkbox" name="field[265][]" value="Monaco" />
                                            <span>
                                                <label htmlFor="field_265Monaco">
                                                    Monaco
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mongolia" type="checkbox" name="field[265][]" value="Mongolia" />
                                            <span>
                                                <label htmlFor="field_265Mongolia">
                                                    Mongolia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Montserrat" type="checkbox" name="field[265][]" value="Montserrat" />
                                            <span>
                                                <label htmlFor="field_265Montserrat">
                                                    Montserrat
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Morocco" type="checkbox" name="field[265][]" value="Morocco" />
                                            <span>
                                                <label htmlFor="field_265Morocco">
                                                    Morocco
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Mozambique" type="checkbox" name="field[265][]" value="Mozambique" />
                                            <span>
                                                <label htmlFor="field_265Mozambique">
                                                    Mozambique
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Myanmar" type="checkbox" name="field[265][]" value="Myanmar" />
                                            <span>
                                                <label htmlFor="field_265Myanmar">
                                                    Myanmar
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Namibia" type="checkbox" name="field[265][]" value="Namibia" />
                                            <span>
                                                <label htmlFor="field_265Namibia">
                                                    Namibia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Nauru" type="checkbox" name="field[265][]" value="Nauru" />
                                            <span>
                                                <label htmlFor="field_265Nauru">
                                                    Nauru
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Nepal" type="checkbox" name="field[265][]" value="Nepal" />
                                            <span>
                                                <label htmlFor="field_265Nepal">
                                                    Nepal
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Netherlands" type="checkbox" name="field[265][]" value="Netherlands" />
                                            <span>
                                                <label htmlFor="field_265Netherlands">
                                                    Netherlands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Netherlands Antilles" type="checkbox" name="field[265][]" value="Netherlands Antilles" />
                                            <span>
                                                <label htmlFor="field_265Netherlands Antilles">
                                                    Netherlands Antilles
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265New Caledonia" type="checkbox" name="field[265][]" value="New Caledonia" />
                                            <span>
                                                <label htmlFor="field_265New Caledonia">
                                                    New Caledonia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265New Zealand" type="checkbox" name="field[265][]" value="New Zealand" />
                                            <span>
                                                <label htmlFor="field_265New Zealand">
                                                    New Zealand
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Nicaragua" type="checkbox" name="field[265][]" value="Nicaragua" />
                                            <span>
                                                <label htmlFor="field_265Nicaragua">
                                                    Nicaragua
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Niger" type="checkbox" name="field[265][]" value="Niger" />
                                            <span>
                                                <label htmlFor="field_265Niger">
                                                    Niger
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Nigeria" type="checkbox" name="field[265][]" value="Nigeria" />
                                            <span>
                                                <label htmlFor="field_265Nigeria">
                                                    Nigeria
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Niue" type="checkbox" name="field[265][]" value="Niue" />
                                            <span>
                                                <label htmlFor="field_265Niue">
                                                    Niue
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Norfolk Island" type="checkbox" name="field[265][]" value="Norfolk Island" />
                                            <span>
                                                <label htmlFor="field_265Norfolk Island">
                                                    Norfolk Island
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Northern Mariana Islands" type="checkbox" name="field[265][]" value="Northern Mariana Islands" />
                                            <span>
                                                <label htmlFor="field_265Northern Mariana Islands">
                                                    Northern Mariana Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Norway" type="checkbox" name="field[265][]" value="Norway" />
                                            <span>
                                                <label htmlFor="field_265Norway">
                                                    Norway
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Oman" type="checkbox" name="field[265][]" value="Oman" />
                                            <span>
                                                <label htmlFor="field_265Oman">
                                                    Oman
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Pakistan" type="checkbox" name="field[265][]" value="Pakistan" />
                                            <span>
                                                <label htmlFor="field_265Pakistan">
                                                    Pakistan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Palau" type="checkbox" name="field[265][]" value="Palau" />
                                            <span>
                                                <label htmlFor="field_265Palau">
                                                    Palau
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Palestinian Territory, Occupied" type="checkbox" name="field[265][]" value="Palestinian Territory, Occupied" />
                                            <span>
                                                <label htmlFor="field_265Palestinian Territory, Occupied">
                                                    Palestinian Territory, Occupied
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Panama" type="checkbox" name="field[265][]" value="Panama" />
                                            <span>
                                                <label htmlFor="field_265Panama">
                                                    Panama
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Papua New Guinea" type="checkbox" name="field[265][]" value="Papua New Guinea" />
                                            <span>
                                                <label htmlFor="field_265Papua New Guinea">
                                                    Papua New Guinea
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Paraguay" type="checkbox" name="field[265][]" value="Paraguay" />
                                            <span>
                                                <label htmlFor="field_265Paraguay">
                                                    Paraguay
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Peru" type="checkbox" name="field[265][]" value="Peru" />
                                            <span>
                                                <label htmlFor="field_265Peru">
                                                    Peru
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Philippines" type="checkbox" name="field[265][]" value="Philippines" />
                                            <span>
                                                <label htmlFor="field_265Philippines">
                                                    Philippines
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Pitcairn" type="checkbox" name="field[265][]" value="Pitcairn" />
                                            <span>
                                                <label htmlFor="field_265Pitcairn">
                                                    Pitcairn
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Poland" type="checkbox" name="field[265][]" value="Poland" />
                                            <span>
                                                <label htmlFor="field_265Poland">
                                                    Poland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Portugal" type="checkbox" name="field[265][]" value="Portugal" />
                                            <span>
                                                <label htmlFor="field_265Portugal">
                                                    Portugal
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Puerto Rico" type="checkbox" name="field[265][]" value="Puerto Rico" />
                                            <span>
                                                <label htmlFor="field_265Puerto Rico">
                                                    Puerto Rico
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Qatar" type="checkbox" name="field[265][]" value="Qatar" />
                                            <span>
                                                <label htmlFor="field_265Qatar">
                                                    Qatar
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Reunion" type="checkbox" name="field[265][]" value="Reunion" />
                                            <span>
                                                <label htmlFor="field_265Reunion">
                                                    Reunion
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Romania" type="checkbox" name="field[265][]" value="Romania" />
                                            <span>
                                                <label htmlFor="field_265Romania">
                                                    Romania
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Russian Federation" type="checkbox" name="field[265][]" value="Russian Federation" />
                                            <span>
                                                <label htmlFor="field_265Russian Federation">
                                                    Russian Federation
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-group col-12 col-lg-3 col-xl-3">
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Rwanda" type="checkbox" name="field[265][]" value="Rwanda" />
                                            <span>
                                                <label htmlFor="field_265Rwanda">
                                                    Rwanda
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saint Helena" type="checkbox" name="field[265][]" value="Saint Helena" />
                                            <span>
                                                <label htmlFor="field_265Saint Helena">
                                                    Saint Helena
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saint Kitts and Nevis" type="checkbox" name="field[265][]" value="Saint Kitts and Nevis" />
                                            <span>
                                                <label htmlFor="field_265Saint Kitts and Nevis">
                                                    Saint Kitts and Nevis
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saint Lucia" type="checkbox" name="field[265][]" value="Saint Lucia" />
                                            <span>
                                                <label htmlFor="field_265Saint Lucia">
                                                    Saint Lucia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saint Pierre and Miquelon" type="checkbox" name="field[265][]" value="Saint Pierre and Miquelon" />
                                            <span>
                                                <label htmlFor="field_265Saint Pierre and Miquelon">
                                                    Saint Pierre and Miquelon
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saint Vincent and the Grenadines" type="checkbox" name="field[265][]" value="Saint Vincent and the Grenadines" />
                                            <span>
                                                <label htmlFor="field_265Saint Vincent and the Grenadines">
                                                    Saint Vincent and the Grenadines
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Samoa" type="checkbox" name="field[265][]" value="Samoa" />
                                            <span>
                                                <label htmlFor="field_265Samoa">
                                                    Samoa
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265San Marino" type="checkbox" name="field[265][]" value="San Marino" />
                                            <span>
                                                <label htmlFor="field_265San Marino">
                                                    San Marino
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Sao Tome and Principe" type="checkbox" name="field[265][]" value="Sao Tome and Principe" />
                                            <span>
                                                <label htmlFor="field_265Sao Tome and Principe">
                                                    Sao Tome and Principe
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Saudi Arabia" type="checkbox" name="field[265][]" value="Saudi Arabia" />
                                            <span>
                                                <label htmlFor="field_265Saudi Arabia">
                                                    Saudi Arabia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Senegal" type="checkbox" name="field[265][]" value="Senegal" />
                                            <span>
                                                <label htmlFor="field_265Senegal">
                                                    Senegal
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Serbia and Montenegro" type="checkbox" name="field[265][]" value="Serbia and Montenegro" />
                                            <span>
                                                <label htmlFor="field_265Serbia and Montenegro">
                                                    Serbia and Montenegro
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Seychelles" type="checkbox" name="field[265][]" value="Seychelles" />
                                            <span>
                                                <label htmlFor="field_265Seychelles">
                                                    Seychelles
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Sierra Leone" type="checkbox" name="field[265][]" value="Sierra Leone" />
                                            <span>
                                                <label htmlFor="field_265Sierra Leone">
                                                    Sierra Leone
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Singapore" type="checkbox" name="field[265][]" value="Singapore" />
                                            <span>
                                                <label htmlFor="field_265Singapore">
                                                    Singapore
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Slovakia" type="checkbox" name="field[265][]" value="Slovakia" />
                                            <span>
                                                <label htmlFor="field_265Slovakia">
                                                    Slovakia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Slovenia" type="checkbox" name="field[265][]" value="Slovenia" />
                                            <span>
                                                <label htmlFor="field_265Slovenia">
                                                    Slovenia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Solomon Islands" type="checkbox" name="field[265][]" value="Solomon Islands" />
                                            <span>
                                                <label htmlFor="field_265Solomon Islands">
                                                    Solomon Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Somalia" type="checkbox" name="field[265][]" value="Somalia" />
                                            <span>
                                                <label htmlFor="field_265Somalia">
                                                    Somalia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Somaliland" type="checkbox" name="field[265][]" value="Somaliland" />
                                            <span>
                                                <label htmlFor="field_265Somaliland">
                                                    Somaliland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265South Africa" type="checkbox" name="field[265][]" value="South Africa" />
                                            <span>
                                                <label htmlFor="field_265South Africa">
                                                    South Africa
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265South Georgia and the South Sandwich Islands" type="checkbox" name="field[265][]" value="South Georgia and the South Sandwich Islands" />
                                            <span>
                                                <label htmlFor="field_265South Georgia and the South Sandwich Islands">
                                                    South Georgia and the South Sandwich Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265South Sudan" type="checkbox" name="field[265][]" value="South Sudan" />
                                            <span>
                                                <label htmlFor="field_265South Sudan">
                                                    South Sudan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Spain" type="checkbox" name="field[265][]" value="Spain" />
                                            <span>
                                                <label htmlFor="field_265Spain">
                                                    Spain
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Sri Lanka" type="checkbox" name="field[265][]" value="Sri Lanka" />
                                            <span>
                                                <label htmlFor="field_265Sri Lanka">
                                                    Sri Lanka
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Sudan" type="checkbox" name="field[265][]" value="Sudan" />
                                            <span>
                                                <label htmlFor="field_265Sudan">
                                                    Sudan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Suriname" type="checkbox" name="field[265][]" value="Suriname" />
                                            <span>
                                                <label htmlFor="field_265Suriname">
                                                    Suriname
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Svalbard and Jan Mayen" type="checkbox" name="field[265][]" value="Svalbard and Jan Mayen" />
                                            <span>
                                                <label htmlFor="field_265Svalbard and Jan Mayen">
                                                    Svalbard and Jan Mayen
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Swaziland" type="checkbox" name="field[265][]" value="Swaziland" />
                                            <span>
                                                <label htmlFor="field_265Swaziland">
                                                    Swaziland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Sweden" type="checkbox" name="field[265][]" value="Sweden" />
                                            <span>
                                                <label htmlFor="field_265Sweden">
                                                    Sweden
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Switzerland" type="checkbox" name="field[265][]" value="Switzerland" />
                                            <span>
                                                <label htmlFor="field_265Switzerland">
                                                    Switzerland
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Syrian Arab Republic" type="checkbox" name="field[265][]" value="Syrian Arab Republic" />
                                            <span>
                                                <label htmlFor="field_265Syrian Arab Republic">
                                                    Syrian Arab Republic
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Taiwan, Province of China" type="checkbox" name="field[265][]" value="Taiwan, Province of China" />
                                            <span>
                                                <label htmlFor="field_265Taiwan, Province of China">
                                                    Taiwan, Province of China
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tajikistan" type="checkbox" name="field[265][]" value="Tajikistan" />
                                            <span>
                                                <label htmlFor="field_265Tajikistan">
                                                    Tajikistan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tanzania, United Republic of" type="checkbox" name="field[265][]" value="Tanzania, United Republic of" />
                                            <span>
                                                <label htmlFor="field_265Tanzania, United Republic of">
                                                    Tanzania, United Republic of
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Thailand" type="checkbox" name="field[265][]" value="Thailand" />
                                            <span>
                                                <label htmlFor="field_265Thailand">
                                                    Thailand
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Timor-Leste" type="checkbox" name="field[265][]" value="Timor-Leste" />
                                            <span>
                                                <label htmlFor="field_265Timor-Leste">
                                                    Timor-Leste
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Togo" type="checkbox" name="field[265][]" value="Togo" />
                                            <span>
                                                <label htmlFor="field_265Togo">
                                                    Togo
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tokelau" type="checkbox" name="field[265][]" value="Tokelau" />
                                            <span>
                                                <label htmlFor="field_265Tokelau">
                                                    Tokelau
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tonga" type="checkbox" name="field[265][]" value="Tonga" />
                                            <span>
                                                <label htmlFor="field_265Tonga">
                                                    Tonga
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Trinidad and Tobago" type="checkbox" name="field[265][]" value="Trinidad and Tobago" />
                                            <span>
                                                <label htmlFor="field_265Trinidad and Tobago">
                                                    Trinidad and Tobago
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tunisia" type="checkbox" name="field[265][]" value="Tunisia" />
                                            <span>
                                                <label htmlFor="field_265Tunisia">
                                                    Tunisia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Turkey" type="checkbox" name="field[265][]" value="Turkey" />
                                            <span>
                                                <label htmlFor="field_265Turkey">
                                                    Turkey
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Turkmenistan" type="checkbox" name="field[265][]" value="Turkmenistan" />
                                            <span>
                                                <label htmlFor="field_265Turkmenistan">
                                                    Turkmenistan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Turks and Caicos Islands" type="checkbox" name="field[265][]" value="Turks and Caicos Islands" />
                                            <span>
                                                <label htmlFor="field_265Turks and Caicos Islands">
                                                    Turks and Caicos Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Tuvalu" type="checkbox" name="field[265][]" value="Tuvalu" />
                                            <span>
                                                <label htmlFor="field_265Tuvalu">
                                                    Tuvalu
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Uganda" type="checkbox" name="field[265][]" value="Uganda" />
                                            <span>
                                                <label htmlFor="field_265Uganda">
                                                    Uganda
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Ukraine" type="checkbox" name="field[265][]" value="Ukraine" />
                                            <span>
                                                <label htmlFor="field_265Ukraine">
                                                    Ukraine
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265United Arab Emirates" type="checkbox" name="field[265][]" value="United Arab Emirates" />
                                            <span>
                                                <label htmlFor="field_265United Arab Emirates">
                                                    United Arab Emirates
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265United Kingdom" type="checkbox" name="field[265][]" value="United Kingdom" />
                                            <span>
                                                <label htmlFor="field_265United Kingdom">
                                                    United Kingdom
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265United States" type="checkbox" name="field[265][]" value="United States" />
                                            <span>
                                                <label htmlFor="field_265United States">
                                                    United States
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265United States Minor Outlying Islands" type="checkbox" name="field[265][]" value="United States Minor Outlying Islands" />
                                            <span>
                                                <label htmlFor="field_265United States Minor Outlying Islands">
                                                    United States Minor Outlying Islands
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Uruguay" type="checkbox" name="field[265][]" value="Uruguay" />
                                            <span>
                                                <label htmlFor="field_265Uruguay">
                                                    Uruguay
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Uzbekistan" type="checkbox" name="field[265][]" value="Uzbekistan" />
                                            <span>
                                                <label htmlFor="field_265Uzbekistan">
                                                    Uzbekistan
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Vanuatu" type="checkbox" name="field[265][]" value="Vanuatu" />
                                            <span>
                                                <label htmlFor="field_265Vanuatu">
                                                    Vanuatu
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Venezuela" type="checkbox" name="field[265][]" value="Venezuela" />
                                            <span>
                                                <label htmlFor="field_265Venezuela">
                                                    Venezuela
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Viet Nam" type="checkbox" name="field[265][]" value="Viet Nam" />
                                            <span>
                                                <label htmlFor="field_265Viet Nam">
                                                    Viet Nam
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Virgin Islands, British" type="checkbox" name="field[265][]" value="Virgin Islands, British" />
                                            <span>
                                                <label htmlFor="field_265Virgin Islands, British">
                                                    Virgin Islands, British
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Virgin Islands, U.S." type="checkbox" name="field[265][]" value="Virgin Islands, U.S." />
                                            <span>
                                                <label htmlFor="field_265Virgin Islands, U.S.">
                                                    Virgin Islands, U.S.
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Wallis and Futuna" type="checkbox" name="field[265][]" value="Wallis and Futuna" />
                                            <span>
                                                <label htmlFor="field_265Wallis and Futuna">
                                                    Wallis and Futuna
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Western Sahara" type="checkbox" name="field[265][]" value="Western Sahara" />
                                            <span>
                                                <label htmlFor="field_265Western Sahara">
                                                    Western Sahara
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Yemen" type="checkbox" name="field[265][]" value="Yemen" />
                                            <span>
                                                <label htmlFor="field_265Yemen">
                                                    Yemen
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Zambia" type="checkbox" name="field[265][]" value="Zambia" />
                                            <span>
                                                <label htmlFor="field_265Zambia">
                                                    Zambia
                                                </label>
                                            </span>
                                        </div>
                                        <div className="_row _checkbox-radio">
                                            <input id="field_265Zimbabwe" type="checkbox" name="field[265][]" value="Zimbabwe" />
                                            <span>
                                                <label htmlFor="field_265Zimbabwe">
                                                    Zimbabwe
                                                </label>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-12">
                                        <label htmlFor="startuplogo" className="form-label">
                                            Short Description: <span className="danger">*</span>
                                        </label>
                                        <textarea id="field[261]" className="description form-control" name="field[261]" placeholder="" required></textarea>
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
                                            id="_form_408_submit"
                                            type="submit"
                                            className="startup-btn mt-3"
                                        // onClick={(e) => {
                                        //   var trigger = (window as any).form_submit(e);
                                        //   if (trigger) {
                                        //     this.register();
                                        //   }
                                        // }}
                                        >
                                            <span>Submit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
