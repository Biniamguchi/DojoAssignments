$(document).ready(function(){
    /*
        I looked thru the API / Documentation and it seemed that the info that was
        being asked for about the certain houses was missing. I ended up
        using different houses that actually contained their names, words and titles from the JSON data as
        well as finding their coat of arms images. Idk if the API is out of date or if this was intentional,
        I apologize if I misunderstood. The idea is the same, which I think is all that matters.
    */
    let api  = "https://anapioficeandfire.com/api/houses/";
    let kids = $('#contBot').children();
    let url;

    $('#contTop img').click(function(){
        let id = $(this).attr('id');
        url = api+id;

        $.get(url,function(data){
            let titles = "";

            $(kids[0]).html("House Details:");
            $(kids[1]).html("Names: "+data.name);
            $(kids[2]).html("Words: "+data.words);

            for(var i=0;i<data.titles.length;i++){titles += data.titles[i]+" ";}

            $(kids[3]).html("Titles: "+titles);
        },'json');
    });
});
