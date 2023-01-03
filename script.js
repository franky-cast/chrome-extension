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
    render(myLeads)
}

// pushes input value to myLeads array, updates local storage
saveBtn.addEventListener("click", function () {
    if (inputEl.value) {
        myLeads.push(inputEl.value)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
        render(myLeads)
        inputEl.value = ""
    } else {
        alert("Please enter url")
    }
})

// clears myLeads array and local storage
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// rends any new leads onto the screen
// -------------------- My way --------------------
function render(arr) {
    let listItems = []
    for (let i = 0; i < arr.length; i++) {
        listItems += `
        <li>
            <a class="anchor-tag" target="_blank" href="${arr[i]}">${arr[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}