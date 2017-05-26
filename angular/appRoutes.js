app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $('body').hide();

    var viewDir = 'app/views/';

    $routeProvider

    .when('/', {
        templateUrl : viewDir+'home/home-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/contact', {
        templateUrl : viewDir+'home/contact-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/about', {
        templateUrl : viewDir+'home/about-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/cscs-cards', {
        templateUrl : viewDir+'menu/cscs-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/cscs-test', {
        templateUrl : viewDir+'menu/test-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/cart', {
        templateUrl : viewDir+'cart/cart-view.html',
        controller  : 'CartCtrl'
    })

    .when('/checkout', {
        templateUrl : viewDir+'cart/checkout-view.html',
        controller  : 'CartCtrl'
    })

    .when('/payment', {
        templateUrl : viewDir+'cart/payment-view.html',
        controller  : 'CartCtrl'
    })

    .when('/checkout-success', {
        templateUrl : viewDir+'cart/success-view.html',
        controller  : 'CartCtrl'
    })

    .when('/checkout-error', {
        templateUrl : viewDir+'cart/error-view.html',
        controller  : 'CartCtrl'
    })

    .when('/terms', {
        templateUrl : viewDir+'other/terms-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/privacy', {
        templateUrl : viewDir+'other/privacy-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/:catName', {
        templateUrl : viewDir+'cat/cat-view.html',
        controller  : 'CatCtrl'
    })

    .when('/:catName/:courseName', {
        templateUrl : viewDir+'course/course-view.html',
        controller  : 'CourseCtrl'
    })



    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);


});
