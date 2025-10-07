//Применение регулярных выражений
////Using regular expressions
 
//Реализовать примеры и сделать упражнения.Загрузить на GitHub.
const funRegex1= /\b(cat|dog|hamster)\b/g; //классический имена питомцев
const funStr1 = 'Office zoo log: cat, cactus, dog, doge, hamster, hamster again!';
console.log('Example 1:', funStr1.match(funRegex1)); //['cat', 'dog', 'hamster','hamster']
 
const funRegex2= /\bha(ha)*\b/gi; //tidy laughter built from "ha" blocks (аккуратный смех из блоков "ха")
const funStr2= 'Meeting notes: ha haha HAHAHA haa haaah';
console.log('Example 2:', funStr2.match(funRegex2)); //['ha','haha', 'HAHAHA']
 
 
const funRegex3 = /\bCaptain\s\w+/g;
const funStr3 = 'Comic con scedule: Captain Keyboard vs Captain Obvious vs captain planet';
console.log('Example 3:', funStr3.match(funRegex3));
 
 
const funRegex4 = /\b\d{3}\b/g;//трехзначные секкретные коды;
const funStr4 = 'Escape room locks: 007 123 9999 404 300';
console.log('Example 4:', funStr4.match(funRegex4)); 
 
const funRegex5 = /\bpizza!{0,2}/g; //пицца с необязательными знакакми восторга
const funStr5 = 'Food poll: pizza pizza! pizza!! bruschetta?';
console.log('Example 5:', funStr5.match(funRegex5)); 
 
 
 
const funRegex6 = /#\w+/g; //хэштеги для командного табло;
const funStr6 = 'Hackathon hashtags: #sliipIsForLater #winning #404teamFound';
console.log('Example 6:', funStr6.match(funRegex6)); 
 
const funRegex7 = /\b\w+ify\b/g; //стартап словечки с окончанием "ify";
const funStr7 = 'Startup pitch: gamify, unicornify, coffee, debugify, stuff';
console.log('Example 7:', funStr7.match(funRegex7)); 
 
const funRegex8 = /\b\d{1,2}:\d{2}\b/g; //простые отметки времени;
const funStr8 = 'Train times: 7:05, 12:30, 24:99, 18:45';
console.log('Example 8:', funStr8.match(funRegex8)); 
 
const funRegex9 = /\b(one|two|three)\b/gi; //считалочка с криками;
const funStr9 = 'Countdown remix: one TWO tree three';
console.log('Example 9:', funStr9.match(funRegex9)); 
 
const funRegex10 = /TODO(?=: )/g; //заметка TODO  с аккуратным двоеточием и пробелом;
const funStr10 = 'TODO: learn regex, TODONT: ignore tests, TODO : buy coffee';
console.log('Example 10:', funStr10.match(funRegex10)); 
 
 
// Упражнения :
 
// Упражнение 1: 
const funRegex11 = /\b\w*cake\b/g;
const funStr11 = "Cupcake pancake sneakysnake";
console.log(funStr11.match(funRegex11));
 
 
 
 
 
// Упражнение 2: 
const funRegex12 = /:\)|:\(|:D/g;
const funStr12 = "Mood log: :) :( :P :D";
console.log(funStr12.match(funRegex12));
