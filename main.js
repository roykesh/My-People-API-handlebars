
    $.get("https://jsonplaceholder.typicode.com/users", function (result) {
        let source = $('#people-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({result});
        $('.people').append(newHTML);
    })
