import { fail } from '@sveltejs/kit';

function validarEmail(email) {
  if (!/^[a-zA-Z@.]+$/.test(email)) return false;
  const partes = email.split('@');
  if (partes.length !== 2) return false;

  const antesArroba = partes[0];
  const depoisArroba = partes[1];

  if (antesArroba.length < 1) return false;

  const depoisPartes = depoisArroba.split('.');
  if (depoisPartes.length !== 2) return false;

  if (depoisPartes[0].length < 1 || depoisPartes[1].length < 1) return false;

  return true;
}

function validarSenha(senha) {
  if (senha.length < 4) return false;
  if (!/[A-Z]/.test(senha)) return false;
  if (!/[a-z]/.test(senha)) return false;
  if (!/[0-9]/.test(senha)) return false;
  if (!/[!@#$%¨&*()\-_+=]/.test(senha)) return false;
  return true;
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const nome = data.get('nome')?.trim();
    const email = data.get('email')?.trim();
    const senha = data.get('senha');
    const confirmacaoSenha = data.get('confirmacaosenha');
    const nascimento = data.get('nascimento');

    const erros = {};

    if (!nome || nome.length < 2) {
      erros.nome = 'Nome deve ter no mínimo 2 caracteres.';
    }
    if (!email || !validarEmail(email)) {
      erros.email = 'O e-mail deve conter apenas letras, um "@" e um ponto ".", com pelo menos uma palavra antes do @ e duas após, separadas pelo ..';
    }
    if (!senha || !validarSenha(senha)) {
      erros.senha = 'A senha deve ter no mínimo 4 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.';
    }
    if (senha !== confirmacaoSenha) {
      erros.confirmacaoSenha = 'A senha e a confirmação de senha não coincidem.';
    }
    if (!nascimento) {
      erros.nascimento = 'Data de nascimento é obrigatória.';
    } else {
      const hoje = new Date();
      const dataNasc = new Date(nascimento);
      const idade = hoje.getFullYear() - dataNasc.getFullYear();
      const mes = hoje.getMonth() - dataNasc.getMonth();
      const dia = hoje.getDate() - dataNasc.getDate();

      let idadeReal = idade;
      if (mes < 0 || (mes === 0 && dia < 0)) {
        idadeReal--;
      }
      if (idadeReal < 12) {
        erros.nascimento = 'Você deve ter pelo menos 12 anos para se cadastrar.';
      }
    }

    if (Object.keys(erros).length > 0) {
      return fail(400, {
        nome,
        email,
        senha,
        confirmacaoSenha,
        nascimento,
        erros
      });
    }

    return {
      success: true,
      nome
    };
  }
};
