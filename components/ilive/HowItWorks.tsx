import Caption from "./Caption";
import Container from "./Container";
import Col from "./Col";
import ColWrapper from "./ColWrapper";
import Heading from "./Heading";
import Image from "next/image";

const HowItWorks = () => {

    const steps = [
        {
            id: 0,
            title: "Find a home you love",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            color: 'text-blue-500',
            border: 'border-blue-500'
        },
        {
            id: 1,
            title: "Meet your home owner",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            color: 'text-green-500',
            border: 'border-green-500'
        },
        {
            id: 2,
            title: "Make it official",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            color: 'text-red-500',
            border: 'border-red-500'
        },
    ]



    return <section className={`pb-20 pt-10`} >
        <Container>
            <ColWrapper>
                <>
                    <Col styles=" ">
                        <div>
                            <Image
                                alt="building"
                                src="/howitworks.png"
                                height={660}
                                width={660}
                            />
                        </div>
                    </Col>
                    <Col styles=" " >
                        <div className={`p-10 lg:ml-10`} >
                            <Heading title="How It Works" styles="text-center lg:text-left" />
                            <Caption styles="lg:max-w-lg  text-center lg:text-left" txt={`There are passages of available, the majority have suffered alteration in some form.`} />
                            <div className={`xl:pl-14 mt-12`} >
                                {
                                    steps.map((item, index) => {
                                        return <div key={index} className={` flex items-center`}>
                                            <div className={`w-1/5 flex self-start  `}>
                                                <div className={`w-16 h-16  border-2 relative border-dashed ${item.border} flex items-center justify-center rounded-full `}>
                                                    {
                                                        index < steps.length - 1 && <div className={`hidden xl:block w-2 h-16 absolute -bottom-16 left-1/2 transform -translate-x-1/2  ${item.border} border-l-2 border-dashed`}></div>
                                                    }
                                                    <Heading title={(index + 1).toString()} styles={`text-3xl mb-0 ${item.color}`} />
                                                </div>
                                            </div>
                                            <div className={`w-4/5 ml-5  `} >
                                                <Heading
                                                    title={item.title}
                                                    styles={`text-2xl`}
                                                />
                                                <Caption
                                                    styles="mb-8"
                                                    txt={item.description} />
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </>
            </ColWrapper>

        </Container>
    </section>
}

export default HowItWorks;