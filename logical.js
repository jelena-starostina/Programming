// Логическое И (AND) - Конъюкция &&
// Истинно (возвращает истину) только если оба условия истинны
console.log(true && true); // true
 console.log(true && false); // false
 console.log(false && true); // false
 console.log(false && false); // false

 //Логическое умножение (результат может быть только 0 или 1)
 /** 
  *  1 * 1 = 1
  *  0 * 1 = 0
  *  1 * 0 = 0
  *  0 * 0 = 0
  */

 let age = 25;
 let hasDriversLicense = true;
 //Человек может арендовать машину только если ему больше 18
 //и у него есть водительские права.
 let canRentCar = age > 18 && hasDriversLicense;
 console.log(`может ли арендовать машину? Ответ: $;{canRentCar}`);

 //Логическое ИЛИ (OR - ||). Дизъюнкция.
 //возвращает истину, если хотя бы одно условие истинно.
 console.log("---Логическое ИЛИ, Дизъюнкция---");
 console.log("true || true: ", true || true);
 console.log("true || false: ", true || false);
 console.log("false || true: ", false || true);
 console.log("false || false: ", false || false);

 let hasBusTicket = false;
 let hasTrainTicket = true;
 //Человек может уехать из Йыхви, если у него есть билет
 //на автобус или билет на поезд
 let canLeave = hasBusTicket || hasTrainTicket;
 console.log(`может ли человек уехать? Ответ: ${canLeave}`);

 /**
  * логическое сложение ИЛИ
  *  1 + 1 = 1
  *  0 + 1 = 1
  *  1 + 0 = 1
  *  0 + 0 = 0
  * 
  */

 //Логическое НЕ (NOT) операнд - "!""
 //инвертирует (на на противоположное) логическое значение
 console.log("---Логическое НЕ (NOT)---");
 console.log("!true ", !true);
 console.log("!false ", !false);

 let isDoorOpen = false;
 console.log(`Дверь закрыта? Ответ: ${!isDoorOpen}`);

 //Комбинированные примеры
 console.log("---Комбинированные примеры---");

 //доступ к закрытому разделу сайта
 let isUserAutorized = true;
 let accessLevel = "admin";
 let hasPremium = false;

 //Доступ разрешён, если пользователь авторизован И он является админом
 //Или у него есть Премиум-подписка

 let isAccessGranted = isUserAutorized && (accessLevel === "admin" || hasPremium);
 console.log(`доступ разрешён? Ответ: ${isAccessGranted}`);

 //Пример получения скидки в магазине
 let purchaseAmount = 120;
 let hasLoyaltyCard = false;
 let dayOfWeek = "воскресенье";

 //Скидка даётся, если сумма покупки больше 100
 //И у клиента есть скидочная карта ИЛИ сегодня выходной.
 let hasDiscount = (purchaseAmount > 100 && hasLoyaltyCard) || (dayOfWeek === "суббота" || dayOfWeek === "воскресенье");

 console.log(`Получу я скидку? Ответ: ${hasDiscount}`);

 //Пример Зомби-апокалипсис
 let = hasWaepon = true;
 let = hasShelter = true;
 let isFastRunner = true;

 //чтобы пережить ночь, нужно оружие И (найти укрытие ИЛИ уметь быстро бегать)
 let iWillSurvive = hasWaepon && (hasShelter || isFastRunner);
 console.log(`Есть ли у тебя шанс выжить? Ответ: ${iWillSurvive}`);

 //Пример с драконами
 let isKnightBrave = true;
 let hasMagicSword = false;
 let isDragonSlepp = true;

 // Герой может забрать золото, если (он храбрый парень И у него есть магический меч)
 //ИЛИ если дракон просто спит
 let canGetTreasury = (isKnightBrave && hasMagicSword) || isDragonSlepp
 console.log(`Я получу сокровище дракона? Ответ: ${canGetTreasury}`);

 //пример агент 007
 let knowsCode = true;
 let hasCorrectCard = true;
 let isLaserActive = true;

 //Агент может войти в хранилище, если он знает код И у него правильная карта,
 //И лазерная сетка НЕ активирована.

 let canEnter = knowsCode && hasCorrectCard && !isLaserActive;
 console.log(`агент 007 может войти в хранилище? Ответ: ${canEnter}`);

 //Пример - организация вечеринки в пятницу
 let hasGoodMusic = true;
 let hasEnooghDrinks = false;
 let hasBotDelivery = true;
 let hasFriendsAvailable = true;
 let isNaigborAngry = true;
 let hasSoundProofing =true;

 //условия
 //1. должна быть хорошая музыка И (достаточно напитков ИЛИ доступна доставка еды)
 //2. И все друзья могут прийти
 //3. И (сосед не злится ИЛИ в квартире звукоизоляция)

 let isFantasticParty = (hasGoodMusic && (hasEnooghDrinks || hasBotDelivery)) && hasFriendsAvailable && (!isNaigborAngry || hasSoundProofing); 
 console.log(`Вечеринке быть? ответ: ${isFantasticParty}`);