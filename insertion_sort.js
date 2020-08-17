function insertion_sort_algorithm() {
  let widths = [];
  let set = [];
  const row_nmb = 10;
  for (var i = 0; i < row_nmb; i++) {
    set[i] = i + 1;
  }

  //creating random length of the rows
  for (var i = 0; i < row_nmb; i++) {
    let random = Math.floor(Math.random() * set.length + 1);
    widths[i] = set[random - 1] * 50;
    set.splice(random - 1, 1);
  }

  //creating the rows
  create_row(row_nmb);

  let j = 1;
  let change = 0;
  var start = setInterval(start_insertion, 1000);
  //
  function start_insertion(){
    if (j == row_nmb) {
      clearInterval(start);
      for (var i = 0; i < row_nmb; i++) {
        document.getElementById("div" + i).style.backgroundColor = "#86c4ba";
      }
    }
    else{
      let bool = insertion_sort_for_el(j - change);
      if (bool == true && j - change > 0) {
        document.getElementById("div" + (j - change - 1)).style.width = widths[j - change - 1] + "px";
        document.getElementById("div" + (j - change)).style.width = widths[j - change] + "px";
        document.getElementById("div" + (j - change - 1)).style.backgroundColor = "#3282b8";
        document.getElementById("div" + (j - change)).style.backgroundColor = "#3282b8";
        setTimeout(function(){
          document.getElementById("div" + (j - change - 1)).style.backgroundColor = "#dddddd";
          document.getElementById("div" + (j - change)).style.backgroundColor = "#dddddd";
          change++;
        }, 500)
      }
      else if(bool == false && j - change > 0) {
        document.getElementById("div" + (j - change - 1)).style.backgroundColor = "#86c4ba";
        document.getElementById("div" + (j - change)).style.backgroundColor = "#86c4ba";
        setTimeout(function(){
          document.getElementById("div" + (j - change - 1)).style.backgroundColor = "#dddddd";
          document.getElementById("div" + (j - change)).style.backgroundColor = "#dddddd";
          j++;
          change = 0;
        }, 500);
      }
      else{j++; change = 0;}
    }
  }

  //function for creating the rows
  function create_row(row_nmb) {
    for (var i = 0; i < row_nmb; i++) {
      var create_div = document.createElement("div");
      document.body.appendChild(create_div);
      document.body.lastChild.setAttribute("id", "div" + i);
      document.getElementById('div' + i).style.width = widths[i] + "px";
    }
  }

  //insertion_sort function
  function insertion_sort_for_el(index){
    if(widths[index - 1] > widths[index]){
      let b = widths[index - 1];
      widths[index - 1] = widths[index];
      widths[index] = b;
      return true;
    }
    else{return false;}
  }
}
