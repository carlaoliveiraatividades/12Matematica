import { MathTopic } from '../../types/math';

export const functionsTopic: MathTopic = {
  id: 'funcoes',
  number: '01',
  title: 'Funções',
  subtitle: 'Exponenciais, logaritmos, limites, continuidade e estudo completo',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Modelação de crescimento populacional, taxas de juro, terramotos e decaimento radioativo.',
  subtopics: [
    {
      id: 'derivas-aplicacoes',
      title: 'Derivadas e Aplicações',
      shortDescription: 'Taxa de variação instantânea, declive da reta tangente e identificação de máximos e mínimos.',
      simulatorType: 'derivatives',
      simulatorDefaultPreset: 'cubic',
      coreIdeaInOneSentence: 'A derivada diz-nos a que velocidade e em que direção uma coisa está a mudar num único instante.',
      progressionRoadmap: [
        { level: '6', summary: 'Montanha-russa: inclinação da prancha e paragem momentânea no cimo da colina.' },
        { level: '10', summary: 'Velocímetro de subida e comparação entre velocidade média e instantânea.' },
        { level: '14', summary: 'Declive da reta (m = Δy/Δx) e a reta secante a transformar-se em tangente.' },
        { level: '18', summary: 'Definição formal por limites f\'(x₀) = lim (f(x)-f(x₀))/(x-x₀), retas tangentes e extremos.' },
        { level: 'adulto', summary: 'Lucro marginal em economia e ponto de inflexão na propagação de tendências.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Quando estás numa montanha-russa, como sabes quando vais começar a descer?',
            scenario: 'Imagina que vais sentado num carrinho a subir uma colina muito alta.',
            spark: 'No ponto mais alto de todos, durante um microssegundo, o carrinho não sobe nem desce: fica direitinho!',
          },
          whyItExists: {
            problemItSolves: 'Ajuda a saber a inclinação exata de qualquer caminho em cada ponto.',
            realWorldContexts: [
              { area: 'Parques de Diversões', example: 'Desenhar carris suaves para os carrinhos não descarrilarem.' },
            ],
            ahaQuote: 'A inclinação muda a cada passo que dás!',
          },
          intuition: {
            headline: 'A Prancha Mágica debaixo das Rodas',
            storyOrAnalogy: 'Pensa numa pranchinha pequena colada à base do carrinho. Quando a pista sobe, a prancha aponta para o céu (+). No cimo da colina, fica perfeitamente deitada (0). Quando começas a descer, aponta para o chão (-).',
            keyTakeaway: 'A inclinação dessa pranchinha num ponto único chama-se Derivada!',
            visualMetaphor: 'Uma lanterna colada às rodas do carrinho que aponta para onde ele vai no instante seguinte.',
          },
          predictionChallenge: {
            question: 'O que achas que acontece à inclinação da prancha exatamente no topo da colina?',
            options: [
              { id: 'a', label: 'Aponta muito para cima', isCorrect: false, explanationAfterTest: 'No topo já acabou a subida!' },
              { id: 'b', label: 'Fica perfeitamente na horizontal (nem sobe nem desce)', isCorrect: true, explanationAfterTest: 'Exatamente! No ponto de viragem, a inclinação é 0!' },
              { id: 'c', label: 'Aponta para trás', isCorrect: false, explanationAfterTest: 'O carrinho continua a andar para a frente.' },
            ],
            simulatorInstruction: 'Arrasta o carrinho para o topo da colina (x = 1.0) no simulador e repara na cor e no valor do inclinómetro.',
          },
          discovery: {
            patternsObserved: [
              'A subir: a inclinação é positiva (+)',
              'No ponto mais alto: a inclinação é zero (0)',
              'A descer: a inclinação é negativa (-)',
            ],
            ahaMoment: 'Para encontrar o sítio mais alto de uma pista curva, basta procurar onde a inclinação é zero!',
          },
          formalization: {
            title: 'A Regra de Ouro da Inclinação',
            explanation: 'Quando queremos saber como algo está a mudar agora mesmo, olhamos para a inclinação no ponto exato.',
            formulas: [
              { symbol: 'f\'(x) > 0', meaningInPlainPortuguese: 'O caminho está a subir' },
              { symbol: 'f\'(x) = 0', meaningInPlainPortuguese: 'Estamos no topo ou no fundo (chão direito)' },
              { symbol: 'f\'(x) < 0', meaningInPlainPortuguese: 'O caminho está a descer' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um carrinho passa por 3 sítios: A (a meio da subida), B (no cimo da montanha), C (a descer a toda a velocidade). Onde é que a inclinação é zero?',
            steps: [
              { stepNumber: 1, title: 'Analisar o ponto A', mathExpression: 'Subida', intuitiveWhy: 'Em A o carrinho está a subir, logo a inclinação é positiva.' },
              { stepNumber: 2, title: 'Analisar o ponto B', mathExpression: 'Topo', intuitiveWhy: 'Em B atingiu o ponto mais alto, a subida terminou e a descida ainda não começou: inclinação = 0.' },
              { stepNumber: 3, title: 'Analisar o ponto C', mathExpression: 'Descida', intuitiveWhy: 'Em C está a descer, inclinação negativa.' },
            ],
            finalConclusion: 'A inclinação é zero exatamente no ponto B (o topo).',
          },
          tryItYourself: {
            prompt: 'Se uma bola é atirada ao ar e sobe até parar e começar a cair, qual é a velocidade da bola no ponto mais alto?',
            options: [
              { id: '1', text: 'Muito rápida para cima', isCorrect: false, whyWrongOrRight: 'Se ainda estivesse a subir rápido, continuaria a ganhar altura!', howToThink: 'Pensa no momento exato em que ela troca de direção.' },
              { id: '2', text: 'Zero (pára por um instante antes de cair)', isCorrect: true, whyWrongOrRight: 'Correto! A velocidade instantânea (derivada da posição) anula-se no ponto mais alto.', howToThink: 'Para mudar de subir para descer, a velocidade tem de passar por 0.' },
              { id: '3', text: 'Negativa para baixo', isCorrect: false, whyWrongOrRight: 'A velocidade só fica negativa depois de começar a descer.', howToThink: 'No ponto mais alto está na transição exata.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p1',
              tier: 'Base',
              question: 'Se um escorrega é totalmente plano e direito como uma mesa, qual é a sua inclinação?',
              hint: 'Pensa se uma bola colocada no meio anda sozinha.',
              options: [
                { id: 'a', text: 'Zero (0)', isCorrect: true, whyWrongOrRight: 'Correto! Sem desnível, a inclinação é nula.', howToThink: 'Chão horizontal tem declive zero.' },
                { id: 'b', text: 'Infinita', isCorrect: false, whyWrongOrRight: 'Infinita seria uma parede vertical a cair a pique!', howToThink: 'Horizontal = 0.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio Intuitivo',
            problem: 'Num gráfico de crescimento de uma planta, o que significa a derivada ser muito grande?',
            strategyTip: 'Derivada grande = subida muito rápida.',
            options: [
              { id: 'a', text: 'A planta está a crescer muito depressa nesse dia', isCorrect: true, whyWrongOrRight: 'Excelente! A derivada mede o ritmo de crescimento instantâneo.', howToThink: 'Maior declive = maior velocidade de crescimento.' },
              { id: 'b', text: 'A planta já morreu', isCorrect: false, whyWrongOrRight: 'Se a planta morresse, a altura parava de aumentar (derivada = 0).', howToThink: 'Derivada mede a rapidez da mudança.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a um amigo o que é uma derivada sem usar números?',
            methodCriteria: ['Usar a ideia de velocidade instantânea ou inclinação', 'Referir que mede a rapidez com que algo muda num momento'],
            whatIfQuestion: 'O que aconteceria se a derivada fosse sempre zero durante 1 hora?',
            whatIfAnswer: 'O valor nunca mudaria: a linha seria totalmente horizontal e constante.',
            ownWordsPrompt: 'Resume a ideia de derivada com as tuas palavras:',
            keyIdeasToInclude: ['Ritmo de mudança', 'Inclinação', 'Instante único'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Se fizeste uma viagem de 100 km em 1 hora, foste sempre a 100 km/h?',
            scenario: 'Olhaste para o velocímetro nos semáforos, nas rotundas e na autoestrada.',
            spark: 'A velocidade média foi 100 km/h, mas em cada segundo o velocímetro marcava um valor diferente!',
          },
          whyItExists: {
            problemItSolves: 'Calcular o ritmo de mudança em cada fração de segundo em vez de apenas uma média grosseira.',
            realWorldContexts: [
              { area: 'Radares de Velocidade', example: 'Medir a velocidade no momento exato em que o carro passa.' },
              { area: 'Bateria do Telemóvel', example: 'Medir se a bateria está a descarregar mais rápido quando abres um jogo.' },
            ],
            ahaQuote: 'A velocidade média olha para a viagem toda; a derivada é a foto do velocímetro num segundo!',
          },
          intuition: {
            headline: 'Do Velocímetro Médio ao Velocímetro Instantâneo',
            storyOrAnalogy: 'Se calculares a velocidade entre o início e o fim da viagem (Δespaço / Δtempo), tens a média. Mas se encurtares o intervalo de tempo para 1 segundo, 0,1 segundos, 0,001 segundos... aproximas-te do valor exato que o velocímetro marca.',
            keyTakeaway: 'A derivada é a taxa de variação quando o intervalo de tempo é tão pequeno que se torna quase zero.',
            visualMetaphor: 'Fazer zoom contínuo numa curva até ela parecer uma linha reta.',
          },
          predictionChallenge: {
            question: 'Se aumentares a velocidade de um carro a subir uma colina, o que acontece ao gráfico da distância percorrida?',
            options: [
              { id: 'a', label: 'Fica cada vez mais inclinado (curva para cima)', isCorrect: true, explanationAfterTest: 'Correto! Maior velocidade = maior inclinação da curva.' },
              { id: 'b', label: 'Fica horizontal', isCorrect: false, explanationAfterTest: 'Horizontal significa que o carro estava parado.' },
            ],
            simulatorInstruction: 'Move o ponto no simulador e repara como o valor da derivada aumenta nas zonas mais íngremes.',
          },
          discovery: {
            patternsObserved: [
              'Zonas íngremes têm derivadas de valor elevado (+3, +5)',
              'Zonas suaves têm derivadas próximas de zero (+0.2, 0)',
              'O sinal da derivada (+ ou -) diz se o valor está a subir ou a descer',
            ],
            ahaMoment: 'A derivada mede a inclinação local: mesmo numa curva cheia de voltas, em cada pedacinho minúsculo ela comporta-se como uma reta!',
          },
          formalization: {
            title: 'Taxa de Variação Instantânea',
            explanation: 'Medimos a variação vertical dividida pela variação horizontal para um passo minúsculo.',
            formulas: [
              { symbol: 'Velocidade Média = Δy / Δx', meaningInPlainPortuguese: 'Variação total a dividir pelo tempo total' },
              { symbol: 'Derivada = Declive da Reta Tangente', meaningInPlainPortuguese: 'Velocidade exata num ponto único' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um atleta corre numa pista. Aos 2 segundos percorreu 8 metros. Aos 2,01 segundos percorreu 8,07 metros. Qual foi a velocidade instantânea aproximada aos 2 segundos?',
            steps: [
              { stepNumber: 1, title: 'Calcular a distância percorrida no intervalo (Δy)', mathExpression: '8,07 - 8,00 = 0,07 metros', intuitiveWhy: 'Vemos quantos metros avançou na fração de segundo.' },
              { stepNumber: 2, title: 'Calcular o intervalo de tempo (Δx)', mathExpression: '2,01 - 2,00 = 0,01 segundos', intuitiveWhy: 'O tempo que demorou esse avanço minúsculo.' },
              { stepNumber: 3, title: 'Dividir a distância pelo tempo', mathExpression: '0,07 / 0,01 = 7 m/s', intuitiveWhy: 'A taxa instantânea nesse momento era de 7 metros por segundo!' },
            ],
            finalConclusion: 'Aos 2 segundos o velocímetro do atleta marcava aproximadamente 7 m/s.',
          },
          tryItYourself: {
            prompt: 'Se uma torneira enche um balde com água e a altura da água aumenta 0,06 metros em 0,02 segundos, qual é a taxa instantânea de enchimento?',
            options: [
              { id: '1', text: '3 metros por segundo (0,06 / 0,02)', isCorrect: true, whyWrongOrRight: 'Perfeito! 0,06 / 0,02 = 3 m/s.', howToThink: 'Divide a variação de altura pela variação de tempo.' },
              { id: '2', text: '0,0012 metros por segundo', isCorrect: false, whyWrongOrRight: 'Multiplicaste em vez de dividir.', howToThink: 'Taxa é sempre divisão: variação vertical / variação horizontal.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_1',
              tier: 'Base',
              question: 'Quando a derivada de uma função é negativa num intervalo, o que está a acontecer aos valores da função?',
              hint: 'Lembra-te do sinal da descida.',
              options: [
                { id: 'a', text: 'Estão a diminuir (a descer)', isCorrect: true, whyWrongOrRight: 'Correto! Derivada negativa indica decrescimento.', howToThink: 'Declive negativo = descida.' },
                { id: 'b', text: 'Estão a aumentar', isCorrect: false, whyWrongOrRight: 'Aumentar exigiria derivada positiva.', howToThink: 'Sinal positivo = subida; sinal negativo = descida.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio de Raciocínio',
            problem: 'Dois ciclistas sobem uma montanha. O ciclista A tem declive m = 2 e o ciclista B tem declive m = 5 no mesmo instante. Quem está a enfrentar a subida mais dura?',
            strategyTip: 'Maior declive = maior esforço por metro avançado.',
            options: [
              { id: 'a', text: 'O ciclista B (m = 5)', isCorrect: true, whyWrongOrRight: 'Correto! Declive 5 significa subir 5 metros por cada 1 metro horizontal.', howToThink: 'Maior declive = subida mais íngreme.' },
              { id: 'b', text: 'O ciclista A (m = 2)', isCorrect: false, whyWrongOrRight: 'Declive 2 é mais suave do que 5.', howToThink: 'Compara os valores absolutos dos declives.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que a velocidade média não é suficiente para saber se passaste o limite de velocidade num radar?',
            methodCriteria: ['Média pode ser baixa se tiveres parado antes', 'Radar mede velocidade instantânea (derivada) no milissegundo em que passas'],
            whatIfQuestion: 'Se o gráfico da tua posição fosse uma reta inclinada perfeita, o que aconteceria ao velocímetro?',
            whatIfAnswer: 'Marcava sempre o mesmo valor constante, porque o declive de uma reta é igual em todos os pontos.',
            ownWordsPrompt: 'Explica a diferença entre taxa média e taxa instantânea:',
            keyIdeasToInclude: ['Intervalo de tempo grande vs pontual', 'Velocímetro', 'Secante vs Tangente'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Como calculas o declive de uma reta que toca numa curva num único ponto?',
            scenario: 'Sabemos calcular o declive de uma reta com 2 pontos: m = (y₂ - y₁)/(x₂ - x₁).',
            spark: 'Mas numa reta tangente só temos 1 ponto! Se tentares (y₁ - y₁)/(x₁ - x₁), dá 0/0! Como é que a matemática resolve isto?',
          },
          whyItExists: {
            problemItSolves: 'Permite estender a álgebra de retas a curvas de qualquer forma na física e engenharia.',
            realWorldContexts: [
              { area: 'Física Clássica', example: 'Determinar a aceleração (derivada da velocidade) e a força resultante.' },
              { area: 'Design Automóvel', example: 'Garantir que a carroçaria tem curvas com transições tangenciais suaves sem arestas.' },
            ],
            ahaQuote: 'Aproximamos o segundo ponto até ele ficar infinitamente perto do primeiro: o limite resolve a divisão 0/0!',
          },
          intuition: {
            headline: 'Da Reta Secante à Reta Tangente (Δx → 0)',
            storyOrAnalogy: 'Imagina que escolhes um ponto P(x₀, y₀) e um ponto vizinho Q(x₀ + Δx, y₀ + Δy). A reta que passa por ambos é uma reta secante com declive m = Δy/Δx. Se fizeres o ponto Q deslizar pela curva em direção a P (fazendo Δx aproximar-se de 0), a reta secante roda suavemente até se encostar à curva como uma reta tangente.',
            keyTakeaway: 'A derivada é o limite do declive das retas secantes quando a distância entre os pontos tende para zero.',
            visualMetaphor: 'Uma régua apoiada em dois pinos que se vão aproximando até a régua ficar em equilíbrio perfeito num único pino.',
          },
          predictionChallenge: {
            question: 'No simulador, quando reduzes a distância h (Δx) de 1.0 para 0.05, o que acontece à reta secante castanha?',
            options: [
              { id: 'a', label: 'Roda e sobrepõe-se perfeitamente à reta tangente verde/vermelha', isCorrect: true, explanationAfterTest: 'Perfeito! Quando h → 0, a secante converge para a tangente!' },
              { id: 'b', label: 'Desaparece para o infinito', isCorrect: false, explanationAfterTest: 'A reta estabiliza num declive finito bem definido.' },
            ],
            simulatorInstruction: 'Ativa a opção "Mostrar Secante" e move o slider de h para a esquerda até 0.02.',
          },
          discovery: {
            patternsObserved: [
              'O declive da secante aproxima-se continuamente do valor da derivada',
              'O declive da tangente é a melhor aproximação linear da curva perto daquele ponto',
              'Onde a tangente é horizontal (m = 0), a curva atinge um pico ou uma cova',
            ],
            ahaMoment: 'O cálculo diferencial não elimina o 0/0; descobre para onde a fração aponta antes de chegar ao 0!',
          },
          formalization: {
            title: 'Definição Geométrica da Derivada',
            explanation: 'A derivada f\'(x₀) é o declive da reta tangente ao gráfico de f no ponto de abcissa x₀.',
            formulas: [
              { symbol: 'm_secante = [f(x₀ + h) - f(x₀)] / h', meaningInPlainPortuguese: 'Declive da reta que corta a curva em 2 pontos' },
              { symbol: 'f\'(x₀) = lim_{h → 0} [f(x₀ + h) - f(x₀)] / h', meaningInPlainPortuguese: 'Declive da reta tangente (derivada no ponto x₀)' },
              { symbol: 'y - f(x₀) = f\'(x₀)(x - x₀)', meaningInPlainPortuguese: 'Equação da reta tangente à curva' },
            ],
          },
          solvedExample: {
            problemStatement: 'Dada a função f(x) = x², calcula a derivada no ponto x₀ = 3 usando a taxa de variação média com h.',
            steps: [
              { stepNumber: 1, title: 'Escrever a fórmula da taxa de variação', mathExpression: '[f(3 + h) - f(3)] / h', intuitiveWhy: 'Comparamos o valor no ponto 3+h com o valor no ponto 3.' },
              { stepNumber: 2, title: 'Substituir na função f(x) = x²', mathExpression: '[(3 + h)² - 3²] / h = [9 + 6h + h² - 9] / h', intuitiveWhy: 'Expandimos o quadrado do binómio: o termo 9 cancela com o -9!' },
              { stepNumber: 3, title: 'Simplificar a fração por h', mathExpression: '[6h + h²] / h = h(6 + h) / h = 6 + h', intuitiveWhy: 'Ao colocar h em evidência, eliminamos a divisão por zero!' },
              { stepNumber: 4, title: 'Fazer o passo h tender para 0', mathExpression: 'lim_{h → 0} (6 + h) = 6', intuitiveWhy: 'Quando h se anula, sobra o declive exato: 6.' },
            ],
            finalConclusion: 'A derivada de f(x) = x² em x = 3 é f\'(3) = 6. A reta tangente tem declive m = 6.',
          },
          tryItYourself: {
            prompt: 'Para a função f(x) = x², qual é o declive da reta tangente no ponto de abcissa x = -2 (sabendo que f\'(x) = 2x)?',
            options: [
              { id: '1', text: 'm = -4 (pois f\'(-2) = 2 · (-2))', isCorrect: true, whyWrongOrRight: 'Exato! Como f\'(x) = 2x, em x = -2 temos f\'(-2) = -4 (reta com forte inclinação descendente).', howToThink: 'Substitui x por -2 na expressão da derivada 2x.' },
              { id: '2', text: 'm = +4', isCorrect: false, whyWrongOrRight: 'Em x = -2 a parábola está a descer, logo o declive tem de ser negativo!', howToThink: 'Para x < 0 na parábola y=x², os valores estão a descer.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_1',
              tier: 'Intermédio',
              question: 'Qual é a equação da reta tangente ao gráfico de f(x) = x² no ponto (1, 1), sabendo que f\'(1) = 2?',
              hint: 'Usa a fórmula y - y₀ = m(x - x₀) com x₀=1, y₀=1 e m=2.',
              options: [
                { id: 'a', text: 'y = 2x - 1', isCorrect: true, whyWrongOrRight: 'Perfeito! y - 1 = 2(x - 1) ⇔ y = 2x - 2 + 1 ⇔ y = 2x - 1.', howToThink: 'Substitui ponto e declive na equação da reta.' },
                { id: 'b', text: 'y = 2x + 1', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de subtrair o 2 quando distribuíste: 2*(-1) + 1 = -1.', howToThink: 'Verifica se o ponto (1,1) pertence à reta: 2(1) - 1 = 1 (certo!).' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte para o 12.º Ano',
            problem: 'Se uma função f tem f\'(x) = 0 em x = 5 e f\'(x) passa de positiva para negativa ao cruzar o 5, que tipo de ponto é x = 5?',
            strategyTip: 'Subir (+) antes do 5 e descer (-) depois do 5.',
            options: [
              { id: 'a', text: 'Um ponto de máximo relativo', isCorrect: true, whyWrongOrRight: 'Correto! Se a função sobe antes e desce depois, x = 5 é o cume da colina (máximo).', howToThink: 'Cresce à esquerda + decresce à direita = Máximo.' },
              { id: 'b', text: 'Um ponto de mínimo relativo', isCorrect: false, whyWrongOrRight: 'Para ser mínimo teria de descer antes e subir depois.', howToThink: 'Faz o desenho com as setas: ↗ 5 ↘.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que não podemos simplesmente fazer h = 0 no início da fração [f(x+h) - f(x)] / h?',
            methodCriteria: ['Daria 0/0, que é indeterminado', 'É necessário simplificar algebricamente antes de aplicar o limite'],
            whatIfQuestion: 'O que aconteceria à reta tangente se o gráfico tivesse um bico pontiagudo em forma de V no ponto x₀?',
            whatIfAnswer: 'Não existiria uma reta tangente única (os limites laterais à esquerda e à direita seriam diferentes), logo a função não seria derivável nesse ponto.',
            ownWordsPrompt: 'Explica o conceito de reta tangente usando a ideia de limite da secante:',
            keyIdeasToInclude: ['Dois pontos que se aproximam', 'h tende para zero', 'Declive limite'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Como prova o Exame Nacional que uma função atinge um extremo sem desenhar o gráfico completo?',
            scenario: 'Nos itens de resposta aberta de Matemática A do 12.º ano sobre estudo de funções e otimização.',
            spark: 'O Teorema de Fermat e a tabela de variação de sinal de f\'(x) permitem classificar monotonia, extremos e concavidades com rigor analítico absoluto!',
          },
          whyItExists: {
            problemItSolves: 'Fornece a ferramenta matemática universal para resolver problemas de otimização (custo mínimo, lucro máximo, trajetória ideal) e demonstrar propriedades analíticas de funções.',
            realWorldContexts: [
              { area: 'Economia e Finanças', example: 'Determinar a elasticidade da procura e a maximização da função de utilidade.' },
              { area: 'Inteligência Artificial', example: 'Otimização por Gradiente Descendente (Gradient Descent) para treinar redes neuronais.' },
              { area: 'Engenharia Aeroespacial', example: 'Cálculo de trajetórias orbitais com consumo mínimo de combustível.' },
            ],
            ahaQuote: 'A derivada transforma o problema visual de procurar picos num problema algébrico de resolver equações f\'(x) = 0!',
          },
          intuition: {
            headline: 'Rigor Analítico: Taxa de Variação Instantânea e Derivabilidade',
            storyOrAnalogy: 'Uma função f é derivável em x₀ se existir e for finito o limite da taxa de variação. Geometricamente, significa que a curva é suave (sem quebras nem esquinas pontiagudas) e admite uma reta tangente não vertical de equação y = f(x₀) + f\'(x₀)(x - x₀). O sinal da 1.ª derivada dita a monotonia; os seus zeros são candidatos a extremos relativos; e a 2.ª derivada f\'\'(x) revela o sentido da concavidade.',
            keyTakeaway: 'Derivabilidade implica Continuidade (o recíproco não é verdadeiro). Os zeros de f\' com mudança de sinal são os extremos relativos.',
            visualMetaphor: 'A 1.ª derivada mede a velocidade da função; a 2.ª derivada mede a força/aceleração que curva a trajetória.',
          },
          predictionChallenge: {
            question: 'Para a função cúbica do simulador f(x) = -0.35x³ + 1.05x, quais são as abcissas dos pontos estacionários onde f\'(x) = 0?',
            options: [
              { id: 'a', label: 'x = -1 (mínimo local) e x = +1 (máximo local)', isCorrect: true, explanationAfterTest: 'Excelente! f\'(x) = -1.05x² + 1.05 = 0 ⇔ x² = 1 ⇔ x = ±1.' },
              { id: 'b', label: 'Apenas em x = 0', isCorrect: false, explanationAfterTest: 'Em x = 0 a derivada vale f\'(0) = +1.05 (inclinação máxima, ponto de inflexão).' },
            ],
            simulatorInstruction: 'Coloca x₀ = -1.00 e x₀ = 1.00 no simulador e confirma que o declive f\'(x₀) se anula com extrema precisão.',
          },
          discovery: {
            patternsObserved: [
              'Teorema de Lagrange (Valor Médio): existe c ∈ ]a,b[ tal que f\'(c) = [f(b)-f(a)]/(b-a)',
              'Monotonia: f\'(x) > 0 em ]a,b[ ⇒ f estritamente crescente; f\'(x) < 0 ⇒ f estritamente decrescente',
              'Concavidade: f\'\'(x) > 0 ⇒ concavidade voltada para cima (∪); f\'\'(x) < 0 ⇒ concavidade voltada para baixo (∩)',
            ],
            ahaMoment: 'O ponto de inflexão x = 0 é onde a derivada atinge o seu valor extremo: é o momento de maior ritmo de subida!',
          },
          formalization: {
            title: 'Formulário Oficial de Derivação (12.º Ano)',
            explanation: 'Regras fundamentais de derivação para funções transcendentais e compostas de acordo com a matriz do IAVE.',
            formulas: [
              { symbol: '(e^u)\' = u\' · e^u', meaningInPlainPortuguese: 'Derivada da função exponencial composta' },
              { symbol: '(ln u)\' = u\' / u', meaningInPlainPortuguese: 'Derivada do logaritmo natural composto' },
              { symbol: '(u / v)\' = (u\'v - uv\') / v²', meaningInPlainPortuguese: 'Regra do quociente de funções' },
              { symbol: '(u^n)\' = n · u\' · u^(n-1)', meaningInPlainPortuguese: 'Regra da potência com regra da cadeia' },
              { symbol: '(sen u)\' = u\' · cos u', meaningInPlainPortuguese: 'Derivada da função trigonométrica seno' },
            ],
            commonMistakes: [
              'Esquecer a regra da cadeia (u\') ao derivar compostas como e^(2x) ou ln(x² + 1).',
              'Confundir f\'(x) = 0 com garantia de extremo: é preciso haver mudança de sinal na tabela de monotonia (ex: f(x)=x³ em x=0 tem f\'(0)=0 mas não é extremo)!',
              'Assumir que f ser contínua implica ser derivável (contraexemplo clássico: f(x) = |x| na origem).',
            ],
          },
          solvedExample: {
            problemStatement: 'Item Modelo de Exame Nacional: Seja f(x) = (x - 2)·e^x definida em ℝ. Determina os intervalos de monotonia de f e as coordenadas do seu extremo relativo.',
            steps: [
              { stepNumber: 1, title: 'Calcular a função derivada f\'(x) pela regra do produto', mathExpression: 'f\'(x) = (x - 2)\'·e^x + (x - 2)·(e^x)\' = 1·e^x + (x - 2)·e^x = (x - 1)·e^x', intuitiveWhy: 'Aplicamos (u·v)\' = u\'v + uv\' e colocamos e^x em evidência.' },
              { stepNumber: 2, title: 'Determinar os zeros de f\'(x)', mathExpression: '(x - 1)·e^x = 0 ⇔ x - 1 = 0 ∨ e^x = 0 (impossível em ℝ) ⇔ x = 1', intuitiveWhy: 'Como e^x > 0 para todo o x real, o único zero provém de x - 1 = 0.' },
              { stepNumber: 3, title: 'Construir a tabela de sinal de f\' e monotonia de f', mathExpression: 'Para x < 1: f\'(x) < 0 (f decrescente ↘). Para x > 1: f\'(x) > 0 (f crescente ↗)', intuitiveWhy: 'O fator e^x é estritamente positivo, logo o sinal de f\' é determinado exclusivamente por (x - 1).' },
              { stepNumber: 4, title: 'Calcular o valor do extremo em x = 1', mathExpression: 'f(1) = (1 - 2)·e¹ = -e ≈ -2,718', intuitiveWhy: 'Substituímos x = 1 na função original f(x).' },
            ],
            finalConclusion: 'A função f é estritamente decrescente em ]-∞, 1] e estritamente crescente em [1, +∞[. Apresenta um mínimo absoluto no ponto (1, -e).',
          },
          tryItYourself: {
            prompt: 'Considera a função g(x) = ln(x) / x para x > 0. Qual é a abcissa do ponto onde a reta tangente ao gráfico de g é horizontal?',
            options: [
              { id: '1', text: 'x = e', isCorrect: true, whyWrongOrRight: 'Correto! Pela regra do quociente, g\'(x) = ( (1/x)·x - ln(x)·1 ) / x² = (1 - ln x) / x². Igualando a zero: 1 - ln x = 0 ⇔ ln x = 1 ⇔ x = e.', howToThink: 'Aplica a regra da derivada do quociente e anula o numerador.' },
              { id: '2', text: 'x = 1', isCorrect: false, whyWrongOrRight: 'Em x = 1 temos g(1) = 0 (zero da função), mas a derivada g\'(1) = (1 - 0)/1² = 1 ≠ 0.', howToThink: 'Não confundas zeros da função com zeros da derivada!' },
              { id: '3', text: 'x = 0', isCorrect: false, whyWrongOrRight: 'x = 0 nem sequer pertence ao domínio de g (o logaritmo não está definido para x ≤ 0).', howToThink: 'Verifica sempre o domínio da função dada.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_1',
              tier: 'Exame / Desafio',
              question: 'Qual é o declive da reta tangente ao gráfico da função h(x) = e^(2x - 4) no ponto de abcissa x = 2?',
              hint: 'Lembra-te da regra da cadeia: (e^u)\' = u\'·e^u. Aqui u(x) = 2x - 4.',
              options: [
                { id: 'a', text: 'm = 2', isCorrect: true, whyWrongOrRight: 'Perfeito! h\'(x) = 2·e^(2x - 4). Para x = 2: h\'(2) = 2·e^0 = 2·1 = 2.', howToThink: 'Deriva pela regra da cadeia e substitui x=2.' },
                { id: 'b', text: 'm = 1', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de multiplicar pela derivada do expoente (2x - 4)\' = 2.', howToThink: 'Nunca te esqueças da derivada do argumento u\'!' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'Um reservatório cilíndrico tem volume fixo V = 1000π cm³. O custo do material da base e do topo é de 2 €/cm² e o da superfície lateral é de 1 €/cm². Qual a razão ideal entre a altura h e o raio r para minimizar o custo total de fabrico?',
            strategyTip: 'Escreve a função Custo C(r) em função apenas de r, deriva C\'(r), iguala a zero e estuda o sinal.',
            options: [
              { id: 'a', text: 'h = 4r', isCorrect: true, whyWrongOrRight: 'Excelente! C(r) = 2·(2πr²) + 1·(2πrh). Como V = πr²h = 1000π ⇒ h = 1000/r². C(r) = 4πr² + 2000π/r. C\'(r) = 8πr - 2000π/r² = 0 ⇒ 8r³ = 2000 ⇒ r³ = 250. h = 1000 / 250^(2/3) = 4r.', howToThink: 'Problema clássico de otimização com restrição de volume.' },
              { id: 'b', text: 'h = r', isCorrect: false, whyWrongOrRight: 'Isso seria verdade se o custo por cm² fosse idêntico na base e na lateral.', howToThink: 'O peso do custo da base (2€) obriga a ter uma base menor e altura maior.' },
            ],
          },
          verification: {
            methodQuestion: 'Como justificas no exame que um ponto estacionário f\'(x₀)=0 é de facto um extremo relativo?',
            methodCriteria: ['Apresentar quadro de variação de sinal de f\'', 'Indicar a mudança de sinal à esquerda e à direita do ponto', 'Concluir a monotonia e o tipo de extremo'],
            whatIfQuestion: 'O que podes concluir sobre a concavidade se f\'\'(x) for identicamente nula num intervalo?',
            whatIfAnswer: 'A função nesse intervalo é uma reta afim (sem curvatura).',
            ownWordsPrompt: 'Explica o Teorema de Fermat e a importância da condição necessária vs suficiente para extremos:',
            keyIdeasToInclude: ['f\'(x₀)=0 é condição necessária', 'Mudança de sinal é a garantia', 'Pontos de inflexão com derivada nula'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Porque é que as empresas de tecnologia não continuam a produzir mais servidores indefinidamente?',
            scenario: 'Mais utilizadores trazem mais receita, mas cada novo utilizador exige infraestrutura adicional mais cara.',
            spark: 'Existe um limiar exato onde o custo de adicionar mais um cliente supera o ganho: chama-se Custo Marginal e derivação!',
          },
          whyItExists: {
            problemItSolves: 'Identificar o ponto ótimo de operação em qualquer sistema real onde retornos decrescentes competem com custos crescentes.',
            realWorldContexts: [
              { area: 'Gestão e Economia', example: 'Lucro Marginal: a derivada da função Lucro diz quanto rende produzir a próxima unidade. Quando o lucro marginal é zero, o lucro total atingiu o pico máximo.' },
              { area: 'Epidemiologia e Saúde Pública', example: 'Ponto de Inflexão de uma Pandemia: quando a 2.ª derivada do número de infetados se torna negativa, a velocidade de propagação começa a abrandar (mesmo que os casos totais ainda estejam a subir).' },
              { area: 'Engenharia de Veículos Elétricos', example: 'Otimização de velocidade de cruzeiro para maximizar a autonomia da bateria contra o atrito do ar (arrasto proporcional a v²).' },
            ],
            ahaQuote: 'A intuição do dia a dia pensa em totais; as decisões estratégicas tomam-se sempre na margem (na derivada)!',
          },
          intuition: {
            headline: 'Pensar na Margem: Onde Parar para Ganhar Mais',
            storyOrAnalogy: 'Imagina que tens um restaurante. O 1.º empregado gera 1000€ de lucro. O 2.º gera 800€. O 3.º gera 300€. O 4.º começa a atrapalhar na cozinha e gera -100€. Se olhares apenas para o lucro acumulado, ele ainda é positivo. Mas contratar o 4.º foi um erro! A derivada (o ganho do próximo empregado) passou para negativo.',
            keyTakeaway: 'Em qualquer processo real, o ponto ótimo nunca é produzir o máximo possível; é parar exatamente no momento em que a derivada se anula (Ganho Marginal = Custo Marginal).',
            visualMetaphor: 'Subir uma montanha com nevoeiro: sentes a inclinação debaixo dos pés. Quando o chão fica perfeitamente plano, estás no cume.',
          },
          predictionChallenge: {
            question: 'Se uma campanha de publicidade tem uma curva de novos clientes onde a derivada está a diminuir (embora ainda seja positiva), o que significa?',
            options: [
              { id: 'a', label: 'A campanha ainda ganha clientes, mas cada euro investido atrai menos pessoas do que antes (saturação)', isCorrect: true, explanationAfterTest: 'Exato! Estamos no regime de retornos decrescentes (concavidade voltada para baixo).' },
              { id: 'b', label: 'A empresa está a perder clientes existentes', isCorrect: false, explanationAfterTest: 'Como a derivada ainda é positiva, os clientes totais continuam a aumentar, apenas a um ritmo mais lento.' },
            ],
            simulatorInstruction: 'No simulador, observa a zona entre x = 0 e x = 1: a curva continua a subir, mas a inclinação vai ficando cada vez mais suave até ao pico.',
          },
          discovery: {
            patternsObserved: [
              'O ponto de inflexão (f\'\'=0) é o momento de aceleração máxima de uma tendência',
              'O ponto de máximo (f\'=0) é o limite da capacidade sustentável',
              'Ignorar a derivada leva a sobreinvestimento crónico em recursos ineficientes',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: a derivada é a ferramenta quantitativa que diz aos gestores e cientistas quando devem parar!',
          },
          formalization: {
            title: 'Modelos de Decisão Marginal',
            explanation: 'Tradução dos conceitos do 12.º ano para métricas de decisão de negócio e engenharia.',
            formulas: [
              { symbol: 'L(x) = R(x) - C(x)', meaningInPlainPortuguese: 'Lucro Total = Receita Total - Custo Total' },
              { symbol: 'L\'(x) = R\'(x) - C\'(x) = 0', meaningInPlainPortuguese: 'Ponto Ótimo de Produção: Receita Marginal = Custo Marginal' },
              { symbol: 'f\'\'(t) < 0', meaningInPlainPortuguese: 'Abrandamento da tendência (achatamento da curva)' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um software SaaS tem uma receita R(x) = 120x - x² (em milhares de euros) para x milhares de subscritores. Qual é o número ideal de subscritores para maximizar a receita?',
            steps: [
              { stepNumber: 1, title: 'Calcular a Receita Marginal R\'(x)', mathExpression: 'R\'(x) = (120x - x²)\' = 120 - 2x', intuitiveWhy: 'A derivada diz quanto cada novo milhar de utilizadores acrescenta à receita.' },
              { stepNumber: 2, title: 'Encontrar o ponto onde a receita marginal se anula', mathExpression: '120 - 2x = 0 ⇔ 2x = 120 ⇔ x = 60', intuitiveWhy: 'Com 60 mil subscritores, o sistema atinge a receita máxima de 120(60) - 60² = 3600 mil euros (3,6M€).' },
            ],
            finalConclusion: 'O ponto ótimo é x = 60 mil subscritores. Tentar atrair 70 mil forçaria descontos excessivos que reduziriam a receita global.',
          },
          tryItYourself: {
            prompt: 'Se a velocidade de propagação de um rumor nas redes sociais atinge o seu valor máximo no dia t = 4, o que acontece à função no gráfico nesse dia?',
            options: [
              { id: '1', text: 'É um Ponto de Inflexão (a aceleração passa a desaceleração)', isCorrect: true, whyWrongOrRight: 'Perfeito! O dia de maior velocidade de novos contágios é o ponto de inflexão da curva logística.', howToThink: 'Velocidade máxima da 1.ª derivada corresponde a zero da 2.ª derivada (inflexão).' },
              { id: '2', text: 'É o dia em que o rumor desaparece', isCorrect: false, whyWrongOrRight: 'Pelo contrário, é o dia de crescimento mais explosivo.', howToThink: 'Inflexão = ritmo mais intenso de propagação.' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_1',
              tier: 'Intermédio',
              question: 'Uma fábrica tem um custo de produção C(x) = 2x² + 40x + 500. Qual é o custo marginal da 10.ª unidade?',
              hint: 'Calcula a derivada C\'(x) = 4x + 40 e avalia em x = 10.',
              options: [
                { id: 'a', text: '80 € / unidade', isCorrect: true, whyWrongOrRight: 'Correto! C\'(10) = 4(10) + 40 = 80 €.', howToThink: 'Custo marginal = valor da derivada no ponto.' },
                { id: 'b', text: '1100 €', isCorrect: false, whyWrongOrRight: 'Isso é o custo total acumulado C(10), não o custo marginal da próxima unidade.', howToThink: 'Custo marginal mede o acréscimo pontual, não o acumulado.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Caso de Estudo Prático',
            problem: 'Um medicamento reduz a febre segundo T(t) = 39 - 2t + 0.25t² (graus Celsius após t horas). A que horas o medicamento deixa de fazer efeito e a febre começa a subir novamente?',
            strategyTip: 'Encontra o instante em que a temperatura atinge o valor mínimo (T\'(t) = 0).',
            options: [
              { id: 'a', text: 't = 4 horas', isCorrect: true, whyWrongOrRight: 'Exato! T\'(t) = -2 + 0.5t = 0 ⇔ 0.5t = 2 ⇔ t = 4 horas. A temperatura mínima é T(4) = 39 - 8 + 4 = 35°C.', howToThink: 'Deriva e anula para encontrar o ponto de viragem.' },
              { id: 'b', text: 't = 8 horas', isCorrect: false, whyWrongOrRight: 'Às 8 horas a febre já estaria a subir descontroladamente.', howToThink: 'O mínimo ocorre aos 4h.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que tomar decisões com base no Lucro Marginal é superior a olhar apenas para o Lucro Total acumulado?',
            methodCriteria: ['Lucro total esconde unidades individuais que dão prejuízo', 'Lucro marginal zero identifica o teto exato da rentabilidade'],
            whatIfQuestion: 'O que significa para uma economia se o PIB estiver a crescer com derivada segunda negativa?',
            whatIfAnswer: 'A economia ainda está a expandir, mas o ritmo de crescimento está a abrandar (desaceleração económica).',
            ownWordsPrompt: 'Como resumirias a utilidade da derivada para alguém que diz "A matemática não serve para nada na vida real"?',
            keyIdeasToInclude: ['Otimização', 'Decisão na margem', 'Previsão de viragens'],
          },
        },
      },
    },
  ],
};
