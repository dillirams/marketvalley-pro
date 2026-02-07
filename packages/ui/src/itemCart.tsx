import { ReactElement } from "react";

interface ItemProps {
  name: string;
  image: string;
  price: string;
  description: string;
  button1: ReactElement;
  button2: ReactElement;
}

export function ItemCart(prop: ItemProps) {
  return (
    <div className="w-full flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-300 overflow-hidden">

      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        <img
          src={prop.image}
          alt={prop.name}
          className="w-full h-full object-cover"
        />

        {/* Price Badge */}
        <div className="absolute bottom-1 right-1 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Nu {prop.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-1 space-y-1">
        <h3 className="font-semibold text-sm md:text-base  break-words leading-snug">
          {prop.name}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-2">
          {prop.description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-auto p-1 sm:space-y-1">
        <div className="w-full">{prop.button1}</div>
        <div className="w-full">{prop.button2}</div>
      </div>
    </div>
  );
}
