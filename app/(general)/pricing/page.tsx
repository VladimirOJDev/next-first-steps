import { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ["Pricing page", "Vladimir", "Informacion", "..."]
};

export default function PricingPage(){
    return(
        <>
            <span className="text-7xl ">Pricing Page</span>
        </>
    )

}