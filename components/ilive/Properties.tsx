import Container from "../ILearn/Container";
import { BiBed, BiBath } from "react-icons/bi"
import { GrLocation } from "react-icons/gr"
import Image from "next/image";
import Button from "./Button";
import Caption from "./Caption";

const Properties = () => {

    const properties = [
        {
            id: 1,
            title: "3 House Home 2000 sqft",
            img: {
                alt: "poperty1",
                src: "/poperty1.png"
            },
            price: 20000,
            bed: 5,
            bath: 3,
            location: 'Theodone Lowe Ap 876 Sit Rd. New York'
        },
        {
            id: 2,
            title: "5 House Home 3200 sqft",
            img: {
                alt: "poperty2",
                src: "/poperty2.png"
            },
            price: 20000,
            bed: 7,
            bath: 4,
            location: 'Theodone Lowe Ap 67 Sit Rd. New York'
        },
        {
            id: 3,
            title: "8 House Home 1200 sqft",
            img: {
                alt: "poperty3",
                src: "/poperty3.png"
            },
            price: 20000,
            bed: 6,
            bath: 5,
            location: 'Theodone Lowe Ap 155 Sit Rd. New York'
        },

    ];


    return <section className={`
    py-28
    px-3

    lg:py-48
    lg:px-0
    `} >
        <Container>
            <div>
                <div className={`
            flex
            flex-col
            items-center
            text-center
            `} >
                    <Button title="Latest Properties For Sale" />
                    <Caption txt={`There are passages of available, the majority have suffered alteration in some form.
            Getting know tomorrow for your sefl`} />
                </div>
                <div className={`
                            flex
                           mt-14
                           flex-col
                           items-center
                           flex-wrap
                          

                            lg:flex-row
                            lg:justify-evenly
                            lg:items-start

                        `}>
                    {
                        properties.map((item, index) => {
                            return <div className={`
                            w-80
                            bg-white
                            hover:shadow-xl
                            cursor-pointer
                            transition
                            border
                            rounded-3xl
                            overflow-hidden
                            mb-8

                            lg:mb-2
                        `}>
                                <div className={`
                                w-80
                                h-90
                                bg-slate-200
                                overflow-hidden
                                `}>
                                    <Image
                                        alt={item.img.alt}
                                        src={item.img.src}
                                        height={"100%"}
                                        width={"100%"}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={`
                                p-4
                                `} >
                                    <h1 className={`
                                text-xl
                                text-secondary700

                                `} >{item.title}</h1>
                                    <div className={`
                                    flex
                                    my-4
                                    justify-between
                                `}>
                                        <h1 className={`
                                                    flex
                                                    font-bold
                                                    text-2xl
                                                    text-cyan-500
                                                `} >${item.price}</h1>
                                        <div className={`
                                    flex
                                    items-center
                                    text-slate-500
                                `} >
                                            <BiBed size={20} />
                                            <p className={`ml-1`} >{item.bed} bed</p>
                                        </div>
                                        <div className={`
                                    flex
                                    items-center
                                    
                                    text-slate-500
                                `} >
                                            <BiBath size={20} />
                                            <p className={`ml-1`} >{item.bath} Bath</p>
                                        </div>
                                    </div>
                                    <div className={`
                                    flex
                                    items-center
                                    
                                `} >
                                        <button className={`
                                    bg-primary
                                    hover:bg-primary700
                                    text-white
                                    text-sm
                                    font-bold
                                    w-2/5
                                    rounded-xl
                                    py-2
                                    
                                    
                                `} >Book Now</button>
                                        <div className={`flex items-center w-4/5 ml-4  `} >
                                            <div className={`bg-slate-100 p-2 rounded-3xl border`}>
                                                <GrLocation size={25} />
                                            </div>
                                            <p className={`text-xs text-slate-500 ml-2`} >{item.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </Container>
    </section >
}

export default Properties;