$("#searchFor").on("click", function() { 
  
var thing = document.getElementById('searchIt').value;    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&prop=revisions&rvprop=content&format=json&formatversion=2&search="+thing+"&callback=?",function (dataa) {  
      
     for(var i=0;i<dataa[1].length;i++) {
       
  document.getElementById("test"+(i+1)).className = "betterTest";
  
       
      $("#test"+(i+1)).html("<br /><a href="+dataa[3][i]+">"+dataa[1][i]+"</a><br /><br />"+dataa[2][i]); 
       
     };                                            
  }); 
        
 });
$("#random").on("click", function() {
  window.open("https://en.wikipedia.org/wiki/Special:Random");
});



           