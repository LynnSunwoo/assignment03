$('#save').click(function () {
    // add loading image to div
    $('#loading').html('<img id="loader" src="../images/712.gif"><br>loading...');
    
    // run ajax request
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://api.github.com/users/lynnsunwoo",
        success: function (data) {
            // replace div's content with returned data
            // setTimeout added to show loading
            console.log(data);
            setTimeout(function () {
				
				
                $('#loading').html('<img id="turk" src="' + data.avatar_url + '"><br><h1>' + data.login + '</h1><p><a href=" ' + data.html_url + ' ">Link to GitHub</a><br>Number of Public Repositories: ' + data.public_repos + '<br>Date Created: ' + data.created_at + ' </p>' );
            }, 2000);
        }
    });
});