const dataArray = [
  {
    id: crypto.randomUUID(),
    title: "First Item",
    description: "Description of the first item",
    tags: ["tag1", "tag2", "tag3"],
    priority: "High",
    isFavourite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Second Item",
    description: "Description of the second item",
    tags: ["tag2", "tag4"],
    priority: "Medium",
    isFavourite: false,
  },
];

function getAlldata() {
  return dataArray;
}
export { getAlldata };
