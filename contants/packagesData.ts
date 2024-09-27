
interface Portfolio {
    id: number;
    portfolioName: string;
    price: string;
    colorCode: string;
    features: string[]; // Array of strings
}

interface Features {
    name: string;
    logo: string;
}

interface Package {
    id: number;
    name: string;
    price: string;
    portfolio: Portfolio[]
    features: string[]; // Array of strings
}

export const Packages: Package[] = [
    {
        id: 1,
        name: 'Single Portfolio',
        price: '',
        portfolio: [
            {
                id: 1,
                portfolioName: 'Foreign Direct Investment',
                price: '$1,999',
                colorCode: '#FF2C28',
                features: ['Grand Opening Ceremony', 'FDI Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 2,
                portfolioName: 'Global Trade',
                price: '$999',
                colorCode: '#FFC42C',
                features: ['Grand Opening Ceremony', 'Global Trade Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 3,
                portfolioName: 'Global Manufacturing',
                price: '$999',
                colorCode: '#12BCD4',
                features: ['Grand Opening Ceremony', 'Global Manufacturing Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 4,
                portfolioName: 'Future Finance',
                price: '$999',
                colorCode: '#7428F4',
                features: ['Grand Opening Ceremony', 'Future Finance Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 5,
                portfolioName: 'Future Cities',
                price: '$999',
                colorCode: '#00C753',
                features: ['Grand Opening Ceremony', 'Future Cities Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 6,
                portfolioName: 'Entrepreneurs',
                price: '$999',
                colorCode: '#00D5BA',
                features: ['Grand Opening Ceremony', 'Entrepreneurs Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 7,
                portfolioName: 'Startups & Unicorns',
                price: '$999',
                colorCode: '#FF8521',
                features: ['Grand Opening Ceremony', 'Startups & Unicorns Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 8,
                portfolioName: 'Digital Economy',
                price: '$999',
                colorCode: '#328350',
                features: ['Grand Opening Ceremony', 'Global Trade Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },
        ],
        features: [],

    },
    {
        id: 2,
        name: 'Multi-Portfolio ',
        price: '$2,999',
        portfolio: [],
        features: ['Grand Opening Ceremony', 'FDI Conference Track', 'Global Trade Conference Track', 'Global Manufacturing Conference Track', 'Future Finance Conference Track', 'Future Cities Conference Track', 'Entrepreneurs Conference Track', 'Startups & Unicorns Conference Track', 'Digital Economy Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',],

    },
    {   
        id: 3,
        name: 'Premium VIP ',
        price: '$3,999',
        portfolio: [],
        features: ['Pre-Conference Workshops', 'FDI Conference Track', 'Global Trade Conference Track', 'Global Manufacturing Conference Track', 'Future Finance Conference Track', 'Future Cities Conference Track', 'Entrepreneurs Conference Track', 'Startups & Unicorns Conference Track', 'Digital Economy Conference Track', 'Grand Opening Ceremony', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony', 'Fast Track Registration and Badge Collection Counter', 'Access to Private Meeting Room (subject to availability)', 'Dedicated Seating Area (Opening & Closing Ceremony)', 'Access to Recorded Videos (AIM Sessions) Post Event', 'VIP Lunch', 'Gold Lounge', 'Membership to AIM Global Foundation'],

    },
];

export const featureSet = [
    'Grand Opening Ceremony', 'FDI Conference Track', 'Global Trade Conference Track', 'Global Manufacturing Conference Track', 'Future Finance Conference Track', 'Future Cities Conference Track', 'Entrepreneurs Conference Track', 'Startups & Unicorns Conference Track', 'Digital Economy Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony', 'Pre-Conference Workshops', 'Fast Track Registration and Badge Collection Counter', 'Access to Private Meeting Room (subject to availability)', 'Dedicated Seating Area (Opening & Closing Ceremony)', 'Access to Recorded Videos (AIM Sessions) Post Event', 'VIP Lunch', 'Gold Lounge', 'Membership to AIM Global Foundation'
];




// packages-3 




export const Packages3: Package[] = [
    {
        id: 1,
        name: 'Single Portfolio',
        price: '',
        portfolio: [
            {
                id: 1,
                portfolioName: 'Foreign Direct Investment',
                price: '$1,999',
                colorCode: '#FF2C28',
                features: ['Grand Opening Ceremony', 'FDI Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 2,
                portfolioName: 'Global Trade',
                price: '$999',
                colorCode: '#FFC42C',
                features: ['Grand Opening Ceremony', 'Global Trade Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 3,
                portfolioName: 'Global Manufacturing',
                price: '$999',
                colorCode: '#12BCD4',
                features: ['Grand Opening Ceremony', 'Global Manufacturing Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 4,
                portfolioName: 'Future Finance',
                price: '$999',
                colorCode: '#7428F4',
                features: ['Grand Opening Ceremony', 'Future Finance Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 5,
                portfolioName: 'Future Cities',
                price: '$999',
                colorCode: '#00C753',
                features: ['Grand Opening Ceremony', 'Future Cities Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 6,
                portfolioName: 'Entrepreneurs',
                price: '$999',
                colorCode: '#00D5BA',
                features: ['Grand Opening Ceremony', 'Entrepreneurs Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 7,
                portfolioName: 'Startups & Unicorns',
                price: '$999',
                colorCode: '#FF8521',
                features: ['Grand Opening Ceremony', 'Startups & Unicorns Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },

            {
                id: 8,
                portfolioName: 'Digital Economy',
                price: '$999',
                colorCode: '#328350',
                features: ['Grand Opening Ceremony', 'Global Trade Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',]
            },
        ],
        features: [],

    },
    {
        id: 2,
        name: 'Multi-Portfolio ',
        price: '$2,999',
        portfolio: [],
        features: ['Grand Opening Ceremony', 'All Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony',],

    },
    {
        id: 3,
        name: 'Premium VIP ',
        price: '$3,999',
        portfolio: [],
        features: ['Pre-Conference Workshops', 'Multi-Portfolio Pass', 'Fast Track Registration and Badge Collection Counter', 'Access to Private Meeting Room (subject to availability)', 'Dedicated Seating Area (Opening & Closing Ceremony)', 'Access to Recorded Videos (AIM Sessions) Post Event', 'VIP Lunch', 'Gold Lounge', 'Membership to AIM Global Foundation'],

    },
];

export const featureSet3 = [
    'Grand Opening Ceremony', 'FDI Conference Track', 'Global Trade Conference Track', 'Global Manufacturing Conference Track', 'Future Finance Conference Track', 'Future Cities Conference Track', 'Entrepreneurs Conference Track', 'Startups & Unicorns Conference Track', 'Digital Economy Conference Track', 'Exhibition', 'Investment Destination', 'AIM Networking App', 'Delegates Lunch', 'B2B Lounge', 'Side Events', 'Closing Ceremony', 'Pre-Conference Workshops', 'Fast Track Registration and Badge Collection Counter', 'Access to Private Meeting Room (subject to availability)', 'Dedicated Seating Area (Opening & Closing Ceremony)', 'Access to Recorded Videos (AIM Sessions) Post Event', 'VIP Lunch', 'Gold Lounge', 'Membership to AIM Global Foundation'
];

