import Card from "../common/Card";
import breedsData from "../../data/breedsData";

const ProductShowcase = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Chicken Breeds
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Choose from a variety of healthy, high-quality chickens for your farm.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {breedsData.map((breed) => (
            <Card key={breed.id}>
              <img
                src={breed.image}
                alt={breed.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{breed.name}</h3>
                <p className="text-gray-600 text-sm">{breed.description}</p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Weight:</span> {breed.averageWeight}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">Eggs per year:</span> {breed.eggsPerYear}
                </p>
                <p className="text-indigo-600 font-bold mt-2">{breed.price} per bird</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

