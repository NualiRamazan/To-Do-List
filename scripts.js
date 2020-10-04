$(document).ready(function(){
    $('input').keydown(function(e) {
        if(e.keyCode === 13) {
            addElement();
        }
    });
}), $(document).on('click', '.add', function() {
    addElement();
}), $(document).on('click', '.delete', function() {
    var isDel = confirm("Подтверждение удаления")
    if (isDel) {
        $(this.parentElement).remove();
    }
}), $(document).on('click', '.completed', function() {
    $("#completed-tasks").append(this.parentElement);
    this.remove();
});

var addElement=function() {
    $("#incomplete-tasks").append(
        "<li><label>" + $("#new-task").val() + 
        "</label><button class='completed'>Completed</button>" +
        "<button class='delete'>Delete</button></li>");
    document.getElementById("new-task").value="";
}
