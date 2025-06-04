export async function load({ params, fetch }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name.toLowerCase()}`);
  if (!res.ok) {
    return {
      status: res.status,
      error: new Error(`Pokémon "${params.name}" não encontrado.`)
    };
  }

  const data = await res.json();

  return {
    name: data.name,
    image: data.sprites.front_default,
    height: data.height / 10,
    weight: data.weight / 10,
    types: data.types.map((t) => t.type.name),
    abilities: data.abilities.map((a) => a.ability.name)
  };
}
