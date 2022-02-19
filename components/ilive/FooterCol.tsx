import Heading from "../ILearn/Heading"
import { LinkType } from "./Footer"

type FooterColType = {
    title: string
    list: LinkType[]
    styles?: string
}

const FooterCol = ({ title, list, styles }: FooterColType) => {
    return <div className={`
    w-1/2
    mt-8

    lg:w-1/3
    lg:mb-0

    lg:pl-16
    
    ${styles}
    `}>
        <Heading
            title={title}
            styles="text-base lg:text-base mb-3 text-red-400"
        />

        <ul className="mt-5">
            {
                list.map((li, index) => {
                    return <li key={index} ><a
                        className={`
                    text-slate-400
                    my-3
                    block
                    text-sm
                    `}
                        href={`#${li.href}`}>{li.label}</a></li>
                })
            }
        </ul>
    </div>
}
export default FooterCol