// local variables
let myLeads = []

const storedLeads = JSON.parse(localStorage.getItem("myLeads"))
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")


// checks local storage for leads, displays them ulEl.innerHTML, updates the myLeads array
if (storedLeads) {
    myLeads = storedLeads
    for (let i = 0; i < storedLeads.length; i++) {
        ulEl.innerHTML += `
        <li>
            <a class="anchor-tag" target="_blank" href="${storedLeads[i]}">${storedLeads[i]}</a>
        </li>
    `
    }
}

// pushes input value to myLeads array, updates local storage
saveBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
        renderLeads()
        inputEl.value = ""
    } else {
        alert("Please enter url")
    }
})

// clears myLeads array and local storage
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

// rends any new leads onto the screen
// -------------------- My way --------------------
function renderLeads() {
    for (let i = myLeads.length - 1; i < myLeads.length; i++) {
        ulEl.innerHTML += `
        <li>
            <a class="anchor-tag" target="_blank" href="${inputEl.value}">${inputEl.value}</a>
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