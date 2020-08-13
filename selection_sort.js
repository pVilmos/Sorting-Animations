let widths = [];
let set = [];
const row_nmb = 25;
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

//function for sorting the rows
function sort_array(){
  let mindex = find_min(j);
  let b = widths[mindex];
  widths[mindex] = widths[j];
  widths[j] = b;

  document.getElementById("div" + mindex).style.width = widths[mindex] + "px";
  document.getElementById("div" + j).style.width = widths[j] + "px"
  j++;
  if(j == widths.length){
    clearInterval(sorting);
  }
}

//sorting of the rows
let j = 0;
var sorting = setInterval(sort_array, 1000);


//function for creating the rows
function create_row(row_nmb){
  for (var i = 0; i < row_nmb; i++) {
    var create_div = document.createElement("div");
    document.body.appendChild(create_div);
    document.body.lastChild.setAttribute("id", "div" + i);
    document.getElementById('div' + i).style.width = widths[i] + "px";
  }
}

//function for finding minimum element of subarray
function find_min(subind){
  let min = widths[subind];
  let min_index = subind;
  for (var i = subind + 1; i < widths.length; i++) {
    if (widths[i] < min) {
      min = widths[i];
      min_index = i;
    }
  }
  return min_index;
}
