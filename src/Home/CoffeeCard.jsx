import { FaEdit, FaEye } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CoffeeCard = ({ data, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = data;

  const handleDelete = (_id) => {
    fetch(
      ` https://espresso-euporium-server-djxbpvk4j-sharif355.vercel.app/coffees/${_id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
            const remaining = coffees.filter((coffee) => coffee._id !== _id);
            setCoffees(remaining);
          });
        }
      });
  };

  return (
    <div>
      <div className="card card-side bg-stone-100 shadow-xl">
        <figure>
          <img src={photo} alt={name} />
        </figure>
        <div className="card-body flex-row justify-between">
          <div className="space-y-3">
            <h2 className="">Name: {name} </h2>
            <p>Chef: {chef} </p>
            <p>Supplier: {supplier} </p>
            <p>Taste: {taste} </p>
          </div>
          <div className="space-y-3">
            <div className="btn-group btn-group-vertical">
              <Link to={`/viewCoffee/${_id}`}>
                <button className="btn bg-stone-500 ">
                  <FaEye className="text-xl text-white "></FaEye>
                </button>
              </Link>
              <Link to={`/editCoffee/${_id}`}>
                <button className="btn bg-black ">
                  <FaEdit className="text-xl text-white"></FaEdit>
                </button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-red-500"
              >
                <AiTwotoneDelete className="text-xl  text-white"></AiTwotoneDelete>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  data: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
