$(function() {
	'use strict';
	
  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

});

document.getElementById("icon-element").addEventListener("click", toggleIcon);
function toggleIcon() {
	// show password by click
	const passwordElement = document.getElementById("password");
	if (passwordElement.type === "password") {
				  passwordElement.type = "text";
	} else {
				  passwordElement.type = "password";
	}
	// change icon by click
	const iconElement = document.getElementById("icon-element");
	if (iconElement.classList.contains("bi-eye-slash-fill")) {
	  iconElement.classList.remove("bi-eye-slash-fill");
	  iconElement.classList.add("bi-eye-fill");
	} else {
	  iconElement.classList.remove("bi-eye-fill");
	  iconElement.classList.add("bi-eye-slash-fill");
	}
  }