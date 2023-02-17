// Bir "kapat" düğmesi oluşturun ve onu her bir liste öğesine ekleyin<br>
var myNodeList = document.getElementsByTagName("LI")
var i;
for (i= 0; i<myNodeList.length; i++){
    let span = document.createElement("SPAN")
    let txt = document.createTextNode("\u00D7")
    span.className ="close";
    span.appendChild(txt)
    myNodeList[i].appendChild(span)
}
// Geçerli liste öğesini gizlemek için bir kapat düğmesine tıklayın
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Bir liste öğesine tıklandığında "kontrol edildi" sembolü ekleyin
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// "Ekle" düğmesine tıkladığınızda yeni bir liste öğesi oluşturun
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Lütfen dahan uzun bir kelime yazın!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}