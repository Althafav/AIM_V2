import Head from "next/head";
import React from "react";

export default function SuccessComponent() {
    const text1 = "We have successfully received your information. Our team is currently reviewing your details and will take the necessary actions promptly."
    const text2 = "Should you have any questions or require further clarification, please don't hesitate to reach out to us through our contact page. "
    const text3 = "We appreciate your interest and engagement with AIM Congress 2024. Stay tuned for more updates and information here on our website and social media."
    return (
        <p>
            Thank you for your submission! <br />
            <br />
            {text1}
            <br />
            {text2}
            <br /><br />
            {text3}<br /><br />
            <a href="https://www.aimcongress.com">
                <img height="70" src="https://content.app-us1.com/bbax1/2023/08/25/8069970c-346d-4483-9598-21667d633740.png" /></a> <br />
            <a target="_blank" href="https://www.facebook.com/AIMCongress">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/b419be3b-b048-4565-8470-ff12681787f5.png" /></a>
            <a target="_blank" href="https://www.linkedin.com/company/annual-investment-meeting-organizing-committee">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/2a7c14fd-23f8-4ffc-bb09-214dbbb6a3a9.png" /></a>
            <a target="_blank" href="https://twitter.com/AIM_Congress" >
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/fc25405f-b350-44c9-9d44-b5bdd73f79a0.png" /></a>
            <a target="_blank" href="https://www.instagram.com/aimcongress/" >
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/05eb9aac-595e-4f25-b6d3-01a508fedb49.png" /></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCadY9LyzHix4k-gWeEcduDQ/feed">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/3680af52-0809-45a5-b207-5fbe2ebcc3dc.png" /></a>
            <a target="_blank" href="https://www.tiktok.com/@aimcongress?_t=8fFEgO4WxtA&_r=1">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/4e893e5d-d547-4c37-be8e-94c13b0fb193.png" /></a>
            <a target="_blank" href="https://t.snapchat.com/4NnxKNW6">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/1550e006-f681-4bd9-b349-75b3e5bb580c.png" /></a>
            <a target="_blank" href="https://www.threads.net/@aimcongress">
                <img height="25" className="d-inline m-r-10" src="https://content.app-us1.com/bbax1/2023/08/31/e43ccd6b-df6a-48d5-bc63-1a7351eced2c.png" /></a>

            <br />
        </p>
    );
}
