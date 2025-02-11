import { Item } from "@/types/item";
import React from "react";

interface ItemCardProps {
    item: Item;
}

const ItemCard : React.FC<ItemCardProps> = ({ item }) => {
    return (
        <div className="max-w-xs mx-auto border rounded-lg shadow-md overflow-hidden">
            <div className="w-full">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/2/28/Bakso_mi_bihun.jpg" 
                    alt={item.title} 
                    className="w-full object-cover"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.price}</p>
            </div>
        </div>
    );
}

export default ItemCard;