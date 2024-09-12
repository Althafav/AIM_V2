import InvestorComponent from '@/components/Portfolio/startup/InvestorComponent';
import SpinnerComponent from '@/components/UI/SpinnerComponent';
import { StartupInvestorEligibilityCriteria } from '@/contants/startupData';
import { Aimstartupinvestorpage } from '@/models/aimstartupinvestorpage';
import Globals from '@/modules/Globals';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function AllInvestorPage() {
    const [selectedTab, setSelectedTab] = useState<number>(1);
    const [pageData, setPageData] = useState<Aimstartupinvestorpage | null>(null);


    const selectedCategory = StartupInvestorEligibilityCriteria.find(category => category.id === selectedTab);



    useEffect(() => {
        Globals.KontentClient.item("aim_startup_investor_page")
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
        <div className='allInvestorPage-wrapper'>
            <div className="allInvestor-banner-wrapper">
                <Link href="/startup/investor-register">
                    <img src="/assets/imgs/Investor Landing Image.jpg" alt="" className='allInvestor-landingBannerImage' />

                </Link>

            </div>



            <section>
                <div className="container">
                    <h3 className='startup-section-heading  '>Eligibility Criteria</h3>
                    <ul className="criteria-nav-tab mt-4">
                        {StartupInvestorEligibilityCriteria.map(category => (
                            <li className="nav-item" key={category.id}>
                                <button
                                    className={`nav-link ${selectedTab === category.id ? 'active' : ''}`}
                                    onClick={() => setSelectedTab(category.id)}
                                >
                                    {category.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="tab-content mt-4">

                        <div className="container row ">
                            {selectedCategory?.items.map((item: any, index: number) => {
                                return (
                                    <div className="col-lg-4 col-md-6 mb-3" key={`criteria-item-${index}`}>
                                        <div className='criteria-item-card h-100'>
                                            <img src={item.img} alt={item.name} style={{ width: '60px', marginRight: '10px', objectFit: "contain" }} />
                                            <span className='name'>{item.name}</span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                </div>
            </section>

            <section className='investors-wrapper'>
                <div className="container">
                    <h3 className='startup-section-heading'>Our Angel Investors</h3>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className='description mt-3'> Last year&apos;s event brought together an extraordinary lineup of speakers who captivated and inspired our audience. Each presenter shared unique insights and groundbreaking ideas that shaped the discourse in their respective fields. Explore the highlights from these transformative talks and discover the voices that made a lasting impact.</p>
                        </div>
                        <div className="col-lg-4">
                            <Link href="/startup/investor-register">
                                <button className='startup-btn mt-4'>Become a Partner</button>
                            </Link>
                        </div>
                    </div>


                    <InvestorComponent />
                </div>
            </section>
        </div>
    )
}
