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

//6. Случайная сортировка
//6. Randon sorting
const randomSort = [...countries].sort(() => Math.random() - 0,5);
console.log("6. Randomly sorted:", randomSort);

//Классические алгоритмы сортировки
//classic sorting algorithms

//1. Пузырьковая сортировка (Bubble Sort)
//1. Bubble Sort
//Идея: многократно проходить по массиву, сравнивая соседние элементы
//и меняя их местами, если они в неправильном порядке.
//O(n^2) - квадратная сложность
//Очень медленная для больших массивов

const bubbleSort = (arr) => {
  const newArr = [...arr];
  const n = newArr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n -1; j++) {
      if (newArr[j].localeCompare(newArr[j + 1]) > 0) {
        //меняем элементы местами
        [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
      }
    }
  }
  return newArr;
}
console.log("Bubble sorted:", bubbleSort(countries));


//2. Сортировка выбором (Selection Sort)
//2. Selection Sort
//Идея: находить наименьший (или наибольший) элимент в массиве
//и помещать его в начало (или конец) отсортированной части массива.
//O(n^2) - квадратичная сложность
//Тоже медленная для больших массивов

//3. Сортировка вставками (Insertion Sort)
//3. Insertion Sort
//Идея: строить отсортированный массив по одному элементу,
//вставляя каждый новый элемент в его правильное место.
//O(n^2) - квадратичная сложность
//эффективна  для небольших массивов или почти отсортированных данных

//4.Bogo Sort (Шутка)
//4.Bogo Sort (joke Sort)
//Идея:Случайным образом перемешивать массив, пока он не будет отсортирован.
//O((n+1)!) - факторная сложность
//очень неэффективный и нереалистичный алгоритм, используемый только в образовательных целях.



