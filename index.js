async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new console.error(`responsa status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    const listContainer = document.getElementById('lista');

    json.results.forEach(async (pokemon) => {

      const currentPokemon = await fetch(pokemon.url)
      const currentPokemonJson = await currentPokemon.json()

      console.log(currentPokemonJson)

      const element = `
        <li>
        <h2>nº:${currentPokemonJson.id}</h2>
          <img src="${currentPokemonJson.sprites.other.home.front_default}" alt="foto do pokemon" />
          <p>${currentPokemonJson.name.toUpperCase()}</p>
        </li>
      `

      listContainer.innerHTML += element
    });

  } catch (error) {
    console.error(error.message);
  }
}


getData()