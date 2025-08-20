function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.add('active');
    
    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden';
}

function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    popup.classList.remove('active');
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

// Close popup when clicking outside the content
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('popup-overlay')) {
        closePopup(e.target.id);
    }
});
