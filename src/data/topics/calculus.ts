import { MathTopic } from '../../types/math';

export const calculusTopic: MathTopic = {
  id: 'calculo-diferencial',
  number: '07',
  title: 'Cálculo Diferencial',
  subtitle: 'Taxas de variação instantânea, retas tangentes, Teorema de Bolzano-Cauchy, Lagrange e otimização',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Otimização de rotas aeroespaciais, machine learning (gradient descent), finanças quantitativas e aerodinâmica.',
  subtopics: [
    {
      id: 'taxa-variacao-derivada',
      title: 'Taxa de Variação Instantânea e Reta Tangente',
      shortDescription: 'Como passar da velocidade média de uma viagem à velocidade exata num milissegundo pelo limite da secante.',
      simulatorType: 'derivatives',
      simulatorDefaultPreset: 'cubic',
      coreIdeaInOneSentence: 'A derivada num ponto é o limite da taxa média de variação quando o intervalo de tempo tende para zero.',
      progressionRoadmap: [
        { level: '6', summary: 'A Montanha-Russa e a seta da velocidade instantânea.' },
        { level: '10', summary: 'Velocidade média (Δs/Δt) vs. o radar da polícia num segundo exato.' },
        { level: '14', summary: 'Declive da secante a aproximar-se da tangente: m = lim (f(a+h)-f(a))/h.' },
        { level: '18', summary: 'Definição formal de diferenciabilidade, reta tangente y = f\'(x₀)(x-x₀)+f(x₀) e problemas de exame.' },
        { level: 'adulto', summary: 'Algoritmos de Gradient Descent em Inteligência Artificial e otimização de custos.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Se atirares um carrinho por uma rampa abaixo, como sabes a direção para onde ele vai apontar num único segundo?',
            scenario: 'O carrinho está a descer uma curva rápida na montanha mágica.',
            spark: 'Se tirares uma foto instantânea com o teu telemóvel, o carrinho está colado a uma linha reta invisível que aponta a sua direção!',
          },
          whyItExists: {
            problemItSolves: 'Permite saber para onde qualquer coisa rápida vai no instante seguinte.',
            realWorldContexts: [
              { area: 'Pistas de Carros', example: 'Garantir que as curvas das pistas não fazem os carros sair da estrada.' },
            ],
            ahaQuote: 'A direção muda a cada passo que dás!',
          },
          intuition: {
            headline: 'O Feixe de Luz Mágico',
            storyOrAnalogy: 'Imagina que o teu carrinho tem um laser muito potente nas rodas. Em cada segundo, o laser ilumina uma reta que toca no chão exatamente no ponto onde estás. Essa reta é a Tangente!',
            keyTakeaway: 'A inclinação dessa linha no instante exato chama-se Derivada!',
            visualMetaphor: 'Um raio de laser a raspar na curva sem a furar.',
          },
          predictionChallenge: {
            question: 'O que acontece à reta do laser quando o carrinho chega ao topo plano da colina?',
            options: [
              { id: 'a', label: 'Fica perfeitamente horizontal (inclinação 0)', isCorrect: true, explanationAfterTest: 'Perfeito! No cimo da colina não estás a subir nem a descer, a inclinação é 0!' },
              { id: 'b', label: 'Aponta para o céu a 90 graus', isCorrect: false, explanationAfterTest: 'Isso seria se estivesses a voar a direito como um foguetão!' },
            ],
            simulatorInstruction: 'Arrasta o ponto para o topo da curva no simulador e repara na linha tangente horizontal.',
          },
          discovery: {
            patternsObserved: [
              'A subir: a linha laser aponta para cima (+)',
              'No ponto mais alto: a linha fica direita e plana (0)',
              'A descer: a linha aponta para baixo (-)',
            ],
            ahaMoment: 'A inclinação dá-nos o sentido do movimento em cada fração de segundo!',
          },
          formalization: {
            title: 'Sinal da Inclinação',
            explanation: 'O sinal da derivada revela instantaneamente se estamos a subir, a descer ou a descansar no cimo.',
            formulas: [
              { symbol: "f'(x) > 0", meaningInPlainPortuguese: 'A subir (crescente)' },
              { symbol: "f'(x) = 0", meaningInPlainPortuguese: 'No topo ou no fundo (ponto de viragem)' },
              { symbol: "f'(x) < 0", meaningInPlainPortuguese: 'A descer (decrescente)' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um ciclista sobe uma colina, atinge o ponto mais alto e começa a descer. Em que momento a sua subida é nula?',
            steps: [
              { stepNumber: 1, title: 'Início', mathExpression: 'Subida', intuitiveWhy: 'Durante a subida ganha altitude.' },
              { stepNumber: 2, title: 'Topo', mathExpression: 'Pico', intuitiveWhy: 'No cimo da colina a taxa de subida é zero por um instante.' },
              { stepNumber: 3, title: 'Descida', mathExpression: 'Descida', intuitiveWhy: 'Começa a descer e perde altitude.' },
            ],
            finalConclusion: 'A taxa de subida é zero exatamente no cimo da colina.',
          },
          tryItYourself: {
            prompt: 'Se uma bola sobe no ar e atinge a altura máxima antes de cair, qual é a velocidade da bola nesse instante?',
            options: [
              { id: '1', text: 'Zero (0 m/s)', isCorrect: true, whyWrongOrRight: 'Muito bem! No ponto de inversão a velocidade anula-se.', howToThink: 'Para mudar de sentido, tem de passar pelo zero.' },
              { id: '2', text: 'Máxima', isCorrect: false, whyWrongOrRight: 'A velocidade máxima acontece no lançamento ou antes do impacto!', howToThink: 'No cimo ela pára momentaneamente.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Base',
              question: 'Se um avião voa em linha reta horizontal a 10 km de altitude, qual é a taxa de variação da sua altitude?',
              hint: 'A altitude varia ou mantém-se constante?',
              options: [
                { id: 'a', text: 'Zero (0)', isCorrect: true, whyWrongOrRight: 'Correto! Altitude constante significa taxa de variação nula.', howToThink: 'Sem mudança na vertical, derivada = 0.' },
                { id: 'b', text: '10', isCorrect: false, whyWrongOrRight: '10 é a altitude, não a sua taxa de mudança!', howToThink: 'Taxa de variação mede variação por unidade de tempo.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio Intuitivo',
            problem: 'Numa montanha com dois picos e um vale no meio, quantos sítios têm inclinação nula?',
            strategyTip: 'Conta quantos topos e vales existem no caminho.',
            options: [
              { id: 'a', text: '3 sítios (2 topos e 1 vale)', isCorrect: true, whyWrongOrRight: 'Exato! Cada extremo local tem inclinação zero.', howToThink: 'Cada ponto alto ou baixo tem reta tangente horizontal.' },
              { id: 'b', text: 'Apenas 1', isCorrect: false, whyWrongOrRight: 'Tanto os dois topos como o vale têm derivada zero.', howToThink: 'Não esqueças os vales.' },
            ],
          },
          verification: {
            methodQuestion: 'Como verificas onde a inclinação é horizontal?',
            methodCriteria: ['Procurar pontos onde f\'(x) = 0', 'Verificar se é topo (máximo) ou vale (mínimo)'],
            whatIfQuestion: 'O que aconteceria se a inclinação fosse sempre positiva?',
            whatIfAnswer: 'A função nunca pararia de subir e nunca teria picos nem vales!',
            ownWordsPrompt: 'Explica com as tuas palavras o que é uma reta tangente.',
            keyIdeasToInclude: ['Toca na curva num ponto', 'Mostra a direção instantânea', 'Tem o declive da derivada'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Se fizeste 120 km numa hora de autoestrada, porque é que levaste uma multa de excesso de velocidade?',
            scenario: 'A tua velocidade média foi 120 km/h, mas o radar apanhou-te a 145 km/h.',
            spark: 'A velocidade média mede o tempo todo; o radar mede a velocidade num milissegundo: a Derivada!',
          },
          whyItExists: {
            problemItSolves: 'Permite medir ritmos instantâneos que mudam a cada segundo.',
            realWorldContexts: [
              { area: 'Radares de Trânsito', example: 'Medir a velocidade exata num intervalo de centímetros usando laser.' },
            ],
            ahaQuote: 'A média esconde os picos; a derivada revela o instante!',
          },
          intuition: {
            headline: 'Encurtando o Tempo até quase Zero',
            storyOrAnalogy: 'A velocidade média é Δdistância / Δtempo. Se medires durante 1 hora, obténs a média. Se medires durante 1 segundo, fica mais preciso. Se medires num intervalo de 0,0001 segundos, obténs a velocidade instantânea!',
            keyTakeaway: 'A derivada é a taxa média de variação num intervalo de tempo que encolhe até zero.',
            visualMetaphor: 'Fazer zoom contínuo num velocímetro analógico.',
          },
          predictionChallenge: {
            question: 'Se aproximares dois pontos A e B numa curva até ficarem quase no mesmo pixel, o que acontece à linha que os une?',
            options: [
              { id: 'a', label: 'Transforma-se na reta tangente exata ao ponto', isCorrect: true, explanationAfterTest: 'Correto! A secante converge para a tangente!' },
              { id: 'b', label: 'Desaparece completamente', isCorrect: false, explanationAfterTest: 'A reta continua a existir com o declive limite!' },
            ],
            simulatorInstruction: 'Reduz o valor de h para 0,01 no simulador e repara na convergência.',
          },
          discovery: {
            patternsObserved: [
              'Intervalo grande (h = 2): secante corta a curva em dois sítios distantes',
              'Intervalo pequeno (h = 0.01): secante encosta à curva e torna-se tangente',
              'O declive limite é a derivada f\'(a)',
            ],
            ahaMoment: 'A tangente é apenas a secante quando os dois pontos se tocam!',
          },
          formalization: {
            title: 'Taxa Média vs. Instantânea',
            explanation: 'A taxa média de variação calcula-se por quociente. A derivada é o limite desse quociente.',
            formulas: [
              { symbol: 'TMV = \\frac{\\Delta y}{\\Delta x}', meaningInPlainPortuguese: 'Taxa média num intervalo [a, b]' },
              { symbol: "f'(a) = \\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x}", meaningInPlainPortuguese: 'Taxa instantânea no ponto a' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um carro percorre s(t) = t² metros. Qual é a velocidade média entre t=1 e t=3 e a velocidade instantânea em t=2?',
            steps: [
              { stepNumber: 1, title: 'Velocidade Média', mathExpression: 'TMV = [s(3) - s(1)] / (3 - 1) = (9 - 1) / 2 = 4 m/s', intuitiveWhy: 'Dividimos o espaço percorrido pelo tempo decorrido.' },
              { stepNumber: 2, title: 'Velocidade Instantânea', mathExpression: "s'(t) = 2t \\implies s'(2) = 2(2) = 4 m/s", intuitiveWhy: 'Usamos a derivada para saber a velocidade no instante exato t = 2.' },
            ],
            finalConclusion: 'A velocidade instantânea em t=2 é 4 m/s.',
          },
          tryItYourself: {
            prompt: 'Se f(x) = 3x + 2, qual é a taxa de variação instantânea em qualquer ponto?',
            options: [
              { id: '1', text: 'Sempre 3 (pois é uma reta com inclinação constante)', isCorrect: true, whyWrongOrRight: 'Muito bem! Numa reta o declive é constante em todos os pontos.', howToThink: 'A derivada de mx+b é sempre m.' },
              { id: '2', text: 'Varia com x', isCorrect: false, whyWrongOrRight: 'Como o gráfico é uma reta perfeita, a inclinação nunca muda.', howToThink: 'Reta = declive constante.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Base',
              question: 'Se a derivada de uma função é positiva em todo o lado, o que podes dizer do gráfico?',
              hint: 'Inclinação positiva significa subida.',
              options: [
                { id: 'a', text: 'O gráfico está sempre a subir da esquerda para a direita', isCorrect: true, whyWrongOrRight: 'Exato! É uma função estritamente crescente.', howToThink: "f'(x) > 0 significa crescimento contínuo." },
                { id: 'b', text: 'O gráfico tem topos e vales', isCorrect: false, whyWrongOrRight: 'Para ter topos teria de ter derivada nula.', howToThink: 'Derivada sempre positiva = sempre a subir.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio de Raciocínio',
            problem: 'Se um comboio arranca e a sua aceleração é positiva, a sua velocidade está a:',
            strategyTip: 'A aceleração é a derivada da velocidade.',
            options: [
              { id: 'a', text: 'Aumentar', isCorrect: true, whyWrongOrRight: 'Correto! Derivada positiva da velocidade significa aumento da velocidade.', howToThink: 'Aceleração = taxa de variação da velocidade.' },
              { id: 'b', text: 'Diminuir', isCorrect: false, whyWrongOrRight: 'Diminuir seria se a aceleração fosse negativa (travagem).', howToThink: 'Aceleração positiva = velocidade a crescer.' },
            ],
          },
          verification: {
            methodQuestion: 'Qual é a diferença entre velocidade média e instantânea?',
            methodCriteria: ['Velocidade média precisa de dois instantes de tempo', 'Velocidade instantânea é o limite num único ponto'],
            whatIfQuestion: 'O que aconteceria se a taxa de variação fosse zero durante 1 hora?',
            whatIfAnswer: 'A posição não mudaria em nada, o objeto estaria parado.',
            ownWordsPrompt: 'Explica o conceito de taxa média de variação.',
            keyIdeasToInclude: ['Δy dividido por Δx', 'Declive da secante', 'Variação por unidade'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Como calculas o declive de uma curva se a fórmula m = (y₂ - y₁) / (x₂ - x₁) só funciona para retas?',
            scenario: 'Tens a parábola y = x² e queres o declive da tangente no ponto (2, 4).',
            spark: 'Usas um ponto móvel (2+h, (2+h)²) e fazes h tender para zero!',
          },
          whyItExists: {
            problemItSolves: 'Permite aplicar a álgebra de retas a curvas não-lineares arbitrárias.',
            realWorldContexts: [
              { area: 'Física Clássica', example: 'Dedução da mecânica de Newton (F = dp/dt).' },
            ],
            ahaQuote: 'Ao microscópio, qualquer curva suave parece uma reta!',
          },
          intuition: {
            headline: 'O Princípio da Linearidade Local',
            storyOrAnalogy: 'Se fizeres zoom infinito numa curva de uma função diferenciável no ecrã de uma calculadora gráfica, ela deixa de parecer curva e parece uma reta com declive m = f\'(x₀).',
            keyTakeaway: 'A derivada é o declive da melhor aproximação linear da curva em torno do ponto.',
            visualMetaphor: 'Fazer zoom máximo no Google Maps até a estrada em curva parecer um segmento reto.',
          },
          predictionChallenge: {
            question: 'Calculando o quociente [ (2+h)² - 2² ] / h = [ 4 + 4h + h² - 4 ] / h = [ 4h + h² ] / h = 4 + h. Quando h → 0, o declive é:',
            options: [
              { id: 'a', label: '4', isCorrect: true, explanationAfterTest: 'Perfeito! f\'(2) = 4!' },
              { id: 'b', label: '0', isCorrect: false, explanationAfterTest: 'O 4 não desaparece quando h tende para 0.' },
            ],
            simulatorInstruction: 'Define x = 2 e move o slider de aproximação h para 0.',
          },
          discovery: {
            patternsObserved: [
              'Para f(x) = x², f\'(x) = 2x',
              'Em x = 2: declive da tangente = 4',
              'Em x = 3: declive da tangente = 6',
            ],
            ahaMoment: 'A regra da potência (xⁿ)\' = n xⁿ⁻¹ resume este processo algébrico em segundos!',
          },
          formalization: {
            title: 'Definição Algébrica de Derivada',
            explanation: 'O limite do quociente de Newton quando o incremento h se anula.',
            formulas: [
              { symbol: "f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0+h) - f(x_0)}{h}", meaningInPlainPortuguese: 'Derivada num ponto x₀' },
              { symbol: "(x^n)' = n x^{n-1}", meaningInPlainPortuguese: 'Regra de derivação de potências' },
            ],
          },
          solvedExample: {
            problemStatement: 'Determina a equação da reta tangente ao gráfico de f(x) = x² no ponto de abcissa x = 3.',
            steps: [
              { stepNumber: 1, title: 'Calcular a ordenada do ponto', mathExpression: 'y_0 = f(3) = 3^2 = 9', intuitiveWhy: 'O ponto de tangência é P(3, 9).' },
              { stepNumber: 2, title: 'Calcular o declive da tangente', mathExpression: "m = f'(3) = 2(3) = 6", intuitiveWhy: 'A derivada dá o declive m = 6.' },
              { stepNumber: 3, title: 'Equação da reta ponto-declive', mathExpression: 'y - 9 = 6(x - 3) \\iff y = 6x - 18 + 9 \\iff y = 6x - 9', intuitiveWhy: 'Substituímos o ponto e o declive na equação da reta.' },
            ],
            finalConclusion: 'A equação da reta tangente é y = 6x - 9.',
          },
          tryItYourself: {
            prompt: 'Qual é a derivada de f(x) = 5x³?',
            options: [
              { id: '1', text: "f'(x) = 15x²", isCorrect: true, whyWrongOrRight: 'Excelente! (5x³)\' = 5 × 3x² = 15x².', howToThink: 'Multiplica o coeficiente pelo expoente e subtrai 1 ao expoente.' },
              { id: '2', text: "f'(x) = 5x²", isCorrect: false, whyWrongOrRight: 'Esqueceste-te de multiplicar pelo expoente 3.', howToThink: 'Regra: (a xⁿ)\' = a · n · xⁿ⁻¹.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Intermédio',
              question: 'Em que ponto da parábola f(x) = x² - 4x a reta tangente é horizontal (declive 0)?',
              hint: "Calcula f'(x) e iguala a 0.",
              options: [
                { id: 'a', text: 'x = 2', isCorrect: true, whyWrongOrRight: "Muito bem! f'(x) = 2x - 4. Igualando a zero: 2x - 4 = 0 => x = 2.", howToThink: 'Tangente horizontal = derivada nula.' },
                { id: 'b', text: 'x = 4', isCorrect: false, whyWrongOrRight: 'Em x = 4, f\'(4) = 4 ≠ 0.', howToThink: 'Resolve 2x - 4 = 0.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte 3.º Ciclo / Secundário',
            problem: 'Se f(x) = -x² + 6x, qual é o valor máximo atingido pela função?',
            strategyTip: 'O vértice / máximo ocorre onde a derivada se anula.',
            options: [
              { id: 'a', text: '9 (em x = 3)', isCorrect: true, whyWrongOrRight: "Correto! f'(x) = -2x + 6 = 0 => x = 3. f(3) = -9 + 18 = 9.", howToThink: 'Encontra o ponto crítico e calcula a imagem f(3).' },
              { id: 'b', text: '6', isCorrect: false, whyWrongOrRight: '6 é o coeficiente, mas a imagem no vértice é 9.', howToThink: 'f(3) = -(3)² + 6(3) = 9.' },
            ],
          },
          verification: {
            methodQuestion: 'Como calculas a equação da reta tangente a uma curva?',
            methodCriteria: ['Calcular o ponto (x₀, f(x₀))', 'Calcular a derivada f\'(x₀)', 'Aplicar y - y₀ = m(x - x₀)'],
            whatIfQuestion: 'O que significa se f\'(x₀) for negativo?',
            whatIfAnswer: 'A reta tangente é decrescente e a função está a diminuir na vizinhança do ponto.',
            ownWordsPrompt: 'Explica o significado geométrico da derivada.',
            keyIdeasToInclude: ['Declive da reta tangente', 'Taxa de variação no ponto', 'Linearização local'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Porque é que a diferenciabilidade é uma condição mais forte do que a continuidade e como cai isso no Exame?',
            scenario: 'A função f(x) = |x| é contínua em x=0 mas não é derivável em x=0 (ponto anguloso).',
            spark: 'No Exame Nacional, a existência de derivadas laterais diferentes f\'(0⁺) ≠ f\'(0⁻) é um clássico de 20 pontos!',
          },
          whyItExists: {
            problemItSolves: 'Fundamento axiomático do Cálculo Diferencial, Teoremas Fundamentais (Rolle, Lagrange, Cauchy) e Otimização.',
            realWorldContexts: [
              { area: 'Exame Nacional & Engenharia', example: 'Cálculo de assíntotas oblíquas, pontos de inflexão e problemas de modelação com parâmetros.' },
            ],
            ahaQuote: 'Diferenciabilidade implica continuidade, mas o recíproco não é verdadeiro!',
          },
          intuition: {
            headline: 'Rigor Topológico e Cálculo em ℝ',
            storyOrAnalogy: 'Uma função ser contínua significa que não se parte. Ser diferenciável significa que, além de não se partir, é perfeitamente suave, sem bicos nem cantos pontiagudos onde a reta tangente ficaria indecisa.',
            keyTakeaway: 'Diferenciabilidade exige a existência e finitude do limite bilateral do quociente de Newton.',
            visualMetaphor: 'Uma curva sem vincos ou vértices angulosos.',
          },
          predictionChallenge: {
            question: 'Se f é diferenciável em ℝ e f(1)=3, f(5)=11, o Teorema de Lagrange garante a existência de c ∈ ]1, 5[ com f\'(c) igual a:',
            options: [
              { id: 'a', label: "f'(c) = (11 - 3) / (5 - 1) = 8 / 4 = 2", isCorrect: true, explanationAfterTest: 'Correto! Pelo Teorema de Lagrange (TMT), f\'(c) = (f(b)-f(a))/(b-a) = 2!' },
              { id: 'b', label: "f'(c) = 0", isCorrect: false, explanationAfterTest: '0 seria o Teorema de Rolle se f(a) = f(b).' },
            ],
            simulatorInstruction: 'Visualiza a reta secante a unir (1, 3) e (5, 11) com declive 2.',
          },
          discovery: {
            patternsObserved: [
              'Teorema de Rolle: se f(a)=f(b) ⇒ existe c com f\'(c)=0',
              'Teorema de Lagrange: existe c onde a tangente é paralela à secante',
              'Monotonia e Segunda Derivada: f\'\'(x)>0 indica concavidade voltada para cima',
            ],
            ahaMoment: 'Os teoremas de existência garantem que os valores médios são atingidos internamente na curva!',
          },
          formalization: {
            title: 'Definições, Propriedades e Regras de Derivação',
            explanation: 'Formulário completo do 12.º ano para funções exponenciais, logarítmicas, trigonométricas e compostas.',
            formulas: [
              { symbol: "f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}", meaningInPlainPortuguese: 'Definição formal de derivada num ponto' },
              { symbol: "(e^u)' = u' e^u", meaningInPlainPortuguese: 'Derivada da função exponencial' },
              { symbol: "(\\ln u)' = \\frac{u'}{u}", meaningInPlainPortuguese: 'Derivada da função logarítmica' },
              { symbol: "(\\sin u)' = u' \\cos u", meaningInPlainPortuguese: 'Derivada do seno' },
              { symbol: "(\\cos u)' = -u' \\sin u", meaningInPlainPortuguese: 'Derivada do cosseno' },
            ],
            commonMistakes: [
              'Esquecer a regra da cadeia u\' na derivação de compostas: [ln(x²+1)]\' = 2x / (x²+1), não 1/(x²+1)',
              'Afirmar que f\'(c) = 0 implica extremo (pode ser ponto de inflexão de tangente horizontal)',
              'Não justificar a continuidade nos intervalos fechados ao aplicar Bolzano ou Lagrange',
            ],
          },
          solvedExample: {
            problemStatement: 'Seja f(x) = (x - 2) e^x. Estuda a monotonia de f e determina as coordenadas dos extremos relativos.',
            steps: [
              { stepNumber: 1, title: 'Determinar a derivada f\'(x)', mathExpression: "f'(x) = (x - 2)' e^x + (x - 2) (e^x)' = 1 · e^x + (x - 2) e^x = (1 + x - 2) e^x = (x - 1) e^x", intuitiveWhy: 'Aplicamos a regra do produto (u·v)\' = u\'v + uv\'.' },
              { stepNumber: 2, title: 'Encontrar os zeros da derivada (pontos críticos)', mathExpression: "(x - 1) e^x = 0 \\iff x - 1 = 0 \\lor e^x = 0 \\iff x = 1 \\text{ (pois } e^x > 0, \\forall x \\in \\mathbb{R}\\text{)}", intuitiveWhy: 'A exponencial nunca se anula, logo o único zero é x = 1.' },
              { stepNumber: 3, title: 'Quadro de sinais e monotonia', mathExpression: "\\text{Para } x < 1: f'(x) < 0 (\\searrow); \\text{ Para } x > 1: f'(x) > 0 (\\nearrow)", intuitiveWhy: 'f decresce em ]-∞, 1] e cresce em [1, +∞[.' },
              { stepNumber: 4, title: 'Calcular o extremo', mathExpression: 'f(1) = (1 - 2) e^1 = -e \\approx -2.718', intuitiveWhy: 'f atinge um mínimo relativo (e absoluto) no ponto (1, -e).' },
            ],
            finalConclusion: 'f é estritamente decrescente em ]-∞, 1], estritamente crescente em [1, +∞[ e tem mínimo relativo igual a -e em x = 1.',
          },
          tryItYourself: {
            prompt: 'Qual é a equação da reta tangente ao gráfico de f(x) = ln(x) no ponto de abcissa x = 1?',
            options: [
              { id: '1', text: 'y = x - 1', isCorrect: true, whyWrongOrRight: "Perfeito! f(1) = ln(1) = 0. f'(x) = 1/x => f'(1) = 1. Equação: y - 0 = 1(x - 1) <=> y = x - 1.", howToThink: "Usa y - f(x₀) = f'(x₀)(x - x₀)." },
              { id: '2', text: 'y = x', isCorrect: false, whyWrongOrRight: 'Em x = 1, y = 1 - 1 = 0. Se a reta fosse y = x, passaria em (1, 1), o que está incorreto.', howToThink: 'O ponto é (1, 0).' },
              { id: '3', text: 'y = 1', isCorrect: false, whyWrongOrRight: 'Declive é 1, não zero.', howToThink: "f'(1) = 1/1 = 1." },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Exame / Desafio',
              question: 'Seja f uma função duas vezes diferenciável em ℝ tal que f\'\'(x) = (x - 3)(x + 1). Quantos pontos de inflexão tem o gráfico de f?',
              hint: 'Ponto de inflexão exige mudança de sinal da segunda derivada f\'\'(x).',
              options: [
                { id: 'a', text: '2 pontos de inflexão (em x = -1 e x = 3)', isCorrect: true, whyWrongOrRight: 'Excelente! f\'\'(x) é uma parábola que troca de sinal em x = -1 e em x = 3, logo há duas mudanças de concavidade.', howToThink: 'Verifica os zeros e as trocas de sinal no quadro de concavidades.' },
                { id: 'b', text: 'Nenhum', isCorrect: false, whyWrongOrRight: 'Como há mudança de sinal de f\'\' em dois pontos reais distintos, existem 2 pontos de inflexão.', howToThink: 'f\'\' troca de + para - e de - para +.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional 2023 · 1.ª Fase',
            problem: 'Considere a função f definida por f(x) = e^(2x) - kx, com k ∈ ℝ⁺. Determine o valor de k para o qual a reta tangente ao gráfico de f no ponto de abcissa x = 0 é perpendicular à reta de equação y = 2x + 1.',
            strategyTip: 'Duas retas não verticais são perpendiculares se e só se o produto dos seus declives for -1 (m₁ · m₂ = -1).',
            options: [
              { id: 'a', text: 'k = 5/2', isCorrect: true, whyWrongOrRight: "Perfeito! Declive da reta dada é 2. Declive da tangente é f'(0) = 2e⁰ - k = 2 - k. Condição de perpendicularidade: (2 - k) × 2 = -1 <=> 4 - 2k = -1 <=> 2k = 5 <=> k = 5/2.", howToThink: 'Calcula f\'(0), iguala a -1/2 e resolve a equação em ordem a k.' },
              { id: 'b', text: 'k = 2', isCorrect: false, whyWrongOrRight: 'Se k = 2, f\'(0) = 0 (reta horizontal), que não é perpendicular a uma reta de declive 2.', howToThink: 'm_tangente = -1/2.' },
            ],
          },
          verification: {
            methodQuestion: 'Qual é a estrutura completa de uma questão de estudo de função num exame nacional?',
            methodCriteria: [
              '1. Domínio e Continuidade',
              '2. Assíntotas verticais e não verticais (limites no infinito)',
              '3. Primeira derivada, zeros e quadro de monotonia / extremos',
              '4. Segunda derivada, zeros e quadro de concavidades / pontos de inflexão',
            ],
            whatIfQuestion: 'O que farias se f\'(x) não tivesse zeros mas fosse sempre positiva em todo o domínio?',
            whatIfAnswer: 'Concluiria que f é estritamente crescente e não possui quaisquer extremos relativos.',
            ownWordsPrompt: 'Explica o Teorema de Lagrange e a sua interpretação geométrica.',
            keyIdeasToInclude: ['Continuidade em [a,b]', 'Diferenciabilidade em ]a,b[', 'Reta tangente paralela à corda secante'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Porque é que o Cálculo Diferencial é o motor invisível de toda a Inteligência Artificial e Finanças?',
            scenario: 'Quando o ChatGPT ou uma rede neuronal aprende, ele ajusta biliões de pesos calculando derivadas parciais.',
            spark: 'O algoritmo chama-se Gradient Descent (Gradiente Descendente) e consiste em andar na direção oposta à derivada para minimizar o erro!',
          },
          whyItExists: {
            problemItSolves: 'Permite encontrar automaticamente o ponto ótimo (custo mínimo, lucro máximo, erro mínimo) em sistemas complexos multidimensionais.',
            realWorldContexts: [
              { area: 'Inteligência Artificial & Machine Learning', example: 'Backpropagation e treino de Redes Neuronais através do cálculo de gradientes.' },
              { area: 'Finanças Quantitativas', example: 'Modelo Black-Scholes para precificação de opções e derivados financeiros com equações diferenciais.' },
              { area: 'Engenharia Mecânica & Aeroespacial', example: 'Minimização de arrasto aerodinâmico e trajetórias de foguetões com combustível mínimo.' },
            ],
            ahaQuote: 'Sempre que queres o melhor resultado possível num mundo contínuo, a resposta está onde a derivada se anula!',
          },
          intuition: {
            headline: 'Descer a Montanha com os Olhos Vendados',
            storyOrAnalogy: 'Imagina que estás no cimo de uma montanha nevoenta e queres chegar ao fundo do vale o mais depressa possível sem conseguir ver o mapa. Em cada passo, sentes a inclinação do terreno com os pés (a derivada) e dás um passo na direção em que o terreno desce mais a pique. Repetindo isto passo a passo, chegas ao mínimo!',
            keyTakeaway: 'A derivada é a bússola que aponta o caminho da melhoria contínua.',
            visualMetaphor: 'Uma bola de gude a rolar por uma taça curva até parar no fundo.',
          },
          predictionChallenge: {
            question: 'Se uma empresa tem uma função de lucro L(x) com derivada L\'(1000) = +50€ por unidade, o que deve a gerência fazer?',
            options: [
              { id: 'a', label: 'Aumentar a produção (pois cada unidade extra gera 50€ de lucro marginal)', isCorrect: true, explanationAfterTest: 'Exato! Em economia chama-se Lucro Marginal positivo: produzir mais aumenta o lucro total até L\'(x) = 0!' },
              { id: 'b', label: 'Parar a produção imediatamente', isCorrect: false, explanationAfterTest: 'Se a derivada é positiva, ainda não atingimos o topo da montanha de lucro!' },
            ],
            simulatorInstruction: 'Repara como o topo da parábola de lucro é atingido quando a derivada atinge 0.',
          },
          discovery: {
            patternsObserved: [
              'L\'(x) > 0: compensa produzir mais',
              'L\'(x) = 0: ponto ótimo de lucro máximo',
              'L\'(x) < 0: produzir mais dá prejuízo (custos marginais superam receitas)',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: é o critério matemático de tomada de decisão ótima!',
          },
          formalization: {
            title: 'Otimização e Gradiente Descendente',
            explanation: 'Aplicação da regra de atualização de pesos em Inteligência Artificial.',
            formulas: [
              { symbol: 'w_{t+1} = w_t - \\eta \\nabla L(w_t)', meaningInPlainPortuguese: 'Atualização de pesos em IA por gradiente descendente' },
              { symbol: "L'(x^*) = 0 \\land L''(x^*) < 0", meaningInPlainPortuguese: 'Critério de máximo económico e físico' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um reservatório cilíndrico sem tampa tem volume fixo V = 1000 m³. Que raio r minimiza a quantidade de material de chapa metálica?',
            steps: [
              { stepNumber: 1, title: 'Expressar a área em função do raio r', mathExpression: 'A(r) = \\pi r^2 + 2\\pi r h = \\pi r^2 + \\frac{2000}{r}', intuitiveWhy: 'Substituímos a altura h = 1000 / (π r²) na fórmula da área superficial.' },
              { stepNumber: 2, title: 'Calcular a derivada A\'(r)', mathExpression: "A'(r) = 2\\pi r - \\frac{2000}{r^2}", intuitiveWhy: 'Derivamos em ordem a r para encontrar o ponto crítico.' },
              { stepNumber: 3, title: 'Igualar a zero', mathExpression: "2\\pi r - \\frac{2000}{r^2} = 0 \\iff 2\\pi r^3 = 2000 \\iff r = \\sqrt[3]{\\frac{1000}{\\pi}} \\approx 6.83 \\text{ m}", intuitiveWhy: 'O raio ótimo é aproximadamente 6,83 metros.' },
            ],
            finalConclusion: 'O raio ideal para gastar o mínimo de material é r ≈ 6,83 m.',
          },
          tryItYourself: {
            prompt: 'Em finanças, se a derivada da tua carteira em relação à volatilidade do mercado (denominada "Vega") for zero, o que significa?',
            options: [
              { id: '1', text: 'A tua carteira está protegida (hedged) contra oscilações de volatilidade', isCorrect: true, whyWrongOrRight: 'Muito bem! Derivada zero significa imunidade a pequenas variações da variável no mercado.', howToThink: 'Sensibilidade nula = proteção total.' },
              { id: '2', text: 'A carteira vai à falência', isCorrect: false, whyWrongOrRight: 'Pelo contrário, é uma posição delta/vega neutra procurada por gestores de risco.', howToThink: 'Derivada zero = estabilidade local.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Desafio / Mundo Real',
              question: 'Porque é que nos algoritmos de IA a taxa de aprendizagem (learning rate η) não pode ser nem demasiado grande nem demasiado pequena?',
              hint: 'Pensa em dar passos gigantes na montanha nevoenta.',
              options: [
                { id: 'a', text: 'Se for muito grande salta por cima do mínimo; se for muito pequena demora anos a convergir', isCorrect: true, whyWrongOrRight: 'Perfeito! É o equilíbrio clássico de hiperparâmetros em Deep Learning.', howToThink: 'Passos gigantes oscilam; passos minúsculos estagnam.' },
                { id: 'b', text: 'Não tem qualquer impacto', isCorrect: false, whyWrongOrRight: 'A taxa de aprendizagem é o parâmetro mais crucial do treino.', howToThink: 'η multiplica a derivada.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Aplicação de Engenharia e IA',
            problem: 'Se a função de perda de um modelo de IA for L(w) = w² - 8w + 20, qual é o peso ideal w* que minimiza o erro?',
            strategyTip: 'Calcula L\'(w) e iguala a zero.',
            options: [
              { id: 'a', text: 'w* = 4 (com erro mínimo L(4) = 4)', isCorrect: true, whyWrongOrRight: "Correto! L'(w) = 2w - 8 = 0 => w = 4. L(4) = 16 - 32 + 20 = 4.", howToThink: 'O mínimo de uma parábola convexa é o seu vértice.' },
              { id: 'b', text: 'w* = 8', isCorrect: false, whyWrongOrRight: '8 é o termo linear com sinal trocado, mas a derivada é 2w - 8.', howToThink: '2w = 8 => w = 4.' },
            ],
          },
          verification: {
            methodQuestion: 'Como aplicas derivadas à otimização no mundo empresarial ou tecnológico?',
            methodCriteria: [
              '1. Criar o modelo matemático da função objetivo (lucro, custo, erro)',
              '2. Reduzir a uma variável livre ou usar gradiente multivariável',
              '3. Calcular a derivada e encontrar os pontos críticos onde se anula',
              '4. Testar a segunda derivada para confirmar se é mínimo ou máximo',
            ],
            whatIfQuestion: 'O que aconteceria se a função tivesse múltiplos mínimos locais?',
            whatIfAnswer: 'O algoritmo poderia ficar preso num mínimo local suboptimal; técnicas como momentum ou stochastic gradient descent são usadas para escapar.',
            ownWordsPrompt: 'Explica o papel das derivadas no treino de redes neuronais modernas.',
            keyIdeasToInclude: ['Função de perda', 'Gradiente da derivada', 'Ajuste de pesos sinápticos', 'Minimização de erro'],
          },
        },
      },
    },
  ],
};
