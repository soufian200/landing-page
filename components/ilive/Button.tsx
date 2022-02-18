const Button = ({ title }: { title: string }) => {
    return <h1 className={`
    text-5xl
    font-bold
    text-secondary700
    mb-3
    `} >{title}</h1>
}

export default Button;