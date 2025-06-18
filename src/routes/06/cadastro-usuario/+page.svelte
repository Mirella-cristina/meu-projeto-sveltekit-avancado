<script>
  export let form;
</script>

{#if form?.success}
  <p>Cadastro concluído com sucesso. Bem-vindo(a), {form.nome}!</p>
{:else}
  <form method="POST">
    <input name="nome" type="text" placeholder="Nome do usuário" value={form?.nome || ''} required />
    {#if form?.erros?.nome}
      <p>{form.erros.nome}</p>
    {/if}
    <br />

    <input name="email" type="text" placeholder="E-mail do usuário" value={form?.email || ''} required />
    {#if form?.erros?.email}
      <p>{form.erros.email}</p>
    {/if}
    <br />

    <input name="senha" type="password" placeholder="Senha do usuário" value={form?.senha || ''} required />
    {#if form?.erros?.senha}
      <p>{form.erros.senha}</p>
    {/if}
    <br />

    <input name="confirmacaosenha" type="password" placeholder="Confirmação de senha" value={form?.confirmacaoSenha || ''} required />
    {#if form?.erros?.confirmacaoSenha}
      <p>{form.erros.confirmacaoSenha}</p>
    {/if}
    <br />

    <input name="nascimento" type="date" value={form?.nascimento || ''} required />
    {#if form?.erros?.nascimento}
      <p>{form.erros.nascimento}</p>
    {/if}
    <br />

    <button>Cadastrar</button>
  </form>
{/if}

<style>
  p {
    margin: 0;
    padding: 0;
    color: red;
  }
</style>
