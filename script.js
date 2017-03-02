$(document).ready(function(){
  $.get("https://www.reddit.com/r/aww/.json", function(goodness){
    var redditArray = goodness.data.children;

    for(var i=0; i<redditArray.length; i++){
      var thumbnail = redditArray[i].data.thumbnail;
      var title = redditArray[i].data.title;
      var author = redditArray[i].data.author;
      var score = redditArray[i].data.score;
      var permalink =  "https://www.reddit.com/" + redditArray[i].data.permalink;
      $('section').append(
        '<div><a href =  " '+ permalink +'"  ><h2>' + 'Title: ' + title + '<br>' + 'Author: ' + author+ '<br>' + 'Score: ' + score +
        '</h2><img src="' + thumbnail+ '"/></a></div>');


    }
  });
});
