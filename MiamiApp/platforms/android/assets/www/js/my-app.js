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

// Notificaiton.
myApp.onPageInit('index',function(page){
	console.log("what even?");

});

$$('.notification-custom').on('click', function () {
    myApp.addNotification({
        message: 'Not logged in yet?',
        button: {
            text: 'Click me',
            color: 'yellow',
	    close: true
        }
/*,	onClose: function(){
		myApp.alert('woo!');
	}
*/
    });
});





myApp.onPageInit('caslogin',function (page) {
	/*    $$('.create-page').on('click', function () {
        createContentPage();
    });
*/
	console.log("reached caslogin.");

        window.addEventListener("message",
        function(e){
                if(e.origin !== 'https://muidp.miamioh.edu/cas/login') {return;}
                alert("**session**"+e.data);
        }, false);

     });
$$(document).on('pageInit', function (page) {
  // Do something here for "about" page
  // var urlForNews = "http://miamioh.edu/news/listings/listing_campus-news.php"
  // $$.get(urlForNews, function(data){
     // console.log("Getting Data Successfully...");
     // var xmlValue = $j.xml(data)
     // var title = data.find("title");
     // console.log(title);
  // });
    $$(".newslink").on("click", function(){
	var miamiurl = $(this).parent().parent().children(".card-content").children().children("#linkPath").text()
	console.log(miamiurl);
        window.open(miamiurl);
    });
    $$("#ac-1").once('click', function(e){
        var url = 'http://miamioh.edu/news/listings/arts-rss.php';
	setTimeout(function(){
        $$.get(url, function (data) {
                var xmlDoc = $.parseXML(data);
                var $xml = $(xmlDoc);
                var $item = $xml.find("item");
		var index = 0;
                var newCardContent = '<div class="page" data-page="my-page">' +
                            '<div class="page-content">' +
                            '<div class="content-block-title">Art News</div>';
                $item.each(function(){
			index++;
			console.log(index);
                        var title = $(this).find("title").text();
                        var description = $(this).find("description").text();
                        var pubDate = $(this).find("pubDate").text();
                        var link = $(this).find("link").text();
                        newCardContent +=
                   '<div class="card">' +
                        '<div  class="card-header">' +
                                title +
                        '</div>' +
                        '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                                '<p class="color-gray">' +
                                pubDate +
                                '</p>' +
                                '<p>' +
                                description +
                                '</p>' +
				'<p id = "linkPath" hidden>'+
	                          link +
        	                '</p>' +

                            '</div>' +
                        '</div>' +
                        '<div class="card-footer">' +
                            '<a href="#" ' +
                            'class = "newslink">Read more</a>' +
                        '</div>' +
                   '</div>';
		   if(index == 10){ return false;}
                });
                newCardContent += '</div>' +
                                '</div>' +
                        '</div>';
                mainView.router.loadContent(newCardContent);
         });
	},2000);
   });

   $$("#ac-2").on('click', function(){
	var url = 'http://miamioh.edu/news/listings/listing_campus-news.php';
        $$.get(url, function (data) {
		var xmlDoc = $.parseXML(data);
		var $xml = $(xmlDoc);
		var $item = $xml.find("item");
		var newCardContent = '<div class="page" data-page="my-page">' +
                            '<div class="page-content">' +
			    '<div class="content-block-title">Campus News</div>';
		$item.each(function(){
			var title = $(this).find("title").text();
			var description = $(this).find("description").text();
			var pubDate = $(this).find("pubDate").text();
			var link = $(this).find("link").text();
			newCardContent +=
                   '<div class="card">' +
                        '<div  class="card-header">' +
                                title +
                        '</div>' +
                        '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                                '<p class="color-gray">' +
                                pubDate +
                                '</p>' +
                                '<p>' +
                                description +
                                '</p>' +
				'<p id = "linkPath" hidden>'+
                                  link +
                                '</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="card-footer">' +
                            '<a href="#"' +
			    ' class = "newslink">Read more</a>' +
                        '</div>' +
                   '</div>';
		});
		newCardContent += '</div>' + 
				'</div>' +
                        '</div>'; 
		mainView.router.loadContent(newCardContent);
         });
   });
   $$("#ac-3").on('click', function(){
        var url = 'http://miamioh.edu/news/listings/provost-rss.php';
        $$.get(url, function (data) {
                var xmlDoc = $.parseXML(data);
                var $xml = $(xmlDoc);
                var $item = $xml.find("item");
                var newCardContent = '<div class="page" data-page="my-page">' +
                            '<div class="page-content">' +
                            '<div class="content-block-title">Provost News</div>';
                $item.each(function(){
                        var title = $(this).find("title").text();
                        var description = $(this).find("description").text();
                        var pubDate = $(this).find("pubDate").text();
                        var link = $(this).find("link").text();
                        newCardContent +=
                   '<div class="card">' +
                        '<div  class="card-header">' +
                                title +
                        '</div>' +
                        '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                                '<p class="color-gray">' +
                                pubDate +
                                '</p>' +
                                '<p>' +
                                description +
                                '</p>' +
				'<p id = "linkPath" hidden>'+
                                  link +
                                '</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="card-footer">' +
                            '<a href="#"' +
                            ' class="newslink">Read more</a>' +
                        '</div>' +
                   '</div>';
                });
                newCardContent += '</div>' +
                                '</div>' +
                        '</div>';
                mainView.router.loadContent(newCardContent);
         });
   });
   $$("#ac-4").on('click', function(){
        var url = 'http://miamioh.edu/news/listings/listing_top-stories.php';
        $$.get(url, function (data) {
                var xmlDoc = $.parseXML(data);
                var $xml = $(xmlDoc);
                var $item = $xml.find("item");
                var newCardContent = '<div class="page" data-page="my-page">' +
                            '<div class="page-content">' +
                            '<div class="content-block-title">Top Stories</div>';
                $item.each(function(){
                        var title = $(this).find("title").text();
                        var description = $(this).find("description").text();
                        var pubDate = $(this).find("pubDate").text();
                        var link = $(this).find("link").text();
                        newCardContent +=
                   '<div class="card">' +
                        '<div  class="card-header">' +
                                title +
                        '</div>' +
                        '<div class="card-content">' +
                            '<div class="card-content-inner">' +
                                '<p class="color-gray">' +
                                pubDate +
                                '</p>' +
                                '<p>' +
                                description +
                                '</p>' +
				'<p id = "linkPath" hidden>'+
                                  link +
                                '</p>' +
                            '</div>' +
                        '</div>' +
                        '<div class="card-footer">' +
                            '<a href="#" class="newslink">Read more</a>' +
                        '</div>' +
                   '</div>';
                });
                newCardContent += '</div>' +
                                '</div>' +
                        '</div>';
                mainView.router.loadContent(newCardContent);
         });
   });


   $$("#sub").on('click', function(){
                var input = $$('#na').val();
                if(!input) {
                   myApp.alert('Please fill in the field');
                   return;
                }
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
 
    });

   $$("#search").on('click', function(){
                console.log("search button clicked");
                var input = $$('#searchTerms').val();
                if(!input) {
                   myApp.alert('Please enter at least one term');
                   return;
                }
                console.log(input);
   
   });

});


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

function getDate(){
	var ele = document.getElementById('display');
	var dt = Date();
	ele.innerHTML = dt;
}
