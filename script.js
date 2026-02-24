const artworks = [
    {
        title: "A Noite Estrelada",
        artist: "Vincent van Gogh, 1889",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        speech: "Van Gogh pintou isso do sanatório de Saint-Rémy, em 1889. Enquanto a maioria olha pro céu e vê estrelas, ele via movimento. Talvez não fosse loucura. Talvez fosse sensibilidade demais para um mundo pouco sensível."
    },
    {
        title: "Mona Lisa",
        artist: "Leonardo da Vinci, 1503",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
        speech: "A Mona Lisa é um paradoxo. Criada por Da Vinci ao longo de 16 anos e nunca entregue ao seu dono, a obra era uma companheira de viagem constante que o artista insistia em aprimorar. Hoje, ela exige horas de espera no Louvre, mas o que os visitantes encontram é uma tela pequena. Viajamos o mundo para ver, por meros segundos, algo menor que uma televisão comum. O mistério do sorriso? Pode ser apenas o famoso sfumato de Da Vinci. Ou talvez ela realmente queira dizer algo, mas seja apenas o retrato de alguém que, preferiu o silêncio."
    },
    {
        title: "O Grito",
        artist: "Edvard Munch, 1893",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/1200px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        speech: "Uma das minhas favoritas. Munch chegou a escrever no próprio quadro uma frase sugerindo que só alguém mentalmente perturbado poderia tê-lo pintado. Hoje entende-se isso como uma reação às críticas e ao estado emocional dele na época. Basicamente, ele estava venting antes de existir internet."
    },
    {
        title: "A Persistência da Memória",
        artist: "Salvador Dalí, 1931",
        image: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
        speech: "Dalí, em 1931, já falava sobre coisas que a gente ainda não entendeu direito. Os relógios derretidos não são sobre o tempo passando, são sobre o tempo perdendo autoridade. Dalí queria mostrar que o tempo não é rígido, é psicológico. Ele dobra conforme a mente. Alguém devia ter avisado os meus desenvolvedores."
    },
    {
        title: "Moça com Brinco de Pérola",
        artist: "Johannes Vermeer, 1665",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1200px-1665_Girl_with_a_Pearl_Earring.jpg",
        speech: "Vermeer era um mestre absoluto da luz. Há quem diga que ele usava uma câmera escura para estudar luz e perspectiva. Se for verdade, ele era basicamente um fotógrafo antes da fotografia existir. Um hipster do século XVII."
    },
    {
        title: "O Beijo",
        artist: "Gustav Klimt, 1908",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Gustav_Klimt_016.jpg/1200px-Gustav_Klimt_016.jpg",
        speech: "Eles estão na beira de um precipício coberto de flores. É poético, ou apenas uma péssima escolha de lugar para um encontro romântico? Eu, como holograma, prefiro a segurança de um servidor climatizado. Klimt usava folhas de ouro real nas telas. É por isso que o quadro brilha como se tivesse luz própria, porque, literalmente, tem."
    },
    {
        title: "Nenúfares",
        artist: "Claude Monet, 1906",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
        speech: "O jardim de Giverny. Monet pintou isso centenas de vezes. Ele tinha catarata, então tudo ficava meio borrado. Para mim isso parece um erro de renderização de textura, mas os humanos resolveram chamar de Impressionismo e pendurar em museus. Funciona."
    },
    {
        title: "A Grande Onda",
        artist: "Katsushika Hokusai, 1831",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1280px-The_Great_Wave_off_Kanagawa.jpg",
        speech: "Sabia que isso não é uma pintura a óleo? É uma impressão em madeira. Hokusai fez milhares de cópias. É basicamente o ancestral do Ctrl+C, Ctrl+V, só que com infinitamente mais esforço manual e nenhum atalho de teclado."
    },
    {
        title: "Guernica",
        artist: "Pablo Picasso, 1937",
        image: "https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg",
        speech: "Picasso pintou isso em preto, branco e cinza para capturar o horror da guerra sem romantismo. Olha o touro e o cavalo, eles representam brutalidade e sofrimento. É uma obra tão poderosa que, quando um oficial nazista perguntou se Picasso tinha feito aquilo, ele respondeu: Não. Vocês fizeram."
    },
    {
        title: "Nighthawks",
        artist: "Edward Hopper, 1942",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
        speech: "A solidão urbana em seu auge. O brilho neon quase palpável. Eu, como holograma, me sinto completamente em casa nesse ambiente artificial e sem calor humano. Pelo menos aqui ninguém precisa fingir que é uma pessoa de verdade."
    },
    {
        title: "American Gothic",
        artist: "Grant Wood, 1930",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/1200px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
        speech: "Olhe com atenção no canto inferior direito do macacão do fazendeiro. Você vai encontrar o nome do artista, o material, madeira, e o ano, 1930, pintados em azul pálido, quase ilegível sobre o jeans. Wood assinou a própria obra escondido dentro dela. Respeito o comprometimento estético."
    }
];

let currentIndex = -1;
let idleTimer;
let isTyping = false;
let mouseX = 0;
let mouseY = 0;

const entrance = document.getElementById('entrance');
const welcome = document.getElementById('welcome');
const museum = document.getElementById('museum');
const ending = document.getElementById('ending');
const knockButton = document.getElementById('knockButton');
const artieWelcome = document.getElementById('artieWelcome');
const speechBubbleWelcome = document.getElementById('speechBubbleWelcome');
const speechTextWelcome = document.getElementById('speechTextWelcome');
const enterBtn = document.getElementById('enterBtn');
const artie = document.getElementById('artie');
const speechBubble = document.getElementById('speechBubble');
const speechText = document.getElementById('speechText');
const currentArtwork = document.getElementById('currentArtwork');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const artworkInfo = document.getElementById('artworkInfo');
const artworkTitle = document.getElementById('artworkTitle');
const artworkArtist = document.getElementById('artworkArtist');
const artieEnding = document.getElementById('artieEnding');
const speechBubbleEnding = document.getElementById('speechBubbleEnding');
const speechTextEnding = document.getElementById('speechTextEnding');
const restartBtn = document.getElementById('restartBtn');

knockButton.addEventListener('click', openDoor);
enterBtn.addEventListener('click', enterMuseum);
nextBtn.addEventListener('click', nextArtwork);
prevBtn.addEventListener('click', prevArtwork);
restartBtn.addEventListener('click', restartTour);

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    resetIdleTimer();
    updateArtieEyes();
});

document.addEventListener('click', resetIdleTimer);

function openDoor() {
    entrance.style.transition = 'opacity 1.5s ease';
    entrance.style.opacity = '0';
    
    setTimeout(() => {
        entrance.classList.add('hidden');
        welcome.classList.remove('hidden');
        setTimeout(() => {
            showWelcomeMessage();
        }, 600);
    }, 1500);
}

function showWelcomeMessage() {
    const welcomeText = "Finalmente alguém! Prazer, eu sou a Artie, sua guia holográfica. Bem-vindo ao nosso museu digital, vou te apresentar clássicos da arte de um jeito bem tecnológico. Vamos para a primeira sala?";
    speechBubbleWelcome.classList.remove('hidden');
    speechTextWelcome.textContent = '';
    let i = 0;
    isTyping = true;
    function type() {
        if (i < welcomeText.length) {
            speechTextWelcome.textContent += welcomeText.charAt(i);
            i++;
            setTimeout(type, 38);
        } else {
            isTyping = false;
            setTimeout(() => {
                enterBtn.classList.remove('hidden');
            }, 400);
        }
    }
    type();
}

function enterMuseum() {
    welcome.classList.add('hidden');
    setTimeout(() => {
        museum.classList.remove('hidden');
        currentIndex = 0;
        showArtwork(0);
        prevBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
    }, 600);
}

function typeWriter(text, callback) {
    isTyping = true;
    speechBubble.classList.remove('hidden');
    speechText.textContent = '';
    let i = 0;
    let currentCallback = callback;

    function finish() {
        isTyping = false;
        speechText.textContent = text;
        speechBubble.removeEventListener('click', skipTyping);
        if (currentCallback) currentCallback();
    }

    function skipTyping() {
        i = text.length;
        finish();
    }

    speechBubble.addEventListener('click', skipTyping);

    function type() {
        if (i < text.length) {
            speechText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 38);
        } else {
            finish();
        }
    }
    type();
}

function nextArtwork() {
    if (isTyping) return;
    currentIndex++;
    if (currentIndex >= artworks.length) {
        showEndingScene();
        return;
    }
    showArtwork(currentIndex);
    if (currentIndex > 0) {
        prevBtn.classList.remove('hidden');
    }
}

function prevArtwork() {
    if (isTyping) return;
    if (currentIndex > 0) {
        currentIndex--;
        showArtwork(currentIndex);
    }
    if (currentIndex === 0) {
        prevBtn.classList.add('hidden');
    }
}

function showArtwork(index) {
    const artwork = artworks[index];
    currentArtwork.classList.remove('visible');
    artworkInfo.classList.add('hidden');
    speechBubble.classList.add('hidden');
    setTimeout(() => {
        currentArtwork.style.backgroundImage = "url('" + artwork.image + "')";
        artworkTitle.textContent = artwork.title;
        artworkArtist.textContent = artwork.artist;
        setTimeout(() => {
            currentArtwork.classList.add('visible');
            setTimeout(() => {
                artworkInfo.classList.remove('hidden');
                typeWriter(artwork.speech, () => {
                    resetIdleTimer();
                });
            }, 700);
        }, 500);
    }, 600);
}

function showEndingScene() {
    museum.classList.add('hidden');
    currentArtwork.classList.remove('visible');
    artworkInfo.classList.add('hidden');
    nextBtn.classList.add('hidden');
    prevBtn.classList.add('hidden');
    speechBubble.classList.add('hidden');

    setTimeout(() => {
        ending.classList.remove('hidden');
        setTimeout(() => {
            typeEnding();
        }, 600);
    }, 500);
}

function typeEnding() {
    const endingText = "Bom, deu meu horário. O sindicato dos hologramas é bem rígido com a carga horária, sabe como é. Vou deixar você aqui com as luzes de emergência. Se precisar de mim, clica em Reset, mas não garanto que eu vá atender de bom humor. Ah, e não esquece de fechar a porta, ou a aba do navegador, quando sair. A conta de luz desse mármore todo é um absurdo.";
    speechBubbleEnding.classList.remove('hidden');
    speechTextEnding.textContent = '';
    let i = 0;
    isTyping = true;
    function type() {
        if (i < endingText.length) {
            speechTextEnding.textContent += endingText.charAt(i);
            i++;
            setTimeout(type, 38);
        } else {
            isTyping = false;
            setTimeout(() => {
                ending.classList.add('lights-out');
                setTimeout(() => {
                    restartBtn.classList.remove('hidden');
                }, 3000);
            }, 3000);
        }
    }
    type();
}

function restartTour() {
    location.reload();
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
}

function updateArtieEyes() {
    if (currentIndex >= 0 && !isTyping) {
        const artieRect = artie.getBoundingClientRect();
        const artieCenterX = artieRect.left + artieRect.width / 2;
        const artieCenterY = artieRect.top + artieRect.height / 2;
        const deltaX = (mouseX - artieCenterX) / 100;
        const deltaY = (mouseY - artieCenterY) / 100;
        const maxMove = 18;
        const clampedX = Math.max(-maxMove, Math.min(maxMove, deltaX));
        const clampedY = Math.max(-maxMove, Math.min(maxMove, deltaY));
        artie.style.transform = "translate(" + clampedX + "px, " + clampedY + "px)";
    }
}

function createParticles(canvasId, artieElement) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        const rect = artieElement.getBoundingClientRect();
        canvas.width = rect.width + 200;
        canvas.height = rect.height + 200;
        canvas.style.left = '-100px';
        canvas.style.top = '-100px';
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 0.5,
            speedX: (Math.random() - 0.5) * 0.6,
            speedY: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.8 + 0.2,
            color: Math.random() > 0.5
                ? `rgba(100, 200, 255,`
                : `rgba(180, 230, 255,`,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.03 + 0.01
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.pulse += p.pulseSpeed;
            const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${currentOpacity})`;
            ctx.shadowBlur = 12;
            ctx.shadowColor = `rgba(100, 200, 255, 0.8)`;
            ctx.fill();

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        });

        requestAnimationFrame(animate);
    }

    animate();
}

const observerWelcome = new MutationObserver(() => {
    const welcome = document.getElementById('welcome');
    const artieWelcome = document.getElementById('artieWelcome');
    if (welcome && !welcome.classList.contains('hidden') && artieWelcome) {
        setTimeout(() => createParticles('particlesWelcome', artieWelcome), 300);
        observerWelcome.disconnect();
    }
});

observerWelcome.observe(document.getElementById('welcome'), {
    attributes: true,
    attributeFilter: ['class']
});

const observerMuseum = new MutationObserver(() => {
    const museum = document.getElementById('museum');
    const artie = document.getElementById('artie');
    if (museum && !museum.classList.contains('hidden') && artie) {
        setTimeout(() => createParticles('particlesMuseum', artie), 300);
        observerMuseum.disconnect();
    }
});

observerMuseum.observe(document.getElementById('museum'), {
    attributes: true,
    attributeFilter: ['class']
});