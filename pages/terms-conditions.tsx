import SpinnerComponent from "@/components/UI/SpinnerComponent";
import { Basiccontentpage } from "@/models/basiccontentpage";
import Globals from "@/modules/Globals";
import Head from "next/head";
import React from "react";



export default class AboutComponent extends React.Component<
    {},
    {
        pageData: Basiccontentpage;
        isLoaded: boolean;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            pageData: new Basiccontentpage(),
            isLoaded: false
        };
    }

    componentDidMount() {
        Globals.KontentClient.item("terms_and_conditions")
            .toObservable()
            .subscribe((response: any) => {
                this.setState({
                    pageData: response.item,
                    isLoaded: true,
                });
            });

    }
    render(): React.ReactNode {
        const { pageData, isLoaded } = this.state;

        if (!isLoaded) {
            return <SpinnerComponent />
        }

        return (
            <React.Fragment>
                <Head>
                    <title>{`${Globals.SITE_NAME} | ${pageData.pageTitle.value}`}</title>
                    <meta name="title" content={pageData.metaTitle.value} />
                    <meta
                        name="description"
                        content={pageData.metaDescription.value}
                    />
                </Head>


                <div className="privacy-policy-page ">
                    <div className="inner-banner-section-wrapper">
                        <img
                            
                            src="/assets/imgs/Gradient.png" alt="" className='banner-image' />

                        <div className="inner-text-container">
                            <h1 className='banner-heading'>{pageData.heading.value}</h1>
                        </div>
                    </div>

                    <div className="container mt-5 mb-5">

                        <span className="text-justify "
                            dangerouslySetInnerHTML={{ __html: pageData.content.value }}
                        />


                    </div>

                </div>



            </React.Fragment>
        );
    }
}
