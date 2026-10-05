import { MathTopic } from '../../types/math';

export const probabilityTopic: MathTopic = {
  id: 'probabilidades',
  number: '02',
  title: 'Probabilidades e Estatística',
  subtitle: 'Lei dos Grandes Números, probabilidade condicionada, combinatória e distribuições',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Gestão de risco financeiro, diagnósticos médicos, inteligência artificial e ensaios clínicos.',
  subtopics: [
    {
      id: 'grandes-numeros',
      title: 'Lei dos Grandes Números e Frequência Relativa',
      shortDescription: 'Como o caos e a aleatoriedade de curto prazo se transformam em previsibilidade matemática absoluta.',
      simulatorType: 'probability',
      simulatorDefaultPreset: 'coins',
      coreIdeaInOneSentence: 'Com poucas tentativas tudo é imprevisível; com milhares de repetições, a frequência aproxima-se com certeza da probabilidade teórica.',
      progressionRoadmap: [
        { level: '6', summary: 'Moeda mágica: cara ou coroa e o que acontece quando jogamos muitas vezes.' },
        { level: '10', summary: 'Experiência de 10 a 10.000 lançamentos: a linha treme no início e acalma no fim.' },
        { level: '14', summary: 'Frequência relativa f_n(A) = k/n e a convergência para a probabilidade teórica P(A).' },
        { level: '18', summary: 'Lei Fraca dos Grandes Números, axiomatização de Kolmogorov e intervalos de confiança.' },
        { level: 'adulto', summary: 'Vantagem da casa nos casinos, modelos de risco em seguradoras e testes A/B.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Se lançares uma moeda 4 vezes e sair sempre Cara, a moeda está estragada?',
            scenario: 'Estás a jogar com um amigo e saíram 4 Caras seguidas.',
            spark: 'Não! No início a sorte pode enganar-nos, mas se jogares 100 vezes, o número de Caras e Coroas fica quase igual!',
          },
          whyItExists: {
            problemItSolves: 'Ajuda a saber o que é justo e o que podemos esperar quando jogamos jogos de sorte.',
            realWorldContexts: [
              { area: 'Jogos de Tabuleiro', example: 'Saber que nenhum número do dado é "azarado" se jogares muitas vezes.' },
            ],
            ahaQuote: 'A sorte é brincalhona a curto prazo, mas honesta a longo prazo!',
          },
          intuition: {
            headline: 'A Balança Mágica da Moeda',
            storyOrAnalogy: 'Imagina dois pratos de uma balança. No início, cada moeda que cai faz a balança abanar com força de um lado para o outro. Mas quando já lá estão centenas de moedas, a balança equilibra-se perfeitamente a meio: metade para a Cara (50%) e metade para a Coroa (50%).',
            keyTakeaway: 'Quanto mais vezes repetires uma experiência, mais perto ficas da verdade!',
            visualMetaphor: 'Um lago agitado que fica completamente espelhado e calmo quando olhas de longe.',
          },
          predictionChallenge: {
            question: 'O que achas que vai acontecer se lançares a moeda 1 000 vezes no simulador?',
            options: [
              { id: 'a', label: 'Vai dar quase exatamente 50% de Caras', isCorrect: true, explanationAfterTest: 'Muito bem! Com 1 000 lançamentos a linha azul encosta-se à linha verde dos 50%!' },
              { id: 'b', label: 'Vai dar 100% de Caras', isCorrect: false, explanationAfterTest: 'A moeda é justa, logo Coroa também sai muitas vezes.' },
            ],
            simulatorInstruction: 'Clica no botão "1 000 vezes" no simulador e observa o gráfico.',
          },
          discovery: {
            patternsObserved: [
              'Com 10 lançamentos: a percentagem salta para 70% ou 30%',
              'Com 100 lançamentos: aproxima-se dos 50%',
              'Com 10 000 lançamentos: fica praticamente colada aos 50,0%',
            ],
            ahaMoment: 'O segredo da probabilidade não é adivinhar a próxima jogada; é saber o que acontece no total de muitas jogadas!',
          },
          formalization: {
            title: 'A Lei do Equilíbrio',
            explanation: 'A probabilidade teórica de sair Cara numa moeda equilibrada é de 1 em 2 (ou seja, 50%).',
            formulas: [
              { symbol: 'P(Cara) = 1/2', meaningInPlainPortuguese: 'Metade das vezes deve sair Cara' },
              { symbol: 'n muito grande', meaningInPlainPortuguese: 'Jogar muitas e muitas vezes' },
            ],
          },
          solvedExample: {
            problemStatement: 'O Martim lançou uma moeda 10 vezes e saíram 8 Caras. A Luísa lançou a mesma moeda 1 000 vezes e saíram 512 Caras. Quem está mais perto dos 50%?',
            steps: [
              { stepNumber: 1, title: 'Calcular a percentagem do Martim', mathExpression: '8 / 10 = 80%', intuitiveWhy: 'Com poucas tentativas o desvio foi de 30%!' },
              { stepNumber: 2, title: 'Calcular a percentagem da Luísa', mathExpression: '512 / 1000 = 51,2%', intuitiveWhy: 'Com muitas tentativas o desvio foi de apenas 1,2%!' },
            ],
            finalConclusion: 'A Luísa está muito mais perto dos 50% porque fez muito mais lançamentos.',
          },
          tryItYourself: {
            prompt: 'Se quiseres ter a certeza quase absoluta de que uma moeda não é viciada, o que deves fazer?',
            options: [
              { id: '1', text: 'Lançá-la muitas vezes (ex: 500 vezes) e registar os resultados', isCorrect: true, whyWrongOrRight: 'Correto! Apenas com muitas repetições a lei dos grandes números funciona.', howToThink: 'Mais dados = maior certeza.' },
              { id: '2', text: 'Lançá-la só 2 vezes com muita força', isCorrect: false, whyWrongOrRight: '2 lançamentos não provam nada: podia calhar 2 Caras por pura sorte.', howToThink: 'Amostras pequenas enganam.' },
            ],
          },
          practiceExercises: [
            {
              id: 'prob_6_1',
              tier: 'Base',
              question: 'Num saco com 1 berlinde azul e 1 berlinde vermelho, qual é a hipótese de tirar o azul à primeira?',
              hint: 'Há 1 azul em 2 berlindes no total.',
              options: [
                { id: 'a', text: '1 em 2 (50%)', isCorrect: true, whyWrongOrRight: 'Perfeito! É a mesma probabilidade de uma moeda.', howToThink: 'Casos favoráveis / Casos possíveis.' },
                { id: 'b', text: 'Certeza absoluta (100%)', isCorrect: false, whyWrongOrRight: 'O vermelho também pode sair!', howToThink: 'Há 2 hipóteses iguais.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio das Probabilidades',
            problem: 'Se um dado tem 6 faces numeradas de 1 a 6, quantas vezes deves esperar ver o número 6 se o lançares 600 vezes?',
            strategyTip: '1 em cada 6 lançamentos deve dar o número 6.',
            options: [
              { id: 'a', text: 'Cerca de 100 vezes (600 ÷ 6)', isCorrect: true, whyWrongOrRight: 'Exato! 600 × (1/6) = 100 vezes.', howToThink: 'Multiplica o total de lançamentos pela probabilidade teórica.' },
              { id: 'b', text: 'Exatamente 6 vezes', isCorrect: false, whyWrongOrRight: 'Isso seria se lançasses apenas 36 vezes.', howToThink: 'Com 600 lançamentos a frequência esperada é 100.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que não podemos prever com certeza o que vai sair no próximo lançamento individual?',
            methodCriteria: ['Cada lançamento é aleatório e independente', 'A probabilidade aplica-se ao conjunto e não a uma jogada isolada'],
            whatIfQuestion: 'O que aconteceria se a moeda tivesse duas Caras?',
            whatIfAnswer: 'A probabilidade seria 100% (1,0) e a linha estaria sempre no topo.',
            ownWordsPrompt: 'Explica o que aprendeste sobre lançar moedas muitas vezes:',
            keyIdeasToInclude: ['Muitas repetições', '50%', 'Aproximação'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Porque é que os casinos ganham sempre dinheiro mesmo quando alguns jogadores têm sorte e ganham prémios?',
            scenario: 'Um jogador pode entrar no casino e ganhar 1 000€ numa única rodada.',
            spark: 'Mas o casino recebe dezenas de milhares de jogadas por dia: pela Lei dos Grandes Números, a média global segue rigorosamente a matemática!',
          },
          whyItExists: {
            problemItSolves: 'Permite calcular probabilidades reais através de experiências repetidas (método de Monte Carlo).',
            realWorldContexts: [
              { area: 'Previsão Meteorológica', example: 'Correr milhares de simulações para calcular a probabilidade de chuva (ex: 80%).' },
            ],
            ahaQuote: 'O indivíduo é imprevisível; a multidão é matematicamente previsível!',
          },
          intuition: {
            headline: 'Frequência Experimental vs Probabilidade Teórica',
            storyOrAnalogy: 'Se lançares uma moeda 10 vezes, a frequência de Caras pode ser 7/10 = 70%. Mas se aumentares para 10 000 vezes, a proporção estabiliza em torno de 0,500. A flutuação da sorte vai sendo "diluída" pelo número gigantesco de jogadas.',
            keyTakeaway: 'A frequência relativa de um acontecimento aproxima-se da sua probabilidade teórica à medida que o número de ensaios aumenta.',
            visualMetaphor: 'Uma curva que oscila violentamente no início e se torna uma linha reta horizontal no horizonte.',
          },
          predictionChallenge: {
            question: 'Se aumentares o número de lançamentos de 100 para 10 000 no simulador, o que acontece ao erro (desvio da linha verde)?',
            options: [
              { id: 'a', label: 'O erro diminui e fica quase zero', isCorrect: true, explanationAfterTest: 'Correto! O desvio médio diminui proporcionalmente à raiz do número de ensaios.' },
              { id: 'b', label: 'O erro aumenta', isCorrect: false, explanationAfterTest: 'Mais dados reduzem o erro relativo!' },
            ],
            simulatorInstruction: 'Compara o valor de "Erro |f_n - P|" com 10 lançamentos vs 10 000 lançamentos no painel direito.',
          },
          discovery: {
            patternsObserved: [
              'O erro percentual diminui com o aumento de n',
              'A convergência é contínua e estável',
              'Permite estimar a probabilidade de acontecimentos complexos',
            ],
            ahaMoment: 'Podemos descobrir a probabilidade de qualquer coisa simulando-a milhões de vezes no computador!',
          },
          formalization: {
            title: 'Fórmula da Frequência Relativa',
            explanation: 'A frequência relativa f_n(A) é o quociente entre o número de vezes que A ocorreu e o número total de repetições n.',
            formulas: [
              { symbol: 'f_n(A) = k / n', meaningInPlainPortuguese: 'Casos observados / Total de ensaios realizados' },
              { symbol: 'lim_{n → ∞} f_n(A) = P(A)', meaningInPlainPortuguese: 'A frequência converge para a probabilidade teórica' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um cientista quer testar se uma nova semente germina. Em 50 sementes plantadas, germinaram 41. Qual é a estimativa experimental da probabilidade de germinação?',
            steps: [
              { stepNumber: 1, title: 'Identificar os casos favoráveis (k)', mathExpression: 'k = 41 sementes germinadas', intuitiveWhy: 'Número de sucessos observados.' },
              { stepNumber: 2, title: 'Identificar o número total de ensaios (n)', mathExpression: 'n = 50 sementes no total', intuitiveWhy: 'Tamanho da amostra.' },
              { stepNumber: 3, title: 'Calcular a frequência relativa', mathExpression: 'f₅₀ = 41 / 50 = 0,82 = 82%', intuitiveWhy: 'A probabilidade estimada é de 82%.' },
            ],
            finalConclusion: 'A probabilidade estimada de germinação é de 82%.',
          },
          tryItYourself: {
            prompt: 'Se um arqueiro atirou 200 flechas e acertou no centro 150 vezes, qual é a sua probabilidade estimada de acertar no próximo tiro?',
            options: [
              { id: '1', text: '75% (150 / 200 = 0,75)', isCorrect: true, whyWrongOrRight: 'Exato! 150 / 200 = 3/4 = 75%.', howToThink: 'Divide os acertos pelo total de tiros.' },
              { id: '2', text: '50%', isCorrect: false, whyWrongOrRight: '50% seria se ele tivesse acertado 100 vezes em 200.', howToThink: 'Usa os dados reais do arqueiro.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_prob_1',
              tier: 'Base',
              question: 'Num teste de qualidade, em 1 000 lâmpadas testadas, 5 tinham defeito. Qual a probabilidade de uma lâmpada ter defeito?',
              hint: 'Calcula 5 / 1000.',
              options: [
                { id: 'a', text: '0,5% (0,005)', isCorrect: true, whyWrongOrRight: 'Correto! 5 / 1000 = 0,005 = 0,5%.', howToThink: '5 em mil = meio por cento.' },
                { id: 'b', text: '5%', isCorrect: false, whyWrongOrRight: '5% seria 50 em 1000.', howToThink: 'Atenção às casas decimais.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio Prático',
            problem: 'Se a probabilidade teórica de ganhar uma rifa é 1%, quantas rifas deves comprar para ter uma esperança matemática razoável de ganhar?',
            strategyTip: 'Probabilidade de não ganhar com k rifas é (0,99)^k.',
            options: [
              { id: 'a', text: 'Cerca de 70 a 100 rifas', isCorrect: true, whyWrongOrRight: 'Correto! Com 70 rifas a probabilidade de ganhar pelo menos uma é 1 - 0,99^70 ≈ 50,5%.', howToThink: 'Compreensão de probabilidades cumulativas.' },
              { id: 'b', text: 'Apenas 1 rifa garante a vitória', isCorrect: false, whyWrongOrRight: '1 rifa dá apenas 1% de hipótese.', howToThink: 'Eventos aleatórios requerem repetição.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a diferença entre 1 lançamento de moeda e 10 000 lançamentos?',
            methodCriteria: ['1 lançamento tem incerteza máxima', '10 000 lançamentos têm média altamente estável e previsível'],
            whatIfQuestion: 'O que aconteceria se a probabilidade teórica fosse 30% em vez de 50%?',
            whatIfAnswer: 'A linha do simulador convergiria para 0,30 em vez de 0,50.',
            ownWordsPrompt: 'Resume a Lei dos Grandes Números com as tuas palavras:',
            keyIdeasToInclude: ['Frequência relativa', 'Probabilidade teórica', 'Amostra grande'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Se lançares 10 moedas ao ar, qual é a probabilidade de saírem exatamente 5 Caras e 5 Coroas?',
            scenario: 'Muitas pessoas acham intuitivamente que é 100% ou 50%.',
            spark: 'Na verdade é apenas cerca de 24,6%! Porquê? Porque há muitas outras combinações possíveis (como 6 Caras e 4 Coroas)!',
          },
          whyItExists: {
            problemItSolves: 'Permite modelar distribuições de probabilidade discretas e calcular a probabilidade de acontecimentos compostos.',
            realWorldContexts: [
              { area: 'Genética', example: 'Calcular a probabilidade de um descendente herdar olhos azuis ou castanhos (quadro de Punnett).' },
              { area: 'Telecomunicações', example: 'Prever a taxa de pacotes de dados corrompidos numa transmissão Wi-Fi.' },
            ],
            ahaQuote: 'A probabilidade de um único resultado exato pode ser pequena, mas a probabilidade de estar perto da média é enorme!',
          },
          intuition: {
            headline: 'Espaço Amostral e Lei de Laplace',
            storyOrAnalogy: 'Num espaço com acontecimentos elementares equiprováveis, a probabilidade é dada pela Regra de Laplace: Casos Favoráveis / Casos Possíveis. Quando combinamos múltiplos acontecimentos independentes, as probabilidades multiplicam-se: P(A ∩ B) = P(A) · P(B).',
            keyTakeaway: 'A probabilidade teórica calcula-se pela combinatória; a Lei dos Grandes Números garante que a experiência física confirma a teoria.',
            visualMetaphor: 'Uma árvore de decisão onde cada ramo se divide em dois e cada caminho tem a sua probabilidade.',
          },
          predictionChallenge: {
            question: 'Se alterares a probabilidade teórica p no simulador para 0.70 (moeda viciada), para onde converge a frequência experimental após 1 000 lançamentos?',
            options: [
              { id: 'a', label: 'Para 70% (0,70)', isCorrect: true, explanationAfterTest: 'Perfeito! A frequência relativa converge sempre para o valor real de p!' },
              { id: 'b', label: 'Continua a convergir para 50%', isCorrect: false, explanationAfterTest: 'A convergência segue o parâmetro real da experiência.' },
            ],
            simulatorInstruction: 'Muda o slider de p para 0.70 e clica em "Repetir 1 000 Vezes".',
          },
          discovery: {
            patternsObserved: [
              'A frequência estabiliza no valor exato do parâmetro p',
              'Eventos independentes mantêm a probabilidade inalterada em cada jogada',
              'A distribuição dos resultados aproxima-se de uma curva em sino',
            ],
            ahaMoment: 'A probabilidade teórica não é mágica: é a média esperada a longo prazo.',
          },
          formalization: {
            title: 'Regras Fundamentais de Probabilidade',
            explanation: 'Axiomas e teoremas elementares de cálculo de probabilidades.',
            formulas: [
              { symbol: 'P(A) = Casos Favoráveis / Casos Possíveis', meaningInPlainPortuguese: 'Regra de Laplace para acontecimentos equiprováveis' },
              { symbol: '0 ≤ P(A) ≤ 1', meaningInPlainPortuguese: 'A probabilidade está sempre entre 0 (impossível) e 1 (certo)' },
              { symbol: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B)', meaningInPlainPortuguese: 'Probabilidade da união de dois acontecimentos' },
            ],
          },
          solvedExample: {
            problemStatement: 'Num baralho de 52 cartas, retira-se uma carta ao acaso. Qual a probabilidade de sair uma Carta de Copas OU um Rei?',
            steps: [
              { stepNumber: 1, title: 'Calcular P(Copas)', mathExpression: '13 / 52 = 1/4', intuitiveWhy: 'Há 13 cartas de copas no baralho.' },
              { stepNumber: 2, title: 'Calcular P(Rei)', mathExpression: '4 / 52 = 1/13', intuitiveWhy: 'Há 4 reis no baralho.' },
              { stepNumber: 3, title: 'Identificar a interseção P(Copas ∩ Rei)', mathExpression: '1 / 52 (o Rei de Copas)', intuitiveWhy: 'O Rei de Copas pertence aos dois grupos e não pode ser contado duas vezes!' },
              { stepNumber: 4, title: 'Aplicar a fórmula da união', mathExpression: '13/52 + 4/52 - 1/52 = 16/52 = 4/13 ≈ 30,8%', intuitiveWhy: 'Subtraímos a carta repetida.' },
            ],
            finalConclusion: 'A probabilidade é de 4/13 (cerca de 30,8%).',
          },
          tryItYourself: {
            prompt: 'Se lançares dois dados equilibrados, qual é a probabilidade de a soma dos pontos ser igual a 7?',
            options: [
              { id: '1', text: '6/36 = 1/6 (cerca de 16,7%)', isCorrect: true, whyWrongOrRight: 'Excelente! Há 6 pares favoráveis: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) num total de 36 pares possíveis.', howToThink: 'Conta os pares cuja soma dá 7 e divide por 36.' },
              { id: '2', text: '1/12', isCorrect: false, whyWrongOrRight: 'O número 7 é a soma mais frequente de dois dados, não a mais rara!', howToThink: 'Há 6 formas de obter soma 7.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_prob_1',
              tier: 'Intermédio',
              question: 'Qual é a probabilidade de sair pelo menos uma Cara ao lançar duas moedas equilibradas?',
              hint: 'Usa o acontecimento contrário (não sair nenhuma Cara = Coroa,Coroa).',
              options: [
                { id: 'a', text: '3/4 (75%)', isCorrect: true, whyWrongOrRight: 'Perfeito! Casos possíveis: (C,C), (C,K), (K,C), (K,K). Três deles têm pelo menos uma Cara (3/4).', howToThink: 'P(pelo menos uma) = 1 - P(nenhuma) = 1 - 1/4 = 3/4.' },
                { id: 'b', text: '1/2 (50%)', isCorrect: false, whyWrongOrRight: '50% seria com apenas 1 moeda.', howToThink: 'Com duas moedas a hipótese de ter pelo menos uma Cara sobe para 75%.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio Algébrico',
            problem: 'Uma turma tem 15 rapazes e 10 raparigas. Escolhem-se 2 alunos ao acaso sem reposição. Qual a probabilidade de serem ambos rapazes?',
            strategyTip: 'Multiplica a probabilidade do 1.º pela probabilidade do 2.º sabendo que o 1.º já foi retirado.',
            options: [
              { id: 'a', text: '(15/25) × (14/24) = 7/20 = 35%', isCorrect: true, whyWrongOrRight: 'Correto! No 2.º sorteio restam 14 rapazes num total de 24 alunos.', howToThink: 'Amostragem sem reposição altera o espaço amostral.' },
              { id: 'b', text: '(15/25) × (15/25) = 36%', isCorrect: false, whyWrongOrRight: 'Isso seria com reposição (o mesmo aluno poder ser escolhido duas vezes).', howToThink: 'Sem reposição subtrai-se 1 ao numerador e ao denominador.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que P(A ∪ B) não é simplesmente P(A) + P(B) quando os acontecimentos não são disjuntos?',
            methodCriteria: ['Os elementos na interseção A ∩ B seriam somados duas vezes', 'É necessário subtrair P(A ∩ B) para corrigir a contagem'],
            whatIfQuestion: 'O que significa dois acontecimentos serem independentes?',
            whatIfAnswer: 'A ocorrência de um não altera a probabilidade do outro: P(A|B) = P(A) e P(A ∩ B) = P(A)·P(B).',
            ownWordsPrompt: 'Explica a diferença entre acontecimentos disjuntos e acontecimentos independentes:',
            keyIdeasToInclude: ['Disjuntos = não podem acontecer ao mesmo tempo', 'Independentes = não influenciam a probabilidade um do outro'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'O Paradoxo do Falso Positivo: se um teste médico tem 99% de precisão e testas positivo para uma doença rara (1 em 10 000), qual é a probabilidade real de estares doente?',
            scenario: 'A maioria das pessoas (e até médicos) responde intuitivamente 99%.',
            spark: 'Pelo Teorema de Bayes e Probabilidade Condicionada, a probabilidade real de estares doente é de apenas cerca de 1%!',
          },
          whyItExists: {
            problemItSolves: 'Atualização de crenças e probabilidades com base em novas evidências (Inferência Bayesiana), indispensável em diagnósticos médicos, filtros anti-spam e algoritmos de Machine Learning.',
            realWorldContexts: [
              { area: 'Medicina e Epidemiologia', example: 'Interpretação de testes de diagnóstico rápido (Sensibilidade, Especificidade e Valor Preditivo Positivo).' },
              { area: 'Tribunais e Justiça', example: 'Evitar a Falácia do Acusador em provas de ADN forense.' },
              { area: 'Inteligência Artificial', example: 'Classificadores Naive Bayes para deteção de fraude em cartões de crédito.' },
            ],
            ahaQuote: 'A probabilidade de ter a doença dado que o teste deu positivo P(D|+) não é igual à probabilidade de o teste dar positivo dado que tens a doença P(+|D)!',
          },
          intuition: {
            headline: 'Probabilidade Condicionada e Teorema de Bayes',
            storyOrAnalogy: 'Imagina uma população de 10 000 pessoas. Apenas 1 pessoa tem a doença (e testa positivo). Das 9 999 pessoas saudáveis, o teste de 99% de precisão erra em 1% delas, gerando cerca de 100 falsos positivos. Assim, entre os 101 testes positivos no total, apenas 1 corresponde a um doente real (1 em 101 ≈ 1%).',
            keyTakeaway: 'A probabilidade condicionada P(A|B) = P(A ∩ B) / P(B) restringe o espaço amostral ao universo onde B já ocorreu.',
            visualMetaphor: 'Uma árvore de probabilidades onde o segundo ramo depende da escolha feita no primeiro.',
          },
          predictionChallenge: {
            question: 'No Exame Nacional, se dois acontecimentos A e B com probabilidades não nulas forem disjuntos (incompatíveis), podem ser independentes?',
            options: [
              { id: 'a', label: 'Nunca! Se são disjuntos, saber que B ocorreu garante que A não ocorreu (P(A|B) = 0 ≠ P(A))', isCorrect: true, explanationAfterTest: 'Brilhante! Acontecimentos disjuntos têm dependência máxima!' },
              { id: 'b', label: 'Sim, são sempre independentes', isCorrect: false, explanationAfterTest: 'Confusão muito frequente: disjunto significa P(A ∩ B) = 0, enquanto independente exige P(A ∩ B) = P(A)P(B) > 0.' },
            ],
            simulatorInstruction: 'Recorda que independência significa que a probabilidade não muda ao condicionar.',
          },
          discovery: {
            patternsObserved: [
              'P(A|B) = P(A ∩ B) / P(B)',
              'Teorema da Probabilidade Total: P(B) = P(A)P(B|A) + P(Ā)P(B|Ā)',
              'Acontecimentos independentes: P(A ∩ B) = P(A)P(B) e P(A|B) = P(A)',
            ],
            ahaMoment: 'Condicionar é simplesmente trocar o denominador do universo total Ω para o subconjunto B!',
          },
          formalization: {
            title: 'Formulário Oficial de Probabilidades (12.º Ano)',
            explanation: 'Definições axiomáticas e propriedades de acordo com a matriz do IAVE.',
            formulas: [
              { symbol: 'P(A|B) = P(A ∩ B) / P(B)', meaningInPlainPortuguese: 'Definição de Probabilidade Condicionada (com P(B) > 0)' },
              { symbol: 'P(A ∩ B) = P(B) · P(A|B)', meaningInPlainPortuguese: 'Regra da multiplicação' },
              { symbol: 'P(A ∩ B) = P(A) · P(B) ⇔ A e B independentes', meaningInPlainPortuguese: 'Condição necessária e suficiente de independência' },
              { symbol: 'nCr = n! / [r!(n - r)!]', meaningInPlainPortuguese: 'Combinações de n elementos r a r (sem ordem e sem reposição)' },
              { symbol: 'nAr = n! / (n - r)!', meaningInPlainPortuguese: 'Arranjos simples de n elementos r a r (com ordem e sem reposição)' },
            ],
            commonMistakes: [
              'Confundir acontecimentos disjuntos (P(A ∩ B) = 0) com independentes (P(A ∩ B) = P(A)·P(B)).',
              'Esquecer de verificar se a ordem interessa no problema de combinatória (usar Arranjos quando a ordem importa vs Combinações quando não importa).',
              'Trocar o condicionamento: calcular P(A|B) quando o enunciado pedia P(B|A).',
            ],
          },
          solvedExample: {
            problemStatement: 'Item de Exame Nacional: Uma caixa contém 6 bolas brancas e 4 bolas pretas. Retiram-se sucessivamente e sem reposição duas bolas. Seja A: "A 1.ª bola é branca" e B: "A 2.ª bola é branca". Calcula P(B|A) e P(B).',
            steps: [
              { stepNumber: 1, title: 'Calcular P(B|A) diretamente pelo contexto', mathExpression: 'P(B|A) = 5 / 9', intuitiveWhy: 'Sabendo que a 1.ª bola foi branca, restam na caixa 9 bolas, das quais 5 são brancas.' },
              { stepNumber: 2, title: 'Calcular P(B|Ā) para o caso de a 1.ª ser preta', mathExpression: 'P(B|Ā) = 6 / 9', intuitiveWhy: 'Se a 1.ª foi preta, restam 9 bolas, das quais 6 são brancas.' },
              { stepNumber: 3, title: 'Aplicar o Teorema da Probabilidade Total para calcular P(B)', mathExpression: 'P(B) = P(A)P(B|A) + P(Ā)P(B|Ā) = (6/10)·(5/9) + (4/10)·(6/9) = (30 + 24) / 90 = 54/90 = 6/10 = 0,60', intuitiveWhy: 'A probabilidade da 2.ª bola ser branca sem saber o resultado da 1.ª é igual à da 1.ª bola (0,60)!' },
            ],
            finalConclusion: 'P(B|A) = 5/9 ≈ 55,6% e P(B) = 6/10 = 60%.',
          },
          tryItYourself: {
            prompt: 'Sejam A e B dois acontecimentos tais que P(A) = 0,40, P(B) = 0,50 e P(A ∪ B) = 0,70. Os acontecimentos A e B são independentes?',
            options: [
              { id: '1', text: 'Sim, são independentes, pois P(A ∩ B) = 0,20 = 0,40 × 0,50', isCorrect: true, whyWrongOrRight: 'Exato! P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0,40 + 0,50 - 0,70 = 0,20. Como P(A)·P(B) = 0,40 × 0,50 = 0,20, a igualdade P(A ∩ B) = P(A)P(B) verifica-se.', howToThink: 'Calcula P(A ∩ B) pela fórmula da união e compara com o produto P(A)P(B).' },
              { id: '2', text: 'Não, porque P(A ∪ B) ≠ 1', isCorrect: false, whyWrongOrRight: 'A união não precisa de ser 1 para haver independência.', howToThink: 'O teste de independência é exclusivamente P(A ∩ B) = P(A)P(B).' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_prob_1',
              tier: 'Exame / Desafio',
              question: 'Com os algarismos 1, 2, 3, 4, 5, 6 e 7, quantos números ímpares de 4 algarismos diferentes se podem formar?',
              hint: 'O último algarismo tem de ser ímpar (1, 3, 5 ou 7). Os restantes 3 algarismos escolhem-se dos 6 restantes ordenadamente.',
              options: [
                { id: 'a', text: '4 × ⁶A₃ = 4 × 120 = 480 números', isCorrect: true, whyWrongOrRight: 'Perfeito! Há 4 opções para o algarismo das unidades. Para as restantes 3 posições escolhem-se e ordenam-se 3 algarismos dos 6 que sobram (⁶A₃ = 120). Total = 480.', howToThink: 'Começa pela restrição (último algarismo ímpar) e usa arranjos para as restantes casas.' },
                { id: 'b', text: '⁷C₄ = 35 números', isCorrect: false, whyWrongOrRight: 'Combinações não têm em conta a ordem dos algarismos nem a condição de paridade.', howToThink: 'Em números a ordem dos algarismos altera o número.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'Doze amigos vão sentar-se numa fila de 12 cadeiras no cinema. Entre eles estão o Pedro e a Maria. Qual a probabilidade de o Pedro e a Maria ficarem sentados juntos?',
            strategyTip: 'Considera o Pedro e a Maria como um único bloco (PM ou MP) para os casos favoráveis.',
            options: [
              { id: 'a', text: '(2! × 11!) / 12! = 2 / 12 = 1/6 ≈ 16,7%', isCorrect: true, whyWrongOrRight: 'Excelente! Casos possíveis: 12!. Casos favoráveis: tratamos o Pedro e a Maria como um bloco com 2! permutações internas, resultando em 11 elementos para permutar (11!). P = (2! × 11!) / 12! = 2/12 = 1/6.', howToThink: 'Técnica do bloco para elementos contíguos em análise combinatória.' },
              { id: 'b', text: '1/12', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de que o Pedro pode sentar-se à esquerda ou à direita da Maria (2!).', howToThink: 'Multiplica pelas permutações internas do par (2!).' },
            ],
          },
          verification: {
            methodQuestion: 'Como demonstras analiticamente se dois acontecimentos A e B são independentes num item de exame?',
            methodCriteria: ['Calcular o valor de P(A ∩ B)', 'Calcular o produto P(A) × P(B)', 'Comparar os dois valores e concluir com rigor'],
            whatIfQuestion: 'O que podes concluir sobre P(A|B) se A for um acontecimento certo?',
            whatIfAnswer: 'P(A|B) = 1, pois P(A ∩ B) = P(B) e P(B)/P(B) = 1.',
            ownWordsPrompt: 'Explica o significado intuitivo de P(A|B) e a diferença para P(A ∩ B):',
            keyIdeasToInclude: ['Universo restrito a B', 'Probabilidade de ambos acontecerem no universo total Ω', 'Fórmula P(A ∩ B) / P(B)'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Porque é que as companhias de seguros continuam a ter lucros garantidos todos os anos apesar de pagarem indemnizações milionárias?',
            scenario: 'Um seguro automóvel cobra 400€/ano a cada condutor e pode ter de pagar 50 000€ num acidente grave.',
            spark: 'A seguradora não aposta na sorte de um condutor; apoia-se na Lei dos Grandes Números sobre 500 000 apólices: o desvio padrão da média aproxima-se de zero!',
          },
          whyItExists: {
            problemItSolves: 'Permite gerir riscos gigantescos e incertezas individuais agregando-os em carteiras estatisticamente estáveis e previsíveis.',
            realWorldContexts: [
              { area: 'Banca e Crédito', example: 'Credit Scoring: prever a taxa de incumprimento global de uma carteira de empréstimos hipotecários.' },
              { area: 'Ensaios Clínicos na Indústria Farmacêutica', example: 'Determinar o valor-p (p-value) e a eficácia estatisticamente significativa de uma vacina face a um placebo.' },
              { area: 'Tech e Marketing', example: 'Testes A/B: saber com 95% de confiança se mudar a cor de um botão aumenta as vendas online.' },
            ],
            ahaQuote: 'A incerteza individual é inevitável; o risco coletivo é calculável!',
          },
          intuition: {
            headline: 'Esperança Matemática e a Vantagem da Casa',
            storyOrAnalogy: 'Na roleta europeia existem 37 números (0 a 36). Ao apostares num número, a roleta paga 35 para 1. Mas a probabilidade real de acertar é 1/37. A Esperança Matemática de uma aposta de 1€ é E = (1/37)·35 - (36/37)·1 = -0,027€. Isto significa que em cada euro apostado, o casino retém em média 2,7 cêntimos. A curto prazo um jogador ganha; a longo prazo, com milhões de rodadas, a receita do casino é uma linha reta inabalável.',
            keyTakeaway: 'A aleatoriedade é o produto que os casinos e seguradoras compram e vendem com margem matemática garantida.',
            visualMetaphor: 'Uma curva com ruído que, vista à distância de milhares de amostras, é uma linha perfeitamente previsível.',
          },
          predictionChallenge: {
            question: 'Se um teste de triagem para uma doença rara tem 5% de falsos positivos numa população saudável, o que acontece se testares 100 000 pessoas saudáveis assintomáticas?',
            options: [
              { id: 'a', label: 'Cerca de 5 000 pessoas saudáveis vão receber um diagnóstico positivo falso desnecessário', isCorrect: true, explanationAfterTest: 'Exato! 5% de 100 000 = 5 000 falsos positivos, gerando alarme e custos médicos elevados.' },
              { id: 'b', label: 'Ninguém recebe falso positivo', isCorrect: false, explanationAfterTest: 'A taxa de falso positivo aplica-se a toda a amostra saudável.' },
            ],
            simulatorInstruction: 'Lembra-te do impacto de testar populações com baixa prevalência da doença.',
          },
          discovery: {
            patternsObserved: [
              'A variabilidade relativa da média diminui com 1/√n',
              'O Teorema Central do Limite garante que médias de variáveis aleatórias convergem para a Distribuição Normal',
              'Decisões com base em amostras pequenas sofrem de Viés de Seleção crónico',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: a teoria das probabilidades é a base matemática de toda a economia de risco, medicina baseada em evidência e ciência de dados moderna!',
          },
          formalization: {
            title: 'Métricas de Risco e Valor Esperado',
            explanation: 'Aplicação prática da teoria das probabilidades na tomada de decisões económicas e clínicas.',
            formulas: [
              { symbol: 'E(X) = ∑ x_i · P(X = x_i)', meaningInPlainPortuguese: 'Esperança Matemática (Retorno Médio Ponderado)' },
              { symbol: 'VPP = P(Doente | Teste +)', meaningInPlainPortuguese: 'Valor Preditivo Positivo (Probabilidade real de ter a doença)' },
              { symbol: 'IC_95% = μ ± 1.96 · (σ / √n)', meaningInPlainPortuguese: 'Intervalo de Confiança a 95% para a média populacional' },
            ],
          },
          solvedExample: {
            problemStatement: 'Uma seguradora quer criar um seguro contra roubo de bicicleta (valor da bicicleta: 800€). A taxa anual de roubo na cidade é de 3%. Se a empresa quer ter um lucro esperado de 20€ por apólice, quanto deve cobrar pelo prémio anual?',
            steps: [
              { stepNumber: 1, title: 'Calcular o custo médio esperado de indemnização por apólice E(Custo)', mathExpression: 'E(Custo) = 3% × 800€ = 0,03 × 800€ = 24€', intuitiveWhy: 'Em média, a seguradora gastará 24€ por cliente para pagar as bicicletas roubadas.' },
              { stepNumber: 2, title: 'Adicionar a margem de lucro desejada', mathExpression: 'Prémio = Custo Esperado + Lucro = 24€ + 20€ = 44€ / ano', intuitiveWhy: 'Cobrando 44€ por ano a 10 000 ciclistas, a seguradora fatura 440 000€, paga 240 000€ em sinistros e obtém 200 000€ de lucro estável.' },
            ],
            finalConclusion: 'O prémio anual deve ser de 44€.',
          },
          tryItYourself: {
            prompt: 'Se um fundo de investimento tem 60% de hipótese de ganhar +20% e 40% de hipótese de perder -15%, qual é o retorno médio esperado E(R)?',
            options: [
              { id: '1', text: '+6,0% (0,60 × 20% - 0,40 × 15% = 12% - 6% = 6%)', isCorrect: true, whyWrongOrRight: 'Correto! E(R) = 0,60(20) + 0,40(-15) = 12 - 6 = +6,0%.', howToThink: 'Multiplica cada resultado pela sua probabilidade e soma os produtos.' },
              { id: '2', text: '+2,5%', isCorrect: false, whyWrongOrRight: 'Isso seria a média simples (20 - 15)/2 sem ponderar pelas probabilidades 60/40.', howToThink: 'Pondera sempre cada cenário pela sua probabilidade real.' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_prob_1',
              tier: 'Intermédio',
              question: 'Num ensaio clínico com 1 000 doentes, o grupo do medicamento teve 80% de curas e o grupo do placebo teve 50%. A diferença é de 30 pontos percentuais. Porque é necessário fazer um teste de hipóteses estatístico?',
              hint: 'Para garantir que a diferença não foi mero acaso da amostra.',
              options: [
                { id: 'a', text: 'Para calcular o valor-p e provar que a probabilidade de a diferença ser devida ao acaso é menor que 5% (estatisticamente significativo)', isCorrect: true, whyWrongOrRight: 'Exato! Em ciência médica, a significância estatística (p < 0,05) é a condição obrigatória para aprovação.', howToThink: 'Estatística inferencial distingue efeito real de ruído aleatório.' },
                { id: 'b', text: 'Porque a amostra de 1 000 é demasiado pequena para qualquer conclusão', isCorrect: false, whyWrongOrRight: '1 000 doentes é uma amostra com poder estatístico muito elevado para uma diferença de 30%.', howToThink: 'O teste quantifica a certeza matemática da evidência.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Aplicação Financeira Real',
            problem: 'Um projeto de investimento tem 70% de hipótese de sucesso (lucro de 100 000€) e 30% de hipótese de fracasso total (prejuízo de 60 000€). Qual é o Valor Esperado do projeto e deves recomendá-lo?',
            strategyTip: 'Calcula E(X) = 0,70(100 000) - 0,30(60 000).',
            options: [
              { id: 'a', text: 'E(X) = +52 000€ (Recomendado, pois o retorno esperado é positivo e substancial)', isCorrect: true, whyWrongOrRight: 'Perfeito! E(X) = 70 000 - 18 000 = +52 000€. Em média gera um ganho muito favorável.', howToThink: 'Critério do Valor Esperado positivo em decisões de investimento sob risco.' },
              { id: 'b', text: 'E(X) = 0€', isCorrect: false, whyWrongOrRight: 'O retorno positivo ponderado (70k) supera amplamente a perda ponderada (18k).', howToThink: 'Calcula 0,70 × 100 000 - 0,30 × 60 000.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que a intuição humana falha frequentemente ao estimar riscos raros (como quedas de avião vs acidentes de viação)?',
            methodCriteria: ['Viés de disponibilidade: notícias chocantes parecem mais prováveis', 'Incapacidade de processar intuitivamente números muito pequenos (1 em milhões)'],
            whatIfQuestion: 'O que aconteceria a uma seguradora se houvesse correlação perfeita entre os riscos (ex: um terramoto que afeta todos os segurados ao mesmo tempo)?',
            whatIfAnswer: 'A Lei dos Grandes Números falha (os riscos não são independentes), podendo levar a seguradora à falência sem resseguro internacional.',
            ownWordsPrompt: 'Como explicarias a importância das probabilidades para um gestor de empresas?',
            keyIdeasToInclude: ['Valor esperado', 'Diversificação de risco', 'Decisão baseada em dados'],
          },
        },
      },
    },
  ],
};
