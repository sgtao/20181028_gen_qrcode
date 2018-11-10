'use strict';

// ex) https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example
var url =  'https://api.qrserver.com/v1/create-qr-code/?';
var charset = 'charset-source=UTF-8';
var size = '&size=150x150';

$(function(){
    $('#button').click(function(){
	let msg = encodeURIComponent($('#qrdata').val());
	console.log(msg);
	var img = $('<img>').attr('src', url + charset + size + '&data='+msg);
	$('#barCode').html(img);
    });
});
