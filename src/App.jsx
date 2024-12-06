import { useEffect, useState } from "react";
import axios from "axios";
import decoration from "./assets/vector.svg";
import RenderCoffees from "./components/RenderCoffees.jsx";

const App = () => {
  const [ allCoffes, setAllCoffes ] = useState(null);
  const [ active, setActive ] = useState("all");

  const baseUrl =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";

  useEffect(() => {
    axios(baseUrl).then((response) => {
      setAllCoffes(response.data);
    });
  }, []);

  const handleClick = (string) => {
    setActive(string);
  };

  return (
    <div className="relative flex min-h-screen justify-center bg-black pb-20">
      <div className="absolute left-0 top-0 h-112 w-full bg-image bg-contain bg-no-repeat"></div>
      <section
        className="flex flex-col items-center relative mt-20 w-3/4 px-4 py-16 pt-16 overflow-hidden rounded-xl bg-dark-grey sm:w-3/5 md:mt-32 md:w-4/6 lg:mt-40 lg:w-5/6 lg:px-12 lg:pt-24">
        <img
          className="absolute left-40 top-4 sm:left-48 md:left-88 lg:left-132 lg:top-8"
          src={ decoration }
          alt="Decoration of page."
        />
        <h1 className="z-10 mb-4 text-3xl font-bold text-white">
          Our Collection
        </h1>
        <p className="z-10 mb-6 w-[99%] text-center text-base text-grey md:w-5/6 lg:w-3/6">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <section className="flex gap-4 mb-6 md:mb-8">
          <button
            onClick={ () => handleClick("all") }
            className={ active === "all" ? `btn-active` : `btn` }
          >
            All Products
          </button>
          <button
            onClick={ () => handleClick("available") }
            className={ active === "available" ? `btn-active` : `btn` }
          >
            Available Now
          </button>
        </section>
        <RenderCoffees active={ active } allCoffees={ allCoffes } />
      </section>
    </div>
  );
};

export default App;
