const button = document.querySelector('#but');
//Ловим клик на кнопке
button.addEventListener('click', () => {
    //Собираем поля ввода для цифр
    const inputs = document.querySelectorAll('.inputForNum');
    //Определяем нужную степень точности "восстановления" десятичных дробей
    const acc = 1000;
    //Берем значения из полей, превращаем их в числа и преобразуем в целые, путем умножения на const acc
    const num1 = +inputs[0].value*acc
    const num2 = +inputs[1].value*acc
    //Складываем и делим на const acc для приведения в исходную разрядность
    let sum = (num1 + num2)/acc;
    //Выводим в alert с красивым переносом строк, чтобы было как в примере в тестовом задании
    alert(
        `Результат:\r\r${sum}`
    );
});