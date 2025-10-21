import Link from "next/link"
import { HomeIcon } from "@primer/octicons-react"
import { ActiveLink } from "../active-link/ActiveLink"

const navItems = [
    {path: '/about', text:'About' },
    {path: '/pricing', text:'Pricing' },
    {path: '/contac', text:'Contac' }

]

export const Navbar = ()=>{
    return(
        <nav className="flex bg-blue-800 opacity-40 p-2 m-2 rounded">
            
            <Link href={'/'} className="flex items-center ">
                <HomeIcon className="mr-2"/>
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>
            {
                navItems.map(navItem => (
                    <ActiveLink
                        key={navItem.path}
                        path={navItem.path}
                        text={navItem.text}
                        // o en ves de path={navItem.path} y text={navItem.text}
                        //se pone {...navItem}  se asegura automaticamente que tenga lo que se debe pasar
                    />
                ))
            }

        </nav>
    )
}
