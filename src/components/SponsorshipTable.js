import React from 'react';

const sponsorshipData = [
    { tier: "Diamond", price: "€20,000", logoOnWebsite: true, logoOnSwag: true, jobListing: true, attendeeLinks: true, attendeeListAccess: true, logoOnVideos: true, expoBooth: true, premiumLogoPlacement: true, talkOrTutorial: true, topBilling: true, sessionPasses: 10, discountOnPasses: "25%" },
    { tier: "Platinum", price: "€15,000", logoOnWebsite: true, logoOnSwag: true, jobListing: true, attendeeLinks: true, attendeeListAccess: true, logoOnVideos: true, expoBooth: true, premiumLogoPlacement: true, talkOrTutorial: true, topBilling: true, sessionPasses: 5, discountOnPasses: "15%" },
    { tier: "Platinum-X", price: "€10,000", logoOnWebsite: true, logoOnSwag: true, jobListing: true, attendeeLinks: true, attendeeListAccess: true, logoOnVideos: true, expoBooth: false, premiumLogoPlacement: true, talkOrTutorial: true, topBilling: false, sessionPasses: 5, discountOnPasses: "" },
    { tier: "Gold", price: "€8,000", logoOnWebsite: true, logoOnSwag: true, jobListing: true, attendeeLinks: true, attendeeListAccess: true, logoOnVideos: true, expoBooth: true, premiumLogoPlacement: false, talkOrTutorial: false, topBilling: false, sessionPasses: 3, discountOnPasses: "" },
    { tier: "Silver", price: "€3,000", logoOnWebsite: true, logoOnSwag: true, jobListing: true, attendeeLinks: true, attendeeListAccess: true, logoOnVideos: true, expoBooth: false, premiumLogoPlacement: false, talkOrTutorial: false, topBilling: false, sessionPasses: 1, discountOnPasses: "" },
];

const features = [
    "Price", "Logo on Event Website and Sponsor Banner", "Logo on Event Swag", "Job Board Listing",
    "Links to Attendee Submitted LinkedIn/Resumes/Websites", "Access to Attendee List (Name, Email, Job Title, Company)",
    "Premium Logo Placement on Event Videos", "Expo Booth", "Premium Logo Placement", "Talk or Tutorial",
    "Top Billing", "General Session Passes", "Discount on Additional Passes"
];

// Mapping object to map feature names to property names
const featureMapping = {
    "Price": "price",
    "Logo on Event Website and Sponsor Banner": "logoOnWebsite",
    "Logo on Event Swag": "logoOnSwag",
    "Job Board Listing": "jobListing",
    "Links to Attendee Submitted LinkedIn/Resumes/Websites": "attendeeLinks",
    "Access to Attendee List (Name, Email, Job Title, Company)": "attendeeListAccess",
    "Premium Logo Placement on Event Videos": "logoOnVideos",
    "Expo Booth": "expoBooth",
    "Premium Logo Placement": "premiumLogoPlacement",
    "Talk or Tutorial": "talkOrTutorial",
    "Top Billing": "topBilling",
    "General Session Passes": "sessionPasses",
    "Discount on Additional Passes": "discountOnPasses"
};

const renderCell = (item, feature) => {
    const propertyName = featureMapping[feature];
    switch (feature) {
        case 'Price':
            return item.price;
        case 'General Session Passes':
            return item.sessionPasses;
        case 'Discount on Additional Passes':
            return item.discountOnPasses;
        default:
            return item[propertyName] ? "✔️" : "";
    }
};

const SponsorshipTable = () => {
    return (
        <div className="mx-auto max-w-6xl p-4 overflow-x-auto">
            <table className="table-auto w-full mx-auto px-4 text-xs text-left">
                <thead>
                    <tr>
                        <th className="p-2 border-r border-gray-300 text-left" style={{ borderBottom: '2px solid #ccc', padding: '10px' }}>Benefit</th>
                        {sponsorshipData.map((tier) => (
                            <th key={tier.tier} className="p-2 border-r border-gray-300 last:border-r-0 text-center" style={{ borderBottom: '2px solid #ccc', padding: '10px' }}>{tier.tier}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {features.map((feature, idx) => (
                        <tr key={idx} className="border-b last:border-b-0">
                            <th className="p-2 border-r border-gray-300 last:border-r-0 text-left truncate feature-cell">{feature}</th>
                            {sponsorshipData.map((item) => (
                                <td key={item.tier} className="border-r border-gray-300 last:border-r-0 text-center">{renderCell(item, feature)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default SponsorshipTable;