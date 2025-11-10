// ProductShowcase.jsx
import React from "react";
import breedsData from "./breedsData";

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {breedsData.map((breed) => (
          <div key={breed.id} className="bg-white rounded-lg shadow p-4">
            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-bold mt-4">{breed.name}</h3>
            <p>{breed.description}</p>
            <p>Weight: {breed.averageWeight}</p>
            <p>Eggs per year: {breed.eggsPerYear}</p>
            <p className="font-semibold">{breed.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;


