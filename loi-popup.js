// LOI Form Popup Script
document.addEventListener('DOMContentLoaded', function() {
    // Find only dedicated LOI buttons by specific classes or IDs
    const loiButtons = document.querySelectorAll('button, a');
    const filteredButtons = Array.from(loiButtons).filter(el => {
        // Only match elements that are explicitly buttons with LOI text
        // Exclude slider elements and other interactive components
        const text = el.textContent.trim().toLowerCase();
        const isSlider = el.closest('.slider-container') || 
                         el.closest('.slider-thumb') || 
                         el.closest('.slider-track') ||
                         el.closest('#size-thumb') ||
                         el.closest('#location-thumb');
        
        // Skip if this is part of a slider or other interactive module
        if (isSlider) return false;
        
        // Only include elements that are explicitly LOI or tier selection buttons
        return (text.includes('sign letter of intent') || 
               text.includes('select premium') || 
               text.includes('select growth') || 
               text.includes('select established') || 
               text.includes('select emerging') || 
               text.includes('select basic')) &&
               !el.closest('.chart-container') &&
               !el.closest('.chart-bar');
    });
    
    // Add click event to only the filtered LOI buttons
    filteredButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'loi-form.html';
        });
    });
});
