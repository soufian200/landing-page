
type ColType = {
    children: JSX.Element
    styles?: string
}

const Col = ({ children, styles }: ColType) => {
    return <div className={`lg:w-1/2 ${styles}`}>{children}</div>
}

export default Col;