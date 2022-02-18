const Caption = ({ txt }: { txt: string }) => {
    return <p className={`
    text-slate-500 
    max-w-2xl
    `}>{txt}</p>
}

export default Caption;