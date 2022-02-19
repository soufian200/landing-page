import Container from "./Container"
import Col from "./Col"
import ColWrapper from "./ColWrapper"
import Heading from "./Heading"
import Image from "next/image"

const GetStarted = () => {
    return <section className={`py-12`}>
        <Container>
            <ColWrapper styles={`bg-orange-300 p-10 rounded-3xl px-20`} >
                <>
                    <Col>
                        <div className={`py-10 text-center lg:text-left`}>
                            <Heading title="Get Started With Us" styles="lg:text-6xl" />
                            <p className={`text-secondary300 max-w-lg mt-5 mb-10`}>
                                There are passages of available, the majority have suffered alteration in some form.
                            </p>
                            <button className={`bg-primary hover:bg-primary700 py-4 px-10 rounded-3xl text-lg font-bold text-white`} >Get Started</button>
                        </div>
                    </Col>
                    <Col styles="relative hidden lg:block">
                        <div className={`absolute

lg:-top-24 
lg:right-0

                        
                        xl:-top-40 
                        xl:right-0
                        
                        `} >
                            <Image
                                alt="building"
                                src="/getstarted.png"
                                height={510}
                                width={310}
                            />
                        </div>
                    </Col>
                </>
            </ColWrapper>
        </Container>
    </section>
}

export default GetStarted;