
// La URL de la API es https://restcountries.com/v3/all
const ENDPOINT = 'https://restcountries.com/v3/all';

const countriesList = document.getElementById('countries-list');

/**aplicación que utiliza la API de REST Countries para 
 * obtener información sobre países 
 * utiliza funciones asíncronas para manejar las llamadas a la API
 * Al cargar el DOM, la aplicación tiene que llamar una función 
 * que realiza una solicitud a la API para obtener información 
 * sobre todos los países. Son 250, tarda un poco en renderizar.*/
async function getDataAPI () {
    try {
      const response = await fetch(ENDPOINT);

      if (!response.ok) {
        throw new Error('Ha surgido un error', response.status);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error al obtener los datos', error);
    }
};

/**La información se ordena alfabéticamente.
   * 
   * Los paises se ordenarán en orden alfabético 
   * (recuerda el método sort). Recuerda que para 
   * ordenar no es lo mismo mayúsculas que minúsculas. 
   * Si comparas que sea lo mismo... pasa los nombres 
   * a mayúsculas si te parece más sencillo para la comparación.
   */
getDataAPI()
  .then((data) => {
    const countries = [];
    data.forEach((dataCountry) => {
        const country = {
            name: dataCountry.name.common,
            side: dataCountry.car.side,
            capital: dataCountry.capital ,
            population: dataCountry.population,
            flag: dataCountry.flags[1],
            id: dataCountry.flag
        }
        countries.push(country);
    });
    console.log(countries);
    sortCountries (countries);
});;

function sortCountries (countries) {
    console.log(countries);
    countries.sort(function(a, b){
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    displayCountries(countries);
};

/** */
function displayCountries(countries) {
    console.log(countries);
    countries.forEach((sortCountry) => {
        countriesList.innerHTML += 
        `<div class = "country" id = "${sortCountry.id}">
            <img src="${sortCountry.flag}" alt="">
            <p>${sortCountry.name}</p>
        </div>`
    });
};

/** Al clickar en cada una de las banderas tendrá que mostrar la información detallada en una ventana flotante del país seleccionado. La Muestra información detallada sobre el país seleccionado, incluyendo la bandera, la capital, la población, el lado de la carretera por el que se circula.

   * La información detallada incluye la bandera del país, la capital, la población y el lado de la carretera donde se circula. Este flotante se quedará fijo y centrado hasta que se cierre.
   
   * Si necesitas añadir clases a un elemento mediante JS, lo puedes hacer con elemento.classList.add('clase que quieres añadir') y para eliminar elemento.classList.remove('clase que quieres añadir')
    
   * Tendrá un botón cerrar para hacer desaparecer esa información. */

countriesList.addEventListener('click', (event) => {
    const country = event.target;
    country.style.backgroundColor= 'red';
    console.log('target', country);
    console.log('event', event);
    console.log('matches', country.matches("div"));
   if (country.matches("div") == true) {
        console.log('bien');
        
    } else {
        console.log('mal');
    }
});