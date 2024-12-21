// Existing mousemove effect for service section
document.querySelectorAll(".service-section").forEach((section) => {
	section.addEventListener("mousemove", (e) => {
		const rect = section.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		section.style.backgroundImage = `radial-gradient(93% 75% at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, #615f75ff 0%, #f6edc1ff 100%)`;
	});
});

// Flip card functionality
document.querySelectorAll(".flip-card").forEach((card) => {
	let timeout;
	card.addEventListener("click", function () {
		const innerCard = card.querySelector(".flip-card-inner");
		innerCard.style.transform = innerCard.style.transform === "rotateY(180deg)" ? "rotateY(0)" : "rotateY(180deg)";
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			innerCard.style.transform = innerCard.style.transform === "rotateY(180deg)" ? "rotateY(0)" : "rotateY(180deg)";
		}, 2000);
	});
});

// Slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

// Show the current slide
function showSlide(index) {
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[index].style.display = "block";
}

// Change slide manually
function changeSlide(direction) {
	slideIndex += direction;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	} else if (slideIndex < 0) {
		slideIndex = slides.length - 1;
	}
	showSlide(slideIndex);
}

// Auto-play slides
function autoPlaySlides() {
	slideIndex++;
	if (slideIndex >= slides.length) {
		slideIndex = 0;
	}
	showSlide(slideIndex);
	setTimeout(autoPlaySlides, 3000); // Change slide every 3 seconds
}

// Initialize slideshow
showSlide(slideIndex);
autoPlaySlides();
