import Image from 'next/image'
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <div className="w-full bg-[#edece8] pt-6">
                <Link href="/">
                    <Image
                        src="/index-filler.png"
                        alt="index-filler"
                        layout="responsive"
                        width={1000} // Set the original width of the image
                        height={100} // Set the original height of the image
                    />
                </Link>
            </div>
        </div>
    )
}