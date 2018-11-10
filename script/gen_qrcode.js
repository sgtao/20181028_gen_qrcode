(function(){
	'use strict';

	// ex) https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
	var url =  'https://api.qrserver.com/v1/create-qr-code/?';
	var charset = 'charset-source=UTF-8';
	var size = '&size=150x150';

	var textarea = document.getElementById('qrdata');
	var conv_btn = document.getElementById('conv_btn');
	var msg      = document.getElementById('msg');
	var barCode  = document.getElementById('barCode');
	var qr_img   = document.createElement('img');
	var first_load = false;

	conv_btn.addEventListener('click', function(){
		msg.textContent = '';
		var textarea = encodeURIComponent(document.F1.qrdata.value);
		console.log(textarea);
		if (textarea == "") {
			msg.textContent = "Failed!(textarea is blank)";
			return;
		} else {
			msg.textContent = "qrdata is " + textarea;
		}

		qr_img.setAttribute("src", url + charset + size + '&data=' + textarea);
		qr_img.setAttribute("id", "qrimg");
		if (first_load === false) {
			barCode.appendChild(qr_img);
			first_load = true;
		}
	  });
})();
