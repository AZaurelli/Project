var myIndex = 0;
 carousel();

 function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000); // Change image every 2 seconds
 }

          var marginY = 0;
          var destination = 0;
          var speed = 15;
          var scroller = null;

          function initScroll(elementId){
              destination = document.getElementById(elementId).offsetTop;
             
              scroller = setTimeout(function(){
                initScroll(elementId);
              }, 1);

              marginY = marginY + speed;

              if(marginY >= destination){
                clearTimeout(scroller);
              }

              window.scroll(0, marginY);


              //console.log(destination);
          } 

          function toTop(){
             scroller = setTimeout(function(){
                toTop();
              }, 1);

              marginY = marginY - speed;

              if(marginY <= 0){
                clearTimeout(scroller);
              }

              window.scroll(0, marginY);
            }
function  toggle_visibility(id) {
  var e = document.getElementById(id);
    if (e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function toggle_visibility(id) {
                var e = document.getElementById(id);
                if(e.style.display == 'block')
                    e.style.display = 'none';
                else
                    e.style.display = 'block';
}






