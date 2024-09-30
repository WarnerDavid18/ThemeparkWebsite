// Import required modules
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Initialize the Express app
const app = express();
const port = 5520;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// Serve static files from the "Public" folder
app.use(express.static(path.join(__dirname, 'public')));   



// Initialize SQLite database
const db = new sqlite3.Database('./DB/theme_park.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected to the SQLite database.');
    }
});

// Start the server,
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
   });

// Route for the homepage
app.get('/', (req, res) => {

    res.render('index', { title: 'Welcome to the Theme Park' });  // Render the index.ejs file
});



    //Route for  the About Page
    app.get('/about', (req, res) => {

     res.render('about', {title: 'About the Theme Park'}); // For the About Page through about.ejs
    });

       //Route for  the Rides page
    app.get('/rides' , (req, res) => { //For the Rides Page
     
        res.render('rides', {title: 'Our Rides'});
    });
    //Route for  the About Page
    app.get('/contact', (req, res) => {
        res.render('contact', {title: 'Contact Us'}); // For the Contact Us Page
          
    

    
 });

