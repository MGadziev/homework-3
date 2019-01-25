//Задача 1
var age = 100;
if (age >= 1 && age <= 17) console.log("Учеба");
if (age >= 18 && age <= 64) console.log("Работа");
if (age >= 65 && age <= 100) console.log("Пенсия");

//Задача 2
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var a in arr) {
  switch (arr[a]) {
    case 1:
      console.log("1 разработчик");
      break;
    case 2:
      console.log("2 разработчика");
      break;
    case 3:
      console.log("3 разработчика");
      break;
    case 4:
      console.log("4 разработчика");
      break;
    case 5:
      console.log("5 разработчиков");
      break;
    case 6:
      console.log("6 разработчиков");
      break;
    case 7:
      console.log("7 разработчиков");
      break;
    case 8:
      console.log("8 разработчиков");
      break;
    case 9:
      console.log("9 разработчиков");
      break;
    default:
      console.log("ошибка");
  }
}
