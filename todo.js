let list=document.getElementById("list");
let addbtn=document.getElementById("add-btn");
let input=document.getElementById("input");





addbtn.addEventListener('click',addtask);
input.addEventListener('keypress',(e)=>{
    if(e.key=="Enter")
    {
        addtask();
    }
});

function addtask(){
    if(input.value==''){
        alert('Invalid Input');
        return;
    }
    
  
   let listItem=document.createElement('li');
   listItem.innerHTML=input.value;
   list.append(listItem);
   input.value='';
   let span=document.createElement("span");
   span.innerHTML="\u00d7"
   listItem.append(span);

}

list.addEventListener('click',(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false)





