function moveLeft() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

function moveRight() {
  var elem = document.getElementById("animate");
  var pos = 350;
  var id = setInterval(frame3, 5);
  function frame3() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
      pos--;
    }
  }
}


function moveDown() {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame2, 5);
  function frame2() {
    if (pos == 350) {
      clearInterval(id);
    } else 
    {
      elem.style.top = pos + 'px';
      elem.style.bottom = pos + 'px';
      pos++;
    }
  }
}

function moveUp() {
  var elem = document.getElementById("animate");
  var pos = 350;
  var id = setInterval(frame1, 5);
  function frame1() {
    if (pos == 0) {
      clearInterval(id);
    } else 
    {
      elem.style.bottom = pos + 'px';
      elem.style.top = pos + 'px';
      pos--;
    }
  }
}