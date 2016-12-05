$(document).ready(function() {

    var api_url = "https://jsonplaceholder.typicode.com/users";
    var template = $("#user-template").html();

    function showUsers (data) {
        var regex = /\{\{ *(\w+) *\}\}/g;
        var list = $("<ul></ul>");

        $.each(data, function(i, user) {
            var item = $("<li></li>");
            var template_copy = template;
            var found;

        while (found = regex.exec(template_copy)) {
            var local_regex = new RegExp("\\{\\{ *" + found[1] + " *\\}\\}", "g");
            template_copy = template_copy.replace(local_regex, user[found[1]]);
        }

        item.append(template_copy).appendTo(list);
        });

        list.appendTo(".list-container");
    }

    $("#button-get").on("click", function() {
        $.getJSON(api_url)
            .done(function(data) {
                showUsers(data);
            })
            .fail(function() {
                $(".container").append("<ul><li>Wystąpił błąd odczytu danych!</li></ul>");
            });
    })
});