$(document).ready(function(){
    $("ul").empty();

    var arrayGlobal = [];
    $("#addTask").click(function(){
        var newlistItem = $("<li></li>").attr("class","list-group-item");
        var newCheckbox = $("<input></input>");
        newCheckbox.attr({"type":"checkbox","class":"pull-right"});
        var array = [];
        $(".incomplete-list ul li").each(function(){
            array.push($(this).text().toLoweCase());
        });

        var newTaskText = $("#new-task").val();
        var newTask = $("<label></label>").html(newTaskText);
        newlistItem.append(newTask).append(newCheckbox);

        if(jQuery.inArray(newTaskText.trim().toLoweCase(),array) == -1 &&
        jQuery.inArray(newTaskText.trim().toLoweCase(),arrayGlobal) == -1){
            if(newTaskText !=""){
                $(".incomplete-list ul").append(newlistItem);
                $("#new-task").val("");
            }else{
                alert("Task already added!");
                $("#new-task").val("");
            }
        }
    });

    $(document).on("click","input[type=checkbox",function(){
        var ckeckedList = $(this.parentNode);
        var btnDelete = $("<button></button>").attr("class","delete btn btn-danger pull-right");
        $(btnDelete).text("Delete");

        $(checkedList)
    });
})