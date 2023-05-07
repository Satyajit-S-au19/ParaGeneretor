let num=document.getElementById("enter")


let paras=document.querySelector(".container")

// function okclick(){
//     console.log("clicked")
//     let ans=num.value
//     console.log(ans)
// }

const textGenerator=(n)=>{
    let text=" ";
   let letters="abcdefghijklmnopqrstuvwxyz";
   for(let i=0;i<n;++i){
     const random=(Math.random()*(letters.length-1)).toFixed(0);
     text+=letters[random];
    
  
   }
   console.log(text)
    return text;
}





let ans;
let okclick=()=>{
    ans=Number(num.value);
    
 
    
if(ans){
    const para=document.createElement("p");

let data=" ";
for(let i=0;i<ans;i++){
    const randomNo=(Math.random()*7).toFixed(0);
    data+=textGenerator(randomNo)
}


para.innerText=data;
para.setAttribute("id","para")
paras.append(para)

}
}




function err(){
   
    const para=document.querySelector("p");
    if(para){
        para.remove();
        
    }
   
    
}