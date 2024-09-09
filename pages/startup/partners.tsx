import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Startuppartnercontainer } from '@/models/startuppartnercontainer';
import { Startuppartners } from '@/models/startuppartners';
import { Startuppartnersbanneritem } from '@/models/startuppartnersbanneritem';
import { Startuppartnersitem } from '@/models/startuppartnersitem';
import Globals from '@/modules/Globals';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function PartnersPage() {

    const [pageData, setPageData] = useState<Startuppartnercontainer | null>(null);

    useEffect(() => {
        Globals.KontentClient.item("aim_startup_partners")
            .withParameter("depth", "2")
            .toObservable()
            .subscribe((response: any) => {
                console.log('API Response:', response);
                setPageData(response.item);
            });
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }
    return (
        <div>

            <div className='ourPartnersPage-wrapper portfolio-margin-top'>
                <div className="inner-banner-wrapper">

                    <div className="container inner-banner-component">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className='banner-heading'>Unlock Your
                                            Startup’s Potential</h1>
                                    </div>

                                    <div className="col-12">
                                        <h2 className='subBannerHeading'>Register for Our Exclusive Event Today!</h2>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <Link href="/startup/partner-register">
                                            <button className="startup-btn">Become a Partner</button>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="starup-partners-wrapper">
                    <div className="container">

                        <div className="row">
                            <div className="col-12">
                                <ul className="partners-category-wrap">
                                    {pageData.items.value.map((c: any, index) => {

                                        let category: Startuppartners = c;
                                        return (
                                            <li className="partners-category-li" key={category.system.id}>
                                                <a id={category.system.id} className={`${index == 0 ? "category-btn-active" : "category-btn"} ctaegory-btn-all`} href="javascript:0"
                                                    onClick={() => {
                                                        $(".ctaegory-btn-all").removeClass("category-btn-active");
                                                        $(".ctaegory-btn-all").addClass("category-btn");
                                                        $("#" + category.system.id).addClass("category-btn-active");

                                                        $(".partners").addClass("d-none");
                                                        $("#" + category.system.codename).removeClass("d-none");
                                                    }}
                                                >
                                                    {category.category_name.value}
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>


                        {pageData.items.value.map((c: any, index: number) => {
                            let category: Startuppartners = c;
                            return (
                                <div className={`${index == 0 ? "" : "d-none"} row partners`} id={category.system.codename} key={`partner-category-${index}`}>
                                    {
                                        category.items.value.map((p: any, index: number) => {
                                            let partner: Startuppartnersitem = p;
                                            return (
                                                <div className="col-12 col-md-2 partner-item-wrapper mb-3" key={`partner-item-${index}`}>
                                                    {/* <a className="partner-link" href={Helper.formatLink(partner.websiteLink.value)}> */}
                                                    <a className="partner-link" href="javascript:0" style={{ color: "#333" }}
                                                        onClick={(e) => {
                                                            $("#popupImage").attr("src", partner.image.value[0].url);
                                                            $("#popupName").html(partner.name.value);
                                                            $("#popupContent").html(partner.content.value);

                                                            if (partner.websiteLink.value) {
                                                                $("#popupBtn").attr("href", partner.websiteLink.value);
                                                                $("#popupBtn").removeClass("d-none");
                                                            }
                                                            else {
                                                                $("#popupBtn").addClass("d-none");
                                                            }
                                                            $("#detailPopup").removeClass("d-none");
                                                        }}
                                                    >
                                                        <div className="partner-bg-wrap text-center m-b-0" style={{ height: "100%" }}>
                                                            <div className="partner-bg" style={{ background: "url(" + partner.image.value[0].url + ")" }}>
                                                            </div>

                                                            <p className="m-b-0 m-t-10" style={{ fontSize: "16px" }}><strong>{partner.name.value}</strong></p>
                                                        </div>
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
