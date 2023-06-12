let meet = document.getElementById('meet');
let resultados = document.getElementById('resultados');

let buscas = [
  { nome: 'Seguidores no instagram', url: 'https://www.instagram.com' },
  { nome: 'Painel de Revendas VPN', url: 'https://www.exemplo.com' },
  { nome: 'Login VPN', url: 'https://www.exemplo.com/login' },
  { nome: 'Seguidores no Facebook', url: 'https://www.facebook.com' },
  { nome: 'Contato de suporte no Telegram', url: 'https://t.me/' },
  { nome: 'Contato de suporte no WhatsApp', url: 'https://wa.me/' },
  { nome: 'Oque você quiser', url: 'https://wa.me/' }
      ];

meet.addEventListener('click', (ev) => {
  ev.preventDefault();

  resultados.innerHTML = '';

  let valorDaPesquisa = document.getElementById('search').value.toLowerCase();

  if (valorDaPesquisa === '') {
    alert('Digite uma palavra-chave para realizar a pesquisa');
    return;
  }

  let result = buscas.filter((busca) => busca.nome.toLowerCase().includes(valorDaPesquisa));

  if (result.length === 0) {
    alert('Resultado não encontrado');
    return;
  }

  result.forEach((el) => {
    const li = document.createElement('li');
    const ancora = document.createElement('a');
    ancora.href = el.url;
    ancora.textContent = el.nome;
    li.appendChild(ancora);
    resultados.appendChild(li);
  });
});