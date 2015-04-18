function viewCart() {
$.get('merchandise-list.mst', function(template) {
    $.getJSON(
        'http://private-54400-dallengui2015.apiary-mock.com/cart', 
        {}, 
        function(json, textStatus) {
            var data = {"cart":json};
            console.log(data);
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function addMerchandise() {
$.get('add-merchandise.mst', function(template) {
    $.getJSON(
        'http://private-54400-dallengui2015.apiary-mock.com/cart',
        {}, 
        function(json, textStatus) {
            var data = {"cart":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

