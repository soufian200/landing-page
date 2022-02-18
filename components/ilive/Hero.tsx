import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Container from "../ilive/Container";
import Navbar from "../ilive/Navbar";
import Select from "./Select";

const Hero = () => {







    return <section className={`
    bg-primary50

   
    `}>
        <Navbar />
        <Container>
            <div className={`relative `}>
                <div className={` 
                flex 
                flex-col-reverse
                pt-20
                
                lg:pt-0
                lg:flex-row
                
                
                `} >
                    <div className={`

                   

                    text-center

                    lg:text-left
                    lg:w-1/2 
                    lg:py-16

                    
                    `} >
                        <div className={`
                        text-5xl
                        
                        
                    md:text-6xl
                    lg:font-bold
                    lg:max-w-lg
                    lg:tracking
                    lg:leading-tight
                    lg:mb-8

                    xl:text-7xl

                    
                    `} >
                            <h1 className={`text-primary`} >Sell or Rent</h1>
                            <h1 className={`text-secondary700`} >Your Home At The Best Price</h1>
                        </div>
                        <p className={`
                        mt-4
                    
                        text-base
                    text-[#292C6D]
                    lg:max-w-sm
                    lg:mt-0;

                    xl:text-lg
                    xl:max-w-lg
                    `}>
                            There are many variations of passages of available, but the majority have suffered alteration in some form.
                            Getting know tomorrow for your sefl
                        </p>
                    </div>
                    <div className={`
                    hidden
                    
                    lg:block
                    lg:w-1/2 
                    
                    `} >
                        <div className={`pt-4 `} >
                            <Image
                                alt="building"
                                src="/building.png"
                                height={650}
                                width={595}
                            />
                        </div>
                    </div>
                </div>
                <div className={`
                 shadow-xl 
                 rounded-b-xl 
                 z-30 
                 mt-8

                 lg:mt-0
                 lg:absolute
                 lg:-bottom-10  
                 lg:w-4/5
                 `}>
                    <div className={`
                    bg-white 
                    p-6 
                    rounded-t-xl

                    lg:inline-block 
                    `}>
                        <div className={`flex`}>
                            {
                                ["Buy", "Sell", "Rent"].map((i, index) => <h1
                                    className={classNames(` rounded-xl cursor-pointer
                                ${index === 1 ? `bg-primary text-white ` : `text-slate-400 hover:text-primary`} 
                                font-bold py-2 px-8 mx-1`,
                                    )} >{i}</h1>)
                            }
                        </div>
                    </div>

                    <div className={`
                    flex 
                    flex-col
                    p-8
                    
                    lg:flex-row
                    lg:justify-evenly 
                    bg-white
                      lg:rounded-xl 
                      lg:rounded-tl-none


                    `}>
                        <div className={`
                         w-full
                         pb-3

                         lg:pb-0
                         lg:w-1/3
                         `} >
                            <Select
                                label="Location"
                                options={["One", "Tow",]}
                            />
                        </div>
                        <div className={` 
                        w-full
                        pb-3
                         
                         lg:pb-0
                         lg:w-1/3 
                         lg:px-5
                         `} >
                            <Select
                                label="Property Type"
                                options={["One", "Tow"]}
                            />
                        </div>
                        <div className={`
                         w-full
                         pb-3
                         
                         lg:pb-0
                         
                         lg:w-1/3
                        `} >
                            <Select
                                label="Max Price"
                                options={["$60,000", "$10,000"]}
                            />
                        </div>
                        <div className={` lg:ml-5 `}>
                            <button title="Search" className={`
                            w-full
                            flex
                            justify-center
                            items-center
                            

                            lg:w-auto
                            bg-primary
                            text-white 
                            hover:bg-primary700
                            p-3 
                            rounded-xl 
                            `}>
                                <AiOutlineSearch size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default Hero;