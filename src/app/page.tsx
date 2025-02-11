import { ItemGrid } from "@/components/item-grid/item-grid";
import { getItems } from "@/lib/repositories/itemRepository";
import { Item } from "@/types/item";

export default async function HomePage() {
  const items : Item[] = await getItems();
  return <ItemGrid items={items} />;
}
