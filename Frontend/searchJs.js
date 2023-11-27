let rowContainer = document.getElementById("rowContainer");
let fragment = document.createDocumentFragment();
let searchButton = document.getElementById("searchButton")
let textField = document.getElementById("textField")
let mainDiv, h1, h2, bodyDiv, footer
let questions=[]

let promise=fetch("http://localhost:8080/all")
    .then((res) => res.json())
    .then(data => {
        questions = data
        start()  })
    .catch(error => {
        console.error('Error:', error);
    })
function start() {
    console.log("works fine")
    console.log(questions)
          
    for (let i = 0; i < questions.length; i++) {
        
        mainDiv = document.createElement("div")
        h1 = document.createElement("h1")
        h2 = document.createElement("h2")
        bodyDiv = document.createElement("div")
        footer = document.createElement("div")
   
        h1.innerHTML = questions[i].profile
        h2.innerHTML = questions[i].experience
        bodyDiv.innerHTML = questions[i].description
        footer.innerHTML = questions[i].tech
    
       
        mainDiv.classList.add("card", "mb-5", "noborder","blackbgcolor")
        h1.classList.add("card-header", "header", "blackbgcolor")
        h2.classList.add("card-title")
        bodyDiv.classList.add("card-body")
        footer.classList.add("card-footer", "footer")
  

        mainDiv.appendChild(h1);
        mainDiv.appendChild(h2);
        mainDiv.appendChild(bodyDiv);
        mainDiv.appendChild(footer);
        fragment.appendChild(mainDiv)
    }

    while (rowContainer.firstElementChild) {
    rowContainer.removeChild(rowContainer.firstElementChild);
        }
    rowContainer.appendChild(fragment)
    
}
document.addEventListener("DOMContentLoaded", function() {
   
for (let i = 0; i < 17; i++) {

     mainDiv = document.createElement("div")
     h1 = document.createElement("h1")
     h2 = document.createElement("h2")
     bodyDiv = document.createElement("div")
     footer = document.createElement("div")
    
    if(i%2==0) cs()
    else se()
    
    mainDiv.classList.add("card", "mb-5","noborder")
    h1.classList.add("card-header","header","blackbgcolor")
    h2.classList.add("card-title")
    bodyDiv.classList.add("card-body")
    footer.classList.add("card-footer","footer")
   

    mainDiv.appendChild(h1);
    mainDiv.appendChild(h2);
    mainDiv.appendChild(bodyDiv);
    mainDiv.appendChild(footer);
    fragment.appendChild(mainDiv)

}
    rowContainer.appendChild(fragment)
    
});


function se() {
    h1.innerHTML = "Software Developer"
    h2.innerHTML = "Backend"
    bodyDiv.innerHTML="A man who is experienced on Java Technologies like Springboot, Hibernate , Maven ,Eclipse, Servlet , JSP , MySQL , MongoDB and Rest API. <br> Must have 2 years of hands on experience "
    footer.innerHTML="se123@gmail.com"
}


function cs() {
    h1.innerHTML = "CS"
    h2.innerHTML = "Computer Scientist"
    bodyDiv.innerHTML="A man who is experienced on Java Technologies like Springboot, Hibernate , Maven ,Eclipse, Servlet , JSP , MySQL , MongoDB and Rest API. <br> Must have 2 years of hands on experience "
    footer.innerHTML="cs123@gmail.com"
}


searchButton.onclick = function () {
    let text = textField.value
    console.log(text)
    let promise=fetch("http://localhost:8080/all/"+text)
    .then((res) => res.json())
        .then(data => {
            console.log(questions)
            questions = []
            console.log(questions)
            questions = data
            console.log(questions)
        start()  })
    .catch(error => {
        console.error('Error:', error);
    })
}

















