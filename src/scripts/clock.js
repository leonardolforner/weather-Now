function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    
    if(h == 0){
        h = 12;
    }
    
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
  
    
    var time = h + ":" + m;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
  }
  showTime();