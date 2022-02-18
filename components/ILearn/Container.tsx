import React from "react"

type ContainerType = {
    children: JSX.Element
}
const Container = ({ children }: ContainerType) => {
    return <div className={`container mx-auto md:px-3 xl:px-28 `} >{children}</div>
}

export default Container