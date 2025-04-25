# Simple PWA Notifications

This project is a simple Progressive Web App (PWA) that demonstrates how to send notifications on Android and Windows.

## Project Structure

```
simple-pwa-notifications
├── index.html        # Main HTML document for the PWA
├── app.js            # Main JavaScript logic for the PWA
├── styles.css        # CSS styles for the PWA
├── manifest.json     # Web app manifest providing metadata
├── service-worker.js  # Service worker for background functionality
└── README.md         # Documentation for the project
```

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd simple-pwa-notifications
   ```

2. **Open the project in your preferred code editor**.

3. **Run a local server**:
   You can use a simple HTTP server to serve the files. For example, you can use `http-server`:
   ```
   npx http-server
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:8080` (or the port specified by your server).

## Usage

- The application will request notification permissions when loaded.
- Once permissions are granted, notifications can be sent and displayed.
- The service worker will handle background tasks and push notifications.

## Notes

- Ensure that you are serving the application over HTTPS or localhost to enable service worker functionality.
- Test the notification feature on both Android and Windows devices for compatibility.