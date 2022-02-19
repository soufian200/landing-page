import { useState } from "react"
import { CgMenuRight, CgClose } from "react-icons/cg"
import Container from "../ilive/Container"
import Logo from "./Logo"

const Navbar = () => {

    /**
    * Show & Hide Menu 
    */
    const toggleMenu = () => {
        if (opened) return setOpened(false)
        setOpened(true)
    }
    const [opened, setOpened] = useState(false)
    const links = [
        {
            label: "Home",
            href: "home"
        },
        {
            label: "Features",
            href: "features"
        },
        {
            label: "Pricing",
            href: "pricing"
        },
        {
            label: "About",
            href: "about"
        },
        {
            label: "Contact",
            href: "contact"
        },

    ]


    return <nav
        className={`pt-3`}
    >
        <Container>
            <div className="">
                <div className={`
                fixed
                z-[99]
                top-0
                left-0
                w-screen

                flex 
                justify-between 
                items-center 
                bg-white 
                px-5
                py-3
                border-b
                
                lg:hidden
                lg:py-0
                lg:border-none
                lg:bg-transparent
                `}>
                    <Logo />

                    <div className={` 
                    text-slate-600 
                    lg:hidden
                    cursor-pointer
                    `}
                        onClick={toggleMenu}
                    >
                        {
                            opened
                                ? <CgClose size={35} />
                                : <CgMenuRight size={35} />
                        }
                    </div>
                </div>

                <div
                    className={`

                    lg:bg-white
                    lg:static
                    lg:h-auto
                    lg:w-auto
                    lg:top-auto
                    lg:left-auto
                    lg:flex
                    lg:items-center
                    lg:justify-between
                    lg:rounded-xl
                    lg:shadow-md
                    lg:shadow-[#eee]
                    lg:px-5

                    `}
                >
                    <Logo />

                    <div className={`
                     fixed
                     z-50
                     w-screen
                     h-screen
                     top-0
                     left-0
                     mt-14

                bg-white
                py-2
                shadow-slate-400
                transition
                duration-500
                transform
                border-r
                ${opened ? `translate-x-0  ` : `-translate-x-full`}

                lg:mt-0
                lg:static
                lg:w-auto
                lg:h-auto
                lg:transition-none
                lg:transform-none
                lg:flex
                lg:items-center
                lg:border-none
                lg:bg-transparent
                `} >

                        <ul className={`
                       


                    flex
                    flex-col
                    items-center
                    my-6

                    lg:flex-row
                    lg:m-0
                    lg:mr-10

                    xl:mr-20
                    
                    `} >
                            {
                                links.map((link, index) => {
                                    return <li
                                        key={index}
                                    >
                                        <a href={`#${link.href}`}
                                            className={`
                                        block
                                        my-5
                                        text-2xl
                                        text-slate-800

                                        lg:text-lg
                                        lg:my-0
                                        lg:mx-6
                                        lg:transition
                                        lg:hover:text-primary

                                        xl:mx-8
                                    `}
                                        >{link.label}</a>
                                    </li>
                                })
                            }
                        </ul>
                        <div className="text-center lg:text-current" >
                            <button className={`
                        bg-primary
                        px-20
                        py-5
                        rounded-xl
                        font-bold
                        text-xl
                        text-white

                        lg:w-auto
                        lg:px-14
                        lg:py-4
                        lg:text-base

                        xl:px-20
                        transition
                        hover:bg-red-600
                        
                        `}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </nav>
}
export default Navbar