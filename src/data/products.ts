// Product images
import mermeladaImg from "@/assets/products/mermelada.jpg";
import velaImg from "@/assets/products/vela.jpg";
import bolsaImg from "@/assets/products/bolsa.jpg";
import jabonImg from "@/assets/products/jabon.jpg";
import mielImg from "@/assets/products/miel.jpg";
import aceiteImg from "@/assets/products/aceite.jpg";
import cafeImg from "@/assets/products/cafe.png";
import macetaImg from "@/assets/products/maceta.jpg";
import salesImg from "@/assets/products/sales.jpg";
import licorImg from "@/assets/products/licor.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  artisan: string;
  artisanAge: number;
  center: string;
  state: string;
  image: string;
  description: string;
  longDescription: string;
  materials: string[];
  production: string;
  weight: string;
  dimensions?: string;
  careInstructions: string;
  shippingTime: string;
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Mermelada de higo artesanal",
    slug: "mermelada-higo-artesanal",
    category: "Línea Gourmet",
    categorySlug: "gourmet",
    price: 185,
    artisan: "Manuel",
    artisanAge: 78,
    center: "Casa del abuelo feliz",
    state: "Oaxaca",
    image: mermeladaImg,
    description: "Elaborada con higos frescos de temporada y el toque secreto de décadas de experiencia.",
    longDescription: "Nuestra mermelada de higo es elaborada artesanalmente por Manuel, quien a sus 78 años conserva la receta familiar que ha pasado por tres generaciones. Cada frasco contiene higos cuidadosamente seleccionados de huertos locales de Oaxaca, cocidos a fuego lento con el punto exacto de azúcar de caña que solo la experiencia puede determinar.",
    materials: ["Higos frescos de Oaxaca", "Azúcar de caña orgánica", "Jugo de limón natural", "Pectina natural de manzana"],
    production: "Elaboración tradicional en olla de cobre, cocción lenta de 4-6 horas, envasado manual en frascos de vidrio esterilizados.",
    weight: "350g",
    careInstructions: "Conservar en lugar fresco y seco. Una vez abierto, refrigerar y consumir en 30 días.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "2",
    name: "Vela de cera de abeja",
    slug: "vela-cera-abeja",
    category: "Hogar y bienestar",
    categorySlug: "hogar",
    price: 145,
    artisan: "María Elena",
    artisanAge: 82,
    center: "Hogar San José",
    state: "Querétaro",
    image: velaImg,
    description: "Vela 100% natural con aroma suave, perfecta para crear ambientes de paz.",
    longDescription: "María Elena aprendió el arte de las velas de su madre hace más de 60 años. Cada vela es moldeada a mano con cera de abeja pura de apiarios queretanos, lo que le da ese brillo dorado característico y un aroma suave a miel. Perfecta para meditación, yoga o simplemente crear un ambiente de paz en el hogar.",
    materials: ["Cera de abeja 100% pura", "Mecha de algodón orgánico", "Aceites esenciales naturales opcionales"],
    production: "Fundición artesanal a baja temperatura para preservar propiedades, moldeado manual, secado natural de 48 horas.",
    weight: "180g",
    dimensions: "8cm diámetro x 10cm altura",
    careInstructions: "Mantener la mecha recortada a 0.5cm. Evitar corrientes de aire durante el uso. Tiempo de quemado aprox. 40 horas.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "3",
    name: "Bolsa de cuero tejido",
    slug: "bolsa-cuero-tejido",
    category: "Cultural/Tradicional",
    categorySlug: "cultural",
    price: 890,
    artisan: "Grupo Esperanza",
    artisanAge: 0,
    center: "CADI Luz y vida",
    state: "CDMX",
    image: bolsaImg,
    description: "Bolsa tejida a mano con técnicas tradicionales heredadas por generaciones.",
    longDescription: "Esta bolsa representa el trabajo colaborativo de cinco artesanas del Grupo Esperanza, quienes combinan cuero curtido vegetalmente con textiles tradicionales oaxaqueños. El proceso completo de una sola bolsa toma aproximadamente dos semanas, desde el corte del cuero hasta el tejido final. Cada pieza es única y lleva la firma colectiva del grupo.",
    materials: ["Cuero vacuno curtido vegetal", "Hilo de algodón teñido con tintes naturales", "Herrajes de latón envejecido", "Forro de manta de algodón"],
    production: "Corte y costura de cuero a mano, tejido en telar de cintura, ensamble y acabado artesanal.",
    weight: "450g",
    dimensions: "30cm ancho x 25cm alto x 12cm profundidad",
    careInstructions: "Limpiar con paño húmedo. Aplicar acondicionador de cuero cada 6 meses. Guardar rellena para mantener la forma.",
    shippingTime: "5-7 días hábiles",
  },
  {
    id: "4",
    name: "Jabón de lavanda natural",
    slug: "jabon-lavanda-natural",
    category: "Hogar y bienestar",
    categorySlug: "hogar",
    price: 95,
    artisan: "Doña Lupita",
    artisanAge: 75,
    center: "Asilo Santa María",
    state: "Guadalajara",
    image: jabonImg,
    description: "Jabón artesanal con aceites esenciales de lavanda orgánica.",
    longDescription: "Doña Lupita perfeccionó su receta de jabón durante 40 años trabajando en una fábrica de cosméticos. Ahora, a sus 75 años, elabora jabones premium con ingredientes que ella misma selecciona. La lavanda proviene de cultivos orgánicos de Jalisco, y cada barra es curada durante 6 semanas para lograr la textura cremosa que la caracteriza.",
    materials: ["Aceite de oliva extra virgen", "Aceite de coco orgánico", "Manteca de karité", "Aceite esencial de lavanda", "Flores de lavanda secas"],
    production: "Método de saponificación en frío, curado de 6 semanas, corte y empaque manual.",
    weight: "120g",
    dimensions: "9cm x 6cm x 3cm",
    careInstructions: "Mantener en jabonera con drenaje. Dejar secar entre usos para prolongar su duración.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "5",
    name: "Miel de abeja silvestre",
    slug: "miel-abeja-silvestre",
    category: "Línea Gourmet",
    categorySlug: "gourmet",
    price: 220,
    artisan: "Don Roberto",
    artisanAge: 80,
    center: "Hogar de ancianos Esperanza",
    state: "Yucatán",
    image: mielImg,
    description: "Miel pura recolectada de apiarios tradicionales mayas.",
    longDescription: "Don Roberto es heredero de una tradición maya de apicultura que data de generaciones. Su miel de abeja melipona (sin aguijón) es un producto único en el mundo, con propiedades medicinales reconocidas y un sabor distintivo con notas florales de la selva yucateca. Cada cosecha es limitada y certificada por calidad.",
    materials: ["Miel pura de abeja melipona", "Cosecha de flora silvestre yucateca"],
    production: "Extracción manual sin calor, filtrado natural, envasado en frasco de vidrio oscuro para preservar propiedades.",
    weight: "500g",
    careInstructions: "No requiere refrigeración. Mantener tapado y en lugar fresco. La cristalización es natural y no afecta la calidad.",
    shippingTime: "5-7 días hábiles",
  },
  {
    id: "6",
    name: "Aceite de oliva infusionado",
    slug: "aceite-oliva-infusionado",
    category: "Línea Gourmet",
    categorySlug: "gourmet",
    price: 275,
    artisan: "Don Aurelio",
    artisanAge: 76,
    center: "Asilo San Francisco",
    state: "Baja California",
    image: aceiteImg,
    description: "Aceite extra virgen infusionado con hierbas del jardín del centro.",
    longDescription: "Don Aurelio, originario del Valle de Guadalupe, combinó su pasión por la olivicultura con las hierbas aromáticas del jardín del asilo. El resultado es un aceite de oliva extra virgen infusionado con romero, tomillo y albahaca frescos, perfecto para ensaladas, pastas o pan artesanal.",
    materials: ["Aceite de oliva extra virgen del Valle de Guadalupe", "Romero fresco", "Tomillo silvestre", "Albahaca orgánica"],
    production: "Prensado en frío, infusión lenta de 30 días, filtrado natural, embotellado manual.",
    weight: "250ml",
    careInstructions: "Guardar en lugar oscuro y fresco. Consumir preferentemente en 6 meses para disfrutar todo su aroma.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "7",
    name: "Café de altura tostado",
    slug: "cafe-altura-tostado",
    category: "Línea Gourmet",
    categorySlug: "gourmet",
    price: 195,
    artisan: "Grupo cafetero Sabiduría",
    artisanAge: 0,
    center: "Hogar Tercera edad",
    state: "Veracruz",
    image: null,
    description: "Café de altura tostado artesanalmente con notas de chocolate.",
    longDescription: "El Grupo Cafetero Sabiduría reúne a 8 ex-caficultores residentes del hogar, quienes supervisan cada etapa del proceso. El café proviene de fincas de altura en Coatepec, Veracruz, y es tostado en pequeños lotes en el taller del centro, garantizando frescura y un perfil de sabor con notas de chocolate y nuez.",
    materials: ["Granos de café arábica 100%", "Origen: Coatepec, Veracruz", "Altura: 1,200 msnm", "Tueste medio-oscuro"],
    production: "Selección manual de granos, tostado artesanal en lotes pequeños, empaque al vacío para máxima frescura.",
    weight: "340g",
    careInstructions: "Una vez abierto, transferir a recipiente hermético. Consumir en 30 días para mejor sabor. Moler antes de preparar.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "8",
    name: "Maceta de barro pintado",
    slug: "maceta-barro-pintado",
    category: "Cultural/Tradicional",
    categorySlug: "cultural",
    price: 320,
    artisan: "Don Jesús",
    artisanAge: 83,
    center: "Centro geriátrico Felicidad",
    state: "Michoacán",
    image: macetaImg,
    description: "Maceta decorativa con diseños tradicionales purépechas.",
    longDescription: "Don Jesús lleva 65 años trabajando el barro. Originario de Tzintzuntzan, Michoacán, trae consigo la tradición alfarera purépecha. Cada maceta es moldeada a mano, decorada con pigmentos naturales y cocida en horno de leña tradicional. Los diseños representan símbolos ancestrales de la cultura purépecha.",
    materials: ["Barro local de Tzintzuntzan", "Pigmentos naturales de óxidos minerales", "Sellador natural a base de cera de abeja"],
    production: "Modelado a mano, secado al sol por 3 días, decoración con pigmentos, cocción en horno de leña, sellado final.",
    weight: "1.2kg",
    dimensions: "18cm diámetro superior x 15cm altura",
    careInstructions: "Apto para interiores y exteriores cubiertos. Asegurar buen drenaje. Evitar heladas directas.",
    shippingTime: "5-7 días hábiles",
  },
  {
    id: "9",
    name: "Sales de baño aromáticas",
    slug: "sales-bano-aromaticas",
    category: "Hogar y bienestar",
    categorySlug: "hogar",
    price: 125,
    artisan: "Doña Teresa",
    artisanAge: 77,
    center: "Asilo Nuestra señora",
    state: "Puebla",
    image: salesImg,
    description: "Sales minerales con mezcla de hierbas relajantes.",
    longDescription: "Doña Teresa combinó sus conocimientos de herbolaria tradicional con técnicas modernas de aromaterapia. Sus sales de baño contienen sal del Himalaya, sales de Epsom y una mezcla secreta de hierbas cultivadas en el jardín del asilo. Perfectas para un baño relajante después de un día largo.",
    materials: ["Sal del Himalaya", "Sales de Epsom", "Aceite esencial de lavanda", "Pétalos de rosa secos", "Manzanilla orgánica", "Hierbabuena"],
    production: "Mezcla manual de sales, infusión de aceites esenciales, secado de hierbas, empaque en frasco de vidrio.",
    weight: "400g",
    careInstructions: "Usar 2-3 cucharadas por baño. Mantener el frasco cerrado en lugar seco. Evitar contacto con ojos.",
    shippingTime: "3-5 días hábiles",
  },
  {
    id: "10",
    name: "Licor de membrillo",
    slug: "licor-membrillo",
    category: "Línea Gourmet",
    categorySlug: "gourmet",
    price: 380,
    artisan: "Don Fernando",
    artisanAge: 81,
    center: "Hogar San Vicente",
    state: "Aguascalientes",
    image: licorImg,
    description: "Licor artesanal elaborado con la receta familiar del artesano.",
    longDescription: "Don Fernando heredó esta receta de su abuelo, quien elaboraba licor de membrillo en el pueblo de Calvillo, Aguascalientes, conocido como 'la capital mundial de la guayaba y el membrillo'. El proceso de maceración toma 6 meses, resultando en un licor suave con el dulzor natural del membrillo maduro.",
    materials: ["Membrillos maduros de Calvillo", "Aguardiente de caña", "Azúcar de caña", "Especias secretas de la familia"],
    production: "Selección de membrillos maduros, maceración de 6 meses, filtrado múltiple, añejamiento adicional de 2 meses, embotellado manual.",
    weight: "750ml",
    careInstructions: "Servir frío o con hielo. Una vez abierto, consumir en 6 meses. Mantener alejado de la luz directa.",
    shippingTime: "5-7 días hábiles",
  },
];

export const categories = [
  { id: "all", name: "Todos", count: allProducts.length },
  { id: "gourmet", name: "Línea Gourmet", count: allProducts.filter(p => p.categorySlug === "gourmet").length },
  { id: "hogar", name: "Hogar y bienestar", count: allProducts.filter(p => p.categorySlug === "hogar").length },
  { id: "cultural", name: "Cultural/Tradicional", count: allProducts.filter(p => p.categorySlug === "cultural").length },
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return allProducts.find(p => p.id === id);
}
