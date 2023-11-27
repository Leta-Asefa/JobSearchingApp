
let submitButton = document.getElementById("submit")
let profile = document.getElementById("profile")
let description = document.getElementById("description")
let experience = document.getElementById("experience")
let techstack = document.getElementById("techstack")

function getTechstacks() {
    let string = techstack.value
    return string.split(',')
}


submitButton.onclick = function () {
    
    
    let data = {
        "profile":profile.value,
        "description":description.value,
        "experience":experience.value,
        "tech":getTechstacks()
    }

    let jsonData = JSON.stringify(data)
    

    fetch("http://localhost:8080/add  ", {
    
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: jsonData
    
    
}).then((res) => res.text())
    .then((data) => console.log(data))


console.log("posted")



}
