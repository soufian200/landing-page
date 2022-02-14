import React from "react"
import Container from "../Container"
import Button from "./Button"
import Navbar from "./Navbar"
import Image from "next/image"


const Hero = () => {
    return <section className={`bg-orange-100`}>
        <Navbar />
        <Container>
            <div className={` w-full flex flex-col-reverse lg:flex-row pt-24 lg:p-0 lg:pt-20`} >
                <div className={`
                   w-full
                    flex
                    flex-col
                    items-center
                    p-5

                    lg:block
                    lg:w-2/5 
                    lg:p-0
                    lg:flex-row
                    lg:items-start
                     `}>
                    <h1 className={` text-sm font-bold`} >Book Your Course Now 🎓💥 </h1>
                    <h1 className={` text-5xl font-bold mt-5 mb-14 text-center sm:text-6xl lg:text-left lg:text-7xl`} >A Great Place To Learn What You Want</h1>
                    <p className={`max-w-sm text-slate-500 mb-10 text-xl text-center lg:text-left`} >
                        A best and cheapest way of getting know learning to make a better tomorrow for your sefl
                    </p>
                    <div className={`md:mb-5`}>
                        <Button label="Get Started" px="px-20" />
                    </div>
                </div>
                <div className={`
                bg-red-40
                w-full
               
                flex 
                lg:w-3/5  
                justify-center 
                items-center 
                
                `}>
                    <Image
                        alt="young student"
                        src="/young-student.png"
                        width={760}
                        height={580}
                    />
                </div>
            </div>
        </Container>
    </section>
}

export default Hero