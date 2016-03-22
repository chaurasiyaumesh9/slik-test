var app = angular.module('angularApp', ['ngRoute']);

app.directive('slickSlider', function ($timeout) {
    return {
        restrict: 'A',
        scope: {'data': '='},
        link: function (scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function(newVal, oldVal) {
				//console.log('newVal :',newVal);
				//console.log('oldVal :',oldVal	);
                if ( newVal.length > 0 && !isInitialized) {
					//console.log('true',scope.$eval(attrs.slickSlider));
					$timeout(function() {
						$(element).slick( scope.$eval(attrs.slickSlider));
						isInitialized = true;
					},0);
                    
                }
            });
        }
    }
});


app.controller('MainCtrl', function( $scope ){
	 $scope.customer = {
        name: 'David',
        street: '1234 Anywhere St.'
    };
	$scope.message = "Product Created!";
	$scope.likeFunction = function( star ) {
		alert("I like the book!, and gave " + star + " star.");
	}

	$scope.slides = [
		{image: 'images/banner-1.jpg', description: 'Image 00'},
		{image: 'images/banner-6.jpg', description: 'Image 01'},
		{image: 'images/banner-7.jpg', description: 'Image 02'}
	];
	$scope.currentIndex = 0;

	$scope.setCurrentSlideIndex = function (index) {
		$scope.currentIndex = index;
	};

	$scope.isCurrentSlideIndex = function (index) {
		return $scope.currentIndex === index;
	};
	$scope.prevSlide = function () {
		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	};

	$scope.nextSlide = function () {
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	};
});
//app.directive('helloWorld', function() {
//  return {
//      restrict: 'AE',
//      replace: true,
//      template: '<h1>Hello World!!</h1>'
//  };
//});

app.directive('mySharedScope', function(){
	return {
		template: 'Name: {{customer.name}}<br /> Street: {{customer.street}}'
	}
});
app.directive("notification", function() {
    return {
        restrict: 'E',
		replace:true,
        scope: {
            messagetype: '@'
        },
        template: '<div class="jumbotron text-center alert"><h1>{{ messagetype }}</h2></div>'
    }
});

app.directive("bookComment", function() {
    return {
        restrict: 'E',
			replace:true,
        scope: {
            text: '='
        },
        template: '<input type="text" ng-model="text"/>'
    }
});

app.directive("likeBook", function() {
    return {
        restrict: 'E',
        scope: {
            like: '&'
        },
        template: '<input type="text" ng-model="starCount" placeholder="Enter rate count here"/><br/><input type="button" ng-click="like({star: starCount})" value="Like"/>'
    }
})


app.directive('helloWorld', function() {
  return {
    restrict: 'AE',
    replace: true,
    template: '<p style="background-color:{{color}}">Hello World',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});