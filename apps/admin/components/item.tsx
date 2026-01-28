import { Button } from "@repo/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import React from "react";

interface ItemsProp {
  title: string;
  description: string;
  delete: () => void;
  edit: () => void;
  price: number;
  image: string;
}

const Item = (props: ItemsProp) => {
  return (
    <div
      className="
        w-full rounded-2xl overflow-hidden bg-white
        shadow-sm hover:shadow-lg transition
      "
    >
      {/* Image */}
      <div className="relative h-24 sm:h-32 md:h-44 lg:h-52 group">
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 md:group-hover:scale-105"
        />

        {/* Overlay (non-interactive) */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            bg-black/25
            md:bg-black/0 md:group-hover:bg-black/30
            transition
          "
        />

        {/* Actions */}
        <div className="absolute top-2 right-2 flex gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.edit();
            }}
            className="
              p-1.5 md:p-2 rounded-full bg-white/90 backdrop-blur
              text-green-600 shadow
              active:scale-95 md:hover:scale-110 md:hover:bg-green-50
              transition
            "
            aria-label="Edit item"
          >
            <Pencil size={14} className="md:hidden" />
            <Pencil size={16} className="hidden md:block" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              props.delete();
            }}
            className="
              p-1.5 md:p-2 rounded-full bg-white/90 backdrop-blur
              text-red-600 shadow
              active:scale-95 md:hover:scale-110 md:hover:bg-red-50
              transition
            "
            aria-label="Delete item"
          >
            <Trash2 size={14} className="md:hidden" />
            <Trash2 size={16} className="hidden md:block" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-2 md:p-4 flex flex-col gap-1.5 md:gap-2.5">
        {/* Title + Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs md:text-sm lg:text-base font-semibold text-gray-900 line-clamp-1">
            {props.title}
          </h3>
          <span className="text-xs md:text-sm font-bold text-green-600 shrink-0">
            ₹{props.price}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            text-[11px] md:text-sm text-gray-600
            leading-snug
            line-clamp-1 md:line-clamp-2 lg:line-clamp-3
          "
        >
          {props.description}
        </p>

        {/* CTA */}
        <Button
          size="sm"
          title="View"
          click={() => alert("clicked")}
          variant="primary"
          font="bold"
          fullWidth
        />
      </div>
    </div>
  );
};

export default Item;
