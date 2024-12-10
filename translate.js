function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,es,de,zh-CN',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
    );

    // Check localStorage for a saved language preference
    const savedLang = localStorage.getItem('google_translate_lang');
    if (savedLang) {
        applyTranslation(savedLang);
    }
}

// Function to apply translation using Google Translate
function applyTranslation(languageCode) {
    const iframe = document.querySelector('iframe.goog-te-menu-frame');
    if (iframe) {
        const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
        const langMenu = iframeContent.querySelector(`.goog-te-menu2-item[lang="${languageCode}"]`);
        if (langMenu) {
            langMenu.click();
        }
    }
}

// Event listener to save the selected language
window.addEventListener('load', () => {
    document.body.addEventListener('click', (event) => {
        const iframe = document.querySelector('iframe.goog-te-menu-frame');
        if (iframe) {
            const iframeContent = iframe.contentDocument || iframe.contentWindow.document;
            const langMenuItems = iframeContent.querySelectorAll('.goog-te-menu2-item');
            langMenuItems.forEach((item) => {
                item.addEventListener('click', () => {
                    const langCode = item.getAttribute('lang');
                    localStorage.setItem('google_translate_lang', langCode); // Save language code
                });
            });
        }
    });
});
