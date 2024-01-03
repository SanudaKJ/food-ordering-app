import Image from "next/image";
import Menuitem from "../menu/menuitem";
import Sectionheaders from "./sectionheaders";
export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 justify-start w-full">
        <div className="absolute right-0 h-48 text-right -z-10 -top-16">
          <Image
            src={"/sallad2.png"}
            alt={"sallad2"}
            width={107}
            height={195}
          />
        </div>
        <div className="absolute w-48 h-48 text-left -left-12 -z-10">
          <Image
            src={"/sallad1.png"}
            alt={"sallad2"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        
      <div className="flex flex-col gap-1 text-center">
        <Sectionheaders subHeader={"checkout"} mainHeader={"Menu"}/>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Menuitem />
        <Menuitem />
        <Menuitem />
        <Menuitem />
        <Menuitem />
        <Menuitem />
      </div>
      </div>
    </section>
  );
}
