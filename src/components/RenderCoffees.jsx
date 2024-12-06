import Card from "./Card.jsx";

const RenderCoffees = ({ allCoffees, active }) => {
  const getListCoffees = (coffees) => {
    return (
      coffees?.map((coffee) => (
        <Card key={ coffee.id } coffeeObject={ coffee } />
      )) || []
    );
  };

  const getAvailableCoffees = (coffees) => {
    return coffees
      ?.filter((coffee) => coffee.available)
      .map((coffee) => <Card key={ coffee.id } coffeeObject={ coffee } />);
  };

  return (
    <section className="flex flex-wrap justify-center gap-14 md:gap-3 lg:gap-1">
      { active === "all"
        ? getListCoffees(allCoffees)
        : getAvailableCoffees(allCoffees) }
    </section>
  );
};

export default RenderCoffees;
