
const Card = ({ image, title, description, price, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="h-56 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <p className="text-primary font-bold">{price}</p>
      </div>
    </div>
  );
};

export default Card;
