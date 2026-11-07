const form=document.querySelector(".new_form")
const name=document.querySelector("#username")
const submit=document.querySelector("#submit")
const list=document.querySelector("#list")
const error=document.querySelector("#error_message")


let student=[];

name.addEventListener("input", function() {
    error.textContent = name.value.trim().length;
    if(error.textContent==1){
        error.textContent="Enter valid name please!";
        error.style.color="tomato";
        return;
    }
    error.style.color="black";
    if(error.textContent>=15){
        error.textContent="Enter only your full name please!";
        error.style.color="tomato";
        return; 
    }

    });


form.addEventListener("submit",function(event) {
  event.preventDefault()
          if(error.style.color=="red" || name.value.trim().length==0){
            return;
        }

 student.push(name.value.trim())
 name.value=""
 displaystudent()
})
function displaystudent() {

  list.innerHTML = "";
  student.forEach(function(stud, index) {
    const li=document.createElement("li")
    li.textContent=stud
    list.appendChild(li)

    
    const liDEL=document.createElement("button")

    liDEL.textContent="DELETE"
    liDEL.style.border="red 1px"
    liDEL.style.color="red"
    liDEL.style.borderRadius="7px"
    li.appendChild(liDEL)

    error.textContent=""

    liDEL.addEventListener("click",function() {

      student.splice(index,1)
      displaystudent()
    })
  })
  quota=`<p>Number of students: ${student.length}</p>`
  document.querySelector(".array_container").innerHTML=quota
  
}