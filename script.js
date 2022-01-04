document.getElementById("enter").onclick = function () {
  var queryR = "";

  queryR = document.getElementById("query").value;

  document.getElementById("text").innerHTML =
    document.getElementById("text").innerHTML + queryR;
};
