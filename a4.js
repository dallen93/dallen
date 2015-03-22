// composer ->  D'Marquis Allen
// Assignment #4

//A4.1
 function setBgColor (color) {
    document.body.bgColor = color;
 }
 
//A4.2
 function alertTitle {
	alert(document.title);
}

//A4.3
 function validateEmail(email) { 
     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
 }

//A4.4

 var xmlhttp2 = new XMLHttpRequest();
 xmlhttp2.onreadystatechange = function(){
 		if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200){
				console.log(xmlhttp2.responseText);
						}
						};

						xmlhttp2.open("GET", "http://private-40e0f-smugui2015.apiary-mock.com/assignments/4", true);
						xmlhttp2.send();
