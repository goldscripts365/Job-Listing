$(function () {

    function display(bool) {
        if (bool) {
            $("html").show();
        } else {
            $("html").hide();
        }
    }

    function displaylevel(bool) {
        if (bool) {
            $("#level").show();
        } else {
            $("#level").hide();
        }
    }
    display(false)
    displaylevel(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "show") {
            if (item.status == true) {
                $("html").fadeIn();
                display(true)
            } else {
                display(false)
            }
        }
        if (item.type === "showlevel") {
            if (item.status == true) {
                displaylevel(true)
            } else {
                displaylevel(false)
            }
        }
    })
    
    document.onkeyup = function (data) {
        if (data.which == 27) {
            $("html").fadeOut("slow");
            $.post('https://gld_joblisting/close', JSON.stringify({}));
            return
        }
    };

    $("#fisherman").click(function () {
        $("#fisherman-panel").css("display", "block");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#fueler").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "block");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#lumberjack").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "block");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#miner").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "block");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#reporter").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "block");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#slaughterer").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "block");
        $("#tailor-panel").css("display", "none");
    }) 
    $("#tailor").click(function () {
        $("#fisherman-panel").css("display", "none");
        $("#fueler-panel").css("display", "none");
        $("#lumberjack-panel").css("display", "none");
        $("#miner-panel").css("display", "none");
        $("#reporter-panel").css("display", "none");
        $("#slaughterer-panel").css("display", "none");
        $("#tailor-panel").css("display", "block");
    }) 
})


function BuyBtn(id) {
    if (id == 'fisherman-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/fisherman-btn', JSON.stringify({}));
    } else if (id == 'fueler-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/fueler-btn', JSON.stringify({}));
    }else if (id == 'lumberjack-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/lumberjack-btn', JSON.stringify({}));
    }else if (id == 'miner-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/miner-btn', JSON.stringify({}));
    }else if (id == 'reporter-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/reporter-btn', JSON.stringify({}));
    }else if (id == 'slaughterer-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/slaughterer-btn', JSON.stringify({}));
    }else if (id == 'tailor-btn') {
        $("html").fadeOut("slow");
        $.post('https://gld_joblisting/tailor-btn', JSON.stringify({}));
    }
}