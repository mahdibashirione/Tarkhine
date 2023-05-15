export default function getPersianDate() {
  const date = new Date();
  const option = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString("fa-IR", option);
}
