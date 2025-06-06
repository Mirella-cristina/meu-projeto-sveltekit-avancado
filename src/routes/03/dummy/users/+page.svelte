<script>
  let { data } = $props();
</script>

<h3>usuários</h3>
<form>

  <input name="pais" placeholder="Filtrar por pais"/>
  <button>Filtrar</button>
</form>
<ul>
  {#each data.users.users as user}
    <li>
      <a href="/03/dummy/users/{user.id}">
        {user.firstName}
        {user.lastName} ({user.address.country} )
      </a>
    </li>
  {/each}
</ul>
