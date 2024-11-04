import Image from "next/image";

interface dataProps{
  data:{
    id: number,
    image: string,
    brand: string,
    category: string,
    model: string,
    description: string,
    title: string,
    price: number,
  }
}

const Card = ({ data }: dataProps) => {
  const { image, brand, category, model, description, title, price } = data;
  console.log(image, brand, category, model, description, title, price);

  return (
    <div className="w-[24%] bg-white p-2 rounded-lg shadow-md">
      {/* Display Product Image */}
      <div className="flex justify-center mb-4">
        <img src={image} height="150px" width="100%" alt={title} className="object-contain aspec-[2/2]"/>
      </div>

      {/* Product Details */}
      <h5 className="text-lg mb-2">Name: {title.slice(0, 20)}...</h5>
      <p className="text-[16px] text-gray-700">Brand: {brand}</p>
      <p className="text-[16px] text-gray-600">Category: {category}</p>
      <p className="text-[16px] text-gray-500">Description: {description.slice(0, 50)}...</p>
      <p className="text-lg font-semibold mt-2">Price: ${price?.toFixed(2)}</p>
    </div>
  );
};

export default Card;

