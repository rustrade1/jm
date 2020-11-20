function sliderMobile() {
    var widthPage = window.innerWidth;
    let slider = document.getElementById('main-id-slider');    
    if (widthPage <= 767) {
   	 	slider.style.display = 'inherit';           
    }
    else {        
  		slider.style.display = 'none';
    }
}

window.onload = function() {
 	sliderMobile();
 	readMore();
};
window.onresize = function() {
	sliderMobile();	
};

function readMore() {
	let button = document.querySelector('.absolute-button');
	let contaner = document.querySelector('.elements-wrapper');
	let buttonHide = document.querySelector('.button_hide');
	contaner.style.height = '170px';
	button.addEventListener('click' , function () {		
		contaner.style.height = '100%';
		button.style.display = 'none';
		buttonHide.textContent = 'Скрыть';
		buttonHide.style.backgroundImage = "url('img/icon-read-more-hide.svg')";		
	});
	buttonHide.addEventListener('click' , function() {
		contaner.style.height = '170px';
		button.style.display = 'inherit';		
		buttonHide.style.backgroundImage = "url('img/icon-read-more-hide.svg')";	
	});
}

