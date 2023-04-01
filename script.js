// Smoothie class
class Smoothie {
	constructor(flavor, size, toppings, quantity) {
		this.flavor = flavor;
		this.size = size;
		this.toppings = toppings;
		this.quantity = quantity;
	}

	// Calculate the price of the smoothie based on the size and toppings
	calculatePrice() {
		let basePrice = 4;
		let sizeFactor = 1;

		if (this.size === 'medium') {
			basePrice = 5;
			sizeFactor = 1.5;
		} else
		if (this.size === 'large') {
			basePrice = 6;
			sizeFactor = 2;
		}

		let toppingCount = this.toppings.length;
		let price = basePrice + (toppingCount * 1.5 * sizeFactor);
		let totalPrice = price * this.quantity;

		return totalPrice;
	}

	// Create a description of the smoothie
	printDescription() {
		let description = `${this.quantity} ${this.size} ${this.flavor} smoothie`;

		if (this.toppings.length > 0) {
			let toppingDescriptions = this.toppings
				.map(topping => `${topping} topping`)
				.join(', ');

			description += ` with ${toppingDescriptions}`;
		}

		return description;
	}
}

// Handle the form submission
const form = document.getElementById('smoothie-form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const flavor = form.elements.flavor.value;
	const size = form.elements.size.value;
	const checkboxes = form.elements.toppings;
	const toppings = [].filter
		.call(checkboxes, checkbox => checkbox.checked)
		.map(checkbox => checkbox.value);
	const quantity = form.elements.quantity.value;

	const smoothie = new Smoothie(flavor, size, toppings, quantity);
	const totalPrice = smoothie.calculatePrice();
	const description = smoothie.printDescription();

	const resultNode = document.getElementById('smoothie-result');
	resultNode.textContent = `You ordered ${description} for a total of $${totalPrice}.`;
});