document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.querySelector('#recipe-form');
    const recipeList = document.querySelector('#recipe-list');

    recipeForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.querySelector('#recipe-name').value;
        const ingredients = document.querySelector('#recipe-ingredients').value;
        const instructions = document.querySelector('#recipe-instructions').value;

        // Create a new recipe element
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `
            <h3>${name}</h3>
            <p><strong>Ingredients:</strong> ${ingredients}</p>
            <p><strong>Instructions:</strong> ${instructions}</p>
            <button class="delete-button">Delete</button>
        `;

        recipeList.appendChild(recipeElement);

        // Clear the form fields
        recipeForm.reset();

        // Add event listener for the delete button
        const deleteButton = recipeElement.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            recipeList.removeChild(recipeElement);
        });
    });
});
