// pages/BookNow.jsx
import { useParams, Link } from "react-router-dom";

const BookNow = () => {
  const { id } = useParams();

  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Book Now</h1>
      <p className="text-gray-700 mb-6">
        You are booking toy with ID: <span className="font-semibold">{id}</span>
      </p>
      <p className="text-gray-600 mb-8">
        This is a Booking Page. You can add details about the toy and booking instructions here.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default BookNow;
