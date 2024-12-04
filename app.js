import { translations } from './translations.js';

// Checks if DOM is already loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageSelector);
} else {
    initializeLanguageSelector();
}

/**
 * Initializes language selection dropdown menu. Listens for changes in language selection. 
 * Sets default to English.
 */
function initializeLanguageSelector() {
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', function(event) {
            updateLanguage(event.target.value);
        });
        
		// Sets initial language to English.
		updateLanguage('en');
    } else {
        console.error('Language selector not found');
    }
}

/**
 * Translates site content into selected language.
 * @param lang - Language selected by user.
 */
function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        
		// Updates site content.
		if (translations[lang][key]) {
            element.innerText = translations[lang][key];
		}
		
		// Updates the text on the form's submit button.
		if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.value = translations[lang][key];
		}
    });
}