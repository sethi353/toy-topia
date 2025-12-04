import { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";
import Slider from "../components/Slider";
import { Link } from "react-router-dom"; 

const Home = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then(res => res.json())
      .then(data => setToys(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      {/* Slider */}
      <Slider />

      {/* Popular Toys */}
<h1 className="text-3xl font-bold mb-6 mt-6">Popular Toys</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {toys.slice(0, 8).map(toy => ( 
    <ToyCard key={toy.toyId} toy={toy} />
  ))}
</div>
<div className="flex justify-center mt-6">
  <Link
    to="/all-items"
    className="btn btn-primary px-6 py-2 text-lg"
  >
    See More
  </Link>
</div>


       
        {/*  Extra Section 1 */}


        {/* Top-Rated Toys */}
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">Top Rated Toys</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/DD6Wq0wy/download-37.jpg" 
           alt="Super Action Figure" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Super Action Figure</h3>
      <p className="text-gray-600 mt-1">Best-selling action figure with amazing features.</p>
    
    </div>
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/Z1BQqKFT/download-38.jpg" 
           alt="Puzzle Cube" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Puzzle Cube</h3>
      <p className="text-gray-600 mt-1">Challenging puzzle cube for all ages.</p>
    
    </div>
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/Lspp022/download-39.jpg" 
           alt="Dollhouse Set" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Dollhouse Set</h3>
      <p className="text-gray-600 mt-1">Complete dollhouse set for imaginative play.</p>
      
    </div>
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/HTG4jvjg/download-40.jpg" 
           alt="Remote Car" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Remote Car</h3>
      <p className="text-gray-600 mt-1">High-speed remote-controlled car with lights.</p>
      
    </div>
  </div>
</section>


{/* Promotions / Offers */}
<section className="mt-16 bg-yellow-50 py-16 rounded-2xl text-center shadow-inner">
  <h2 className="text-4xl font-bold mb-6 text-yellow-700">Promotions & Offers</h2>
  <p className="text-gray-700 max-w-3xl mx-auto mb-8">
    Enjoy up to 30% off on selected toys! Limited time seasonal offers for our valued customers.
  </p>
  
  <Link
    to="/all-items"
    className="btn btn-primary px-6 py-2 text-lg"
  >
    Shop Now
  </Link>
</section>



      {/* Blog / News */}
<section className="mt-16 text-center">
  <h2 className="text-3xl font-bold mb-6">Latest News Headlines</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/q3JNgyKR/images-6.jpg" 
           alt="Blog 1" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Top 10 Educational Toys in 2025</h3>
      <p className="text-gray-600 mt-1">Discover the best educational toys that boost learning and creativity.</p>
      
    </div>
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/q3JNgyKR/images-6.jpg" 
           alt="Blog 2" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Why Outdoor Play Matters</h3>
      <p className="text-gray-600 mt-1">Learn how outdoor play benefits children’s health and imagination.</p>
    
    </div>
    <div className="border-0 rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src="https://i.ibb.co.com/q3JNgyKR/images-6.jpg" 
           alt="Blog 3" className="w-full h-48 object-cover rounded" />
      <h3 className="text-xl font-bold mt-2">Latest Toy Trends in 2025</h3>
      <p className="text-gray-600 mt-1">Stay updated with the most popular toys this year.</p>
      
    </div>
  </div>
</section>



      <section className="bg-indigo-50 py-16 rounded-2xl shadow-inner mt-30">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-indigo-700 mb-4">
              Support Local Toy Sellers
            </h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
              Discover amazing handmade and unique toys from trusted local
              sellers. ToyTopia connects you with small businesses that bring joy
              to kids everywhere.
            </p>
            <button className="btn btn-outline border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-200">
              Learn More
            </button>
          </div>
        </section>

        {/*  Newsletter */}
        <section className="mx-auto text-center bg-white shadow-2xl p-16 rounded-2xl mt-25">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">
            Subscribe to our Newsletter!
          </h2>
          <p className="text-gray-600 mb-6">
            Stay updated with the latest toys, offers, and local sellers in your
            area.
          </p>
          <form
            
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full sm:w-80 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg shadow-sm"
            />
            <button type="submit" className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg">
              Subscribe
            </button>
          </form>
        </section>

    </div>

    
  );
};

export default Home;
