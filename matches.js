// write js code here corresponding to matches.html


array=JSON.parse(localStorage.getItem("schedule"))||[]

favoritearray=JSON.parse(localStorage.getItem("favourites"))||[]


array.forEach(function(el){

    tr=document.createElement("tr")
    td1=document.createElement("td")
    td1.innerText=el.number

    td2=document.createElement("td")
    td2.innerText=el.teamA

    td3=document.createElement("td")
    td3.innerText=el.teamB

    td4=document.createElement("td")
    td4.innerText=el.date

    td5=document.createElement("td")
   td5.innerText=el.venue

    td6=document.createElement("td")
    td6.innerText="add to faorite"
    td6.style.color="blue"
    td6.style.cursor="pointer"

    td6.addEventListener("click",function(){
        favorite(el)
    })

  
    tr.append(td1,td2,td3,td4,td5,td6)

   

    document.querySelector("tbody").append(tr)

    
})

function favorite(el){

    favoritearray.push(el)

    localStorage.setItem("favourites",JSON.stringify(favoritearray))


}
