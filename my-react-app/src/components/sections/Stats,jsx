const statsData = [
  { id: 1, value: "120+", label: "Breeds Available" },
  { id: 2, value: "10K+", label: "Happy Owners" },
  { id: 3, value: "50+", label: "Certified Breeders" },
  { id: 4, value: "99%", label: "Customer Satisfaction" },
];

const Stats = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Our Achievements in Numbers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <p className="text-4xl font-extrabold text-indigo-600">
                {stat.value}
              </p>
              <p className="mt-2 text-gray-700 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
