# =============== Регулярные выражения ================

/ . /  - любой одиночный символ
/ [] / - любой из них, диапазоны
/ $ /  - конец строки
/ ^ /  - начало строки
/ \ /  - экранирование
/ \d / - любая цифра
/ \D / - что угодно, кроме цифр
/ \s / - пробелы
/ \S / - всё, кроме пробелов
/ \w / - буква
/ \W / - всё, кроме букв
/ \b / - граница слова
/ \B / - всё, кроме не границ слова

/i - флаг, указывающий на то, что регулярное выражение нечувствительно к регистру, 
то есть оно будет соответствовать как строчным, так и заглавным буквам.

# ========== Квантификация ==========
/ n{4} /gm     - искать символ n подряд 4 раза
/ n{4, 6} /gm  - искать n от 4 до 6
/ * /gm        - от 0 и выше / be* /
/ + /gm        - от 1 и выше
/ ? /gm        - либо ноль, либо 1 раз

# ========== Примеры =========
Проверка номера кредитки:
4444 4980 2342 9879
/ \d{4} \d{4} \d{4} \d{4} /gm
или
/ \d{4}\s\d{4}\s\d{4}\s\d{4} /gm

# ========== Replace ===========
function unscrambleEggs(word) {
  return word.replace(/egg/g, '');
}
// console.log(unscrambleEggs('ceggodegge heggeregge')); // "code here"
// console.log(unscrambleEggs('FeggUNegg KeggATeggA')); // "FUN KATA"

# ==============================
const upperLetter = (s.match(/[A-Z]/g) || []).length;
const lowerLetter = (s.match(/[a-z]/g) || []).length;
const strMatch = str.match(/[aeiou]/gi);

.replace(/^\d+/, (c) => String.fromCharCode(c))
.replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2')

Number(str.match(/[-+]?\d*/)?.join(''));

if (!str.match(/[\d+-]/)) return 0;

let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

# =======================================================
/*
6 kyu
Count the smiley faces!

Учитывая массив (arr) в качестве аргумента, завершите функцию countSmileys, 
которая должна вернуть общее количество улыбающихся лиц.

Правила улыбающегося лица:

Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как : или ;
У смайлика может быть нос, но не обязательно. Допустимые символы для носа - или ~
Каждое улыбающееся лицо должно иметь улыбающийся рот, 
который должен быть отмечен либо значком, ) либо D
Не допускается использование дополнительных символов, кроме упомянутых.

*/
function countSmileys(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([';D', ':-(', ':-)', ';~)'])); // 3
console.log(countSmileys([':D', ':~)', ';~D', ':)'])); // 4
console.log(countSmileys([':)', ':(', ':D', ':O', ':;'])); // 2!!!
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // 1

# -------------------------------------------------------
const user = 'Yar Klim <yar@mail.com>';

// const mail = user.match(/(?<=\<)(\S+)(?=>)/gm).join('');

// console.log(mail);

# -------------------------------------------------------
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
console.log(domainName('http://google.co.jp')); // google
console.log(domainName('https://github.com/carbonfive/raygun')); // github
console.log(domainName('http://www.zombie-bites.com')); // zombie-bites
console.log(domainName('www.xakep.ru')); // xakep

# --------------------------------------------------------
function isPangram(string) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const result = alphabet.every((el) => string.toLowerCase().includes(el));

	return result;
	
	// return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
console.log(isPangram('Pack my box with five dozen liquor jugs.'));

# ------------------------------------------------------------------
mouthSize=x=>x.match(/alligator/i) ? 'small' : 'wide';

# ------------------------------------------------------------------
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
# ------------------------------------------------------------------
Определить, есть ли в строке искомые подстроки:
function isLockNessMonster(s) {
  return /tree fiddy|three fifty|3.50/.test(s);
}

console.log(
  isLockNessMonster(
    'Please, three fifty would go a long way to help me find them'
  )
); // true
# -----------------------------------------------------------------
Проверка на букву и сравнение регистра
function sameCase(a, b) {
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1;

  const registerA = /[A-Z]/.test(a) ? 1 : 0;
  const registerB = /[A-Z]/.test(b) ? 1 : 0;

  return registerA === registerB ? 1 : 0;
}
console.log(sameCase('z', 'Z'));
# ----------------------------------------------------------------
Удаление елементов с конца
function noBoringZeros(n) {
  //   const str = n.toString();
  //   let lastIndex = null;

  //   for (let i = str.length - 1; i > 0; i--) {
  //     if (str[i] !== '0') {
  //       lastIndex = i;
  //       break;
  //     }
  //   }
  // 	return Number(n.toString().slice(0, lastIndex + 1));

  return +`${n}`.replace(/0*$/, '');
}
// console.log(noBoringZeros(96000));
# -------------------------------------------------------
String.prototype.digit = function () {
//   if (/\D/.test(this)) return false;
// 	return parseInt(this) <= 9;
	return /^\d$/.test(this);
};

// console.log('1'.digit());
# -------------------------------------------------------
const userNickName = (str) => {
  const userName = str
    .match(/^([^@]+)/g) // ^ - начало строки, ([^@]+) - диапазон от начала строки все символы до @
    .join('')[0]
    .toUpperCase();

  return userName;
};

// console.log(userNickName('yarklim@gmail.com')); // Y
# ------------------------------------------------------
/*
6 kyu
Word a10n (abbreviation)

Слово i18nявляется общепринятой аббревиатурой internationalizationв сообществе разработчиков, 
используемой вместо того, чтобы вводить слово целиком и пытаться правильно его написать. 
Точно так же a11yявляется аббревиатурой accessibility.

Напишите функцию, которая берет строку и превращает любые и все «слова» (см. ниже) 
в этой строке длиной 4 или больше в аббревиатуру, следуя этим правилам:

«Слово» — это последовательность букв алфавита. Согласно этому определению, любой другой символ, 
такой как пробел или дефис (например, «поездка на слоне»), разделит ряд букв на два слова 
(например, «слон» и «поездка»).
Сокращенная версия слова должна иметь первую букву, затем количество удаленных символов,
затем последнюю букву (например, «поездка на слонах» => «e6t r2e»).
Пример
abbreviate("elephant-rides are really fun!")
         ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
words (^):   "elephant" "rides" "are" "really" "fun"
               123456     123     1     1234     1
ignore short words:               X              X

abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
all non-word characters (*) remain in place
                    "-"      " "    " "     " "     "!"
=== "e6t-r3s are r4y fun!"
*/
function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
console.log(abbreviate('internationalization')); // "i18n" elephant-rides are really fun!
console.log(abbreviate('elephant-rides are really fun!')); // 'e6t-r3s are r4y fun!';
console.log(abbreviate('elephant-ride')); // 'e6t-r2e'
# ------------------------------------------------------------------------------
function kebabize(str) {
  return str
    .replace(/[^a-z]/gi, '')
    .replace(/^[A-Z]/, (c) => c.toLowerCase())
    .replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
console.log(kebabize('myCamelCasedString')); // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')); // 'my-camel-has-humps'
console.log(kebabize('CAMEL')); // 'c-a-m-e-l'

# -------------------------------------------------------------------------------
Напишите простое регулярное выражение для проверки имени пользователя. Допустимые символы: строчные буквы, числа, нижнее подчеркивание.
Длина должна быть от 4 до 16 символов (включая оба).

function validateUsr(username) {
  const res = /^[a-z0-9_]{4,16}$/g.test(username);
  return res;
}

console.log(validateUsr('asddsa')); // true
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas')); // false
console.log(validateUsr('asd43_34')); // true


<!-- ^ - начало строки.
[a-z0-9_] - символы, которые могут присутствовать в имени пользователя: строчные буквы от "a" до "z", цифры от "0" до "9" и символ "_".
{4,16} - длина имени пользователя должна быть от 4 до 16 символов (включая оба значения).
$ - конец строки. -->

# -------------------------------------------------------------------------------
Проверка, начинается ли строка с данных символов:

function validateCode(code) {
  return /^[1-3]/g.test(code);
}

console.log(validateCode(123)); // true
console.log(validateCode(9453)); // false

# -------------------------------------------------------------------------------
/*
Вам нужно написать регулярное выражение, которое будет проверять пароль, чтобы убедиться, 
что он соответствует следующим критериям:

Длина не менее шести символов
содержит строчную букву
содержит заглавную букву
содержит цифру
содержит только буквенно-цифровые символы (обратите внимание, что '_'это не буквенно-цифровые символы)
*/
const str = 'fjd3IR9';
const str2 = 'DSsJKHD23';
const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

console.log(REGEXP.test(str2));

# -------------------------------------------------------------------------------

function isDigit(s) {
  const regex = /^[\s]?[-]?[0-9]*\.?[0-9]+[\s]?$/;
  return regex.test(s);
}

// Примеры использования функции:
console.log(isDigit('3')); // true
console.log(isDigit('  3  ')); // true
console.log(isDigit('-3.23')); // true
console.log(isDigit('3-4')); // false
console.log(isDigit('  3   5')); // false
console.log(isDigit('3 5')); // false
console.log(isDigit('zero')); // false

# -----------------------------------------------------------------------------
// Замена строчных гласных на заглавные гласные
function swap(st){
  return st.replace(/[aeiou]/g, v => v.toUpperCase() )
}
# -----------------------------------------------------------------------------
// Напишите простую функцию, проверяющую, 
// содержит ли строка слово «привет» на разных языках.
function validateHello(greetings) {
  const res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
  return res;
}
console.log(validateHello('ahoj')); //true;
console.log(validateHello('meh')); //false;
console.log(validateHello('how! TRES! hombRE la BIeN')); //false;
console.log(
  validateHello(
    'ViSTa hOw? Hasta, BIeN, VisTA, hOW: tres; HastA. HAstA doINg hAsta, vista; WIE! PaSA'
  )
); //false;
# -----------------------------------------------------------------------------
String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
};

// console.log(''.vowel()); // false);
// console.log('a'.vowel()); // true);
// console.log('E'.vowel()); // true);
// console.log('ou'.vowel()); // false);
// console.log('z'.vowel()); // false);
// console.log('lol'.vowel()); // false);