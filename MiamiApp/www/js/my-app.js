// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});


$$(document).on('pageInit', function (page) {
  // Do something here for "about" page
   $$("#sub").on('click', function(){
                console.log("I am clicked");
                var input = $$('#na').val();
                if(!input) {
                   myApp.alert('Please fill in the field');
                   return;
                }
                console.log(input);
	   	var url = 'http://community.miamioh.edu/ph/search.php';
		$$.get(url, {search:input}, function (data) {
			var newPageContent = 
			'<div class="page" data-page="my-page">' +
                            '<div class="page-content">' +
			   	 data +
                            '</div>' +
                        '</div>';
                        mainView.router.loadContent(newPageContent);
		});
   });
   $$("#signIn").on('click', function(){
 	var username = $$("#usr").val();
        var password = $$("#pwd").val();
 	if(!password && !username){
            myApp.alert('Please fill in the username and password','Miami App');
            return;
         }else if(!username){
	   myApp.alert('Please fill in the username','Miami App');
 	   return;
         }else if(!password){
	   myApp.alert('Please fill in the password','Miami App');
 	   return;
 	}else{
	   myApp.alert('succeed','Miami App');
 	   return;
 	}
 
    })


});
/*
$$(document).on('pageInit',function(e){
	var page = e.detail.page;
	if(page.name === 'map') {
 var mu = {lat: 39.5105, lng: -84.7309};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: mu
          });
var marker = new google.maps.Marker({
            position: mu,
            map: map
          });

	}
})
*/



/*
myApp.onPageInit('map',function(page) {
//<script>
        function initMap(){
          var mu = {lat: 39.5105, lng: -84.7309};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: mu
          });
          var marker = new google.maps.Marker({
            position: mu,
            map: map
          });
        }
//</script>
//<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBIawavjxzyp3aI4ZEsNeJA4HcFfLwIoyM&callback=initMap">
//</script>



});
*/

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}

