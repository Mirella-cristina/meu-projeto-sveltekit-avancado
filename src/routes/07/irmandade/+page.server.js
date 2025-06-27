import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  multiplicar: async ({ request }) => {  },
  magos:async ({request}) => {
    const data = await request.formData();

    const nascimento = data.get('nascimento');
    const inteligencia = Number(data.get('inteligencia'));
    const magia=data.get('magia');

    if (inteligencia < 8) return fail (400, { error:'Precisa estudar mais!' });
    if (magia != 'on') return fail(400, { error:'Sem conhecimentos de magia!'});

   const atual= new Date(), aniversario=new Date(nascimento);
   const idade=atual - aniversario;
   if (idade < 504921600000) return fail(400, {error: 'Precisa de ao menos 16 anos!'});

   redirect(303, '07/irmandades/magos');
  },
  artesaos: async ({ request }) => { },

};