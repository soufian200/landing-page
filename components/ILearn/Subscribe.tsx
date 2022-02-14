import Container from "../Container"
import Button from "./Button";
import Caption from "./Caption";
import Heading from "./Heading"

const Subscribe = () => {
    return <section className={`py-28 bg-orange-100`}>
        <Container>
            <div>
                <div className="flex mb-10 flex-col items-center justify-center">
                    <Heading title="Subscribe Now" styles="text-4xl" />
                    <Caption txt="The passages of Lorem Ipsum some form." />
                </div>
                <div className={`flex justify-center`} >
                    <div className={`bg-white rounded-xl shadow-2xl overflow-hidden flex justify-between lg:w-[600px]`}>
                        <input placeholder="Enter your email" className=" w-full pl-5 outline-none" />
                        <Button m="m-0" label="Subscribe" />
                    </div>
                </div>
            </div>
        </Container>
    </section>
}

export default Subscribe;