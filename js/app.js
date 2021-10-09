const buttonArray = [
   fivePercent = document.getElementById("buttonOne"),
   tenPercent = document.getElementById("buttonTwo"),
   fifteenPercent = document.getElementById("buttonThree"),
   twentyFivePercent = document.getElementById("buttonFour"),
   fiftyPercent = document.getElementById("buttonFive"),
]
let CustomPercent = document.getElementById("buttonSix")

const values = [
   5, 10, 15, 25, 50
]

const buttonDiv = document.getElementById("percent-buttons")

let percentage = 0
let peoples = 0

for (let i = 0; i < buttonArray.length; i++) {
   buttonArray[i].addEventListener("click", function () {
      percentage = values[i]

      tipAmount.innerHTML = `$${(billAmount.value / 100 * percentage).toFixed(2)}`

      total.innerHTML = `
   $${(billAmount.value / 100 * percentage * totalNum.value).toFixed(2)}
   `

   })
}

let billAmount = document.getElementById("billNumber") //bill input
let tipAmount = document.getElementById("tip")
let total = document.getElementById("total")
let reset = document.getElementById("resetFields")

billAmount.addEventListener("focusin", function () {
   console.log(billAmount.value)
})


let totalNum = document.getElementById("numberPeoples")

billAmount.addEventListener("focusout", function () {
   console.log(billAmount.value)
   tipAmount.innerHTML =
      `
   $${(billAmount.value / 100 * percentage).toFixed(2)}
`
})

totalNum.addEventListener("focusout", function () {
   total.innerHTML = `
      $${(billAmount.value / 100 * percentage * totalNum.value).toFixed(2)}
   `
})

reset.addEventListener("click", function () {
   total.innerHTML = "$"
   tipAmount.innerHTML = "$"
   totalNum.value = ""
   billAmount.value = ""
})