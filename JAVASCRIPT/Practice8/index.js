const title = document.getElementById("title")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=> {
    title.innerHTML = "This is javascript"
    title.style.color = "skyblue"
    btn.style.display ="none"
})