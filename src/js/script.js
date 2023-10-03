// date of the footer
const showDate = document.querySelector('[data-copyright="showDate"]')
const data = new Date()
const year = data.getFullYear()

showDate.textContent = year + '.'

//modal 

const _gallery = [
	{
		img: "assets/photo_0.png",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "assets/photo_1.png",
		description: "Diamantina"
	},
	{
		img: "assets/photo_2.png",
		description: "Tiradentes"
	},
	{
		img: "assets/photo_3.png",
		description: "São Lourenço"
	},
	{
		img: "assets/photo_4.png",
		description: "Serro"
	},
	{
		img: "assets/photo_5.png",
		description: "São Tomé das Letras"
	},
	{
		img: "assets/photo_6.png",
		description: "Ipoema"
	},
	{
		img: "assets/photo_7.png",
		description: "Ouro Preto"
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll('[data-link="skroll"]'),
	navbar: document.querySelector('[data-menu="navbar"]'),
	btnMenu: document.querySelector('[data-menu="btn-menu"]'),

	galleryItems: document.querySelectorAll(".galeria-item"),
	sliderThumbsImage: document.querySelectorAll(".slider-thumbs__img"),
	closeModalBtn: document.querySelector(".modal__close"),
	modal: document.querySelector(".modal"),

	slider: document.querySelector(".slider"),
	sliderImage: document.querySelector(".slider-image__img"),
	sliderImageNumber: document.querySelector(".slider-image__number"),
	sliderImageDescription: document.querySelector(".slider-image-description"),
	sliderPrevButton: document.querySelector(".slider-buttons__btn-prev"),
	sliderNextButton: document.querySelector(".slider-buttons__btn-next"),
}

let _sliderCounter = 0, _touchStart, _touchEnd;

_elements.scrollLinks.forEach(link => {
	link.addEventListener('click', event => {
		const id = link.getAttribute('href')
		const element = document.querySelector(id)
		const position = element.offsetTop - 72

		// Fecha a navbar-mobile após o click
		_elements.navbar.classList.remove('c-navbar--show-links')
		
		window.scrollTo({
			top: position,
			behavior: 'smooth'
		})

		event.preventDefault()
	})
});

_elements.btnMenu.addEventListener("click", () => {
	_elements.navbar.classList.toggle('c-navbar--show-links')
});

_elements.galleryItems.forEach(item => {

});

_elements.sliderThumbsImage.forEach(img => {

});

_elements.closeModalBtn.addEventListener("click", () => {

});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {

}

const updateModal = (imgId) => {

}

const nextImage = () => {

}

const prevImage = () => {

}

/**************************************************************************/
/* As linhas de código abaixo correspondem a um capítulo e um vídeo bônus 
/* desse projeto. Neste capítulo/vídeo é ensinado como fazer o slider alterar
/* a imagem apenas arrastando o dedo na tela. 
/*
/* Caso deseje adquirir essa parte do projeto acompanhado do código fonte 
/* completo + código fonte comentado + layout do projeto no Figma, 
/* acesse o link abaixo:
/*
/* https://inkasadev.alumy.com
/**************************************************************************/

_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});