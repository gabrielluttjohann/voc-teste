// Menu Hamburguer
function toggleMenu() {
	var fullscreenMenu = document.getElementById("fullscreenMenu");
	fullscreenMenu.classList.toggle("hidden");
}

// Fechar o menu quando clicar fora dele
window.addEventListener("click", function (event) {
	var fullscreenMenu = document.getElementById("fullscreenMenu");
	var menuButton = document.getElementById("menuButton");

	// Verifica se o clique foi fora do menu e do botão do menu
	if (
		!fullscreenMenu.contains(event.target) &&
		!menuButton.contains(event.target)
	) {
		fullscreenMenu.classList.add("hidden");
	}
});

// BUTTONS LEARN MORE
document.querySelectorAll(".toggleButton").forEach(function (button) {
	button.addEventListener("click", function () {
		var card = button.closest(".card");
		var cardText = card.querySelector(".cardText");

		if (cardText.classList.contains("hidden")) {
			cardText.classList.remove("hidden");
			button.textContent = "Mostrar Menos";
		} else {
			cardText.classList.add("hidden");
			button.textContent = "Saiba Mais";
		}
	});
});

//  RECUPERATION
document.querySelectorAll(".saiba-mais-btn").forEach((button) => {
	button.addEventListener("click", function () {
		let content = this.nextElementSibling;
		content.classList.toggle("hidden");
	});
});

// LAST TEXT
document.getElementById("toggleButton").addEventListener("click", function () {
	var moreText = document.getElementById("moreText");
	if (moreText.classList.contains("hidden")) {
		moreText.classList.remove("hidden");
		this.textContent = "Ocultar"; // Opcional: Mudar o texto do botão para "Ocultar"
	} else {
		moreText.classList.add("hidden");
		this.textContent = "Saiba Mais"; // Opcional: Mudar de volta para "Saiba Mais"
	}
});
