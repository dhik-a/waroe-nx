import { Item } from "@/types/item";
import ItemCard from "../item-card/item-card";

interface ItemGridProps {
    items: Item[];
}

export function ItemGrid({ items }: ItemGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {items.map((item) => (
                <div key={item.id}>
                    <ItemCard item={item} />
                </div>
            ))}
        </div>
    );
}