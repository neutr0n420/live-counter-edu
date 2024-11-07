import animoca from "@/public/Animoca Brands Logo - Standard 1.png"
import risein from "@/public/rise-in.png"
import Educhain from "@/public/EDU Chain White.png"
import Opencampus from "@/public/DFDF 1 1.png"
import Tinytap from "@/public/sdfs 1.png"
import Newcampus from "@/public/newcampus-logo 1.png"
import Hackquest from "@/public/images 1.png"
import Blockon from "@/public/Blockon Logo White 2.png"
import Image from "next/image"
const SponserSection = () => {
    return (
        <div className="mt-8">
            <p className="text-lg font-bold text-[#A4FA3D]">Sponser</p>
            <div className="flex justify-center items-center ml-24">
                <div className="w-[15%] mx-6">
                    <Image
                        src={risein}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>
                <div className="w-[20%] mx-6">
                    <Image
                        src={Opencampus}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>
                <div className="w-[10%] mx-6">
                    <Image
                        src={Educhain}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>
                <div className="w-[20%] mx-6">
                    <Image
                        src={animoca}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />

                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="w-[12%] mx-12">
                    <Image
                        src={Hackquest}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>

                <div className="w-[12%]">
                    <Image
                        src={Newcampus}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>
                <div className="w-[12%]">
                    <Image
                        src={Tinytap}
                        height={0}
                        width={0}
                        alt="animoca brand image"
                    />
                </div>
                <div className="w-[10%]">
                    <Image
                        src={Blockon}
                        height={0}
                        width={100}
                        alt="animoca brand image"
                    />
                </div>
            </div>
        </div>
    )
}
export default SponserSection;