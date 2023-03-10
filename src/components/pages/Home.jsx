import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <div className="">I am the home section</div>;
};

export default Home;
