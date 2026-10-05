import { MathTopic } from '../../types/math';

export const trigonometryTopic: MathTopic = {
  id: 'trigonometria',
  number: '03',
  title: 'Trigonometria',
  subtitle: 'Círculo trigonométrico, funções circulares, equações, limites notáveis e oscilações',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Processamento de áudio digital, cancelamento de ruído, sinais de rádio, marés e corrente alternada.',
  subtopics: [
    {
      id: 'circulo-trigonometrico',
      title: 'Círculo Trigonométrico e Funções Circulares',
      shortDescription: 'Como o movimento circular gera as ondas de Seno, Cosseno e Tangente.',
      simulatorType: 'trigonometry',
      simulatorDefaultPreset: 'circle',
      coreIdeaInOneSentence: 'A trigonometria converte rotações circulares em ondas de tempo e distâncias espaciais.',
      progressionRoadmap: [
        { level: '6', summary: 'A Roda Gigante: a altura da cabine sobe e desce enquanto a sombra anda para a frente e para trás.' },
        { level: '10', summary: 'O Farol e a Sombra: como o círculo desenha uma onda contínua ao longo do tempo.' },
        { level: '14', summary: 'Triângulo Retângulo no Círculo: Seno (vertical), Cosseno (horizontal) e Tangente (x = 1).' },
        { level: '18', summary: 'Radianos, Fórmula Fundamental sen²θ + cos²θ = 1, equações trigonométricas e limites notáveis.' },
        { level: 'adulto', summary: 'Ondas Sonoras, Transformada de Fourier, Corrente Alternada (AC) e Cancelamento de Ruído.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Quando andas numa Roda Gigante, em que momento estás o mais alto possível?',
            scenario: 'Estás sentado numa cabine colorida que roda suavemente sem parar.',
            spark: 'No topo da roda estás no ponto mais alto! Mas repara na tua sombra no chão: ela vai para a direita, depois volta para a esquerda, num vai-e-vem perfeito!',
          },
          whyItExists: {
            problemItSolves: 'Permite medir alturas e posições de coisas que estão a rodar.',
            realWorldContexts: [
              { area: 'Relógios de Ponteiros', example: 'Saber a posição da ponta do ponteiro a cada minuto.' },
            ],
            ahaQuote: 'Rodar em círculo cria uma onda que sobe e desce!',
          },
          intuition: {
            headline: 'A Roda Gigante e a Sombra no Chão',
            storyOrAnalogy: 'Pensa na cabine da Roda Gigante. A altura a que a cabine está do chão chama-se Seno. A posição da tua sombra na horizontal chama-se Cosseno. Enquanto a roda gira a um ritmo constante, a tua altura sobe suavemente até ao topo (+1), desce até ao meio (0), vai até ao fundo (-1) e volta a subir.',
            keyTakeaway: 'O Seno é a altura vertical; o Cosseno é a posição horizontal!',
            visualMetaphor: 'Uma caneta presa a uma roda a girar que desenha uma onda suave numa fita de papel em movimento.',
          },
          predictionChallenge: {
            question: 'O que achas que acontece à tua altura (Seno) quando a roda gira até ao topo (90 graus)?',
            options: [
              { id: 'a', label: 'Atinge a altura máxima (+1)', isCorrect: true, explanationAfterTest: 'Perfeito! No topo da roda (90° ou π/2), o Seno atinge o valor máximo de 1!' },
              { id: 'b', label: 'Fica a zero', isCorrect: false, explanationAfterTest: 'A zero está quando a cabine está a meio da roda (na horizontal).' },
            ],
            simulatorInstruction: 'Move o ângulo no simulador para 90° e repara na barra azul do Seno.',
          },
          discovery: {
            patternsObserved: [
              'A 90° (topo): Seno = +1 (altura máxima) e Cosseno = 0 (sombra ao centro)',
              'A 0° (direita): Seno = 0 e Cosseno = +1',
              'A 180° (esquerda): Seno = 0 e Cosseno = -1',
            ],
            ahaMoment: 'A altura e a sombra nunca passam de +1 nem de -1!',
          },
          formalization: {
            title: 'As Duas Medidas do Círculo',
            explanation: 'Num círculo de raio 1, cada ponto tem uma altura (seno) e uma distância ao centro (cosseno).',
            formulas: [
              { symbol: 'Seno (sen θ)', meaningInPlainPortuguese: 'Altura vertical do ponto' },
              { symbol: 'Cosseno (cos θ)', meaningInPlainPortuguese: 'Posição horizontal do ponto' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um amigo está no ponto 0° da roda gigante. Ele quer ir para o ponto de maior altura. Quantos graus tem de rodar?',
            steps: [
              { stepNumber: 1, title: 'Identificar o ponto inicial', mathExpression: '0° (chão horizontal)', intuitiveWhy: 'Começa à direita.' },
              { stepNumber: 2, title: 'Identificar o topo da roda', mathExpression: '90° (quarto de volta)', intuitiveWhy: 'O topo fica a 1/4 de volta completa (90°).' },
            ],
            finalConclusion: 'Ele tem de rodar 90 graus (um quarto de volta) para atingir o topo.',
          },
          tryItYourself: {
            prompt: 'Quando a roda dá uma volta completa de 360 graus, onde vai parar a cabine?',
            options: [
              { id: '1', text: 'Exatamente ao ponto onde começou (altura zero)', isCorrect: true, whyWrongOrRight: 'Correto! 360° é uma volta completa, regressando ao ponto de partida.', howToThink: 'Uma volta completa repete a posição inicial.' },
              { id: '2', text: 'Ao topo da roda', isCorrect: false, whyWrongOrRight: 'O topo é a 90°, não a 360°.', howToThink: '360° = ciclo completo.' },
            ],
          },
          practiceExercises: [
            {
              id: 'trig_6_1',
              tier: 'Base',
              question: 'Qual é o valor máximo que a altura (Seno) pode atingir num círculo de raio 1?',
              hint: 'Pensa no raio do círculo.',
              options: [
                { id: 'a', text: '+1', isCorrect: true, whyWrongOrRight: 'Perfeito! O círculo tem raio 1, logo não pode passar de 1.', howToThink: 'O topo do círculo unitário é 1.' },
                { id: 'b', text: '+10', isCorrect: false, whyWrongOrRight: 'O círculo tem raio 1, nunca chega a 10.', howToThink: 'O raio limita a altura.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio das Ondas',
            problem: 'Se a roda gigante continuar a girar para sempre, quantas vezes passa pelo ponto mais alto?',
            strategyTip: 'Pensa se a rotação é repetitiva.',
            options: [
              { id: 'a', text: 'Passa infinitas vezes, uma vez em cada volta (onda periódica)', isCorrect: true, whyWrongOrRight: 'Exato! As funções trigonométricas são periódicas e repetem-se sempre.', howToThink: 'Movimento circular = repetição infinita.' },
              { id: 'b', text: 'Apenas uma vez na vida', isCorrect: false, whyWrongOrRight: 'Em cada volta completa volta a passar pelo topo.', howToThink: 'O movimento é contínuo.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a diferença entre o Seno e o Cosseno olhando para uma roda gigante?',
            methodCriteria: ['Seno = altura do chão', 'Cosseno = distância horizontal à esquerda/direita do poste central'],
            whatIfQuestion: 'O que aconteceria à altura se a roda girasse no sentido contrário?',
            whatIfAnswer: 'A cabine começaria por descer (altura negativa) antes de subir.',
            ownWordsPrompt: 'Resume o que é o Círculo Trigonométrico com as tuas palavras:',
            keyIdeasToInclude: ['Círculo de raio 1', 'Altura (Seno)', 'Sombra (Cosseno)'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Como é que os satélites de GPS no espaço calculam a tua distância exata à Terra usando ângulos?',
            scenario: 'O satélite não pode esticar uma fita métrica até ao teu telemóvel.',
            spark: 'Ele usa a trigonometria: conhecendo o ângulo de rotação e o raio da órbita, calcula as coordenadas (x, y) instantâneas com precisão milimétrica!',
          },
          whyItExists: {
            problemItSolves: 'Calcular distâncias e coordenadas a partir de ângulos sem necessidade de medição física direta.',
            realWorldContexts: [
              { area: 'Navegação e Aviação', example: 'Calcular a rota de um avião com ventos cruzados.' },
              { area: 'Videojogos e Animação 3D', example: 'Fazer uma personagem rodar e olhar para a direção do rato.' },
            ],
            ahaQuote: 'Qualquer ponto numa curva circular pode ser escrito como (cos θ, sen θ)!',
          },
          intuition: {
            headline: 'As Coordenadas do Círculo Trigonométrico',
            storyOrAnalogy: 'Imagina um círculo com centro na origem (0, 0) e raio exatamente igual a 1. Se traçares um ângulo θ a partir do semieixo positivo das abcissas, a ponta do ponteiro toca no círculo num ponto P com coordenadas exatas: abcissa x = cos(θ) e ordenada y = sen(θ). Pelo Teorema de Pitágoras no triângulo retângulo formado, x² + y² = 1², logo cos²(θ) + sen²(θ) = 1!',
            keyTakeaway: 'O Círculo Trigonométrico é a ponte que transforma ângulos em coordenadas cartesianas (x, y).',
            visualMetaphor: 'Um radar que varre 360 graus e mapeia a posição de cada eco em termos de x e y.',
          },
          predictionChallenge: {
            question: 'Se o ângulo for 180° (meia volta para a esquerda), quais são as coordenadas (cos θ, sen θ) do ponto no simulador?',
            options: [
              { id: 'a', label: 'x = -1 e y = 0', isCorrect: true, explanationAfterTest: 'Correto! Em 180° estamos no semieixo negativo dos xx: cos(180°) = -1 e sen(180°) = 0.' },
              { id: 'b', label: 'x = 0 e y = -1', isCorrect: false, explanationAfterTest: 'x=0 e y=-1 corresponde a 270° (fundo do círculo).' },
            ],
            simulatorInstruction: 'Clica no botão rápido de 180° no simulador e repara na tabela de valores.',
          },
          discovery: {
            patternsObserved: [
              'No 1.º Quadrante (0° a 90°): sen > 0 e cos > 0',
              'No 2.º Quadrante (90° a 180°): sen > 0 e cos < 0',
              'No 3.º Quadrante (180° a 270°): sen < 0 e cos < 0',
              'No 4.º Quadrante (270° a 360°): sen < 0 e cos > 0',
            ],
            ahaMoment: 'O sinal do seno e do cosseno depende unicamente do quadrante onde o ângulo se encontra!',
          },
          formalization: {
            title: 'Fórmula Fundamental da Trigonometria',
            explanation: 'A relação universal entre seno e cosseno derivada do Teorema de Pitágoras.',
            formulas: [
              { symbol: 'sen²(θ) + cos²(θ) = 1', meaningInPlainPortuguese: 'A soma dos quadrados do seno e cosseno é sempre igual a 1' },
              { symbol: 'tg(θ) = sen(θ) / cos(θ)', meaningInPlainPortuguese: 'A tangente é a razão entre a altura e a base' },
            ],
          },
          solvedExample: {
            problemStatement: 'Sabendo que um ângulo agudo θ tem sen(θ) = 0,6, calcula o valor de cos(θ).',
            steps: [
              { stepNumber: 1, title: 'Aplicar a Fórmula Fundamental', mathExpression: 'sen²(θ) + cos²(θ) = 1 ⇒ (0,6)² + cos²(θ) = 1', intuitiveWhy: 'Substituímos o valor conhecido do seno.' },
              { stepNumber: 2, title: 'Calcular o quadrado', mathExpression: '0,36 + cos²(θ) = 1 ⇒ cos²(θ) = 1 - 0,36 = 0,64', intuitiveWhy: 'Isolamos cos²(θ).' },
              { stepNumber: 3, title: 'Extrair a raiz quadrada', mathExpression: 'cos(θ) = √0,64 = 0,8 (pois θ é agudo, logo cos > 0)', intuitiveWhy: 'No 1.º quadrante o cosseno é positivo.' },
            ],
            finalConclusion: 'O cosseno do ângulo é cos(θ) = 0,8.',
          },
          tryItYourself: {
            prompt: 'Se sen(θ) = 0,8 num ângulo agudo, quanto vale cos(θ)?',
            options: [
              { id: '1', text: '0,6 (pois 0,8² + 0,6² = 0,64 + 0,36 = 1)', isCorrect: true, whyWrongOrRight: 'Excelente! O clássico triângulo 3-4-5 normalizado (0,6 - 0,8 - 1,0).', howToThink: 'Usa √(1 - 0,8²) = √(0,36) = 0,6.' },
              { id: '2', text: '0,2', isCorrect: false, whyWrongOrRight: '0,8² + 0,2² = 0,64 + 0,04 = 0,68 ≠ 1.', howToThink: 'Lembra-te que a soma dos quadrados tem de dar 1.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_trig_1',
              tier: 'Base',
              question: 'A que ângulo corresponde uma rotação de meia volta completa?',
              hint: 'Uma volta inteira são 360°.',
              options: [
                { id: 'a', text: '180°', isCorrect: true, whyWrongOrRight: 'Correto! 360° / 2 = 180°.', howToThink: 'Meia volta = 180 graus.' },
                { id: 'b', text: '90°', isCorrect: false, whyWrongOrRight: '90° é um quarto de volta.', howToThink: '180° é meia volta.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio dos Sinais',
            problem: 'Se um ângulo θ está no 2.º Quadrante (entre 90° e 180°), quais são os sinais de sen(θ), cos(θ) e tg(θ)?',
            strategyTip: 'No 2.º Quadrante estamos acima do eixo x (y > 0) e à esquerda do eixo y (x < 0).',
            options: [
              { id: 'a', text: 'sen > 0, cos < 0, tg < 0', isCorrect: true, whyWrongOrRight: 'Perfeito! Altura positiva, base negativa, e tangente = (+) / (-) = (-).', howToThink: 'Analisa as coordenadas (x,y) e a divisão sen/cos.' },
              { id: 'b', text: 'Todos positivos', isCorrect: false, whyWrongOrRight: 'Apenas no 1.º Quadrante são todos positivos.', howToThink: 'No 2.º Q o x é negativo.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que sen²(θ) + cos²(θ) dá sempre exatamente 1 para qualquer ângulo?',
            methodCriteria: ['O triângulo retângulo formado tem hipotenusa igual ao raio do círculo (r = 1)', 'Pelo Teorema de Pitágoras: cateto² + cateto² = hipotenusa²'],
            whatIfQuestion: 'O que aconteceria à tangente tg(θ) quando o ângulo se aproxima de 90°?',
            whatIfAnswer: 'Como o cosseno tende para 0, a tangente cresce descontroladamente para +∞ (assíntota vertical).',
            ownWordsPrompt: 'Explica o papel dos quatro quadrantes nos sinais do seno e cosseno:',
            keyIdeasToInclude: ['1.º Q (+,+)', '2.º Q (-,+)', '3.º Q (-,-)', '4.º Q (+,-)'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Porque é que a matemática do secundário troca os graus (0° a 360°) por radianos (0 a 2π)?',
            scenario: 'Medir ângulos em graus é arbitrário (360 veio dos babilónios e dos dias do ano).',
            spark: 'Em radianos, o ângulo mede exatamente o comprimento do arco percorrido no círculo unitário: o ângulo torna-se uma distância real pura!',
          },
          whyItExists: {
            problemItSolves: 'Permite derivar e integrar funções trigonométricas sem fatores de conversão bizarros como (π/180).',
            realWorldContexts: [
              { area: 'Robótica Industrial', example: 'Controlo de servomotores que calculam rotações angulares em radianos por segundo.' },
              { area: 'Física Ondulatória', example: 'Equações de ondas sonoras e eletromagnéticas (v = λ · f = ω / k).' },
            ],
            ahaQuote: 'Um radiano é o ângulo que estica um arco de comprimento exatamente igual ao raio!',
          },
          intuition: {
            headline: 'A Linguagem dos Radianos e a Reta Tangente',
            storyOrAnalogy: 'O perímetro de um círculo de raio 1 é 2π. Por isso, uma volta completa de 360° equivale a 2π radianos; meia volta (180°) é π radianos; 90° é π/2 radianos. A reta tangente ao círculo no ponto (1, 0) serve de régua vertical: ao prolongares o raio até cortar essa reta, a altura do corte é exatamente a Tangente tg(θ) = sen(θ)/cos(θ).',
            keyTakeaway: 'Radianos ligam diretamente o ângulo ao comprimento do arco: s = r · θ.',
            visualMetaphor: 'Desenrolar a circunferência do círculo como se fosse um fio sobre uma régua graduada.',
          },
          predictionChallenge: {
            question: 'A quantos graus corresponde o ângulo notável de π/3 radianos?',
            options: [
              { id: 'a', label: '60° (pois 180° / 3 = 60°)', isCorrect: true, explanationAfterTest: 'Exato! Substituindo π por 180°, 180°/3 = 60°!' },
              { id: 'b', label: '30°', isCorrect: false, explanationAfterTest: '30° é π/6 (180°/6 = 30°).' },
            ],
            simulatorInstruction: 'Clica no botão de 60° no simulador e confirma o valor em radianos π/3.',
          },
          discovery: {
            patternsObserved: [
              'Tabela notável: sen(π/6) = 1/2, sen(π/4) = √2/2, sen(π/3) = √3/2',
              'Cossenos notáveis: cos(π/6) = √3/2, cos(π/4) = √2/2, cos(π/3) = 1/2',
              'Tangente: tg(π/4) = 1 (pois sen = cos a 45°)',
            ],
            ahaMoment: 'O seno de um ângulo é igual ao cosseno do seu complementar: sen(π/2 - θ) = cos(θ)!',
          },
          formalization: {
            title: 'Tabela de Valores Notáveis e Reduções ao 1.º Q',
            explanation: 'Relações de simetria no círculo trigonométrico para ângulos em radianos.',
            formulas: [
              { symbol: 'π rad = 180°', meaningInPlainPortuguese: 'Conversão fundamental entre radianos e graus' },
              { symbol: 'sen(π - θ) = sen(θ)', meaningInPlainPortuguese: 'Simetria no 2.º quadrante (mesma ordenada)' },
              { symbol: 'cos(π - θ) = -cos(θ)', meaningInPlainPortuguese: 'Cosseno simétrico no 2.º quadrante' },
              { symbol: 'tg(θ + π) = tg(θ)', meaningInPlainPortuguese: 'A tangente é periódica de período π' },
            ],
          },
          solvedExample: {
            problemStatement: 'Calcula o valor exato de sen(5π/6) usando as fórmulas de redução ao 1.º quadrante.',
            steps: [
              { stepNumber: 1, title: 'Escrever o ângulo como π - θ', mathExpression: '5π/6 = π - π/6', intuitiveWhy: 'Identificamos o ângulo de referência no 1.º quadrante.' },
              { stepNumber: 2, title: 'Aplicar a simetria do seno no 2.º quadrante', mathExpression: 'sen(5π/6) = sen(π - π/6) = sen(π/6)', intuitiveWhy: 'No 2.º quadrante o seno mantém o sinal positivo.' },
              { stepNumber: 3, title: 'Consultar o valor notável', mathExpression: 'sen(π/6) = 1/2', intuitiveWhy: 'Valor notável tabelado.' },
            ],
            finalConclusion: 'sen(5π/6) = 1/2 = 0,5.',
          },
          tryItYourself: {
            prompt: 'Qual é o valor exato de cos(2π/3)?',
            options: [
              { id: '1', text: '-1/2 (pois cos(π - π/3) = -cos(π/3) = -1/2)', isCorrect: true, whyWrongOrRight: 'Perfeito! 2π/3 está no 2.º Quadrante onde o cosseno é negativo: -cos(π/3) = -1/2.', howToThink: 'Usa a fórmula cos(π - θ) = -cos(θ) com θ = π/3.' },
              { id: '2', text: '+1/2', isCorrect: false, whyWrongOrRight: 'No 2.º Quadrante o cosseno é negativo!', howToThink: 'Atenção ao sinal do cosseno à esquerda do eixo vertical.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_trig_1',
              tier: 'Intermédio',
              question: 'Quantas soluções tem a equação sen(x) = 1/2 no intervalo [0, 2π[?',
              hint: 'O seno é positivo no 1.º e no 2.º quadrantes.',
              options: [
                { id: 'a', text: '2 soluções: x = π/6 e x = 5π/6', isCorrect: true, whyWrongOrRight: 'Correto! Uma no 1.º quadrante (π/6) e a simétrica no 2.º quadrante (π - π/6 = 5π/6).', howToThink: 'Procura todos os ângulos no círculo com altura 1/2.' },
                { id: 'b', text: 'Apenas 1 solução', isCorrect: false, whyWrongOrRight: 'Há sempre duas posições simétricas com a mesma altura no círculo.', howToThink: 'Traça uma linha horizontal em y = 1/2 e conta as interseções.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte para o 12.º Ano',
            problem: 'Simplifica a expressão: E(x) = sen(x + π) + cos(x + π/2).',
            strategyTip: 'sen(x + π) = -sen(x) e cos(x + π/2) = -sen(x).',
            options: [
              { id: 'a', text: '-2 sen(x)', isCorrect: true, whyWrongOrRight: 'Excelente! sen(x + π) = -sen(x) e cos(x + π/2) = -sen(x). Somando ambos: -sen(x) - sen(x) = -2 sen(x).', howToThink: 'Aplica as fórmulas de redução ao 1.º quadrante.' },
              { id: 'b', text: '0', isCorrect: false, whyWrongOrRight: 'Ambos os termos são negativos (-sen x), logo não se cancelam, somam-se!', howToThink: 'Verifica os sinais no círculo para x = π/4.' },
            ],
          },
          verification: {
            methodQuestion: 'Como encontras todas as soluções de uma equação do tipo sen(x) = k em [0, 2π[?',
            methodCriteria: ['Encontrar a solução principal no 1.º quadrante (arcsen k)', 'Encontrar a segunda solução no 2.º quadrante (π - arcsen k)', 'Verificar se pertencem ao intervalo dado'],
            whatIfQuestion: 'O que aconteceria se a equação fosse sen(x) = 1,5?',
            whatIfAnswer: 'Seria impossível (conjunto vazio ∅), porque o contradomínio do seno está estritamente limitado a [-1, 1].',
            ownWordsPrompt: 'Explica a vantagem dos radianos em relação aos graus:',
            keyIdeasToInclude: ['Comprimento do arco', 'Adimensional', 'Cálculo de derivadas'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Porque é que o limite notável lim_{x → 0} [sen(x) / x] = 1 é a chave de toda a derivação trigonométrica no Exame Nacional?',
            scenario: 'Ao tentar calcular a derivada de sen(x) pela definição de limite, deparamo-nos com a indeterminação 0/0.',
            spark: 'Geometricamente, para ângulos infinitesimais, a corda, o arco e o seno coincidem perfeitamente, permitindo provar que (sen x)\' = cos(x)!',
          },
          whyItExists: {
            problemItSolves: 'Permite modelar equações diferenciais de osciladores harmónicos (y\'\' + ω²y = 0), essenciais em física quântica, circuitos RLC, acústica e sismologia.',
            realWorldContexts: [
              { area: 'Processamento de Sinais Digitais (DSP)', example: 'Transformada Rápida de Fourier (FFT) para compressão MP3, JPEG e reconhecimento de voz.' },
              { area: 'Engenharia Civil e Sísmica', example: 'Amortecimento de oscilações ressonantes em pontes suspensas e arranha-céus.' },
              { area: 'Óptica e Fotónica', example: 'Interferência de ondas de luz e polarização quântica.' },
            ],
            ahaQuote: 'A derivada do seno é o cosseno (avanço de fase de π/2); a segunda derivada é o próprio seno invertido (-y), criando oscilação perpétua!',
          },
          intuition: {
            headline: 'Cálculo Infinitesimal Trigonométrico e Osciladores Harmónicos',
            storyOrAnalogy: 'Uma função harmónica f(t) = A·cos(ωt + φ) descreve qualquer movimento periódico puro. A sua derivada f\'(t) = -Aω·sen(ωt + φ) dá a velocidade instantânea (com amplitude amplificada pela frequência angular ω) e f\'\'(t) = -ω² f(t) dá a aceleração proporcional ao oposto do deslocamento (Lei de Hooke: F = -kx).',
            keyTakeaway: 'O limite notável lim_{x→0} (sen x / x) = 1 estabelece que localmente na origem a função seno tem declive unitário (reta tangente y = x).',
            visualMetaphor: 'A projeção da sombra de uma partícula em movimento circular uniforme que se move num vaivém harmónico simples.',
          },
          predictionChallenge: {
            question: 'Qual é o valor do limite lim_{x → 0} [sen(3x) / x] no Exame Nacional?',
            options: [
              { id: 'a', label: '3 (fazendo a mudança de variável y = 3x: 3 · lim [sen(y)/y] = 3 × 1 = 3)', isCorrect: true, explanationAfterTest: 'Brilhante! lim_{x→0} [sen(3x)/x] = 3 · lim_{x→0} [sen(3x)/(3x)] = 3(1) = 3.' },
              { id: 'b', label: '1', isCorrect: false, explanationAfterTest: 'Esqueceste-te do fator de escala 3 no argumento!' },
            ],
            simulatorInstruction: 'Lembra-te do limite notável oficial do formulário do IAVE.',
          },
          discovery: {
            patternsObserved: [
              'lim_{x → 0} (sen x / x) = 1',
              'lim_{x → 0} [(1 - cos x) / x²] = 1/2',
              '(sen u)\' = u\'·cos(u) e (cos u)\' = -u\'·sen(u)',
              '(tg u)\' = u\' / cos²(u) = u\'·(1 + tg² u)',
            ],
            ahaMoment: 'Todas as fórmulas de derivação trigonométrica nascem do limite notável lim (sen x / x) = 1!',
          },
          formalization: {
            title: 'Formulário Oficial de Trigonometria (12.º Ano)',
            explanation: 'Limites notáveis, derivadas e fórmulas de duplicação do IAVE.',
            formulas: [
              { symbol: 'lim_{x → 0} (sen x / x) = 1', meaningInPlainPortuguese: 'Limite notável trigonométrico fundamental' },
              { symbol: 'sen(2a) = 2 sen(a) cos(a)', meaningInPlainPortuguese: 'Fórmula de duplicação do seno' },
              { symbol: 'cos(2a) = cos²(a) - sen²(a)', meaningInPlainPortuguese: 'Fórmula de duplicação do cosseno' },
              { symbol: 'f(t) = A sen(ωt + φ)', meaningInPlainPortuguese: 'Equação geral do oscilador harmónico (A = amplitude, ω = pulsação, φ = fase inicial)' },
            ],
            commonMistakes: [
              'Esquecer o sinal negativo na derivada do cosseno: (cos u)\' = -u\'·sen(u).',
              'Aplicar lim (sen x / x) = 1 quando x tende para infinito (esse limite dá 0, não 1)!',
              'Esquecer as duas famílias de soluções ao resolver equações trigonométricas (ex: sen x = sen α ⇒ x = α + 2kπ ∨ x = π - α + 2kπ, k ∈ ℤ).',
            ],
          },
          solvedExample: {
            problemStatement: 'Item de Exame Nacional: Calcula o limite lim_{x → 0} [ (1 - cos x) / (x · sen x) ].',
            steps: [
              { stepNumber: 1, title: 'Identificar a indeterminação', mathExpression: '(1 - cos 0) / (0 · sen 0) = (1 - 1) / 0 = 0/0', intuitiveWhy: 'Indeterminação do tipo 0/0.' },
              { stepNumber: 2, title: 'Multiplicar pelo conjugado (1 + cos x)', mathExpression: '[(1 - cos x)(1 + cos x)] / [x · sen x · (1 + cos x)] = (1 - cos² x) / [x · sen x · (1 + cos x)]', intuitiveWhy: '1 - cos² x = sen² x pela Fórmula Fundamental!' },
              { stepNumber: 3, title: 'Simplificar por sen(x)', mathExpression: 'sen² x / [x · sen x · (1 + cos x)] = sen x / [x · (1 + cos x)]', intuitiveWhy: 'Cancelamos um fator sen(x) no numerador e denominador.' },
              { stepNumber: 4, title: 'Separar o limite notável', mathExpression: 'lim_{x → 0} (sen x / x) · lim_{x → 0} [1 / (1 + cos x)] = 1 · [1 / (1 + 1)] = 1 · (1/2) = 1/2', intuitiveWhy: 'Aplicamos o limite notável sen(x)/x = 1.' },
            ],
            finalConclusion: 'O limite é igual a 1/2.',
          },
          tryItYourself: {
            prompt: 'Qual é a derivada da função f(x) = sen²(3x)?',
            options: [
              { id: '1', text: 'f\'(x) = 6 sen(3x) cos(3x) = 3 sen(6x)', isCorrect: true, whyWrongOrRight: 'Exato! Pela regra da cadeia: (u²)\' = 2u·u\'. Aqui u = sen(3x), logo u\' = 3 cos(3x). f\'(x) = 2 sen(3x) · 3 cos(3x) = 6 sen(3x) cos(3x) = 3 sen(6x).', howToThink: 'Aplica a derivada da potência combinada com a regra da cadeia.' },
              { id: '2', text: 'f\'(x) = 2 sen(3x) cos(3x)', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de multiplicar pela derivada do argumento interno (3x)\' = 3.', howToThink: 'Deriva todas as camadas: potência (2), função (seno), argumento (3x).' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_trig_1',
              tier: 'Exame / Desafio',
              question: 'Resolve a equação cos(2x) = 1/2 no intervalo [0, π].',
              hint: 'cos(2x) = cos(π/3) ⇒ 2x = ±π/3 + 2kπ.',
              options: [
                { id: 'a', text: 'x = π/6 e x = 5π/6', isCorrect: true, whyWrongOrRight: 'Perfeito! 2x = π/3 ⇒ x = π/6. 2x = -π/3 + 2π = 5π/3 ⇒ x = 5π/6. Ambas pertencem a [0, π].', howToThink: 'Escreve a solução geral e seleciona os valores de k que caem no intervalo.' },
                { id: 'b', text: 'Apenas x = π/6', isCorrect: false, whyWrongOrRight: 'Esqueceste-te da segunda família de soluções do cosseno (±α).', howToThink: 'O cosseno admite soluções simétricas ±α.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'Um ponto P move-se numa reta segundo a equação x(t) = 4 cos(2t - π/3) (t em segundos, x em metros). Qual é a aceleração máxima atingida pelo ponto P?',
            strategyTip: 'Aceleração a(t) = x\'\'(t) = -ω² x(t). A aceleração máxima é |a_max| = ω² · A.',
            options: [
              { id: 'a', text: '16 m/s²', isCorrect: true, whyWrongOrRight: 'Excelente! x\'(t) = -8 sen(2t - π/3) e x\'\'(t) = -16 cos(2t - π/3). O valor máximo é |-16| = 16 m/s².', howToThink: 'Deriva duas vezes a função posição para obter a aceleração.' },
              { id: 'b', text: '8 m/s²', isCorrect: false, whyWrongOrRight: '8 m/s é a velocidade máxima x\'(t), não a aceleração x\'\'(t).', howToThink: 'Aceleração requer a segunda derivada (ω² A = 2² × 4 = 16).' },
            ],
          },
          verification: {
            methodQuestion: 'Como demonstras geometricamente o enquadramento sen(x) < x < tg(x) para provar o limite notável?',
            methodCriteria: ['Comparar a área do triângulo interior, setor circular e triângulo exterior', 'Dividir por sen(x) e aplicar o Teorema das Funções Enquadradas (Confronto)'],
            whatIfQuestion: 'O que aconteceria à velocidade de um oscilador harmónico se duplicássemos a frequência ω?',
            whatIfAnswer: 'A velocidade máxima duplicaria (v_max = ωA) e a aceleração máxima quadruplicaria (a_max = ω²A).',
            ownWordsPrompt: 'Explica a relação entre o limite notável e a derivada da função seno:',
            keyIdeasToInclude: ['Taxa de variação', 'lim (sen h / h) = 1', '(sen x)\' = cos x'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Como é que os auscultadores de Cancelamento Ativo de Ruído (ANC) eliminam o barulho do motor de um avião?',
            scenario: 'Estás num voo ruidoso, ligas o botão do ANC e o som do motor desaparece quase por magia.',
            spark: 'O microfone capta a onda sonora do ruído e gera instantaneamente uma onda exatamente com a mesma frequência e amplitude, mas com uma desfasagem de 180° (π radianos): sen(x) + sen(x + π) = sen(x) - sen(x) = 0!',
          },
          whyItExists: {
            problemItSolves: 'Permite decompor, transmitir, filtrar e sintetizar qualquer sinal contínuo no universo (som, luz, ondas de rádio, sismos e sinais biomédicos).',
            realWorldContexts: [
              { area: 'Telecomunicações 5G e Wi-Fi', example: 'Modulação em Quadratura (QAM): usa ondas seno e cosseno defasadas para transmitir múltiplos gigabits por segundo.' },
              { area: 'Engenharia Eletrotécnica', example: 'Rede Elétrica de Corrente Alternada (AC 230V / 50Hz): a voltagem oscila 50 vezes por segundo como uma senoide perfeita.' },
              { area: 'Medicina e Cardiologia', example: 'Eletrocardiograma (ECG) e Ressonância Magnética (MRI): análise espetral de ondas biológicas.' },
            ],
            ahaQuote: 'Pelo Teorema de Fourier, qualquer som ou sinal no universo — da voz humana ao som de um violino — é apenas uma soma de ondas seno e cosseno puras!',
          },
          intuition: {
            headline: 'A Matemática Invisível que Move o Mundo Moderno',
            storyOrAnalogy: 'Toda a tecnologia sem fios, o streaming de áudio e a rede elétrica dependem da trigonometria. Quando falas ao telemóvel, o microfone regista uma onda de pressão. O processador decompõe essa onda em componentes de seno e cosseno (frequências), comprime os dados e envia-os como ondas eletromagnéticas.',
            keyTakeaway: 'A trigonometria não é sobre triângulos de papel; é a linguagem universal de todas as ondas e oscilações do universo.',
            visualMetaphor: 'Duas ondas na água que se encontram: se as cristas coincidirem, a onda dobra de tamanho; se a crista encontrar uma cava (oposição de fase), a água fica totalmente plana.',
          },
          predictionChallenge: {
            question: 'O que acontece ao som quando somas duas ondas acústicas idênticas com uma desfasagem de 180° (π radianos)?',
            options: [
              { id: 'a', label: 'Silêncio absoluto (interferência destrutiva total: sen(t) + sen(t + π) = 0)', isCorrect: true, explanationAfterTest: 'Exato! É este o princípio físico exato dos auscultadores com cancelamento de ruído!' },
              { id: 'b', label: 'O som fica duas vezes mais alto', isCorrect: false, explanationAfterTest: 'Duas vezes mais alto seria com desfasagem 0° (interferência construtiva).' },
            ],
            simulatorInstruction: 'Observa no simulador como sen(θ + 180°) tem exatamente o sinal oposto de sen(θ).',
          },
          discovery: {
            patternsObserved: [
              'Interferência Construtiva: sen(x) + sen(x) = 2 sen(x)',
              'Interferência Destrutiva: sen(x) + sen(x + π) = 0',
              'A potência média de um sinal AC depende do valor eficaz RMS = V_pico / √2',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: sem funções trigonométricas não existiria rádio, Wi-Fi, som digital nem eletricidade AC!',
          },
          formalization: {
            title: 'Análise Espectral e Modelação Harmónica',
            explanation: 'Equações de engenharia para ondas e sinais periódicos.',
            formulas: [
              { symbol: 'v(t) = V_max · sen(2πf · t + φ)', meaningInPlainPortuguese: 'Tensão alternada em função do tempo (f = frequência em Hertz)' },
              { symbol: 'V_rms = V_max / √2', meaningInPlainPortuguese: 'Tensão eficaz da rede elétrica (230V RMS equivale a ~325V de pico)' },
              { symbol: 'f(t) = ∑ [a_n cos(nωt) + b_n sen(nωt)]', meaningInPlainPortuguese: 'Série de Fourier: qualquer sinal periódico é uma soma de senos e cossenos' },
            ],
          },
          solvedExample: {
            problemStatement: 'A rede elétrica europeia fornece uma tensão eficaz V_rms = 230 V a uma frequência de 50 Hz. Qual é a expressão matemática da voltagem instantânea v(t) e qual a sua voltagem de pico?',
            steps: [
              { stepNumber: 1, title: 'Calcular a voltagem de pico V_max', mathExpression: 'V_max = V_rms × √2 = 230 × 1,414 ≈ 325,3 V', intuitiveWhy: 'A onda precisa de atingir 325V no pico para entregar a mesma energia térmica que 230V de corrente contínua.' },
              { stepNumber: 2, title: 'Calcular a frequência angular ω', mathExpression: 'ω = 2πf = 2π × 50 = 100π ≈ 314,16 rad/s', intuitiveWhy: '50 ciclos por segundo equivalem a 50 × 2π radianos por segundo.' },
              { stepNumber: 3, title: 'Escrever a equação temporal da tensão', mathExpression: 'v(t) = 325,3 · sen(100π t) Volts', intuitiveWhy: 'Modelação temporal completa da rede elétrica residencial.' },
            ],
            finalConclusion: 'A expressão é v(t) = 325,3 sen(100π t) V e a voltagem de pico é de aproximadamente 325 V.',
          },
          tryItYourself: {
            prompt: 'Se um sinal de rádio tem uma frequência de 100 MHz (100 milhões de oscilações por segundo), quantos radianos por segundo percorre a sua fase angular?',
            options: [
              { id: '1', text: '200π × 10⁶ rad/s (ω = 2πf = 2π × 10⁸)', isCorrect: true, whyWrongOrRight: 'Correto! ω = 2π × 100 × 10⁶ = 200π × 10⁶ ≈ 6,28 × 10⁸ rad/s.', howToThink: 'Aplica a fórmula ω = 2πf.' },
              { id: '2', text: '100 rad/s', isCorrect: false, whyWrongOrRight: 'Falta multiplicar por 2π e pela ordem de grandeza Mega (10⁶).', howToThink: 'Lembra-te do fator 2π para converter Hertz em rad/s.' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_trig_1',
              tier: 'Intermédio',
              question: 'Num circuito de corrente alternada com resistência e indutância, a corrente está desfasada da tensão por um ângulo φ = π/6. Qual é o Fator de Potência cos(φ)?',
              hint: 'cos(π/6) = √3/2 ≈ 0,866.',
              options: [
                { id: 'a', text: '0,866 (86,6% da energia é potência ativa útil)', isCorrect: true, whyWrongOrRight: 'Exato! cos(π/6) = √3/2 ≈ 0,866. O fator de potência mede a eficiência energética da instalação.', howToThink: 'Calcula o cosseno do ângulo de desfasamento.' },
                { id: 'b', text: '0,500', isCorrect: false, whyWrongOrRight: '0,500 é o seno sen(π/6), não o cosseno cos(π/6).', howToThink: 'O fator de potência é definido pelo cosseno.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Aplicação em Engenharia Acústica',
            problem: 'Um equalizador de áudio digital precisa de filtrar ruído de 50 Hz da rede elétrica sem afetar a voz do cantor. Porque é que usa filtros baseados em Transformada de Fourier com senos e cossenos?',
            strategyTip: 'A Transformada de Fourier isola frequências específicas sem distorcer as restantes.',
            options: [
              { id: 'a', text: 'Porque projeta o sinal no espaço de frequências e anula o coeficiente do harmónico de 50 Hz com precisão cirúrgica', isCorrect: true, whyWrongOrRight: 'Perfeito! A ortogonalidade das funções seno e cosseno permite isolar e eliminar uma frequência sem tocar nas vizinhas.', howToThink: 'Propriedade de ortogonalidade de Fourier.' },
              { id: 'b', text: 'Porque reduz o volume geral de todo o áudio a zero', isCorrect: false, whyWrongOrRight: 'O objetivo é filtrar seletivamente apenas a frequência indesejada.', howToThink: 'Filtros digitais atuam apenas na frequência-alvo.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a um estudante do secundário porque é que o Círculo Trigonométrico é tão útil na engenharia moderna?',
            methodCriteria: ['Transforma movimentos circulares em ondas temporais', 'Base de todas as transmissões de rádio, telecomunicações e corrente AC'],
            whatIfQuestion: 'O que aconteceria aos circuitos eletrónicos se a corrente elétrica fosse puramente contínua (DC) sem ondas senoidais?',
            whatIfAnswer: 'Os transformadores eletromagnéticos deixariam de funcionar (dependem de variação de fluxo magnético dΦ/dt) e o transporte de energia a longa distância seria inviável.',
            ownWordsPrompt: 'Resume a utilidade real da trigonometria além da geometria de triângulos:',
            keyIdeasToInclude: ['Ondas', 'Cancelamento de ruído', 'Série de Fourier', 'Frequência'],
          },
        },
      },
    },
  ],
};
