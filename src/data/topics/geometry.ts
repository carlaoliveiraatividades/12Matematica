import { MathTopic } from '../../types/math';

export const geometryTopic: MathTopic = {
  id: 'geometria',
  number: '05',
  title: 'Geometria',
  subtitle: 'Produto escalar, retas e planos no espaço, vetores normais e lugares geométricos',
  curriculumTag: 'Matemática A · 12.º Ano',
  realWorldHook: 'Motores de iluminação 3D (Ray Tracing), painéis solares, navegação aérea e robótica.',
  subtopics: [
    {
      id: 'produto-escalar',
      title: 'Produto Escalar e Ângulos',
      shortDescription: 'Como medir a cooperação e perpendicularidade entre dois vetores através da sua sombra.',
      simulatorType: 'geometry',
      simulatorDefaultPreset: 'dotproduct',
      coreIdeaInOneSentence: 'O produto escalar mede quanta força um vetor projeta na direção do outro: anula-se a 90 graus!',
      progressionRoadmap: [
        { level: '6', summary: 'A lanterna e a sombra: quando a luz está diretamente por cima, a sombra desaparece num ponto.' },
        { level: '10', summary: 'Empurrar um carrinho: empurrar na mesma direção ajuda; empurrar de lado não faz o carrinho avançar.' },
        { level: '14', summary: 'Definição geométrica u · v = ||u|| ||v|| cos(α) e a regra de ouro: perpendiculares dão zero!' },
        { level: '18', summary: 'Expressão analítica u_x v_x + u_y v_y + u_z v_z, equações de planos ax+by+cz+d=0 e vetores normais.' },
        { level: 'adulto', summary: 'Shaders de iluminação 3D (Lambert Shading), eficiência de painéis solares e trabalho em física.' },
      ],
      experiences: {
        '6': {
          level: '6',
          curiosityHook: {
            question: 'Se empurrares um carrinho de brincar para a frente mas empurrares de lado (pela porta), ele anda para a frente?',
            scenario: 'Estás a empurrar o teu carrinho na sala.',
            spark: 'Não! Para o carrinho andar para a frente, tens de empurrar na mesma direção. Empurrar num ângulo reto (90 graus) não ajuda em nada!',
          },
          whyItExists: {
            problemItSolves: 'Saber quanta força ajuda e quanta força é desperdiçada.',
            realWorldContexts: [
              { area: 'Puxar um Trenó', example: 'Puxar a corda um pouco para cima ajuda a deslizar na neve.' },
            ],
            ahaQuote: 'Empurrar no mesmo sentido soma forças; empurrar de lado dá zero!',
          },
          intuition: {
            headline: 'A Sombra da Lanterna no Chão',
            storyOrAnalogy: 'Pensa numa seta azul a apontar para o céu e uma lanterna bem no alto. A sombra castanha que a seta azul faz no chão chama-se Projeção. Quando a seta azul aponta quase na mesma direção da base (+), a sombra é grande e positiva. Se a seta azul ficar totalmente vertical a fazer um canto de 90° com o chão, a sombra encolhe e desaparece num ponto (zero)!',
            keyTakeaway: 'O Produto Escalar mede o tamanho dessa sombra: é o teste do canto reto (90°)!',
            visualMetaphor: 'Uma sombra que encolhe até desaparecer quando o sol está exatamente por cima da cabeça ao meio-dia.',
          },
          predictionChallenge: {
            question: 'O que acontece ao valor do Produto Escalar no simulador quando colocas o ângulo a 90 graus (canto reto)?',
            options: [
              { id: 'a', label: 'Fica exatamente igual a 0,00 (anula-se)', isCorrect: true, explanationAfterTest: 'Perfeito! A 90 graus a sombra desaparece e o produto escalar dá zero!' },
              { id: 'b', label: 'Fica com o valor máximo', isCorrect: false, explanationAfterTest: 'O valor máximo acontece a 0 graus (quando estão alinhados na mesma direção).' },
            ],
            simulatorInstruction: 'Clica no botão rápido de 90° no simulador e repara no valor.',
          },
          discovery: {
            patternsObserved: [
              'Ângulo menor que 90° (agudo): produto escalar positivo (+)',
              'Ângulo de 90° (reto / perpendicular): produto escalar ZERO (0)',
              'Ângulo maior que 90° (obtuso / apontam em sentidos opostos): produto escalar negativo (-)',
            ],
            ahaMoment: 'Para testar se duas linhas formam um canto reto perfeito de 90 graus, basta ver se o produto escalar dá zero!',
          },
          formalization: {
            title: 'O Teste do Canto Reto',
            explanation: 'Dois vetores são perpendiculares (formam 90 graus) se e só se o seu produto escalar for zero.',
            formulas: [
              { symbol: 'u · v = 0', meaningInPlainPortuguese: 'Os dois vetores formam um ângulo reto perfeito de 90°' },
              { symbol: 'u · v > 0', meaningInPlainPortuguese: 'Apontam genericamente para o mesmo lado' },
            ],
          },
          solvedExample: {
            problemStatement: 'Duas paredes de uma casa encontram-se. O arquiteto calcula o produto escalar e obtém 0. As paredes estão direitas em esquadria?',
            steps: [
              { stepNumber: 1, title: 'Analisar o resultado do produto escalar', mathExpression: 'u · v = 0', intuitiveWhy: 'O valor deu exatamente zero.' },
              { stepNumber: 2, title: 'Concluir sobre o ângulo', mathExpression: 'Ângulo = 90°', intuitiveWhy: 'Zero significa ângulo reto de 90 graus (esquadria perfeita).' },
            ],
            finalConclusion: 'Sim, as paredes estão em esquadria perfeita.',
          },
          tryItYourself: {
            prompt: 'Se dois vetores apontam exatamente na mesma direção e sentido (ângulo de 0 graus), o produto escalar é:',
            options: [
              { id: '1', text: 'Máximo e positivo (cooperação total)', isCorrect: true, whyWrongOrRight: 'Correto! A 0° o cosseno é 1, logo a sombra tem o tamanho máximo.', howToThink: 'Na mesma direção a projeção é total.' },
              { id: '2', text: 'Zero', isCorrect: false, whyWrongOrRight: 'Zero seria a 90 graus (perpendiculares).', howToThink: 'A 0° o alinhamento é máximo.' },
            ],
          },
          practiceExercises: [
            {
              id: 'geom_6_1',
              tier: 'Base',
              question: 'Qual é o nome que damos a duas linhas que formam 90 graus entre si?',
              hint: 'Pensa no canto de uma folha de papel.',
              options: [
                { id: 'a', text: 'Perpendiculares (ou ângulo reto)', isCorrect: true, whyWrongOrRight: 'Perfeito! É a definição geométrica de perpendicularidade.', howToThink: 'Linhas a 90° são perpendiculares.' },
                { id: 'b', text: 'Paralelas', isCorrect: false, whyWrongOrRight: 'Paralelas nunca se cruzam (ângulo de 0°).', howToThink: '90° = perpendiculares.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio Geométrico',
            problem: 'Se empurrares um bloco com uma corda na horizontal e ele anda na horizontal, qual a percentagem da tua força que ajuda no movimento?',
            strategyTip: 'Ângulo entre a força e o movimento é 0°.',
            options: [
              { id: 'a', text: '100% da força é aproveitada (cos 0° = 1)', isCorrect: true, whyWrongOrRight: 'Exato! Alinhamento perfeito significa rendimento máximo.', howToThink: 'Sem desvio angular, toda a força produz trabalho.' },
              { id: 'b', text: '0%', isCorrect: false, whyWrongOrRight: '0% seria se puxasses a 90° para cima.', howToThink: 'Na horizontal o aproveitamento é total.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a uma criança porque é que a sombra de um poste desaparece ao meio-dia?',
            methodCriteria: ['O sol está a 90 graus por cima do poste', 'A projeção vertical sobre o chão horizontal é nula'],
            whatIfQuestion: 'O que aconteceria se os dois vetores apontassem em sentidos opostos (180 graus)?',
            whatIfAnswer: 'O produto escalar seria o mais negativo possível (oposição total).',
            ownWordsPrompt: 'Resume a ideia de produto escalar e a sombra:',
            keyIdeasToInclude: ['Sombra', 'Ângulo de 90° dá zero', 'Alinhamento'],
          },
        },
        '10': {
          level: '10',
          curiosityHook: {
            question: 'Como é que um aspirador robô sabe se está a andar paralelo a uma parede ou a afastar-se dela?',
            scenario: 'O robô tem sensores laser que medem vetores de direção.',
            spark: 'Ele calcula o produto escalar entre o seu vetor de velocidade e o vetor normal da parede: se der zero, está perfeitamente alinhado e não bate!',
          },
          whyItExists: {
            problemItSolves: 'Permite calcular ângulos, projeções e testar perpendicularidade no plano e no espaço sem réguas físicas.',
            realWorldContexts: [
              { area: 'Construção Civil', example: 'Verificar se pilares e vigas formam ângulos retos de 90° com o chão.' },
            ],
            ahaQuote: 'O produto escalar combina o comprimento dos vetores com o cosseno do ângulo entre eles!',
          },
          intuition: {
            headline: 'Comprimentos, Ângulos e a Projeção Ortogonal',
            storyOrAnalogy: 'O produto escalar de dois vetores u e v é definido por u · v = ||u|| · ||v|| · cos(α). O termo ||u|| cos(α) é o comprimento da sombra (projeção ortogonal) de u sobre a reta de v. Multiplicando essa sombra pelo comprimento de v, obtemos um número real puro (escalar).',
            keyTakeaway: 'O produto escalar não devolve um vetor: devolve um número que mede o grau de alinhamento!',
            visualMetaphor: 'Dois puxadores de uma corda: o produto escalar mede quanto estão a trabalhar juntos.',
          },
          predictionChallenge: {
            question: 'Se ||u|| = 4, ||v|| = 5 e o ângulo for 60° (onde cos 60° = 0,5), qual é o valor de u · v?',
            options: [
              { id: 'a', label: '10 (pois 4 × 5 × 0,5 = 20 × 0,5 = 10)', isCorrect: true, explanationAfterTest: 'Brilhante! 4 × 5 × 0,5 = 10!' },
              { id: 'b', label: '20', isCorrect: false, explanationAfterTest: 'Esqueceste-te de multiplicar pelo cos(60°) = 0,5.' },
            ],
            simulatorInstruction: 'Coloca ||u||=4, ||v||=5 e ângulo 60° no simulador e confirma o valor 10.',
          },
          discovery: {
            patternsObserved: [
              'Se α = 0°: u · v = ||u|| ||v|| (máximo positivo)',
              'Se α = 90°: u · v = 0 (perpendiculares)',
              'Se α = 180°: u · v = -||u|| ||v|| (mínimo negativo)',
            ],
            ahaMoment: 'O sinal do produto escalar diz-nos imediatamente se o ângulo é agudo (+), reto (0) ou obtuso (-)!',
          },
          formalization: {
            title: 'Fórmula Geométrica do Produto Escalar',
            explanation: 'Definição para vetores no plano com ângulo α.',
            formulas: [
              { symbol: 'u · v = ||u|| ||v|| cos(α)', meaningInPlainPortuguese: 'Comprimento de u × Comprimento de v × Cosseno do ângulo' },
              { symbol: 'cos(α) = (u · v) / (||u|| ||v||)', meaningInPlainPortuguese: 'Fórmula para descobrir o ângulo a partir do produto escalar' },
            ],
          },
          solvedExample: {
            problemStatement: 'Dois vetores têm normas ||u|| = 3 e ||v|| = 6. Sabendo que u · v = 9, qual é o ângulo entre eles?',
            steps: [
              { stepNumber: 1, title: 'Aplicar a fórmula do cosseno', mathExpression: 'cos(α) = (u · v) / (||u|| ||v||) = 9 / (3 × 6) = 9 / 18 = 0,5', intuitiveWhy: 'Dividimos o produto escalar pelo produto das normas.' },
              { stepNumber: 2, title: 'Descobrir o ângulo', mathExpression: 'cos(α) = 0,5 ⇒ α = 60°', intuitiveWhy: 'O ângulo notável cujo cosseno é 0,5 é 60°.' },
            ],
            finalConclusion: 'O ângulo entre os dois vetores é de 60 graus.',
          },
          tryItYourself: {
            prompt: 'Se ||u|| = 2 e ||v|| = 7 e os vetores são perpendiculares (90°), quanto vale u · v?',
            options: [
              { id: '1', text: '0 (pois cos 90° = 0)', isCorrect: true, whyWrongOrRight: 'Exato! A perpendicularidade anula sempre o produto escalar, independentemente das normas dos vetores.', howToThink: 'Qualquer número multiplicado por cos(90°)=0 dá zero.' },
              { id: '2', text: '14 (2 × 7)', isCorrect: false, whyWrongOrRight: '14 seria se o ângulo fosse 0° (paralelos).', howToThink: 'A 90° dá sempre zero.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p10_geom_1',
              tier: 'Base',
              question: 'Se o produto escalar de dois vetores não nulos der um número negativo (u · v < 0), que tipo de ângulo formam?',
              hint: 'Em que quadrante o cosseno é negativo?',
              options: [
                { id: 'a', text: 'Ângulo Obtuso (entre 90° e 180°)', isCorrect: true, whyWrongOrRight: 'Correto! O cosseno é negativo para ângulos obtusos.', howToThink: 'cos(α) < 0 ⇒ 90° < α ≤ 180°.' },
                { id: 'b', text: 'Ângulo Agudo (menor que 90°)', isCorrect: false, whyWrongOrRight: 'Para ângulos agudos o produto escalar é positivo.', howToThink: 'Positivo = agudo; Negativo = obtuso.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Desafio das Coordenadas',
            problem: 'No plano, se u = (2, 3) e v = (4, -1), qual é o valor do produto escalar u · v?',
            strategyTip: 'Multiplica as coordenadas x com x e y com y e soma: u_x v_x + u_y v_y.',
            options: [
              { id: 'a', text: '5 (pois 2×4 + 3×(-1) = 8 - 3 = 5)', isCorrect: true, whyWrongOrRight: 'Perfeito! u · v = 2(4) + 3(-1) = 8 - 3 = 5.', howToThink: 'Regra analítica do produto escalar.' },
              { id: 'b', text: '11', isCorrect: false, whyWrongOrRight: 'Esqueceste-te do sinal negativo do -1: 3 × (-1) = -3.', howToThink: 'Cuidado com a regra dos sinais.' },
            ],
          },
          verification: {
            methodQuestion: 'Como calculas o ângulo entre dois vetores conhecendo apenas as suas coordenadas (x, y)?',
            methodCriteria: ['Calcular o produto escalar analítico u_x v_x + u_y v_y', 'Calcular as normas ||u|| = √(u_x² + u_y²) e ||v||', 'Calcular arccos((u·v)/(||u||||v||))'],
            whatIfQuestion: 'O que aconteceria se um dos vetores fosse o vetor nulo (0, 0)?',
            whatIfAnswer: 'A sua norma seria 0 e o produto escalar seria sempre 0 (o vetor nulo é considerado perpendicular a todos os vetores).',
            ownWordsPrompt: 'Explica a diferença entre produto escalar e produto por um número:',
            keyIdeasToInclude: ['Produto escalar entre 2 vetores dá um número', 'Produto de escalar por vetor dá um vetor'],
          },
        },
        '14': {
          level: '14',
          curiosityHook: {
            question: 'Como é que a matemática do secundário calcula a distância mais curta de um ponto a uma reta no plano sem desenhar réguas?',
            scenario: 'Temos a equação da reta r: ax + by + c = 0 e um ponto P(x₀, y₀).',
            spark: 'O vetor n = (a, b) é sempre perpendicular à reta! Usando a projeção ortogonal com o produto escalar, a distância sai numa única fórmula limpa!',
          },
          whyItExists: {
            problemItSolves: 'Permite resolver problemas métricos espaciais (distâncias, ângulos entre retas e planos, áreas e volumes).',
            realWorldContexts: [
              { area: 'Computação Gráfica 3D', example: 'Backface Culling: não renderizar triângulos que estão virados de costas para a câmara usando n · v < 0.' },
            ],
            ahaQuote: 'Os coeficientes (a, b, c) da equação de um plano ax + by + cz + d = 0 são simplesmente as coordenadas do seu vetor normal perpendicular!',
          },
          intuition: {
            headline: 'Do Produto Escalar Geométrico à Expressão Analítica',
            storyOrAnalogy: 'No referencial ortonormado, o produto escalar é simplesmente a soma dos produtos das coordenadas correspondentes: u · v = u_x v_x + u_y v_y + u_z v_z. O Teorema de Pitágoras e a Lei dos Cossenos garantem que esta conta algébrica dá exatamente o mesmo valor que ||u|| ||v|| cos(α). Isto permite descobrir ângulos no espaço 3D sem qualquer transferidor.',
            keyTakeaway: 'A expressão em coordenadas transforma qualquer problema de ângulos e perpendicularidade numa simples soma algébrica.',
            visualMetaphor: 'Uma esquadria laser 3D que mede o desvio angular entre duas vigas de betão.',
          },
          predictionChallenge: {
            question: 'Os vetores u = (3, -2) e v = (4, 6) são perpendiculares?',
            options: [
              { id: 'a', label: 'Sim, porque u · v = 3(4) + (-2)(6) = 12 - 12 = 0', isCorrect: true, explanationAfterTest: 'Perfeito! Produto escalar nulo = vetores perpendiculares!' },
              { id: 'b', label: 'Não, porque as coordenadas não são proporcionais', isCorrect: false, explanationAfterTest: 'Coordenadas proporcionais é a condição de paralelismo, não de perpendicularidade!' },
            ],
            simulatorInstruction: 'Lembra-te: u · v = 0 é o teste infalível de perpendicularidade.',
          },
          discovery: {
            patternsObserved: [
              'u · v = u_x v_x + u_y v_y (+ u_z v_z no espaço 3D)',
              'Condição de perpendicularidade: u ⊥ v ⇔ u · v = 0',
              'Norma euclidiana: ||u|| = √(u · u) = √(u_x² + u_y² + u_z²)',
            ],
            ahaMoment: 'O quadrado da norma de um vetor é simplesmente o produto escalar dele por ele próprio: ||u||² = u · u!',
          },
          formalization: {
            title: 'Propriedades Algébricas do Produto Escalar',
            explanation: 'Comutatividade, distributividade e cálculo em coordenadas ortonormadas.',
            formulas: [
              { symbol: 'u · v = u_x v_x + u_y v_y + u_z v_z', meaningInPlainPortuguese: 'Expressão analítica do produto escalar em ℝ³' },
              { symbol: 'u · (v + w) = u · v + u · w', meaningInPlainPortuguese: 'Propriedade distributiva em relação à adição vetorial' },
              { symbol: '||u|| = √(u · u)', meaningInPlainPortuguese: 'Norma de um vetor através do produto escalar' },
            ],
          },
          solvedExample: {
            problemStatement: 'Em ℝ², determina o valor de k para o qual os vetores u = (k, 4) e v = (3, -6) são perpendiculares.',
            steps: [
              { stepNumber: 1, title: 'Escrever a condição de perpendicularidade', mathExpression: 'u · v = 0', intuitiveWhy: 'Vetores perpendiculares têm produto escalar nulo.' },
              { stepNumber: 2, title: 'Substituir as coordenadas', mathExpression: 'k(3) + 4(-6) = 0 ⇒ 3k - 24 = 0', intuitiveWhy: 'Aplicamos a expressão analítica.' },
              { stepNumber: 3, title: 'Resolver a equação em k', mathExpression: '3k = 24 ⇒ k = 8', intuitiveWhy: 'Isolamos k.' },
            ],
            finalConclusion: 'Os vetores são perpendiculares para k = 8.',
          },
          tryItYourself: {
            prompt: 'Qual é a norma do vetor v = (2, 3, 6) no espaço tridimensional ℝ³?',
            options: [
              { id: '1', text: '7 (pois √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7)', isCorrect: true, whyWrongOrRight: 'Excelente! Teorema de Pitágoras em 3D: √(4 + 9 + 36) = √49 = 7.', howToThink: 'Soma os quadrados das três componentes e extrai a raiz.' },
              { id: '2', text: '11 (2 + 3 + 6)', isCorrect: false, whyWrongOrRight: 'A norma não é a soma linear das coordenadas!', howToThink: 'Usa a raiz quadrada da soma dos quadrados.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p14_geom_1',
              tier: 'Intermédio',
              question: 'Qual é o ângulo entre os vetores u = (1, 0) e v = (1, 1)?',
              hint: 'u · v = 1(1) + 0(1) = 1. ||u|| = 1 e ||v|| = √2. cos α = 1 / √2 = √2/2.',
              options: [
                { id: 'a', text: '45° (π/4 rad)', isCorrect: true, whyWrongOrRight: 'Perfeito! cos α = 1/√2 = √2/2 ⇒ α = 45°.', howToThink: 'Divide o produto escalar pelo produto das normas.' },
                { id: 'b', text: '90°', isCorrect: false, whyWrongOrRight: 'O produto escalar deu 1 ≠ 0, logo não são perpendiculares.', howToThink: 'O ângulo é agudo de 45 graus.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Ponte para o 12.º Ano',
            problem: 'No espaço ℝ³, uma reta tem vetor diretor r = (1, 2, -1) e um plano tem vetor normal n = (2, -1, 0). Qual é a posição relativa da reta e do plano?',
            strategyTip: 'Calcula r · n: se r · n = 0, o vetor diretor da reta é perpendicular ao vetor normal do plano (logo a reta é paralela ao plano!).',
            options: [
              { id: 'a', text: 'A reta é paralela ao plano (pois r · n = 1(2) + 2(-1) + (-1)(0) = 0)', isCorrect: true, whyWrongOrRight: 'Excelente! Se o vetor da reta é perpendicular ao vetor normal do plano, a reta desliza paralelamente à superfície do plano!', howToThink: 'Reta paralela ao plano ⇔ r ⊥ n ⇔ r · n = 0.' },
              { id: 'b', text: 'A reta é perpendicular ao plano', isCorrect: false, whyWrongOrRight: 'Para ser perpendicular ao plano, o vetor diretor r teria de ser colinear (paralelo) a n.', howToThink: 'Atenção à relação geométrica entre vetor normal e plano.' },
            ],
          },
          verification: {
            methodQuestion: 'Porque é que r · n = 0 significa que a reta é paralela ao plano e não perpendicular ao plano?',
            methodCriteria: ['O vetor normal n já é perpendicular ao plano', 'Se a reta é perpendicular a n, ela fica alinhada com a superfície do plano (paralela)'],
            whatIfQuestion: 'O que significaria se r fosse colinear a n (r = k n)?',
            whatIfAnswer: 'A reta seria estritamente perpendicular à superfície do plano.',
            ownWordsPrompt: 'Explica o conceito de vetor normal a uma reta ou plano:',
            keyIdeasToInclude: ['Vetor ortogonal a todas as direções do plano', 'Coeficientes (a,b,c)', 'Equação do plano'],
          },
        },
        '18': {
          level: '18',
          curiosityHook: {
            question: 'Como determina o Exame Nacional a equação cartesiana de um plano no espaço ℝ³ conhecendo apenas 3 pontos não colineares A, B e C?',
            scenario: 'Itens clássicos de geometria no espaço em Matemática A do 12.º ano.',
            spark: 'Procuramos um vetor normal n = (a, b, c) tal que n · AB = 0 e n · AC = 0, e a equação sai diretamente: ax + by + cz + d = 0!',
          },
          whyItExists: {
            problemItSolves: 'Modelação espacial 3D em engenharia estrutural, mecânica dos sólidos, arquitetura paramétrica e navegação por satélite.',
            realWorldContexts: [
              { area: 'Robótica e Braços Articulados', example: 'Cinemática Inversa: orientar a garra do robô no plano de trabalho usando matrizes de rotação e produtos escalares.' },
              { area: 'Simulação de Fluidos e Aerodinâmica', example: 'Cálculo de forças de sustentação e arrasto integrando o produto escalar da pressão pelo vetor normal à fuselagem (∬ p · n dA).' },
            ],
            ahaQuote: 'A equação de um plano ax + by + cz + d = 0 é a afirmação geométrica de que o vetor que une qualquer ponto (x,y,z) ao ponto de passagem é perpendicular ao vetor normal n = (a,b,c)!',
          },
          intuition: {
            headline: 'Geometria Analítica no Espaço Tridimensional (ℝ³)',
            storyOrAnalogy: 'Um plano no espaço fica perfeitamente definido por um ponto de passagem P₀(x₀, y₀, z₀) e um vetor normal n(a, b, c) que aponta perpendicularmente para fora da sua superfície. Qualquer ponto P(x, y, z) pertence ao plano se e só se o vetor P₀P for perpendicular a n: n · P₀P = 0 ⇔ a(x - x₀) + b(y - y₀) + c(z - z₀) = 0 ⇔ ax + by + cz + d = 0.',
            keyTakeaway: 'O vetor normal n = (a, b, c) é o "ADN" de um plano; define a sua inclinação e orientação no espaço.',
            visualMetaphor: 'Uma mesa de bilhar cujo plano fica definido pela vara (vetor normal) espetada perpendicularmente no centro da mesa.',
          },
          predictionChallenge: {
            question: 'Qual é o vetor normal ao plano de equação 2x - 3y + 5z - 8 = 0?',
            options: [
              { id: 'a', label: 'n = (2, -3, 5)', isCorrect: true, explanationAfterTest: 'Exato! Os coeficientes de x, y e z na equação cartesiana são as coordenadas exatas do vetor normal!' },
              { id: 'b', label: 'n = (2, 3, 5)', isCorrect: false, explanationAfterTest: 'Atenção ao sinal negativo do coeficiente de y (-3).' },
            ],
            simulatorInstruction: 'Lembra-te: os coeficientes (a, b, c) da equação cartesiana do plano definem o vetor normal n.',
          },
          discovery: {
            patternsObserved: [
              'Dois planos são perpendiculares se os seus vetores normais forem perpendiculares: n₁ · n₂ = 0',
              'Dois planos são paralelos se os seus vetores normais forem colineares: n₁ = k n₂',
              'Superfície esférica de centro C(x₀, y₀, z₀) e raio R: (x - x₀)² + (y - y₀)² + (z - z₀)² = R²',
            ],
            ahaMoment: 'Toda a geometria de planos e esferas no 12.º ano assenta em distâncias e produtos escalares!',
          },
          formalization: {
            title: 'Formulário Oficial de Geometria no Espaço (12.º Ano)',
            explanation: 'Equações de planos, retas, esferas e produto escalar do IAVE.',
            formulas: [
              { symbol: 'ax + by + cz + d = 0', meaningInPlainPortuguese: 'Equação cartesiana geral de um plano de vetor normal n = (a, b, c)' },
              { symbol: '(x, y, z) = (x₀, y₀, z₀) + k(u_x, u_y, u_z), k ∈ ℝ', meaningInPlainPortuguese: 'Equação vetorial de uma reta de vetor diretor u' },
              { symbol: '(x - x₀)² + (y - y₀)² + (z - z₀)² ≤ R²', meaningInPlainPortuguese: 'Equação da esfera sólida (bola) de centro C e raio R' },
              { symbol: 'Plano Mediador de [AB]: (x - x_A)² + ... = (x - x_B)² + ...', meaningInPlainPortuguese: 'Conjunto dos pontos equidistantes de A e B' },
            ],
            commonMistakes: [
              'Confundir vetor diretor de reta com vetor normal de plano.',
              'Trocar as coordenadas do centro da superfície esférica (ex: em (x+1)² + y² + (z-3)² = 16 o centro é (-1, 0, 3) e o raio é 4, não 16!).',
              'Esquecer de verificar se o produto escalar dá 0 ao justificar perpendicularidade entre planos.',
            ],
          },
          solvedExample: {
            problemStatement: 'Item de Exame Nacional: Considera o ponto A(1, 2, -1) e o plano α de equação 3x - y + 2z + 5 = 0. Determina a equação da reta r perpendicular ao plano α que passa no ponto A.',
            steps: [
              { stepNumber: 1, title: 'Identificar o vetor normal do plano α', mathExpression: 'n_α = (3, -1, 2)', intuitiveWhy: 'Coeficientes de x, y e z na equação de α.' },
              { stepNumber: 2, title: 'Usar n_α como vetor diretor da reta r', mathExpression: 'u_r = n_α = (3, -1, 2)', intuitiveWhy: 'Como a reta r é perpendicular ao plano, o seu vetor diretor tem a direção do vetor normal do plano.' },
              { stepNumber: 3, title: 'Escrever a equação vetorial da reta r com ponto A', mathExpression: '(x, y, z) = (1, 2, -1) + k(3, -1, 2), k ∈ ℝ', intuitiveWhy: 'Ponto de passagem A + k · vetor diretor.' },
            ],
            finalConclusion: 'A equação da reta é (x, y, z) = (1, 2, -1) + k(3, -1, 2), k ∈ ℝ.',
          },
          tryItYourself: {
            prompt: 'Qual é o valor de d para o qual o plano 4x + 2y - z + d = 0 passa no ponto P(1, -3, 2)?',
            options: [
              { id: '1', text: 'd = 4 (pois 4(1) + 2(-3) - (2) + d = 0 ⇒ 4 - 6 - 2 + d = 0 ⇒ -4 + d = 0 ⇒ d = 4)', isCorrect: true, whyWrongOrRight: 'Exato! Substituindo as coordenadas de P: 4(1) + 2(-3) - 2 + d = 0 ⇔ 4 - 6 - 2 + d = 0 ⇔ -4 + d = 0 ⇔ d = 4.', howToThink: 'Substitui o ponto na equação do plano e isola d.' },
              { id: '2', text: 'd = -4', isCorrect: false, whyWrongOrRight: 'Esqueceste-te de trocar o sinal ao passar o -4 para o outro membro da equação.', howToThink: '-4 + d = 0 ⇒ d = +4.' },
            ],
          },
          practiceExercises: [
            {
              id: 'p18_geom_1',
              tier: 'Exame / Desafio',
              question: 'Considera os planos α: x - 2y + 2z = 0 e β: 2x + y + kz = 5. Para que valor de k os planos α e β são perpendiculares?',
              hint: 'n_α = (1, -2, 2) e n_β = (2, 1, k). Condição: n_α · n_β = 0.',
              options: [
                { id: 'a', text: 'k = 0 (pois 1(2) + (-2)(1) + 2(k) = 2 - 2 + 2k = 2k = 0 ⇒ k = 0)', isCorrect: true, whyWrongOrRight: 'Perfeito! 2 - 2 + 2k = 0 ⇒ 2k = 0 ⇒ k = 0.', howToThink: 'Anula o produto escalar dos vetores normais.' },
                { id: 'b', text: 'k = 2', isCorrect: false, whyWrongOrRight: 'Se k = 2 o produto escalar daria 4 ≠ 0.', howToThink: '2k = 0 implica k = 0.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Exame Nacional Matemática A · 12.º Ano',
            problem: 'Num referencial o.n. Oxyz, seja C(2, 1, 3) o centro de uma superfície esférica tangente ao plano xOz (equação y = 0). Qual é a equação dessa superfície esférica?',
            strategyTip: 'A distância do centro (2, 1, 3) ao plano y = 0 é a coordenada |y_C| = 1, logo o raio da esfera é R = 1.',
            options: [
              { id: 'a', text: '(x - 2)² + (y - 1)² + (z - 3)² = 1', isCorrect: true, whyWrongOrRight: 'Excelente! A distância ao plano y = 0 é |1| = 1, logo R = 1 e R² = 1. A equação fica (x - 2)² + (y - 1)² + (z - 3)² = 1.', howToThink: 'Identifica o raio pela distância do centro ao plano de tangência.' },
              { id: 'b', text: '(x - 2)² + (y - 1)² + (z - 3)² = 9', isCorrect: false, whyWrongOrRight: '9 seria se o raio fosse 3 (distância ao plano xOy). A tangência é ao plano xOz.', howToThink: 'O plano xOz tem equação y = 0, logo o raio é |y_C| = 1.' },
            ],
          },
          verification: {
            methodQuestion: 'Como encontras a interseção entre uma reta dada por equações paramétricas e um plano dado por equação cartesiana?',
            methodCriteria: ['Substituir as expressões de x(k), y(k), z(k) da reta na equação do plano', 'Resolver a equação do 1.º grau em k', 'Substituir o valor de k obtido nas equações da reta para obter as coordenadas do ponto de interseção P'],
            whatIfQuestion: 'O que aconteceria se a equação em k resultasse em 0k = 5 (impossível)?',
            whatIfAnswer: 'A reta seria estritamente paralela ao plano (não existe ponto de interseção).',
            ownWordsPrompt: 'Explica o papel do vetor normal na definição da equação de um plano:',
            keyIdeasToInclude: ['Ortogonalidade', 'n · P₀P = 0', 'Coeficientes a, b, c'],
          },
        },
        'adulto': {
          level: 'adulto',
          curiosityHook: {
            question: 'Como é que a placa gráfica do teu computador (GPU) calcula o brilho realista de cada pixel num videojogo 3D em tempo real?',
            scenario: 'Um feixe de luz atinge a armadura metálica de uma personagem.',
            spark: 'A GPU calcula o Produto Escalar entre o vetor da luz L e o vetor normal da superfície N (Lambert Shading): se N · L > 0, o pixel brilha proporcionalmente ao cosseno do ângulo!',
          },
          whyItExists: {
            problemItSolves: 'Permite aos motores gráficos 3D (Unreal Engine, Blender, filmes da Pixar) simular a iluminação e reflexão da luz na matéria com leis da física exatas.',
            realWorldContexts: [
              { area: 'Energia Solar e Painéis Fotovoltaicos', example: 'Seguidores Solares (Solar Trackers): orientam o painel para que o seu vetor normal aponte diretamente para o Sol (N · S = 1), maximizando a produção de eletricidade em +40%.' },
              { area: 'Condução Autónoma e Carros Elétricos', example: 'Sensores LiDAR: medem o tempo de voo e a orientação dos obstáculos calculando vetores normais das superfícies da estrada.' },
            ],
            ahaQuote: 'Tudo o que vês num ecrã 3D — do reflexo num carro a um raio de sol numa folha — é calculado por milhões de produtos escalares por segundo!',
          },
          intuition: {
            headline: 'A Lei do Cosseno de Lambert e a Eficiência Solar',
            storyOrAnalogy: 'Imagina que tens uma lanterna e apontas para uma parede. Se apontares de frente (ângulo 0°, N · L = 1), a luz concentra-se num círculo pequeno e muito brilhante. Se inclinares a lanterna (ângulo 60°, cos 60° = 0,5), a mesma quantidade de luz espalha-se por uma área duas vezes maior, logo o brilho por cm² cai para metade.',
            keyTakeaway: 'O produto escalar mede a densidade de energia recebida por qualquer superfície no espaço 3D.',
            visualMetaphor: 'Um painel solar que roda para seguir o sol e ficar sempre "de frente" para a luz.',
          },
          predictionChallenge: {
            question: 'Se a luz do sol incide sobre um painel solar com um ângulo de 60 graus em relação ao vetor normal da placa, qual é a eficiência de captação face ao máximo?',
            options: [
              { id: 'a', label: '50% (pois cos 60° = 0,50)', isCorrect: true, explanationAfterTest: 'Exato! A densidade de radiação solar cai para exatamente metade (cos 60° = 0,5)!' },
              { id: 'b', label: '100%', isCorrect: false, explanationAfterTest: '100% só acontece quando a luz incide perpendicularmente à placa (ângulo 0° com o vetor normal).' },
            ],
            simulatorInstruction: 'Observa no simulador como o produto escalar cai para metade a 60°.',
          },
          discovery: {
            patternsObserved: [
              'Intensidade de Luz I = I_max · (N · L)',
              'Se N · L ≤ 0: a superfície está na sombra própria (Backface / Escuridão)',
              'Painéis orientados a sul com inclinação ideal maximizam a integral anual de N · S(t)',
            ],
            ahaMoment: 'Agora percebo porque é que isto existe: sem o produto escalar não existiria computação gráfica 3D nem dimensionamento correto de energia solar!',
          },
          formalization: {
            title: 'Equações de Iluminação e Engenharia Solar',
            explanation: 'Modelos matemáticos de projeção e radiação em superfícies.',
            formulas: [
              { symbol: 'I_difusa = k_d · I_fonte · max(0, N · L)', meaningInPlainPortuguese: 'Modelo de Iluminação de Lambert (Shading 3D)' },
              { symbol: 'Potência Solar = P_max · cos(θ_incidência)', meaningInPlainPortuguese: 'Energia captada por um painel fotovoltaico em função da inclinação' },
              { symbol: 'R_reflexão = 2(N · L)N - L', meaningInPlainPortuguese: 'Vetor do raio de luz refletido em Ray Tracing' },
            ],
          },
          solvedExample: {
            problemStatement: 'Um painel solar de 2 m² recebe uma radiação solar direta de 1000 W/m². Se o sol faz um ângulo de 30° com a normal do painel, qual é a potência térmica e elétrica total recebida pelo painel?',
            steps: [
              { stepNumber: 1, title: 'Calcular a potência máxima direta', mathExpression: 'P_max = 2 m² × 1000 W/m² = 2000 W (2 kW)', intuitiveWhy: 'Potência se a incidência fosse a 0° (perpendicular).' },
              { stepNumber: 2, title: 'Aplicar a Lei do Cosseno com θ = 30°', mathExpression: 'P_real = 2000 × cos(30°) = 2000 × (√3 / 2) ≈ 2000 × 0,866 = 1732 W', intuitiveWhy: 'A inclinação de 30° reduz a captação para 86,6% da potência máxima.' },
            ],
            finalConclusion: 'O painel recebe 1732 Watts de potência radiante.',
          },
          tryItYourself: {
            prompt: 'Em computação gráfica 3D, se o vetor normal de um polígono N e o vetor da câmara V tiverem produto escalar N · V < 0, o que deve fazer o motor de renderização?',
            options: [
              { id: '1', text: 'Não desenhar o triângulo (Backface Culling), poupando tempo de processamento', isCorrect: true, whyWrongOrRight: 'Correto! Se N · V < 0, o polígono está virado de costas para a câmara e fica invisível.', howToThink: 'Técnica padrão de otimização de placas gráficas.' },
              { id: '2', text: 'Desenhar o triângulo a piscar', isCorrect: false, whyWrongOrRight: 'Não há razão para piscar: está simplesmente oculto.', howToThink: 'Polígonos de costas são descartados.' },
            ],
          },
          practiceExercises: [
            {
              id: 'pa_geom_1',
              tier: 'Intermédio',
              question: 'Porque é que em Portugal os painéis solares fixos são instalados voltados a Sul com uma inclinação de cerca de 30° a 35°?',
              hint: 'A latitude de Portugal é cerca de 38°N e o sol atinge o pico ao meio-dia a Sul.',
              options: [
                { id: 'a', text: 'Para minimizar o ângulo de incidência ao longo do ano, maximizando o produto escalar médio N · Sol(t)', isCorrect: true, whyWrongOrRight: 'Exato! A inclinação de 30°-35° a Sul maximiza a integral da energia anual recebida pelo cosseno do ângulo.', howToThink: 'Otimização angular do produto escalar solar.' },
                { id: 'b', text: 'Para que a chuva lave o pó mais depressa', isCorrect: false, whyWrongOrRight: 'Embora a chuva ajude na limpeza, o critério de dimensionamento é estritamente a geometria solar.', howToThink: 'Critério de maximização de radiação incidente.' },
              ],
            },
          ],
          examChallenge: {
            contextTag: 'Aplicação em Motores de Jogo 3D',
            problem: 'Um raio de luz com vetor unitário L incide numa superfície de vetor normal unitário N. Qual é o valor do produto escalar N · L se o raio incidir rasante à superfície (paralelo à parede)?',
            strategyTip: 'Incidência rasante significa que o raio é perpendicular ao vetor normal (ângulo de 90°).',
            options: [
              { id: 'a', text: '0 (sem iluminação, a luz não penetra na superfície)', isCorrect: true, whyWrongOrRight: 'Perfeito! A 90° com a normal, o produto escalar é 0, logo o brilho recebido é nulo.', howToThink: 'Luz rasante tem ângulo de 90° com a normal.' },
              { id: 'b', text: '1 (brilho máximo)', isCorrect: false, whyWrongOrRight: 'Brilho máximo seria a 0° (luz a incidir a pique de frente).', howToThink: 'cos 90° = 0.' },
            ],
          },
          verification: {
            methodQuestion: 'Como explicarias a um designer 3D porque é que o produto escalar é o coração de todos os shaders de materiais (Metal, Plástico, Vidro)?',
            methodCriteria: ['Calcula o ângulo entre luz, normal e câmara instantaneamente', 'Determina reflexão difusa (Lambert) e especular (Phong/Blinn)'],
            whatIfQuestion: 'O que aconteceria à renderização 3D se invertêssemos o sentido do vetor normal N?',
            whatIfAnswer: 'O objeto seria iluminado por dentro e ficaria totalmente escuro por fora (normais invertidas).',
            ownWordsPrompt: 'Resume a ligação entre a geometria analítica do 12.º ano e o mundo digital moderno:',
            keyIdeasToInclude: ['GPU', 'Shading', 'Painéis solares', 'Produto escalar'],
          },
        },
      },
    },
  ],
};
