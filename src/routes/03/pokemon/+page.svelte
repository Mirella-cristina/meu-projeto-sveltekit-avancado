<script>
  let { data } = $props();
</script>

<div class="row">
  {#each data.pokemons as p}
    <div class="col-md-3 col-sm-6 mb-3">
      <div class="card">
        <img src={p.image} alt={p.name} class="card-img-top" />
        <div class="card-body">
          <a href="/03/pokemon/{p.name}" class="stretched-link text-decoration-none">
            <h5 class="card-title text-capitalize">{p.name}</h5>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
