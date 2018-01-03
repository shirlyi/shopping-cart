// an array with all of our cart items
var cart = [],clicked=1;

var updateCart = function () {
  var sum=0;
  var source = $('#post-item').html();
  var template = Handlebars.compile(source);
  $(".cart-list").empty();
  //$(".cart-list").append('<ul>')
  for(var i=0;i<cart.length;i++){

    console.log(cart[i])
    //$(".cart-list").append('<li>'+cart[i].name+' : $'+cart[i].price+'</li>');
    var newHTML = template(cart[i]);
    $('.cart-list').append(newHTML);
    sum+=cart[i].price;
  }
  //$(".cart-list").append('</ul>')
  $(".total").empty();
  $(".total").append(+sum);

  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item) {
  cart.push(item);
  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  $(".cart-list").empty();
  $(".total").empty();
  $(".total").append('0');
  cart=[];
  // TODO: Write a function that clears the cart ;-)
}

$('.view-cart').on('click', function () {
  if(clicked===1){
    clicked=0;
    $('.shopping-cart').show();
  }
  else{
    $('.shopping-cart').hide();
    clicked=1;
  }
  

  // var div = document.getElementsByClassName('.shopping-cart');
  // console.log(div)
  // div.style.display = 'block';
  // TODO: hide/show the shopping cart!
});

$('.add-to-cart').on('click', function () {// TODO: get the "item" object from the page
  var item={price: null ,name: null }
  item.price=$(this).parents(".item").data().price;
  item.name=$(this).parents(".item").data().name;
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
