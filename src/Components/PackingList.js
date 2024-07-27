import { useState } from "react";
import List from "./List";

export default function PackingList({
  items,
  onDeleteItems,
  onToggle,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <List
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description order</option>
          <option value="packed">sort by packed order</option>
        </select>
        <button onClick={onClear}>clear list</button>
      </div>
    </div>
  );
}
