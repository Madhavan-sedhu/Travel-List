export default function Stats({ item }) {
  if (!item.length)
    return (
      <footer className="stats">
        <p>Start adding some items in your packing list ✈</p>
      </footer>
    );

  const numItems = item.length;
  const itemPacked = item.filter((items) => items.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      <p>
        You have {numItems} items on your list and you already packed{" "}
        {itemPacked}({percentage}%)
      </p>
    </footer>
  );
}
