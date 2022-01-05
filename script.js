document.getElementById("enter").onclick = function () {
  var queryR = "";

  queryR = document.getElementById("query").value;

  document.getElementById("text").textContent =
    document.getElementById("text").textContent + queryR;
};
