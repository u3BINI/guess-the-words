const words =['дождь','солнцне','улица','машина','магазин','автобус','кино','путешествие','самолет', 'ракета']
const randomWords = words[Math.floor(Math.random()*words.length)]
const arr=[]
for (let i=0;i<randomWords.length;i++){
    arr[i]="_"
}
const letters = randomWords.length
while (letters>0){
    alert(arr.join(''))
    let guess = prompt('Угадайте букву или нажмите выход')
    if (guess===null){
        break
    }else if (guess.length !==1){
        alert("введите одну букву")
    }else {
        for (let a=0;a<randomWords.length;a++){
            if(randomWords[a]===guess){
                arr[a]=guess
                letters--;       
            }
        }

    }

}

alert(arr.join(''))
alert(`было загаданно слово ${randomWords} вы справились`)