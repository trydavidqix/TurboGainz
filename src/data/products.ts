import { Product, ProductCategory, ProductType } from "@/types/product";

// Importações das imagens dos produtos
// Removendo imports de imagem, pois usaremos caminhos diretos
// import testoEnantatoImg from '/public/Products/Injetaveis/TestoEnantato.png';
// import testosteronaCipionatoImg from '/public/Products/Injetaveis/TestosteronaCipionato.png';
// import testosteronaPropionatoImg from '/public/Products/Injetaveis/TestosteronaPropionato.png';
// import sustanonImg from '/public/Products/Injetaveis/Sustanon.png';
// import decanoatoNandrolonaImg from '/public/Products/Injetaveis/DecanoatoNandrolona.png';
// import boldenonaImg from '/public/Products/Injetaveis/Boldenona.png';
// import trembolonaImg from '/public/Products/Injetaveis/Trembolona.png';
// import masteronImg from '/public/Products/Injetaveis/Masteron.png';
// import primobolanImg from '/public/Products/Injetaveis/Primobolan.png';
// import hcgImg from '/public/Products/Injetaveis/HCG.png';
// import ghImg from '/public/Products/Injetaveis/GH.png';
// import insulinaImg from '/public/Products/Injetaveis/Insulina.png';
// Orais
// import oxandrolonaImg from '/public/Products/Comprimidos/Oxandrolona.png';
// import stanozololOralImg from '/public/Products/Comprimidos/Stanozolol.png';
// import dianabolImg from '/public/Products/Comprimidos/Dianabol.png';
// import turinabolImg from '/public/Products/Comprimidos/Turinabol.png';
// import halotestinImg from '/public/public/Products/Comprimidos/Halotestin.png';
// import provironImg from '/public/Products/Comprimidos/Proviron.png';
// import clomidImg from '/public/Products/Comprimidos/Clomid.png';
// import inibidoresAromataseImg from '/public/Products/Comprimidos/InibidoresdeAromatase.png';
// import anticoncepcionalImg from '/public/Products/Comprimidos/Anticoncepcionais.png';
// import clenbuterolImg from '/public/Products/Comprimidos/Clenbuterol.png';
// import t3Img from '/public/Products/Comprimidos/T3.png';
// import t4Img from '/public/Products/Comprimidos/T4.png';
// import tamoxifenoImg from '/public/Products/Comprimidos/Tamoxifeno.png';
// import xenicalImg from '/public/Products/Comprimidos/Xenical.png';
// import sarmsImg from '/public/Products/Comprimidos/Sarms.png';
// import dnpImg from '/public/Products/Comprimidos/DNP.png';
// import sibutraproImg from '/public/Products/Comprimidos/SibutraPro.png';
// import nolvadexImg from '/public/Products/Comprimidos/Tamoxifeno.png';

// Removendo variável que usava import
// const oxandrolonaWomenImg = oxandrolonaImg;


export const products: Product[] = [
  // INJETÁVEIS - HOMENS
  {
    id: "test-enantato",
    name: "Testosterona Enantato",
    shortDescription: "Éster de testosterona de liberação lenta.",
    description: "Éster de testosterona de liberação lenta ideal para ciclos de ganho de massa muscular e reposição hormonal.",
    price: 199.90,
    image: '/Products/Injetaveis/TestoEnantato.png',
    category: "injectable",
    type: "testosterone-enanthate",
    gender: ["men"],
    features: ["Liberação lenta", "Menos aplicações", "Alta potência"],
    usage: "250-500 mg/semana (dividida em 1-2 aplicações)",
    duration: "8-16 semanas",
    indications: "Baixa testosterona, ganho de massa muscular",
    precautions: "Monitorar estrogênio (risco de ginecomastia)",
    sideEffects: "Acne, retenção hídrica, supressão hormonal",
    benefits: "Ganho de massa, energia, libido",
    stock: 45,
    rating: 4.8,
    reviews: 128,
    isPopular: true
  },
  {
    id: "test-cipionato",
    name: "Testosterona Cipionato",
    shortDescription: "Similar ao Enantato, muito usado nos EUA.",
    description: "Forma de testosterona com liberação prolongada, similar ao Enantato mas com meia-vida ligeiramente maior.",
    price: 215.90,
    image: '/Products/Injetaveis/TestosteronaCipionato.png',
    category: "injectable",
    type: "testosterone-cipionate",
    gender: ["men"],
    features: ["Alta biodisponibilidade", "Estabilidade hormonal", "Menos aplicações"],
    usage: "200-600 mg/semana (1-2 aplicações)",
    duration: "8-16 semanas",
    indications: "Reposição hormonal, bulking",
    precautions: "Evitar overdose (aumenta hematócrito)",
    sideEffects: "Similar ao Enantato (acne, retenção, etc)",
    benefits: "Estabilidade hormonal, massa muscular",
    stock: 37,
    rating: 4.7,
    reviews: 94
  },
  {
    id: "test-propionato",
    name: "Testosterona Propionato",
    shortDescription: "Liberação rápida (aplicações frequentes).",
    description: "Éster de testosterona de ação rápida, ideal para ajustes finos de dosagem e ciclos curtos.",
    price: 159.90,
    image: '/Products/Injetaveis/TestosteronaPropionato.png',
    category: "injectable",
    type: "testosterone-propionate",
    gender: ["men"],
    features: ["Ação rápida", "Menos retenção", "Ajuste fino de dosagem"],
    usage: "50-100 mg/dia ou em dias alternados",
    duration: "4-8 semanas",
    indications: "Iniciantes, ajuste rápido",
    precautions: "Injeções frequentes podem causar abscessos",
    sideEffects: "Dor local, picos hormonais",
    benefits: "Menos retenção hídrica",
    stock: 22,
    rating: 4.5,
    reviews: 63
  },
  {
    id: "sustanon",
    name: "Sustanon 250",
    shortDescription: "Mistura de 4 ésteres de testosterona.",
    description: "Combinação de ésteres de testosterona com diferentes tempos de liberação para níveis hormonais mais estáveis.",
    price: 249.90,
    image: '/Products/Injetaveis/Sustanon.png',
    category: "injectable",
    type: "sustanon",
    gender: ["men"],
    features: ["Liberação progressiva", "Níveis estáveis", "Versatilidade"],
    usage: "250-500 mg/semana ou a cada 3 semanas",
    duration: "8-12 semanas",
    indications: "TRT ou ciclos longos",
    precautions: "Ajustar dose para evitar picos",
    sideEffects: "Similar a outros ésteres",
    benefits: "Versatilidade",
    stock: 18,
    rating: 4.9,
    reviews: 156,
    isPopular: true
  },
  {
    id: "deca-durabolin",
    name: "Decanoato de Nandrolona",
    shortDescription: "Anabólico com efeito em colágeno e articulações.",
    description: "Esteroide anabólico com potentes efeitos na síntese de colágeno e proteção articular além do ganho muscular.",
    price: 299.90,
    image: '/Products/Injetaveis/DecanoatoNandrolona.png',
    category: "injectable",
    type: "nandrolone-decanoate",
    gender: ["men", "women"], // Ambos, pois você indicou uso para mulheres também
    features: ["Proteção articular", "Ganho de massa", "Menos androgênico"],
    usage: "Homens: 200-600 mg/semana; Mulheres: 50-100 mg/semana",
    duration: "12-16 semanas",
    indications: "Ganho de massa, lesões",
    precautions: "Monitorar prolactina",
    sideEffects: "Retenção, 'Deca Dick' (disfunção erétil)",
    benefits: "Massa muscular, lubrificação articular",
    stock: 25,
    rating: 4.7,
    reviews: 89,
    isFeatured: true
  },
  {
    id: "boldenona",
    name: "Boldenona (Equipoise)",
    shortDescription: "Anabólico com efeito vascular e crescimento seco.",
    description: "Esteroide anabólico derivado da testosterona que proporciona ganhos de massa magra com menor retenção hídrica.",
    price: 259.90,
    image: '/Products/Injetaveis/Boldenona.png',
    category: "injectable",
    type: "boldenone",
    gender: ["men", "women"], // Ambos, pois você indicou uso para mulheres também
    features: ["Vascularização", "Ganho seco", "Aumento de apetite"],
    usage: "Homens: 400-800 mg/semana; Mulheres: 50-100 mg/semana",
    duration: "12-20 semanas (liberação lenta)",
    indications: "Cutting ou recomposição corporal",
    precautions: "Pode aumentar apetite",
    sideEffects: "Dores de cabeça, colesterol alterado",
    benefits: "Vascularidade, resistência",
    stock: 30,
    rating: 4.6,
    reviews: 73
  },
  {
    id: "trembolona",
    name: "Trembolona",
    shortDescription: "Um dos anabólicos mais potentes e agressivos.",
    description: "Esteroide anabólico potente que não aromatiza, proporcionando ganhos dramáticos de força e massa sem retenção de água.",
    price: 349.90,
    image: '/Products/Injetaveis/Trembolona.png',
    category: "injectable",
    type: "trembolone",
    gender: ["men"], // Não recomendado para mulheres na sua lista
    features: ["Alta potência", "Sem aromatização", "Ganho extremo"],
    usage: "200-400 mg/semana (Enantato) ou 50-100 mg/dia (Acetato)",
    duration: "6-8 semanas (Acetato), 8-10 semanas (Enantato)",
    indications: "Usuários avançados",
    precautions: "Controlar pressão arterial e colesterol",
    sideEffects: "Insônia, agressividade, toxicidade renal",
    benefits: "Hipertrofia extrema",
    stock: 15,
    rating: 4.9,
    reviews: 112,
    isPopular: true
  },
  {
    id: "masteron",
    name: "Masteron (Drostanolona)",
    shortDescription: "Anabólico seco para definição muscular.",
    description: "Esteroide com propriedades anti-estrogênicas que proporciona definição muscular e densidade sem retenção hídrica.",
    price: 279.90,
    image: '/Products/Injetaveis/Masteron.png',
    category: "injectable",
    type: "masteron",
    gender: ["men", "women"], // Ambos, mas com ressalvas para mulheres
    features: ["Definição extrema", "Efeito anti-estrogênico", "Endurecedor"],
    usage: "Homens: 300-600 mg/semana; Mulheres: 100-200 mg/semana (riscos de virilização)",
    duration: "6-8 semanas",
    indications: "Pré-competição",
    precautions: "Exige baixo BF% para efeitos visíveis",
    sideEffects: "Queda de cabelo (androgênico)",
    benefits: "Definição, redução de estrogênio",
    stock: 20,
    rating: 4.7,
    reviews: 67
  },
  {
    id: "primobolan-depot",
    name: "Primobolan Depot",
    shortDescription: "Anabólico leve, menos colaterais.",
    description: "Esteroide anabólico leve e seguro, popular entre atletas devido ao baixo risco de efeitos colaterais.",
    price: 399.90,
    image: '/Products/Injetaveis/Primobolan.png',
    category: "injectable",
    type: "primobolan",
    gender: ["men", "women"], // Ambos
    features: ["Baixa toxicidade", "Poucos efeitos colaterais", "Seguro"],
    usage: "Homens: 300-600 mg/semana; Mulheres: 50-100 mg/semana",
    duration: "8-12 semanas",
    indications: "Manutenção ou cutting",
    precautions: "Falsificações comuns (custo alto)",
    sideEffects: "Leves (queda de cabelo em predispostos)",
    benefits: "Baixa retenção, preservação muscular",
    stock: 12,
    rating: 4.8,
    reviews: 54,
    isNew: true
  },
  {
    id: "hcg",
    name: "HCG (Gonadotrofina Coriônica)",
    shortDescription: "Hormônio para manter função testicular.",
    description: "Hormônio que simula a ação do LH, prevenindo atrofia testicular durante ciclos de esteroides e auxiliando na recuperação pós-ciclo.",
    price: 189.90,
    image: '/Products/Injetaveis/HCG.png',
    category: "injectable",
    type: "hcg",
    gender: ["men", "women"], // Ambos
    features: ["Preservação testicular", "Manutenção da fertilidade", "Recuperação pós-ciclo"],
    usage: "Homens: 250-500 UI 2x/semana; Mulheres: 500-2000 UI/semana",
    duration: "Durante ciclo ou 2-3 semanas no TPC",
    indications: "Preservar fertilidade",
    precautions: "Não usar em excesso (aumenta estradiol)",
    sideEffects: "Sensibilidade mamária",
    benefits: "Recuperação hormonal mais rápida",
    stock: 28,
    rating: 4.5,
    reviews: 49
  },
  {
    id: "gh",
    name: "GH (Hormônio do Crescimento)",
    shortDescription: "Hormônio para crescimento muscular e queima de gordura.",
    description: "Hormônio peptídico que promove o crescimento celular, síntese proteica e metabolismo lipídico, proporcionando ganhos musculares e redução de gordura.",
    price: 1499.90,
    image: '/Products/Injetaveis/GH.png',
    category: "injectable",
    type: "growth-hormone",
    gender: ["men", "women"], // Ambos
    features: ["Ganho muscular", "Queima de gordura", "Anti-envelhecimento"],
    usage: "2-6 UI/dia para fins estéticos, subcutâneo",
    duration: "Mínimo 3-6 meses para resultados",
    indications: "Recuperação, anti-envelhecimento, corpo fitness",
    precautions: "Monitorar glicose e insulina",
    sideEffects: "Retenção hídrica, síndrome do túnel do carpo",
    benefits: "Recuperação acelerada, melhor sono, pele saudável",
    stock: 8,
    rating: 4.9,
    reviews: 37,
    isFeatured: true
  },
  {
    id: "insulina",
    name: "Insulina",
    shortDescription: "Hormônio anabólico potente para usuários avançados.",
    description: "Hormônio que regula o metabolismo da glicose e promove efeitos anabólicos potentes quando usado adequadamente por atletas avançados.",
    price: 129.90,
    image: '/Products/Injetaveis/Insulina.png',
    category: "injectable",
    type: "insulin",
    gender: ["men", "women"],
    features: ["Aumento de glicogênio", "Super anabólico"],
    usage: "Extremo cuidado e supervisão médica, 4-10 UI Pós-treino",
    duration: "4-8 semanas",
    indications: "Atletas de ponta",
    precautions: "Risco de hipoglicemia severa (coma/morte)",
    sideEffects: "Hipoglicemia, ganho de gordura",
    benefits: "Hipertrofia extrema, recuperação",
    stock: 5,
    rating: 4.9,
    reviews: 10,
  },

  // ORAIS - HOMENS
  {
    id: "oxandrolona",
    name: "Oxandrolona (Anavar)",
    shortDescription: "Anabólico oral leve, ideal para cutting.",
    description: "Esteroide oral com baixa toxicidade hepática e poucos efeitos androgênicos, ótimo para ganho de força e definição.",
    price: 179.90,
    image: '/Products/Comprimidos/Oxandrolona.png',
    category: "oral",
    type: "oxandrolone",
    gender: ["men"],
    features: ["Baixa toxicidade", "Ganho de força", "Ideal para cutting"],
    usage: "20-50 mg/dia (dividido em 2 doses)",
    duration: "6-8 semanas",
    indications: "Cutting, ganho de força",
    precautions: "Monitorar enzimas hepáticas",
    sideEffects: "Supressão hormonal (leve), dores de cabeça",
    benefits: "Ganho de força, queima de gordura",
    stock: 35,
    rating: 4.7,
    reviews: 88,
    isPopular: true
  },
  {
    id: "stanozolol-oral",
    name: "Stanozolol (Winstrol) Oral",
    shortDescription: "Anabólico oral para densidade e força.",
    description: "Derivado da Dihydrotestosterona, proporciona ganhos de massa magra e vascularização sem retenção hídrica.",
    price: 169.90,
    image: '/Products/Comprimidos/Stanozolol.png',
    category: "oral",
    type: "stanozolol",
    gender: ["men"],
    features: ["Densidade muscular", "Aumento de força", "Vascularização"],
    usage: "30-60 mg/dia (dividido em 2-3 doses)",
    duration: "6-8 semanas",
    indications: "Cutting, pré-competição",
    precautions: "Alta toxicidade hepática, dores articulares",
    sideEffects: "Ressecamento articular, queda de cabelo",
    benefits: "Definição muscular",
    stock: 28,
    rating: 4.6,
    reviews: 75
  },
  {
    id: "dianabol",
    name: "Dianabol (Metandrostenolona)",
    shortDescription: "Anabólico oral potente para ganho de massa.",
    description: "Um dos esteroides orais mais populares para ganho rápido de massa muscular e força.",
    price: 149.90,
    image: '/Products/Comprimidos/Dianabol.png',
    category: "oral",
    type: "dianabol",
    gender: ["men"],
    features: ["Ganho rápido", "Aumento de força", "Pump muscular"],
    usage: "20-50 mg/dia (dividido em 2-3 doses)",
    duration: "4-6 semanas",
    indications: "Bulking, iniciantes (com ressalvas)",
    precautions: "Alta toxicidade hepática, aromatiza muito",
    sideEffects: "Retenção hídrica, ginecomastia, pressão alta",
    benefits: "Hipertrofia rápida",
    stock: 32,
    rating: 4.8,
    reviews: 98
  },
  {
    id: "turinabol",
    name: "Turinabol",
    shortDescription: "Derivado do Dianabol, menos colaterais.",
    description: "Esteroide oral com estrutura similar ao Dianabol, mas com menos efeitos colaterais e ganhos mais secos.",
    price: 189.90,
    image: '/Products/Comprimidos/Turinabol.png',
    category: "oral",
    type: "turinabol",
    gender: ["men", "women"], // Ambos
    features: ["Ganho seco", "Poucos colaterais", "Baixa toxicidade"],
    usage: "Homens: 20-50 mg/dia; Mulheres: 5-10 mg/dia",
    duration: "6-8 semanas",
    indications: "Cutting ou bulking leve",
    precautions: "Monitorar enzimas hepáticas",
    sideEffects: "Leves (supressão)",
    benefits: "Ganhos de qualidade",
    stock: 21,
    rating: 4.7,
    reviews: 59,
    isNew: true
  },
  {
    id: "halotestin",
    name: "Halotestin (Fluoximesterona)",
    shortDescription: "Anabólico oral para força extrema.",
    description: "Um dos esteroides orais mais androgênicos e potentes para aumento de força e agressividade.",
    price: 329.90,
    image: '/Products/Comprimidos/Halotestin.png',
    category: "oral",
    type: "halotestin",
    gender: ["men"], // Não recomendado para mulheres
    features: ["Força extrema", "Agressividade", "Sem aromatização"],
    usage: "10-40 mg/dia",
    duration: "4-6 semanas (altamente tóxico)",
    indications: "Powerlifters, levantadores de peso (pré-competição)",
    precautions: "Extrema toxicidade hepática, problemas cardiovasculares",
    sideEffects: "Hepatotoxicidade, pressão alta, agressividade",
    benefits: "Aumento brutal de força",
    stock: 10,
    rating: 4.9,
    reviews: 30
  },
  {
    id: "proviron",
    name: "Proviron (Mesterolona)",
    shortDescription: "Anti-estrogênico e androgênico leve.",
    description: "Anabólico oral com propriedades anti-estrogênicas que ajuda a reduzir ginecomastia e aumentar a libido.",
    price: 139.90,
    image: '/Products/Comprimidos/Proviron.png',
    category: "oral",
    type: "proviron",
    gender: ["men"], // Principalmente homens
    features: ["Anti-estrogênico", "Aumento da libido", "Endurecedor"],
    usage: "25-100 mg/dia",
    duration: "6-12 semanas",
    indications: "Durante ciclo para controlar estrogênio",
    precautions: "Monitorar colesterol",
    sideEffects: "Supressão hormonal, queda de cabelo",
    benefits: "Redução de ginecomastia",
    stock: 24,
    rating: 4.6,
    reviews: 55
  },
  {
    id: "clomid",
    name: "Clomid (Clomifeno)",
    shortDescription: "Modulador Seletivo de Receptor Estrogênico (SERM).",
    description: "Droga usada para estimular a produção de testosterona endógena após ciclos de esteroides.",
    price: 99.90,
    image: '/Products/Comprimidos/Clomid.png',
    category: "oral",
    type: "clomid",
    gender: ["men", "women"], // Ambos (TPC para homens, indução de ovulação para mulheres)
    features: ["TPC", "Estimula testosterona", "Anti-estrogênico"],
    usage: "Homens: 50-100 mg/dia (TPC); Mulheres: Dosagem médica (indução)",
    duration: "2-4 semanas (TPC)",
    indications: "Recuperação pós-ciclo",
    precautions: "Não usar durante o ciclo",
    sideEffects: "Alterações visuais, dores de cabeça",
    benefits: "Normaliza testosterona",
    stock: 38,
    rating: 4.7,
    reviews: 61
  },
  {
    id: "nolvadex",
    name: "Nolvadex (Tamoxifeno)",
    shortDescription: "Modulador Seletivo de Receptor Estrogênico (SERM).",
    description: "Droga usada para prevenir ou tratar ginecomastia e auxiliar na recuperação hormonal pós-ciclo.",
    price: 119.90,
    image: '/Products/Comprimidos/Tamoxifeno.png',
    category: "oral",
    type: "tamoxifen",
    gender: ["men", "women"], // Ambos
    features: ["Anti-ginecomastia", "TPC", "Estimula testosterona"],
    usage: "Homens: 10-40 mg/dia (TPC ou controle de gine); Mulheres: Dosagem médica",
    duration: "2-4 semanas (TPC)",
    indications: "Controle de estrogênio",
    precautions: "Não usar durante o ciclo",
    sideEffects: "Ondas de calor, alterações de humor",
    benefits: "Proteção contra ginecomastia",
    stock: 34,
    rating: 4.8,
    reviews: 70
  },
  {
    id: "inibidores-aromatase",
    name: "Inibidores de Aromatase",
    shortDescription: "Anastrozol e Letrozol para controle de estrogênio.",
    description: "Drogas que bloqueiam a enzima aromatase, reduzindo a conversão de testosterona em estrogênio.",
    price: 199.90,
    image: '/Products/Comprimidos/InibidoresdeAromatase.png',
    category: "oral",
    type: "aromatase-inhibitors",
    gender: ["men"], // Principalmente homens (uso médico para mulheres)
    features: ["Reduz estrogênio", "Previne ginecomastia", "Aumenta testosterona livre"],
    usage: "Anastrozol: 0.5-1 mg EOD; Letrozol: 0.25-1 mg EOD",
    duration: "Durante ciclo (se necessário)",
    indications: "Ciclos altamente aromatizantes",
    precautions: "Pode suprimir estrogênio demais (prejudica articulações, libido)",
    sideEffects: "Dores articulares, redução de libido",
    benefits: "Controle de estrogênio",
    stock: 19,
    rating: 4.6,
    reviews: 45
  },
  {
    id: "clenbuterol",
    name: "Clenbuterol",
    shortDescription: "Termogênico potente para queima de gordura.",
    description: "Agonista beta-2 que estimula o metabolismo e a termogênese, auxiliando na queima de gordura.",
    price: 159.90,
    image: '/Products/Comprimidos/Clenbuterol.png',
    category: "oral",
    type: "clenbuterol",
    gender: ["men", "women"], // Ambos
    features: ["Queima de gordura", "Aumento de energia", "Preserva massa magra"],
    usage: "20-120 mcg/dia (ciclos piramidais)",
    duration: "2-4 semanas (para evitar down-regulation dos receptores)",
    indications: "Cutting",
    precautions: "Monitorar frequência cardíaca e pressão arterial",
    sideEffects: "Taquicardia, tremores, insônia",
    benefits: "Redução de BF%",
    stock: 30,
    rating: 4.8,
    reviews: 78,
    isPopular: true
  },
  {
    id: "t3",
    name: "T3 (Liotironina)",
    shortDescription: "Hormônio tireoidiano para metabolismo acelerado.",
    description: "Forma ativa do hormônio tireoidiano, acelera o metabolismo basal e a queima de gordura.",
    price: 119.90,
    image: '/Products/Comprimidos/T3.png',
    category: "oral",
    type: "t3",
    gender: ["men", "women"], // Ambos
    features: ["Acelera metabolismo", "Queima gordura"],
    usage: "25-100 mcg/dia (aumentar gradualmente)",
    duration: "4-8 semanas",
    indications: "Cutting, hipotireoidismo",
    precautions: "Não usar em excesso (risco de catabolismo muscular)",
    sideEffects: "Perda muscular (se não combinado com anabólicos), taquicardia",
    benefits: "Redução drástica de BF%",
    stock: 22,
    rating: 4.7,
    reviews: 50
  },
  {
    id: "t4",
    name: "T4 (Levotiroxina)",
    shortDescription: "Hormônio tireoidiano (forma inativa).",
    description: "Pró-hormônio que é convertido em T3 no corpo, usado para tratar hipotireoidismo.",
    price: 89.90,
    image: '/Products/Comprimidos/T4.png',
    category: "oral",
    type: "t4",
    gender: ["men", "women"], // Ambos
    features: ["Trata hipotireoidismo", "Efeito menos rápido que T3"],
    usage: "Dosagem médica",
    duration: "Contínuo (para hipotireoidismo)",
    indications: "Hipotireoidismo",
    precautions: "Monitorar TSH",
    sideEffects: "Hipertireoidismo (se dose alta)",
    benefits: "Normaliza metabolismo (em hipotireoidismo)",
    stock: 28,
    rating: 4.5,
    reviews: 35
  },
  {
    id: "xenical",
    name: "Xenical (Orlistate)",
    shortDescription: "Inibidor de absorção de gordura.",
    description: "Medicamento que inibe enzimas que digerem gordura, reduzindo sua absorção intestinal.",
    price: 179.90,
    image: '/Products/Comprimidos/Xenical.png',
    category: "oral",
    type: "xenical",
    gender: ["men", "women"], // Ambos
    features: ["Reduz absorção de gordura", "Auxilia na perda de peso"],
    usage: "120 mg com cada refeição principal",
    duration: "Contínuo (sob supervisão)",
    indications: "Obesidade",
    precautions: "Pode causar deficiência de vitaminas lipossolúveis",
    sideEffects: "Esteatorreia (fezes gordurosas), flatulência, urgência fecal",
    benefits: "Redução de peso (com dieta)",
    stock: 20,
    rating: 4.2,
    reviews: 40
  },
  {
    id: "sarms",
    name: "SARMs (Moduladores Seletivos de Receptor Androgênico)",
    shortDescription: "Alternativa a esteroides, menos colaterais.",
    description: "Compostos que se ligam seletivamente a receptores androgênicos em músculo e osso, promovendo efeitos anabólicos com menos efeitos colaterais sistêmicos.",
    price: 259.90,
    image: '/Products/Comprimidos/Sarms.png',
    category: "oral",
    type: "sarms",
    gender: ["men", "women"], // Ambos (dependendo do SARM)
    features: ["Seletividade tecidual", "Menos androgênico", "Potencial terapêutico"],
    usage: "Dosagem varia (depende do SARM: Ostarine, LGD-4033, etc.)",
    duration: "6-12 semanas",
    indications: "Ganho muscular, tratamento de sarcopenia",
    precautions: "Pesquisa limitada, status legal incerto em alguns países",
    sideEffects: "Supressão hormonal (variável), potencial toxicidade hepática (alguns)",
    benefits: "Ganho muscular com menos efeitos colaterais que AEs",
    stock: 15,
    rating: 4.5,
    reviews: 30
  },
  {
    id: "dnp",
    name: "DNP (Dinitrofenol)",
    shortDescription: "Termogênico extremamente perigoso (NÃO RECOMENDADO).",
    description: "Desacoplador de fosforilação oxidativa que gera calor, resultando em perda de gordura extrema. ALTAMENTE TÓXICO e fatal em doses altas.",
    price: 999.90, // Preço simbólico para algo perigoso
    image: '/Products/Comprimidos/DNP.png',
    category: "oral", // Mantendo como oral pois é ingerido, mas perigoso.
    type: "dnp",
    gender: ["men", "women"],
    features: ["Queima gordura extrema", "Aumento de temperatura corporal"],
    usage: "EXTREMO RISCO. NUNCA USAR.",
    duration: "NUNCA USAR.",
    indications: "NENHUMA INDICAÇÃO SEGURA.",
    precautions: "RISCO DE MORTE. NÃO USAR.",
    sideEffects: "Hipertermia fatal, danos a órgãos, cegueira, morte.",
    benefits: "NÃO HÁ BENEFÍCIOS QUE JUSTIFIQUEM O RISCO.",
    stock: 0, // Não deve ter estoque
    rating: 1.0, // Avaliação baixa devido ao perigo
    reviews: 1, // Um review de alerta
  },
  {
    id: "sibutrapro",
    name: "Sibutrapro (Sibutramina)",
    shortDescription: "Inibidor de apetite (USO MÉDICO).",
    description: "Medicamento supressor de apetite e termogênico, usado no tratamento da obesidade sob supervisão médica rigorosa.",
    price: 149.90,
    image: '/Products/Comprimidos/SibutraPro.png',
    category: "oral",
    type: "sibutrapro",
    gender: ["men", "women"], // Ambos
    features: ["Supressor de apetite", "Aumenta saciedade", "Termogênico leve"],
    usage: "Dosagem médica, geralmente 10-15 mg/dia",
    duration: "Limitado (risco cardiovascular)",
    indications: "Obesidade (com IMC > 30 ou > 27 com comorbidades)",
    precautions: "RISCO CARDIOVASCULAR. REQUIERE PRESCRIÇÃO E SUPERVISÃO MÉDICA.",
    sideEffects: "Aumento da pressão arterial e frequência cardíaca, insônia, boca seca, constipação",
    benefits: "Auxilia na perda de peso (com acompanhamento)",
    stock: 10,
    rating: 3.5,
    reviews: 15,
  },

  // INJETÁVEIS - MULHERES
  {
    id: "primobolan-depot-women",
    name: "Primobolan Depot (Mulheres)",
    shortDescription: "Anabólico injetável seguro para mulheres.",
    description: "Apresentação injetável do Primobolan, seguro e com baixo risco de virilização para mulheres.",
    price: 399.90,
    image: '/Products/Injetaveis/Primobolan.png', // Usa a mesma imagem do Primobolan Depot
    category: "injectable",
    type: "primobolan",
    gender: ["women"],
    features: ["Baixo risco de virilização", "Ganho de qualidade"],
    usage: "50-100 mg/semana",
    duration: "8-12 semanas",
    indications: "Ganho muscular leve, cutting",
    precautions: "Monitorar sinais de virilização em doses mais altas",
    sideEffects: "Acne, aumento de pelos (raro em doses baixas)",
    benefits: "Massa magra sem retenção",
    stock: 12,
    rating: 4.8,
    reviews: 54,
  },
  {
    id: "deca-durabolin-women",
    name: "Decanoato de Nandrolona (Mulheres)",
    shortDescription: "Anabólico injetável para mulheres (risco).",
    description: "Embora menos androgênica que a testosterona, a Deca ainda apresenta risco de virilização em mulheres, especialmente em doses mais altas.",
    price: 299.90,
    image: '/Products/Injetaveis/DecanoatoNandrolona.png', // Usa a mesma imagem
    category: "injectable",
    type: "nandrolone-decanoate",
    gender: ["women"],
    features: ["Proteção articular", "Ganho de massa (com risco)"],
    usage: "50-100 mg/semana (com cuidado)",
    duration: "10-12 semanas",
    indications: "Uso terapêutico ou esportivo (com ressalvas)",
    precautions: "Monitorar virilização de perto",
    sideEffects: "Aumento de pelos, engrossamento da voz, clitoromegalia",
    benefits: "Pode ajudar em lesões articulares",
    stock: 25,
    rating: 4.0,
    reviews: 10,
  },
  {
    id: "boldenona-women",
    name: "Boldenona (Equipoise) (Mulheres)",
    shortDescription: "Anabólico injetável para mulheres (risco).",
    description: "Boldenona pode ser usada por mulheres, mas com risco de virilização. Proporciona ganhos de qualidade.",
    price: 259.90,
    image: '/Products/Injetaveis/Boldenona.png', // Usa a mesma imagem
    category: "injectable",
    type: "boldenone",
    gender: ["women"],
    features: ["Ganho seco", "Vascularização (com risco)"],
    usage: "50-100 mg/semana",
    duration: "10-15 semanas",
    indications: "Cutting ou ganho leve",
    precautions: "Monitorar virilização de perto",
    sideEffects: "Aumento de pelos, engrossamento da voz",
    benefits: "Ganhos de qualidade (com cuidado)",
    stock: 30,
    rating: 4.3,
    reviews: 15,
  },

  // ORAIS - MULHERES
  {
    id: "oxandrolona-women",
    name: "Oxandrolona (Anavar) (Mulheres)",
    shortDescription: "Anabólico oral mais seguro para mulheres.",
    description: "Considerado um dos esteroides orais mais seguros para mulheres devido ao baixo risco de virilização.",
    price: 179.90,
    image: '/Products/Comprimidos/Oxandrolona.png',
    category: "oral",
    type: "oxandrolone",
    gender: ["women"],
    features: ["Baixo risco de virilização", "Ganho de força", "Definição"],
    usage: "5-10 mg/dia (dividido em 1-2 doses)",
    duration: "6-8 semanas",
    indications: "Ganho muscular leve, cutting",
    precautions: "Monitorar sinais em doses mais altas",
    sideEffects: "Leves (acne)",
    benefits: "Ganhos de qualidade, força",
    stock: 35,
    rating: 4.9,
    reviews: 105,
    isFeatured: true
  },
  {
    id: "stanozolol-oral-women",
    name: "Stanozolol (Winstrol) Oral (Mulheres)",
    shortDescription: "Anabólico oral para mulheres (risco moderado).",
    description: "Embora popular, o Stanozolol oral apresenta risco moderado de virilização em mulheres.",
    price: 169.90,
    image: '/Products/Comprimidos/Stanozolol.png', // Usa a mesma imagem
    category: "oral",
    type: "stanozolol",
    gender: ["women"],
    features: ["Densidade muscular", "Aumento de força (com risco)"],
    usage: "5-10 mg/dia",
    duration: "4-6 semanas",
    indications: "Cutting (com ressalvas)",
    precautions: "Monitorar virilização de perto",
    sideEffects: "Engrossamento da voz, aumento de pelos, ressecamento articular",
    benefits: "Pode ajudar na definição (com cuidado)",
    stock: 28,
    rating: 4.0,
    reviews: 30,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByType = (type: ProductType): Product[] => {
  return products.filter(product => product.type === type);
};

export const getProductsByGender = (gender: 'men' | 'women'): Product[] => {
  return products.filter(product => product.gender.includes(gender));
};

export const getProductsForMen = (products: Product[]) => {
  return products.filter(product => product.gender.includes('men'));
}

export const getProductsForWomen = (products: Product[]) => {
  return products.filter(product => product.gender.includes('women'));
}

export const getProductsForBothGenders = (products: Product[]) => {
  return products.filter(product => product.gender.includes('men') && product.gender.includes('women'));
}