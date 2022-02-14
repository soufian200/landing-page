import classNames from "classnames";

type CaptionType = {
    txt: string;
    styles?: string
    center?: boolean
}

const Caption = ({ txt, styles, center = false }: CaptionType) => {

    return <p className={classNames(`max-w-sm md:max-w-lg text-slate-500 mb-10 text-lg md:text-xl  ${styles}`, { 'text-center': center })} >{txt}</p>
}
export default Caption;