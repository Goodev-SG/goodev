import Line from "@/components/line";
import Services from "@/components/services";
import Traits from "@/components/traits";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-8 py-5 sm:px-36 sm:py-10">
        <h1 className="text-5xl font-black font-karla mb-5 mt-24">
          Your Web, Your Way
        </h1>
        <Line size={10} mb={5} />
        <p className="text-center lg:px-52 font-karla leading-loose text-gray-400">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
        <img src="unDrawWeb.svg" width={500} className="my-14"></img>
      </div>
      <div className="flex flex-col items-center px-8 py-5 sm:px-36 sm:py-10">
        <h1 className="text-4xl font-black font-karla">Our Services</h1>
        <Line size={10} mb={5} />
        <p className="text-center lg:px-52 font-karla leading-loose text-gray-400">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
        <Services />
      </div>
      <div className="flex flex-row justify-between bg-blue-800 px-8 py-5 sm:px-36 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-black font-karla text-white ">
            Who We Are?
          </h1>
          <Line size={10} mb={5} />
          <p className="text-justify lg:px-32 font-karla leading-loose text-gray-200">
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made. This
            paragraph is also for those who are looking out for a reliable car
            repair.
          </p>
          <button className="py-1 px-3 sm:py-3 sm:px-10 border-yellow-400 hover:bg-yellow-400 hover:text-blue-800 border-2 font-karla mt-5 text-white">
            Read More
          </button>
        </div>
        <div className="hidden lg:block px-10">
          <img src="unDrawWeb.svg" width={600} />
        </div>
      </div>
      <div className="flex flex-row justify-between px-8 py-5 sm:px-36 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-black font-karla">Why Choose Us?</h1>
          <Line size={10} mb={5} />
          <p className="text-justify lg:px-32 font-karla leading-loose text-gray-400">
            A descriptive paragraph that tells clients how good you are and
            proves that you are the best choice that they’ve made. This
            paragraph is also for those who are looking out for a reliable car
            repair.
          </p>
          <Traits />
        </div>
        <div className="hidden lg:block px-10">
          <img src="unDrawWeb.svg" width={600} />
        </div>
      </div>
    </div>
  );
};

export default Home;
