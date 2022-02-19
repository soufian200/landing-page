const Heading = ({ title, styles }: { title: string, styles?: string }) => {
    return <h1 className={`
    text-5xl
    font-bold
    text-secondary700
    mb-3
    ${styles}
    `} >{title}</h1>
}

export default Heading;