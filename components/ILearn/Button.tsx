import React from "react"

type ButtonType = {
    label: string
    color?: string
    px?: string
    m?: string
}
const Button = ({ label, color = "blue-700", px = "px-8", m = "m-1" }: ButtonType) => {
    return <button className={`bg-${color} ${px} py-4 ${m} rounded-xl font-bold text-${color === "transparent" ? "blue-700" : "white"} hover:opacity-80`} >
        {label}
    </button>
}

export default Button