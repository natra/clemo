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
	}
	var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click",function(){
		var header = document.querySelector(".pageHeader");
		header.classList.toggle('navOpened');
	});
});