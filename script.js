function showtime(){
    var date=new Date();
        var h=date.getHours();
        var m=date.getMinutes();
        var s=date.getSeconds();
        var session="AM";
   if(h==0){
    h=12;
   }
   if(h>12){
    h=h-12;
    session="PM"
   }    
h=(h<10)?"0"+h:h
m=(m<10)?"0"+m:m
s=(s<10)?"0"+s:s
   document.getElementById("DigitalClock").innerHTML = h+":"+m+":"+s+""+session;
        setTimeout(showtime,1000)
}
   
      showtime ()
      setInterval(
        function (){
            var randomColor=Math.floor(Math.random()*16777215).toString(16)
            document.body.style.backgroundColor="#"+randomColor
        },1000
      )
    