import Image from "next/image"

const Logo = ({ size = 1 }: { size?: number }) => {
    return <div >
        <Image
            alt="iLive"
            src="/ilive.svg"
            width={140 * size}
            height={40 * size}
        />
    </div>
}

export default Logo