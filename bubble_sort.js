function bubble_sort_algorithm() {
  let widths = [];
  let set = [];
  const row_nmb = 10;
  for (var i = 0; i < row_nmb; i++) {
    set[i] = i+1;
  }

  //creating random length of the rows
  for (var i = 0; i < row_nmb; i++) {
    let random = Math.floor(Math.random() * set.length + 1);
    widths[i] = set[random - 1] * 50;
    set.splice(random-1, 1);
  }

  //creating the rows
  create_row(row_nmb);

  //sort array
  let j = 0;
  let y = 0;
  var sorting = setInterval(start, 1000);

  //sort array function
  function start() {
    let bool = bubble_sort(y);
    if (bool == true) {
      j++;
    }
    let z = y + 1;
    setTimeout(function(){
      document.getElementById("div" + y).style.backgroundColor = "#3282b8";
      document.getElementById("div" + z).style.backgroundColor = "#3282b8";

    }, 250)
    setTimeout(function(){
      document.getElementById("div" + y).style.backgroundColor = "#dddddd";
      document.getElementById("div" + z).style.backgroundColor = "#dddddd";
    }, 500)
    setTimeout(function(){
      document.getElementById("div" + y).style.width = widths[y] + "px";
      document.getElementById("div" + z).style.width = widths[z] + "px";
      if (j == 0 && y == widths.length - 2) {
        clearInterval(sorting);
      }
      if (y < widths.length - 2) {
        y++;
      } else {
        y = 0;
        j = 0;
      }
    }, 750)

    document.getElementById("div" + y).style.width = widths[y] + "px";
    document.getElementById("div" + z).style.width = widths[z] + "px";
  }
  //function for creating the rows
  function create_row(row_nmb){
    for (var i = 0; i < row_nmb; i++) {
      var create_div = document.createElement("div");
      document.body.appendChild(create_div);
      document.body.lastChild.setAttribute("id", "div" + i);
      document.getElementById('div' + i).style.width = widths[i] + "px";
    }
  }

  //bubble_sort function
  function bubble_sort(index) {
    if (widths[index] > widths[index + 1]) {
      let b = widths[index];
      widths[index] = widths[index + 1];
      widths[index + 1] = b;
      return true;
    }
    else {
      return false;
    }
  }
}
