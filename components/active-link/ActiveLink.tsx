'use client'

import Link from "next/link"
import {usePathname} from 'next/navigation'



interface props {
    path: string,
    text: string
}

export const ActiveLink= ({path, text}:props)=>{

    const pathname = usePathname();   
    console.log(pathname)
    
    const styles = {

        link: "hover:underline hover:text-blue-400  mr-2 transition-normal",
        active: "text-blue-500",

    };


    

    return(
        <Link  
            className={`${styles.link} ${(pathname === path) && styles.active}`}

            href={path}>{text}
        </Link> 
    )
}
