import { Speaker } from "@/models/speaker";
import Globals from "@/modules/Globals";
import Services from "@/modules/Services";
import conferenceSpeakerModel from "@/sysmodels/conferenceSpeakerModel";
import conferenceSpeakersModel from "@/sysmodels/conferenceSpeakersModel";
import axios from "axios";

import React from "react";


interface SpeakersCarouselProps {
    colorCode: string;
}

export default class SpeakersCarouselComponent extends React.Component<
    SpeakersCarouselProps,
    {
        HighLevelSpeakers: Array<conferenceSpeakersModel>;
        isLoaded: Boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            HighLevelSpeakers: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        axios
            .get(`${Globals.API_URL}SpeakersAPI/GetApprovedSpeakers`)
            .then((r: any) => {
                var data: Array<conferenceSpeakerModel> = r.data;
                this.setState({
                    isLoaded: true,
                });

                Services.loadFile(
                    `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
                    () => {
                        Services.loadFile(
                            `${Globals.BASE_URL}assets/js/speakerCarousel.js`
                        );
                    }
                );

                data.map((d: conferenceSpeakerModel) => {

                    var speaker: conferenceSpeakersModel = new conferenceSpeakersModel();
                    speaker.company = d.Company;
                    speaker.designation = d.Designation;
                    speaker.id = d.ItemID;
                    speaker.image = d.Image;
                    speaker.name = d.FirstName + " " + d.LastName;
                    speaker.high_level = d.HighLevel;
                    speaker.item_order = d.ItemOrder;

                    if (speaker.high_level) {
                        this.state.HighLevelSpeakers.push(speaker);
                    }
                })

            });

        Globals.KontentClient.items()
            .type("speaker")
            .toObservable()
            .toPromise()
            .then((r: any) => {
                r.items.map((s: any) => {
                    var d: Speaker = s;
                    if (d.image.value[0]) {

                        var speaker: conferenceSpeakersModel = new conferenceSpeakersModel();
                        speaker.company = d.company.value;
                        speaker.designation = d.designation.value;
                        speaker.id = d.system.id;
                        speaker.image = d.image.value[0].url;
                        speaker.name = d.name.value;
                        speaker.high_level = d.highlevel.value == 1 ? true : false;
                        speaker.item_order = d.itemorder.value;

                        if (speaker.high_level) {
                            this.state.HighLevelSpeakers.push(speaker);
                        }
                    }
                })
            });
    }



    render(): React.ReactNode {
        const { HighLevelSpeakers, isLoaded } = this.state;
        const { colorCode } = this.props

        if (!isLoaded) {
            return <React.Fragment />;
        }

        return HighLevelSpeakers.length > 0 ? (
            <div className="speaker-carousel-wrapper">
                <div className="container">



                    <div className="portfolio-speaker-carousel owl-carousel">
                        {HighLevelSpeakers.sort((a: any, b: any) => {
                            // Compare item_order first
                            if (a.item_order !== null && b.item_order !== null) {
                                // Both have non-null item_order, sort by item_order
                                if (a.item_order < b.item_order) {
                                    return -1;
                                } else if (a.item_order > b.item_order) {
                                    return 1;
                                } else {
                                    return 0;
                                }
                            }

                            // If only one of them has null item_order, the one with non-null comes first
                            if (a.item_order === null && b.item_order !== null) {
                                return 1;
                            }
                            if (b.item_order === null && a.item_order !== null) {
                                return -1;
                            }

                            // If both have null item_order, compare by name
                            const nameA = a.name.toUpperCase();
                            const nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            } else if (nameA > nameB) {
                                return 1;
                            } else {
                                return 0;
                            }
                        }).slice(0, 15).map((m: any, index: number) => {
                            var speaker: conferenceSpeakersModel = m;
                            if (speaker.image) {
                                return (

                                    <div className="card-speaker-item" key={`speakers-${index}`}>


                                        <img width={175} height={175} src={speaker.image} alt={speaker.name}
                                            className="speaker-image" />

                                        <div className="card-body-speaker">
                                            <p className="name" style={{ color: colorCode }}>{speaker.name}</p>

                                        </div>
                                    </div>

                                );
                            }
                        })}


                    </div>






                </div>
            </div>
        ) : (
            ""
        );
    }
}
