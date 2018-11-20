function silmpleSlide() {


	const slider = document.querySelector(".slider");
	const slide = document.getElementsByClassName("slide");
	
	const arrowLeft = document.querySelector(".arrow-left");
	const arrowRight = document.querySelector(".arrow-right");


	let currentDot;

	let slideWidth = parseInt(getComputedStyle(slider).width);
	let CurrentSlide = 0;

	let toSlide;
	let toMouve;

	let nextSlide;
	let prevSlide;






	arrowRight.addEventListener("click", function () {


		if (CurrentSlide >= slide.length - 1) {
			CurrentSlide = 0;
		} else if (CurrentSlide < 0) {
			CurrentSlide = 0;
		} else {
			CurrentSlide += 1;
		}
		nextSlide = -(slideWidth * CurrentSlide);


		for (let i = 0; i < slide.length; i++) {

			slide[i].style.transform = `translateX(${nextSlide}px)`;

			slide[i].classList.remove("active-slide");
			slide[CurrentSlide].classList.add("active-slide");



			console.log("CurrentSlide " + CurrentSlide);

		}



	});

	arrowLeft.addEventListener("click", function () {



		if (CurrentSlide <= 0) {
			CurrentSlide = slide.length - 1;
		} else {

			CurrentSlide -= 1;
		}
		prevSlide = -(slideWidth * CurrentSlide);


		for (let i = 0; i < slide.length; i++) {

			slide[i].style.transform = `translateX(${prevSlide}px)`;
			slide[i].classList.remove("active-slide");
			slide[CurrentSlide].classList.add("active-slide");



			console.log("CurrentSlide " + CurrentSlide);
		}


	});


}
silmpleSlide();
