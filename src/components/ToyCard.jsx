import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  return (
    <div className="card bg-base-100 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <figure className="h-64 w-full overflow-hidden">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4 flex flex-col justify-between h-64">
        <div>
          <h2 className="card-title text-lg font-bold">{toy.toyName}</h2>
          <p className="text-sm mt-1 text-gray-600">{toy.subCategory}</p>
          <p className="mt-1 text-gray-800">Price: ${toy.price}</p>
          <p className="mt-1 text-gray-800 flex items-center gap-1">Rating: {toy.rating}
            <FaStar className="text-yellow-500" />
          </p>
          <p className="mt-1 text-gray-800">Available: {toy.availableQuantity}</p>
        </div>

        <Link
          to={`/toy/${toy.toyId}`}
          className="btn btn-primary mt-2 w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;

