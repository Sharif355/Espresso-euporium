import { WiDirectionLeft } from "react-icons/wi";
import { Link, useLoaderData } from "react-router-dom";

const Showcoffee = () => {
  const loadedData = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = loadedData;
  return (
    <div>
      <Link to="/" className="flex  w-40 items-center gap-1 my-5">
        <WiDirectionLeft className="text-3xl"></WiDirectionLeft>
        <span className="hover:bg-slate-200">Back to Home</span>
      </Link>
      <div className="card flex-row justify-between bg-stone-100 shadow-xl my-10 p-5">
        <figure className="w-full">
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body w-full space-y-3">
          <h2 className=""> Name: {name}. </h2>
          <p> Chef: {chef}. </p>
          <p> Supplier: {supplier}. </p>
          <p> Taste: {taste}. </p>
          <p> Category: {category}. </p>
          <p className="text-justify"> Details: {details}. </p>
        </div>
      </div>
    </div>
  );
};

export default Showcoffee;
