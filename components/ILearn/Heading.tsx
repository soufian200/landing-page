type HeadingType = {
    title: string;
    styles?: string
}

const Heading = ({ title, styles }: HeadingType) => {
    return <h1 className={`
    text-4xl
    font-bold
    text-sky-900 
    mb-5 
    text-center
    lg:text-6xl
    ${styles}`} >{title}</h1>
}
export default Heading;