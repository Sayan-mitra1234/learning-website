let div=document.querySelector(".animated-line")

 let array=["Get discount in Every Course","Online And Offline Course Avaialable","New Batch Commences, Hurry Up to Join!!! and Getting Discount","We Have a Placement Assistance"]

let index=0;

function showLine(){

    div.textContent=array[index]
    index=(index+1)% array.length
    setTimeout(showLine,5000)
}
showLine()

let submit=document.getElementById("submit")

function submitForm(){
    alert("Submitted your Details");
    location.reload();
}

function handleclick() {
    alert("submitted success fully");
    document.getElementById("text").innerText="IF YOU ARE ELIGIBLE WE WILL CONTACT SOON";
}