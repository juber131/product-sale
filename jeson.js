// console.log("connected")
const allbtn = document.getElementsByClassName("add-btn");
let count=0;
for(const btn of allbtn){
    btn.addEventListener('click',function(e){
    count=count+1;
    // document.getElementById("cart-count").innerText=count;
    setinnertext("cart-count",count)
     
    // console.log(e.target.parentNode.childNodes[3].childNodes[1].innerText)
   const placename =e.target.parentNode.childNodes[1].innerText;
   const price =e.target.parentNode.childNodes[3].childNodes[1].innerText;
   const placecontainer =document.getElementById('selected-place-container');
   const li =document.createElement("li");
   const p = document.createElement("p");
   p.innerText=placename;
   const p2 =document.createElement("p");
   p2.innerText=price;
   li.appendChild(p)
   li.appendChild(p2)
   placecontainer.appendChild(li)


    const budget1 =document.getElementById("budget").innerText;
    const convertedbudget = parseInt(budget1)
    if (convertedbudget - parseInt(price) < 0) {
    alert("Low Budget Earn Moeny");
    return;
    }
    
    document.getElementById("budget").innerText =convertedbudget - parseInt(price) ;

    // const totalcost = document.getElementById("total-cost").innerText;
    // // console.log(typeof parseInt(totalcost))
    // const convertedtotalcost =parseInt(totalcost);
    // const sum =convertedtotalcost+parseInt(price);
    // // document.getElementById("total-cost").innerText=convertedtotalcost+parseInt(price);
    // setinnertext("total-cost",sum)
    totalcost('total-cost',parseInt(price))


    
//    const grandtotal =document.getElementById("grand-total").innerText;
//    const convertedgrandtotal =parseInt(grandtotal)
//    const sum2 = convertedgrandtotal+parseInt(price);
//    setinnertext("grand-total",sum2) 

//   grandtotalcost("grand-total",parseInt(price))
    grandtotalcost()
    })

}

function totalcost(id,value){
    const totalcost = document.getElementById(id).innerText;
    const convertedtotalcost =parseInt(totalcost);
    const sum =convertedtotalcost+parseInt(value);
    setinnertext("total-cost",sum)
}


function grandtotalcost(category){
    // console.log(category)
    const totalcost = document.getElementById("total-cost").innerText;
    const convertedtotalcost =parseInt(totalcost);
    if (category == "bus") {
        setinnertext("grand-total", convertedtotalcost + 100);
      } else if (category == "train") {
        setinnertext("grand-total", convertedtotalcost - 200);
      } else if (category == "flight") {
        setinnertext("grand-total", convertedtotalcost + 500);
      } else {
        setinnertext("grand-total", convertedtotalcost);
      }
    
    // setinnertext("grand-total", convertedtotalcost)
}



function setinnertext(id,value){
    document.getElementById(id).innerText=value;
}