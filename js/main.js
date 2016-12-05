$(document).ready(function() {

    function createUser (name) {
    	return "<li>" + name + "</li>";
    }

    var input = $(".form").find("input[name='user']");
    var list = $("<ul></ul>").insertBefore($(".form"));

    $(".form").on("submit", function (e) {
    	e.preventDefault();

    	var name = $.trim( input.val() );

    	if (name == "") {
    		input.addClass("invalid");
    		return;
    	}

    	input.removeClass("invalid").val("");

    	list.append( createUser(name) );
    });
});