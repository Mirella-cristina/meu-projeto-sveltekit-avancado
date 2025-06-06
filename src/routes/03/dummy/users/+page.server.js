export async function load ({fetch, url }) {
    const pais= url.searchParams.get('pais');
    const link= 'https://dummyjson.com/users';
    if (pais) link += `?key=coountry&value=${pais}`
    const res=await fetch ('https:/dummyjson.com/users');
    const users= await res.json();
    return {users};
}