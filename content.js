/**
 * FocusTube - Distraction-Free YouTube Content Script
 * This script applies a class to the body to activate CSS rules 
 * that hide distracting YouTube elements.
 */

// Function to apply the CSS class. It only adds the class if it's missing.
function applyFocusModeClass() {
    const body = document.body;
    
    // Check if the class is already active to prevent redundant additions
    if (!body.classList.contains('focus-mode-active')) {
        // This is the core action that enables all your hiding CSS rules (from styles.css).
        body.classList.add('focus-mode-active');
    }
}

// 1. Initial run: Apply the class immediately when the script first loads.
// A slight delay helps ensure the main body element is fully ready.
setTimeout(applyFocusModeClass, 100); 

// 2. Continuous observation: Use a MutationObserver to handle navigation and dynamic loading (SPA behavior).

const observerCallback = (mutationsList, observer) => {
    // When content changes (e.g., recommended videos load, navigation happens),
    // we simply re-apply the class. The function handles the "no-redundancy" check.
    applyFocusModeClass();
};

// Configuration for the observer: watch for child elements being added/removed, and across the entire DOM tree
const config = { childList: true, subtree: true };

// Start observing the main document body for DOM changes
const observer = new MutationObserver(observerCallback);
observer.observe(document.body, config);

// 3. YouTube-specific Event Listener (Highly Recommended)
// 'yt-navigate-finish' fires when internal YouTube navigation is complete, offering a precise trigger.
window.addEventListener('yt-navigate-finish', applyFocusModeClass);
