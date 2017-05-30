$(document).ready(function(){
    $('form').submit(function(){
        var userData = [];
        var formData = $(this).children('input');
        var formStr  = "<tr>";

        for(var i=0;i<formData.length;i++){
            if(formData[i].value != ""){
                formStr += "<td>"+formData[i].value+"</td>";
            }
        }
        formStr += "</tr>";
        $('table tbody').append(formStr);

        return false;
    });
});
