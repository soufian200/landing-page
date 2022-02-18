import { useState } from "react"
import { CgChevronDown } from "react-icons/cg"

const Select = ({ label, options }: { label: string, options: string[] }) => {

    const [selected, setSelected] = useState("")
    const [opened, setOpened] = useState(false)

    return <div className={`
   

     relative
    `} >
        <div className={`
        flex
        justify-between
        items-center
        p-3
        border-2
        rounded-lg
        cursor-pointer
        select-none
        
        `}
            onClick={() => setOpened(!opened)}
        >
            <h1 className={`
                font-bold
                text-slate-700
                `} > {selected ? selected : label}</h1>
            <CgChevronDown size={24} />
        </div>
        <ul className={`
    
    bg-white 
    absolute 
    w-full 
    left-0 
    shadow-lg 
    py-3 
    rounded-lg 
    z-50 
    ${opened ? "block" : "hidden"}
    
    max-h-60
    overflow-auto
    `}>
            {
                options.map((i, index) => <li
                    key={index}
                    className={`p-3 select-none cursor-pointer transition hover:bg-slate-100`}
                    onClick={() => {

                        setSelected(i)
                        setOpened(!opened)
                    }}
                > {i}
                </li>)
            }
        </ul>
    </div>
}
export default Select