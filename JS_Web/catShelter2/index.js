// TODO: implement server and pages shown logic
// variables, modules and constants
const http = require('http');
const fs = require('fs/promises');
const port = 5555;
const querystring = require('querystring');
const multer = require('multer');
// Define storage settings for Multer
// const storage = multer.diskStorage({
//     destination: './uploads/', // Specify where to store uploaded files
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });


// cats object
// const cats = [
//     {
//       _id: 1,  
//       imageUrl:
//         "https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=0.670xw:1.00xh;0.167xw,0&resize=640:*",
//       name: "Tsunami",
//       breed: "ulichna1",
//       description: "Very cute cat1!",
//     },
//     {
//       _id: 2,  
//       imageUrl:
//         "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
//       name: "Pesho",
//       breed: "ulichna2",
//       description: "Very cute cat2!",
//     },
//     {
//       _id: 3,  
//       imageUrl:
//         "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
//       name: "Dancho",
//       breed: "ulichna3",
//       description: "Very cute cat3!",
//     },
//     {
//       _id: 4,  
//       imageUrl:
//         "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg",
//       name: "Mariika",
//       breed: "ulichna4",
//       description: "Very cute cat4!",
//     },
//   ];
  
// server logic
const server = http.createServer(async (req, res) => {
    const { url, method } = req;
    if (url === '/') {
        const idPattern = /{{_id}}/g;
        const imageUrlPattern = /{{imageUrl}}/g;
        const namePattern = /{{name}}/g;
        const breedPattern = /{{breed}}/g;
        const descriptionPattern = /{{description}}/g;
        const homeHtml = await fs.readFile('./views/home/index.html', 'utf8');
        const catTemplate = await fs.readFile('./views/home/catTemplate.html', 'utf8');
        const catsData = await fs.readFile('./data/cats.json', 'utf8');
        const cats = JSON.parse(catsData);
        const catHtml = cats.map((cat) => catTemplate
        .replace(idPattern, cat._id)
        .replace(imageUrlPattern, cat.imageUrl)
        .replace(namePattern, cat.name)
        .replace(breedPattern, cat.breed)
        .replace(descriptionPattern, cat.description)).join('');
        const homeHtmlTemplate = homeHtml.replace('{{cats}}', catHtml);
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(homeHtmlTemplate);
    } else if (url === '/content/styles/site.css') {
        const siteCss = await fs.readFile('./content/styles/site.css', 'utf8');
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(siteCss);
    } else if (url === '/cats/add-breed') {
        const addCatTemplate = await fs.readFile('./views/addBreed.html', 'utf8');
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(addCatTemplate);
    } else if (url === '/cats/add-cat') {
        if (req.method === 'POST') {
            const catsData = await fs.readFile('./data/cats.json', 'utf8');
            const cats = JSON.parse(catsData);
            // make the post request, see the html file for info about the html that is used
            try {
                let body = '';
                    req.on('data', (chunk) => {
                        body += chunk.toString();
                    });
                    req.on('end', async () => {
                        // create new cat object to be used for the database using post values
                        const formData = querystring.parse(body);
                        const newCat = {
                            _id: cats.length + 1,
                            imageUrl: formData.imageUrl, // Store the filename in the database
                            name: formData.name,
                            breed: formData.breed,
                            description: formData.description,
                        };
                
                        // add the new cats to our database cats.json object
                        cats.push(newCat);
                        await fs.writeFile('./data/cats.json', JSON.stringify(cats, null, 4), { encoding: 'utf8', flag: 'w' });

                        // redirect the user to the home page
                        res.writeHead(302, { Location: '/' });
                        res.end();
                    });
                // upload.single('imageUrl')(req, res, async function (err) {
                //     if (err) {
                //         console.error(err);
                //         res.writeHead(500, { 'Content-Type': 'text/plain' });
                //         res.end('Error uploading the file');
                //         return;
                //     }
                    
                //     let body = '';
                //     req.on('data', (chunk) => {
                //         body += chunk.toString();
                //     });
                //     req.on('end', async () => {
                //         // create new cat object to be used for the database using post values
                //         const formData = querystring.parse(body);
                //         const newCat = {
                //             _id: cats.length + 1,
                //             imageUrl: req.file.filename, // Store the filename in the database
                //             name: formData.name,
                //             breed: formData.breed,
                //             description: formData.description,
                //         };
                
                //         // add the new cats to our database cats.json object
                //         cats.push(newCat);
                //         await fs.writeFile('./data/cats.json', JSON.stringify(cats), { encoding: 'utf8', flag: 'w' });
                //         // redirect the user to the home page
                //         res.writeHead(302, { Location: '/' });
                //         res.end();
                //     });
                // });
            } catch(e) {
                console.error(e);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            }
        
        } else {
            const addCatTemplate = await fs.readFile('./views/addCat.html', 'utf8');
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(addCatTemplate);
        }
    } else if (url === 'edit-cat/:id') {
       
    }

    res.end();
    
  });
  
  server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });