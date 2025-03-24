$(document).ready(function() {
    $("#new-task").click(function() {
        let task = prompt("Enter a new task:");
        if (task) {
            let li = $("<li></li>").text(task);
            li.click(function() {
                if (confirm("Do you want to remove this task?")) {
                    $(this).remove();
                }
            });
            $("#todo-list").prepend(li);
        }
    });
});