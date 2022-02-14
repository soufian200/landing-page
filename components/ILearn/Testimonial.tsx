import Image from "next/image"
import Container from "../Container"
import Button from "./Button"
import Caption from "./Caption"
import Heading from "./Heading"

const Testimonial = () => {
    return <section className={` py-10 pb-20`}>
        <Container>
            <div className={`w-full flex items-center lg:items-start flex-col lg:flex-row`}>
                <div className={` lg:w-1/2`}>
                    <Image
                        alt="img1"
                        src="/img1.png"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={` p-5 flex flex-col items-center lg:block lg:w-1/2 lg:pl-10 xl:pl-20`}>
                    <Heading
                        title="Trusted By Best Teachers"
                    />
                    <Caption
                        center
                        txt={`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form. `}
                    />
                    <div className="pt-10">
                        <Button label="Learn more" px="px-20" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default Testimonial