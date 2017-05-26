app.factory('details', function() {
    return {
        number: '020 3818 3838',
        email: 'info@citywindowsandglass.co.uk'
    }
})


app.factory('cats', function() {
  return [
    {name: 'Construction', url: 'construction', icon: 'building-o'},
    {name: 'Health & Safety', url: 'health-safety', icon: 'exclamation-triangle'},
    {name: 'Working at Height', url: 'working-at-height', icon: 'signal'},
    {name: 'First Aid', url: 'first-aid', icon: 'medkit'},
    {name: 'Fire Safety', url: 'fire-safety', icon: 'fire'},
    {name: 'Food Safety', url: 'food-safety', icon: 'cutlery'}
    /*{name: 'In-House Training', url: 'in-house-training', icon: 'home'},
    {name: 'E-Learning', url: 'e-learning', icon: 'university'}*/
  ]
})

app.factory('industryList', function() {
  return [
    {id: 0, name: 'Select Industry Body'},
    {id: 1, name: 'CSCS - General Construction'},
    {id: 2, name: 'CCDO - Demolition'},
    {id: 3, name: 'CISRS - Scaffolding'},
    {id: 4, name: 'JIB-PMES - Plumbing'},
    {id: 5, name: 'SKILLcard - Engineering'}
  ]
})

app.factory('appTypeList', function() {
  return [
    {id: 0, name: 'Select Application Type'},
    {id: 1, name: 'New'},
    {id: 2, name: 'Replace'},
    {id: 3, name: 'Renew'}
  ]
})



app.factory('cart', function() {
  return {};
})

app.factory('courses', function() {
  return {};
})

app.service('func', function($http, cart, courses, $localStorage) {
  var func = {};

  func.getCourses = function(cb) {
    $http.post('https://hshelpline.co.uk/custom/api/get-products.php').then(function(resp) {
      courses = resp.data;
      cb(courses);
    })
  }

  func.addCart = function(prodID, cb) {
    if($localStorage.bh.cart == undefined) {
      $localStorage.bh.cart = [];
    }
    var cartKey = Object.keys($localStorage.bh.cart).length;
    for(key in $localStorage.bh.courses) {
      if($localStorage.bh.courses[key].product_no == prodID) {
        $localStorage.bh.cart.push($localStorage.bh.courses[key]);
        $localStorage.bh.cart[cartKey].qty = 1;
      }
    }
    cb(true);
  }

  func.addLead = function(customerData, cb) {
    $http({
      method : 'POST',
      url : 'https://hshelpline.co.uk/custom/api/add-lead.php',
      data: $.param(customerData),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(function(resp) {
      cb(resp);
    })
  }

  func.addPayDetails = function(pay, cb) {
    $http({
      method : 'POST',
      url : 'https://hshelpline.co.uk/custom/api/add-pay.php',
      data: $.param(pay),
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(function(resp) {
      cb(resp);
    })
  }


  func.getPaypalToken = function(cb) {
    $http.post('/api/get-paypal-token').then(function(resp) {
      cb(resp);
    })
  }

  func.unslug = function(slugs) {
    slugs = slugs.replace(/_/g, '-');
	  slugs = slugs.replace(/--/g, '-');

    var list = [];
    slugs.split('-').forEach(function(slug) {
      list.push(slug.substr(0, 1).toUpperCase() + slug.substr(1));
    })
    return list.join(' ');
  }


  return func;
})
