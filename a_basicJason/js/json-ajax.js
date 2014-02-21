function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        //console.log(jsonObj);
		
		// getting the title in array 1.
		//console.log(jsonObj[1].title);
		
	/*	console.log(jsonObj);
		var div = document.getElementById("article-feed");
		var articleTitle = document.createElement('h2');
		articleTitle.innerHTML = jsonObj[1].title;
		var articleImg = document.createElement('img');
		articleImg.setAttribute('src',jsonObj[1].imageUrl);
		
		div.appendChild(articleTitle);
		div.appendChild(articleImg);*/
		
		for (var key in jsonObj){
		
			console.log(jsonObj[key]);
			// targeting div id=article-feed
			var maindiv = document.getElementById("article-feed");
			
			// creating div for each articles
			var articleDiv = document.createElement('div');
			articleDiv.classList.add("articles");
			
			// article title
			var articleTitle = document.createElement('h2');
			articleTitle.innerHTML = jsonObj[key].title;
			
			// article img
			var articleImg = document.createElement('img');
			articleImg.setAttribute('src',jsonObj[key].imageUrl);
			
			// article author
			var author = document.createElement('p');
			author.innerHTML = "Author: " + jsonObj[key].author;
			
			// article captions
			var caption = document.createElement('p');
			caption.innerHTML = jsonObj[key].caption;
			
			// article links
			var linker = document.createElement('a');
			linker.innerHTML = "Link to the article";
			linker.setAttribute('href',jsonObj[key].url);
			
			//appending article things in article divs
			articleDiv.appendChild(articleTitle);
			articleDiv.appendChild(articleImg);
			articleDiv.appendChild(author);
			articleDiv.appendChild(caption);
			articleDiv.appendChild(linker);
			
			//appending article divs in to article-feed.
			maindiv.appendChild(articleDiv);
		
		}		
		
      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
}

//auto load loadJSON();