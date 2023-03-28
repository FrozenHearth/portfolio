export default function randomFiveDigitNumber() {
  return (Math.floor(Math.random() * 90000) + 10000).toString();
}
