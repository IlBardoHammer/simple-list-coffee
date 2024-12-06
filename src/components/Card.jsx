import star from "../assets/Star.svg";
import starFill from "../assets/Star_fill.svg";

const Card = ({ coffeeObject }) => {
  const { name, price, rating, image, votes, available, popular } = coffeeObject;
  return (
    <div className="relative flex flex-col p-4 h-56 md:mb-12">
      <img className="mb-2 rounded-lg" src={ image } alt="Image of specific coffee." />
      { popular &&
        <span className="absolute top-6 left-6 py-1 px-2 bg-yellow rounded-3xl text-xs font-bold">Popular</span> }
      <div className="flex justify-between mb-3">
        <h5 className="text-white">{ name }</h5>
        <span className="py-1 px-2 text-xs bg-green font-bold rounded">{ price }</span>
      </div>
      <div className="flex">
        <img src={ rating ? starFill : star } alt="Star of vote" className="mr-1 size-5" />
        <span className="text-sm text-white">{ rating ? rating : "" }</span>
        <span className="ml-1 text-sm text-grey">{ rating ? `(${ votes } votes)` : "No ratings" }</span>
        <span className="text-red text-sm ml-auto">{ !available ? "Sold out" : "" }</span>
      </div>

    </div>
  );
};

export default Card;