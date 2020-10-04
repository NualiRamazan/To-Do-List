$(document).ready(function(){
    $(".add").click(function(){
        $("#incomplete-tasks")
        .append("<li><label>" + $("#new-task").val() + 
        "</label><button class='completed'>Completed</button><button class='delete'>Delete</button></li>");
        document.getElementById("new-task").value="";
        delElement();
        delCompl();
    }), delElement(), delCompl()
});

var delElement=function() {
    $(".delete").click(function(){
        var isDel = confirm("Подтверждение удаления")
        if (isDel) {
            $(this.parentElement).remove();
        }
    });
}

var delCompl=function() {
    $(".completed").click(function(){
        $("#completed-tasks")
        .append(this.parentElement);
        this.remove()
    })
}