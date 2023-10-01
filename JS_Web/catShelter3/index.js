// TODO: Create server, implement routing, http requests
// Variables, modules, and constants
const http = require('http');
const port = 5050; // port is a variable so it can be changed later
const fs = require('fs/promises');
const querystring = require('querystring');
const formidable = require('formidable');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './data/images')
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage});

// Creation of server and requests
const server = http.createServer(async (request, response) => {
    const { url, method } = request;
    // TODO: display home page
    // We need to read json file with cats using fs module
    // We need to change the template for each cat and put each cat in the html for the home page
    if (url === '/') {
        const idRegex = /{{_id}}/g
        const imageUrlRegex = /{{imageUrl}}/g;
        const namePattern = /{{name}}/g;
        const breedPattern = /{{breed}}/g;
        const descriptionPattern = /{{description}}/g;
        const homeTemplate = await fs.readFile('./views/home/index.html', 'utf8');
        const catTemplate = await fs.readFile('./views/home/catTemplate.html', 'utf8');
        const catData = await fs.readFile('./data/cats.json', 'utf8');
        const catsParsed = JSON.parse(catData);
        const catHtml = catsParsed.map((cat) =>
            catTemplate
                .replace(idRegex, cat._id)
                .replace(imageUrlRegex, cat.imageUrl)
                .replace(namePattern, cat.name)
                .replace(breedPattern, cat.breed)
                .replace(descriptionPattern, cat.description)
        ).join('');
        const newHomePageTemplate = homeTemplate.replace('{{cats}}', catHtml)
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(newHomePageTemplate);
        response.end();
    } else if (url === '/content/styles/site.css') {
        // TODO: Display css
        const siteCss = await fs.readFile('./content/styles/site.css', 'utf8');
        response.writeHead(200, { "Content-Type": "text/css" });
        response.write(siteCss);
        response.end();
    } else if (url === '/cats/add-breed' && request.method === 'GET') {
        const addBreedTemplate = await fs.readFile('./views/addBreed.html', 'utf8');
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(addBreedTemplate);
        response.end();
    } else if (url === '/cats/add-breed' && request.method === 'POST') {
        upload.none()(request, response, async (err) => {
            if (err) {
                console.error(err);
                response.writeHead(400, { "Content-Type": "text/plain" });
                response.write('There was an error');
                response.end();
                return;
            }

            try {
                const formData = request.body;
                const newBreed = {
                    breed: formData.breed
                };
                let currentBreeds = await fs.readFile('./data/breeds.json', 'utf8');
                let currentBreedsArray = [];

                if (currentBreeds) {
                    currentBreedsArray = JSON.parse(currentBreeds);
                }

                currentBreedsArray.push(newBreed);
                // Write the breeds to the file, overwriting the file
                await fs.writeFile('./data/breeds.json', JSON.stringify(currentBreedsArray, null, 4), { encoding: 'utf8', flag: 'w' });
                // Redirect the user to the home page
                response.writeHead(302, { Location: '/' });
                response.end();
            } catch (error) {
                console.error(error.message);
                response.writeHead(400, { "Content-Type": "text/plain" });
                response.write(error.message);
                response.end();
            }
        });
    } else if (url === '/cats/add-cat' && request.method === 'GET') {
        // TODO : implement add cat page
        // first templates
        const addCatTemplate = await fs.readFile('./views/addCat.html', 'utf8');
        const breedTemplate = await fs.readFile('./views/home/breedTemplate.html', 'utf8');
        console.log('We have gotten the files for add cat and breed templates')
        // regex for the template
        const breedRegex = /{{breed}}/g;
        // create the actual new template
        const breedsJson = await fs.readFile('./data/breeds.json', 'utf8');
        const breedsArray = JSON.parse(breedsJson);
        const breedsDataForHtml = breedsArray.map((catBreed) => 
            breedTemplate
            .replace(breedRegex, catBreed.breed)).join('');
        const newAddCatHtmlTemplate = addCatTemplate.replace('{{breeds}}', breedsDataForHtml);
        try {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(newAddCatHtmlTemplate);
            response.end();
        } catch(error) {
            console.log(error.message);
            response.writeHead(400, {"Content-Type": "text/html"});
            response.write(error.message);
            response.end();
        }
    } else if (url === '/cats/add-cat' && request.method === 'POST') {
        // TODO: implement adding a new cat to the cats.json file and show all cats including the new one
        console.log('We need to upload');

        const form = new formidable.IncomingForm();
        form.parse(request, async (error, fields, files) => {
            console.log('We are uploading');
            
            if (error) {
                console.log(error.message);
                response.writeHead(400, { "Content-Type": "text/plain" });
                response.write(error.message);
                response.end();
                return;
            }

            try {
                const { name, breed, description } = fields;
                console.log('Files object:', files);

                // Access the uploaded file's name using originalFilename
                const uploadedFileName = files.image[0].newFilename + '.jpg';

                // Actual request and response logic
                console.log('Uploaded file name:', uploadedFileName);
                // Actual request and response logic
                console.log(uploadedFileName);
                const newCat = {
                    _id: name + Date.now(),
                    imageUrl: `./data/images/${uploadedFileName}`,
                    name: name[0],             // Name as a simple string
                    breed: breed[0],           // Breed as a simple string
                    description: description[0] // Description as a simple string
                };

                // Read the existing cats from the JSON file
                const catsJson = await fs.readFile('./data/cats.json', 'utf8');
                const catsArray = JSON.parse(catsJson);

                // Add the new cat to the array
                catsArray.push(newCat);

                // Write the updated array back to the JSON file
                await fs.writeFile('./data/cats.json', JSON.stringify(catsArray, null, 4), 'utf8');

                // Redirect the user to the home page
                response.writeHead(302, { Location: '/' });
                response.end();
            } catch (e) {
                console.log(e);
                response.writeHead(400, { "Content-Type": "text/plain" });
                response.write(e.message);
                response.end();
            }
        });

    } else if (url.includes('delete-cat') && method === 'GET') {
        // Implement deletion of cat
        // read the needed files and create the needed variables
        const catsJson = await fs.readFile('./data/cats.json', 'utf8');
        const catsArray = JSON.parse(catsJson);
        console.log(`Cats array : ${catsArray}`)
        console.log(`url is : ${url}`);
        const hrefParts = url.split('/');
        console.log(`Href parts : ${hrefParts}`);
        const id = hrefParts[hrefParts.length - 1];
        console.log(`current cat id : ${id}`);
        const index = catsArray.findIndex(cat => cat._id === id);
        console.log(`index : ${index}`)
        try {  
            if (index !== -1) {
                catsArray.splice(index, 1);
                await fs.writeFile('./data/cats.json', JSON.stringify(catsArray, null, 4), 'utf8');
                // Redirect the user to the home page
                response.writeHead(302, { Location: '/' });
                response.end();

            } else {
                throw new Error('Cat does not exist in database!!!');
            }
        } catch(e) {
            console.log(e);
            response.writeHead(400, {"Content-Type": "text/plain"});
            response.write(e.message);
            response.end();
        }


    } else if (url.includes('edit-cat') && method === 'GET') {
        // logic for pressing edit cat button
        const hrefParts = url.split('/');
        const currentCatId = hrefParts[hrefParts.length - 1];
        console.log(`current cat id for editing is ${currentCatId}`);
        const editCatHtmlBuffer = await fs.readFile('./views/editCat.html');
        const editCatHtml = editCatHtmlBuffer.toString();
        const editCatTemplateBuffer = await fs.readFile('./views/home/editCatTemplate.html');
        const editCatTemplate = editCatTemplateBuffer.toString(); // Convert to string
        const catsJson = await fs.readFile('./data/cats.json');
        const catsArray = JSON.parse(catsJson);
        const index = catsArray.findIndex(cat => cat._id === currentCatId);
        console.log(`current cat index for editing is ${index}`);
        const currentCatForEditing = catsArray[index];
        const breedTemplate = await fs.readFile('./views/home/breedTemplate.html', 'utf8');
        const breedsJson = await fs.readFile('./data/breeds.json', 'utf8');
        const breedsArray = JSON.parse(breedsJson);
        const breedRegex = /{{breed}}/g
        const idRegex = /{{_id}}/g
        const nameRegex = /{{name}}/g
        const descriptionRegex = /{{description}}/g
        const breedsDataForHtml = breedsArray.map((catBreed) => 
            breedTemplate
            .replace(breedRegex, catBreed.breed)).join('');
        const newCatEditHtml = editCatTemplate
        .replace(idRegex, currentCatId)
        .replace(nameRegex, currentCatForEditing.name)
        .replace(descriptionRegex, currentCatForEditing.description)
        .replace('{{breeds}}', breedsDataForHtml);
        editCatHtml2 = editCatHtml.replace('{{form}}', newCatEditHtml);

        try {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(editCatHtml2);
            response.end();
        } catch(e) {
            console.log(e);
            response.writeHead(400, {"Content-Type": "text/html"});
            response.write(e.message);
            response.end();
        }
    }
});

// Server listen to port
server.listen(port);
console.log(`Server is listening on port ${port}`);
