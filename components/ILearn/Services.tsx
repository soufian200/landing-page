import { AiFillHeart, AiOutlineDesktop, AiOutlineMessage } from "react-icons/ai"
import Container from "../Container"
import Caption from "./Caption";
import Heading from "./Heading";

const Services = () => {

    const services = [
        {
            bg: "bg-sky-500",
            Icon: <AiOutlineDesktop size={60} />,
            title: "Live classes with best teachers"
        },
        {
            bg: "bg-red-500",
            Icon: <AiOutlineMessage size={60} />,
            title: "Coversation about the class"
        },
        {
            bg: "bg-yellow-500",
            Icon: <AiFillHeart size={60} />,
            title: "We care your home work activity"
        },

    ];

    return <section className={`py-20 md:py-36`}>
        <Container>
            <div>
                <div className={`flex flex-col items-center md:mb-14`}>
                    <Heading title="What We Provide" />
                    <Caption center txt="A best and cheapest way of getting know learning to make a better tomorrow for your sefl" />
                </div>
                <div className={`flex items-center flex-col lg:flex-row justify-evenly`} >
                    {
                        services.map((service, index) => {
                            return <div key={index} className={`w-[260px] h-[260px] flex items-center justify-center flex-col p-5 rounded-xl`} >
                                <div className={`${service.bg} shadow-2xl text-white p-4 rounded-2xl mb-10`}>
                                    {service.Icon}
                                </div>
                                <h1 className={`text-2xl font-bold text-slate-700 mb-5 text-center`} >{service.title}</h1>
                            </div>
                        })
                    }
                </div>
            </div>
        </Container>
    </section>

}
export default Services