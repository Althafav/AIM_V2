import { Homepage } from '@/models/homepage'
import React from 'react'

interface PageDataProps {
    pageData: Homepage | null
}

const SustainbleSecComponent: React.FC<PageDataProps> = ({ pageData }) => {
    const word1 = `AIM Congress, one of the world’s foremost investment platforms, is deeply committed to harnessing Corporate Social Responsibility (CSR) to drive significant positive outcomes in climate action and sustainable development. From March 20, 2020, to March 19, 2025, AIM Congress has been at the forefront of implementing transformative initiatives that align with societal values and promote environmental stewardship. One of the standout projects under this commitment focuses on providing safe water to hundreds of households in the Central Province of Zambia. `
    const word2 = `AIM Congress’s CSR efforts extend beyond addressing immediate needs; they are integral to fostering long-term, sustainable development. By tackling both environmental and community challenges, AIM Congress’s projects create enduring benefits for local populations while advancing broader climate goals. This holistic approach exemplifies AIM Congress’s dedication to making a meaningful impact through responsible and forward-thinking practices, reflecting a deep commitment to creating a more sustainable and equitable world for future generations. `
    return (
        <section className='sustainable-section-wrapper ' style={{
            backgroundImage: `url('/assets/imgs/sustainable-bg.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>

            <div className="container">
                <div className="row g-2">
                    <div className="col-lg-4 ">
                        <div className="left-section">
                            <h1 className='section-heading--sustainable'>
                                {pageData?.sustainableheading.value}</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="right-section">
                            <p className='paragraph' dangerouslySetInnerHTML={{ __html: pageData ? pageData.sustainablecontent1.value : '' }} />
                            <img src={pageData?.sustainableimage.value[0].url} alt="Aim congress Sustainable Development" className='mt-3 mb-3 w-100 cover' />
                            <p className='paragraph' dangerouslySetInnerHTML={{ __html: pageData ? pageData.sustainablecontent1.value : '' }} />
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}


export default SustainbleSecComponent;