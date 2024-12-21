async function fetchProducts() {
	const productFile = await fetch("./product.json");
	const productData = await productFile.json();
	return productData.products;
}

function productShowcase(product) {
	const productContainer = document.createElement("div");
	productContainer.setAttribute("class", "product-showcontainer");
	productContainer.innerHTML = `                
        <img src="${product.image}"/>                 
        <div class="product-showinfo">
            <div class="product-showdescription">
                <h2>${product.name}</h2>                
                <p><strong>Engine:</strong> ${product.engine}</p>
                <p><strong>Capacity:</strong> ${product.capacity}</p>
                <p><strong>Fuel Consumption:</strong> ${product.fuel_consumption}</p>
                <p><strong>Output:</strong> ${product.output}</p>
                <p><strong>Type:</strong> ${product.type}</p>
                <p><strong>Gross Weight:</strong> ${product.gross_weight}</p>
            </div>
            <div class="product-showaction">
                <button class="quote-button">${product.price} Get a Quote!</button>
            </div>  
        </div>  
    `;
	// Add event listener to the button for redirection
	const button = productContainer.querySelector(".quote-button");
	button.addEventListener("click", () => {
		window.location.href = "form.html"; // Redirect to discovermore.html
	});

	const showcaseElem = document.getElementById("product-show");
	showcaseElem.innerHTML = "";
	showcaseElem.appendChild(productContainer);
	showcaseElem.scrollIntoView();
}

(async () => {
	const products = await fetchProducts();
	const productContainer = document.createElement("div");
	productContainer.setAttribute("class", "product-container");
	const productFragment = document.createDocumentFragment();

	// Initialize showcase
	productShowcase(products[0]);

	products.forEach((product) => {
		const productMain = document.createElement("div");
		productMain.setAttribute("class", "product-show");
		productMain.innerHTML = `
            <div class="product-image">
                <img src="${product.image}"/>
            </div>
            <div class="product-info">
                <h2>${product.name}</h2>
                <h3>${product.price}</h3>
            </div>
            <div style="background-image: linear-gradient(0deg, #11111BFF 0%, #71C4FF00 70%), url('${product.image}'), radial-gradient(93% 75% at 133% 11%, #615f75ff 0%, #f6edc1ff 100%)" class="product-blur"></div>
        `;
		productFragment.appendChild(productMain);
		productMain.addEventListener("click", () => {
			productShowcase(product);
		});
	});
	productContainer.appendChild(productFragment);
	document.getElementById("products").appendChild(productContainer);
})();
