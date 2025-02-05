const Card = ({ title, description }) => {
    return (
      <div className="bg-gray-200 shadow-md rounded-lg w-full h-full flex flex-col justify-center p-3 text-gray-900">
        <h3 className="text-lg font-bold">{title}:</h3>
        <p className="text-sm mt-1">{description}</p>
      </div>
    );
  };
  
  export default Card;
  