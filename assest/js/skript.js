
function load_doc(){
    var xhttps = new XMLHttpRequest();
    xhttps.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("new_id").innerHTML=this.responseText;
        }
    }
    xhttps.open("GET","http://localhost/ajax/yobaby.txt",true);
    xhttps.send(); 
}
function chane_tx(){
	var xht = new XMLHttpRequest();
	xht.onreadystatechange=function(){
		if(this.readyState==4 && this.status==200){
			document.getElementById("ajax_id").innerHTML=this.responseText;
		}
	}
	xht.open("POST","http://localhost/ajax/nepoly/index.html",true);
	xht.send();
}