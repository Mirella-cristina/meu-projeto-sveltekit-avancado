<script>
  let { data } = $props();
</script>

<h3>usuários</h3>
<form>

  <input name="idade" type="number" placeholder="Digite uma idade" />
  <button>Filtrar</button>
</form>
<ul>
  {#each data.users.users as user}
    <li>
      <a href="/03/dummy/users/{user.id}">
        {user.firstName}{user.lastName} ({user.age} anos)
      </a>
    </li>
  {/each}
</ul>
