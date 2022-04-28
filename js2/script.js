function task1 ()
{
let sentence = prompt("Vvedit rechena: ");
if(!sentence.length)
{
alert("Vi ne vveli rechena!")
}
else
{
let wordList=sentence.split(" ")
document.write(`Kilkist sliv v recheni ${wordList.length}`);
}

}
function task2 ()
{
    let numberList =[];
    while(true){
        let number = prompt("Введіть число: ");
        if(isNaN(number)){
            break;
        }
        else{
            numberList.push(+number);

        }
    }

    let sum = function(){
        let s=0;
        for(number of numberList){
            s+=number;
        }
        return s;
    }
    let max = function(){
        let a=0;
        for(number of numberList){
            if(number%2>0)
            {
                a++;
            }
        }
        return a;
    }
    let min = function(){
        let b=0;
        for(number of numberList){
            if(number%2 === 0)
            {
                b++;
            }
        }
        return b;
    }
    document.write(`Елементи : ${numberList.join(" , ")}`);
    document.write(` Сума елементів : ${sum()}`);
    document.write(` Парні : ${min()}`);
    document.write(` Не парні : ${max()}`);
}
function task3 ()
{
    let mas=[];
    while(1)
    {
        let email = prompt('Введіть пошту');
        if(email===null){
            break;
        }
        else{
            if(mas.indexOf(email) === -1){
                mas.push(email);
            }
            else{
            alert("Така електрона пошта заерестрована");
            }

        }
    }
    alert(`Всі електроні адреси : ${mas.join(" , ")}`)


}