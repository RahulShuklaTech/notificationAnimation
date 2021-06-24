const notificationBar = document.querySelector(".notification");
const notificationButton = document.querySelector(".message")


notificationButton.addEventListener("click", handleClick);
let timer = 0;
async function handleClick(e){
    e.preventDefault();
    if (timer) clearTimeout(timer)
    await showNotification();
}


notificationBar.addEventListener("mouseover", () => {
    clearTimeout(timer);
})

notificationBar.addEventListener("mouseout", () => {
    timer = setTimeout(() => {
        notificationBar.classList.add("hide");
    },2000)
})

function showNotification(){
    console.log("hello");
    notificationBar.classList.toggle("hide");
    
    timer = setTimeout(() => {
        notificationBar.classList.add("hide");
    },2000)
}