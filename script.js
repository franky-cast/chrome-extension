// local variables

// let myLeads = []
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value = ""
})


// -------------------- My way --------------------
function renderLeads() {
    for (let i = myLeads.length - 1; i < myLeads.length; i++) {
        ulEl.innerHTML += `
        <li>
            <a class="anchor-tag" target="_blank" href="${inputEl.value}">
                ${inputEl.value}
            </a>
        </li>
        `
    }
}


// -------------------- Scrimba way --------------------
// function renderLeads() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myLeads[i]}'>
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `
//     }
//     ulEl.innerHTML = listItems  
// }


