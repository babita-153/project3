let btn=document.querySelector("button");
let ul= document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
    let li=document.createElement("li");
     let dltbtn=document.createElement("button");
    dltbtn.innerText="Delete";
    dltbtn.classList.add("delete");
     li.innerText=input.value;
    ul.appendChild(li);
    li.append(dltbtn);
    input.value="";
})

let dlt=document.querySelector(".delete");


ul.addEventListener("click",function(event){
    
 if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    console.log(listItem);
    listItem.remove();
  
 }
 
})


