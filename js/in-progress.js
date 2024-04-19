//?-------------------------------------------------------
/*
4 kyu
Strings Mix

Имея две строки s1 и s2, мы хотим визуализировать, насколько они различаются. 
Мы будем учитывать только строчные буквы (от a до z). 
Сначала давайте подсчитаем частоту каждой строчной буквы в s1 и s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

Таким образом, максимум для «a» в s1 и s2 равен 4 из s1; максимум для «b» равен 3 из s2. 
В дальнейшем мы не будем рассматривать буквы, максимальное количество которых меньше 
или равно 1.

Мы можем резюмировать различия между s1 и s2 в следующей строке: 
"1:aaaa/2:bbb" где 1 in 1:aaaa означает строку s1 и aaaa потому, что максимум для a равен 4. 
Таким же образом 2:bbb обозначается строка s2 и bbb потому что максимум для bравен 3.

Задача состоит в том, чтобы создать строку, в которой каждая строчная буква s1 или s2 
встречается столько раз, сколько ее максимум, если этот максимум строго больше 1 ; 
перед этими буквами будет стоять номер строки, в которой они появляются, 
с их максимальным значением и :. Если максимум находится как в s1, так и в s2, 
префикс равен =:.

В результате подстроки (например, подстрока 2:nnnnn или 1:hhh; она содержит префикс) 
будут располагаться в порядке убывания их длины, а при одинаковой длине — 
в возрастающем лексикографическом порядке (буквы и цифры — более точно отсортированы 
по кодовой точке); различные группы будут разделены символом '/'. 


Надеюсь, другие примеры могут прояснить это.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
*/

//? ----------------------------------------------------------
/*
5 kyu
Common Denominators

Общие знаменатели

У вас будет список рациональных чисел в виде

{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
or
[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
or
[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
где все числа являются положительными целыми числами. 
Вы должны получить результат в виде:

(N_1, D) ... (N_n, D) 
or
[ [N_1, D] ... [N_n, D] ] 
or
[ (N_1', D) , ... (N_n, D) ] 
or
{{N_1, D} ... {N_n, D}} 
or
"(N_1, D) ... (N_n, D)"
в зависимости от языка (см. примеры тестов), в котором D как можно меньше и

N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
Пример:
convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
Примечание:
В связи с тем, что первые переводы были написаны давно - более 6 лет 
- в этих первых переводах есть только несократимые дроби.

В более новых переводах есть некоторые сократимые дроби. 
Чтобы быть в безопасности, лучше проделать немного больше работы, упростив дроби, 
даже если это не обязательно.
*/

function convertFrac(lst) {
  //Your code here
}

// console.log(
//   convertFrac([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//   ])
// ); // "(6,12)(4,12)(3,12)"

//? --------------------------------------------------------
function closeCompare(a, b, margin) {
  return (margin && Math.abs(a - b)) >= margin
    ? 1
    : a < b
    ? -1
    : a === b
    ? 0
    : 1;
}
// console.log(closeCompare(8.1, 5, 3));
//? ----------------------------------------------------------
class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z'];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  return players.length >= goose
    ? players[goose - 1].name
    : players[(goose % players.length) - 1].name;
}

// console.log(duckDuckGoose(players, 10)); // z
// console.log(duckDuckGoose(players, 28)); // g

//? --------------------------------------------------------

function mix(s1, s2) {
  if (s1 === s2) return '';

  const obj1 = {};
  const obj2 = {};
  const lettersArr1 = s1.match(/[a-z]/g);
  const lettersArr2 = s2.match(/[a-z]/g);

  for (const el of s1) {
    if (lettersArr2.includes(el)) {
      if (!obj1[el]) obj1[el] = 0;
      obj1[el] += 1;
    }
  }

  for (const el of s2) {
    if (lettersArr1.includes(el)) {
      if (!obj2[el]) obj2[el] = 0;
      obj2[el] += 1;
    }
  }

  const sortLetters1 = new Array(
    ...Object.entries(obj1)
      .filter((el) => el[1] > 1)
      .sort((a, b) => b[1] - a[1])
  );
  const sortLetters2 = new Array(
    ...Object.entries(obj2)
      .filter((el) => el[1] > 1)
      .sort((a, b) => b[1] - a[1])
  );

  // for (let i = 0; i < )

  let result = '';

  return sortLetters1;
}
// console.log(mix('Are they here', 'yes, they are here')); // "2:eeeee/2:yy/=:hh/=:rr"
// console.log(mix('A generation must confront the looming ', 'codewarrs')); // "1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr"
// console.log(mix('codewars', 'codewars')); // ''

//? ------------------------------------------------------
/*
5 kyu
Integers: Recreation One

1, 246, 2, 123, 3, 82, 6, 41являются делителями числа 246. 
Возводя эти делители в квадрат, получаем: 1, 60516, 4, 15129, 9, 6724, 36, 1681. 
Сумма этих квадратов 84100 равна 290 * 290.

Задача
Найдите все целые числа между m и n(m и n целых чисел с 1 <= m <= n) такие, 
что сумма их квадратов делителей сама является квадратом.

Мы вернем массив подмассивов или кортежей (в C — массив пар) или строку. 
Подмассивы (или кортежи, или пары) будут состоять из двух элементов: сначала числа, 
квадраты делителей которого являются квадратами, а затем суммы квадратов делителей.
*/

function listSquared(m, n) {
  // your code
}
// console.log(listSquared(1, 250)); // [[1, 1], [42, 2500], [246, 84100]]
// console.log(listSquared(42, 250)); // [[42, 2500], [246, 84100]]
// console.log(listSquared(250, 500)); // [[287, 84100]]
//? ----------------------------------

/*
4 kyu
Explosive Sum

Сколькими способами можно получить сумму чисел?
Из Википедии: https://en.wikipedia.org/wiki/Partition_(number_theory)

В теории чисел и комбинаторике разбиение натурального числа n , 
также называемое целочисленным разбиением , — это способ записи n в виде суммы 
положительных целых чисел. Две суммы, отличающиеся только порядком слагаемых, 
считаются одним и тем же разбиением. Если порядок имеет значение, сумма становится 
композицией. Например, число 4 можно разделить пятью различными способами:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1
Примеры
Базовый
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42
Взрывной
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/
function sum(num) {
  return 0;
}
// console.log(sum(1)) // 1
// console.log(sum(4)) // 5
// console.log(sum(10)) // 42
// console.log(sum(50)) // 204226
// ? -------------------------------------------------------
/*
4 kyu Square into Squares. Protect trees!

Учитывая положительное целое число n, вернуть строго возрастающую 
последовательность чисел (список/массив/строку в зависимости от языка) так, 
чтобы сумма квадратов была равна n².

Если решений несколько (а они будут), верните, насколько это возможно, 
результат с максимально возможными значениями:

Примеры
decompose(11)должен вернуться [1,2,4,10]. Обратите внимание, 
что на самом деле существует два способа разложить 
11²: 11² = 121 = 1 + 4 + 16 + 100 = 1² + 2² + 4² + 10², 
но не возвращать результат [2,6,9], поскольку 9 меньше 10.

For decompose(50)не возвращать [1, 1, 4, 9, 49], но [1, 3, 5, 8, 49] 
поскольку [1, 1, 4, 9, 49] не образует строго возрастающую последовательность.

Примечание
Ни то [n], ни другое не [1,1,1,…,1]являются действительными решениями. 
Если допустимого решения не существует, верните nil, null,
*/
function decompose(n) {
  // your code
}
// console.log(decompose(11)); // [1,2,4,10]
// console.log(decompose(50)); // [1, 3, 5, 8, 49]
// console.log(decompose(5)); // [3, 4]
// ? -------------------------------------------------------
/*
Получится ли дать сдачу за товар стоимостью 5 долл?
*/
const checkChange = (arr) => {
  if (arr[0] !== 5) return false;

  const wallet = {};
  let result = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      wallet[arr[i]] = wallet[arr[i]] + 1 || 1;
    }
    if (arr[i] > 5) {
      let temp = arr[i];
      for (const el in wallet) {
        if (wallet[el] < 1) {
          continue;
        } else {
          temp -= Number(el);
          wallet[el] -= 1;
        }
      }

      wallet[arr[i]] = wallet[arr[i]] + 1 || 1;
      console.log(temp);
    }
  }

  return wallet;
};

// console.log(checkChange([5, 5, 5, 10, 20])); // true
// console.log(checkChange([5, 5, 5, 15])); // true
// console.log(checkChange([5, 5, 10, 20])); // true
// console.log(checkChange([5, 10, 20])); // false
// console.log(checkChange([5, 10, 5, 10, 20])); // false

// ? ----------------------------------------------------------
/*
7 kyu Linked Lists - Push & BuildOneTwoThree
Связанные списки — Push & BuildOneTwoThree

Напишите функции push() и buildOneTwoThree(), чтобы легко обновлять и 
инициализировать связанные списки. 
Попробуйте использовать функцию push() в вашей функции buildOneTwoThree().

Вот пример использования push():

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
Функция push принимает параметры head и data, где head — это либо объект узла, 
либо значение null/None/nil. Ваша реализация push должна иметь возможность 
создавать новый связанный список/узел, когда заголовок имеет значение null/None/nil.

Функция buildOneTwoThree должна создавать и возвращать связанный список с 
тремя узлами:1 -> 2 -> 3 -> null
*/
function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Go.
}

function buildOneTwoThree() {
  // Go.
}

// console.log(push(null, 1).data) // 1
// console.log(push(null, 1).next) // null
// console.log(push(new Node(1), 2).data) // 2
// console.log(push(new Node(1), 2).next.data) // 1
// console.log(buildOneTwoThree().data) // 1
// console.log(buildOneTwoThree().next.data) // 2
// console.log(buildOneTwoThree().next.next.data) // 3
// console.log(buildOneTwoThree().next.next.next) // null
// ? ----------------------------------------------------------
/*
6 kyu Linked Lists - Length & Count

Связанные списки — длина и количество

Реализовать lengthдля подсчета количества узлов в связанном списке.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Реализуйте Count() для подсчета вхождений целого числа в связанный список.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
Я решил объединить эти две функции в одном Kata, поскольку они обе очень похожи.

Функции push()/ Push()и buildOneTwoThree()/ BuildOneTwoThree()переопределять не нужно.
*/

// function Node(data) {
//   this.data = data;
//   this.next = null;
// }

// function length(head) {
//   // Your code goes here.
// }

// function count(head, data) {
//   // Your code goes here.
// }
// console.log(length(null)) // 0
// console.log(length(new Node(99))) // 1
// console.log(length(buildOneTwoThree())) // 3
//   console.log(count(list, 1)) // 1
//   console.log(count(list, 2)) // 1
//   console.log(count(list, 3)) // 1
// console.log(count(list, 99)) // 0
//   console.log(count(null, 1)) // 0

// ? -----------------------------------------------------------
/*
6 kyu Unary function chainer

Ваша задача — написать функцию более высокого порядка для объединения списка унарных функций. 
Другими словами, он должен возвращать функцию, которая выполняет складку влево для заданных функций.

chained([a,b,c,d])(input)
Должен дать тот же результат, что и

d(c(b(a(input))))
*/
function chained(functions) {
  return function () {};
}

// function f1(x) {
//   return x * 2;
// }
// function f2(x) {
//   return x + 2;
// }
// function f3(x) {
//   return Math.pow(x, 2);
// }

// function f4(x) {
//   return x.split('').concat().reverse().join('').split(' ');
// }
// function f5(xs) {
//   return xs.concat().reverse();
// }
// function f6(xs) {
//   return xs.join('_');
// }

// functions,      arg,    expected
// console.log(chained([f1, f2, f3])) //  0, 4);
// console.log(chained([f1, f2, f3])) //  2, 36);
// console.log(chained([f3, f2, f1])) //  2, 12);
// console.log(chained([f4, f5, f6])) //  "lorem ipsum", "merol_muspi");
// ? -----------------------------------------------------------
