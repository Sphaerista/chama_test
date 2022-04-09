export async function getAllBeers(data) {
    try {
        let response = await fetch('https://api.punkapi.com/v2/beers?per_page=20');
        data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
}