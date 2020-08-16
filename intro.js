const types = 2;
for (var i = 0; i < types; i++) {
  var create_button = document.createElement("button");
  document.body.appendChild(create_button);
  document.body.lastChild.setAttribute("id", "button" + i);
}
document.getElementById('button' + 0).innerHTML = "Bubble Sort";
document.getElementById('button' + 1).innerHTML = "Selection Sort";

setTimeout(function(){
  for (var i = 0; i < types; i++) {
    document.getElementById("button" + i).style.color = "black";
    document.getElementById("button" + i).style.backgroundColor = "#dddddd";
  }
}, 500)


//Getiing functions when clicking
document.getElementById("button0").addEventListener("click", bubble_sort_algorithm);
document.getElementById("button0").addEventListener("click", function() {
  for (var i = 0; i < types; i++) {
    document.getElementById("button" + i).style.color = "#fff";
    document.getElementById("button" + i).style.backgroundColor = "#fff";
  }
});
document.getElementById("button0").addEventListener("click", function(){
  setTimeout(function(){
    for (var i = 0; i < types; i++) {
      document.getElementById("button" + i).remove();
    }
  }, 500)
});

document.getElementById("button1").addEventListener("click", selection_sort_algorithm);
document.getElementById("button1").addEventListener("click", function() {
  for (var i = 0; i < types; i++) {
    document.getElementById("button" + i).style.color = "#fff";
    document.getElementById("button" + i).style.backgroundColor = "#fff";
    setTimeout(function() {
      document.getElementById("button" + i).remove();
    }, 1000)
  }
});
document.getElementById("button0").addEventListener("click", function(){
  setTimeout(function(){
    for (var i = 0; i < types; i++) {
      document.getElementById("button" + i).remove();
    }
  }, 500)
});
