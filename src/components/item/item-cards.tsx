import { Item } from "@/types/item";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

interface ItemCardsProps {
    items: Item[];
}

export function ItemCards({ items }: ItemCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
                <div key={item.id}>
                    <Card>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.price}</CardDescription>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
    );
}