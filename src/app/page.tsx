import { ItemCards } from "@/components/item/item-cards";
import { getItems } from "@/lib/repositories/itemRepository";
import { Item } from "@/types/item";

export default async function HomePage() {
  const items : Item[] = await getItems();
  return <ItemCards items={items} />;
}
