import { MathTopic } from '../../types/math';

export const sequencesTopic: MathTopic = {
  id: 'sucessoes',
  number: '06',
  title: 'Sucessões',
  subtitle: 'Monotonia, limitação, progressões, convergência e o número de Neper (e)',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Juros compostos contínuos, crescimento biológico, algoritmos de compressão e séries temporais.',
  subtopics: [
    {
      id: 'convergencia-neper',
      title: 'Convergência e o Limite de Neper (e)',
      shortDescription: 'Como uma sucessão infinita de passos discretos estabiliza na constante fundamental e ≈ 2,71828...',
      simulatorType: 'sequences',
      simulatorDefaultPreset: 'neper',
      coreIdeaInOneSentence: 'Uma sucessão é uma lista infinita e ordenada de números: se for monótona e limitada, converge com certeza!',
      progressionRoadmap: [
        { level: '6', summary: 'Os saltos do sapo: cada salto é mais pequeno que o anterior e aproxima-se de uma folha mágica.' },
        { level: '10', summary: 'Padrões de números: descobrir o termo seguinte e ver se os pontos sobem sempre ou descem.' },
        { level: '14', summary: 'Progressões Aritméticas vs Geométricas e o comportamento para números gigantescos (n → +∞).' },
        { level: '18', summary: 'Teorema das Sucessões Monótonas e Limitadas, indeterminações 1^∞ e o limite notável lim (1 + 1/n)ⁿ = e.' },
        { level: 'adulto', summary: 'O Nascimento de e: capitalização contínua de juros de Bernoulli e equações diferenciais na banca.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Se um sapinho saltar até uma parede dando passos que são sempre metade do que falta, ele chega a bater na parede?',
            scenario: 'O sapinho está a 2 metros da parede e dá saltos de 1 metro, depois 0,5 metros, depois 0,25 metros...',
            spark: 'Fica infinitamente perto da parede, tão perto que nem uma formiga passa pelo meio!',
          },
          whyItExists: {
            problemItSolves: 'Ajuda a saber onde vai parar uma fila de passos ou contagens quando nunca paramos de contar.',
            realWorldContexts: [
              { area: 'Contagens e Poupanças', example: 'Guardar moedas no mealheiro todos os meses.' },
            ],
            ahaQuote: 'Cada número é um passo; o limite é a meta onde todos os passos vão ter!',
          },
          intuition: {
            headline: 'Os Saltos do Sapo até à Meta',
            storyOrAnalogy: 'Pensa numa fila de sapinhos numerados: o 1.º sapinho (u₁), o 2.º sapinho (u₂), o 3.º sapinho (u₃)... Todos eles seguem a mesma regra secreta para saber onde saltar. À medida que o número do sapinho vai ficando gigante (n = 100, 1000), eles vão-se empilhando todos encostados a uma linha invisível chamada Limite.',
            keyTakeaway: 'Uma sucessão é uma fila ordenada de números que caminha em direção a um destino.',
            visualMetaphor: 'Pedras de calçada alinhadas num caminho que vai ficando cada vez mais reto.',
          },
          predictionChallenge: {
            question: 'No simulador, quando aumentas o número de termos n de 5 para 30, o que acontece aos pontos azuis?',
            options: [
              { id: 'a', label: 'Ficam cada vez mais alinhados e encostam-se à linha verde do limite', isCorrect: true, explanationAfterTest: 'Muito bem! Os pontos vão estabilizando no valor do limite!' },
              { id: 'b', label: 'Explodem para fora do ecrã', isCorrect: false, explanationAfterTest: 'Como a sucessão é limitada, ela não explode, estabiliza num número fixo.' },
            ],
            simulatorInstruction: 'Mexe no slider de n até 30 e repara na aproximação à linha verde.',
          },
          discovery: {
            patternsObserved: [
              'Cada ponto u_n está um pouco mais acima do anterior (Crescente)',
              'Nenhum ponto passa da linha verde de cima (Limitada Superiormente)',
              'A distância entre os pontos e a linha vai ficando microscópica (Convergência)',
            ],
            ahaMoment: 'Se uma sucessão sobe sempre mas tem um teto que não pode furar, ela tem obrigatoriamente de parar num limite!',
          },
          formalization: {
            title: 'A Regra dos Saltos',
            explanation: 'Uma sucessão tem termos numerados por 1, 2, 3... e pode ter um limite final L.',
            formulas: [
              { symbol: 'u_n', meaningInPlainPortuguese: 'O valor do termo número n' },
              { symbol: 'n → +∞', meaningInPlainPortuguese: 'Continuar a contar passos para sempre' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um sapinho dá saltos dados pela regra u_n = 4 - (1/n). Onde vai parar quando n for muito grande?',
            steps: [
              { stepNumber: 1, title: 'Calcular os primeiros saltos', mathExpression: 'u₁ = 4 - 1 = 3; u₂ = 4 - 0,5 = 3,5; u₁₀ = 4 - 0,1 = 3,9', intuitiveWhy: 'Os números vão aumentando e aproximando-se do 4.' },
              { stepNumber: 2, title: 'Ver o que acontece quando n é gigante', mathExpression: '1/n fica quase 0, logo u_n fica quase 4 - 0 = 4', intuitiveWhy: 'A fração 1/n desaparece.' },
            ],
            finalConclusion: 'A sucessão caminha para a meta L = 4.',
          },
          tryItYourself: {
            prompt: 'Se uma sucessão for u_n = 10 + (2/n), para onde vai o valor quando n for 1 000 000?',
            options: [
              { id: '1', text: 'Para 10 (pois 2/1000000 é praticamente zero)', isCorrect: true, whyWrongOrRight: 'Correto! 10 + 0 = 10. O limite da sucessão é 10.', howToThink: 'Dividir 2 por um número gigante dá quase zero.' },
              { id: '2', text: 'Para 0', isCorrect: false, whyWrongOrRight: 'O número 10 permanece fixo!', howToThink: '10 + 0 = 10, não 0.' },
            ],
          },
          practiceExercises: [
            {
              id: 'suc_6_1',
              tier: 'Base',
              question: 'Qual é o termo seguinte da sucessão: 2, 4, 6, 8, ...?',
              hint: 'Estamos a somar 2 em cada passo.',
              options: [
                { id: 'a', text: '10', isCorrect: true, whyWrongOrRight: 'Perfeito! 8 + 2 = 10.', howToThink: 'Identifica o padrão de somar 2.' },
                { id: 'b', text: '9', isCorrect: false, whyWrongOrRight: '9 quebraria o padrão dos números pares.', howToThink: 'Soma 2 ao 8.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio das Sucessões',
            problem: 'Se uma sucessão cresce sempre (1, 2, 3, 4, 5, 6, ...), ela tem limite finito?',
            strategyTip: 'Pensa se existe algum teto que a impeça de crescer.',
            options: [
              { id: 'a', text: 'Não, diverge para +∞ (não é limitada superiormente)', isCorrect: true, whyWrongOrRight: 'Exato! Sem um teto superior, ela cresce para infinito.', howToThink: 'Para convergir para um número fixo precisa de ser limitada.' },
              { id: 'b', text: 'Sim, pára no 100', isCorrect: false, whyWrongOrRight: 'Continua 101, 102... sem nunca parar.', howToThink: 'A contagem dos números naturais é infinita.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a diferença entre uma sucessão que explode para infinito e uma que estabiliza num número?',
            methodCriteria: ['A que explode não tem teto (não é limitada)', 'A que estabiliza aproxima-se cada vez mais de um valor fixo L (convergente)'],
            whatIfQuestion: 'O que aconteceria se os termos alternassem entre +1 e -1 (+1, -1, +1, -1)?',
            whatIfAnswer: 'A sucessão oscila para sempre e não tem limite (é divergente).',
            ownWordsPrompt: 'Explica o que é o limite de uma sucessão:',
            keyIdeasToInclude: ['Fila infinita', 'n tende para infinito', 'Estabilização num número'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Se dobrares uma folha de papel de 0,1 mm ao meio 50 vezes consecutivas, que espessura achas que atinge?',
            scenario: 'Muitas pessoas pensam que atinge a altura de um livro ou de uma mesa.',
            spark: 'Pela fórmula da Progressão Geométrica u_n = 0,1 × 2ⁿ, a espessura ultrapassa 112 milhões de quilómetros: quase a distância da Terra ao Sol!',
          },
          whyItExists: {
            problemItSolves: 'Permite calcular somas de termos infinitos e modelar processos discretos que evoluem passo a passo no tempo.',
            realWorldContexts: [
              { area: 'Economia e Juros', example: 'Cálculo de depósitos a prazo e amortização de empréstimos.' },
              { area: 'Informática e Algoritmos', example: 'Complexidade de algoritmos de ordenação (Merge Sort: O(n log n)).' },
            ],
            ahaQuote: 'As progressões aritméticas crescem a somar; as progressões geométricas crescem a multiplicar!',
          },
          intuition: {
            headline: 'Progressões Aritméticas vs Geométricas',
            storyOrAnalogy: 'Uma Progressão Aritmética (PA) soma sempre a mesma razão r (ex: 3, 7, 11, 15... com r = +4). O seu gráfico é uma reta discreta. Uma Progressão Geométrica (PG) multiplica sempre pela razão r (ex: 2, 6, 18, 54... com r = 3). O seu gráfico curva rapidamente para cima. Se numa PG a razão for menor que 1 (ex: r = 0,5), os termos encolhem rapidamente para zero (100, 50, 25, 12.5... → 0).',
            keyTakeaway: 'Quando a razão de uma PG está entre -1 e 1 (|r| < 1), a sucessão converge para zero.',
            visualMetaphor: 'Uma bola que salta no chão: cada ressalto atinge metade da altura do anterior até parar.',
          },
          predictionChallenge: {
            question: 'Na sucessão u_n = (1/2)ⁿ, para onde convergem os termos quando n cresce muito?',
            options: [
              { id: 'a', label: 'Convergem para 0 (pois 1/2, 1/4, 1/8, 1/16, 1/1024... → 0)', isCorrect: true, explanationAfterTest: 'Correto! Frações próprias elevadas a expoentes gigantescos tendem para zero!' },
              { id: 'b', label: 'Convergem para 1', isCorrect: false, explanationAfterTest: 'Os valores ficam cada vez mais pequenos, aproximando-se de zero.' },
            ],
            simulatorInstruction: 'Muda a razão r para 0.50 no simulador e repara como a curva cai para zero.',
          },
          discovery: {
            patternsObserved: [
              'PA: u_n = u₁ + (n - 1)r',
              'PG: u_n = u₁ · r^(n - 1)',
              'Se |r| < 1 na PG: lim u_n = 0',
            ],
            ahaMoment: 'A soma de infinitos termos de uma PG pode dar um número finito perfeitamente exato!',
          },
          formalization: {
            title: 'Termo Geral de Sucessões',
            explanation: 'Fórmulas para encontrar qualquer termo u_n sem ter de calcular todos os anteriores.',
            formulas: [
              { symbol: 'u_n = u₁ + (n - 1)r', meaningInPlainPortuguese: 'Termo geral de uma Progressão Aritmética' },
              { symbol: 'u_n = u₁ · r^(n - 1)', meaningInPlainPortuguese: 'Termo geral de uma Progressão Geométrica' },
              { symbol: 'S_n = (u₁ + u_n) · n / 2', meaningInPlainPortuguese: 'Soma dos primeiros n termos de uma PA' },
            ],
          },
          solvedExample: {
            problemStatement: 'Numa Progressão Aritmética, o 1.º termo é u₁ = 5 e a razão é r = 3. Qual é o 100.º termo (u₁₀₀)?',
            steps: [
              { stepNumber: 1, title: 'Aplicar a fórmula do termo geral da PA', mathExpression: 'u_n = u₁ + (n - 1)r', intuitiveWhy: 'Para chegar ao termo 100, somamos 99 vezes a razão 3.' },
              { stepNumber: 2, title: 'Substituir os valores n=100, u₁=5, r=3', mathExpression: 'u₁₀₀ = 5 + (100 - 1) × 3 = 5 + 99 × 3 = 5 + 297 = 302', intuitiveWhy: 'Fazemos o cálculo direto.' },
            ],
            finalConclusion: 'O centésimo termo é u₁₀₀ = 302.',
          },
          tryItYourself: {
            prompt: 'Qual é o 5.º termo de uma Progressão Geométrica com u₁ = 3 e razão r = 2?',
            options: [
              { id: '1', text: '48 (pois 3 × 2⁴ = 3 × 16 = 48)', isCorrect: true, whyWrongOrRight: 'Exato! u₅ = 3 × 2^(5-1) = 3 × 2⁴ = 3 × 16 = 48.', howToThink: 'Usa a fórmula u_n = u₁ · r^(n-1).' },
              { id: '2', text: '30', isCorrect: false, whyWrongOrRight: 'Multiplicaste por 2×5 em vez de elevar a 2⁴.', howToThink: 'Numa PG multiplica-se por r repetidamente (potência).' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_suc_1',
              tier: 'Base',
              question: 'Qual é a soma dos 10 primeiros números naturais ímpares (1, 3, 5, ..., 19)?',
              hint: 'A soma dos n primeiros ímpares é sempre n².',
              options: [
                { id: 'a', text: '100 (10² = 100)', isCorrect: true, whyWrongOrRight: 'Perfeito! S₁₀ = (1 + 19) × 10 / 2 = 200 / 2 = 100 = 10².', howToThink: 'Usa a fórmula da soma da PA ou a propriedade n² dos ímpares.' },
                { id: 'b', text: '90', isCorrect: false, whyWrongOrRight: 'Calcula (1 + 19) × 10 / 2 = 100.', howToThink: 'A média do primeiro e último é 10; 10 × 10 = 100.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio de Padrões',
            problem: 'Se um lago tem uma folha de nenúfar que duplica de área todos os dias e demora 30 dias a cobrir o lago todo, em que dia cobria metade do lago?',
            strategyTip: 'Como duplica todos os dias, no dia anterior cobria exatamente a metade!',
            options: [
              { id: 'a', text: 'No dia 29', isCorrect: true, whyWrongOrRight: 'Excelente! No dia 29 estava a metade; ao duplicar no dia 30 encheu o lago todo!', howToThink: 'Raciocínio inverso da progressão geométrica de razão 2.' },
              { id: 'b', text: 'No dia 15', isCorrect: false, whyWrongOrRight: 'A intuição linear engana: o crescimento exponencial dá o maior salto no último dia!', howToThink: 'Metade de 2³⁰ é 2²⁹, que corresponde ao dia 29.' },
            ],
          },
          verification: {
            methodQuestion: 'Como distingues uma Progressão Aritmética de uma Progressão Geométrica a partir de uma lista de números?',
            methodCriteria: ['Se a diferença entre termos consecutivos for constante (u_{n+1} - u_n = r), é PA', 'Se o quociente entre termos consecutivos for constante (u_{n+1} / u_n = r), é PG'],
            whatIfQuestion: 'O que aconteceria à soma infinita de uma PG se a razão fosse r = 2?',
            whatIfAnswer: 'A soma divergiria para +∞ (os termos crescem descontroladamente).',
            ownWordsPrompt: 'Explica o crescimento de uma PG face a uma PA:',
            keyIdeasToInclude: ['Multiplicar vs Somar', 'Crescimento explosivo', 'Convergência quando |r| < 1'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Se depositares 1€ no banco com uma taxa de 100% ao ano, quanto dinheiro tens no fim do ano se os juros forem calculados a cada segundo?',
            scenario: 'Se capitalizar 1 vez por ano ganhas 2€. Se capitalizar 2 vezes ganhas (1 + 1/2)² = 2,25€.',
            spark: 'Se capitalizares a cada microssegundo (n → +∞), o dinheiro não explode para infinito: estabiliza exatamente em e = 2,71828...€!',
          },
          whyItExists: {
            problemItSolves: 'Define a base natural dos logaritmos e exponenciais (número e), que é a única função cuja derivada é igual a si própria.',
            realWorldContexts: [
              { area: 'Biologia e Populações', example: 'Crescimento bacteriano contínuo segundo N(t) = N₀ e^(kt).' },
              { area: 'Datação Arqueológica', example: 'Decaimento do Carbono-14 para determinar a idade de fósseis (t = -ln(N/N₀)/λ).' },
            ],
            ahaQuote: 'O número e é a constante universal do crescimento contínuo, tal como o π é a constante do círculo!',
          },
          intuition: {
            headline: 'A Sucessão de Neper: lim (1 + 1/n)ⁿ = e',
            storyOrAnalogy: 'Imagina a sucessão u_n = (1 + 1/n)ⁿ. Quando n = 1: (1 + 1)¹ = 2. Quando n = 2: (1 + 0,5)² = 2,25. Quando n = 100: (1 + 0,01)¹⁰⁰ = 2,7048. Quando n = 1 000 000: o valor aproxima-se de 2,71828... A base (1 + 1/n) aproxima-se de 1 (o que tenderia a encolher o resultado), mas o expoente n cresce para infinito (o que tenderia a explodir o resultado). O equilíbrio perfeito entre estas duas forças dá o Número de Neper e.',
            keyTakeaway: 'A indeterminação 1^∞ dá origem à constante mais importante do cálculo: e ≈ 2,71828.',
            visualMetaphor: 'Um cabo de guerra perfeito entre uma base que quer ser 1 e um expoente que quer ir para infinito.',
          },
          predictionChallenge: {
            question: 'No simulador de Sucessões, quando escolhes o modo "Sucessão de Neper (1 + 1/n)ⁿ", a que valor se aproxima a linha verde?',
            options: [
              { id: 'a', label: 'e ≈ 2,71828', isCorrect: true, explanationAfterTest: 'Perfeito! É a definição histórica e analítica do Número de Neper!' },
              { id: 'b', label: '1,00000', isCorrect: false, explanationAfterTest: '1 seria se o expoente não estivesse a crescer com n!' },
            ],
            simulatorInstruction: 'Seleciona o botão "Sucessão de Neper (1 + 1/n)ⁿ" no simulador e repara no limite.',
          },
          discovery: {
            patternsObserved: [
              'A sucessão u_n = (1 + 1/n)ⁿ é estritamente crescente',
              'É superiormente limitada por 3 (u_n < 3 para todo o n)',
              'Converge para o número irracional e = 2,718281828...',
            ],
            ahaMoment: 'O número de Neper não foi inventado: foi descoberto como a taxa máxima de crescimento contínuo!',
          },
          formalization: {
            title: 'Limites de Sucessões e o Número de Neper',
            explanation: 'Definição formal do limite de Neper e generalizações.',
            formulas: [
              { symbol: 'lim_{n → ∞} (1 + 1/n)ⁿ = e', meaningInPlainPortuguese: 'Limite fundamental de Neper (e ≈ 2,71828)' },
              { symbol: 'lim_{n → ∞} (1 + k/n)ⁿ = e^k', meaningInPlainPortuguese: 'Generalização para qualquer constante k real' },
              { symbol: 'lim (a_n / b_n) com polinómios', meaningInPlainPortuguese: 'Regra dos termos de maior grau quando n → +∞' },
            ],
          },
          solvedExample: {
            problemStatement: 'Calcula o limite da sucessão v_n = (1 + 3/n)ⁿ quando n → +∞.',
            steps: [
              { stepNumber: 1, title: 'Identificar a estrutura de Neper', mathExpression: 'v_n = (1 + 3/n)ⁿ = [ (1 + 1/(n/3))^(n/3) ]³', intuitiveWhy: 'Fazemos a mudança de variável m = n/3.' },
              { stepNumber: 2, title: 'Aplicar o limite notável', mathExpression: 'lim_{m → ∞} [ (1 + 1/m)ᵐ ]³ = e³', intuitiveWhy: 'A base converge para e e o expoente exterior 3 mantém-se.' },
            ],
            finalConclusion: 'O limite é e³ ≈ 20,085.',
          },
          tryItYourself: {
            prompt: 'Qual é o valor do limite lim_{n → ∞} (1 - 2/n)ⁿ?',
            options: [
              { id: '1', text: 'e⁻² = 1 / e²', isCorrect: true, whyWrongOrRight: 'Exato! Pela fórmula geral lim (1 + k/n)ⁿ = e^k com k = -2, o resultado é e⁻² = 1/e².', howToThink: 'Identifica o valor de k = -2 na fórmula de Neper.' },
              { id: '2', text: '1', isCorrect: false, whyWrongOrRight: 'A indeterminação 1^∞ não é 1; com k = -2 o limite é e⁻².', howToThink: 'Aplica a fórmula geral e^k.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_suc_1',
              tier: 'Intermédio',
              question: 'Calcula o limite da sucessão racional w_n = (6n² + 5) / (2n² - n) quando n → +∞.',
              hint: 'Mantém apenas os termos de maior grau do numerador e denominador: (6n²) / (2n²).',
              options: [
                { id: 'a', text: '3 (pois 6n² / 2n² = 6/2 = 3)', isCorrect: true, whyWrongOrRight: 'Perfeito! Em frações de polinómios com o mesmo grau quando n → +∞, o limite é o quociente dos coeficientes principais: 6/2 = 3.', howToThink: 'Divide o termo de maior grau do numerador pelo do denominador.' },
                { id: 'b', text: '+∞', isCorrect: false, whyWrongOrRight: 'Como os graus são iguais (grau 2), o limite é um número finito 3.', howToThink: 'Graus iguais ⇒ limite é a razão dos coeficientes.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte para o 12.º Ano',
            problem: 'Se uma sucessão u_n satisfaz 2 ≤ u_n ≤ 2 + 1/n para todo o n ∈ ℕ, qual é o limite de u_n pelo Teorema das Sucessões Enquadradas?',
            strategyTip: 'lim (2) = 2 e lim (2 + 1/n) = 2 + 0 = 2.',
            options: [
              { id: 'a', text: 'lim u_n = 2 (Teorema do Confronto / Enquadramento)', isCorrect: true, whyWrongOrRight: 'Excelente! Como u_n está "entalada" entre duas sucessões que convergem para 2, é forçada a convergir para 2!', howToThink: 'Teorema das Sucessões Enquadradas (Sanduíche).' },
              { id: 'b', text: 'O limite não existe', isCorrect: false, whyWrongOrRight: 'O teorema garante a existência e o valor exato 2.', howToThink: 'Se os extremos convergem para o mesmo valor, o meio converge obrigatoriamente para esse valor.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que a indeterminação 1^∞ em sucessões não dá simplesmente 1?',
            methodCriteria: ['A base não é exatamente 1, aproxima-se de 1 à velocidade 1/n', 'O expoente n tende para infinito', 'O resultado depende da competição entre a velocidade de aproximação à base e o expoente'],
            whatIfQuestion: 'O que aconteceria ao limite se tivéssemos (1 + 1/n²)^n?',
            whatIfAnswer: 'O limite seria 1, porque a base aproxima-se de 1 mais depressa (1/n²) do que o expoente cresce (n).',
            ownWordsPrompt: 'Explica o significado do Número de Neper e:',
            keyIdeasToInclude: ['Limite de sucessão', 'Crescimento contínuo', 'e ≈ 2,71828'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Como demonstra o Exame Nacional que uma sucessão definida por recorrência u₁ = 1 e u_{n+1} = √(2 + u_n) é convergente?',
            scenario: 'Itens clássicos de indução matemática e convergência no 12.º ano.',
            spark: 'Pelo Teorema Fundamental das Sucessões Monótonas e Limitadas: provamos por Indução que é crescente e limitada superiormente por 2, logo converge obrigatoriamente para L = 2!',
          },
          whyItExists: {
            problemItSolves: 'Garante a convergência de métodos iterativos em análise numérica (Método de Newton-Raphson, algoritmos de ponto fixo e PageRank da Google).',
            realWorldContexts: [
              { area: 'Algoritmos e Análise Numérica', example: 'Cálculo de raízes quadradas por iteração de Heron de Alexandria (u_{n+1} = (u_n + a/u_n)/2).' },
              { area: 'Finanças Quantitativas', example: 'Modelos de Black-Scholes para precificação de opções financeiras com limites contínuos.' },
            ],
            ahaQuote: 'Toda a sucessão real monótona e limitada é convergente (Axioma do Supremo / Completude de ℝ)!',
          },
          intuition: {
            headline: 'Completude de ℝ, Monotonia e Limitação',
            storyOrAnalogy: 'O Teorema das Sucessões Monótonas e Limitadas é o pilar da análise real. Se uma sucessão sobe sempre (u_{n+1} ≥ u_n) e tem um teto superior M (u_n ≤ M para todo o n), os seus termos não podem saltar para trás nem furar o teto. Como o conjunto dos números reais ℝ não tem "buracos", a sucessão é obrigada a acumular-se no supremo desse conjunto, que é o seu limite L ≤ M.',
            keyTakeaway: 'Monótona Crescente + Majorada ⇒ Convergente; Monótona Decrescente + Minorada ⇒ Convergente.',
            visualMetaphor: 'Um pistão hidráulico a empurrar água num cilindro fechado: o nível sobe mas estabiliza perfeitamente na tampa.',
          },
          predictionChallenge: {
            question: 'Se u_{n+1} = √(2 + u_n) com u₁ = 1 é convergente para o limite L, qual é o valor exato de L resolvendo a equação de ponto fixo L = √(2 + L)?',
            options: [
              { id: 'a', label: 'L = 2 (pois L² = 2 + L ⇒ L² - L - 2 = 0 ⇒ (L - 2)(L + 1) = 0 ⇒ L = 2)', isCorrect: true, explanationAfterTest: 'Brilhante! Como os termos são positivos, L = 2!' },
              { id: 'b', label: 'L = √2', isCorrect: false, explanationAfterTest: 'Substituindo √2 na equação: √(2 + √2) ≈ 1,84 ≠ √2.' },
            ],
            simulatorInstruction: 'Lembra-te: passando o limite em ambos os membros da relação de recorrência obtém-se L = f(L).',
          },
          discovery: {
            patternsObserved: [
              'Princípio de Indução Matemática para provar propriedades para todo o n ∈ ℕ',
              'Subsucessões: se u_n converge para L, todas as suas subsucessões (como u_{2n} e u_{2n+1}) convergem para L',
              'Se uma sucessão tem duas subsucessões com limites diferentes, a sucessão não tem limite (diverge)',
            ],
            ahaMoment: 'Passar o limite numa relação de recorrência u_{n+1} = f(u_n) transforma um problema infinito numa equação algébrica L = f(L)!',
          },
          formalization: {
            title: 'Formulário Oficial de Sucessões (12.º Ano)',
            explanation: 'Teoremas e limites notáveis de acordo com a matriz do IAVE.',
            formulas: [
              { symbol: 'u_n crescente ∧ u_n ≤ M ⇒ ∃ lim u_n = L ≤ M', meaningInPlainPortuguese: 'Teorema das Sucessões Monótonas e Limitadas' },
              { symbol: 'lim_{n → ∞} (1 + a/n)^(bn) = e^(ab)', meaningInPlainPortuguese: 'Forma canónica generalizada do limite de Neper' },
              { symbol: 'lim_{n → ∞} (u_n)^(v_n) com 1^∞ = e^(lim v_n(u_n - 1))', meaningInPlainPortuguese: 'Fórmula exponencial para indeterminações do tipo 1^∞' },
            ],
            commonMistakes: [
              'Concluir que uma sucessão limitada é obrigatoriamente convergente (contraexemplo: u_n = (-1)ⁿ é limitada entre -1 e 1 mas não converge!).',
              'Esquecer a hipótese de indução ao provar propriedades por PIM no exame.',
              'Trocar as potências ao calcular limites de Neper compostos.',
            ],
          },
          solvedExample: {
            problemStatement: 'Item de Exame Nacional: Calcula o limite da sucessão u_n = [ (n + 2) / (n - 1) ]^(3n).',
            steps: [
              { stepNumber: 1, title: 'Identificar a indeterminação', mathExpression: 'lim (n+2)/(n-1) = 1 e lim 3n = +∞ ⇒ Indeterminação 1^∞', intuitiveWhy: 'A base tende para 1 e o expoente para infinito.' },
              { stepNumber: 2, title: 'Reescrever a base na forma (1 + k/n)', mathExpression: '(n + 2)/(n - 1) = (n - 1 + 3)/(n - 1) = 1 + 3/(n - 1)', intuitiveWhy: 'Dividimos o numerador pelo denominador.' },
              { stepNumber: 3, title: 'Ajustar os expoentes para o limite notável', mathExpression: '[ (1 + 3/(n - 1))^(n - 1) ]³ · [ 1 + 3/(n - 1) ]³', intuitiveWhy: 'Como 3n = 3(n - 1) + 3, separamos o produto de potências.' },
              { stepNumber: 4, title: 'Calcular o limite final', mathExpression: '(e³)³ · (1 + 0)³ = e⁹ · 1 = e⁹', intuitiveWhy: 'Aplicamos o limite notável de Neper.' },
            ],
            finalConclusion: 'O limite da sucessão é e⁹.',
          },
          tryItYourself: {
            prompt: 'Qual é o valor do limite lim_{n → ∞} [ (n - 3) / n ]^(2n)?',
            options: [
              { id: '1', text: 'e⁻⁶ (pois [ (1 - 3/n)ⁿ ]² = (e⁻³)² = e⁻⁶)', isCorrect: true, whyWrongOrRight: 'Exato! (1 - 3/n)^(2n) = [ (1 + (-3)/n)ⁿ ]² = (e⁻³)² = e⁻⁶.', howToThink: 'Aplica a fórmula canónica com a = -3 e b = 2: e^(ab) = e^(-3×2) = e⁻⁶.' },
              { id: '2', text: 'e⁻³', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de multiplicar pelo coeficiente 2 do expoente 2n.', howToThink: 'O expoente 2n multiplica o argumento da exponencial: (-3) × 2 = -6.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_suc_1',
              tier: 'Exame / Desafio',
              question: 'Seja a_n uma sucessão tal que lim a_n = +∞. Qual é o valor de lim_{n → ∞} [ 1 + 1/a_n ]^(a_n)?',
              hint: 'Por mudança de variável y = a_n com y → +∞.',
              options: [
                { id: 'a', text: 'e', isCorrect: true, whyWrongOrRight: 'Perfeito! Pelo teorema do limite da composta de sucessões, se a_n → +∞, lim (1 + 1/a_n)^(a_n) = e.', howToThink: 'O limite notável de Neper é válido para qualquer sucessão que tenda para infinito.' },
                { id: 'b', text: '1', isCorrect: false, whyWrongOrRight: 'É a definição clássica do limite de Neper.', howToThink: 'lim (1 + 1/u_n)^(u_n) = e se u_n → +∞.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'Considera a sucessão u_n = (2n + (-1)ⁿ) / (3n + 1). Mostra que u_n é convergente e determina o seu limite.',
            strategyTip: 'Usa o Teorema das Sucessões Enquadradas notando que -1 ≤ (-1)ⁿ ≤ 1.',
            options: [
              { id: 'a', text: 'lim u_n = 2/3 (enquadrada entre (2n - 1)/(3n + 1) e (2n + 1)/(3n + 1), ambas com limite 2/3)', isCorrect: true, whyWrongOrRight: 'Excelente! Como (2n-1)/(3n+1) ≤ u_n ≤ (2n+1)/(3n+1) e ambos os extremos convergem para 2/3, pelo Teorema das Sucessões Enquadradas u_n converge para 2/3.', howToThink: 'Enquadramento clássico para eliminar termos oscilantes limitados.' },
              { id: 'b', text: 'Diverge devido ao termo oscilante (-1)ⁿ', isCorrect: false, whyWrongOrRight: 'O termo oscilante está dividido por n, logo a sua influência tende para zero quando n → +∞.', howToThink: 'Termo limitado a dividir por infinito vai para zero.' },
            ],
          },
          verification: {
            methodQuestion: 'Como demonstras por Indução Matemática que uma sucessão por recorrência é estritamente crescente?',
            methodCriteria: ['Base: verificar que u₁ < u₂', 'Hipótese de Indução: admitir que u_k < u_{k+1}', 'Tese: demonstrar que u_{k+1} < u_{k+2} aplicando a relação de recorrência'],
            whatIfQuestion: 'O que aconteceria se uma sucessão satisfizesse |u_{n+1} - u_n| < (1/2)ⁿ?',
            whatIfAnswer: 'A sucessão seria uma Sucessão de Cauchy em ℝ, o que garante a sua convergência (Critério de Cauchy).',
            ownWordsPrompt: 'Explica o Teorema das Sucessões Monótonas e Limitadas e a sua importância:',
            keyIdeasToInclude: ['Crescente + Limitada Superiormente', 'Existência de limite', 'Completude dos números reais'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Porque é que o matemático Jacob Bernoulli descobriu o número e em 1683 quando estava a estudar juros bancários?',
            scenario: 'Bernoulli perguntou: se um banco pagar 100% de juro ao ano, o que acontece se o juro for creditado todos os meses? E todos os dias? E continuamente a cada instante?',
            spark: 'Ele descobriu que mesmo capitalizando ao microssegundo, 1€ nunca passa de 2,718€! O número e é o limite biológico e financeiro do crescimento contínuo!',
          },
          whyItExists: {
            problemItSolves: 'Permite modelar a transição entre processos discretos (passo a passo) e processos contínuos em finanças, física quântica e inteligência artificial.',
            realWorldContexts: [
              { area: 'Banca e Produtos Financeiros', example: 'Juros Compostos Contínuos: Capital Acumulado C(t) = C₀ e^(rt), usado em swaps de taxas de juro e mercados de derivados.' },
              { area: 'Farmacologia e Farmacocinética', example: 'Eliminação de fármacos da corrente sanguínea (tempo de meia-vida t_{1/2} = ln(2)/k).' },
            ],
            ahaQuote: 'As sucessões são os fotogramas de um filme; o limite contínuo com e é o filme a rodar sem pausas!',
          },
          intuition: {
            headline: 'De Bernoulli a Wall Street: A Fórmula do Crescimento Contínuo',
            storyOrAnalogy: 'Se investires 10 000€ a uma taxa anual r = 5% durante t = 10 anos: com capitalização anual ganhas 10 000 × (1 + 0,05)¹⁰ = 16 288,95€. Mas se o banco capitalizar os juros a cada milissegundo (capitalização contínua), a fórmula da sucessão torna-se a exponencial de Neper: 10 000 × e^(0,05 × 10) = 10 000 × e^(0,5) = 16 487,21€. O ganho extra de quase 200€ provém dos juros sobre juros creditados instantaneamente.',
            keyTakeaway: 'O número e é o multiplicador natural de qualquer sistema que cresce proporcionalmente ao seu tamanho atual em cada fração de segundo.',
            visualMetaphor: 'Uma bola de neve a rolar numa encosta: quanto maior fica, mais neve agarra a cada milímetro.',
          },
          predictionChallenge: {
            question: 'Se a taxa de juro contínua for r = 7% ao ano, quanto tempo demora um investimento a duplicar de valor (regra do ln 2)?',
            options: [
              { id: 'a', label: 'Aproximadamente 10 anos (pois ln(2) / 0,07 ≈ 0,693 / 0,07 ≈ 9,9 anos)', isCorrect: true, explanationAfterTest: 'Exato! É a famosa "Regra dos 70" do mercado financeiro (70 / 7 = 10 anos)!' },
              { id: 'b', label: '14,3 anos (100 / 7)', isCorrect: false, explanationAfterTest: '14,3 anos seria com juros simples sem capitalização contínua. Com juros compostos contínuos o tempo é ln(2)/r.' },
            ],
            simulatorInstruction: 'Lembra-te: e^(rt) = 2 ⇒ rt = ln(2) ≈ 0,693.',
          },
          discovery: {
            patternsObserved: [
              'Capitalização Discreta (n vezes ao ano): C_n = C₀(1 + r/n)^(nt)',
              'Capitalização Contínua (lim n → ∞): C(t) = C₀ e^(rt)',
              'Regra dos 70: o tempo de duplicação é aproximadamente 70 / (taxa percentual)',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: o número de Neper nasceu nos bancos para calcular a acumulação contínua de capital!',
          },
          formalization: {
            title: 'Modelos de Capitalização Contínua',
            explanation: 'Tradução do limite de Neper para a matemática financeira moderna.',
            formulas: [
              { symbol: 'C(t) = C₀ · e^(rt)', meaningInPlainPortuguese: 'Fórmula de Capitalização Contínua (C₀ = capital inicial, r = taxa anual, t = anos)' },
              { symbol: 't_duplicação = ln(2) / r ≈ 0.693 / r', meaningInPlainPortuguese: 'Tempo necessário para duplicar o capital investido' },
              { symbol: 'N(t) = N₀ · e^(-λt)', meaningInPlainPortuguese: 'Lei de Decaimento Radioativo (o inverso dos juros compostos)' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um aforrador investe 50 000€ a uma taxa de juro contínua de 4% ao ano (r = 0,04). Qual é o saldo da conta ao fim de 5 anos?',
            steps: [
              { stepNumber: 1, title: 'Calcular o expoente r · t', mathExpression: 'r · t = 0,04 × 5 = 0,20', intuitiveWhy: 'Taxa acumulada ao longo de 5 anos.' },
              { stepNumber: 2, title: 'Calcular o fator de crescimento e^(0,20)', mathExpression: 'e^(0,20) ≈ 1,22140', intuitiveWhy: 'O capital valoriza 22,14%.' },
              { stepNumber: 3, title: 'Multiplicar pelo capital inicial', mathExpression: 'C(5) = 50 000 × 1,22140 = 61 070,14 €', intuitiveWhy: 'Saldo final acumulado com juros contínuos.' },
            ],
            finalConclusion: 'O saldo ao fim de 5 anos é de 61 070,14 € (um ganho de 11 070,14 €).',
          },
          tryItYourself: {
            prompt: 'Se uma startup está a crescer a uma taxa contínua de 100% ao ano (r = 1,0), por que fator multiplica a sua receita em 1 ano?',
            options: [
              { id: '1', text: 'Por e ≈ 2,718 vezes (quase triplica!)', isCorrect: true, whyWrongOrRight: 'Correto! C(1) = C₀ · e^(1,0 × 1) = C₀ · e ≈ 2,718 C₀.', howToThink: 'Aplica a fórmula com r = 1 e t = 1: e¹ = e.' },
              { id: '2', text: 'Por 2,0 vezes', isCorrect: false, whyWrongOrRight: '2 vezes seria com juros simples creditados apenas no último dia.', howToThink: 'O crescimento contínuo rende e ≈ 2,718 vezes.' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_suc_1',
              tier: 'Intermédio',
              question: 'Porque é que em matemática financeira o logaritmo natural ln(x) é chamado de "taxa de rentabilidade continuamente composta"?',
              hint: 'Se C₁ = C₀ e^r, então r = ln(C₁ / C₀).',
              options: [
                { id: 'a', text: 'Porque converte multiplicações de retornos em simples adições de taxas temporais (r_total = r₁ + r₂)', isCorrect: true, whyWrongOrRight: 'Exato! As taxas logarítmicas são aditivas no tempo, tornando a análise de risco de ações e fundos muito mais simples.', howToThink: 'Propriedade aditiva dos logaritmos em finanças.' },
                { id: 'b', text: 'Porque elimina os impostos bancários', isCorrect: false, whyWrongOrRight: 'Não tem relação com fiscalidade.', howToThink: 'A vantagem é a aditividade temporal das taxas contínuas.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Caso de Estudo Financeiro',
            problem: 'Dois bancos oferecem opções para investir 100 000€ a 10 anos: o Banco A oferece 6% com capitalização simples anual; o Banco B oferece 5,8% com capitalização contínua. Qual é a melhor opção?',
            strategyTip: 'Banco A: 100k × (1,06)¹⁰ = 179 084€. Banco B: 100k × e^(0,058 × 10) = 100k × e^(0,58) ≈ 178 603€.',
            options: [
              { id: 'a', text: 'Banco A é ligeiramente superior (179 084€ vs 178 603€ do Banco B)', isCorrect: true, whyWrongOrRight: 'Perfeito! A taxa de 6% do Banco A é alta o suficiente para compensar a capitalização contínua do Banco B (que equivaleria a uma taxa anual de e^0,058 - 1 ≈ 5,97%).', howToThink: 'Compara os capitais finais calculados com precisão.' },
              { id: 'b', text: 'Banco B é sempre melhor porque capitaliza continuamente', isCorrect: false, whyWrongOrRight: 'A capitalização contínua ajuda, mas a diferença de taxa (6,0% vs 5,8%) foi decisiva.', howToThink: 'Faz sempre o cálculo quantitativo rigoroso.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a um investidor a diferença prática entre capitalização anual, mensal e contínua?',
            methodCriteria: ['Mensal calcula juros sobre juros 12 vezes ao ano', 'Contínua é o limite matemático quando os juros são creditados instantaneamente a cada segundo', 'A diferença atinge o limite máximo dado pelo número de Neper e'],
            whatIfQuestion: 'O que aconteceria se tentássemos inventar um banco que capitalizasse mais depressa que o tempo contínuo?',
            whatIfAnswer: 'É fisicamente e matematicamente impossível: o limite lim_{n→∞} (1 + r/n)^n = e^r já representa a frequência infinita máxima.',
            ownWordsPrompt: 'Resume a relevância do número de Neper e das sucessões na economia real:',
            keyIdeasToInclude: ['Juros contínuos', 'Bernoulli', 'Decaimento exponencial', 'e ≈ 2,718'],
          },
        },
      },
    },
  ],
};
