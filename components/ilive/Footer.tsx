import Logo from "./Logo";
import Caption from "./Caption";
import Container from "./Container"
import FooterCol from "./FooterCol";

export type LinkType = {
    label: string
    href: string
}

const Footer = () => {




    return <footer className="pt-12 pb-8 bg-slate-900">
        <Container>
            <div>
                <div className="lg:flex lg:flex-co">
                    <div className="flex flex-col items-center lg:items-start lg:w-1/3">
                        <div className="bg-white lg:mb-8">
                            <Logo />
                        </div>
                        <Caption

                            styles="text-center lg:text-left my-5 lg:my-0"

                            txt="There are many variations of passages of available, but the majority have suffered alteration in some form. Getting know tomorrow for your sefl" />
                    </div>
                    <div className="flex flex-wrap lg:w-2/3">
                        <FooterCol
                            styles="bg-red-40"
                            title="Links"
                            list={[
                                {
                                    label: "Home",
                                    href: "Home"
                                },
                                {
                                    label: "About Us",
                                    href: "About Us"
                                },
                                {
                                    label: "Services",
                                    href: "Services"
                                },
                                {
                                    label: "comunity",
                                    href: "comunity"
                                },
                                {
                                    label: "Testemonial",
                                    href: "Testemonial"
                                },
                            ]}
                        />
                        <FooterCol
                            styles="bg-green-40"
                            title="Support"
                            list={[
                                {
                                    label: "Center",
                                    href: "Center"
                                },
                                {
                                    label: "Webians",
                                    href: "Webians"
                                },
                                {
                                    label: "Feedback",
                                    href: "Feedback"
                                },
                                {
                                    label: "Reviews",
                                    href: "Reviews"
                                },
                            ]}
                        />
                        <FooterCol
                            styles="bg-blue-40"
                            title="Social Media"
                            list={[
                                {
                                    label: "Facebook",
                                    href: "facebook"
                                },
                                {
                                    label: "Twitter",
                                    href: "twitter"
                                },
                                {
                                    label: "Youtube",
                                    href: "Youtube"
                                },
                                {
                                    label: "Instagram",
                                    href: "Instagram"
                                },
                            ]}
                        />
                    </div>

                </div>
                <hr className="mt-10 mb-5 border-none h-px bg-slate-700" />
                <div className="mb-10 flex justify-between">
                    <h1 className="font-bold text-slate-600">iLive &copy; 2022 </h1>
                    <div className="flex text-slate-600">
                        <h1 className="hover:text-sky-400 mx-3 cursor-pointer">Terms</h1>
                        <h1 className="hover:text-sky-400 mx-3 cursor-pointer">Privacy</h1>
                    </div>
                </div>
            </div>
        </Container>
    </footer>
}

export default Footer;