// local variables

// let myLeads = []
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const x = "<li><a target='_blank' href='"
const y = "'>"
const z = "</a></li>"


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})


// -------------------- My way --------------------
function renderLeads() {
    for (let i = myLeads.length - 1; i < myLeads.length; i++) {
        ulEl.innerHTML += x + inputEl.value + y + inputEl.value + z
    }
}


// -------------------- Scrimba way --------------------
// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += "<li>" + myLeads[i] + "</li>"
//     }
//     ulEl.innerHTML = listItems  
//     inputEl.value = ""
// }


