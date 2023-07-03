const questions = [
    {
      question: 'O que é assédio sexual?',
      options: [
        'A discriminação de uma pessoa com base em sua orientação sexual.',
        'A utilização de linguagem ofensiva em relação à orientação sexual de alguém.',
        'A prática de atos indesejados, insinuações ou investidas de natureza sexual contra uma pessoa sem o seu consentimento.',
        'A exclusão social de um indivíduo devido à sua identidade de gênero.'
      ],
      answer: 'c'
    },
    {
      question: 'O que é homofobia?',
      options: [
        'A preferência por relacionamentos amorosos entre pessoas do mesmo sexo.',
        'A discriminação ou aversão a pessoas com base em sua orientação sexual.',
        'O apoio e respeito às diversidades de orientação sexual.',
        'A promoção de políticas públicas para garantir a igualdade de direitos para a comunidade LGBTQ+.'
      ],
      answer: 'b'
    },
    {
      question: 'Quais são as possíveis consequências do assédio sexual?',
      options: [
        'Baixa autoestima e problemas de saúde mental.',
        'Aumento da confiança e segurança pessoal.',
        'Melhora nas relações interpessoais e no ambiente de trabalho.',
        'Redução das desigualdades sociais.'
      ],
      answer: 'a'
    },
    {
      question: 'Como podemos combater a homofobia?',
      options: [
        'Criando espaços seguros e inclusivos para a comunidade LGBTQ+.',
        'Promovendo a visibilidade de figuras públicas heterossexuais.',
        'Ignorando as denúncias de violência e discriminação contra a comunidade LGBTQ+.',
        'Estabelecendo leis que restrinjam os direitos da comunidade LGBTQ+.'
      ],
      answer: 'a'
    }
  ];

  let currentQuestion = 0;
  let score = 0;
  const questionElement = document.querySelector('.question');
  function displayQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    const optionsElement = document.querySelector('.options');
    optionsElement.innerHTML = '';
    current.options.forEach((option, index) => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = String.fromCharCode(97 + index); 
      optionsElement.appendChild(input);
      optionsElement.appendChild(document.createTextNode(option));
      optionsElement.appendChild(document.createElement('br'));
    });
  }

  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
      if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        showResult();
      }
    } else {
      alert('Por favor, selecione uma opção.');
    }
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  }

  function showResult() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    const result = document.createElement('h2');
    result.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
    container.appendChild(result);
  }


  displayQuestion();