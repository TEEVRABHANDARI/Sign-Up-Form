const email = document.querySelector("#email")
const phone = document .querySelector("#Phone")
const firstName = document.querySelector("#fname")
const password = document.querySelector("#password")
const lastName =document.querySelector("#lname")
const error = document.querySelector(".error")
const confirmpassword =document.querySelector("#confirmpassword")

const input = [email,password,password,confirmpassword]

input.forEach(item =>{
    item.addEventListener('focusin',()=>{
        error.textContent = "";
        item.classlist.remove(".error")
        if(item == password || item == confirmpassword){
            password.classList.remove("error");
            confirmpassword.classList.remove("error");
        }
    })
})

const submit = (e) =>{
    e.preventDefault();
    if(password.value != confirmpassword.value){
        password.classList.add('error')
        error.textContent = "Passwords must match";

    }
}

const form = document.querySelector("form")
form.addEventListener("submit",submit);