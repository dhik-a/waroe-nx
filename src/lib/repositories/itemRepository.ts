import { Item } from "@/types/item";


// Read all
export async function getItems() {
    const response = await fetch(`${process.env.API_URL}/items`);
    return (await response.json()) as Item[];
  }