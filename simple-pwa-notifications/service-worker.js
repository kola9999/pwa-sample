self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/styles.css',
                '/manifest.json',
            ]);
        })
    );
});

self.addEventListener('push', (event) => {
    const options = {
        body: event.data ? event.data.text() : 'No payload',
        icon: 'icon.png',
        badge: 'badge.png'
    };
    event.waitUntil(
        self.registration.showNotification('Notification Title', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://yourwebsite.com')
    );
});