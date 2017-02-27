<script type="text/javascript" src="jquery-1.6.2.min.js"></script>
<script type="text/javascript">
function SearchLibrary(query) {
$.ajax({
		url:'https://www.lib.miamioh.edu/' + query,
		dataType: 'jsonp',
		success: function (data) {
				var row = "";
				for(i =0; i < data.feed.entry.length; i++) {
				row += "<div class='search_item'>";
				row += "<table width='100%'>";
				row += "<tr>";
				row += "<td vAlign='top' align='left'>";
				
				}
				document.getElementById("search-results-block").innerHTML = row;
		},
		error: function () {
				alert("Oh snap, something went wrong.");
		},
});
return false;
}
</script>






