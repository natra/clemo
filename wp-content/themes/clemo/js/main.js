document.addEventListener("DOMContentLoaded", function(event) { 
	if(document.getElementsByClassName("mediaItem").length > 0){
		var mediaLinks = document.getElementsByClassName("mediaItem")[0].getElementsByTagName("a");
		for (var i = mediaLinks.length - 1; i >= 0; i--) {
			var baseBackground = this.getElementsByClassName("fa-circle")[0].style.color;
			mediaLinks[i].addEventListener("mouseover", function(){
				this.getElementsByClassName("fa-circle")[0].style.color = "#ffe1bd";
			});
			mediaLinks[i].addEventListener("mouseleave", function(){
				this.getElementsByClassName("fa-circle")[0].style.color = baseBackground;
			});
		};
	}
	if(document.getElementsByClassName("submitBtn").length > 0){
		var isContactPage = false;
		var submitBtn = document.getElementsByClassName("submitBtn")[0];
		if(submitBtn.parentNode.parentNode.parentNode.classList.contains('contactWrapper2')){
			isContactPage = true;
		}
		var baseBackground1 = submitBtn.style.backgroundColor;
		submitBtn.addEventListener("mouseover",function(){
			this.style.backgroundColor = "#ffcb93";
			this.style.cursor = "pointer";
			if(isContactPage){
				this.style.color = '#000';
			}
		});
		submitBtn.addEventListener("mouseleave",function(){
			this.style.backgroundColor = baseBackground1;
			if(isContactPage){
				this.style.color = '#fff';
			}
		});
		var contactForm = submitBtn.parentNode;

		// ==================== contact form validation =====================================

		var isNameErrorVisible = false;
		var isEmailErrorVisible = false;
		var isMessageErrorVisible = false;
		var isNameValid = false;
		var isEmailValid = false;
		var isMessageValid = false;
		var nameInput = contactForm["name"];
		nameInput.addEventListener("blur", function(){
			if(this.value.length < 4){
				this.style.borderColor = "red";
				isNameErrorVisible = true;
				contactForm.parentNode.querySelector(".nameLengthValidation").innerText ="Name cannot have less than 4 characters";
			} else {
				this.style.borderColor = "#333333";
				isNameValid = true;
				isNameErrorVisible = false;
				contactForm.parentNode.querySelector(".nameLengthValidation").innerText ="";
			}
			(isNameErrorVisible || isEmailErrorVisible || isMessageErrorVisible) ? contactForm.style.marginTop = "20px" : contactForm.style.marginTop = "0";
		});

		var emailInput = contactForm["e-mail"];
		emailInput.addEventListener("blur", function(){
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    		var email = this.value;
			if(this.value.length == 0){
				this.style.borderColor = "red";	
				
				isEmailErrorVisible = true;
				contactForm.parentNode.querySelector(".emailBlankValidation").innerText ="Email cannot be blank";
			} else {
				contactForm.parentNode.querySelector(".emailBlankValidation").innerText ="";
				if(!re.test(email)){
					this.style.borderColor = "red";
					isEmailErrorVisible = true;
					contactForm.parentNode.querySelector(".emailSyntaxValidation").innerText ="Email is invalid";
				} else {
					this.style.borderColor = "#333333";
					isEmailValid = true;
					isEmailErrorVisible = false;
					contactForm.parentNode.querySelector(".emailBlankValidation").innerText ="";
					contactForm.parentNode.querySelector(".emailSyntaxValidation").innerText ="";
				}
			}
			(isNameErrorVisible || isEmailErrorVisible || isMessageErrorVisible) ? contactForm.style.marginTop = "20px" : contactForm.style.marginTop = "0";
		});

		var messageTextarea = contactForm["message"];
		messageTextarea.addEventListener("blur", function(){
			if(this.value.length < 5){
				this.style.borderColor = "red";
				isMessageErrorVisible = true;
				contactForm.parentNode.querySelector(".messageLengthValidation").innerText ="Message cannot have less than 5 characters";
			} else {
				this.style.borderColor = "#333333";
				isMessageValid = true;
				isMessageErrorVisible = false;
				contactForm.parentNode.querySelector(".messageLengthValidation").innerText ="";
			}
			(isNameErrorVisible || isEmailErrorVisible || isMessageErrorVisible) ? contactForm.style.marginTop = "20px" : contactForm.style.marginTop = "0";
		});

	// ========================= contact form submitting ==========

		contactForm.addEventListener("submit",function(e){
			e.preventDefault();
			if(isNameValid && isEmailValid && isMessageValid){
				var thankyouMessage = document.querySelector('.thankyouMessage');
				thankyouMessage.parentNode.classList.toggle('thankyou');
				isNameErrorVisible = false;
				isEmailErrorVisible = false;
				isMessageErrorVisible = false;
				isNameValid = false;
				isEmailValid = false;
				isMessageValid = false;
			} else {
				if (!isNameValid && !isNameErrorVisible){
					nameInput.style.borderColor = "red";
					isNameErrorVisible = true;
					contactForm.parentNode.querySelector(".nameLengthValidation").innerText ="Name cannot have less than 4 characters";
				}
				if (!isEmailValid && !isEmailErrorVisible){
					emailInput.style.borderColor = "red";
					isEmailErrorVisible = true;
					contactForm.parentNode.querySelector(".emailBlankValidation").innerText ="Email cannot be blank";
				}
				if (!isMessageValid && !isMessageErrorVisible){
					messageTextarea.style.borderColor = "red";
					isMessageErrorVisible = true;
					contactForm.parentNode.querySelector(".messageLengthValidation").innerText ="Message cannot have less than 5 characters";
				}
				(isNameErrorVisible || isEmailErrorVisible || isMessageErrorVisible) ? contactForm.style.marginTop = "20px" : contactForm.style.marginTop = "0";

			}
		});
	}


	
	var newMessageButton = document.querySelector(".newMessage");
	newMessageButton.addEventListener("click", function(){

		var thankyouMessage = this.parentNode;
		var contactForm = document.querySelector(".formContainer").getElementsByTagName('form')[0];
		contactForm.reset();
		thankyouMessage.parentNode.classList.toggle('thankyou');
	});


	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click",function(){
		var header = document.querySelector(".pageHeader");
		header.classList.toggle('navOpened');
	});

});