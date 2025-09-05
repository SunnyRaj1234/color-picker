const colorInput = document.querySelector(".color-input");
const colorDisplay = document.querySelector(".color-display");

colorInput.addEventListener("input",(event) =>{
   const  color = event.target.value;
   colorDisplay .style.backgroundColor =color;
   document.body.style.backgroundColor = color;
});