export default function sortCharsHealth(characters) {
  return characters.sort((a, b) => b.health - a.health);
}
