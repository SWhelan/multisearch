multisearch();
function multisearch(){
	var linkHeaders = document.getElementsByClassName("r");
	
	for(var i = 0; i < 5; i++){
		var url = linkHeaders[i].childNodes[0].getAttribute("href");
		window.open(url, '_blank');
	}
}
