function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

function formatDate(date: Date) {
  const d = new Date(date);
  const day = d.getDate();
  const dayWithSuffix = day + getOrdinalSuffix(day);
  return `${dayWithSuffix} ${d.toLocaleString("default", { month: "long" })}, ${d.getFullYear()}`;
}

export { formatDate };
