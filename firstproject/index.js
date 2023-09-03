
// My code with almost no help
/*
const express = require('express');
const app = express();
const { readFile } = require('fs').promises;


app.listen(8080, () => {
    console.log("Application started and listening on port 8080");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
    res.send("This is index.html");
});
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/about.html")
    res.send("This is about.html");
});
app.get("/contact-me", (req, res) => {
    res.sendFile(__dirname + "/contact-me.html")
    res.send("This is contact-me.html");
});
app.use( async (req, res) => {
    res.status(404).send(await readFile('./404.html'));
});
*/


//Code with more help

const express = require('express');
const app = express();
const port = 8080;

// Define routes and corresponding HTML files
const routes = {
  '': 'index.html',
  'about': 'about.html',
  'contact-me': 'contact-me.html',
};

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route handler to serve pages based on URL
app.get('/:page', (req, res) => {
  const page = req.params.page;
  const fileName = routes[page] || '404.html';
  const filePath = `${__dirname}/public/${fileName}`;
  
  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else {
      console.log(`Served file: ${filePath}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
