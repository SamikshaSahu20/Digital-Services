const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, and images) from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => res.sendFile('index.html', { root: __dirname + '/public' }));
app.get('/services', (req, res) => res.send('Services Page'));
app.get('/about', (req, res) => res.send('About Us Page'));
app.get('/contact', (req, res) => res.send('Contact Page'));
app.get('/consultation', (req, res) => res.send('Free Consultation Page'));
app.get('/get-started', (req, res) => res.send('Get Started Page'));
app.get('/privacy', (req, res) => res.send('Privacy Policy Page'));
app.get('/terms', (req, res) => res.send('Terms of Service Page'));

// Start the server
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
document.addEventListener('DOMContentLoaded', function() {
      document.querySelectorAll('.dropdown a').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
          event.preventDefault();

          // Get the target section ID from the href attribute
          var targetId = this.getAttribute('href').substring(1);
          var targetSection = document.getElementById(targetId);

          // Scroll to the target section
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    });
document.getElementById('consultationButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevents the default link behavior
        window.location.href = this.getAttribute('href'); // Manually navigate to the specified URL
    });