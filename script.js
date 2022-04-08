 const btnElement = document.getElementById("btn");
 const imgElement = document.getElementById("imgbig");
 const answerElement = document.getElementById("answer");
 


btnElement.addEventListener("click", allCode)

const newButton = document.querySelectorAll("input")

function allCode(e){
let correctAnswer = ""
let aNewOption = []
answerElement.textContent = ""
for (let i = 0; i < newButton.length; i += 1)
{ 
   newButton[i].checked=false;   
   const randomButton = Math.floor(Math.random()*countryWithImages.length)
const allButton = countryWithImages[randomButton].name
const butButton = countryWithImages[randomButton].file_url
genButton = {butButton, allButton}
aNewOption.push(genButton)
// console.log(aNewOption)




   newButton[i].addEventListener("click", function(e){
      let allTrue = e.currentTarget.value
if (allTrue === correctAnswer){
   console.log(true)
   answerElement.textContent = "Yaay! you are right"
   answerElement.style.color="green";
   
}
else{
   console.log (false)
   answerElement.textContent = "Ouch! you are wrong"
   answerElement.style.color="red";
}


   })
newButton[i].value = allButton
console.log(newButton[i].nextElementSibling)
newButton[i].nextElementSibling.textContent = allButton
}

aNewCountry = Math.floor(Math.random()*aNewOption.length)

let someCountry = aNewOption[aNewCountry]

correctAnswer = someCountry.allButton
console.log(correctAnswer)
imgElement.src=`https:${someCountry.butButton}`
}

allCode()