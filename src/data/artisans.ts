export interface Artisan {
  id: string;
  name: string;
  age: number;
  center: string;
  state: string;
  specialty: string;
  yearsOfExperience: number;
  bio: string;
  story: string;
  image: string;
  productsCount: number;
  joinedYear: number;
}

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Don Manuel García",
    age: 78,
    center: "Casa del abuelo feliz",
    state: "Oaxaca",
    specialty: "Conservas y mermeladas",
    yearsOfExperience: 45,
    bio: "Maestro conservero con más de 4 décadas de experiencia en la elaboración de mermeladas artesanales.",
    story: "Don Manuel comenzó a elaborar conservas junto a su madre cuando tenía apenas 8 años. Durante 40 años trabajó en una pequeña fábrica de conservas en Oaxaca, donde perfeccionó su técnica. Cuando la fábrica cerró, pensó que sus días productivos habían terminado. Pero al llegar a Casa del abuelo feliz, encontró un nuevo propósito: enseñar a otros residentes el arte de las conservas y crear productos que llegan a hogares de todo México. 'Cada frasco que sale de aquí lleva mi corazón', dice Don Manuel mientras revisa el punto exacto de sus mermeladas de higo.",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=400&h=400&fit=crop",
    productsCount: 3,
    joinedYear: 2021,
  },
  {
    id: "2",
    name: "María Elena Jiménez",
    age: 82,
    center: "Hogar San José",
    state: "Querétaro",
    specialty: "Velas artesanales",
    yearsOfExperience: 60,
    bio: "Artesana de velas con una vida dedicada a preservar esta tradición familiar.",
    story: "María Elena aprendió a hacer velas de la mano de su madre en un pequeño taller familiar en Querétaro. Durante 60 años, las velas de María Elena iluminaron iglesias, hogares y celebraciones de toda la región. Hoy, a sus 82 años y con la vista algo disminuida, sigue guiando a las nuevas generaciones de artesanos en el Hogar San José. 'Mis manos recuerdan cada movimiento', explica mientras moldea la cera con una precisión que asombra a quienes la observan. Sus velas de cera de abeja son reconocidas por su brillo dorado único y su aroma suave a miel.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
    productsCount: 2,
    joinedYear: 2020,
  },
  {
    id: "3",
    name: "Doña Lupita Hernández",
    age: 75,
    center: "Asilo Santa María",
    state: "Guadalajara",
    specialty: "Jabones naturales",
    yearsOfExperience: 40,
    bio: "Ex trabajadora de la industria cosmética, ahora crea jabones premium con ingredientes naturales.",
    story: "Doña Lupita trabajó 40 años en la industria cosmética de Guadalajara, donde aprendió todos los secretos de la formulación de productos de cuidado personal. Cuando se jubiló, pensó que dejaría atrás esa parte de su vida. Pero el destino tenía otros planes. En el Asilo Santa María, comenzó a elaborar jabones artesanales con una calidad que supera a muchos productos comerciales. 'Uso los mejores ingredientes porque estos jabones llevan mi nombre', dice orgullosa. Sus jabones de lavanda son especialmente populares, curados durante 6 semanas para lograr una textura cremosa incomparable.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
    productsCount: 4,
    joinedYear: 2021,
  },
  {
    id: "4",
    name: "Don Roberto Canché",
    age: 80,
    center: "Hogar de ancianos Esperanza",
    state: "Yucatán",
    specialty: "Apicultura tradicional maya",
    yearsOfExperience: 55,
    bio: "Heredero de la tradición maya de apicultura, especialista en miel de abeja melipona.",
    story: "Don Roberto nació en una familia de apicultores mayas en el corazón de la selva yucateca. Desde niño aprendió a cuidar a las abejas meliponas, las abejas sin aguijón que los mayas veneraban desde tiempos ancestrales. 'La abeja melipona es sagrada para nosotros', explica Don Roberto. 'Su miel tiene poderes curativos que la ciencia apenas está descubriendo'. A sus 80 años, Don Roberto supervisa los apiarios del Hogar de ancianos Esperanza y capacita a jóvenes locales en esta tradición milenaria. Su miel de melipona es un producto único en el mundo.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    productsCount: 2,
    joinedYear: 2020,
  },
  {
    id: "5",
    name: "Don Jesús Tzintzún",
    age: 83,
    center: "Centro geriátrico Felicidad",
    state: "Michoacán",
    specialty: "Alfarería purépecha",
    yearsOfExperience: 65,
    bio: "Maestro alfarero originario de Tzintzuntzan, guardián de la tradición cerámica purépecha.",
    story: "Don Jesús lleva el barro en la sangre. Nacido en Tzintzuntzan, el antiguo centro ceremonial del imperio purépecha, aprendió el arte de la alfarería antes de aprender a leer. Durante 65 años, sus manos han dado forma a miles de piezas que adornan hogares de todo el mundo. 'Cada pieza que hago cuenta una historia de mi pueblo', dice mientras decora una maceta con símbolos ancestrales. Sus diseños incorporan elementos de la cosmovisión purépecha: el sol, el agua, los cuatro rumbos del universo. Hoy, en el Centro geriátrico Felicidad, Don Jesús no solo crea arte, sino que forma a la siguiente generación de alfareros.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    productsCount: 5,
    joinedYear: 2022,
  },
  {
    id: "6",
    name: "Doña Teresa Morales",
    age: 77,
    center: "Asilo Nuestra señora",
    state: "Puebla",
    specialty: "Herbolaria y aromaterapia",
    yearsOfExperience: 50,
    bio: "Conocedora de plantas medicinales, combina sabiduría tradicional con aromaterapia moderna.",
    story: "Doña Teresa creció rodeada de plantas medicinales en la sierra norte de Puebla. Su abuela, curandera del pueblo, le transmitió conocimientos de herbolaria que se remontan a generaciones. 'Las plantas hablan si sabes escucharlas', dice Doña Teresa con una sonrisa. Durante décadas, ayudó a su comunidad con remedios naturales. Hoy, en el Asilo Nuestra señora, ha encontrado una nueva forma de compartir su sabiduría: creando sales de baño aromáticas que combinan hierbas tradicionales con técnicas modernas de aromaterapia. Cada mezcla está pensada para relajar, revitalizar o sanar.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    productsCount: 3,
    joinedYear: 2021,
  },
  {
    id: "7",
    name: "Don Fernando Romo",
    age: 81,
    center: "Hogar San Vicente",
    state: "Aguascalientes",
    specialty: "Licores artesanales",
    yearsOfExperience: 45,
    bio: "Heredero de recetas familiares de licores tradicionales de Calvillo.",
    story: "Don Fernando nació en Calvillo, Aguascalientes, conocido como la capital mundial de la guayaba. Pero en su familia, el membrillo era el rey. Su abuelo elaboraba licor de membrillo con una receta secreta que pasó de generación en generación. 'Este licor tiene el sabor de mi infancia', dice Don Fernando mientras supervisa la maceración de los membrillos. El proceso completo toma 8 meses: 6 de maceración y 2 de añejamiento. 'La paciencia es el ingrediente secreto', confiesa. En el Hogar San Vicente, Don Fernando ha encontrado aprendices entusiastas que continuarán esta tradición familiar.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    productsCount: 2,
    joinedYear: 2020,
  },
  {
    id: "8",
    name: "Don Aurelio Cárdenas",
    age: 76,
    center: "Asilo San Francisco",
    state: "Baja California",
    specialty: "Aceites gourmet",
    yearsOfExperience: 35,
    bio: "Ex olivicultor del Valle de Guadalupe, especialista en aceites infusionados.",
    story: "Don Aurelio dedicó su vida a los olivares del Valle de Guadalupe, la región vinícola más importante de México. Conoce cada variedad de aceituna como si fueran miembros de su familia. 'El aceite de oliva es poesía líquida', dice mientras prueba la última cosecha. Cuando llegó al Asilo San Francisco, trajo consigo su pasión por los aceites de calidad. Ahora combina aceite extra virgen del Valle con hierbas aromáticas del jardín del asilo, creando infusiones que han ganado reconocimiento de chefs de todo el país.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop",
    productsCount: 3,
    joinedYear: 2022,
  },
];

export function getArtisanById(id: string): Artisan | undefined {
  return artisans.find(a => a.id === id);
}
