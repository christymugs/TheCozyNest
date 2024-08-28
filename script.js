function loadSubBoards() {
    // Placeholder for sub-board loading logic
    // Clear previous sub-boards
    const subBoardsContainer = document.querySelector('.sub-boards');
    subBoardsContainer.innerHTML = '';

    // Example sub-boards for the kitchen category
    if (document.getElementById('subBoardTitle').innerText === 'Kitchen Categories') {
        addSubBoard(subBoardsContainer, 'kitchen-appliances', 'Kitchen Appliances');
        addSubBoard(subBoardsContainer, 'kitchen-organization', 'Kitchen Organization');
        addSubBoard(subBoardsContainer, 'kitchen-decor', 'Kitchen Decor');
    } else if (document.getElementById('subBoardTitle').innerText === 'Living Room Categories') {
        addSubBoard(subBoardsContainer, 'living-room-furniture', 'Living Room Furniture');
        addSubBoard(subBoardsContainer, 'living-room-decor', 'Living Room Decor');
        addSubBoard(subBoardsContainer, 'living-room-lighting', 'Living Room Lighting');
    }
    // Add more sub-boards as needed
}

function addSubBoard(container, boardName, boardTitle) {
    const subBoardDiv = document.createElement('div');
    subBoardDiv.className = 'sub-board';
    subBoardDiv.onclick = () => openBoard(boardName);

    subBoardDiv.innerHTML = `
        <img src="./assets/${boardName}-header.jpg" alt="${boardTitle}">
        <p>${boardTitle}</p>
    `;
    container.appendChild(subBoardDiv);
}

function openBoard(boardName) {
    if (boardName === 'kitchen') {
        // Hide boards section and show sub-boards section
        document.querySelector('.boards-section').style.display = 'none';
        document.querySelector('#subBoardSection').style.display = 'block';

        // Update the sub-board title and load sub-boards
        document.getElementById('subBoardTitle').innerText = 'Kitchen Categories';
        loadSubBoards();
    } else if (boardName === 'living-room') {
        // Hide boards section and show sub-boards section
        document.querySelector('.boards-section').style.display = 'none';
        document.querySelector('#subBoardSection').style.display = 'block';

        // Update the sub-board title and load sub-boards
        document.getElementById('subBoardTitle').innerText = 'Living Room Categories';
        loadSubBoards();
    } else {
        // Hide boards section and show products section
        document.querySelector('.boards-section').style.display = 'none';
        document.querySelector('#productSection').style.display = 'block';

        // Update the board title
        document.getElementById('boardTitle').innerText = `Products in ${boardName.replace('-', ' ')}`;

        // Load products for the selected board
        loadProducts(boardName);
    }
}

function loadProducts(boardName) {
    // Clear previous products
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    // Load products dynamically based on boardName
    if (boardName === 'kitchen-appliances') {
        addProduct(productsContainer, './assets/kitchen/kitchen1.jpg', '2 Slice Touchscreen Toaster by Drew Barrymore: Sleek and Modern in White Icing', 'Elevate your breakfast routine with the 2 Slice Touchscreen Toaster by Drew Barrymore. This sleek white icing toaster features a modern touchscreen interface for easy control and precise toasting. Its elegant design adds a stylish touch to any kitchen, while the intuitive controls make it simple to achieve your perfect toast every time. Ideal for busy mornings or relaxed brunches, this toaster combines functionality with a chic, contemporary look, making it a standout addition to your countertop.', 'https://amzn.to/4e0KgWK');
        addProduct(productsContainer, './assets/kitchen/kitchen2.jpg', 'Drew Barrymore Electric Can Opener: Effortless Convenience', 'Make kitchen tasks easier with the Drew Barrymore Electric Can Opener! Featuring a sleek design in White Icing, this electric can opener is not only stylish but also highly functional. The stainless steel blade ensures smooth and precise cuts, while the auto-turn feature offers hands-free operation, making it perfect for quick and easy meal prep. Elevate your kitchen with this chic and reliable tool, ideal for anyone looking to add a touch of elegance and efficiency to their cooking routine.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/kitchen3.jpg', 'Drew Barrymore Air Fryer: The Ultimate Kitchen Upgrade', 'Transform your cooking with the Drew Barrymore Air Fryer! Designed to bring convenience and healthy cooking to your kitchen, this sleek air fryer offers quick, crispy results with less oil. Perfect for preparing everything from crispy fries to roasted veggies, it combines style with functionality. The intuitive controls and spacious basket make it easy to cook your favorite dishes with minimal fuss. Upgrade your kitchen and enjoy delicious, guilt-free meals with this must-have appliance!', 'https://amzn.to/3XwkFQt');
        addProduct(productsContainer, './assets/kitchen/kitchen4.jpg', 'High-Speed Blender', 'Perfect for making smoothies and sauces.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/kitchen5.jpg', 'High-Speed Blender', 'Perfect for making smoothies and sauces.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/kitchen6.jpg', 'High-Speed Blender', 'Perfect for making smoothies and sauces.', 'https://amzn.to/4dX7kG0');
        // Add more products
    } else if (boardName === 'kitchen-organization') {
        addProduct(productsContainer, './assets/kitchen/organization1.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization2.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization3.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization4.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization5.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization6.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization7.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization8.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization9.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/organization10.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        // Add more products
    } else if (boardName === 'kitchen-decor') {
        addProduct(productsContainer, './assets/kitchen/decor1.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor2.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor3.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor4.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor5.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor6.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor7.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor8.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor9.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor10.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor11.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor12.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor13.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');

        // Add more products
    } else if (boardName === 'living-room-decor') {
        addProduct(productsContainer, './assets/kitchen/decor1.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor2.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor3.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor4.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor5.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor6.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor7.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor8.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor9.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor10.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor11.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor12.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');
        addProduct(productsContainer, './assets/kitchen/decor13.jpg', 'Stainless Steel Utensil Set', 'A complete set of kitchen utensils.', 'https://amzn.to/4dX7kG0');

        // Add more products
    }
    // Add more products for other boards as needed
}

function addProduct(container, imgSrc, title, description, link) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.onclick = () => openModal(title, imgSrc, description, link);

    productDiv.innerHTML = `
        <img src="${imgSrc}" alt="${title}">
        <p>${title}</p>
    `;
    container.appendChild(productDiv);
}

function openModal(title, imgSrc, description, link) {
    // Get modal element
    const modal = document.getElementById('productModal');

    // Set modal content
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('buyNowButton').onclick = function () {
        window.location.href = link;
    };

    // Display the modal
    modal.style.display = 'block';
}

function closeModal() {
    // Hide the modal
    document.getElementById('productModal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
