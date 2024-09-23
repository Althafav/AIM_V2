import { Basiccontentpage } from "@/models/basiccontentpage";
import Globals from "@/modules/Globals";
import Head from "next/head";
import React from "react";


export async function getStaticProps() {
  const datasourceStr: string = await Globals.KontentClient.item("cookies_policy")
    .languageParameter(Globals.CURRENT_LANG_CODENAME)
    .toObservable()
    .toPromise()
    .then((r: any) => {
      return JSON.stringify(r.item);
    });

  const data: Basiccontentpage = JSON.parse(datasourceStr);

  return {
    props: {
      data,
    },
    revalidate: 120,
  };
}

function ListPage({ data }: { data: Basiccontentpage }) {
  return (
    <React.Fragment>
      <Head>
        <title>{`${Globals.SITE_NAME} | ${data.pageTitle.value}`}</title>
        <meta name="title" content={data.metaTitle.value} />
        <meta name="description" content={data.metaDescription.value} />
        <meta name="keywords" content={data.metaTitle.value} />

        <meta property="og:title" content={data.metaTitle.value} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${Globals.BASE_URL}assets/imgs/aim-logo-thumbnail.png`} />
        <meta property="og:url" content={`${Globals.BASE_URL}cookies-policy`} />
        <meta name="twitter:card" content={`${Globals.BASE_URL}assets/imgs/aim-logo-thumbnail.png`} />

        <meta property="og:description" content={data.metaDescription.value} />
        <meta property="og:site_name" content={Globals.SITE_NAME} />
        <meta name="twitter:image:alt" content={data.metaTitle.value} />
        <link href={`${Globals.BASE_URL}cookies-policy`} rel='canonical' />
      </Head>

      <div className="privacy-policy-page ">
        <div className="inner-banner-section-wrapper">
          <img
          
            src="/assets/imgs/Gradient.png" alt="" className='banner-image' />

          <div className="inner-text-container">
            <h1 className='banner-heading'>{data.heading.value}</h1>
          </div>
        </div>

        <div className="container mt-5 mb-5">

          <span className="text-justify "
            dangerouslySetInnerHTML={{ __html: data.content.value }}
          />


        </div>

      </div>



    </React.Fragment>

  );

}

export default ListPage;
