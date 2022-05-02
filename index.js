// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var arr=JSON.parse(localStorage.getItem("schedule"))||[]

function myfunction(){
    event.preventDefault()
     var obj={}

     number1=document.querySelector("#matchNum").value 

     teama=document.querySelector("#teamA").value;
     teamb=document.querySelector("#teamB").value

    

     date1=document.querySelector("#date").value;

     venue1=document.querySelector("#venue").value;

     obj.number=number1
     obj.teamA=teama
     obj.teamB=teamb
     obj.date=date1
     obj.venue=venue1

     arr.push(obj)
     localStorage.setItem("schedule",JSON.stringify(arr))

    //  console.log(arr)


     window.location.href="matches.html"
}
