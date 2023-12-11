import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";
export default function Hero() {
  return (
    <section className="grid grid-cols-2">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Everthing is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex  gap-4 text-sm ">
          <button className="bg-red-500 items-center text-white px-4 py-2 rounded-full flex gap-2 uppercase">
            Order now
            <Right/>
          </button>

          <button className="flex gap-2 py-2 text-gray-600 font-semibold">Learn more
            <Right/>
             </button>
        </div>
      </div>

      <div className=" relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
