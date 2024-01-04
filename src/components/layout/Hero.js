import Image from "next/image";
import Link from "next/link";
import Right from "../icons/Right";
export default function Hero() {
  return (
    <section className="grid grid-cols-2 mt-4">
      <div className="py-8">
        <h1 className="text-4xl font-semibold">
          Everthing is better with a{" "}
          <span className="text-red-500"> Pizza</span>
        </h1>
        <p className="my-6 font-semibold text-gray-500">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life.
        </p>
        <div className="flex gap-4 text-sm ">


          <button className="flex items-center gap-2 px-4 py-5 text-white uppercase bg-red-500 rounded-full hover:bg-red-600">

            Order now
            <Right />
          </button>

          <button className="flex items-center gap-2 font-semibold text-gray-600">
            Learn more
            <Right />
          </button>
        </div>
      </div>

      <div className="relative ">
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
