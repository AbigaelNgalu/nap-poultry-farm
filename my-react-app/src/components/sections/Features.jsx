import { CheckCircleIcon } from "@heroicons/react/24/solid";

const features = [
  {
    id: 1,
    title: "Certified Breeders",
    description: "All breeders meet strict health and safety standards.",
  },
  {
    id: 2,
    title: "Wide Variety of Breeds",
    description: "Choose from over 9 chicken breeds to find your perfect match.",
  },
  {
    id: 3,
    title: "24/7 Support",
    description: "Our team is available anytime to help you with your queries.",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "Thousands of happy owners worldwide trust our services.",
  },
];

const Feature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-600 mb-12">
          We provide top-notch services to ensure your pet experience is amazing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <CheckCircleIcon className="h-12 w-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
