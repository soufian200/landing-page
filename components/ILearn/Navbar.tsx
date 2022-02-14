import Container from "../Container"
import Button from "./Button"
import Logo from "./Logo"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import cn from 'classnames'

const Navbar = () => {

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

    /**
     * Show & Hide Menu 
     */
    const toggleMenu = () => {
        if (opened) return setOpened(false)
        setOpened(true)
    }

    return <nav  >

        {/* mobile */}
        <div className={`
        bg-orange-100
        w-full 
        p-2
        z-50 
        fixed
        top-0 
        left-0 
        flex 
        justify-between 
        items-center
        lg:hidden
        border-b
        border-orange-200
           `
        }>
            <Logo size={0.8} />
            <div className={`bg-orange-200 p-2 rounded-2xl cursor-pointer `}
                onClick={toggleMenu}
            >
                {
                    opened
                        ? <AiOutlineClose size={34} />
                        : <AiOutlineMenu size={34} />
                }

            </div>
        </div>
        <Container>
            <div className={cn(`
            bg-orange-100
            z-40
            fixed
            top-0
            left-0
            w-screen
            h-screen
            pt-20
            px-3
            flex
            flex-col
            items-center
            transition
            duration-500
            transform
           ${opened ? `translate-x-0` : `-translate-x-full`}
           
            lg:transition-none
            lg:transform-none
            lg:p-0
            lg:w-auto
            lg:bg-transparent
            lg:static
            lg:h-auto
            lg:py-6 
            lg:flex-row
            lg:items-center
            lg:justify-between
            
            `)} >

                {/* xl */}
                <div className={`hidden lg:block`}>
                    <Logo />
                </div>
                <ul className={`lg:flex text-center mt-4 lg:mt-0`} >
                    {
                        links.map((link, index) => <li><a
                            className={`
                            text-2xl 
                            block 
                            transition 
                            hover:text-blue-700
                            font-bold 
                            text-slate-700 
                            my-6

                            lg:text-lg
                            lg:m-0
                            lg:mx-5
                           
                         
                            `}
                            href={`#${link.href}`}>{link.label}</a></li>)
                    }
                </ul>
                <div className={`
                mt-10
                flex
                flex-col
                w-full

                lg:m-0
                lg:flex-row
                lg:w-auto
                `} >
                    <Button label="Login" color="transparent" />
                    <Button label="Sign Up" />
                </div>
            </div>
        </Container>
    </nav>
}

export default Navbar