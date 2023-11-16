import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedData = useLoaderData();
  const data = Object.keys(loadedData);
  const [coffees, setCoffees] = useState(data);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5 my-5">
        {coffees?.map((data) => (
          <CoffeeCard
            key={data._id}
            data={data}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
