import React from "react";
import breedsData from "./breedsData";

const ChickenBreeds = () => {
  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Chicken Breeds</h2>
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {breedsData.map((breed) => (
          <div
            key={breed.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={breed.image}
              alt={breed.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{breed.name}</h3>
              <p className="text-gray-700 mb-2">{breed.description}</p>
              <p className="text-gray-600 text-sm">
                <strong>Weight:</strong> {breed.averageWeight}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Eggs per Year:</strong> {breed.eggsPerYear}
              </p>
              <p className="text-gray-800 font-bold mt-2">{breed.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChickenBreeds;