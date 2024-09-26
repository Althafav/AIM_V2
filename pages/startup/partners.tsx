import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { Startuppartnercontainer } from '@/models/startuppartnercontainer';
import { Startuppartners } from '@/models/startuppartners';
import { Startuppartnersitem } from '@/models/startuppartnersitem';
import Globals from '@/modules/Globals';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PartnersPage() {
    const [pageData, setPageData] = useState<Startuppartnercontainer | null>(null);
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

    useEffect(() => {
        const subscription = Globals.KontentClient.item("aim_startup_partners")
            .withParameter("depth", "2")
            .toObservable()
            .subscribe({
                next: (response: any) => {
                    setPageData(response.item);
                    setActiveCategoryId(response.item.items.value[0]?.system.id || null); 
                },
                error: (error: any) => console.error('API Error:', error),
            });

        return () => subscription.unsubscribe(); 
    }, []);

    if (!pageData) {
        return <SpinnerComponent />;
    }

    return (
        <div className='ourPartnersPage-wrapper portfolio-margin-top'>
            <div className="inner-banner-wrapper">
                <div className="container inner-banner-component">
                    <div className="row">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className='banner-heading'>Unlock Your Startup’s Potential</h1>
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
                        <div className="col-lg-6 d-flex align-items-center justify-content-lg-center d-none d-lg-flex">
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="starup-partners-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="partners-category-wrap menu-tabs">
                                {pageData.items.value.map((m: any, index: number) => {
                                    var category: Startuppartners = m;
                                    return (
                                        <li className="partners-category-li mb-4" key={`categories-${index}`}>
                                            <button
                                                id={category.system.id}
                                                className={`ctaegory-btn-all ${category.system.id === activeCategoryId ? "category-btn-active" : "category-btn"}`}
                                                onClick={() => setActiveCategoryId(category.system.id)}
                                            >
                                                {category.category_name.value}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    {pageData.items.value.map((m: any, index: number) => {
                        var category: Startuppartners = m;
                        return (
                            <div
                                key={`partner-category-${index}`}
                                className={`row partners mt-4 ${category.system.id === activeCategoryId ? "" : "d-none"}`}
                            >
                                {category.items.value.map((m: any, index: number) => {
                                    var partner: Startuppartnersitem = m;
                                    return (
                                        <div className="col-12 col-md-6 col-lg-3 partner-item-wrapper mb-3" key={partner.system.id}>
                                            <div className="partner-link">
                                                <div className="partner-bg-wrap text-center m-b-0" style={{ height: "100%" }}>
                                                    <img src={partner.image.value[0].url} alt={partner.name.value} style={{ height: "200px", objectFit: "contain" }} />
                                                    <p className="m-b-0 m-t-10" style={{ fontSize: "16px" }}><strong>{partner.name.value}</strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
