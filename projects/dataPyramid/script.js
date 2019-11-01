var txt = document.getElementById("pyramid");

function pyramid(n) {
  var arrPyramid = []; // the pyramid size is set
  var arrData = [];
  if (n === 0) return arrPyramid; // if the size is 0, just return an empty array
  for (var i = 1; i <= n; i++) {
    var arr = new Array(i);
    for (var x = 0; x < arr.length; x++) {
      arr[x] = Math.ceil(Math.random() * 9);
    }
    arrPyramid.push(arr);
    arrPyramid.push("<br>");
    arrData.push(arr);
  }
  arrPyramid = arrPyramid.toString().replace(/[,]/g, " ");
  txt.innerHTML = arrPyramid;
  return arrData;
}

btnGenerate.onclick = function() {
  var output = pyramid(23);
  data.innerHTML = output.toString().replace(/[,]/g, " ");
}
