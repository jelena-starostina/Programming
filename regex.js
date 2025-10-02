/** 
 * РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ
 * REGULAR EXPRESSION of RegExp
 * 
 * RegExp - это последовательность символов,
 * который определяет шаблон поиска.
 * 
 * Для чего используется
 * 
 * 1. Проверка, соответствует ли строка шаблону (например валидация email)
 * 2. Поиск подстроки в строке
 * 3. Замены найденных подстрок
 * 4. извлечение информации из строки.
 * 
 * ОСНОВНОЙ СИНТАКСИС
 * 
 * В JSрегулярное выражение создаётся двумя способами
 * 1. Литературный: cpnst regex = /шаблон/флаг
 * это способ используется чаще всего.
 * 
 * 2. Через конструктор:  const regex = new RegExp("шаблон","флаг")
 * 
 * ФЛАГИ
 * i (ignore case) - Игнорировать регистр
 * g (global) - Глобальный поиск. То есть найти совпадения во всей строке
 * m (multiline) - многострочный режим
 * u (unicode) - включает поддержку unicode
 * s (dotAll) - позволяет символу "." соответствовать также и символам новой строки
 * 
 * ПРИМЕРЫ
 */

//1. Найти слово hello  в строке
const regex1 =  /hello/;
const str1 = "hello world"
console.log("Пример 1:", regex1.test(str1));

//2. флог i - игнорирование регистра
const regex2 = /hello/i;
const str2 = "Hell World";
console.log("Пример 2: ", regex2.test(str2));

//3. Используем флаг g - для глобального поиска
const regex3 = /l/g;
const str3 = "hello World";
console.log("Пример 3: ", str3.match(regex3));

//4. Поиск символов
const regex4 = /[aeiou]/g;
const str4 = "Hello World";
console.log("Пример 4: ", str4.match(regex4));

//5. Диапазон символов
const regex5 = /[a-f]/g;
const str5 = "abcde fghij";
console.log("Пример 5: ", str5.match(regex5));

//6. Метасимвол \d (digit - цифра)
const regex6 = /\d/g;
const str6 = "my phone number is 123-456-7890";
console.log("Пример6: ", str6.match(regex6));

//7. Металимвол \w (word character)
//любая латинская буква, цифра или символ подчёркивания "_"
//это эквивалентно к шаблону [a-zA-Z0-9_]
const regex7 =  /\w/g;
const str7 = "user_id_123";
console.log("Пример 7: ", str7.match(regex7));

//8. Метасимвол \s (пробельный символ)
//найдёт любой пробел, табуляцию, перенос строки
const regex8 = /\s/g;
const str8 = "hello\tworld\nnew line";
console.log("Пример 8: ", str8.match(regex8));

//9. Инвертированые металимволы \D \W \S
const regex9 = /\S/g;
const str9 = "ID: 12345";
console.log("Пример 9: ", str9.match(regex9));

//КВАНТИФИКАТОРЫ (указание количества повторений)
//применяются к символу оло группе, стоящей ПЕРЕД ними.

//10. квантификатор *
const regex10 = /go*/g;
const str10 = "go goo gooo";
console.log("Пример 10: ", str10.match(regex10));

//11. Квантификатор ?
//colou?r - ищем "colo", затем "u" может быть, а может не быть, но потом -"r"
const regex11 = /colou?r/;
console.log("Пример 11 (color): ", regex11.test("color"));
console.log("Пример 11 (color): ", regex11.test("colour"));

//12. Rdfynbabrfnjh {n}
//{n} - количество повторений
const regex12 = /\d{3}/g;
const str12 = "123 45 6789 123";
console.log("Пример 12: ", str12.match(regex12));


//13. Квантификатор {n,}
//{n,} - n или больше вовторений
const regex13 = /\d{2,}/g;
const str13 = "1 12 123 1234";
console.log("Пример 13: ", str13.match(regex13));

//14. Квантификатор {n,m}
//{n,m} - от n до m
const regex14 = /\d{2,3}/g;
const str14 = "1 12 123 1234";
console.log("Пример 14: ", str14.match(regex14));

//ГРАНИЦЫ И ЯКОРЯ

//15. Якорь ^
//^ - начало строки. Этот шаблон должен находится в начале
const regex15 = /^Hello/;
const str15 = "Hello World!";
console.log("Пример 15: ", regex15.test(str15));

//16. Якорь $
//$ - конец строки. Шаблон должен находиться в самом конце
const regex16 = /World!$/;
const str16 = "Hello World!";
console.log("Пример 16: ", regex16.test(str16));


//17. Группировка ()
//() - группирует несколько символов в единое целое. Можно применять квантификаторы
const regex17 = /(ha)/g;
const str17 = "hahaha ha hah";
console.log("Пример 17: ", str17.match(regex17));


//18 Альтернатива |  (Или)
//работает как дизьюнкция
const regex18 = /cat|dog/g;
const str18 = "I like cats and dogs.";
console.log("Пример 18: "б str18.match(regex18));

