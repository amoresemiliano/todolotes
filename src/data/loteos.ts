import { Loteo } from '../types';

export const LOTEOS: Loteo[] = [
  {
    id: 'los-aromos-potrero',
    slug: 'los-aromos-potrero',
    name: 'Los Aromos de Potrero',
    location: 'Potrero de los Funes · San Luis',
    zone: 'Potrero de los Funes',
    shortDescription: 'Un desarrollo sobre serranías suaves rodeado de espinillos y molles, pensado para quienes buscan aire puro, sol y cercanía al lago y a la capital.',
    concept: 'Vida serrana, naturaleza viva y tranquilidad a solo minutos de los principales atractivos de San Luis.',
    fullDescription: 'Los Aromos es un fraccionamiento planificado sobre una ladera de serranías bajas con visuales abiertas al valle y cerros de Potrero de los Funes. El proyecto cuenta con parcelas residenciales amplias preparadas para conservar la vegetación autóctona de espinillos, con calles internas consolidadas de ripio seleccionado y obras de infraestructura para habitabilidad inmediata y continua valorización.',
    lotCount: 120,
    minSurfaceM2: 500,
    maxSurfaceM2: 950,
    infrastructure: [
      'Apertura y consolidación de calles internas de ripio seleccionado',
      'Red interna de distribución de agua potable',
      'Tendido de energía eléctrica con pilares reglamentarios',
      'Alumbrado público en accesos y vías principales',
      'Amojonamiento catastral y mensura en cada parcela',
      'Espacio verde central reservado con vegetación nativa'
    ],
    status: 'En comercialización',
    stage: 'Etapa 2 — Lotes con posesión para inicio de obra',
    launchYear: '2024',
    financing: 'Anticipo 35% y saldo en hasta 36 cuotas en pesos',
    deliveryTime: 'Posesión inmediata para edificación',
    // Authentic San Luis style: Rolling sunny green/golden hills, open country road, gentle serranías
    coverImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: true,
    highlights: [
      'A solo 18 minutos del centro de San Luis por Autopista 25 de Mayo',
      'Vistas panorámicas hacia el valle de Potrero de los Funes y serranías',
      'Mensura y subdivisión aprobada para escrituración',
      'Financiación directa y accesible sin bancos'
    ],
    locationDetails: {
      address: 'Ruta Provincial 18, km 14, Potrero de los Funes',
      department: 'Departamento Juan Martín de Pueyrredón, San Luis',
      accessNotes: 'Acceso directo y pavimentado desde la Autopista 25 de Mayo, con empalme ágil hacia San Luis Capital y Juana Koslay.',
      distances: [
        { place: 'Circuito y Lago Potrero de los Funes', time: '5 min', distance: '3.2 km' },
        { place: 'San Luis Capital (Centro)', time: '18 min', distance: '16 km' },
        { place: 'Aeropuerto Mayor César R. Ojeda', time: '22 min', distance: '19 km' },
        { place: 'Hospital Central Dr. Ramón Carrillo', time: '14 min', distance: '12 km' }
      ],
      mapQuery: 'Potrero de los Funes, San Luis, Argentina'
    },
    masterplanNote: 'Planificación de 120 parcelas con amplios frentes de 20 metros y pendientes suaves que garantizan vistas despejadas.',
    parcels: [
      { id: 'p1', code: 'Lote 01', surfaceM2: 520, status: 'Vendido', dimensions: '20m x 26m', orientation: 'Norte' },
      { id: 'p2', code: 'Lote 02', surfaceM2: 540, status: 'Disponible', dimensions: '20m x 27m', orientation: 'Norte', featureNote: 'Frente a espacio verde con chañares' },
      { id: 'p3', code: 'Lote 03', surfaceM2: 510, status: 'Disponible', dimensions: '19m x 26.8m', orientation: 'Norte' },
      { id: 'p4', code: 'Lote 04', surfaceM2: 600, status: 'Reservado', dimensions: '22m x 27.2m', orientation: 'Noroeste' },
      { id: 'p5', code: 'Lote 05', surfaceM2: 580, status: 'Disponible', dimensions: '20m x 29m', orientation: 'Oeste', featureNote: 'Vista directa al atardecer serrano' },
      { id: 'p6', code: 'Lote 06', surfaceM2: 620, status: 'Disponible', dimensions: '21m x 29.5m', orientation: 'Oeste' },
      { id: 'p7', code: 'Lote 07', surfaceM2: 750, status: 'Vendido', dimensions: '25m x 30m', orientation: 'Sur' },
      { id: 'p8', code: 'Lote 08', surfaceM2: 710, status: 'Disponible', dimensions: '24m x 29.5m', orientation: 'Sur', featureNote: 'Árboles nativos conservados en el lote' },
      { id: 'p9', code: 'Lote 09', surfaceM2: 530, status: 'Disponible', dimensions: '20m x 26.5m', orientation: 'Este' },
      { id: 'p10', code: 'Lote 10', surfaceM2: 500, status: 'Vendido', dimensions: '20m x 25m', orientation: 'Este' },
      { id: 'p11', code: 'Lote 11', surfaceM2: 560, status: 'Reservado', dimensions: '20m x 28m', orientation: 'Norte' },
      { id: 'p12', code: 'Lote 12', surfaceM2: 850, status: 'Disponible', dimensions: '28m x 30.3m', orientation: 'Noroeste', featureNote: 'Esquina amplia con frente despejado' }
    ]
  },
  {
    id: 'altos-de-merlo',
    slug: 'altos-de-merlo',
    name: 'Altos de Merlo',
    location: 'Villa de Merlo · San Luis',
    zone: 'Villa de Merlo',
    shortDescription: 'Lotes residenciales al pie de las Sierras de los Comechingones, con el reconocido microclima y vistas abiertas sobre el Valle del Conlara.',
    concept: 'Calidad de vida, sol permanente y vegetación serrana bajo el tercer microclima del mundo.',
    fullDescription: 'Altos de Merlo es un desarrollo residencial diseñado para quienes buscan radicarse o invertir en un entorno de paz absoluta. Ubicado en una cota elevada con vista franca a la puesta de sol sobre el Valle del Conlara, cuenta con parcelas generosas a partir de los 750 m², respetando el monte autóctono de molles y algarrobos.',
    lotCount: 85,
    minSurfaceM2: 750,
    maxSurfaceM2: 1400,
    infrastructure: [
      'Calles internas con cunetas de piedra y consolidado serrano',
      'Conexión al sistema hídrico municipal y agua de vertiente tratada',
      'Red de electricidad trifásica aérea con transformador propio',
      'Iluminación nocturna de baja contaminación lumínica',
      'Ingreso demarcado con pórtico rústico en quebracho',
      'Respaldo de plano de mensura y subdivisión'
    ],
    status: 'Preventa exclusiva',
    stage: 'Lanzamiento Preventa — Obras en ejecución',
    launchYear: '2025',
    financing: 'Entrega inicial y hasta 48 cuotas accesibles en pesos',
    deliveryTime: 'Entrega de posesión estimada: Diciembre 2025',
    // Merlo / Comechingones foothills style: warm sunny serranías, open slopes, native dry forest
    coverImage: 'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: false,
    highlights: [
      'Microclima serrano único y aire puro todo el año',
      'Parcelas amplias pensadas para vivienda permanente o descanso',
      'Atardeceres despejados hacia el Valle del Conlara',
      'Zona de alta demanda turística y valor de reventa'
    ],
    locationDetails: {
      address: 'Camino a Pasos Malos, Villa de Merlo',
      department: 'Departamento Junín, San Luis',
      accessNotes: 'A solo 6 minutos de la rotonda de ingreso a Merlo y de la Avenida del Sol.',
      distances: [
        { place: 'Avenida del Sol (Centro de Merlo)', time: '8 min', distance: '4.5 km' },
        { place: 'Arroyo Pasos Malos', time: '4 min', distance: '2 km' },
        { place: 'Mirador del Sol', time: '12 min', distance: '7.8 km' },
        { place: 'Ruta Nacional 148', time: '10 min', distance: '6.2 km' }
      ],
      mapQuery: 'Villa de Merlo, San Luis, Argentina'
    },
    masterplanNote: 'Trazado orgánico que sigue las curvas de nivel serranas para maximizar visuales y privacidad.',
    parcels: [
      { id: 'am1', code: 'Lote 101', surfaceM2: 750, status: 'Disponible', dimensions: '25m x 30m', orientation: 'Oeste' },
      { id: 'am2', code: 'Lote 102', surfaceM2: 820, status: 'Disponible', dimensions: '26m x 31.5m', orientation: 'Oeste', featureNote: 'Vista panorámica al valle' },
      { id: 'am3', code: 'Lote 103', surfaceM2: 900, status: 'Reservado', dimensions: '28m x 32m', orientation: 'Oeste' },
      { id: 'am4', code: 'Lote 104', surfaceM2: 1100, status: 'Disponible', dimensions: '30m x 36.6m', orientation: 'Noroeste' },
      { id: 'am5', code: 'Lote 105', surfaceM2: 780, status: 'Vendido', dimensions: '25m x 31.2m', orientation: 'Suroeste' },
      { id: 'am6', code: 'Lote 106', surfaceM2: 1250, status: 'Disponible', dimensions: '35m x 35.7m', orientation: 'Oeste', featureNote: 'Terreno de suave relieve serrano' }
    ]
  },
  {
    id: 'la-ribera-del-trapiche',
    slug: 'la-ribera-del-trapiche',
    name: 'La Ribera del Trapiche',
    location: 'El Trapiche · San Luis',
    zone: 'El Trapiche',
    shortDescription: 'Fraccionamiento campestre en un entorno de río transparente, sauces y sombra natural, a 30 minutos de San Luis Capital.',
    concept: 'Naturaleza de río, aire fresco y descanso serrano en una de las localidades más queridas de San Luis.',
    fullDescription: 'La Ribera es un loteo residencial concebido para quienes anhelan el contacto diario con el río y la tranquilidad de las sierras. Ubicado a metros de las costas del río Trapiche y con acceso directo desde la Ruta Provincial 9, ofrece terrenos llanos y regulares con tierra fértil para jardín, piscina y árboles frutales.',
    lotCount: 64,
    minSurfaceM2: 600,
    maxSurfaceM2: 1100,
    infrastructure: [
      'Calles interiores enripiadas de 12 metros de ancho',
      'Red de agua potable de vertiente serrana',
      'Postación eléctrica de hormigón y tendido aéreo',
      'Alambrado perimetral tradicional de 7 hilos',
      'Bajada peatonal comunitaria hacia la ribera del río',
      'Señalética de orientación y mojones de agrimensura'
    ],
    status: 'En comercialización',
    stage: 'Etapa 1 — Entrega inmediata',
    launchYear: '2024',
    financing: 'Financiación directa a medida. Se reciben vehículos en parte de pago.',
    deliveryTime: 'Posesión inmediata',
    // Trapiche river valley style: peaceful riparian trees, sunny green fields, warm water banks
    coverImage: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: false,
    highlights: [
      'Cercanía directa al río Trapiche y balnearios naturales',
      'Excelente arboleda de sauces, molles y algarrobos',
      'Suelo llano que reduce costos de obra y movimiento de tierra',
      'Ambiente apacible ideal para casa de fin de semana o retiro'
    ],
    locationDetails: {
      address: 'Costanera Norte s/n, El Trapiche',
      department: 'Departamento Coronel Pringles, San Luis',
      accessNotes: 'Acceso directo desde Ruta Provincial 9, completamente asfaltada hasta la entrada del loteo.',
      distances: [
        { place: 'Río El Trapiche (balneario)', time: '2 min', distance: '400 m' },
        { place: 'Dique La Florida', time: '10 min', distance: '9 km' },
        { place: 'San Luis Capital', time: '32 min', distance: '38 km' },
        { place: 'El Volcán', time: '15 min', distance: '16 km' }
      ],
      mapQuery: 'El Trapiche, San Luis, Argentina'
    },
    masterplanNote: 'Lotes rectangulares orientados para optimizar el aprovechamiento solar y el patio posterior.',
    parcels: [
      { id: 'rt1', code: 'Lote 01-B', surfaceM2: 600, status: 'Disponible', dimensions: '20m x 30m', orientation: 'Norte' },
      { id: 'rt2', code: 'Lote 02-B', surfaceM2: 600, status: 'Vendido', dimensions: '20m x 30m', orientation: 'Norte' },
      { id: 'rt3', code: 'Lote 03-B', surfaceM2: 650, status: 'Disponible', dimensions: '21.6m x 30m', orientation: 'Noreste', featureNote: 'Sombra natural de sauces nativos' },
      { id: 'rt4', code: 'Lote 04-B', surfaceM2: 800, status: 'Reservado', dimensions: '24m x 33.3m', orientation: 'Este' },
      { id: 'rt5', code: 'Lote 05-B', surfaceM2: 950, status: 'Disponible', dimensions: '28m x 34m', orientation: 'Este', featureNote: 'Fondo colindante a sendero verde' }
    ]
  },
  {
    id: 'solares-de-juana-koslay',
    slug: 'solares-de-juana-koslay',
    name: 'Solares de Juana Koslay',
    location: 'Juana Koslay · San Luis',
    zone: 'Juana Koslay',
    shortDescription: 'Lotes urbanos en el polo residencial más consolidado del Gran San Luis, a pasos de colegios, centros comerciales y servicios.',
    concept: 'La mejor ubicación para tu vivienda permanente con alta revalorización y entorno familiar consolidado.',
    fullDescription: 'Solares de Juana Koslay responde a la demanda de familias que buscan construir su hogar en una zona residencial tranquila, segura y con servicios completos, sin renunciar a la cercanía con el trabajo y las escuelas. Ubicado en un entorno arbolado al pie de suaves colinas serranas.',
    lotCount: 45,
    minSurfaceM2: 450,
    maxSurfaceM2: 700,
    infrastructure: [
      'Calles internas pavimentadas con cordón cuneta',
      'Conexión a red de agua corriente de San Luis',
      'Tendido de red eléctrica subterránea para cuidar el paisaje',
      'Factibilidad de gas natural y fibra óptica',
      'Alumbrado público LED instalado',
      'Desagües pluviales proyectados por ingeniería hidráulica'
    ],
    status: 'Últimos lotes',
    stage: 'Etapa Final — 80% vendido',
    launchYear: '2023',
    financing: 'Planes personalizados. Bonificación por pago contado.',
    deliveryTime: 'Posesión y escrituración inmediata',
    // Juana Koslay residential style: modern house on sunny green ground, serranías in backdrop
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: false,
    highlights: [
      'A 8 minutos del microcentro de San Luis por Av. del Portezuelo',
      'Excelente entorno de casas familiares consolidadas',
      'Infraestructura subterránea de categoría',
      'Cercanía inmediata a colegios, supermercados y centro comercial'
    ],
    locationDetails: {
      address: 'Avenida Los Eucaliptos y Calle Las Violetas, Juana Koslay',
      department: 'Departamento Juan Martín de Pueyrredón, San Luis',
      accessNotes: 'Excelente conexión vial por Avenida del Viento Chorrillero y Autopista Cruz de Piedra.',
      distances: [
        { place: 'Colegios e Institutos', time: '3 min', distance: '1.2 km' },
        { place: 'Centro Comercial La Joaquina', time: '4 min', distance: '2 km' },
        { place: 'San Luis Capital (Plaza Pringles)', time: '8 min', distance: '7.5 km' },
        { place: 'Dique Cruz de Piedra', time: '6 min', distance: '4 km' }
      ],
      mapQuery: 'Juana Koslay, San Luis, Argentina'
    },
    masterplanNote: 'Subdivisión urbana de baja densidad orientada a resguardar la privacidad familiar y el tránsito calmo.',
    parcels: [
      { id: 'jk1', code: 'Lote 08', surfaceM2: 450, status: 'Disponible', dimensions: '15m x 30m', orientation: 'Norte' },
      { id: 'jk2', code: 'Lote 14', surfaceM2: 500, status: 'Disponible', dimensions: '16.6m x 30m', orientation: 'Noreste', featureNote: 'Orientación ideal para jardín soleado' },
      { id: 'jk3', code: 'Lote 22', surfaceM2: 620, status: 'Reservado', dimensions: '18m x 34.4m', orientation: 'Este' },
      { id: 'jk4', code: 'Lote 35', surfaceM2: 480, status: 'Vendido', dimensions: '16m x 30m', orientation: 'Norte' }
    ]
  },
  {
    id: 'estancia-los-quebrachos',
    slug: 'estancia-los-quebrachos',
    name: 'Estancia Los Quebrachos',
    location: 'Estancia Grande · San Luis',
    zone: 'Estancia Grande',
    shortDescription: 'Chacras de campo y lotes amplios en las serranías altas de San Luis, para amantes del paisaje rural, caballos y quietud absoluta.',
    concept: 'El campo puntano en su máxima expresión: amplitud, horizonte y monte autóctono intacto.',
    fullDescription: 'Estancia Los Quebrachos es un proyecto de chacras serranas donde cada lote oscila entre los 1.200 m² y los 3.000 m². Diseñado con criterios de conservación ecológica, cuenta con senderos peatonales, vistas abiertas al horizonte serrano y una baja densidad que asegura privacidad permanente.',
    lotCount: 32,
    minSurfaceM2: 1200,
    maxSurfaceM2: 3000,
    infrastructure: [
      'Caminos rurales mejorados aptos para todo tipo de clima',
      'Puntos de abastecimiento de agua de pozo y vertiente',
      'Factibilidad de electrificación rural y energía solar sugerida',
      'Cierre perimetral tradicional en madera de quebracho y alambre',
      'Preservación de flora autóctona y quebrachos centenarios',
      'Reglamento de convivencia y edificación amigable con el paisaje'
    ],
    status: 'En comercialización',
    stage: 'Etapa de consolidación campestre',
    launchYear: '2024',
    financing: 'Anticipo 40% y saldo en 24 cuotas sin interés en dólares o ajustables en pesos',
    deliveryTime: 'Posesión inmediata',
    // Estancia Grande rural style: expansive campo with distant low serranía horizons, golden hour pastures
    coverImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: false,
    highlights: [
      'Superficies generosas que garantizan privacidad absoluta',
      'Paisaje serrano auténtico con vistas 360°',
      'A solo 25 minutos de San Luis Capital',
      'Ideal para proyectos sustentables, huertas y descanso'
    ],
    locationDetails: {
      address: 'Ruta Provincial 18, Paraje Estancia Grande',
      department: 'Departamento Coronel Pringles, San Luis',
      accessNotes: 'A 4 km del acceso a El Trapiche por camino de ripio consolidado en excelente estado.',
      distances: [
        { place: 'Polo Club Estancia Grande', time: '5 min', distance: '3 km' },
        { place: 'San Luis Capital', time: '26 min', distance: '28 km' },
        { place: 'El Trapiche', time: '8 min', distance: '6 km' }
      ],
      mapQuery: 'Estancia Grande, San Luis, Argentina'
    },
    masterplanNote: '32 parcelas tipo chacra con retiros amplios para proteger las cuencas visuales del paisaje.',
    parcels: [
      { id: 'eq1', code: 'Chacra 01', surfaceM2: 1250, status: 'Disponible', dimensions: '35m x 35.7m', orientation: 'Norte' },
      { id: 'eq2', code: 'Chacra 04', surfaceM2: 1800, status: 'Disponible', dimensions: '40m x 45m', orientation: 'Oeste', featureNote: 'Arboleda autóctona protegida' },
      { id: 'eq3', code: 'Chacra 09', surfaceM2: 2400, status: 'Reservado', dimensions: '50m x 48m', orientation: 'Noroeste' },
      { id: 'eq4', code: 'Chacra 15', surfaceM2: 3000, status: 'Disponible', dimensions: '55m x 54.5m', orientation: 'Sur' }
    ]
  },
  {
    id: 'mirador-de-la-punta',
    slug: 'mirador-de-la-punta',
    name: 'Mirador de La Punta',
    location: 'La Punta · San Luis',
    zone: 'La Punta',
    shortDescription: 'Terrenos llanos y accesibles con vista imponente a las serranías, con rápida conexión a autopistas y servicios modernos.',
    concept: 'Modernidad, crecimiento urbanístico y accesibilidad económica en una de las ciudades más dinámicas de San Luis.',
    fullDescription: 'Mirador de La Punta es un loteo concebido para personas y familias jóvenes que buscan adquirir su primer lote con una inversión inteligente y planes de cuotas al alcance de su economía. Terrenos regulares y planos con vista franca al cordón serrano de San Luis.',
    lotCount: 90,
    minSurfaceM2: 400,
    maxSurfaceM2: 650,
    infrastructure: [
      'Calles internas consolidadas y niveladas con maquinaria vial',
      'Conexión a la red de agua potable',
      'Tendido eléctrico con conexión domiciliaria facilitada',
      'Alumbrado en esquinas y calle principal',
      'Amojonamiento y mensura por agrimensor matriculado',
      'Transporte público de pasajeros a 300 metros'
    ],
    status: 'En comercialización',
    stage: 'Etapa 2 — Cuotas fijas en pesos',
    launchYear: '2024',
    financing: 'Anticipo mínimo y hasta 60 cuotas en pesos',
    deliveryTime: 'Posesión estimada: 6 meses',
    // La Punta style: open flat building terrain, sunny sky, low serranía ridge in distance
    coverImage: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85'
    ],
    featured: false,
    highlights: [
      'Financiación en hasta 60 meses muy accesible',
      'A 12 minutos de San Luis Capital por Autopista 25 de Mayo',
      'Cercanía al Data Center, Parque Astronómico y ULP',
      'Terrenos planos listos para construir'
    ],
    locationDetails: {
      address: 'Bulevar Las Cañadas y Ruta Provincial 146, La Punta',
      department: 'Departamento Juan Martín de Pueyrredón, San Luis',
      accessNotes: 'Acceso directo desde la Autopista 25 de Mayo conectando directo al centro de San Luis.',
      distances: [
        { place: 'Universidad de La Punta (ULP)', time: '5 min', distance: '3.5 km' },
        { place: 'Parque Astronómico La Punta', time: '6 min', distance: '4 km' },
        { place: 'San Luis Capital (Centro)', time: '14 min', distance: '15 km' },
        { place: 'Estadio Juan Gilberto Funes', time: '4 min', distance: '2.8 km' }
      ],
      mapQuery: 'La Punta, San Luis, Argentina'
    },
    masterplanNote: 'Trazado regular en damero con boulevares anchos que facilitan la circulación y las vistas.',
    parcels: [
      { id: 'mlp1', code: 'Lote M-03', surfaceM2: 400, status: 'Disponible', dimensions: '16m x 25m', orientation: 'Norte' },
      { id: 'mlp2', code: 'Lote M-04', surfaceM2: 400, status: 'Disponible', dimensions: '16m x 25m', orientation: 'Norte' },
      { id: 'mlp3', code: 'Lote M-05', surfaceM2: 420, status: 'Vendido', dimensions: '16.8m x 25m', orientation: 'Norte' },
      { id: 'mlp4', code: 'Lote M-12', surfaceM2: 520, status: 'Disponible', dimensions: '20m x 26m', orientation: 'Oeste', featureNote: 'Frente al cerro' },
      { id: 'mlp5', code: 'Lote M-18', surfaceM2: 450, status: 'Reservado', dimensions: '18m x 25m', orientation: 'Este' }
    ]
  }
];

export const FEATURED_LOTEO = LOTEOS.find((l) => l.featured) || LOTEOS[0];
