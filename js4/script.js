function task1 ()
{
    alert('Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.')
let nameList =[];
let priceList =[];
let maxList =[]; 
while(true){
    let name = prompt("Введіть назву: ");
    let price = prompt("Введіть ціну: ");
    let max = prompt("Введіть кількість: ");
    if(isNaN(name)||isNaN(price)||isNaN(max)){
        break;
    }
    else{
        nameList.push(name);
        priceList.push(+price);
        maxList.push(+max);

    }
}

let fun = function(price,max){
let b=price*max;
return b;    
}
for(let i=0; i<nameList.length; i++){
    document.write("Назва: "+nameList[i]+" Вартість всього товару:"+fun(priceList[i],maxList[i])+'<br>');
}

}