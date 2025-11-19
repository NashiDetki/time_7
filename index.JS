// let phrases = [
//   "отпарвить другу смешную гифку",
//   "посмотреть интересный фильм",
//   "разобраться ,о чём поют реперы",
//   "расставить книги на полке по цвету",
//   "чат с друзьями в Telegram",
//   "смотреть интересный блог",
// ]

let phrases = [
  {text: "отпарвить другу смешную гифку",image :'./image/1.gif'},
  {text: "посмотреть интересный фильм", image :'./image/2.png'},
  {text: "разобраться ,о чём поют реперы",image :'./image/3.png'},
  {text: "расставить книги на полке по цвету",image :'./image/4.png'},
  {text: "чат с друзьями в Telegram", image :'./image/5.png'},
 {text: "смотреть интересный блог", image :'./image/6.png'},
]

console.log(phrases);
let button = document.querySelector(".button");
let phrase = document.querySelector(".phrase");
let image = document.querySelector(".image");
console.log(button);
console.log(phrase);
console.log(image);

// console.log( phrases[1].text)


// let userData = {name: 'Roma',
// age: 67,
// city:'kumertay',
// getAge(){
// console.log('age user $(this.age) years.')
// }
// }
// console.log(userData);
// console.log(userData.name);
// let userInfo = 'city'
// // userData.gender = 'man'
// console.log(userData[userInfo]);
// userData.getAge();
// userData.gender = 'man'
// console.log(userData);
// delete userData.age
// console.log(userData);

// let raketa = {tyttle: 'proton',
// massa:1099,
// city: 'Russia'
// getgruz(){
// console.log('gruz user $(this.24) tonnes.');
// }
// }
// console.log(raketa);
// console.log(raketa.tyttle);
// let useraketa = 'city'
// console.log(raketa[useraketa]);

let randIndex = Math.random();
// console.log(randIndex * pharases.length);
// console.log(Math.floor(randIndex * pharases.length));
function getRandomElement() {
  let randIndex = Math.floor(Math.random() * phrases.length);
  console.log(randIndex);
  console.log(phrases[randIndex]);

  phrase.textContent = phrases[randIndex].text;
image.src = phrases[randIndex].image;
  
}

// getRandomElement();

button.addEventListener("click", getRandomElement);
// let i = 0;   //   console.log(randIndex);
//   console.log(phrases[randIndex]);                                                               
// while (i<  pharases.length){
// console.log(i);
// i = i + 1;
// }

// for (let i = 0; i < pharases.length; i = i + 1){
// console.log(pharases[i])

// }
// function setHello(){
//     console.log('Hello , Roma')
// }

// function setHello(phrase){
//     console.log('не писать код, а' , phrase)}

//     setHello(pharases[0]);
//     setHello(pharases[1]);
//     setHello(pharases[2]);
//     setHello(pharases[3]);
//    setHello(pharases[4]);
//    setHello(pharases[5]);

//    for (let i = pharases.length; i >= pharases.length; i = i - 1){
// setHello(pharases[i]);
//    }
// function setarea(a , b){
//     console.log('площадь прямоугольника = ', a * b)
// }
// setarearoom = setarea(20,30)+ setarea(10,30) + setarea(5,30);
// console.log('общая площадь квартиры =' , setarearoom, 'm2');
// setarea(10, 10);
// function setA(a , b){
//  return((a + b) * 2);
// }
// console.log('периметр 1 комнаты' setA(5,6));
// console.log('периметр' (6,5));
// function setperimetors(){
//     return(setperimetors(2, 3)+setperimetors(1, 3))
//
// }
