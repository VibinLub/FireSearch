// Object with translations for different languages
const translations = {
    'nl': {
        searchPlaceholder: "Zoek op Google...",
        searchButtonText: "Zoeken"
    },
    'be': {
        headerText: "Welkom bij FireSearch",
        welcomeMessage: "Zoek snel en eenvoudig met onze zoekmachine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Zoek op Google...",
        searchButtonText: "Zoeken"
    },
    'en-us': {
        headerText: "Welcome to FireSearch",
        welcomeMessage: "Search quickly and easily with our search engine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Search On Google...",
        searchButtonText: "Search"
    },
    'en-uk': {
        headerText: "Welcome to FireSearch",
        welcomeMessage: "Search quickly and easily with our search engine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Search On Google...",
        searchButtonText: "Search"
    },
    'en-au': {
        headerText: "Welcome to FireSearch",
        welcomeMessage: "Search quickly and easily with our search engine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Search On Google...",
        searchButtonText: "Search"
    },
    'fr': {
        headerText: "Bienvenue chez FireSearch",
        welcomeMessage: "Recherchez rapidement et facilement avec notre moteur de recherche!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Recherchez sur Google...",
        searchButtonText: "Recherche"
    },
    'de-de': {
        headerText: "Willkommen bei FireSearch",
        welcomeMessage: "Suchen Sie schnell und einfach mit unserer Suchmaschine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Suchen bei Google...",
        searchButtonText: "Suchen"
    },
    'de-at': {
        headerText: "Willkommen bei FireSearch",
        welcomeMessage: "Suchen Sie schnell und einfach mit unserer Suchmaschine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Suchen bei Google...",
        searchButtonText: "Suchen"
    },
    'de-ch': {
        headerText: "Willkommen bei FireSearch",
        welcomeMessage: "Suchen Sie schnell und einfach mit unserer Suchmaschine!",
        footerText: "&copy; Lub Developers",
        searchPlaceholder: "Suchen bei Google...",
        searchButtonText: "Suchen"
    }
};

// Default language
let currentLanguage = 'en-us';

// Function to update the page text based on the selected language
function updateLanguage(language) {
    const translation = translations[language];
    document.getElementById('searchBar').placeholder = translation.searchPlaceholder;
    document.getElementById('searchButton').textContent = translation.searchButtonText;
}

// Show or hide the dropdown menu
const languageButton = document.getElementById('activeLanguage');
const dropdown = document.getElementById('languageDropdown');

languageButton.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

// Change the language when a new language is selected
const languageOptions = document.querySelectorAll('.dropdown-item');

languageOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const selectedLanguage = e.currentTarget.dataset.lang;
        currentLanguage = selectedLanguage;

        // Update the flag and language in the button
        const flagClass = e.currentTarget.querySelector('.flag-icon').className;
        document.getElementById('currentFlag').className = flagClass;

        const languageText = e.currentTarget.textContent.trim();
        document.getElementById('currentLanguage').textContent = languageText;

        // Update the page text based on the selected language
        updateLanguage(selectedLanguage);

        // Hide the dropdown
        dropdown.classList.remove('active');
    });
});

// Update the page text on page load
updateLanguage(currentLanguage);

