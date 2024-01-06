import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import Sectionheaders from "@/components/layout/sectionheaders";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <div className="flex flex-col gap-3">
          <div>
            <Sectionheaders subHeader={"Our story"} mainHeader={"About Us"} />
          </div>
          <div className="flex flex-col max-w-md gap-2 mx-auto">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, "
            </p>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut'
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <div>
          <div>
            <Sectionheaders
              subHeader={"Don't hesitate"}
              mainHeader={"Contact Us"}
            />{" "}
          </div>
          <div><a className="text-3xl text-gray-500 underline" href="tel:+940033994">+94 0033 994</a></div>
        </div>
      </section>
      
     
    </>
  );
}
