const server = 'https://Anime.gabrielx7.repl.co';

/*async function read() {
    const url = api;
  
    return await (await fetch(url)).json();
}

async function readAll() {
    if (!localStorage.getItem('objetos ')) {
    const logica = await api.read('/objetos ');
  
    localStorage.setItem('objetos ', JSON.stringify(logica));
    }
    
    return JSON.parse(localStorage.getItem('objetos '));
  }*/

  const create = async () => {
    const res = await fetch(`${server}/objetos`, {
      method: 'post',
      body: JSON.stringify(),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
  
    return await res.json();
  };
  
  const readAll = async () => {
    const res = await fetch(`${server}/objetos`);
  
    return await res.json();
  };
  
  
  const api = { create, readAll };
  
  export default api;