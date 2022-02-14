import classNames from "classnames";

type HeadingType = {
    title: string;
    styles?: string
    center?: boolean
}

const Heading = ({ title, styles, center = false }: HeadingType) => {
    return <h1 className={classNames(`
    text-4xl
    font-bold
    text-sky-900 
    mb-5 
    
    lg:text-6xl
    ${styles} `, { 'text-center': center })} >{title}</h1>
}
export default Heading;