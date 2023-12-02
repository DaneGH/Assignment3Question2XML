$(document).ready(function() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const xmlDoc = xhr.responseXML;
        var items = xmlDoc.getElementsByTagName("item");
        var html = "";
        for (var i = 0; i < items.length; i++) {
          html +=
            "Name: " +
            items[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "<br>" +
            "Price: $" +
            items[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
            "<br><br>";
        }
        document.getElementById("item-list").innerHTML = html;
      }
    };
    xhr.open("GET", "XML/data.xml", true);
    xhr.send();
  });
  