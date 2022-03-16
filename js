1)Что такое промисы?
; Промисы-промисами считается специальный объект,в котором он хранит свое состояние,колбэки и также текущие результаты,только в том случае если они есть.При создании
;new Promise ((resolve,reject) =>...)автоматически должен запустится функция-аргумент,которая должна вызвать(resolve,reject),а когда ошибка то должно запустится reject(error)

  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);

});

console.log(promise1);

; 2)Конструкция async/await- async/await помогает нам писать асинхронный код синхронно,но при этом не блокируя стек вызовов.С помощью его мы блокируем код и ждем пока выполнится промис,после этого мы продолжаем.При этом все что внутри работает при генераторах.

queryDatabase({ username: 'Arfat'})
  .then((user) => {
    const image_url = user.profile_img_url;
    return getImageByURL('someServer.com/q=${image_url}')
      .then(image => transformImage(image))
      .then(() => sendEmail(user.email))
})
.then(() => logTaskInFile('...'))
.catch(() => handleErrors()) //

; 3)Контекст js - если коротко,то это концепция описывающее окружение,в котором пишутся и образуются все коды javascript.Код всегда образуется внутри некого контекста.

var user = {
    name: 'John Smith',
    getName: function() {
        console.log(this.name);
    }
};
user.getName();   // John Smith

; 4) Замыкание JS - дает нам доступ к Scrope внешней функции ,из внутренней функции . В Javascript замыкания создаются каждый раз при создании функции,вр время ее функции

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
};

var myFunc = makeFunc();
myFunc();
 
;  5) Зачем нужны стрелочные функции,разница в функциях 
Стрелочные функции в JavaScript — это нечто вроде лямбда-функций в Python и блоков в Ruby. Это — анонимные функции с особым синтаксисом, которые принимают фиксированное число аргументов и работают в контексте включающей их области видимости, то есть — в контексте функции или другого кода, в котором они объявлены.

let func = function(arg1, arg2, ...argN) {
  return expression;
};







