<script>
  export let data;
</script>

<div class="container mt-4">
  <h1 class="text-capitalize">{data.name}</h1>
  <img src={data.image} alt={data.name} class="img-fluid my-3" />

  <ul class="list-group">
    <li class="list-group-item"><strong>Altura:</strong> {data.height} m</li>
    <li class="list-group-item"><strong>Peso:</strong> {data.weight} kg</li>
    <li class="list-group-item">
      <strong>Tipos:</strong>
      {data.types.join(', ')}
    </li>
    <li class="list-group-item">
      <strong>Habilidades:</strong>
      {data.abilities.join(', ')}
    </li>
  </ul>
</div>
