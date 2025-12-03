import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    fetch("/toys.json")
      .then(res => res.json())
      .then(data => {
        const selectedToy = data.find(t => t.toyId === parseInt(id));
        setToy(selectedToy);
      });
  }, [id]);

  const handleSubmit = e => {
    e.preventDefault();
    Swal.fire("Success!", "You tried the toy successfully.", "success");
  };

  if (!toy) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-20">
        <img className="w-full md:w-1/2 h-80 object-cover rounded-lg" src={toy.pictureURL} alt={toy.toyName} />
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{toy.toyName}</h2>
          <p className="mt-2">{toy.description}</p>
          <p className="mt-1">Price: ${toy.price}</p>
          <p className="mt-1">Rating: {toy.rating}</p>
          <p className="mt-1">Available Quantity: {toy.availableQuantity}</p>
          <p className="mt-1">Seller: {toy.sellerName} ({toy.sellerEmail})</p>

          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              required
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              required
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary mt-2">Try Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
