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

function viewMerchDetails(id) {
$.get('view-merch-details.mst', function(template) {
    $.getJSON(
        'http://private-54400-dallengui2015.apiary-mock.com/cart/id',
        {}, 
        function(json, textStatus) {
            var data = {"cart":json};
            var rendered = Mustache.render(template,data);
            $('#body').html(rendered);
        });
    });
}

function hashAction(){
    var numberPattern = /cart-\d+/g;
    var cartId = location.hash.match( numberPattern );
    if (cartId) {
        viewMerchDetails(cartId);
        return;
    }
    switch(location.hash) {
        case '#About':
          //do something
          $("#body").text("Keep track of your assignments and progress throughout the semester!");
        break;
        case '#Shopping Cart':
          //do something else
          viewCart();
        break;
        case '#MarketPlace':
          $("#body").text("This website is design for users to keep track of they're progress throughtout their semester by calculating they're current grades using their syllabus for grade percentages and their earn grades on assignments");
        break;
        case '#Login Here':
          //Create a new user
          window.location.href = "Login.html";
        break;
        case '#Contact Us':
          $("#body").text("Work in Progress!");
        break;
        default:
          location.hash = "home";
    }
}


$(function(){
    $("#body").text("");
    $.get('navigation.mst', function(template) {
    var data = {"title":"TEST TITLE", 
                "nav":[
                    {"title":"Login", "href":"home"},
                    {"title":"About", "href": "notes"},
                    {"title":"MarketPlace", "href": "blog"}
                    {"title":"Shopping Cart", "href": "Shopping Cart"}
                    {"title":"Contact Us", "href": "Contact Us"}
                    ]
                };
    var rendered = Mustache.render(template,data);
    $('#navigation').html(rendered);
    });
    window.onhashchange = function(){
      hashAction();
    };
    hashAction();
});

