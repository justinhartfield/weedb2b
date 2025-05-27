// Typeform integration script
document.addEventListener('DOMContentLoaded', function() {
    // Load Typeform script dynamically to ensure it's properly initialized
    function loadTypeformScript() {
        return new Promise((resolve, reject) => {
            if (window.tf) {
                // Script already loaded
                resolve();
                return;
            }
            
            const script = document.createElement('script');
            script.src = 'https://embed.typeform.com/next/embed.js';
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
    
    // Initialize all LOI buttons
    function initializeLoiButtons() {
        // Find all buttons that should trigger the Typeform
        const loiButtons = document.querySelectorAll('button');
        
        loiButtons.forEach(button => {
            // Check if button text contains "Sign Letter of Intent" or similar
            if (button.textContent.trim().toLowerCase().includes('sign letter') || 
                button.textContent.trim().toLowerCase().includes('loi') ||
                button.textContent.trim().toLowerCase().includes('intent')) {
                
                // Remove any existing click handlers
                button.replaceWith(button.cloneNode(true));
                
                // Get the fresh reference
                const newButton = document.querySelector(`button:contains("${button.textContent.trim()}")`);
                if (newButton) {
                    newButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Check if Typeform is loaded
                        if (window.tf) {
                            // Open the Typeform popup
                            window.tf.createPopup('01JW8PTP7VZ09CYQXTMDB7G956', {
                                opacity: 100,
                                buttonText: 'Sign Letter of Intent'
                            }).open();
                        } else {
                            console.error('Typeform script not loaded');
                            // Fallback - open Typeform in new tab
                            window.open('https://form.typeform.com/to/01JW8PTP7VZ09CYQXTMDB7G956', '_blank');
                        }
                    });
                }
            }
        });
    }
    
    // Initialize direct Typeform buttons
    function initializeDirectTypeformButtons() {
        // Create a direct link to open Typeform
        const loiButtons = document.querySelectorAll('button');
        
        loiButtons.forEach(button => {
            // Check if button text contains "Sign Letter of Intent" or similar
            if (button.textContent.trim().toLowerCase().includes('sign letter') || 
                button.textContent.trim().toLowerCase().includes('loi') ||
                button.textContent.trim().toLowerCase().includes('intent')) {
                
                // Replace button with a link styled as a button
                const buttonParent = button.parentNode;
                const buttonClass = button.getAttribute('class');
                const buttonText = button.textContent;
                
                const linkButton = document.createElement('a');
                linkButton.href = 'https://form.typeform.com/to/01JW8PTP7VZ09CYQXTMDB7G956';
                linkButton.target = '_blank';
                linkButton.rel = 'noopener noreferrer';
                linkButton.className = buttonClass;
                linkButton.textContent = buttonText;
                linkButton.style.display = 'inline-block';
                linkButton.style.textDecoration = 'none';
                
                buttonParent.replaceChild(linkButton, button);
            }
        });
    }
    
    // Load Typeform script and initialize buttons
    loadTypeformScript()
        .then(() => {
            console.log('Typeform script loaded successfully');
            // Wait a moment for Typeform to initialize
            setTimeout(() => {
                initializeLoiButtons();
            }, 500);
        })
        .catch(error => {
            console.error('Failed to load Typeform script:', error);
            // Fallback to direct links
            initializeDirectTypeformButtons();
        });
});
