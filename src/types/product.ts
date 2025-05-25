export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  discountPrice?: number;
  image: string;
  category?: ProductCategory;
  type?: ProductType;
  gender: ProductGender[];
  features: string[];
  usage: string;
  duration: string;
  indications: string;
  precautions: string;
  sideEffects: string;
  benefits: string;
  stock: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
}

export type ProductCategory = 'injectable' | 'oral';

export type InjectableType =
  | 'testosterone-cipionate'    // Deposteron
  | 'testosterone-blend'        // Durateston
  | 'primobolan'               // Primobolan
  | 'nandrolone-decanoate'     // Deca-Durabolin
  | 'masteron'                 // Masteron
  | 'trembolone'               // Trembolona
  | 'boldenone'                // Boldenona/Equipoise
  | 'testosterone-enanthate'   // Testosterona Enantato
  | 'testosterone-propionate'   // Testosterona Propionato
  | 'sustanon'                 // Sustanon 250
  | 'growth-hormone'           // GH
  | 'insulin'                  // Insulina
  | 'hcg';                     // HCG

export type OralType =
| 'oxandrolone'              // Oxandrolona (Anavar)
| 'stanozolol'               // Stanozolol (Winstrol)
| 'dianabol'                 // Metandrostenolona (Dianabol)
| 'turinabol'               // Turinabol
| 'halotestin'              // Fluoximesterona (Halotestin)
| 'proviron'                // Mesterolona (Proviron)
| 'clomid'                  // Clomifeno (Clomid)
| 'nolvadex'                // Tamoxifeno (Nolvadex)
| 'aromatase-inhibitors'    // Inibidores de Aromatase (Anastrozol / Letrozol)
| 'contraceptive'           // Anticoncepcionais (Yaz, Diane 35, etc.)
| 'clenbuterol'             // Clenbuterol
| 't3'                      // Liotironina (T3)
| 't4'                      // Levotiroxina (T4)
| 'tamoxifen'               // Tamoxifeno
| 'xenical'                 // Orlistate (Xenical)
| 'sarms'                   // SARMs (moduladores seletivos dos receptores androgênicos)
| 'dnp'                     // Dinitrofenol (DNP)
| 'sibutrapro'              // Sibutramina (Sibutrapro)

export type ProductType = InjectableType | OralType;

export type ProductGender = 'men' | 'women' | 'both';
