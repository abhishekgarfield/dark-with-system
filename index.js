const el=document.querySelector("#handle");
const currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

const hi=window.matchMedia("(prefers-color-scheme:dark)").matches;
console.log(hi);
if(hi==true)
{
    document.body.classList.toggle("dark-mode");

}


el.addEventListener("click",()=>{
    if(hi==true)
    {
        document.body.classList.toggle("dark-mode");
    }
    else{
        document.body.classList.toggle("dark-mode");
    }
});