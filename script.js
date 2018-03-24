// Hook a callback into the rendered Google Search
window.__gcse = {
  callback: googleCSELoaded
}; 
function googleCSELoaded() {
  // The hook 
  $("#customSearch").click(function() {
    var searchText = $("#q").val();
    console.log(searchText);
    var element = google.search.cse.element.getElement('searchOnlyCSE');
    element.execute(searchText);
  })
}

// Custom Google Search
(function() {
    var cx = '003813809171160788124:z54qpilp6j4';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();


// Define variable
var objQueryString={};

// Get querystring value
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
