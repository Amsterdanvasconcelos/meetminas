const _elements = {
	showDate: document.querySelector('[data-copyright="showDate"]'),

	scrollLinks: document.querySelectorAll('[data-link="skroll"]'),
	navbar: document.querySelector('[data-menu="navbar"]'),
	btnMenu: document.querySelector('[data-menu="btn-menu"]'),

	galleryItems: document.querySelectorAll('[data-modal="gallery-item"]'),
	sliderThumbsImage: document.querySelectorAll('[data-modal="thumb-img"]'),
	closeModalBtn: document.querySelector('[data-modal="close-btn"]'),
	modal: document.querySelector('[data-modal="modal"]'),

	slider: document.querySelector('[data-modal="slider"]'),
	sliderImage: document.querySelector('[data-modal="slider-img"]'),
	sliderImageNumber: document.querySelector('[data-modal="img-number"]'),
	sliderImageDescription: document.querySelector('[data-modal="description"]'),
	sliderPrevButton: document.querySelector('[data-modal="button-prev"]'),
	sliderNextButton: document.querySelector('[data-modal="button-next"]'),
}

const _gallery = [
	{
		img: "assets/imgs/photo_0.png",
		description: "Conceição do Mato Dentro"
	},
	{
		img: "assets/imgs/photo_1.png",
		description: "Diamantina"
	},
	{
		img: "assets/imgs/photo_2.png",
		description: "Tiradentes"
	}, 
	{
		img: "assets/imgs/photo_3.png",
		description: "São Lourenço"
	},
	{
		img: "assets/imgs/photo_4.png",
		description: "Serro"
	},
	{
		img: "assets/imgs/photo_5.png",
		description: "São Tomé das Letras"
	},
	{
		img: "assets/imgs/photo_6.png",
		description: "Ipoema"
	},
	{
		img: "assets/imgs/photo_7.png",
		description: "Ouro Preto"
	}
]

let _sliderCounter = 0, _touchStart, _touchEnd;

// date of the footer

const data = new Date()
const year = data.getFullYear()

_elements.showDate.textContent = year + '.'

// navegação

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

// modal 



_elements.closeModalBtn.addEventListener("click", () => _elements.modal.style.display = 'none');

_elements.galleryItems.forEach(item => {
	item.addEventListener('click', event => {
		const id = getImageId(event)
		updateModal(id)
		
		_elements.modal.style.display = 'flex'
	})
})

_elements.sliderThumbsImage.forEach(img => {
	img.addEventListener('click', event => {
		const id = getImageId(event)
		updateModal(id)
	})
})

_elements.sliderPrevButton.addEventListener("click", () => prevImage())

_elements.sliderNextButton.addEventListener("click", () => nextImage())


const getImageId = ({ target }) => {
	const arrFromChildren = Array.from(target.parentNode.children);
	const id = arrFromChildren.indexOf(target)

	_sliderCounter = id

	return id;
}

const updateModal = (imgId) => {
	_elements.sliderImage.src = _gallery[imgId].img
	_elements.sliderImageNumber.textContent = (imgId + 1) + ' / ' + _gallery.length
	_elements.sliderImageDescription.textContent = _gallery[imgId].description

	_elements.sliderThumbsImage.forEach(img => {
		img.classList.remove('c-modal__content-img-thumb--active')
	})

	_elements.sliderThumbsImage[imgId].classList.add('c-modal__content-img-thumb--active')
}

const prevImage = () => {
	if (--_sliderCounter < 0) {
		_sliderCounter = _gallery.length - 1
	}
	updateModal(_sliderCounter)
}

const nextImage = () => {
	if (++_sliderCounter > _gallery.length - 1) {
		_sliderCounter = 0
	}

	updateModal(_sliderCounter)
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

// _elements.slider.addEventListener("", e => {

// });

// _elements.slider.addEventListener("", e => {

// });