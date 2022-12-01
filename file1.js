//the even numbers are
// var e=document.getElementsByClassName(".num-one");
// var btn=document.getElementById("#btn");
//  btn.addEventListener(onclick)
//     if(e%2==0){
//         console.write("even");
    
//     }
//     else{
//         console.write("odd");
//     }

var num, temp;
function fun()
{
  num = parseInt(document.getElementById("num").value);
  if(num)
  {
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    if(num%2==0)
      document.getElementById("res").innerHTML = "Even";
    else
      document.getElementById("res").innerHTML = "Odd";
  }
}