import Image from "next/image";
import Container from "./Container"
import Heading from "./Heading";
import Caption from "./Caption";

const LatestHouses = () => {

    const properties = [
        {
            id: 1,
            title: "remaining Readable content of a page when looking at its layout. ",
            img: {
                alt: "poperty1",
                src: "/poperty1.png"
            },
            date: "05 Feb 2022",

        },
        {
            id: 2,
            title: "Lorem Ipsum has been the industry's standard dummy text.",
            img: {
                alt: "poperty2",
                src: "/poperty2.png"
            },
            date: "30 Jan 2022",

        },
        {
            id: 3,
            title: "The leap into electronic typesetting, remaining essentially unchanged.",
            img: {
                alt: "poperty3",
                src: "/poperty3.png"
            },
            date: "10 Jun 2022",
        },
        {
            id: 3,
            title: "Electronic typesetting, remaining essentially unchanged.",
            img: {
                alt: "poperty4",
                src: "/poperty4.png"
            },
            date: "22 Apr 2022",
        },

    ];


    return <section className={`py-0 lg:py-20 `}>
        <Container>
            <div>
                <div className={`flex
                flex-col
                lg:flex-row
                items-center justify-between`}>
                    <div className={`
            flex
            flex-col
            items-center
            text-center

            lg:items-start
            lg:text-left
            `} >
                        <Heading title="Latest House Information" />
                        <Caption txt={`There are passages of available, the majority have suffered alteration in some form.
            Getting know tomorrow for your sefl`} />
                    </div>
                    <button className={`mt-10 lg:mt-0 bg-primary hover:bg-primary700 px-20 py-4 rounded-xl font-bold text-white`}>Read More</button>
                </div>

                <div className={`
            pb-4
            lg:pb-20
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
                            return <div
                                key={index}
                                className={`
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
                                h-80
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
                                    <ul className={`text-slate-500 list-disc ml-5 mb-5 mt-2	`}  >
                                        <li>{item.date}</li>
                                    </ul>
                                    <h1 className={`
                                text-xl
                                text-secondary700
                                capitalize
                                `} >{item.title}</h1>

                                    <div className={`
                                    flex
                                    items-center
                                    
                                `} >
                                        <button className={`
                                    bg-primary50
                                    
                                    text-primary
                                    hover:bg-primary700
                                    hover:text-primary50

                                    mt-5
                                    
                                    text-sm
                                    font-bold
                                    w-full
                                    rounded-xl
                                    py-4
                                    
                                    
                                `} >Learn More</button>

                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </Container>
    </section>
}

export default LatestHouses