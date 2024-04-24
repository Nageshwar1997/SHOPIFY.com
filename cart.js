let data=JSON.parse(localStorage.getItem("cart"));
let count=document.getElementById("count");
let container=document.getElementById("container");
let shippingcharge=document.getElementById("shipingCharge");

let Total=0
displaycart(data)
function displaycart(data){
    container.innerHTML=null;
    Total=0;
    let value=data.length;
    count.innerText=value
    data.forEach((element,index)=>{
        Total+=element.prise;
        let total=document.getElementById("total");
        total.innerText=Total;
        let subtotal=document.getElementById("subtotal");
        subtotal.innerText=Total-50;
        let final=document.getElementById("finalamt");
        let x=0;
         x=Total-50;
        final.innerText="₹ "+x;
        
        let card=document.createElement("div");
        let subcard=document.createElement("div");
        let name=document.createElement("p");
        name.innerText=element.name;
        let prise=document.createElement("h3");
        prise.innerText="₹"+element.prise;
        let button=document.createElement("button");
        button.innerText="remove";
        button.addEventListener("click",()=>{
            data.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(data));
            displaycart(data);
        });
        let subcard2=document.createElement("div");
        let img=document.createElement("img");
        img.src=element.img;
        subcard.append(name,prise,button);
        subcard2.append(img)
        card.append(subcard,subcard2);
        container.append(card);

    });

}