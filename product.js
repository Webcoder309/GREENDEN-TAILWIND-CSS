var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")


menuicon.addEventListener("click",function(){
    sidenav.style.right="0"
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


var product = document.getElementById("pro-container")
var search = document.getElementById("search")
var productlist = product.querySelectorAll("div")

search.addEventListener("keyup",function(){
var enteredvalue = event.target.value.toUpperCase()


    for(count = 0;count<productlist.length;count=count+1)
    {
        var productname= productlist[count].querySelector("h2").textContent

        if(productname[count].toUpperCase().indexOf(enteredvalue)<0)

        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})