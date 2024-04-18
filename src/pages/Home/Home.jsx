import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import homeBg from "../../assets/wave.svg";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="relative">
        <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-3 min-h-[calc(100vh-63px)] text-center">
          <Typography
            as="h1"
            variant="h1"
            color="blue-gray"
            className="p-1 font-bold"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#4A00FF] via-blue-500 to-[#FF09D5] text-transparent bg-clip-text bg-300% animate-gradient">
              ByteBlaze
            </span>
          </Typography>
          <Typography
            as="p"
            variant="paragraph"
            color="blue-gray"
            className="p-1.5 font-medium max-w-[515px]"
          >
            ByteBlaze is the bridge between the complex world of technology and
            the curious minds eager to understand it.
          </Typography>
          <div className="space-x-3">
            <Link to="/blogs">
              <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF09D5] group-hover:bg-[#4A00FF]"></span>
                <span className="relative text-black group-hover:text-white">
                  Read Blogs
                </span>
              </button>
            </Link>
            <Link to="/bookmarks">
              <button className="relative inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF09D5] group-hover:bg-[#4A00FF]"></span>
                <span className="relative text-black group-hover:text-white">
                  Bookmarks
                </span>
              </button>
            </Link>
          </div>
        </div>
        <img
          className="w-full absolute bottom-0"
          src={homeBg}
          alt="Home Background"
        />
      </section>
    </>
  );
};

export default Home;
