import { Metadata } from "next";
import AboutLayout from '../layout';


export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords: ["Contac page", "Vladimir", "Informacion", "..."]
};


export default function ContacPage(){
    return(
        <>
            <span className="text-7xl">Contac Page</span>
           
        </>
    )

}