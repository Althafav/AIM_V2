import React from 'react';
import MenuComponent from './MenuComponent';
import FooterComponent from './FooterComponent';
import { useRouter } from 'next/router';
import SolidMenuComponent from './Portfolio/startup/SolidMenuComponent';


export default function LayoutComponent({ children }: any) {
    const router = useRouter();
    const isStartupRoute = router.pathname.startsWith('/startup');
    return (
        <React.Fragment>
            {isStartupRoute ? <SolidMenuComponent /> : <MenuComponent />}
            {children}
            <FooterComponent />
        </React.Fragment>
    )
}
