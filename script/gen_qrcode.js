(function(){
	'use strict';

    // ex) https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
    
	var url =  'https://api.qrserver.com/v1/create-qr-code/?';
	var charset = 'charset-source=UTF-8';
	var size = '&size=150x150';

	var convert = document.getElementById('convert');
    var qr_img = document.createElement('img');
    var first_load = false;

  convert.addEventListener('click', function(){
	var textarea = encodeURIComponent(document.F1.qrdata.value);
	console.log(textarea);

	// var img = $('<img>').attr('src', url + charset + size + '&data=' + textarea);
      qr_img.setAttribute("src", url + charset + size + '&data=' + textarea);
      qr_img.setAttribute("id", "qrimg");
      if (first_load === false) {
          document.body.appendChild(qr_img);
	  first_load = true;
      } 

  });
})();
