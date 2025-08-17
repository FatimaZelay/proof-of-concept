import express from 'express'
import { Liquid } from 'liquidjs';
 
const app = express()
 
// Statische bestanden
app.use(express.static('public'))
 
// Liquid engine setup
const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('views', './views')
 
 
 
 
// get
app.get('/', async function (request, response) {
  try {
 
    const apiResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products/?fields=*&sort=id');
    const apiResponseJSON = await apiResponse.json();
    
    // Pak de data uit de response
    const productList = apiResponseJSON.data || [];
 
  
    // Render met productList data
    response.render('index.liquid', { productList });
  } catch (error) {
    console.error('Fout bij ophalen producten:', error);
    response.status(500).send('Error bij laden producten');
  }
});
 
app.post('/', async function (request, response) {
  response.redirect(303, '/')
})
 
// Server starten
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Server draait op poort ${app.get('port')}`);
})
