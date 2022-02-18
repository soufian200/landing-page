import React from "react"

type ContainerType = {
    children: JSX.Element
}
const Container = ({ children }: ContainerType) => {
    return <div className={`container mx-auto px-5  xl:px-20 `}
    >{children}</div>
}

export default Container