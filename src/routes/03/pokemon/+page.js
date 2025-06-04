export async function load({ url, fetch }) {
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = 12;  // Quantos pokémons eu vou mostrar por página
    const offset = (page - 1) * limit;
  
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const json = await res.json();
  
    const pokemons = await Promise.all(
      json.results.map(async (pokemon) => {
        const resDetail = await fetch(pokemon.url);
        const detail = await resDetail.json();
        return {
          name: pokemon.name,
          image: detail.sprites.front_default
        };
      })
    );
  
    const hasNext = json.next !== null;
    const hasPrev = page > 1;
  
    return {   // aqui a gente Retorna os dados para o +page.svelte mostrar

      pokemons,
      page,
      hasNext,
      hasPrev
    };
  }
  