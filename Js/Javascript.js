$(".text-box").on("keyup", function (e) {
    // 13 means Enter Key 
    if (e.keyCode == 13 && $(".text-box").val() != "") {
        var task = $("<div class='task'></div>").text($(".text-box").val());
        var del = $("<i class='fas fa-trash'></i>").click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                p.remove();
            })
        });
        var done = $("<i class='fas fa-check'></i>").click(function () {
            var p = $(this).parent();
            p.fadeOut(function () {
                $('.completed').append(p);
                done.remove();
                p.fadeIn();
            })
        });

        task.append(del, done);
        $(".not-completed").append(task);
        // to clear input box
        $(".text-box").val('');
    }
})
