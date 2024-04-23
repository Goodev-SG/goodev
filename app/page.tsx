import Nav from "@/components/nav";
import Line from "@/components/line";
import Services from "@/components/services";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center">
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
        <h1 className="text-4xl font-black font-karla ">Our Services</h1>
        <Line size={10} mb={5} />
        <p className="text-center lg:px-52 font-karla leading-loose text-gray-400">
          A descriptive paragraph that tells clients how good you are and proves
          that you are the best choice that they’ve made. This paragraph is also
          for those who are looking out for a reliable car repair.
        </p>
        <Services />
        <h1 className="text-4xl font-black font-karla mt-32">Who We Are?</h1>
        <Line size={10} mb={5} />
      </div>
    </div>
  );
};

export default Home;
