type CaptionType = {
    txt: string;
    styles?: string
}

const Caption = ({ txt, styles }: CaptionType) => {

    return <p className={`max-w-sm md:max-w-lg text-slate-500 mb-10 text-lg md:text-xl text-center ${styles}`} >{txt}</p>
}
export default Caption;