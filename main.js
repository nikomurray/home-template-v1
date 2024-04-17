const dropNavBtn = document.getElementById("dropNavBtn")
const dropNavContainer = document.getElementById("dropNavContainer")

dropNavBtn.addEventListener("click" , ()=>{
    dropNavContainer.classList.toggle("hide")
})

console.log(dropNavBtn)