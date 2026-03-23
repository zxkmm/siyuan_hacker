(function() {
    const icons = {
        'iconMin': 'M6 11 L16 21 L26 11',
        'iconMax': 'M6 21 L16 11 L26 21',
        'iconRestore': 'M16 6 L26 16 L16 26 L6 16 Z',
        'iconClose': 'M7 7 L25 25 M25 7 L7 25'
    };

    const patchIcons = () => {
        const svgContainer = document.getElementById('svg') || 
                             document.querySelector('body > svg:first-child');
        if (!svgContainer) return;

        Object.entries(icons).forEach(([id, path]) => {
            let symbol = document.getElementById(id);
            const pathHtml = `<path d="${path}" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>`;
            
            if (symbol) {
                // If symbol exists, update its content and viewBox
                if (symbol.getAttribute('viewBox') !== '0 0 32 32' || !symbol.innerHTML.includes(path)) {
                    symbol.setAttribute('viewBox', '0 0 32 32');
                    symbol.innerHTML = pathHtml;
                }
            } else {
                // If symbol doesn't exist, create it as a child of the container
                const newSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'symbol');
                newSymbol.id = id;
                newSymbol.setAttribute('viewBox', '0 0 32 32');
                newSymbol.innerHTML = pathHtml;
                svgContainer.appendChild(newSymbol);
            }
        });
    };

    // Initial patch
    patchIcons();

    // Siyuan might re-inject or clear the SVG container on some events (like theme change or reload)
    const observer = new MutationObserver(() => {
        patchIcons();
    });

    // Observe body for child changes (to catch the SVG container being added/replaced)
    observer.observe(document.body, { childList: true, subtree: false });
    
    // Also observe the SVG container itself if it exists
    const svgContainer = document.getElementById('svg') || 
                         document.querySelector('body > svg:first-child');
    if (svgContainer) {
        observer.observe(svgContainer, { childList: true, subtree: true });
    }
})();
