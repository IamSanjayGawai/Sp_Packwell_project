import React from 'react';
import strap from "../assets/Photo/Photo/plain.jpg"
import strap1 from "../assets/Photo/Photo/BROWN 2.jpg"
import strap2 from "../assets/Photo/Photo/color.jpg"
import strap3 from "../assets/Photo/Photo/floor.jpg"

// Define the categories array
export const categories = [
  {
    id: 1,
    name: "BOPP_Plain_Self_Adhesive_Tape",
    sizes: ["2", "2.5", "3", "4", "custom"],
    lengths: ["30", "65", "100", "150", "200", "250", "300", "custom"],
    image: strap, 
  },
  {
    id: 2,
    name: "BOPP_Brown_Self_Adhesive_Tape",
    sizes: ["2", "2.5", "3", "4", "custom"],
    lengths: ["30", "65", "100", "150", "200", "250", "300", "custom"],
    image: strap1
  },
  {
    id: 3,
    name: "BOPP_Color_Self_Adhesive_Tape",
    sizes: ["2", "2.5", "3", "4", "custom"],
    lengths: ["30", "65", "100", "150", "200", "250", "300", "custom"],
    image: strap2
  },
  {
    id: 4,
    name: "BOPP_Floor_Marking_Tape",
    sizes: ["2", "2.5", "3", "4", "custom"],
    lengths: ["30", "65", "100", "150", "200", "250", "300", "custom"],
    image: strap3
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
        >
          <h2 className="text-lg font-semibold mb-2">{category.name}</h2>
          {category.image && (
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          <div>
            <h3 className="font-medium">Sizes:</h3>
            <p>{category.sizes.join(", ")}</p>
          </div>
          <div>
            <h3 className="font-medium">Lengths:</h3>
            <p>{category.lengths.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
