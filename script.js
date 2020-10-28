
var flag = 1, flag2 = 1;
do {
    function ageCalc(n, b, y) {
        alert('Имя ' + n + ', год рождения ' + b + ', нынешний год ' + y);
        alert(n + ', Ваш возраст ' + (y - b));
    }


    var name = prompt('Name: ');
    var birthDate = prompt('Date of birth:');
    var year = prompt('Current year: ');

    ageCalc(name, birthDate, year);

    flag = prompt('Введите 1 чтобы повторить или 0 чтобы закончить');
} while (flag != 0)


do {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    function primer(n) {
        if (n > 1000)
            return 0;
        var correct = 0;
        for (let i = 0; i < n; i++) {
            var rand = getRandom(1, 5);
            var operation = '';
            var num1 = getRandom(1, 100), num2 = getRandom(1, 100);

            switch (rand) {
                case 1:
                    operation = '+';
                    var primer = num1 + num2;
                    break;
                case 2:
                    operation = '-';
                    var primer = num1 - num2;
                    break;
                case 3:
                    operation = '*';
                    var primer = num1 * num2;
                    break;
                case 4:
                    operation = '/';
                    var primer = Math.round(num1 / num2);
                    break;
                case 5:
                    operation = '%';
                    var primer = num1 % num2;
                    break;
                default:
                    break;
            }

            let answer = prompt(num1 + ' ' + operation + ' ' + num2 + ' = ');
            if (answer == primer) {
                alert('Ваш ответ верный - ' + answer);
                correct++;
            }
            else {
                alert('Ваш ответ не верный - ' + answer + '! Правильный ответ - ' + primer + '!');
            }
        }
        alert('Ответили верно на ' + correct + ' / ' + n);
    }

    var number = prompt('Количество примеров: ');

    primer(number);



    flag2 = prompt('Введите 1 чтобы повторить или 0 чтобы закончить');
} while (flag2 != 0)