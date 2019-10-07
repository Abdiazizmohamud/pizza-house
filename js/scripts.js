var type, crust, toppings, price, total;

function Pizza(type, crust, toppings, total) {
  this.type = type;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}

//displays total order for pizza selected
//also displays the delivery option
$(document).ready(function() {
  $('button#order').click(function() {
    var pizzatype = $('.type option:selected').val();
    var pizzaCrust = $('.crust option:selected').val();

    var pTopping = [];

    $.each($("input[name='toppings']:checked"), function() {
      pTopping.push($(this).val());
    });
    var pizzaTopping = pTopping.length * 100;
    var pizzaTotal = parseInt(pizzatype) + parseInt(pizzaCrust) + parseInt(pizzaTopping);
    alert("Your total order is: " + pizzaTotal) //displays total for order added
    $('.delivery').show();
    event.preventDefault();
  });
});

//shows second order
$(document).ready(function() {
  $('#order2').click(function() {
    $('#2nd').append('<div class="row">' +
      '<div class="col-md-4">' +
      '<h4>Order your pizza of choice!</h4>' +
      '<form id="form" class="size2">' +
      '<select class="form-control">' +
      '<option label="hawaiaan Large  -  1000" value="1000"></option>' +
      '<option label="hawaiaan Medium  -  800" value="800"></option>' +
      '<option label="hawaiaan Small  -  600" value="600"></option>' +


      '<option label="chicken tikka Large  -  1000" value="1000"></option>' +
      '<option label="chicken tikka Medium  -  800" value="800"></option>' +
      '<option label="chicken tikka Small  -  600" value="600"></option>' +


      '<option label="Chicken Peri peri Large  -  1000" value="1000"></option>' +
      '<option label="Chicken Peri Peri Medium  -  800" value="800"></option>' +
      '<option label="Chicken Peri peri Small  -  600" value="600"></option>' +


      '<option label="Veg tikka Large  -  1000" value="1000"></option>' +
      '<option label="Veg tikka Medium  -  800" value="800"></option>' +
      '<option label="Veg tikka Small  -  600" value="600"></option>' +

      '</select>' +
      '</form>' +
      '</div>' +
      '<div class="col-md-4">' +
      '<h4>Select pizza crust!</h4>' +
      '<form id="form" class="crust2">' +
      '<select name="Crust" class="form-control">' +
      '<option label="None" value="0"></option>' +
      '<option label="Crispy  -  150" value="150"></option>' +
      '<option label="Stuffed  -  200" value="200"></option>' +
      '<option label="Glutten-free  -  250" value="250"></option>' +
      '</select>' +
      '</div>' +
      '</form>' +

      '<div class="col-md-4">' +
      '<h4>Select Toppings of choice!</h4>' +
      '<form id="form" class="topping2">' +
      '<div class="row">' +
      '<div class="col-md-6">' +
      '<input type="checkbox" name="toppings2" class="form control" label="Mushrooms" value="150">Mushrooms<br>' +
      '<input type="checkbox" name="toppings2" class="form control" label="Onions" value="100">Onions<br>' +
      '<input type="checkbox" name="toppings2" class="form control" label="Sweetcorn" value="150">Sweetcorn<br>' +
      '<input type="checkbox" name="toppings2" class="form control" label="jalapeno chilli" value="150">jalapeno chilli<br>' +
      '</div>' +
      '<div class="col-md-6">' +
      '<input type="checkbox" name="toppings2" class="form control" label="Cheese" value="150">Cheese<br>' +
      '<input type="checkbox" name="toppings2" class="form control" label="green Pepper" value="100">green Pepper<br>' +
      '<input type="checkbox" name="toppings2" class="form control" label="Olives" value="150">Olives<br>' +
      '</div>' +
      '</div>' +

      '</form>' + '<br>' +

      '</div>' +
      '</div>');
    $(document).ready(function() {
      $('#2nd').click(function() {
        var pizzatype2 = $('.type2 option:selected').val();
        var pizzaCrust2 = $('.crust2 option:selected').val();

        var pizzaToppings2 = [];

        $.each($("input[name='toppings2']:checked"), function() {
          pizzaToppings2.push($(this).val());
        });

        var pizzaToppings2 = pizzaToppings2.length * 100;
        var pizzaTotal2 = parseInt(pizzatype2) + parseInt(pizzaCrust2) + parseInt(pizzaToppings2);

        alert("Your total order is: " + pizzaTotal2) //displays grandtotal for order added

      });
      // event.preventDefault();
    });

  });
});



//form validation
function validate() {
  var name = document.getElementById('Name').value;
  var estate = document.getElementById('estate').value;
  var houseNo = document.getElementById('hse').value;
  var phone = document.getElementById('phone').value;

  if (name === "" || name === null || estate === "" || estate === null || houseNo === null || houseNo === "" || phone === null || phone === "") {
    alert("All fields are required, Please fill them");
  } else {
    alert(`Hey ${name} Thanks for ordering we will deliver it to house number ${houseNo}
      Your delivery fee is 150ksh`)
  }
}