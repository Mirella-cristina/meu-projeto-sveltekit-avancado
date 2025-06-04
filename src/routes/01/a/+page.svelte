<script>
  let contador = 0;

  function contar() {
    contador++;
    console.log('Executando no cliente');
  }
</script>

<button onclick={contar}>
  Cliquei {contador} vezes
</button>
