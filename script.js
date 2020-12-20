var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;
	slideArray.push(this);
}

var slide1 = new Slide(
    "Synthwave",
    "Synthwave is a microgenre of electronic music that draws predominantly from 1980s films, video games, and cartoons",
    "public/images/slide1.jpg",
    "https://en.wikipedia.org/wiki/Synthwave",
);
var slide2 = new Slide(
    "Cyberpunk",
    "Cyberpunk is a subgenre of science fiction in a dystopian futuristic setting that tends to focus on a combintaion of low-life and high tech featuring advanced technological and scientific achievements, such as artificial intelligence and cybernetics, juxtaposed with a degree of breakdown or radical change in the social order",
    "public/images/slide2.jpg",
    "https://en.wikipedia.org/wiki/Cyberpunk"
);
var slide3 = new Slide(
    "",
    "",
    "public/images/slide3.jpg",
    ""
);
var slide4 = new Slide(
    "",
    "",
    "public/images/slide4.jpg",
    ""
);



function buildSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='" + slideArray[i].id +
			"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h1 class='titleSlide'>" + slideArray[i].title + "</h1>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("mySlider").innerHTML = myHTML;
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

function buildReverseSlider(){
	var myHTML;
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='r" + slideArray[i].id +
			"' class='singleSlide reverse' style='background-image:url(" + slideArray[i].background + ");'>" +
				"<div class='slideOverlay'>" +
					"<h4>" + slideArray[i].subtitle + "</h4>" +
					"<a class='slider' href='" + slideArray[i].link + "' target='_blank'><span>Open</span></a>" +
				"</div>" +
			"</div>";
	}

	document.getElementById("myReverseSlider").innerHTML = myHTML;
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;
}

buildSlider();
buildReverseSlider();

function prevSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = (slideArray.length - 1);
	} else {
		nextSlideIndex = currentSlideIndex - 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft reverse");

	currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
	var nextSlideIndex;
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		nextSlideIndex = currentSlideIndex + 1;
	}

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
	document.getElementById("rslide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("rslide" + currentSlideIndex).style.left = 0;

	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
	document.getElementById("rslide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft reverse");
	document.getElementById("rslide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight reverse");

	currentSlideIndex = nextSlideIndex;
}