// Array of world countries
// Массив стран мира
const countries = [
  "Estonia", "Colombia", "China", "India", "Brazil", "Canada", "Australia", "Argentina", "Mexico", "France",
  "Germany", "Italy", "Spain", "United Kingdom", "Japan", "South Korea", "Indonesia", "Russia",
  "Egypt", "South Africa", "Saudi Arabia", "Turkey", "Iran", "Pakistan", "Bangladesh", "Vietnam",
  "Thailand", "Philippines", "Malaysia", "USA", "Peru", "Chile", "Venezuela", "Ecuador", "Cuba",
  "Belarus", "Ukraine", "Poland", "Czech Republic", "Sweden", "Norway", "Finland", "Denmark", "Greece",
  "Portugal", "Switzerland", "Austria", "Hungary", "Romania", "Bulgaria", "Serbia", "Croatia",
  "New Zealand", "United Arab Emirates"
];

//1. Sort alphabetically
//1. Сортировка в алфавитном порядке
const sortedAlphabetically = [...countries].sort((a,b) => a.localeCompare(b));
console.log("1. Sorted alphabetically:", sortedAlphabetically);

//2. Sort reverse alphabetically
//2. Сортировка в обратном алфавитном порядке
const sortedReverseAlphabetically = [...countries].sort((a,b) => b.localeCompare(a));
console.log("2. Sorted reverse alphabetically:", sortedReverseAlphabetically);

//3. Sort by length of country name (shortest to longest)
//3. Сортировка по длине названия страны (от короткого к длинному)
const sortedByLength = [...countries].sort((a,b) => b.length - a.length);
console.log("4. Sorted by length (longest to shortest):", sortedByLength);

//4. Sort by length of country name (longest to shortest)
//4. Сортировка по длине названия страны (от длинного к короткому)
const sortedByLengthDesc = [...countries].sort((a,b) => b.length - a.length);
console.log("4. Sorted by length (longest to shortest):", sortedByLengthDesc);

//5. Sort by number of vowels in country name (fewest to most)
//5. Cортировка по количеству гласных в названии страны (от меньшего к большему)
const countVowels = (str) => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(letter => vowels.includes(letter)).length;
};
const sortedByVowelCount = [...countries].sort((a,b) => countVowels(a) - countVowels(b));
console.log("5. Sorted by number of vowels (fewest to most):", sortedByVowelCount);
