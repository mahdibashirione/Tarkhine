export default function getTime() {
  const date = new Date();

  const hours = date.getHours() < 12 ? "0" + date.getHours() : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  return hours + ":" + minutes;
}
