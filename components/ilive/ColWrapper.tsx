type ColWrapperType = {
    children: JSX.Element
    styles?: string
}

const ColWrapper = ({ children, styles }: ColWrapperType) => {
    return <div className={`
   
    flex
    flex-col

    lg:flex-row

    ${styles}
    `}>
        {children}
    </div>
}

export default ColWrapper