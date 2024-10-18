import { Sponsorspage } from "@/models/sponsorspage";
import Globals from "@/modules/Globals";
import Services from "@/modules/Services";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export default class HomeSponsorsComponent extends React.Component<
  {},
  {
    sectionData: Sponsorspage;
    isLoaded: Boolean;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      sectionData: new Sponsorspage(),
      isLoaded: false,
    };
  }

  componentDidMount() {
    Globals.KontentClient.item("sponsors_page_2024")
      .toObservable()
      .subscribe((response: any) => {
        this.setState({
          sectionData: response.item,

        });
        Services.loadFile(
          `${Globals.BASE_URL}assets/js/owl.carousel.min.js`,
          () => {
            Services.loadFile(
              `${Globals.BASE_URL}assets/js/sponsorsCarousel.js`, () => {
                this.setState({
                  isLoaded: true

                });
              }
            );
          }
        );
      });
  }

  render(): React.ReactNode {
    const { sectionData, isLoaded } = this.state;

    var formatName = "";

    if (!isLoaded) {
      return <React.Fragment />;
    }

    return (
      <div className="home-sponsors-wrapper mb-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-heading mb-4">
                {sectionData.homePageTitle.value}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="home-sponsors-carousel owl-carousel">
                {sectionData.sponsors.value.map(
                  (i, index) => (
                    (formatName = i.system.id),
                    (
                      <div className="home-sponsor" key={index}>

                        <div className="image-wrapper">
                          <Image
                            src={i.logo.value[0].url}
                            title={i.name.value}
                            alt={i.logo.value[0].name}
                            width={290}
                            height={160}
                          />
                        </div>
                        <div className="sponsor-detail">
                          <p className="name">{i.name.value}</p>
                          <p className="type">{i.sponsorType?.value}</p>
                        </div>

                      </div>
                    )
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
