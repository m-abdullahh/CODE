import { Link, Navigate } from "react-router-dom";
import CustomNavBar from "./CustomNavBar";
import { Button } from "./components/ui/button";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen items-center w-full flex-col bg-muted/40 px-2 py-2">
        <CustomNavBar />
        <h1 className="mt-20 md:mt-40 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Introducing Legal Search Engine</h1>
        <p className="leading-7 mt-4">for Copyright and Trademark Ordinance</p>
        <div className="flex justify-center space-x-2 ">
          <Button className="text-xl px-4 py-6 mt-6 rounded-none">
            <Link to={"/signup"}>Try It!!!</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
