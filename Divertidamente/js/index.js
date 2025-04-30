// Definindo as emoções e suas características (cor, frase e imagem)
const emotions = { 
    Alegria: { color: '#ffd700', phrase: 'Vai dar tudo certo!', Image: 'img/Alegria.png'},
    Tristeza:{ color: '#87ceeb', phrase: 'Às vezes, chorar é necessário.', Image: 'img/Tristeza.png'},
    Raiva:{ color: '#ff6347', phrase: 'Isso é um absurdo!', Image: 'img/Raiva.png'},
    Medo:{ color: '#9370db', phrase: 'Tem certeza que é seguro?', Image: 'img/Medo.png'},
    Nojinho:{ color: '#98fb98', phrase: 'Eca, que nojo!', Image: 'img/Nojinho.png'},
    Ansiedade:{ color: '#ffa500', phrase: 'E se der tudo errado?', Image: 'img/Ansiedade.png'},
    Vergonha:{ color: '#ffb6c1', phrase: 'Ai, que vergonha!', Image: 'img/Vergonha.png'},
    Tedio:{ color: '#d3d3d3', phrase: 'Isso é tão chato...', Image: 'img/Tedio.png'},
    Inveja:{ color: '#40e0d0', phrase: 'Porque ela tem e eu não?', Image: 'img/Inveja.png'},
};
// Selecionando os botões e elementos da página
const buttons = document.querySelectorAll('button');
const emotionDisplay = document.getElementById('emotion-display');
const emotionPhrase = document.getElementById('emotion-phrase');
const emotionImg = document.getElementById('emotion-img');

// Função para aplicar a emoção ao clicar no botão
buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        const emotion = button.id;
        const emotionData = emotions[emotion];// Pega a emoção do botão clicado

     // Atualiza o fundo da página, a imagem e a frase
        document.body.style.backgroundColor = emotionData.color;
        emotionDisplay.style.backgroundColor = emotionData.color;
        emotionPhrase.textContent = emotionData.phrase;

        emotionImg.src = emotionData.Image;
        emotionImg.style.display = 'block';
        emotionImg.alt = emotion;

        emotionPhrase.classList.remove('animate');
        emotionImg.classList.remove('animate');

        // Força o navegador a reiniciar a animação
        void emotionPhrase.offsetWidth;
        void emotionImg.offsetWidth;

        // Adiciona a animação de novo
        emotionPhrase.classList.add('animate');
        emotionImg.classList.add('animate');

    });
});