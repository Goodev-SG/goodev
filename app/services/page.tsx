import Line from "@/components/line";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 py-5 sm:px-36 sm:py-0">
        <h1 className="text-5xl font-black font-karla mb-5 mt-0">
          Our Services
        </h1>
        <Line size={10} mb={5} />
        <p className="text-center lg:px-52 font-karla leading-loose text-gray-400">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
        <Image
          src="services-img.svg"
          width={400}
          height={400}
          className="my-14"
          alt="Picture of services"
        />
      </div>
      <div className="flex flex-col items-center px-4 py-5 sm:px-36 sm:py-0"></div>
    </>
  );
};

export default page;
