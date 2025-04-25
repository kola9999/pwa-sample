// This file contains the main JavaScript logic for the PWA. It registers the service worker, requests notification permissions, and handles displaying notifications.

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    });
}

function requestNotificationPermission() {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            displayNotification('Welcome to the PWA!', 'You will receive notifications from this app.');
        } else {
            console.log('Notification permission denied.');
        }
    });
}

function displayNotification(title, body) {
    const options = {
        body: body,
        icon: 'icon.png', // Replace with your icon path
    };

    new Notification(title, options);
}

// Call the function to request notification permission
requestNotificationPermission();