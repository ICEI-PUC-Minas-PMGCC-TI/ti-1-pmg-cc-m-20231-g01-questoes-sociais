const form = document.querySelector('form'); // Seleciona o formulário
const formData = new FormData(form); // Cria um objeto FormData com o conteúdo do formulário
const object = {}; // Cria um objeto vazio
formData.forEach((value, key) => object[key] = value); // Preenche o objeto com as informações do formulário
const json = JSON.stringify(object); // Converte o objeto em uma string JSON
console.log(json); // Exibe a string JSON no console

function checkForm() {
    const situationInput = document.getElementById('situationInput');
    if (situationInput.value.trim() === '') {
      alert('Por favor, preencha a situação ocorrida.');
      return;
    }
    window.location.href = 'index2.html';
    const form = document.querySelector('form');
    form.submit();
  }
var slideIndex = 0;
var slides = document.getElementsByClassName('carousel__images')[0].getElementsByTagName('img');
  
