//Завдання 1: "Порівняння кількох промісів". Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати
// всі проміси одночасно за допомогою Promise.all і обробити результати. Створіть функцію delayedPromise, яка приймає значення і затримку 
//(у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки. Створіть масив з 5 промісів, використовуючи функцію
// delayedPromise, із різними значеннями та затримками. Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.Обробіть 
// результати вирішення промісів та виведіть їх у консоль.
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}   
const promises = [
    delayedPromise(1, 1000),
    delayedPromise(2, 2000),
    delayedPromise(3, 3000),
    delayedPromise(4, 4000),
    delayedPromise(5, 5000),
];
Promise.all(promises)
    .then((results) => {
        console.log('All promises resolved:', results);
    }
    ).catch((error) => {
        console.error('Error resolving promises:', error);
}
).finally(() => {
        console.log('All promises have been processed.');
    });
//Завдання 2:"Змагання промісів".Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси
// одночасно за допомогою Promise.race і отримати результат найшвидшого проміса. Створіть функцію randomDelay, яка приймає значення і повертає
//проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними 
//значеннями. Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса. Обробіть результат 
//найшвидшого проміса та виведіть його у консоль.
function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
const promise = [
    randomDelay(1),
    randomDelay(2),
    randomDelay(3),
    randomDelay(4),
    randomDelay(5),
];
Promise.race(promises)
    .then((result) => {
        console.log('Fastest promise resolved:', result);
    }
    ).catch((error) => {
        
})
    .finally(() => {
        console.log('All promises have been processed.');
    });