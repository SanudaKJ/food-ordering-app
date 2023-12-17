import Image from "next/image";
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
        <div className="absolute w-48 h-48 text-left -left-12 ">
          <Image
            src={"/sallad1.png"}
            alt={"sallad2"}
            layout={"fill"}
            objectFit={"contain"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1 text-center">
        <h3 className="font-semibold text-gray-500 uppercase">check out</h3>
        <h2 className="text-4xl italic font-bold text-red-500">Menu</h2>
      </div>

      <div className="grid-cols-3 gap-4">
        
      <div className="p-4 text-center bg-gray-400 rounded-lg">
        <img src="" alt="pizza" />
        <h4 className="my-2 font-semibold">Pepperoni Pizza</h4>
        <p className="text-sm text-gray-500">Vim iuvaret delicata accommodare no, eos elit autem ei. Mel putant malorum ut, alii veniam fierent eos ex. Has id probatus salutandi, ut est eruditi sanctus argumentum, pro ut sanctus rationibus. </p>
        <button className="px-4 py-2 text-white bg-red-500 rounded-full"></button>
      </div>
      </div>

    </section>
  );
}
