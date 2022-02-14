import Container from "../Container";
import Caption from "./Caption";
import Logo from "./Logo";

const Footer = () => {

    const FooterCol = ({ title, list }: { title: string, list: string[] }) => {
        return <div className={` w-1/2 mt-10 lg:mt-0 lg:w-1/5  `}>
            <h1 className={`
    font-bold
    text-sky-900 
    mb-5
    lg:mb-8
    lg:text-xl `} >{title}</h1>
            <ul >
                {
                    list.map((i, index) => {
                        return <li key={index} ><a href="#" className={` text-slate-400 transition hover:text-slate-800  block my-2`}>{i}</a></li>
                    })
                }
                <li></li>
            </ul>
        </div>
    }

    return <footer className={``}>
        <Container>
            <div className={`py-20 px-10 lg:px-0`}>

                <div className={`w-full flex flex-col lg:flex-row pb-24`}>
                    <div className={` w-full lg:w-2/5  `}>
                        <Logo size={1.3} />
                        <div className="mt-10 max-w-sm">
                            <Caption
                                txt="A best and cheapest way of getting know learning to make a better tomorrow for your sefl"
                            />
                        </div>
                    </div>
                    <div className={`flex flex-wrap lg:justify-evenly lg:w-4/5 `}>
                        <FooterCol
                            title="Company"
                            list={["About", "Careers", "Mobile", "How It Works", "Contact Us"]}
                        />

                        <FooterCol
                            title="Support"
                            list={["Quick Chat", "24h service", "Support Career",]}
                        />
                        <FooterCol
                            title="Social Media"
                            list={["Facebook", "Twitter", "Reddit", "Instagram", "Youtube"]}
                        />
                    </div>

                </div>
                <div className={"border-t border-slate-200 py-5 flex justify-between"}>
                    <h1 className={`text-slate-500`}>Copyright &copy; 2022</h1>
                    <ul className="flex">
                        {
                            ["Terms", "Privacy"].map((i, index) => <li key={index} className={`text-slate-900 mx-4 hover:text-blue-700 cursor-pointer transition`} >{i}</li>)
                        }
                    </ul>
                </div>
            </div>
        </Container>
    </footer>
}

export default Footer;