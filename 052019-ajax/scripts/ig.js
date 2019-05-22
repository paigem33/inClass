//200680888.1677ed0.ca4609e2a621403eb305d67e5d83fb39
$(function(){
    var token = '200680888.1677ed0.ca4609e2a621403eb305d67e5d83fb39';
    var userID = 200680888;
    numPics = 5;
    
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userID +'/media/recent',
        dataType: 'jsonp',
        type: 'GET',
        data: {
            access_token: token,
            count: numPics
        },
        success: function(data){
            console.log(data);
            for (x in data.data){
                $('#igFeed').append('<img src="'+data.data[x].images.thumbnail.url + '">')
            }
        }, 
        error: function(data){
            console.log(data);
        }
    })
})