import { Link } from "react-router-dom";
import { WiDirectionLeft } from "react-icons/wi";
import Swal from "sweetalert2";

const AddCoffee = () => {
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
      " https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Coffee added Successfully",
            confirmButtonText: "ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <Link to="/" className="flex  w-40 items-center gap-1 my-5">
        <WiDirectionLeft className="text-3xl"></WiDirectionLeft>
        <span className="hover:bg-slate-200">Back to Home</span>
      </Link>
      <h2 className="text-3xl font-semibold text-center">Add a Coffee Here</h2>
      <p className="text-center w-1/2 mx-auto py-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
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
                placeholder="Coffee Name"
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
                placeholder="Chef Name"
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
                placeholder="Supplier Name"
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
                placeholder="Chef Name"
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
                placeholder="Coffee Name"
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
                placeholder="Chef Name"
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
                placeholder="Coffee Name"
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

export default AddCoffee;
