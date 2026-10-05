import { MathTopic } from '../../types/math';

export const complexTopic: MathTopic = {
  id: 'complexos',
  number: '04',
  title: 'Números Complexos',
  subtitle: 'Plano de Argand, forma algébrica, forma trigonométrica, potências e raízes',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Computação gráfica, circuitos elétricos AC, física quântica e processamento de radar.',
  subtopics: [
    {
      id: 'plano-argand',
      title: 'Plano de Argand e Rotações',
      shortDescription: 'Descobre porque é que multiplicar por i significa rodar 90 graus no plano 2D.',
      simulatorType: 'complex',
      simulatorDefaultPreset: 'argand',
      coreIdeaInOneSentence: 'Os números complexos dão aos números uma segunda dimensão: multiplicar é rodar e esticar!',
      progressionRoadmap: [
        { level: '6', summary: 'A seta mágica no mapa: rodar 90 graus para a esquerda com a letra i.' },
        { level: '10', summary: 'Mapa 2D com passos para a frente (Real) e passos para o lado (Imaginário).' },
        { level: '14', summary: 'Porque é que i² = -1: duas rotações de 90° perfazem uma meia-volta de 180° até ao -1.' },
        { level: '18', summary: 'Forma trigonométrica z = r cis(θ), Fórmula de De Moivre e raízes n-ésimas como polígonos regulares.' },
        { level: 'adulto', summary: 'Impedância em circuitos elétricos, computação gráfica e números imaginários na física real.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Se estás a olhar para a frente e dás duas voltas de 90 graus para a esquerda, para onde ficas a olhar?',
            scenario: 'Estás num jogo de pistas a seguir setas no chão.',
            spark: 'Ficas a olhar exatamente para trás! É esse o segredo do número mágico i!',
          },
          whyItExists: {
            problemItSolves: 'Permite rodar desenhos e personagens em qualquer direção no ecrã.',
            realWorldContexts: [
              { area: 'Jogos de Vídeo', example: 'Fazer um carrinho rodar nas curvas da pista.' },
            ],
            ahaQuote: 'Multiplicar por i é dar uma ordem de: "Vira à esquerda 90 graus!"',
          },
          intuition: {
            headline: 'O Robô que Aprendeu a Virar à Esquerda',
            storyOrAnalogy: 'Na reta dos números normais só podemos andar para a frente (+) ou para trás (-). Mas os números complexos deram ao nosso robô a capacidade de olhar para o lado! Cada vez que o robô encontra a letra i, roda 90 graus para a esquerda. Uma vez vira para o lado; duas vezes (i × i) vira para trás (-1)!',
            keyTakeaway: 'O número imaginário i é uma máquina de fazer rotações de 90°.',
            visualMetaphor: 'Uma bússola que gira 90 graus a cada clique no botão.',
          },
          predictionChallenge: {
            question: 'O que acontece à seta no simulador quando clicas no botão "Multiplicar por i"?',
            options: [
              { id: 'a', label: 'Roda 90 graus no sentido contrário aos ponteiros do relógio', isCorrect: true, explanationAfterTest: 'Perfeito! A seta deu um salto de 90 graus perfeitos!' },
              { id: 'b', label: 'Fica com o dobro do tamanho', isCorrect: false, explanationAfterTest: 'O comprimento mantém-se igual, apenas a direção rodou.' },
            ],
            simulatorInstruction: 'Clica no botão "Multiplicar por i (Rodar +90°)" e observa a rotação da seta.',
          },
          discovery: {
            patternsObserved: [
              'Começar em +1 e multiplicar por i dá i (aponta para cima)',
              'Multiplicar por i outra vez dá -1 (aponta para trás)',
              'Multiplicar 4 vezes por i dá uma volta completa de 360° (volta ao +1)',
            ],
            ahaMoment: 'i elevado a 4 é igual a 1 porque 4 voltas de 90° completam um círculo!',
          },
          formalization: {
            title: 'A Rotação Mágica',
            explanation: 'Um número complexo tem duas partes: uma parte que anda no chão (Real) e uma parte que anda para o lado (Imaginária).',
            formulas: [
              { symbol: 'i · i = -1', meaningInPlainPortuguese: 'Duas rotações de 90° viram a seta ao contrário' },
              { symbol: 'z = a + bi', meaningInPlainPortuguese: 'a passos na horizontal e b passos na vertical' },
            ],
          },
          solvedExample: {
            problemStatement: 'Se começares no número 1 e clicares 2 vezes em "Multiplicar por i", onde vai parar a seta?',
            steps: [
              { stepNumber: 1, title: '1.ª rotação por i', mathExpression: '1 × i = i', intuitiveWhy: 'A seta aponta para cima (90°).' },
              { stepNumber: 2, title: '2.ª rotação por i', mathExpression: 'i × i = -1', intuitiveWhy: 'A seta aponta para trás (180°).' },
            ],
            finalConclusion: 'A seta vai parar ao número -1.',
          },
          tryItYourself: {
            prompt: 'Quantas vezes precisas de multiplicar por i para dar uma volta inteira de 360 graus e voltar ao início?',
            options: [
              { id: '1', text: '4 vezes (90° + 90° + 90° + 90° = 360°)', isCorrect: true, whyWrongOrRight: 'Correto! 4 rotações de 90° completam a volta inteira: i⁴ = 1.', howToThink: 'Divide 360 por 90.' },
              { id: '2', text: '2 vezes', isCorrect: false, whyWrongOrRight: '2 vezes são apenas 180° (vai para o -1).', howToThink: 'Precisas de 4 quartos de volta.' },
            ],
          },
          practiceExercises: [
            {
              id: 'comp_6_1',
              tier: 'Base',
              question: 'Se z = 3 + 2i, quantos passos dás no chão horizontal?',
              hint: 'Olha para o número sem a letra i.',
              options: [
                { id: 'a', text: '3 passos', isCorrect: true, whyWrongOrRight: 'Perfeito! A parte real (3) é a distância horizontal.', howToThink: 'A parte real indica os passos no chão.' },
                { id: 'b', text: '2 passos', isCorrect: false, whyWrongOrRight: '2 é a parte imaginária (passos verticais).', howToThink: 'O número colado ao i é a altura vertical.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio das Rotações',
            problem: 'Se um ponteiro aponta para a direita (+1) e roda 3 vezes por i, para onde fica a apontar?',
            strategyTip: '3 rotações de 90° = 270° (para baixo).',
            options: [
              { id: 'a', text: 'Para baixo (-i)', isCorrect: true, whyWrongOrRight: 'Exato! i³ = i² · i = (-1) · i = -i (aponta diretamente para baixo).', howToThink: '90° + 90° + 90° = 270° (semieixo imaginário negativo).' },
              { id: 'b', text: 'Para a direita (+1)', isCorrect: false, whyWrongOrRight: 'Precisarias de 4 rotações para voltar à direita.', howToThink: '3 rotações apontam para baixo.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a uma criança porque é que os números imaginários não são "inventados à toa"?',
            methodCriteria: ['Explicar que funcionam como coordenadas 2D', 'Mostrar que permitem rodar direções de forma simples'],
            whatIfQuestion: 'O que aconteceria se multiplicássemos por -i em vez de +i?',
            whatIfAnswer: 'A seta rodaria 90 graus no sentido dos ponteiros do relógio (para a direita).',
            ownWordsPrompt: 'Explica o que significa o i nos números complexos:',
            keyIdeasToInclude: ['Rotação de 90°', 'Duas dimensões', 'i² = -1'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Porque é que na escola primária diziam que a equação x² = -1 era impossível?',
            scenario: 'Com números reais normais, qualquer número ao quadrado é positivo: (+2)² = +4 e (-2)² = +4.',
            spark: 'Nenhum número real na reta horizontal pode ter quadrado negativo. Mas se saíres da reta e entrares no plano 2D, o número i resolve a equação perfeitamente!',
          },
          whyItExists: {
            problemItSolves: 'Permite resolver equações polinomiais completas e tratar grandezas que têm magnitude e direção em simultâneo.',
            realWorldContexts: [
              { area: 'Eletricidade', example: 'Representar corrente alternada onde a voltagem e a corrente têm desfasamento.' },
            ],
            ahaQuote: 'Os números reais vivem numa linha; os números complexos vivem num plano inteiro!',
          },
          intuition: {
            headline: 'O Plano de Argand: Parte Real e Parte Imaginária',
            storyOrAnalogy: 'Cada número complexo z = a + bi é um ponto com coordenadas (a, b) num mapa chamado Plano de Argand. O eixo horizontal é a reta dos números Reais (Re) e o eixo vertical é a reta dos números Imaginários (Im). A distância da origem ao ponto chama-se Módulo (|z| = √(a² + b²)) e o ângulo com a horizontal chama-se Argumento (θ).',
            keyTakeaway: 'Um número complexo reúne duas informações num único símbolo: distância (módulo) e ângulo (argumento).',
            visualMetaphor: 'Um vetor que tem um comprimento e uma direção de mira.',
          },
          predictionChallenge: {
            question: 'Se z = 3 + 4i, qual é a distância da origem ao ponto (o módulo |z|)?',
            options: [
              { id: 'a', label: '5 (pois √(3² + 4²) = √(9 + 16) = √25 = 5)', isCorrect: true, explanationAfterTest: 'Brilhante! É o clássico triângulo retângulo 3-4-5!' },
              { id: 'b', label: '7 (3 + 4)', isCorrect: false, explanationAfterTest: 'As distâncias calculam-se por Pitágoras, não somando diretamente as coordenadas!' },
            ],
            simulatorInstruction: 'Muda a parte real para 3 e a imaginária para 4 e confirma o módulo 5 no simulador.',
          },
          discovery: {
            patternsObserved: [
              'O módulo é sempre positivo: |z| ≥ 0',
              'Somar números complexos é somar vetores: (a + bi) + (c + di) = (a+c) + (b+d)i',
              'O conjugado z̄ = a - bi é o ponto refletido no espelho do eixo horizontal',
            ],
            ahaMoment: 'O conjugado z̄ tem exatamente o mesmo módulo e o ângulo oposto (-θ)!',
          },
          formalization: {
            title: 'Álgebra dos Números Complexos',
            explanation: 'Operações básicas na forma algébrica z = a + bi.',
            formulas: [
              { symbol: '|z| = √(a² + b²)', meaningInPlainPortuguese: 'Módulo (distância do ponto à origem)' },
              { symbol: 'z̄ = a - bi', meaningInPlainPortuguese: 'Conjugado de z (reflexão no eixo real)' },
              { symbol: 'z · z̄ = |z|²', meaningInPlainPortuguese: 'O produto de um complexo pelo seu conjugado dá um número real positivo' },
            ],
          },
          solvedExample: {
            problemStatement: 'Calcula o módulo e o conjugado do número complexo z = 1 + √3 i.',
            steps: [
              { stepNumber: 1, title: 'Calcular o módulo |z|', mathExpression: '|z| = √(1² + (√3)²) = √(1 + 3) = √4 = 2', intuitiveWhy: 'Aplicamos o Teorema de Pitágoras com a=1 e b=√3.' },
              { stepNumber: 2, title: 'Escrever o conjugado z̄', mathExpression: 'z̄ = 1 - √3 i', intuitiveWhy: 'Trocamos o sinal da parte imaginária.' },
            ],
            finalConclusion: 'O módulo é |z| = 2 e o conjugado é z̄ = 1 - √3 i.',
          },
          tryItYourself: {
            prompt: 'Qual é o resultado da multiplicação (2 + 3i) + (4 - i)?',
            options: [
              { id: '1', text: '6 + 2i (somamos 2+4=6 e 3i-i=2i)', isCorrect: true, whyWrongOrRight: 'Exato! Somam-se partes reais com partes reais e imaginárias com imaginárias.', howToThink: 'Agrupa os termos semelhantes.' },
              { id: '2', text: '6 + 4i', isCorrect: false, whyWrongOrRight: 'Atenção ao sinal: 3i + (-i) = 2i.', howToThink: '3 - 1 = 2.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_comp_1',
              tier: 'Base',
              question: 'Qual é a parte real e a parte imaginária de z = -5 + 7i?',
              hint: 'Re(z) é o número sem i; Im(z) é o coeficiente de i.',
              options: [
                { id: 'a', text: 'Re(z) = -5 e Im(z) = 7', isCorrect: true, whyWrongOrRight: 'Correto! Im(z) é o número real 7 (sem o i).', howToThink: 'Identifica os coeficientes a e b em a + bi.' },
                { id: 'b', text: 'Re(z) = 7 e Im(z) = -5', isCorrect: false, whyWrongOrRight: 'Trocaste a ordem das coordenadas.', howToThink: 'O termo independente é a parte real.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio do Módulo',
            problem: 'Se |z| = 10 e a parte real de z é a = 6, qual é o valor absoluto da parte imaginária |b|?',
            strategyTip: 'Usa a² + b² = |z|² ⇒ 6² + b² = 10².',
            options: [
              { id: 'a', text: '|b| = 8 (pois 36 + 64 = 100)', isCorrect: true, whyWrongOrRight: 'Excelente! b² = 100 - 36 = 64 ⇒ |b| = 8.', howToThink: 'Aplica a fórmula do módulo invertida.' },
              { id: 'b', text: '|b| = 4', isCorrect: false, whyWrongOrRight: '6² + 4² = 36 + 16 = 52 ≠ 100.', howToThink: '√64 = 8.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que dizemos que os números reais são um caso particular dos números complexos?',
            methodCriteria: ['Qualquer número real x pode ser escrito como x + 0i (parte imaginária nula)', 'O eixo real é uma reta dentro do plano complexo'],
            whatIfQuestion: 'O que acontece ao multiplicar qualquer complexo z por z̄?',
            whatIfAnswer: 'O resultado é sempre um número real puro não negativo igual ao quadrado do módulo (|z|²).',
            ownWordsPrompt: 'Explica o que representa o Plano de Argand:',
            keyIdeasToInclude: ['Eixo real', 'Eixo imaginário', 'Módulo', 'Argumento'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Como multiplicas dois números complexos sem fazer multiplicações longas com polinómios?',
            scenario: 'Na forma algébrica (a+bi)(c+di) = (ac - bd) + (ad + bc)i, as contas são trabalhosas.',
            spark: 'Na Forma Trigonométrica z = r cis(θ), a regra é mágica: multiplicam-se os módulos e somam-se os ângulos! z₁ · z₂ = (r₁ · r₂) cis(θ₁ + θ₂)!',
          },
          whyItExists: {
            problemItSolves: 'Transforma operações geométricas complexas de escala e rotação numa simples adição de ângulos.',
            realWorldContexts: [
              { area: 'Física Ondulatória', example: 'Fasores: somar ondas com diferentes fases somando números complexos.' },
              { area: 'Aeronáutica', example: 'Cálculo de perfis de asas através da Transformada Conforme de Joukowsky.' },
            ],
            ahaQuote: 'Multiplicar na forma trigonométrica é simplesmente: multiplicar comprimentos e somar ângulos!',
          },
          intuition: {
            headline: 'A Forma Trigonométrica e a Beleza das Rotações',
            storyOrAnalogy: 'Qualquer número complexo z pode ser escrito como z = r(cos θ + i sen θ) = r cis(θ), onde r = |z| é o raio e θ é o argumento. Quando multiplicas por um complexo de módulo 1 e ângulo α, o teu vetor não muda de tamanho: apenas roda um ângulo α! É por isso que multiplicar por i = 1 cis(π/2) faz rodar exatamente 90 graus.',
            keyTakeaway: 'A multiplicação complexa é a unificação perfeita entre esticar (módulo) e rodar (argumento).',
            visualMetaphor: 'Uma espiral onde cada passo multiplica o raio e avança um ângulo constante.',
          },
          predictionChallenge: {
            question: 'Se z₁ tem ângulo 30° e z₂ tem ângulo 45°, qual é o ângulo do produto z₁ · z₂?',
            options: [
              { id: 'a', label: '75° (30° + 45°)', isCorrect: true, explanationAfterTest: 'Perfeito! Na multiplicação de complexos os argumentos somam-se sempre!' },
              { id: 'b', label: '15° (45° - 30°)', isCorrect: false, explanationAfterTest: 'Subtrair ângulos é a regra da divisão (z₂ / z₁), não da multiplicação.' },
            ],
            simulatorInstruction: 'Lembra-te da regra de ouro: multiplicar = somar argumentos.',
          },
          discovery: {
            patternsObserved: [
              'Multiplicação: |z₁ · z₂| = |z₁| · |z₂| e arg(z₁ · z₂) = arg(z₁) + arg(z₂)',
              'Divisão: |z₁ / z₂| = |z₁| / |z₂| e arg(z₁ / z₂) = arg(z₁) - arg(z₂)',
              'Potência: zⁿ = rⁿ cis(n · θ) (Fórmula de De Moivre)',
            ],
            ahaMoment: 'Elevar ao quadrado é duplicar o ângulo; elevar ao cubo é triplicar o ângulo!',
          },
          formalization: {
            title: 'Fórmulas de De Moivre e Forma Polar',
            explanation: 'Relações fundamentais de trigonometria complexa.',
            formulas: [
              { symbol: 'z = r cis(θ) = r(cos θ + i sen θ)', meaningInPlainPortuguese: 'Forma trigonométrica de um número complexo' },
              { symbol: 'zⁿ = rⁿ cis(nθ)', meaningInPlainPortuguese: 'Fórmula de De Moivre para potências inteiras' },
              { symbol: 'z₁ / z₂ = (r₁ / r₂) cis(θ₁ - θ₂)', meaningInPlainPortuguese: 'Divisão na forma trigonométrica' },
            ],
          },
          solvedExample: {
            problemStatement: 'Dado z = 2 cis(π/6), calcula z³ na forma algébrica.',
            steps: [
              { stepNumber: 1, title: 'Aplicar a Fórmula de De Moivre', mathExpression: 'z³ = 2³ cis(3 × π/6) = 8 cis(3π/6) = 8 cis(π/2)', intuitiveWhy: 'Elevamos o módulo ao cubo (2³=8) e multiplicamos o ângulo por 3.' },
              { stepNumber: 2, title: 'Converter para a forma algébrica', mathExpression: '8 cis(π/2) = 8(cos(π/2) + i sen(π/2)) = 8(0 + 1i) = 8i', intuitiveWhy: 'Em π/2 o cosseno é 0 e o seno é 1.' },
            ],
            finalConclusion: 'z³ = 8i (um número imaginário puro).',
          },
          tryItYourself: {
            prompt: 'Se z = √2 cis(π/4), qual é o valor de z⁴?',
            options: [
              { id: '1', text: '-4 (pois (√2)⁴ cis(4 × π/4) = 4 cis(π) = 4(-1) = -4)', isCorrect: true, whyWrongOrRight: 'Exato! (√2)⁴ = 4 e 4 × π/4 = π. Como cis(π) = -1, o resultado é -4 (um número real negativo!).', howToThink: 'Aplica De Moivre: módulo à 4.ª potência e multiplica o ângulo por 4.' },
              { id: '2', text: '+4', isCorrect: false, whyWrongOrRight: 'O ângulo final é π (180°), onde o cosseno é -1, logo o resultado é negativo.', howToThink: 'cos(π) = -1.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_comp_1',
              tier: 'Intermédio',
              question: 'Qual é a forma trigonométrica do número complexo z = -1 + i?',
              hint: 'Módulo r = √((-1)² + 1²) = √2. O ponto (-1, 1) está no 2.º quadrante (θ = 3π/4).',
              options: [
                { id: 'a', text: '√2 cis(3π/4)', isCorrect: true, whyWrongOrRight: 'Perfeito! r = √2 e θ = π - π/4 = 3π/4.', howToThink: 'Calcula o módulo e identifica o ângulo no 2.º quadrante.' },
                { id: 'b', text: '√2 cis(π/4)', isCorrect: false, whyWrongOrRight: 'π/4 seria no 1.º quadrante (1 + i). Como Re(z) < 0, está no 2.º quadrante.', howToThink: 'Atenção aos sinais das coordenadas para escolher o quadrante.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte para o 12.º Ano',
            problem: 'As raízes cúbicas da unidade (raízes de z³ = 1) formam que figura geométrica no Plano de Argand?',
            strategyTip: 'Os módulos são todos 1 e os ângulos estão espaçados de 360°/3 = 120° (2π/3).',
            options: [
              { id: 'a', text: 'Um Triângulo Equilátero inscrito na circunferência unitária', isCorrect: true, whyWrongOrRight: 'Excelente! As n raízes de índice n dividem a circunferência em n partes iguais, formando sempre um polígono regular de n lados!', howToThink: 'As raízes n-ésimas formam polígonos regulares centrados na origem.' },
              { id: 'b', text: 'Um quadrado', isCorrect: false, whyWrongOrRight: 'Um quadrado é formado pelas raízes quartas (n = 4).', howToThink: 'n = 3 dá triângulo; n = 4 dá quadrado.' },
            ],
          },
          verification: {
            methodQuestion: 'Como passas da forma algébrica z = a + bi para a forma trigonométrica z = r cis(θ)?',
            methodCriteria: ['Calcular o módulo r = √(a² + b²)', 'Determinar o quadrante pelas coordenadas (a, b)', 'Calcular o argumento principal θ usando tg(θ) = b/a'],
            whatIfQuestion: 'O que acontece ao dividires dois números complexos que têm o mesmo argumento?',
            whatIfAnswer: 'O argumento da divisão é θ - θ = 0, logo o resultado é sempre um número real positivo puro.',
            ownWordsPrompt: 'Explica a Fórmula de De Moivre com as tuas palavras:',
            keyIdeasToInclude: ['Potência de complexos', 'Módulo rⁿ', 'Multiplicar argumento por n'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Como resolve o Exame Nacional questões com lugares geométricos no plano complexo como |z - 3 - 4i| ≤ 2?',
            scenario: 'Itens clássicos de geometria analítica disfarçada no universo dos números complexos.',
            spark: '|z - z₀| representa simplesmente a distância euclidiana entre o afixo de z e o afixo de z₀: |z - (3+4i)| ≤ 2 é um círculo fechado de centro (3, 4) e raio 2!',
          },
          whyItExists: {
            problemItSolves: 'Permite unificar a geometria analítica, álgebra linear e análise harmónica num único corpo formal elegante.',
            realWorldContexts: [
              { area: 'Física Quântica', example: 'A função de onda de Schrödinger ψ(x,t) é estritamente complexa (iℏ ∂ψ/∂t = Ĥψ).' },
              { area: 'Engenharia Eletrotécnica Avançada', example: 'Equações de Maxwell no domínio da frequência usando impedâncias complexas Z = R + jX.' },
            ],
            ahaQuote: 'A fórmula de Euler e^(iθ) = cos(θ) + i sen(θ) é a ponte que une a exponencial real à trigonometria!',
          },
          intuition: {
            headline: 'Raízes n-ésimas, Lugares Geométricos e Fórmula de Euler',
            storyOrAnalogy: 'A equação zⁿ = w tem exatamente n soluções distintas em ℂ, dadas por z_k = ⁿ√R cis((θ + 2kπ)/n) para k = 0, 1, ..., n-1. Geometricamente, os afixos destas raízes são os vértices de um polígono regular de n lados centrado na origem e inscrito numa circunferência de raio ⁿ√R. A condição |z - z₁| = |z - z₂| define a mediatriz do segmento [z₁ z₂].',
            keyTakeaway: 'Qualquer condição geométrica em ℝ² (círculo, mediatriz, coroa circular, semiplano) traduz-se numa equação modular com números complexos.',
            visualMetaphor: 'Um polígono regular perfeito a rodar dentro de uma circunferência no plano complexo.',
          },
          predictionChallenge: {
            question: 'Quantos vértices tem o polígono formado pelas raízes sextas (índice 6) de um número complexo w ≠ 0?',
            options: [
              { id: 'a', label: '6 vértices (um Hexágono Regular)', isCorrect: true, explanationAfterTest: 'Brilhante! As 6 raízes formam um hexágono regular com ângulos centrais de 2π/6 = π/3 (60°)!' },
              { id: 'b', label: '3 vértices', isCorrect: false, explanationAfterTest: 'Raízes de índice 6 têm exatamente 6 soluções distintas.' },
            ],
            simulatorInstruction: 'Ativa o polígono regular com n = 6 no simulador e repara na simetria perfeita.',
          },
          discovery: {
            patternsObserved: [
              '|z - z₀| = r: Circunferência de centro z₀ e raio r',
              '|z - z₁| = |z - z₂|: Mediatriz do segmento de reta que une os afixos de z₁ e z₂',
              'arg(z - z₀) = α: Semirreta com origem em z₀ (excluindo z₀) que faz ângulo α com o semieixo real positivo',
            ],
            ahaMoment: 'O módulo da diferença |z - w| é a distância euclidiana pura entre dois pontos no plano!',
          },
          formalization: {
            title: 'Formulário Oficial de Complexos (12.º Ano)',
            explanation: 'Fórmulas de raízes e lugares geométricos do IAVE.',
            formulas: [
              { symbol: 'z_k = ⁿ√r cis((θ + 2kπ)/n), k ∈ {0, 1, ..., n-1}', meaningInPlainPortuguese: 'Fórmula das raízes de índice n de um número complexo' },
              { symbol: '|z - z₀| ≤ r', meaningInPlainPortuguese: 'Círculo fechado (disco) de centro z₀ e raio r' },
              { symbol: '|z - z₁| = |z - z₂|', meaningInPlainPortuguese: 'Mediatriz do segmento [z₁, z₂]' },
              { symbol: 'e^(iθ) = cis(θ) = cos θ + i sen θ', meaningInPlainPortuguese: 'Identidade de Euler' },
            ],
            commonMistakes: [
              'Esquecer de colocar o centro na forma |z - z₀| (ex: em |z + 2 - i| o centro é z₀ = -2 + i, não +2 - i).',
              'Esquecer que a origem z₀ não pertence à semirreta definida por arg(z - z₀) = α.',
              'Trocar a ordem dos k ao calcular as raízes n-ésimas (k varia de 0 a n-1).',
            ],
          },
          solvedExample: {
            problemStatement: 'Item de Exame Nacional: No plano complexo, considera a condição |z - 2i| ≤ 3 ∧ Re(z) ≥ 0. Caracteriza geometricamente esta região e calcula a sua área exata.',
            steps: [
              { stepNumber: 1, title: 'Interpretar a condição |z - 2i| ≤ 3', mathExpression: 'Círculo de centro C(0, 2) e raio R = 3', intuitiveWhy: '|z - z₀| ≤ R com z₀ = 0 + 2i.' },
              { stepNumber: 2, title: 'Interpretar a condição Re(z) ≥ 0', mathExpression: 'Semiplano à direita do eixo imaginário (incluindo o eixo)', intuitiveWhy: 'Abcissas não negativas x ≥ 0.' },
              { stepNumber: 3, title: 'Calcular a interseção e a área', mathExpression: 'Área = (1/2) · π R² = (1/2) · π · 3² = 9π / 2', intuitiveWhy: 'A interseção é exatamente um semicírculo de raio 3.' },
            ],
            finalConclusion: 'A região é o semicírculo direito de centro (0, 2) e raio 3. A sua área é de 9π/2 unidades quadradas.',
          },
          tryItYourself: {
            prompt: 'Qual das seguintes condições define a mediatriz do segmento que une os pontos A(1, 0) e B(0, 3) no plano complexo?',
            options: [
              { id: '1', text: '|z - 1| = |z - 3i|', isCorrect: true, whyWrongOrRight: 'Exato! A distância ao afixo de 1 (|z - 1|) é igual à distância ao afixo de 3i (|z - 3i|).', howToThink: 'Usa a definição |z - z_A| = |z - z_B| com z_A = 1 e z_B = 3i.' },
              { id: '2', text: '|z + 1| = |z + 3i|', isCorrect: false, whyWrongOrRight: 'Essa condição seria a mediatriz entre -1 e -3i.', howToThink: 'A fórmula exige sinal negativo: |z - z₀|.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_comp_1',
              tier: 'Exame / Desafio',
              question: 'Seja w = 8 cis(π). Quais são as raízes cúbicas de w?',
              hint: 'Raio das raízes: ³√8 = 2. Ângulos: (π + 2kπ)/3 para k = 0, 1, 2.',
              options: [
                { id: 'a', text: 'z₀ = 2 cis(π/3), z₁ = 2 cis(π), z₂ = 2 cis(5π/3)', isCorrect: true, whyWrongOrRight: 'Perfeito! Para k=0: π/3; k=1: (π+2π)/3 = π; k=2: (π+4π)/3 = 5π/3. Formam um triângulo equilátero de raio 2.', howToThink: 'Aplica a fórmula das raízes cúbicas com k=0,1,2.' },
                { id: 'b', text: 'z = 2 cis(π/3)', isCorrect: false, whyWrongOrRight: 'Faltam as outras duas raízes (há sempre 3 raízes cúbicas!).', howToThink: 'Equações de grau 3 têm 3 raízes em ℂ.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'No plano complexo, o número z₁ = 1 + i é um dos vértices de um quadrado centrado na origem. Qual dos seguintes números complexos é outro vértice desse mesmo quadrado?',
            strategyTip: 'Os vértices de um quadrado centrado na origem obtêm-se multiplicando sucessivamente por i (rotação de 90° = π/2).',
            options: [
              { id: 'a', text: 'z₂ = i · z₁ = i(1 + i) = -1 + i', isCorrect: true, whyWrongOrRight: 'Excelente! Multiplicar por i roda 90° em torno da origem, gerando o vértice seguinte: -1 + i. Os 4 vértices são: 1+i, -1+i, -1-i e 1-i.', howToThink: 'Multiplica por i para obter o vértice consecutivo de um quadrado centrado na origem.' },
              { id: 'b', text: 'z₂ = 2 + 2i', isCorrect: false, whyWrongOrRight: 'Isso tem módulo diferente (está fora da circunferência do quadrado).', howToThink: 'O módulo de todos os vértices tem de ser igual.' },
            ],
          },
          verification: {
            methodQuestion: 'Como justificas analiticamente num exame que uma dada condição complexa define uma coroa circular?',
            methodCriteria: ['Identificar a forma r₁ ≤ |z - z₀| ≤ r₂', 'Indicar o centro z₀ e os raios interior r₁ e exterior r₂', 'Concluir que se trata da região entre duas circunferências concêntricas'],
            whatIfQuestion: 'O que aconteceria à soma de todas as raízes n-ésimas de qualquer número complexo?',
            whatIfAnswer: 'A soma de todas as n raízes é sempre igual a zero (∑ z_k = 0), porque o centro de gravidade do polígono regular coincide com a origem.',
            ownWordsPrompt: 'Explica a relação entre números complexos e lugares geométricos em ℝ²:',
            keyIdeasToInclude: ['Módulo = distância', 'Circunferências', 'Mediatrizes', 'Polígonos regulares'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Porque é que todos os engenheiros eletrotécnicos e programadores de gráficos 3D usam números complexos todos os dias?',
            scenario: 'Em circuitos elétricos reais com bobinas e condensadores, a corrente não está em fase com a voltagem.',
            spark: 'Usar senos e cossenos exigiria resolver equações diferenciais gigantescas. Com números complexos (Impedância Z = R + jX), a Lei de Ohm torna-se uma simples multiplicação V = Z · I!',
          },
          whyItExists: {
            problemItSolves: 'Transforma problemas diferenciais complicados de rotações e oscilações em álgebra simples de números 2D.',
            realWorldContexts: [
              { area: 'Engenharia Eletrotécnica', example: 'Impedância Complexa: a resistência real R dissipa calor; a reatância imaginária jX armazena energia em campos magnéticos.' },
              { area: 'Computação Gráfica e Videojogos', example: 'Quaterniões (extensão 4D dos complexos) para rodar a câmara 3D sem sofrer de Gimbal Lock.' },
              { area: 'Aeroespacial e Radar', example: 'Radar de Abertura Sintética (SAR): processamento de sinais em fase e quadratura (I/Q data).' },
            ],
            ahaQuote: 'Os números complexos não são imaginários na vida real: são a forma mais prática e elegante que a humanidade inventou para calcular rotações e circuitos!',
          },
          intuition: {
            headline: 'A Ferramenta Secreta dos Engenheiros',
            storyOrAnalogy: 'Imagina que tens de calcular a corrente num circuito com resistências, bobinas e condensadores. Cada componente altera a amplitude e atrasa ou adianta a fase da onda. Sem complexos, terias de somar senoides defasadas à mão. Com os números complexos, cada componente é uma impedância Z no plano de Argand: somam-se resistências em série como números normais e o resultado dá imediatamente a amplitude e o desfasamento!',
            keyTakeaway: 'O termo "imaginário" foi um acidente histórico infeliz de Descartes; são tão reais e físicos como os números negativos.',
            visualMetaphor: 'Um vetor 2D giratório (fasor) cuja projeção na vida real é a voltagem que medes com o voltímetro.',
          },
          predictionChallenge: {
            question: 'Num circuito elétrico, se a impedância for puramente imaginária (Z = 5i ohms, uma bobina ideal), qual é o desfasamento entre a tensão e a corrente?',
            options: [
              { id: 'a', label: '90 graus (π/2 radianos), pois arg(5i) = 90°', isCorrect: true, explanationAfterTest: 'Exato! A voltagem atinge o pico um quarto de ciclo antes da corrente!' },
              { id: 'b', label: '0 graus (em fase)', isCorrect: false, explanationAfterTest: '0 graus seria uma resistência pura real (sem bobina).' },
            ],
            simulatorInstruction: 'Observa que qualquer número imaginário puro positivo tem argumento 90°.',
          },
          discovery: {
            patternsObserved: [
              'Resistência R: vive no eixo real (dissipa potência real em Watts)',
              'Reatância X: vive no eixo imaginário (potência reativa em VAr)',
              'Impedância Total: |Z| = √(R² + X²) é a oposição total à corrente',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: os complexos simplificam cálculos que de outra forma seriam pesadelos trigonométricos!',
          },
          formalization: {
            title: 'Equações de Fasores e Impedância',
            explanation: 'Aplicação dos números complexos na engenharia de sistemas.',
            formulas: [
              { symbol: 'V = Z · I', meaningInPlainPortuguese: 'Lei de Ohm Generalizada em Corrente Alternada' },
              { symbol: 'Z = R + jX', meaningInPlainPortuguese: 'Impedância = Resistência + j · Reatância (engenharia usa j em vez de i)' },
              { symbol: 'S = P + jQ', meaningInPlainPortuguese: 'Potência Aparente = Potência Ativa (Watts) + j · Potência Reativa (VAr)' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um motor elétrico tem uma resistência interna R = 4 Ω e uma reatância indutiva X = 3 Ω. Se aplicarmos uma tensão V = 230 V, qual é a impedância total do motor e a corrente I consumida?',
            steps: [
              { stepNumber: 1, title: 'Escrever a impedância na forma complexa', mathExpression: 'Z = 4 + 3j Ω', intuitiveWhy: 'Parte real 4 e parte imaginária 3.' },
              { stepNumber: 2, title: 'Calcular o módulo da impedância |Z|', mathExpression: '|Z| = √(4² + 3²) = √(16 + 9) = √25 = 5 Ω', intuitiveWhy: 'A oposição total do motor à corrente é de 5 Ohms.' },
              { stepNumber: 3, title: 'Calcular a corrente eficaz I', mathExpression: 'I = V / |Z| = 230 / 5 = 46 A', intuitiveWhy: 'Lei de Ohm com o módulo da impedância.' },
              { stepNumber: 4, title: 'Calcular o ângulo de desfasamento', mathExpression: 'θ = arctg(3/4) ≈ 36,87° (cos θ = 0,80)', intuitiveWhy: 'O fator de potência do motor é 0,80.' },
            ],
            finalConclusion: 'A impedância é de 5 Ω, o motor consome 46 A e a corrente está atrasada 36,9° em relação à tensão.',
          },
          tryItYourself: {
            prompt: 'Se um circuito tem uma resistência de 6 Ω e uma reatância capacitiva de -8 Ω (Z = 6 - 8j), qual é o módulo total da impedância |Z|?',
            options: [
              { id: '1', text: '10 Ω (√(6² + (-8)²) = √(36 + 64) = √100 = 10)', isCorrect: true, whyWrongOrRight: 'Correto! Triângulo pitagórico 6-8-10.', howToThink: 'Calcula a raiz da soma dos quadrados.' },
              { id: '2', text: '2 Ω (8 - 6)', isCorrect: false, whyWrongOrRight: 'As impedâncias combinam-se geometricamente no plano, não por subtração direta!', howToThink: 'Usa sempre o módulo complexo √(R² + X²).' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_comp_1',
              tier: 'Intermédio',
              question: 'Porque é que os programadores de motores de jogo como Unreal Engine e Unity usam números hipercomplexos (quaterniões com i, j, k) para rotações de câmaras 3D?',
              hint: 'Evita bloqueios angulares quando dois eixos se alinham.',
              options: [
                { id: 'a', text: 'Evitam o fenómeno de Gimbal Lock e permitem interpolações suaves de rotação (SLERP)', isCorrect: true, whyWrongOrRight: 'Exato! Os ângulos de Euler falham a 90°, enquanto a álgebra de complexos 4D garante rotações suaves sem descontinuidades.', howToThink: 'Vantagem computacional de rotações com números complexos.' },
                { id: 'b', text: 'Porque usam menos memória que um único número real', isCorrect: false, whyWrongOrRight: 'Um quaternião usa 4 números reais de memória.', howToThink: 'A vantagem é matemática e geométrica, não de compressão.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Caso de Estudo de Engenharia',
            problem: 'Uma fábrica consome 80 kW de potência ativa e 60 kVAr de potência reativa indutiva. Qual é a potência aparente total |S| contratada à rede elétrica e o fator de potência cos(φ)?',
            strategyTip: 'S = 80 + 60j. |S| = √(80² + 60²). cos(φ) = P / |S|.',
            options: [
              { id: 'a', text: '|S| = 100 kVA e Fator de Potência = 0,80 (80/100)', isCorrect: true, whyWrongOrRight: 'Perfeito! Triângulo de potências: |S| = √(6400 + 3600) = 100 kVA. Fator de potência = 80/100 = 0,80.', howToThink: 'Aplicação direta do triângulo de potências complexas.' },
              { id: 'b', text: '|S| = 140 kVA', isCorrect: false, whyWrongOrRight: '140 seria a soma linear 80 + 60, ignorando a defasagem perpendicular de 90° entre potência ativa e reativa.', howToThink: 'A potência reativa está em quadratura (eixo imaginário).' },
            ],
          },
          verification: {
            methodQuestion: 'Como desmistificarias o termo "número imaginário" para alguém que acha que a matemática inventa coisas sem sentido?',
            methodCriteria: ['Explicar a analogia com os números negativos (que também foram considerados "absurdos" no passado)', 'Demonstrar que representam coordenadas 2D e rotações físicas reais em eletrónica'],
            whatIfQuestion: 'O que aconteceria à engenharia de telecomunicações se fôssemos proibidos de usar números complexos?',
            whatIfAnswer: 'Teríamos de resolver sistemas gigantescos de equações diferenciais com senos e cossenos, tornando o desenvolvimento de modems, 5G e processadores muito mais lento e ineficiente.',
            ownWordsPrompt: 'Resume a utilidade dos números complexos no mundo moderno:',
            keyIdeasToInclude: ['Impedância', 'Rotações', 'Simplificação de equações', 'Fasores'],
          },
        },
      },
    },
  ],
};
