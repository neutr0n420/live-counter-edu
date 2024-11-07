import Image from "next/image";
import RiseIn from "../public/rise-in.png";
import eduChain from "../public/EDU Chain White.png";
import CountdownTimer from "@/components/coundown";
import EventTimeline from "@/components/TimeLine";
import SponserSection from "@/components/sponser";
export default function Home() {
  return (
    <>
      <div className="w-full text-center">
        {/*  need to add some colors */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-[20%] mr-6 ">
            <Image src={RiseIn} height={0} width={0} alt="Logo of Rise In" />
          </div>
          <div className="text-8xl font-light text-[#A4FA3D]">X</div>
          <div className="w-[20%] ml-6 mt-4">
            <Image src={eduChain} height={0} width={0} alt="Logo of Rise In" />
          </div>
        </div>
        <div className="text-2xl ">Presents</div>
        <div className="mt-8 mb-8">
          <h1 className="text-3xl font-black">Hacker house <span className="text-[#A4FA3D]">Bangkok</span></h1>
          <p className="pt-4">Nov 9th 10:30 to Nov 10th 22:30</p>
        </div>
        <div> </div>
        <CountdownTimer />
        <EventTimeline />
        <SponserSection />
      </div>
    </>
  );
}
