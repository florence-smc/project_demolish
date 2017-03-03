// CONVERT ALL TO ES5
// use data attributes ***

// template for loading each menu item
const menuItems = (item) => `<article class="menu-item">
  <img src="${item.img}"/>
  <h3>${item.name}</h3>
  <span class="menu-item__price">$${item.price}</span>
  <p>${item.description}</p>
</article>`;

const loadMenuItems = (menu) => {
  let $menuList = $('.menu-list');
  for (let item of menu) {
    $menuList.append(menuItems(menu));
  }
};

let order = [
  {
    itemId: ,
    price: ,
    address: ,
    phoneNumber: ,
  }
]

// let order = [
//   {
//     itemId: 1,
//     price: 10.00
//   }
// ]

// when a user clicks on an image 
// build an object or array 

// $('.order-button').on('click', (ev) => {
//   // do your thing
//   // get data from forms
//   let itemId = $(ev.target).data('item-id');
//   let itemPrice = $(ev.target).data('item-price');
//   order.push({itemId = itemId, itemPrice = itemPrice})
// })

// $('#submit-order').on('click', (ev) => {
//   $.post('/orders', order)
//   .done((response) => {
//     //...
//     order = [];
//     // show other modal perhaps?
//   })
//   .fail((error) => {
//     //...
//   })
// })

$(() => {

<<<<<<< HEAD
  const getMenu = () => {
    $.ajax({
      method: 'GET',
      url: '/menu'
    })
    .then((menu_items) => {
      loadMenuItems(menu_items);
    })
    .catch(() => {
      console.error('There was an error in loading the menu...');
    })
  };

  // load menu on document ready
  getMenu();

  $('#ORDER-BUTTON').on('click', (e) => {
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: '/order',
      data: $orderItems.serialize()
    })
    .then((order_item) => {
      // what we want to do with the order stuff
    })
    .catch(() => {
      console.error('There was a problem processing the order...');
    });
  });





  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for(user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;

});
=======
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });
});


>>>>>>> 69794a45df13ffdbb6b6821649220a952767dc53
