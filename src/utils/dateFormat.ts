function formatDate(date: Date) {
  const d = new Date(date);
  return `${d.toLocaleString("default", { month: "short" })} ${d.getDate()}, ${d.getFullYear()}`;
}

export { formatDate };
