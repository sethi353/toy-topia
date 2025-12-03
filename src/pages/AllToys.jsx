import { useEffect, useState } from "react";
import ToyCard from "../components/ToyCard";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [displayToys, setDisplayToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Fetch toys from public/toys.json
  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setDisplayToys(data);
      })
      .catch((err) => console.error("Error loading toys:", err));
  }, []);

  // Sort toys
  const handleSort = (order) => {
    setSortOrder(order);
    const listToSort =
      categoryFilter === "all"
        ? [...toys]
        : toys.filter((toy) => toy.subCategory === categoryFilter);

    const sorted = listToSort.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setDisplayToys(sorted);
  };

  // Filter toys
  const handleFilter = (category) => {
    setCategoryFilter(category);
    const filtered =
      category === "all"
        ? [...toys]
        : toys.filter((toy) => toy.subCategory === category);

    const sorted = filtered.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    setDisplayToys(sorted);
  };

  // Unique categories for filter dropdown
  const categories = [
    "all",
    ...new Set(toys.map((toy) => toy.subCategory).filter(Boolean)),
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">All Toys</h1>

      {/* Sort & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <label className="mr-2 font-semibold">Sort by Price:</label>
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Filter by Category:</label>
          <select
            className="select select-bordered"
            value={categoryFilter}
            onChange={(e) => handleFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "Unknown"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Toys Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayToys.length > 0 ? (
          displayToys.map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No toys found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllToys;
