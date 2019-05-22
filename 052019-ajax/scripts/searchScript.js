$('#search').keyup(function(){
    
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, 'i');

$.getJSON('turtle-data.json', function(data){
    console.log(data);
    var output = '<ul class="searchResults">';
    
    $.each(data, function(key,val){
        
        if((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1) || (val.fact.search(myExp) != -1)) {
            
        
           
        output += '<li>';
        output += '<h2>'+val.name + '</h2>';
        output += '<img src="search-image/'+val.shortname + '.jpg" alt="'+val.name + '" />';
        output += '<p>'+ val.bio + '</p>';
        output += '<p><em>'+ val.fact + '</em></p>';
        output += '</li>';
            }; //end of if statement 
    }); 
    output += '</ul>'
    $('#update').html(output);
}) //end get json

}) //end keyup