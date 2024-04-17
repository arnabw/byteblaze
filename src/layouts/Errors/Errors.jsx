import { useNavigate } from "react-router-dom";
import errorPic from "../../assets/404.jpg";
const Errors = () => {
  const navigate = useNavigate();
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center p-10">
      <img className="size-full object-contain" src={errorPic} alt="404" />
      <button
        onClick={() => navigate(-1)}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#4A00FF] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#FF09D5] group-hover:bg-[#4A00FF]"></span>
        <span className="relative text-black group-hover:text-white">Back</span>
      </button>
    </main>
  );
};

export default Errors;
