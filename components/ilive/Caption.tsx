const Caption = ({ txt, styles }: { txt: string, styles?: string }) => {
    return <p className={`
    text-slate-500 
    max-w-2xl
    ${styles}
    `}>{txt}</p>
}

export default Caption;