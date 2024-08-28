import SpinnerComponent from "@/components/UI/SpinnerComponent";
import { Partnerspageitem } from "@/models/partnerspageitem";
import Globals from "@/modules/Globals";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Helper from "@/modules/Helper"
import { motion } from "framer-motion";
import Link from "next/link";




interface SlugModel {
    slug: string;
}

export async function getStaticPaths() {
    const datasourceStr: string = await Globals.KontentClient.items()
        .type("partnerspageitem")
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.items);
        });

    const data: Array<Partnerspageitem> = JSON.parse(datasourceStr);
    const ids: string[] = data.map((item: Partnerspageitem) =>
        Helper.formatUrlParameter(item.name.value)
    );

    const paths = ids.map((slug) => ({ params: { slug } }));

    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const datasourceStr: string = await Globals.KontentClient.items()
        .type("partnerspageitem")
        .toObservable()
        .toPromise()
        .then((r: any) => {
            return JSON.stringify(r.items);
        });

    const data: Array<Partnerspageitem> = JSON.parse(datasourceStr);
    const { slug } = params as unknown as SlugModel;

    return {
        props: {
            data,
            slug,
        },
        revalidate: 120,
    };
};

function DetailPage({ data }: { data: Array<Partnerspageitem> }) {
    const router = useRouter();

    if (!data) {
        return <SpinnerComponent />;
    }

    const { slug } = router.query;
    if (data) {
        const searchData = data.find(
            (f: Partnerspageitem) => Helper.formatUrlParameter(f.name.value) === slug
        );
        if (searchData) {
            return (
                <React.Fragment>
                    <Head>
                        <title>{`${Globals.SITE_NAME} | ${searchData.pagetitle.value}`}</title>
                        <meta name="title" content={searchData.metatitle.value} />
                        <meta
                            name="description"
                            content={searchData.metadescription.value}
                        />
                        <meta name="keywords" content={searchData.metatitle.value} />

                        <meta property="og:title" content={searchData.metatitle.value} />
                        <meta property="og:type" content="article" />
                        <meta property="og:image" content={searchData.logo.value[0].url} />
                        <meta
                            property="og:url"
                            content={`${Globals.BASE_URL}partner/${slug}`}
                        />
                        <meta name="twitter:card" content={searchData.logo.value[0].url} />

                        <meta
                            property="og:description"
                            content={searchData.metadescription.value}
                        />
                        <meta property="og:site_name" content={Globals.SITE_NAME} />
                        <meta
                            name="twitter:image:alt"
                            content={searchData.metatitle.value}
                        />
                        <link href={`${Globals.BASE_URL}partner/${slug}`} rel="canonical" />
                    </Head>

                    <div className="inner-banner-section-wrapper">
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            src="/assets/imgs/postshow-banner-bg.jpg" alt="" className='banner-image' />

                        <div className="inner-text-container">
                            <h1 className='banner-heading'>{searchData.name.value}</h1>
                        </div>
                    </div>

                    <section className="container">
                        <div className="row mt-5">
                            <div className="col-lg-4 d-flex justify-content-center">
                                <img
                                    src={searchData.logo.value[0].url}
                                    alt={searchData.name.value}
                                    className="partner-logo"
                                />
                            </div>

                            <div className="col-lg-8 p-5">
                                <div
                                    className=""
                                    dangerouslySetInnerHTML={{
                                        __html: searchData.content.value,
                                    }}
                                />
                                <div className="mt-3">
                                    {searchData.website.value ? (
                                        <Link
                                            className=" text-primary bg-white"
                                            href={searchData.website.value}
                                            target="_blank"
                                        >
                                            <span>Visit Website</span>
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                </div>

                            </div>
                        </div>
                        {/* <div className="row article-banner m-t-50">
                            <div className="col-12 col-lg-3 col-xl-3">
                                <img
                                    src={searchData.logo.value[0].url}
                                    alt={searchData.name.value}
                                />
                            </div>
                            <div className="col-12 col-lg-9 col-xl-9 align-self-center">
                                <h1 className="article-title color-blue">
                                    {searchData.name.value}
                                </h1>
                                <div
                                    className="col-12 p-0"
                                    dangerouslySetInnerHTML={{
                                        __html: searchData.content.value,
                                    }}
                                />
                                {searchData.website.value ? (
                                    <a
                                        className="aim-link blue-link"
                                        href={searchData.website.value}
                                        target="_blank"
                                    >
                                        <span>Visit Website</span>
                                    </a>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div> */}
                    </section>

                </React.Fragment>
            );
        }
    }
}

export default DetailPage;
