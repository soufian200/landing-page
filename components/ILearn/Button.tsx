import React from "react"

type ButtonType = {
    label: string
    color?: string
    px?: string
    m?: string
    bg?: string
}
const Button = ({ label, bg = "bg-blue-700", color = "text-blue-700", px = "px-8", m = "m-1" }: ButtonType) => {
    return <button className={`${bg} ${px} py-4 ${m} rounded-xl font-bold ${bg === "bg-transparent" ? color : "text-white"} hover:opacity-80`} >
        {label}
    </button>
}

export default Button