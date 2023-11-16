import { WiDirectionLeft } from "react-icons/wi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const loadedData = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loadedData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const addCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(
      ` https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("updated!", "Your file has been updated.", "success");
            }
          });
        }
      });
  };

  return (
    <div>
      <Link to="/" className="flex  w-40 items-center gap-1 my-5">
        <WiDirectionLeft className="text-3xl"></WiDirectionLeft>
        <span className="hover:bg-slate-200">Back to Home</span>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="shadow-lg bg-stone-300 rounded-lg"
      >
        {/* name,chef */}
        <div className="flex  justify-between gap-5 p-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Coffee </span>
            </label>
            <label className="input-group">
              <span>Name</span>
              <input
                type="text"
                defaultValue={name}
                className="input input-bordered w-full"
                name="name"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Chef </span>
            </label>
            <label className="input-group">
              <span>Chef</span>
              <input
                type="text"
                defaultValue={chef}
                className="input input-bordered w-full"
                name="chef"
              />
            </label>
          </div>
        </div>
        {/* Supplier ,Taste */}
        <div className="flex  justify-between gap-5 p-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <span>Supplier</span>
              <input
                type="text"
                defaultValue={supplier}
                className="input input-bordered w-full"
                name="supplier"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste </span>
            </label>
            <label className="input-group">
              <span>Taste</span>
              <input
                type="text"
                defaultValue={taste}
                className="input input-bordered w-full"
                name="taste"
              />
            </label>
          </div>
        </div>
        {/* category,details */}
        <div className="flex  justify-between gap-5 p-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
            <label className="input-group">
              <span>Category</span>
              <input
                type="text"
                defaultValue={category}
                className="input input-bordered w-full"
                name="category"
              />
            </label>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details </span>
            </label>
            <label className="input-group">
              <span>Details</span>
              <input
                type="text"
                defaultValue={details}
                className="input input-bordered w-full"
                name="details"
              />
            </label>
          </div>
        </div>
        {/* PhotoURL*/}
        <div className="flex flex-col  justify-between gap-5 p-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">PhotoURL </span>
            </label>
            <label className="input-group">
              <span>PhotoURL</span>
              <input
                type="text"
                defaultValue={photo}
                className="input input-bordered w-full"
                name="photo"
              />
            </label>
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block mt-3"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
