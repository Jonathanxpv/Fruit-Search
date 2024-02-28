// Get reference to the input field and suggestions container
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
// Array of fruits for autocomplete suggestions
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to filter fruits based on the input string
function search(str) {
	let results = [];

	// Filter fruits that contain the input string
    results = fruit.filter(fruitName =>
        fruitName.toLowerCase().includes(str.toLowerCase())
    );

	return results;
}
// Event handler for the input field's keyup event
function searchHandler(e) {
	const inputVal = e.target.value;
	// Call the search function to get matching results
    const results = search(inputVal);
	// Show the suggestions based on the input value
    showSuggestions(results, inputVal);

	if (inputVal !== '') {
        showSuggestions(results, inputVal);
    } else {
        suggestions.style.display = 'none';
    }
}


// Function to display suggestions in the suggestions container
function showSuggestions(results) {
    suggestions.innerHTML = '';
	// Create list items for each suggestion and append them to the suggestions container
	results.forEach(result => {
        const suggestionElement = document.createElement('li');
        suggestionElement.textContent = result;
        suggestions.appendChild(suggestionElement);
    });
	// Show/hide suggestions only if there are any
    suggestions.style.display = results.length > 0 ? 'block' : 'none';
}
// Function to handle selection of a suggestion
function useSuggestion(e) {
	if (e.target.tagName === 'li') {
        input.value = e.target.textContent;
        suggestions.style.display = 'none';
    }
}
// Set the input value to the selected suggestion and hide the suggestions container
input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);