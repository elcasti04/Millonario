const arrPreguntas = [
[
    {
        pregunta: '¿Cuál es el planeta más grande del sistema solar?',
        respuestas: {
            correcta: 'Júpiter',
            res1: 'Saturno',
            res2: 'Neptuno',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿Quién pintó la Mona Lisa?',
        respuestas: {
            res1: 'Vincent van Gogh',
            correcta: 'Leonardo da Vinci',
            res2: 'Pablo Picasso',
            res3: 'Miguel Ángel'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Vancouver',
            correcta: 'Ottawa',
            res3: 'Montreal'
        }
    },
    {
        pregunta: '¿En qué año llegó Cristóbal Colón a América?',
        respuestas: {
            res1: '1498',
            res2: '1485',
            res3: '1502',
            correcta: '1492'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico cuyo símbolo es Fe?',
        respuestas: {
            res1: 'Flúor',
            correcta: 'Hierro',
            res2: 'Francio',
            res3: 'Fósforo'
        }
    },
    {
        pregunta: '¿Quién escribió Don Quijote de la Mancha?',
        respuestas: {
            res1: 'Gabriel García Márquez',
            res2: 'Lope de Vega',
            correcta: 'Miguel de Cervantes',
            res3: 'Federico García Lorca'
        }
    },
    {
        pregunta: '¿Cuál es el océano más grande del planeta?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico',
            correcta: 'Pacífico'
        }
    },
    {
        pregunta: '¿Cuál es el órgano más grande del cuerpo humano?',
        respuestas: {
            correcta: 'La piel',
            res1: 'El hígado',
            res2: 'Los pulmones',
            res3: 'El corazón'
        }
    },
    {
        pregunta: '¿Qué civilización construyó Machu Picchu?',
        respuestas: {
            res1: 'Azteca',
            correcta: 'Inca',
            res2: 'Maya',
            res3: 'Olmeca'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del oro?',
        respuestas: {
            res1: 'Ag',
            res2: 'Fe',
            correcta: 'Au',
            res3: 'Or'
        }
    },
    {
        pregunta: '¿Quién compuso la Novena Sinfonía?',
        respuestas: {
            res1: 'Mozart',
            res2: 'Bach',
            res3: 'Vivaldi',
            correcta: 'Beethoven'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo por superficie?',
        respuestas: {
            correcta: 'Rusia',
            res1: 'Canadá',
            res2: 'China',
            res3: 'Estados Unidos'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Europa?',
        respuestas: {
            res1: 'Danubio',
            correcta: 'Volga',
            res2: 'Rin',
            res3: 'Dniéper'
        }
    },
    {
        pregunta: '¿Quién escribió Cien años de soledad?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            res2: 'Julio Cortázar',
            correcta: 'Gabriel García Márquez',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Qué gas es más abundante en la atmósfera terrestre?',
        respuestas: {
            res1: 'Oxígeno',
            res2: 'Dióxido de carbono',
            res3: 'Argón',
            correcta: 'Nitrógeno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Japón?',
        respuestas: {
            correcta: 'Tokio',
            res1: 'Kioto',
            res2: 'Osaka',
            res3: 'Hiroshima'
        }
    },
    {
        pregunta: '¿Qué filósofo fue maestro de Alejandro Magno?',
        respuestas: {
            res1: 'Sócrates',
            correcta: 'Aristóteles',
            res2: 'Platón',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Cuál es el continente con mayor superficie?',
        respuestas: {
            res1: 'África',
            res2: 'Europa',
            correcta: 'Asia',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la presión atmosférica?',
        respuestas: {
            res1: 'Termómetro',
            res2: 'Higrómetro',
            res3: 'Anemómetro',
            correcta: 'Barómetro'
        }
    },
    {
        pregunta: '¿Quién escribió La Odisea?',
        respuestas: {
            correcta: 'Homero',
            res1: 'Sófocles',
            res2: 'Virgilio',
            res3: 'Aristófanes'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        respuestas: {
            res1: 'Sídney',
            correcta: 'Canberra',
            res2: 'Melbourne',
            res3: 'Brisbane'
        }
    },
    {
        pregunta: '¿Qué planeta es conocido como el planeta rojo?',
        respuestas: {
            res1: 'Venus',
            res2: 'Júpiter',
            correcta: 'Marte',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Quién descubrió la penicilina?',
        respuestas: {
            res1: 'Louis Pasteur',
            res2: 'Marie Curie',
            res3: 'Robert Koch',
            correcta: 'Alexander Fleming'
        }
    },
    {
        pregunta: '¿Cuál es el idioma más hablado por número de hablantes nativos?',
        respuestas: {
            correcta: 'Chino mandarín',
            res1: 'Inglés',
            res2: 'Español',
            res3: 'Hindi'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido como la tierra del sol naciente?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Corea del Sur',
            res3: 'Tailandia'
        }
    },
    {
        pregunta: '¿Qué órgano bombea la sangre por todo el cuerpo?',
        respuestas: {
            res1: 'Pulmón',
            res2: 'Riñón',
            correcta: 'Corazón',
            res3: 'Hígado'
        }
    },
    {
        pregunta: '¿Quién escribió Romeo y Julieta?',
        respuestas: {
            res1: 'Charles Dickens',
            res2: 'Oscar Wilde',
            res3: 'Jane Austen',
            correcta: 'William Shakespeare'
        }
    },
    {
        pregunta: '¿Cuál es el metal líquido a temperatura ambiente?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Plomo',
            res2: 'Cobre',
            res3: 'Aluminio'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta del mundo sobre el nivel del mar?',
        respuestas: {
            res1: 'K2',
            correcta: 'Everest',
            res2: 'Aconcagua',
            res3: 'Mont Blanc'
        }
    },
    {
        pregunta: '¿Qué país tiene forma aproximada de bota?',
        respuestas: {
            res1: 'Grecia',
            res2: 'España',
            correcta: 'Italia',
            res3: 'Portugal'
        }
    },
    {
        pregunta: '¿Cuál es el satélite natural de la Tierra?',
        respuestas: {
            res1: 'Marte',
            res2: 'Europa',
            res3: 'Titán',
            correcta: 'La Luna'
        }
    },
    {
        pregunta: '¿Quién formuló la teoría de la relatividad?',
        respuestas: {
            correcta: 'Albert Einstein',
            res1: 'Isaac Newton',
            res2: 'Galileo Galilei',
            res3: 'Niels Bohr'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuestas: {
            res1: 'Alejandría',
            correcta: 'El Cairo',
            res2: 'Luxor',
            res3: 'Giza'
        }
    },
    {
        pregunta: '¿Qué planeta tiene los anillos más visibles?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Urano',
            correcta: 'Saturno',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Cuál es el hueso más largo del cuerpo humano?',
        respuestas: {
            res1: 'Tibia',
            res2: 'Húmero',
            res3: 'Radio',
            correcta: 'Fémur'
        }
    },
    {
        pregunta: '¿Quién fue conocido como el Libertador de varias naciones sudamericanas?',
        respuestas: {
            correcta: 'Simón Bolívar',
            res1: 'José de San Martín',
            res2: 'Francisco de Paula Santander',
            res3: 'Antonio Nariño'
        }
    },
    {
        pregunta: '¿Cuál es el país con mayor población de América del Sur?',
        respuestas: {
            res1: 'Argentina',
            correcta: 'Brasil',
            res2: 'Colombia',
            res3: 'Perú'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia los seres vivos?',
        respuestas: {
            res1: 'Geología',
            res2: 'Astronomía',
            correcta: 'Biología',
            res3: 'Física'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Grecia?',
        respuestas: {
            res1: 'Esparta',
            res2: 'Salónica',
            res3: 'Corinto',
            correcta: 'Atenas'
        }
    },
    {
        pregunta: '¿Qué artista pintó Guernica?',
        respuestas: {
            correcta: 'Pablo Picasso',
            res1: 'Salvador Dalí',
            res2: 'Diego Velázquez',
            res3: 'Francisco de Goya'
        }
    },
    {
        pregunta: '¿Cuál es el continente más pequeño?',
        respuestas: {
            res1: 'Europa',
            correcta: 'Oceanía',
            res2: 'Antártida',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué país regaló la Estatua de la Libertad a Estados Unidos?',
        respuestas: {
            res1: 'Reino Unido',
            res2: 'España',
            correcta: 'Francia',
            res3: 'Italia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Turquía?',
        respuestas: {
            res1: 'Estambul',
            res2: 'Esmirna',
            res3: 'Bursa',
            correcta: 'Ankara'
        }
    },
    {
        pregunta: '¿Qué científico propuso las leyes del movimiento y la gravitación universal?',
        respuestas: {
            correcta: 'Isaac Newton',
            res1: 'Albert Einstein',
            res2: 'Galileo Galilei',
            res3: 'Johannes Kepler'
        }
    },
    {
        pregunta: '¿Cuál es el desierto cálido más grande del mundo?',
        respuestas: {
            res1: 'Gobi',
            correcta: 'Sahara',
            res2: 'Kalahari',
            res3: 'Atacama'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Brasil?',
        respuestas: {
            res1: 'Español',
            res2: 'Inglés',
            correcta: 'Portugués',
            res3: 'Francés'
        }
    },
    {
        pregunta: '¿Quién compuso Las cuatro estaciones?',
        respuestas: {
            res1: 'Bach',
            res2: 'Mozart',
            res3: 'Beethoven',
            correcta: 'Antonio Vivaldi'
        }
    },
    {
        pregunta: '¿Qué país fue antiguamente conocido como Persia?',
        respuestas: {
            correcta: 'Irán',
            res1: 'Irak',
            res2: 'Siria',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Portugal?',
        respuestas: {
            res1: 'Oporto',
            correcta: 'Lisboa',
            res2: 'Coímbra',
            res3: 'Braga'
        }
    },
    {
        pregunta: '¿Qué parte de la célula contiene la mayor parte del material genético?',
        respuestas: {
            res1: 'Ribosoma',
            res2: 'Citoplasma',
            correcta: 'Núcleo',
            res3: 'Membrana'
        }
    },
    {
        pregunta: '¿Quién escribió El principito?',
        respuestas: {
            res1: 'Julio Verne',
            res2: 'Victor Hugo',
            res3: 'Albert Camus',
            correcta: 'Antoine de Saint-Exupéry'
        }
    },
    {
        pregunta: '¿Cuál es el país más pequeño del mundo?',
        respuestas: {
            correcta: 'Ciudad del Vaticano',
            res1: 'Mónaco',
            res2: 'San Marino',
            res3: 'Liechtenstein'
        }
    },
    {
        pregunta: '¿Qué científico desarrolló la teoría de la evolución por selección natural?',
        respuestas: {
            res1: 'Gregor Mendel',
            correcta: 'Charles Darwin',
            res2: 'Louis Pasteur',
            res3: 'Alfred Wallace'
        }
    },
    {
        pregunta: '¿Cuál es el río que atraviesa Egipto y desemboca en el Mediterráneo?',
        respuestas: {
            res1: 'Amazonas',
            res2: 'Éufrates',
            correcta: 'Nilo',
            res3: 'Tigris'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Marruecos?',
        respuestas: {
            res1: 'Casablanca',
            res2: 'Marrakech',
            res3: 'Fez',
            correcta: 'Rabat'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió La República?',
        respuestas: {
            correcta: 'Platón',
            res1: 'Aristóteles',
            res2: 'Sócrates',
            res3: 'Descartes'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Budapest?',
        respuestas: {
            res1: 'Rumania',
            correcta: 'Hungría',
            res2: 'Bulgaria',
            res3: 'Serbia'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Na?',
        respuestas: {
            res1: 'Nitrógeno',
            res2: 'Neón',
            correcta: 'Sodio',
            res3: 'Níquel'
        }
    },
    {
        pregunta: '¿Cuál es el lago más grande de América del Sur?',
        respuestas: {
            res1: 'Lago Titicaca',
            res2: 'Lago de Maracaibo',
            res3: 'Lago Poopó',
            correcta: 'Lago de Maracaibo'
        }
    },
    {
        pregunta: '¿Quién escribió La divina comedia?',
        respuestas: {
            correcta: 'Dante Alighieri',
            res1: 'Homero',
            res2: 'Virgilio',
            res3: 'Petrarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Reikiavik?',
        respuestas: {
            res1: 'Noruega',
            correcta: 'Islandia',
            res2: 'Finlandia',
            res3: 'Suecia'
        }
    },
    {
        pregunta: '¿Cuál es la unidad básica de la vida?',
        respuestas: {
            res1: 'Tejido',
            res2: 'Órgano',
            correcta: 'Célula',
            res3: 'Molécula'
        }
    },
    {
        pregunta: '¿Qué civilización desarrolló la escritura cuneiforme?',
        respuestas: {
            res1: 'Egipcios',
            res2: 'Romanos',
            res3: 'Griegos',
            correcta: 'Sumerios'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Noruega?',
        respuestas: {
            correcta: 'Oslo',
            res1: 'Bergen',
            res2: 'Estocolmo',
            res3: 'Helsinki'
        }
    },
    {
        pregunta: '¿Qué compositor quedó sordo durante parte de su vida?',
        respuestas: {
            res1: 'Mozart',
            correcta: 'Beethoven',
            res2: 'Chopin',
            res3: 'Vivaldi'
        }
    },
    {
        pregunta: '¿Cuál es el número primo más pequeño?',
        respuestas: {
            res1: '1',
            res2: '3',
            correcta: '2',
            res3: '0'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Corea del Sur?',
        respuestas: {
            res1: 'Busan',
            res2: 'Incheon',
            res3: 'Daegu',
            correcta: 'Seúl'
        }
    },
    {
        pregunta: '¿Qué órgano produce la insulina?',
        respuestas: {
            correcta: 'Páncreas',
            res1: 'Hígado',
            res2: 'Riñón',
            res3: 'Estómago'
        }
    },
    {
        pregunta: '¿Quién fue el primer ser humano en viajar al espacio?',
        respuestas: {
            res1: 'Neil Armstrong',
            correcta: 'Yuri Gagarin',
            res2: 'Buzz Aldrin',
            res3: 'John Glenn'
        }
    },
    {
        pregunta: '¿Cuál es el país de origen de los Juegos Olímpicos antiguos?',
        respuestas: {
            res1: 'Italia',
            res2: 'Egipto',
            correcta: 'Grecia',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Qué planeta está más cerca del Sol?',
        respuestas: {
            res1: 'Venus',
            res2: 'Marte',
            res3: 'Tierra',
            correcta: 'Mercurio'
        }
    },
    {
        pregunta: '¿Quién escribió La metamorfosis?',
        respuestas: {
            correcta: 'Franz Kafka',
            res1: 'Fiódor Dostoyevski',
            res2: 'León Tolstói',
            res3: 'Ernest Hemingway'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Austria?',
        respuestas: {
            res1: 'Salzburgo',
            correcta: 'Viena',
            res2: 'Graz',
            res3: 'Innsbruck'
        }
    },
    {
        pregunta: '¿Qué metal tiene como símbolo químico Ag?',
        respuestas: {
            res1: 'Oro',
            res2: 'Aluminio',
            correcta: 'Plata',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Qué famoso científico nació en Woolsthorpe, Inglaterra?',
        respuestas: {
            res1: 'Darwin',
            res2: 'Faraday',
            res3: 'Hawking',
            correcta: 'Isaac Newton'
        }
    },
    {
        pregunta: '¿Cuál es el país más poblado de África?',
        respuestas: {
            correcta: 'Nigeria',
            res1: 'Egipto',
            res2: 'Sudáfrica',
            res3: 'Etiopía'
        }
    },
    {
        pregunta: '¿Qué escritor creó al detective Sherlock Holmes?',
        respuestas: {
            res1: 'Agatha Christie',
            correcta: 'Arthur Conan Doyle',
            res2: 'Edgar Allan Poe',
            res3: 'Bram Stoker'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nueva Zelanda?',
        respuestas: {
            res1: 'Auckland',
            res2: 'Christchurch',
            correcta: 'Wellington',
            res3: 'Hamilton'
        }
    },
    {
        pregunta: '¿Qué vitamina se obtiene principalmente mediante la exposición al Sol?',
        respuestas: {
            res1: 'Vitamina A',
            res2: 'Vitamina C',
            res3: 'Vitamina B12',
            correcta: 'Vitamina D'
        }
    },
    {
        pregunta: '¿Qué imperio tuvo como centro político la ciudad de Roma?',
        respuestas: {
            correcta: 'Imperio romano',
            res1: 'Imperio persa',
            res2: 'Imperio mongol',
            res3: 'Imperio otomano'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irlanda?',
        respuestas: {
            res1: 'Cork',
            correcta: 'Dublín',
            res2: 'Galway',
            res3: 'Limerick'
        }
    },
    {
        pregunta: '¿Qué científico formuló las leyes de la herencia genética?',
        respuestas: {
            res1: 'Darwin',
            res2: 'Watson',
            correcta: 'Gregor Mendel',
            res3: 'Crick'
        }
    },
    {
        pregunta: '¿Cuál es el desierto más seco no polar del mundo?',
        respuestas: {
            res1: 'Sahara',
            res2: 'Gobi',
            res3: 'Kalahari',
            correcta: 'Atacama'
        }
    },
    {
        pregunta: '¿Quién escribió Orgullo y prejuicio?',
        respuestas: {
            correcta: 'Jane Austen',
            res1: 'Emily Brontë',
            res2: 'Virginia Woolf',
            res3: 'Mary Shelley'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Zúrich',
            correcta: 'Berna',
            res2: 'Ginebra',
            res3: 'Basilea'
        }
    },
    {
        pregunta: '¿Qué parte del cerebro coordina principalmente el equilibrio y la coordinación?',
        respuestas: {
            res1: 'Hipotálamo',
            res2: 'Hipocampo',
            correcta: 'Cerebelo',
            res3: 'Tálamo'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Austria?',
        respuestas: {
            res1: 'Francés',
            res2: 'Italiano',
            res3: 'Inglés',
            correcta: 'Alemán'
        }
    },
    {
        pregunta: '¿Quién fue el autor de El viejo y el mar?',
        respuestas: {
            correcta: 'Ernest Hemingway',
            res1: 'Mark Twain',
            res2: 'John Steinbeck',
            res3: 'F. Scott Fitzgerald'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Croacia?',
        respuestas: {
            res1: 'Split',
            correcta: 'Zagreb',
            res2: 'Dubrovnik',
            res3: 'Rijeka'
        }
    },
    {
        pregunta: '¿Qué planeta gira de manera retrógrada respecto a la mayoría de los planetas?',
        respuestas: {
            res1: 'Marte',
            res2: 'Júpiter',
            correcta: 'Venus',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Qué tratado puso fin oficialmente a la Primera Guerra Mundial con Alemania?',
        respuestas: {
            res1: 'Tratado de París',
            res2: 'Tratado de Utrecht',
            res3: 'Tratado de Tordesillas',
            correcta: 'Tratado de Versalles'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chile?',
        respuestas: {
            correcta: 'Santiago',
            res1: 'Valparaíso',
            res2: 'Concepción',
            res3: 'Antofagasta'
        }
    },
    {
        pregunta: '¿Qué filósofo es asociado con la frase “Pienso, luego existo”?',
        respuestas: {
            res1: 'Kant',
            correcta: 'René Descartes',
            res2: 'Nietzsche',
            res3: 'Hume'
        }
    },
    {
        pregunta: '¿Cuál es el mamífero más grande del planeta?',
        respuestas: {
            res1: 'Elefante africano',
            res2: 'Orca',
            correcta: 'Ballena azul',
            res3: 'Tiburón ballena'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Polonia?',
        respuestas: {
            res1: 'Cracovia',
            res2: 'Gdansk',
            res3: 'Wroclaw',
            correcta: 'Varsovia'
        }
    },
    {
        pregunta: '¿Qué pintor español es conocido por Las meninas?',
        respuestas: {
            correcta: 'Diego Velázquez',
            res1: 'Goya',
            res2: 'Picasso',
            res3: 'El Greco'
        }
    },
    {
        pregunta: '¿Cuál es el país donde nació Marie Curie?',
        respuestas: {
            res1: 'Francia',
            correcta: 'Polonia',
            res2: 'Alemania',
            res3: 'Rusia'
        }
    },
    {
        pregunta: '¿Qué órgano del cuerpo humano filtra principalmente la sangre y produce orina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Pulmón',
            correcta: 'Riñón',
            res3: 'Páncreas'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Dinamarca?',
        respuestas: {
            res1: 'Aarhus',
            res2: 'Odense',
            res3: 'Aalborg',
            correcta: 'Copenhague'
        }
    },
    {
        pregunta: '¿Quién compuso la ópera La flauta mágica?',
        respuestas: {
            correcta: 'Wolfgang Amadeus Mozart',
            res1: 'Beethoven',
            res2: 'Verdi',
            res3: 'Wagner'
        }
    },
    {
        pregunta: '¿Qué país posee la mayor parte de la selva amazónica?',
        respuestas: {
            res1: 'Perú',
            correcta: 'Brasil',
            res2: 'Colombia',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es el número atómico del hidrógeno?',
        respuestas: {
            res1: '2',
            res2: '0',
            correcta: '1',
            res3: '8'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Finlandia?',
        respuestas: {
            res1: 'Turku',
            res2: 'Tampere',
            res3: 'Oulu',
            correcta: 'Helsinki'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano recibió el Premio Nobel de Literatura?',
        respuestas: {
            correcta: 'Gabriel García Márquez',
            res1: 'Álvaro Mutis',
            res2: 'Jorge Isaacs',
            res3: 'Fernando Vallejo'
        }
    },
    {
        pregunta: '¿Cuál es el océano que separa África de Australia?',
        respuestas: {
            res1: 'Atlántico',
            correcta: 'Índico',
            res2: 'Pacífico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Qué país construyó el canal de Panamá originalmente?',
        respuestas: {
            res1: 'España',
            res2: 'Colombia',
            correcta: 'Estados Unidos',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bélgica?',
        respuestas: {
            res1: 'Brujas',
            res2: 'Amberes',
            res3: 'Gante',
            correcta: 'Bruselas'
        }
    },
    {
        pregunta: '¿Qué filósofo fue discípulo de Sócrates?',
        respuestas: {
            correcta: 'Platón',
            res1: 'Epicuro',
            res2: 'Descartes',
            res3: 'Aristóteles'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Japón?',
        respuestas: {
            res1: 'Won',
            correcta: 'Yen',
            res2: 'Yuan',
            res3: 'Dólar'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la radiactividad natural del uranio?',
        respuestas: {
            res1: 'Marie Curie',
            res2: 'Ernest Rutherford',
            correcta: 'Henri Becquerel',
            res3: 'Albert Einstein'
        }
    },
    {
        pregunta: '¿Cuál es la capital de República Checa?',
        respuestas: {
            res1: 'Brno',
            res2: 'Ostrava',
            res3: 'Pilsen',
            correcta: 'Praga'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por tener tres corazones?',
        respuestas: {
            correcta: 'Pulpo',
            res1: 'Delfín',
            res2: 'Tiburón',
            res3: 'Calamar'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Vietnam?',
        respuestas: {
            res1: 'Ho Chi Minh',
            correcta: 'Hanói',
            res2: 'Da Nang',
            res3: 'Hue'
        }
    },
    {
        pregunta: '¿Qué civilización construyó las pirámides de Giza?',
        respuestas: {
            res1: 'Maya',
            res2: 'Romana',
            correcta: 'Egipcia',
            res3: 'Persa'
        }
    },
    {
        pregunta: '¿Cuál es el punto más profundo conocido de los océanos?',
        respuestas: {
            res1: 'Fosa de Tonga',
            res2: 'Fosa de Perú-Chile',
            res3: 'Fosa de Filipinas',
            correcta: 'Fosa de las Marianas'
        }
    },
    {
        pregunta: '¿Quién escribió Crimen y castigo?',
        respuestas: {
            correcta: 'Fiódor Dostoyevski',
            res1: 'León Tolstói',
            res2: 'Antón Chéjov',
            res3: 'Nikolái Gógol'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Rumania?',
        respuestas: {
            res1: 'Cluj-Napoca',
            correcta: 'Bucarest',
            res2: 'Sibiu',
            res3: 'Brasov'
        }
    },
    {
        pregunta: '¿Qué vitamina es esencial para la coagulación de la sangre?',
        respuestas: {
            res1: 'Vitamina C',
            res2: 'Vitamina D',
            correcta: 'Vitamina K',
            res3: 'Vitamina B1'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por tener la ciudad de Petra?',
        respuestas: {
            res1: 'Egipto',
            res2: 'Israel',
            res3: 'Líbano',
            correcta: 'Jordania'
        }
    },
    {
        pregunta: '¿Qué escritor creó al personaje Drácula?',
        respuestas: {
            correcta: 'Bram Stoker',
            res1: 'Mary Shelley',
            res2: 'H. G. Wells',
            res3: 'Robert Louis Stevenson'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bulgaria?',
        respuestas: {
            res1: 'Plovdiv',
            correcta: 'Sofía',
            res2: 'Varna',
            res3: 'Burgas'
        }
    },
    {
        pregunta: '¿Qué gas utilizan principalmente las plantas durante la fotosíntesis?',
        respuestas: {
            res1: 'Oxígeno',
            res2: 'Nitrógeno',
            correcta: 'Dióxido de carbono',
            res3: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Quién fue el primer emperador romano?',
        respuestas: {
            res1: 'Julio César',
            res2: 'Nerón',
            res3: 'Calígula',
            correcta: 'Augusto'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Serbia?',
        respuestas: {
            correcta: 'Belgrado',
            res1: 'Novi Sad',
            res2: 'Niš',
            res3: 'Kragujevac'
        }
    },
    {
        pregunta: '¿Qué elemento tiene el número atómico 79?',
        respuestas: {
            res1: 'Plata',
            correcta: 'Oro',
            res2: 'Platino',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovenia?',
        respuestas: {
            res1: 'Maribor',
            res2: 'Koper',
            correcta: 'Liubliana',
            res3: 'Celje'
        }
    },
    {
        pregunta: '¿Qué movimiento artístico está asociado con Salvador Dalí?',
        respuestas: {
            res1: 'Cubismo',
            res2: 'Impresionismo',
            res3: 'Expresionismo',
            correcta: 'Surrealismo'
        }
    },
    {
        pregunta: '¿Quién fue el autor de La Ilíada?',
        respuestas: {
            correcta: 'Homero',
            res1: 'Virgilio',
            res2: 'Dante',
            res3: 'Sófocles'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Estonia?',
        respuestas: {
            res1: 'Tartu',
            correcta: 'Tallin',
            res2: 'Narva',
            res3: 'Pärnu'
        }
    },
    {
        pregunta: '¿Qué científico descubrió los rayos X?',
        respuestas: {
            res1: 'Marie Curie',
            res2: 'Thomas Edison',
            correcta: 'Wilhelm Röntgen',
            res3: 'Max Planck'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Letonia?',
        respuestas: {
            res1: 'Daugavpils',
            res2: 'Liepāja',
            res3: 'Jelgava',
            correcta: 'Riga'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Liubliana?',
        respuestas: {
            correcta: 'Eslovenia',
            res1: 'Eslovaquia',
            res2: 'Croacia',
            res3: 'Serbia'
        }
    },
    {
        pregunta: '¿Cuál es el elemento más abundante del universo?',
        respuestas: {
            res1: 'Oxígeno',
            correcta: 'Hidrógeno',
            res2: 'Helio',
            res3: 'Carbono'
        }
    },
    {
        pregunta: '¿Quién pintó La noche estrellada?',
        respuestas: {
            res1: 'Claude Monet',
            res2: 'Pablo Picasso',
            correcta: 'Vincent van Gogh',
            res3: 'Edvard Munch'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Lituania?',
        respuestas: {
            res1: 'Kaunas',
            res2: 'Klaipeda',
            res3: 'Šiauliai',
            correcta: 'Vilna'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió Así habló Zaratustra?',
        respuestas: {
            correcta: 'Friedrich Nietzsche',
            res1: 'Immanuel Kant',
            res2: 'Arthur Schopenhauer',
            res3: 'Jean-Paul Sartre'
        }
    },
    {
        pregunta: '¿Cuál es el país con mayor cantidad de islas?',
        respuestas: {
            res1: 'Indonesia',
            correcta: 'Suecia',
            res2: 'Filipinas',
            res3: 'Canadá'
        }
    },
    {
        pregunta: '¿Qué científico formuló el principio de incertidumbre?',
        respuestas: {
            res1: 'Niels Bohr',
            res2: 'Erwin Schrödinger',
            correcta: 'Werner Heisenberg',
            res3: 'Max Born'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ucrania?',
        respuestas: {
            res1: 'Járkov',
            res2: 'Odesa',
            res3: 'Leópolis',
            correcta: 'Kiev'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano escribió El amor en los tiempos del cólera?',
        respuestas: {
            correcta: 'Gabriel García Márquez',
            res1: 'Jorge Isaacs',
            res2: 'Álvaro Mutis',
            res3: 'Héctor Abad Faciolince'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del potasio?',
        respuestas: {
            res1: 'P',
            correcta: 'K',
            res2: 'Po',
            res3: 'Pt'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Addis Abeba?',
        respuestas: {
            res1: 'Kenia',
            res2: 'Sudán',
            correcta: 'Etiopía',
            res3: 'Somalia'
        }
    },
    {
        pregunta: '¿Quién desarrolló la primera vacuna contra la rabia?',
        respuestas: {
            res1: 'Robert Koch',
            res2: 'Alexander Fleming',
            res3: 'Edward Jenner',
            correcta: 'Louis Pasteur'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Kenia?',
        respuestas: {
            correcta: 'Nairobi',
            res1: 'Mombasa',
            res2: 'Kisumu',
            res3: 'Nakuru'
        }
    },
    {
        pregunta: '¿Qué país es conocido por las ruinas de Angkor Wat?',
        respuestas: {
            res1: 'Tailandia',
            correcta: 'Camboya',
            res2: 'Vietnam',
            res3: 'Laos'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de medida de la resistencia eléctrica?',
        respuestas: {
            res1: 'Voltio',
            res2: 'Amperio',
            correcta: 'Ohmio',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Tailandia?',
        respuestas: {
            res1: 'Chiang Mai',
            res2: 'Phuket',
            res3: 'Pattaya',
            correcta: 'Bangkok'
        }
    },
    {
        pregunta: '¿Quién escribió Los hermanos Karamázov?',
        respuestas: {
            correcta: 'Fiódor Dostoyevski',
            res1: 'León Tolstói',
            res2: 'Anton Chéjov',
            res3: 'Máximo Gorki'
        }
    },
    {
        pregunta: '¿Cuál es el planeta con mayor temperatura superficial promedio?',
        respuestas: {
            res1: 'Mercurio',
            correcta: 'Venus',
            res2: 'Marte',
            res3: 'Júpiter'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Katmandú?',
        respuestas: {
            res1: 'Bután',
            res2: 'India',
            correcta: 'Nepal',
            res3: 'Bangladés'
        }
    },
    {
        pregunta: '¿Qué científico es considerado uno de los padres de la computación teórica?',
        respuestas: {
            res1: 'John von Neumann',
            res2: 'Bill Gates',
            res3: 'Steve Jobs',
            correcta: 'Alan Turing'
        }
    },
    {
        pregunta: '¿Cuál es el lago más profundo del mundo?',
        respuestas: {
            correcta: 'Lago Baikal',
            res1: 'Lago Superior',
            res2: 'Lago Victoria',
            res3: 'Lago Titicaca'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Mongolia?',
        respuestas: {
            res1: 'Erdenet',
            correcta: 'Ulán Bator',
            res2: 'Darkhan',
            res3: 'Karakorum'
        }
    },
    {
        pregunta: '¿Qué civilización utilizó ampliamente los jeroglíficos?',
        respuestas: {
            res1: 'Romanos',
            res2: 'Fenicios',
            correcta: 'Egipcios',
            res3: 'Persas'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Hg?',
        respuestas: {
            res1: 'Hidrógeno',
            res2: 'Hafnio',
            res3: 'Helio',
            correcta: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Islandia?',
        respuestas: {
            correcta: 'Reikiavik',
            res1: 'Akureyri',
            res2: 'Kópavogur',
            res3: 'Hafnarfjörður'
        }
    },
    {
        pregunta: '¿Quién escribió Fahrenheit 451?',
        respuestas: {
            res1: 'George Orwell',
            correcta: 'Ray Bradbury',
            res2: 'Aldous Huxley',
            res3: 'Isaac Asimov'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Damasco?',
        respuestas: {
            res1: 'Irak',
            res2: 'Jordania',
            correcta: 'Siria',
            res3: 'Líbano'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del tungsteno?',
        respuestas: {
            res1: 'T',
            res2: 'Tu',
            res3: 'Ts',
            correcta: 'W'
        }
    },
    {
        pregunta: '¿Quién pintó El grito?',
        respuestas: {
            correcta: 'Edvard Munch',
            res1: 'Pablo Picasso',
            res2: 'Salvador Dalí',
            res3: 'Claude Monet'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irán?',
        respuestas: {
            res1: 'Isfahán',
            correcta: 'Teherán',
            res2: 'Shiraz',
            res3: 'Tabriz'
        }
    },
    {
        pregunta: '¿Qué rama de la ciencia estudia los terremotos?',
        respuestas: {
            res1: 'Vulcanología',
            res2: 'Meteorología',
            correcta: 'Sismología',
            res3: 'Oceanografía'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Pakistán?',
        respuestas: {
            res1: 'Karachi',
            res2: 'Lahore',
            res3: 'Peshawar',
            correcta: 'Islamabad'
        }
    },
    {
        pregunta: '¿Qué tratado dividió las zonas de exploración entre España y Portugal en 1494?',
        respuestas: {
            correcta: 'Tratado de Tordesillas',
            res1: 'Tratado de Versalles',
            res2: 'Tratado de Utrecht',
            res3: 'Tratado de París'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Filipinas?',
        respuestas: {
            res1: 'Cebú',
            correcta: 'Manila',
            res2: 'Dávao',
            res3: 'Quezón City'
        }
    },
    {
        pregunta: '¿Qué científico desarrolló la teoría heliocéntrica moderna?',
        respuestas: {
            res1: 'Galileo Galilei',
            res2: 'Johannes Kepler',
            correcta: 'Nicolás Copérnico',
            res3: 'Tycho Brahe'
        }
    },
    {
        pregunta: '¿Cuál es el país de origen de la filosofía occidental antigua?',
        respuestas: {
            res1: 'Italia',
            res2: 'Egipto',
            res3: 'Persia',
            correcta: 'Grecia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Cuba?',
        respuestas: {
            correcta: 'La Habana',
            res1: 'Santiago de Cuba',
            res2: 'Camagüey',
            res3: 'Varadero'
        }
    },
    {
        pregunta: '¿Qué escritor creó al personaje Hercule Poirot?',
        respuestas: {
            res1: 'Arthur Conan Doyle',
            correcta: 'Agatha Christie',
            res2: 'Dorothy Sayers',
            res3: 'Patricia Highsmith'
        }
    },
    {
        pregunta: '¿Qué planeta tiene la Gran Mancha Roja?',
        respuestas: {
            res1: 'Saturno',
            res2: 'Neptuno',
            correcta: 'Júpiter',
            res3: 'Marte'
        }
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        respuestas: {
            res1: 'Guadalajara',
            res2: 'Monterrey',
            res3: 'Puebla',
            correcta: 'Ciudad de México'
        }
    },
    {
        pregunta: '¿Qué civilización utilizó un sistema de escritura basado en glifos y construyó ciudades como Tikal?',
        respuestas: {
            correcta: 'Maya',
            res1: 'Inca',
            res2: 'Azteca',
            res3: 'Muisca'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            res1: 'Medellín',
            correcta: 'Bogotá',
            res2: 'Cali',
            res3: 'Cartagena'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene como símbolo Pb?',
        respuestas: {
            res1: 'Potasio',
            res2: 'Polonio',
            correcta: 'Plomo',
            res3: 'Platino'
        }
    },
    {
        pregunta: '¿Quién escribió El retrato de Dorian Gray?',
        respuestas: {
            res1: 'Bram Stoker',
            res2: 'Charles Dickens',
            res3: 'George Bernard Shaw',
            correcta: 'Oscar Wilde'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            correcta: 'Buenos Aires',
            res1: 'Córdoba',
            res2: 'Rosario',
            res3: 'Mendoza'
        }
    },
    {
        pregunta: '¿Qué país fue gobernado por los faraones durante la Antigüedad?',
        respuestas: {
            res1: 'Grecia',
            correcta: 'Egipto',
            res2: 'Persia',
            res3: 'Roma'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la frecuencia?',
        respuestas: {
            res1: 'Newton',
            res2: 'Julio',
            correcta: 'Hercio',
            res3: 'Pascal'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Perú?',
        respuestas: {
            res1: 'Cusco',
            res2: 'Arequipa',
            res3: 'Trujillo',
            correcta: 'Lima'
        }
    },
    {
        pregunta: '¿Quién fue conocido como el padre de la medicina occidental?',
        respuestas: {
            correcta: 'Hipócrates',
            res1: 'Galeno',
            res2: 'Aristóteles',
            res3: 'Avicena'
        }
    },
    {
        pregunta: '¿Cuál es el país más extenso de América del Sur?',
        respuestas: {
            res1: 'Argentina',
            correcta: 'Brasil',
            res2: 'Perú',
            res3: 'Colombia'
        }
    },
    {
        pregunta: '¿Qué instrumento se utiliza para observar objetos muy pequeños mediante aumento?',
        respuestas: {
            res1: 'Telescopio',
            res2: 'Periscopio',
            correcta: 'Microscopio',
            res3: 'Barómetro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuestas: {
            res1: 'Guayaquil',
            res2: 'Cuenca',
            res3: 'Loja',
            correcta: 'Quito'
        }
    },
    {
        pregunta: '¿Qué escritor peruano recibió el Premio Nobel de Literatura en 2010?',
        respuestas: {
            correcta: 'Mario Vargas Llosa',
            res1: 'Julio Ramón Ribeyro',
            res2: 'César Vallejo',
            res3: 'Alfredo Bryce Echenique'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más pequeño del sistema solar?',
        respuestas: {
            res1: 'Marte',
            correcta: 'Mercurio',
            res2: 'Venus',
            res3: 'Plutón'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a La Paz y sede constitucional a Sucre?',
        respuestas: {
            res1: 'Perú',
            res2: 'Ecuador',
            correcta: 'Bolivia',
            res3: 'Paraguay'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del calcio?',
        respuestas: {
            res1: 'C',
            res2: 'Cl',
            res3: 'Co',
            correcta: 'Ca'
        }
    },
    {
        pregunta: '¿Quién escribió La casa de los espíritus?',
        respuestas: {
            correcta: 'Isabel Allende',
            res1: 'Laura Esquivel',
            res2: 'Gabriel García Márquez',
            res3: 'Clarice Lispector'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuestas: {
            res1: 'Punta del Este',
            correcta: 'Montevideo',
            res2: 'Salto',
            res3: 'Colonia del Sacramento'
        }
    },
    {
        pregunta: '¿Qué proceso convierte el agua líquida en vapor?',
        respuestas: {
            res1: 'Condensación',
            res2: 'Fusión',
            correcta: 'Evaporación',
            res3: 'Sublimación'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuestas: {
            res1: 'Ciudad del Este',
            res2: 'Encarnación',
            res3: 'Luque',
            correcta: 'Asunción'
        }
    },
    {
        pregunta: '¿Qué antiguo pueblo creó el alfabeto que influyó en muchos sistemas de escritura posteriores?',
        respuestas: {
            correcta: 'Fenicios',
            res1: 'Romanos',
            res2: 'Persas',
            res3: 'Macedonios'
        }
    },
    {
        pregunta: '¿Cuál es el país de origen de la pizza moderna?',
        respuestas: {
            res1: 'Francia',
            correcta: 'Italia',
            res2: 'Grecia',
            res3: 'España'
        }
    },
    {
        pregunta: '¿Qué científico es conocido por sus investigaciones sobre la electricidad y el electromagnetismo?',
        respuestas: {
            res1: 'Charles Darwin',
            res2: 'Louis Pasteur',
            correcta: 'Michael Faraday',
            res3: 'Gregor Mendel'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Venezuela?',
        respuestas: {
            res1: 'Maracaibo',
            res2: 'Valencia',
            res3: 'Barquisimeto',
            correcta: 'Caracas'
        }
    },
    {
        pregunta: '¿Qué autor escribió 1984?',
        respuestas: {
            correcta: 'George Orwell',
            res1: 'Aldous Huxley',
            res2: 'Ray Bradbury',
            res3: 'J. R. R. Tolkien'
        }
    },
    {
        pregunta: '¿Cuál es el proceso por el que una oruga se transforma en mariposa?',
        respuestas: {
            res1: 'Fermentación',
            correcta: 'Metamorfosis',
            res2: 'Fotosíntesis',
            res3: 'Regeneración'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Panamá?',
        respuestas: {
            res1: 'Colón',
            res2: 'David',
            correcta: 'Ciudad de Panamá',
            res3: 'Santiago'
        }
    },
    {
        pregunta: '¿Qué artista es famoso por la escultura El pensador?',
        respuestas: {
            res1: 'Miguel Ángel',
            res2: 'Donatello',
            res3: 'Bernini',
            correcta: 'Auguste Rodin'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Sudamérica?',
        respuestas: {
            correcta: 'Amazonas',
            res1: 'Orinoco',
            res2: 'Paraná',
            res3: 'Magdalena'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Costa Rica?',
        respuestas: {
            res1: 'Liberia',
            correcta: 'San José',
            res2: 'Cartago',
            res3: 'Alajuela'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió El contrato social?',
        respuestas: {
            res1: 'Voltaire',
            res2: 'Montesquieu',
            correcta: 'Jean-Jacques Rousseau',
            res3: 'John Locke'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido como el país de los mil lagos?',
        respuestas: {
            res1: 'Suecia',
            res2: 'Noruega',
            res3: 'Islandia',
            correcta: 'Finlandia'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene como símbolo Cl?',
        respuestas: {
            correcta: 'Cloro',
            res1: 'Calcio',
            res2: 'Cobalto',
            res3: 'Carbono'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Guatemala?',
        respuestas: {
            res1: 'Antigua Guatemala',
            correcta: 'Ciudad de Guatemala',
            res2: 'Quetzaltenango',
            res3: 'Escuintla'
        }
    },
    {
        pregunta: '¿Quién escribió La Odisea según la tradición clásica?',
        respuestas: {
            res1: 'Platón',
            res2: 'Aristóteles',
            correcta: 'Homero',
            res3: 'Sófocles'
        }
    },
    {
        pregunta: '¿Cuál es la unidad básica de la herencia biológica?',
        respuestas: {
            res1: 'Cromosoma',
            res2: 'Proteína',
            res3: 'Célula',
            correcta: 'Gen'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Honduras?',
        respuestas: {
            correcta: 'Tegucigalpa',
            res1: 'San Pedro Sula',
            res2: 'La Ceiba',
            res3: 'Choloma'
        }
    },
    {
        pregunta: '¿Qué civilización construyó el Coliseo de Roma?',
        respuestas: {
            res1: 'Griega',
            correcta: 'Romana',
            res2: 'Egipcia',
            res3: 'Persa'
        }
    },
    {
        pregunta: '¿Cuál es el punto de congelación del agua a presión atmosférica normal?',
        respuestas: {
            res1: '10 °C',
            res2: '-10 °C',
            correcta: '0 °C',
            res3: '100 °C'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nicaragua?',
        respuestas: {
            res1: 'León',
            res2: 'Granada',
            res3: 'Masaya',
            correcta: 'Managua'
        }
    },
    {
        pregunta: '¿Quién fue el autor de El origen de las especies?',
        respuestas: {
            correcta: 'Charles Darwin',
            res1: 'Gregor Mendel',
            res2: 'Alfred Wallace',
            res3: 'Louis Pasteur'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Kilimanjaro?',
        respuestas: {
            res1: 'Kenia',
            correcta: 'Tanzania',
            res2: 'Uganda',
            res3: 'Etiopía'
        }
    },
    {
        pregunta: '¿Qué órgano es responsable principalmente del intercambio de oxígeno y dióxido de carbono?',
        respuestas: {
            res1: 'Corazón',
            res2: 'Hígado',
            correcta: 'Pulmones',
            res3: 'Riñones'
        }
    },
    {
        pregunta: '¿Cuál es la capital de República Dominicana?',
        respuestas: {
            res1: 'Santiago de los Caballeros',
            res2: 'Punta Cana',
            res3: 'La Romana',
            correcta: 'Santo Domingo'
        }
    },
    {
        pregunta: '¿Qué compositor escribió El lago de los cisnes?',
        respuestas: {
            correcta: 'Piotr Ilich Chaikovski',
            res1: 'Mozart',
            res2: 'Bach',
            res3: 'Chopin'
        }
    },
    {
        pregunta: '¿Cuál es el continente donde se encuentra Egipto?',
        respuestas: {
            res1: 'Asia',
            correcta: 'África',
            res2: 'Europa',
            res3: 'Oceanía'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Canberra?',
        respuestas: {
            res1: 'Nueva Zelanda',
            res2: 'Australia',
            correcta: 'Australia',
            res3: 'Papúa Nueva Guinea'
        }
    },
    {
        pregunta: '¿Cuál es el nombre de la galaxia donde se encuentra el sistema solar?',
        respuestas: {
            res1: 'Andrómeda',
            res2: 'Triángulo',
            res3: 'Sombrero',
            correcta: 'Vía Láctea'
        }
    },
    {
        pregunta: '¿Quién fue el autor de Frankenstein?',
        respuestas: {
            correcta: 'Mary Shelley',
            res1: 'Jane Austen',
            res2: 'Emily Brontë',
            res3: 'Virginia Woolf'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suecia?',
        respuestas: {
            res1: 'Gotemburgo',
            correcta: 'Estocolmo',
            res2: 'Malmö',
            res3: 'Uppsala'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la velocidad del viento?',
        respuestas: {
            res1: 'Barómetro',
            res2: 'Termómetro',
            correcta: 'Anemómetro',
            res3: 'Higrómetro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Países Bajos?',
        respuestas: {
            res1: 'Róterdam',
            res2: 'La Haya',
            res3: 'Utrecht',
            correcta: 'Ámsterdam'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la estructura de la doble hélice del ADN junto con Francis Crick?',
        respuestas: {
            correcta: 'James Watson',
            res1: 'Gregor Mendel',
            res2: 'Louis Pasteur',
            res3: 'Robert Hooke'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la antigua ciudad de Esparta?',
        respuestas: {
            res1: 'Italia',
            correcta: 'Grecia',
            res2: 'Turquía',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo He?',
        respuestas: {
            res1: 'Hidrógeno',
            res2: 'Hafnio',
            correcta: 'Helio',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Francia?',
        respuestas: {
            res1: 'Lyon',
            res2: 'Marsella',
            res3: 'Niza',
            correcta: 'París'
        }
    },
    {
        pregunta: '¿Qué movimiento artístico precedió al cubismo y buscaba representar la luz y el momento?',
        respuestas: {
            correcta: 'Impresionismo',
            res1: 'Surrealismo',
            res2: 'Barroco',
            res3: 'Neoclasicismo'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Fuji?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Corea del Sur',
            res3: 'Nepal'
        }
    },
    {
        pregunta: '¿Cuál es el proceso mediante el cual las plantas producen glucosa utilizando luz?',
        respuestas: {
            res1: 'Respiración',
            res2: 'Fermentación',
            correcta: 'Fotosíntesis',
            res3: 'Transpiración'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Italia?',
        respuestas: {
            res1: 'Milán',
            res2: 'Venecia',
            res3: 'Nápoles',
            correcta: 'Roma'
        }
    },
    {
        pregunta: '¿Quién escribió La riqueza de las naciones?',
        respuestas: {
            correcta: 'Adam Smith',
            res1: 'Karl Marx',
            res2: 'David Ricardo',
            res3: 'John Maynard Keynes'
        }
    },
    {
        pregunta: '¿Cuál es el país con forma de hexágono que se encuentra en Europa occidental?',
        respuestas: {
            res1: 'España',
            correcta: 'Francia',
            res2: 'Italia',
            res3: 'Alemania'
        }
    },
    {
        pregunta: '¿Qué partícula subatómica tiene carga negativa?',
        respuestas: {
            res1: 'Protón',
            res2: 'Neutrón',
            correcta: 'Electrón',
            res3: 'Positrón'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Alemania?',
        respuestas: {
            res1: 'Múnich',
            res2: 'Hamburgo',
            res3: 'Fráncfort',
            correcta: 'Berlín'
        }
    },
    {
        pregunta: '¿Qué antiguo pueblo desarrolló una democracia en Atenas?',
        respuestas: {
            correcta: 'Griegos',
            res1: 'Romanos',
            res2: 'Persas',
            res3: 'Egipcios'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del uranio?',
        respuestas: {
            res1: 'Ur',
            correcta: 'U',
            res2: 'Un',
            res3: 'Ut'
        }
    },
    {
        pregunta: '¿Cuál es la capital de España?',
        respuestas: {
            res1: 'Barcelona',
            res2: 'Sevilla',
            correcta: 'Madrid',
            res3: 'Valencia'
        }
    },
    {
        pregunta: '¿Quién escribió Hamlet?',
        respuestas: {
            res1: 'Christopher Marlowe',
            res2: 'Charles Dickens',
            res3: 'Oscar Wilde',
            correcta: 'William Shakespeare'
        }
    },
    {
        pregunta: '¿Cuál es la velocidad aproximada de la luz en el vacío?',
        respuestas: {
            correcta: '300 000 km/s',
            res1: '30 000 km/s',
            res2: '3 000 km/s',
            res3: '3 000 000 km/s'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Reino Unido?',
        respuestas: {
            res1: 'Manchester',
            correcta: 'Londres',
            res2: 'Liverpool',
            res3: 'Birmingham'
        }
    },
    {
        pregunta: '¿Qué rama de la matemática estudia las figuras, tamaños y posiciones?',
        respuestas: {
            res1: 'Álgebra',
            res2: 'Aritmética',
            correcta: 'Geometría',
            res3: 'Estadística'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la antigua ciudad de Troya?',
        respuestas: {
            res1: 'Grecia',
            res2: 'Italia',
            res3: 'Egipto',
            correcta: 'Turquía'
        }
    },
    {
        pregunta: '¿Qué famoso científico utilizó un telescopio para observar las lunas de Júpiter?',
        respuestas: {
            correcta: 'Galileo Galilei',
            res1: 'Newton',
            res2: 'Kepler',
            res3: 'Copérnico'
        }
    },
    {
        pregunta: '¿Cuál es la capital de China?',
        respuestas: {
            res1: 'Shanghái',
            correcta: 'Pekín',
            res2: 'Hong Kong',
            res3: 'Cantón'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El señor de los anillos?',
        respuestas: {
            res1: 'C. S. Lewis',
            res2: 'George R. R. Martin',
            correcta: 'J. R. R. Tolkien',
            res3: 'J. K. Rowling'
        }
    },
    {
        pregunta: '¿Cuál es el mayor órgano interno del cuerpo humano?',
        respuestas: {
            res1: 'Corazón',
            res2: 'Pulmón',
            res3: 'Riñón',
            correcta: 'Hígado'
        }
    },
    {
        pregunta: '¿Cuál es la capital de India?',
        respuestas: {
            correcta: 'Nueva Delhi',
            res1: 'Bombay',
            res2: 'Calcuta',
            res3: 'Bangalore'
        }
    },
    {
        pregunta: '¿Qué país fue la cuna histórica de los samuráis?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Corea',
            res3: 'Mongolia'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del carbono?',
        respuestas: {
            res1: 'Ca',
            res2: 'Co',
            correcta: 'C',
            res3: 'Cr'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Rusia?',
        respuestas: {
            res1: 'San Petersburgo',
            res2: 'Novosibirsk',
            res3: 'Kazán',
            correcta: 'Moscú'
        }
    },
    {
        pregunta: '¿Qué escritor argentino escribió Rayuela?',
        respuestas: {
            correcta: 'Julio Cortázar',
            res1: 'Jorge Luis Borges',
            res2: 'Ernesto Sabato',
            res3: 'Adolfo Bioy Casares'
        }
    },
    {
        pregunta: '¿Qué planeta es conocido por tener el día más largo en comparación con su año?',
        respuestas: {
            res1: 'Mercurio',
            correcta: 'Venus',
            res2: 'Marte',
            res3: 'Saturno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Sudáfrica que alberga la sede ejecutiva del gobierno?',
        respuestas: {
            res1: 'Ciudad del Cabo',
            res2: 'Johannesburgo',
            correcta: 'Pretoria',
            res3: 'Durban'
        }
    },
    {
        pregunta: '¿Qué científico propuso las tres leyes del movimiento planetario?',
        respuestas: {
            res1: 'Galileo Galilei',
            res2: 'Isaac Newton',
            res3: 'Copérnico',
            correcta: 'Johannes Kepler'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se originó el tango?',
        respuestas: {
            correcta: 'Argentina',
            res1: 'España',
            res2: 'Brasil',
            res3: 'México'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Brasil?',
        respuestas: {
            res1: 'Río de Janeiro',
            correcta: 'Brasilia',
            res2: 'São Paulo',
            res3: 'Salvador'
        }
    },
    {
        pregunta: '¿Qué escritor creó al personaje Don Quijote?',
        respuestas: {
            res1: 'Lope de Vega',
            res2: 'Quevedo',
            correcta: 'Miguel de Cervantes',
            res3: 'Calderón de la Barca'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Grecia?',
        respuestas: {
            res1: 'Esparta',
            res2: 'Corinto',
            res3: 'Tebas',
            correcta: 'Atenas'
        }
    },
    {
        pregunta: '¿Qué sustancia da el color rojo característico a la sangre?',
        respuestas: {
            correcta: 'Hemoglobina',
            res1: 'Melanina',
            res2: 'Insulina',
            res3: 'Queratina'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Everest?',
        respuestas: {
            res1: 'India',
            correcta: 'Nepal',
            res2: 'Bután',
            res3: 'China'
        }
    },
    {
        pregunta: '¿Qué compositor escribió la ópera Carmen?',
        respuestas: {
            res1: 'Verdi',
            res2: 'Puccini',
            correcta: 'Georges Bizet',
            res3: 'Wagner'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Portugal?',
        respuestas: {
            res1: 'Oporto',
            res2: 'Braga',
            res3: 'Faro',
            correcta: 'Lisboa'
        }
    },
    {
        pregunta: '¿Qué país fue gobernado por la dinastía de los zares?',
        respuestas: {
            correcta: 'Rusia',
            res1: 'Francia',
            res2: 'España',
            res3: 'Austria'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Estados Unidos?',
        respuestas: {
            res1: 'Nueva York',
            correcta: 'Washington D. C.',
            res2: 'Los Ángeles',
            res3: 'Chicago'
        }
    },
    {
        pregunta: '¿Qué físico formuló la ecuación de equivalencia entre masa y energía?',
        respuestas: {
            res1: 'Newton',
            res2: 'Bohr',
            correcta: 'Einstein',
            res3: 'Planck'
        }
    },
    {
        pregunta: '¿Cuál es el país de origen del flamenco?',
        respuestas: {
            res1: 'Portugal',
            res2: 'Italia',
            res3: 'Francia',
            correcta: 'España'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Cuba?',
        respuestas: {
            correcta: 'La Habana',
            res1: 'Varadero',
            res2: 'Santiago',
            res3: 'Camagüey'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El amor en los tiempos del cólera?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            correcta: 'Gabriel García Márquez',
            res2: 'Julio Cortázar',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Qué tipo de sangre es considerado donante universal de glóbulos rojos?',
        respuestas: {
            res1: 'AB positivo',
            res2: 'A positivo',
            correcta: 'O negativo',
            res3: 'B negativo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        respuestas: {
            res1: 'Cancún',
            res2: 'Guadalajara',
            res3: 'Monterrey',
            correcta: 'Ciudad de México'
        }
    },
    {
        pregunta: '¿Qué país construyó la Gran Muralla?',
        respuestas: {
            correcta: 'China',
            res1: 'Japón',
            res2: 'Mongolia',
            res3: 'Corea'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Perú?',
        respuestas: {
            res1: 'Cusco',
            correcta: 'Lima',
            res2: 'Arequipa',
            res3: 'Iquitos'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la vacuna contra la viruela?',
        respuestas: {
            res1: 'Louis Pasteur',
            res2: 'Robert Koch',
            correcta: 'Edward Jenner',
            res3: 'Alexander Fleming'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuestas: {
            res1: 'Alejandría',
            res2: 'Giza',
            res3: 'Luxor',
            correcta: 'El Cairo'
        }
    },
    {
        pregunta: '¿Qué escritor creó al monstruo de Frankenstein?',
        respuestas: {
            correcta: 'Mary Shelley',
            res1: 'Bram Stoker',
            res2: 'Edgar Allan Poe',
            res3: 'H. P. Lovecraft'
        }
    },
    {
        pregunta: '¿Cuál es el país con mayor superficie de América del Norte?',
        respuestas: {
            res1: 'Estados Unidos',
            correcta: 'Canadá',
            res2: 'México',
            res3: 'Groenlandia'
        }
    },
    {
        pregunta: '¿Qué elemento químico es necesario para la respiración humana?',
        respuestas: {
            res1: 'Nitrógeno',
            res2: 'Helio',
            correcta: 'Oxígeno',
            res3: 'Neón'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Italia?',
        respuestas: {
            res1: 'Milán',
            res2: 'Turín',
            res3: 'Florencia',
            correcta: 'Roma'
        }
    },
    {
        pregunta: '¿Quién escribió El príncipe?',
        respuestas: {
            correcta: 'Nicolás Maquiavelo',
            res1: 'Dante Alighieri',
            res2: 'Erasmo de Róterdam',
            res3: 'Tomás Moro'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la ciudad antigua de Petra?',
        respuestas: {
            res1: 'Siria',
            correcta: 'Jordania',
            res2: 'Egipto',
            res3: 'Irán'
        }
    },
    {
        pregunta: '¿Qué rama de la biología estudia los animales?',
        respuestas: {
            res1: 'Botánica',
            res2: 'Ecología',
            correcta: 'Zoología',
            res3: 'Micología'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chile?',
        respuestas: {
            res1: 'Valparaíso',
            res2: 'Concepción',
            res3: 'Temuco',
            correcta: 'Santiago'
        }
    },
    {
        pregunta: '¿Qué país es considerado la cuna del Renacimiento?',
        respuestas: {
            correcta: 'Italia',
            res1: 'Francia',
            res2: 'España',
            res3: 'Alemania'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del sodio?',
        respuestas: {
            res1: 'So',
            correcta: 'Na',
            res2: 'Sd',
            res3: 'S'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            res1: 'Córdoba',
            res2: 'Rosario',
            correcta: 'Buenos Aires',
            res3: 'La Plata'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la ley de la gravitación universal?',
        respuestas: {
            res1: 'Einstein',
            res2: 'Galileo',
            res3: 'Kepler',
            correcta: 'Isaac Newton'
        }
    },
    {
        pregunta: '¿Cuál es el país donde nació Wolfgang Amadeus Mozart?',
        respuestas: {
            correcta: 'Austria',
            res1: 'Alemania',
            res2: 'Italia',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Cuál es el principal componente del Sol?',
        respuestas: {
            res1: 'Oxígeno',
            correcta: 'Hidrógeno',
            res2: 'Carbono',
            res3: 'Nitrógeno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuestas: {
            res1: 'Salto',
            res2: 'Colonia',
            res3: 'Punta del Este',
            correcta: 'Montevideo'
        }
    },
    {
        pregunta: '¿Quién pintó Las meninas?',
        respuestas: {
            correcta: 'Diego Velázquez',
            res1: 'Francisco de Goya',
            res2: 'El Greco',
            res3: 'Murillo'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido como la tierra del sol naciente?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Vietnam',
            res3: 'Corea del Sur'
        }
    },
    {
        pregunta: '¿Qué órgano regula principalmente la glucosa mediante la producción de insulina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Riñón',
            correcta: 'Páncreas',
            res3: 'Bazo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            res1: 'Medellín',
            res2: 'Cali',
            res3: 'Cartagena',
            correcta: 'Bogotá'
        }
    },
    {
        pregunta: '¿Qué filósofo fue maestro de Alejandro Magno?',
        respuestas: {
            correcta: 'Aristóteles',
            res1: 'Platón',
            res2: 'Sócrates',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Cuál es el planeta conocido por sus grandes anillos?',
        respuestas: {
            res1: 'Júpiter',
            correcta: 'Saturno',
            res2: 'Urano',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Buenos Aires?',
        respuestas: {
            res1: 'Uruguay',
            res2: 'Chile',
            correcta: 'Argentina',
            res3: 'Paraguay'
        }
    },
    {
        pregunta: '¿Quién escribió La divina comedia?',
        respuestas: {
            res1: 'Petrarca',
            res2: 'Boccaccio',
            res3: 'Virgilio',
            correcta: 'Dante Alighieri'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuestas: {
            correcta: 'Quito',
            res1: 'Guayaquil',
            res2: 'Cuenca',
            res3: 'Ambato'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cu?',
        respuestas: {
            res1: 'Calcio',
            correcta: 'Cobre',
            res2: 'Cobalto',
            res3: 'Carbono'
        }
    },
    {
        pregunta: '¿Qué país fue la cuna de los Juegos Olímpicos antiguos?',
        respuestas: {
            res1: 'Roma',
            res2: 'Egipto',
            correcta: 'Grecia',
            res3: 'Persia'
        }
    },
    {
        pregunta: '¿Cuál es el océano más profundo del planeta?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico',
            correcta: 'Pacífico'
        }
    },
    {
        pregunta: '¿Quién escribió Cien años de soledad?',
        respuestas: {
            correcta: 'Gabriel García Márquez',
            res1: 'Mario Vargas Llosa',
            res2: 'Julio Cortázar',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bolivia?',
        respuestas: {
            res1: 'La Paz',
            correcta: 'Sucre',
            res2: 'Santa Cruz',
            res3: 'Cochabamba'
        }
    },
    {
        pregunta: '¿Qué científico propuso la teoría de la evolución?',
        respuestas: {
            res1: 'Mendel',
            res2: 'Pasteur',
            correcta: 'Charles Darwin',
            res3: 'Newton'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuestas: {
            res1: 'Ciudad del Este',
            res2: 'Encarnación',
            res3: 'Luque',
            correcta: 'Asunción'
        }
    },
    {
        pregunta: '¿Qué civilización construyó Machu Picchu?',
        respuestas: {
            correcta: 'Inca',
            res1: 'Maya',
            res2: 'Azteca',
            res3: 'Muisca'
        }
    },
    {
        pregunta: '¿Cuál es el país con mayor superficie de Sudamérica?',
        respuestas: {
            res1: 'Argentina',
            correcta: 'Brasil',
            res2: 'Colombia',
            res3: 'Perú'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico con símbolo Ag?',
        respuestas: {
            res1: 'Oro',
            res2: 'Aluminio',
            correcta: 'Plata',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Venezuela?',
        respuestas: {
            res1: 'Maracaibo',
            res2: 'Valencia',
            res3: 'Barquisimeto',
            correcta: 'Caracas'
        }
    },
    {
        pregunta: '¿Quién compuso la Novena Sinfonía?',
        respuestas: {
            correcta: 'Ludwig van Beethoven',
            res1: 'Mozart',
            res2: 'Bach',
            res3: 'Haydn'
        }
    },
    {
        pregunta: '¿Cuál es el órgano más grande del cuerpo humano?',
        respuestas: {
            res1: 'Hígado',
            correcta: 'Piel',
            res2: 'Pulmones',
            res3: 'Corazón'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Panamá?',
        respuestas: {
            res1: 'Colón',
            res2: 'David',
            correcta: 'Ciudad de Panamá',
            res3: 'Santiago'
        }
    },
    {
        pregunta: '¿Qué escritor creó a Sherlock Holmes?',
        respuestas: {
            res1: 'Agatha Christie',
            res2: 'Bram Stoker',
            res3: 'Edgar Allan Poe',
            correcta: 'Arthur Conan Doyle'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más cercano al Sol?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Venus',
            res2: 'Tierra',
            res3: 'Marte'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Costa Rica?',
        respuestas: {
            res1: 'Cartago',
            correcta: 'San José',
            res2: 'Alajuela',
            res3: 'Heredia'
        }
    },
    {
        pregunta: '¿Qué rama de la ciencia estudia los terremotos?',
        respuestas: {
            res1: 'Geología',
            res2: 'Vulcanología',
            correcta: 'Sismología',
            res3: 'Meteorología'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nicaragua?',
        respuestas: {
            res1: 'León',
            res2: 'Granada',
            res3: 'Masaya',
            correcta: 'Managua'
        }
    },
    {
        pregunta: '¿Quién escribió El principito?',
        respuestas: {
            correcta: 'Antoine de Saint-Exupéry',
            res1: 'Julio Verne',
            res2: 'Victor Hugo',
            res3: 'Albert Camus'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el desierto de Atacama?',
        respuestas: {
            res1: 'Perú',
            correcta: 'Chile',
            res2: 'Argentina',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la potencia eléctrica?',
        respuestas: {
            res1: 'Voltio',
            res2: 'Amperio',
            correcta: 'Vatio',
            res3: 'Ohmio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Honduras?',
        respuestas: {
            res1: 'San Pedro Sula',
            res2: 'La Ceiba',
            res3: 'Choloma',
            correcta: 'Tegucigalpa'
        }
    },
    {
        pregunta: '¿Quién escribió Orgullo y prejuicio?',
        respuestas: {
            correcta: 'Jane Austen',
            res1: 'Emily Brontë',
            res2: 'Mary Shelley',
            res3: 'Virginia Woolf'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Guatemala?',
        respuestas: {
            res1: 'Antigua Guatemala',
            correcta: 'Ciudad de Guatemala',
            res2: 'Quetzaltenango',
            res3: 'Escuintla'
        }
    },
    {
        pregunta: '¿Qué gas representa aproximadamente el 21% de la atmósfera terrestre?',
        respuestas: {
            res1: 'Nitrógeno',
            res2: 'Argón',
            correcta: 'Oxígeno',
            res3: 'Dióxido de carbono'
        }
    },
    {
        pregunta: '¿Cuál es la capital de República Dominicana?',
        respuestas: {
            res1: 'Santiago',
            res2: 'Punta Cana',
            res3: 'La Romana',
            correcta: 'Santo Domingo'
        }
    },
    {
        pregunta: '¿Qué artista pintó Guernica?',
        respuestas: {
            correcta: 'Pablo Picasso',
            res1: 'Salvador Dalí',
            res2: 'Joan Miró',
            res3: 'Diego Velázquez'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Jamaica?',
        respuestas: {
            res1: 'Montego Bay',
            correcta: 'Kingston',
            res2: 'Spanish Town',
            res3: 'Portmore'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por cambiar de color para camuflarse?',
        respuestas: {
            res1: 'León',
            res2: 'Elefante',
            correcta: 'Camaleón',
            res3: 'Jirafa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bahamas?',
        respuestas: {
            res1: 'Freeport',
            res2: 'Nassau',
            res3: 'George Town',
            correcta: 'Nassau'
        }
    },
    {
        pregunta: '¿Quién fue el primer emperador de Roma?',
        respuestas: {
            correcta: 'Augusto',
            res1: 'Julio César',
            res2: 'Nerón',
            res3: 'Trajano'
        }
    },
    {
        pregunta: '¿Cuál es el país donde nació Pablo Picasso?',
        respuestas: {
            res1: 'Francia',
            correcta: 'España',
            res2: 'Italia',
            res3: 'Portugal'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo N?',
        respuestas: {
            res1: 'Neón',
            res2: 'Níquel',
            correcta: 'Nitrógeno',
            res3: 'Sodio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Jamaica?',
        respuestas: {
            res1: 'Montego Bay',
            res2: 'Port Antonio',
            res3: 'Spanish Town',
            correcta: 'Kingston'
        }
    },
    {
        pregunta: '¿Qué escritor escribió La metamorfosis?',
        respuestas: {
            correcta: 'Franz Kafka',
            res1: 'Albert Camus',
            res2: 'Fiódor Dostoyevski',
            res3: 'Hermann Hesse'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la Torre Eiffel?',
        respuestas: {
            res1: 'Italia',
            correcta: 'Francia',
            res2: 'España',
            res3: 'Bélgica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Vancouver',
            correcta: 'Ottawa',
            res3: 'Montreal'
        }
    },
    {
        pregunta: '¿Qué científico desarrolló la teoría de la relatividad?',
        respuestas: {
            res1: 'Isaac Newton',
            res2: 'Galileo Galilei',
            res3: 'Max Planck',
            correcta: 'Albert Einstein'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la ciudad de Kioto?',
        respuestas: {
            correcta: 'Japón',
            res1: 'China',
            res2: 'Corea del Sur',
            res3: 'Vietnam'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        respuestas: {
            res1: 'Sídney',
            correcta: 'Canberra',
            res2: 'Melbourne',
            res3: 'Brisbane'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano ganó el Nobel de Literatura en 1982?',
        respuestas: {
            res1: 'Jorge Isaacs',
            res2: 'Álvaro Mutis',
            correcta: 'Gabriel García Márquez',
            res3: 'Germán Espinosa'
        }
    },
    {
        pregunta: '¿Cuál es el satélite natural de la Tierra?',
        respuestas: {
            res1: 'Europa',
            res2: 'Titán',
            res3: 'Ganímedes',
            correcta: 'La Luna'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Turquía?',
        respuestas: {
            correcta: 'Ankara',
            res1: 'Estambul',
            res2: 'Esmirna',
            res3: 'Bursa'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió El mundo como voluntad y representación?',
        respuestas: {
            res1: 'Nietzsche',
            correcta: 'Arthur Schopenhauer',
            res2: 'Kant',
            res3: 'Hegel'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de África por superficie?',
        respuestas: {
            res1: 'Egipto',
            res2: 'Sudán',
            correcta: 'Argelia',
            res3: 'Libia'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la penicilina?',
        respuestas: {
            res1: 'Louis Pasteur',
            res2: 'Marie Curie',
            res3: 'Robert Koch',
            correcta: 'Alexander Fleming'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Marruecos?',
        respuestas: {
            correcta: 'Rabat',
            res1: 'Casablanca',
            res2: 'Marrakech',
            res3: 'Fez'
        }
    },
    {
        pregunta: '¿Qué civilización construyó Chichén Itzá?',
        respuestas: {
            res1: 'Inca',
            correcta: 'Maya',
            res2: 'Azteca',
            res3: 'Olmeca'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuestas: {
            res1: 'Alejandría',
            res2: 'Luxor',
            correcta: 'El Cairo',
            res3: 'Giza'
        }
    },
    {
        pregunta: '¿Qué escritor escribió Crimen y castigo?',
        respuestas: {
            res1: 'León Tolstói',
            res2: 'Anton Chéjov',
            res3: 'Nikolái Gógol',
            correcta: 'Fiódor Dostoyevski'
        }
    },
    {
        pregunta: '¿Cuál es el océano que baña la costa occidental de América?',
        respuestas: {
            correcta: 'Pacífico',
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Hungría?',
        respuestas: {
            res1: 'Debrecen',
            correcta: 'Budapest',
            res2: 'Szeged',
            res3: 'Pécs'
        }
    },
    {
        pregunta: '¿Qué pintor español creó La persistencia de la memoria?',
        respuestas: {
            res1: 'Picasso',
            res2: 'Goya',
            correcta: 'Salvador Dalí',
            res3: 'Velázquez'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Polonia?',
        respuestas: {
            res1: 'Cracovia',
            res2: 'Gdansk',
            res3: 'Wroclaw',
            correcta: 'Varsovia'
        }
    },
    {
        pregunta: '¿Qué científico formuló las leyes de la herencia mediante experimentos con guisantes?',
        respuestas: {
            correcta: 'Gregor Mendel',
            res1: 'Charles Darwin',
            res2: 'Louis Pasteur',
            res3: 'Robert Hooke'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el Taj Mahal?',
        respuestas: {
            res1: 'Pakistán',
            correcta: 'India',
            res2: 'Nepal',
            res3: 'Bangladés'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nepal?',
        respuestas: {
            res1: 'Pokhara',
            res2: 'Lalitpur',
            correcta: 'Katmandú',
            res3: 'Biratnagar'
        }
    },
    {
        pregunta: '¿Qué escritor creó el personaje de Drácula?',
        respuestas: {
            res1: 'Mary Shelley',
            res2: 'H. G. Wells',
            res3: 'Edgar Allan Poe',
            correcta: 'Bram Stoker'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico cuyo número atómico es 6?',
        respuestas: {
            correcta: 'Carbono',
            res1: 'Oxígeno',
            res2: 'Nitrógeno',
            res3: 'Boro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Vietnam?',
        respuestas: {
            res1: 'Ho Chi Minh',
            correcta: 'Hanói',
            res2: 'Da Nang',
            res3: 'Hue'
        }
    },
    {
        pregunta: '¿Quién escribió La guerra y la paz?',
        respuestas: {
            res1: 'Dostoyevski',
            res2: 'Chéjov',
            correcta: 'León Tolstói',
            res3: 'Nabokov'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por el monte Kilimanjaro?',
        respuestas: {
            res1: 'Kenia',
            res2: 'Uganda',
            res3: 'Etiopía',
            correcta: 'Tanzania'
        }
    },
    {
        pregunta: '¿Qué instrumento se utiliza para medir la temperatura?',
        respuestas: {
            correcta: 'Termómetro',
            res1: 'Barómetro',
            res2: 'Anemómetro',
            res3: 'Higrómetro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Sudáfrica que funciona como capital legislativa?',
        respuestas: {
            res1: 'Pretoria',
            correcta: 'Ciudad del Cabo',
            res2: 'Johannesburgo',
            res3: 'Durban'
        }
    },
    {
        pregunta: '¿Qué país fue gobernado por los faraones?',
        respuestas: {
            res1: 'Grecia',
            res2: 'Roma',
            correcta: 'Egipto',
            res3: 'Persia'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del proceso de división celular que produce dos células hijas genéticamente similares?',
        respuestas: {
            res1: 'Meiosis',
            res2: 'Fecundación',
            res3: 'Gemación',
            correcta: 'Mitosis'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Indonesia?',
        respuestas: {
            correcta: 'Yakarta',
            res1: 'Bandung',
            res2: 'Surabaya',
            res3: 'Medan'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El extranjero?',
        respuestas: {
            res1: 'Jean-Paul Sartre',
            correcta: 'Albert Camus',
            res2: 'Franz Kafka',
            res3: 'Victor Hugo'
        }
    },
    {
        pregunta: '¿Cuál es el país más poblado de América del Sur?',
        respuestas: {
            res1: 'Argentina',
            res2: 'Colombia',
            correcta: 'Brasil',
            res3: 'Perú'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Portugal?',
        respuestas: {
            res1: 'Oporto',
            res2: 'Coímbra',
            res3: 'Braga',
            correcta: 'Lisboa'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió Crítica de la razón pura?',
        respuestas: {
            correcta: 'Immanuel Kant',
            res1: 'Hegel',
            res2: 'Descartes',
            res3: 'Rousseau'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico más ligero?',
        respuestas: {
            res1: 'Helio',
            correcta: 'Hidrógeno',
            res2: 'Litio',
            res3: 'Oxígeno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Austria?',
        respuestas: {
            res1: 'Salzburgo',
            res2: 'Graz',
            correcta: 'Viena',
            res3: 'Innsbruck'
        }
    },
    {
        pregunta: '¿Qué civilización construyó las famosas líneas de Nazca?',
        respuestas: {
            res1: 'Inca',
            res2: 'Maya',
            res3: 'Azteca',
            correcta: 'Nazca'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el Coliseo?',
        respuestas: {
            correcta: 'Italia',
            res1: 'Grecia',
            res2: 'España',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Quién escribió La peste?',
        respuestas: {
            res1: 'Jean-Paul Sartre',
            correcta: 'Albert Camus',
            res2: 'George Orwell',
            res3: 'Franz Kafka'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Zúrich',
            res2: 'Ginebra',
            correcta: 'Berna',
            res3: 'Basilea'
        }
    },
    {
        pregunta: '¿Qué unidad mide la energía en el Sistema Internacional?',
        respuestas: {
            res1: 'Newton',
            res2: 'Watio',
            res3: 'Pascal',
            correcta: 'Julio'
        }
    },
    {
        pregunta: '¿Cuál es el país donde nació Leonardo da Vinci?',
        respuestas: {
            correcta: 'Italia',
            res1: 'Francia',
            res2: 'España',
            res3: 'Portugal'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irlanda?',
        respuestas: {
            res1: 'Cork',
            correcta: 'Dublín',
            res2: 'Galway',
            res3: 'Limerick'
        }
    },
    {
        pregunta: '¿Qué científico formuló la teoría cuántica?',
        respuestas: {
            res1: 'Einstein',
            res2: 'Heisenberg',
            correcta: 'Max Planck',
            res3: 'Rutherford'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por el Partenón?',
        respuestas: {
            res1: 'Italia',
            res2: 'Turquía',
            res3: 'Egipto',
            correcta: 'Grecia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Croacia?',
        respuestas: {
            correcta: 'Zagreb',
            res1: 'Split',
            res2: 'Dubrovnik',
            res3: 'Rijeka'
        }
    },
    {
        pregunta: '¿Quién compuso Las cuatro estaciones?',
        respuestas: {
            res1: 'Bach',
            correcta: 'Antonio Vivaldi',
            res2: 'Mozart',
            res3: 'Beethoven'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más grande del sistema solar?',
        respuestas: {
            res1: 'Saturno',
            res2: 'Neptuno',
            correcta: 'Júpiter',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bélgica?',
        respuestas: {
            res1: 'Brujas',
            res2: 'Amberes',
            res3: 'Gante',
            correcta: 'Bruselas'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano escribió La vorágine?',
        respuestas: {
            correcta: 'José Eustasio Rivera',
            res1: 'Jorge Isaacs',
            res2: 'Tomás Carrasquilla',
            res3: 'Álvaro Mutis'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico con símbolo Au?',
        respuestas: {
            res1: 'Plata',
            correcta: 'Oro',
            res2: 'Cobre',
            res3: 'Hierro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Dinamarca?',
        respuestas: {
            res1: 'Aarhus',
            res2: 'Odense',
            correcta: 'Copenhague',
            res3: 'Aalborg'
        }
    },
    {
        pregunta: '¿Qué antiguo pueblo construyó el Partenón?',
        respuestas: {
            res1: 'Romanos',
            res2: 'Persas',
            res3: 'Egipcios',
            correcta: 'Griegos'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Noruega?',
        respuestas: {
            correcta: 'Oslo',
            res1: 'Bergen',
            res2: 'Trondheim',
            res3: 'Stavanger'
        }
    },
    {
        pregunta: '¿Qué científico descubrió los rayos X?',
        respuestas: {
            res1: 'Marie Curie',
            correcta: 'Wilhelm Röntgen',
            res2: 'Einstein',
            res3: 'Rutherford'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el río Nilo?',
        respuestas: {
            res1: 'Sudán',
            res2: 'Etiopía',
            correcta: 'Egipto',
            res3: 'Libia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Finlandia?',
        respuestas: {
            res1: 'Turku',
            res2: 'Tampere',
            res3: 'Oulu',
            correcta: 'Helsinki'
        }
    },
    {
        pregunta: '¿Qué escritor creó al personaje de Ulises en La Odisea?',
        respuestas: {
            correcta: 'Homero',
            res1: 'Virgilio',
            res2: 'Sófocles',
            res3: 'Platón'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la ciudad de Marrakech?',
        respuestas: {
            res1: 'Argelia',
            correcta: 'Marruecos',
            res2: 'Túnez',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Islandia?',
        respuestas: {
            res1: 'Akureyri',
            res2: 'Keflavík',
            correcta: 'Reikiavik',
            res3: 'Selfoss'
        }
    },
    {
        pregunta: '¿Qué científico formuló la teoría de la selección natural junto con Darwin?',
        respuestas: {
            res1: 'Gregor Mendel',
            res2: 'Louis Pasteur',
            res3: 'Thomas Huxley',
            correcta: 'Alfred Russel Wallace'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por el carnaval de Río de Janeiro?',
        respuestas: {
            correcta: 'Brasil',
            res1: 'Argentina',
            res2: 'Colombia',
            res3: 'Venezuela'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Serbia?',
        respuestas: {
            res1: 'Novi Sad',
            correcta: 'Belgrado',
            res2: 'Niš',
            res3: 'Subotica'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El gran Gatsby?',
        respuestas: {
            res1: 'Ernest Hemingway',
            res2: 'John Steinbeck',
            correcta: 'F. Scott Fitzgerald',
            res3: 'Mark Twain'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovaquia?',
        respuestas: {
            res1: 'Košice',
            res2: 'Prešov',
            res3: 'Žilina',
            correcta: 'Bratislava'
        }
    },
    {
        pregunta: '¿Qué país es conocido como la tierra de los faraones?',
        respuestas: {
            correcta: 'Egipto',
            res1: 'Grecia',
            res2: 'Italia',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovenia?',
        respuestas: {
            res1: 'Maribor',
            correcta: 'Liubliana',
            res2: 'Koper',
            res3: 'Celje'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la radiactividad junto con sus investigaciones posteriores sobre el radio y el polonio?',
        respuestas: {
            res1: 'Einstein',
            res2: 'Rutherford',
            correcta: 'Marie Curie',
            res3: 'Bohr'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el lago Titicaca?',
        respuestas: {
            res1: 'Chile',
            res2: 'Argentina',
            res3: 'Ecuador',
            correcta: 'Perú y Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Lituania?',
        respuestas: {
            correcta: 'Vilna',
            res1: 'Kaunas',
            res2: 'Klaipeda',
            res3: 'Šiauliai'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El nombre de la rosa?',
        respuestas: {
            res1: 'Italo Calvino',
            correcta: 'Umberto Eco',
            res2: 'Dante Alighieri',
            res3: 'Alessandro Manzoni'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Estonia?',
        respuestas: {
            res1: 'Tartu',
            res2: 'Narva',
            correcta: 'Tallin',
            res3: 'Pärnu'
        }
    },
    {
        pregunta: '¿Qué país es famoso por la antigua ciudad de Angkor?',
        respuestas: {
            res1: 'Tailandia',
            res2: 'Vietnam',
            res3: 'Laos',
            correcta: 'Camboya'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Letonia?',
        respuestas: {
            correcta: 'Riga',
            res1: 'Daugavpils',
            res2: 'Liepāja',
            res3: 'Jelgava'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió El banquete?',
        respuestas: {
            res1: 'Aristóteles',
            correcta: 'Platón',
            res2: 'Sócrates',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ucrania?',
        respuestas: {
            res1: 'Járkov',
            res2: 'Odesa',
            correcta: 'Kiev',
            res3: 'Leópolis'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Teherán?',
        respuestas: {
            res1: 'Irak',
            res2: 'Afganistán',
            res3: 'Pakistán',
            correcta: 'Irán'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irán?',
        respuestas: {
            correcta: 'Teherán',
            res1: 'Isfahán',
            res2: 'Shiraz',
            res3: 'Tabriz'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El proceso?',
        respuestas: {
            res1: 'George Orwell',
            correcta: 'Franz Kafka',
            res2: 'Albert Camus',
            res3: 'Thomas Mann'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la antigua ciudad de Babilonia?',
        respuestas: {
            res1: 'Siria',
            res2: 'Irán',
            correcta: 'Irak',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irak?',
        respuestas: {
            res1: 'Basora',
            res2: 'Mosul',
            res3: 'Kirkuk',
            correcta: 'Bagdad'
        }
    },
    {
        pregunta: '¿Qué civilización desarrolló los jardines colgantes asociados tradicionalmente con Babilonia?',
        respuestas: {
            correcta: 'Babilónica',
            res1: 'Romana',
            res2: 'Griega',
            res3: 'Egipcia'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Aconcagua?',
        respuestas: {
            res1: 'Chile',
            correcta: 'Argentina',
            res2: 'Perú',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Qué escritor escribió La ciudad y los perros?',
        respuestas: {
            res1: 'Gabriel García Márquez',
            res2: 'Julio Cortázar',
            correcta: 'Mario Vargas Llosa',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            res1: 'Rosario',
            res2: 'Córdoba',
            res3: 'Mendoza',
            correcta: 'Buenos Aires'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lima?',
        respuestas: {
            correcta: 'Perú',
            res1: 'Ecuador',
            res2: 'Bolivia',
            res3: 'Chile'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del proceso mediante el cual una célula produce energía a partir de nutrientes?',
        respuestas: {
            res1: 'Fotosíntesis',
            correcta: 'Respiración celular',
            res2: 'Transpiración',
            res3: 'Osmosis'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuestas: {
            res1: 'Guayaquil',
            res2: 'Cuenca',
            correcta: 'Quito',
            res3: 'Loja'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Montevideo?',
        respuestas: {
            res1: 'Argentina',
            res2: 'Paraguay',
            res3: 'Chile',
            correcta: 'Uruguay'
        }
    },
    {
        pregunta: '¿Cuál es el río que atraviesa Colombia y desemboca en el mar Caribe?',
        respuestas: {
            correcta: 'Río Magdalena',
            res1: 'Río Cauca',
            res2: 'Río Orinoco',
            res3: 'Río Putumayo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            res1: 'Cartagena',
            correcta: 'Bogotá',
            res2: 'Barranquilla',
            res3: 'Medellín'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano escribió María?',
        respuestas: {
            res1: 'Gabriel García Márquez',
            res2: 'Tomás Carrasquilla',
            correcta: 'Jorge Isaacs',
            res3: 'José Eustasio Rivera'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por las islas Galápagos?',
        respuestas: {
            res1: 'Perú',
            res2: 'Colombia',
            res3: 'Chile',
            correcta: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuestas: {
            correcta: 'Quito',
            res1: 'Guayaquil',
            res2: 'Cuenca',
            res3: 'Manta'
        }
    },
    {
        pregunta: '¿Qué científico colombiano recibió reconocimiento internacional por sus investigaciones sobre mariposas y evolución?',
        respuestas: {
            res1: 'Manuel Elkin Patarroyo',
            correcta: 'Francisco José de Caldas',
            res2: 'Rodolfo Llinás',
            res3: 'Salomón Hakim'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Brasil?',
        respuestas: {
            res1: 'São Paulo',
            res2: 'Río de Janeiro',
            correcta: 'Brasilia',
            res3: 'Salvador'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Santiago?',
        respuestas: {
            res1: 'Perú',
            res2: 'Argentina',
            res3: 'Ecuador',
            correcta: 'Chile'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del hierro?',
        respuestas: {
            correcta: 'Fe',
            res1: 'Ir',
            res2: 'Hi',
            res3: 'H'
        }
    },
    {
        pregunta: '¿Qué escritor escribió El amor en los tiempos del cólera?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            correcta: 'Gabriel García Márquez',
            res2: 'Julio Cortázar',
            res3: 'Jorge Luis Borges'
        }
    },
    {
        pregunta: '¿Cuál es el país donde nació Simón Bolívar?',
        respuestas: {
            res1: 'Colombia',
            res2: 'Ecuador',
            correcta: 'Venezuela',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Venezuela?',
        respuestas: {
            res1: 'Maracaibo',
            res2: 'Valencia',
            res3: 'Barquisimeto',
            correcta: 'Caracas'
        }
    },
    {
        pregunta: '¿Qué personaje histórico dio nombre a Bolivia?',
        respuestas: {
            correcta: 'Simón Bolívar',
            res1: 'José de San Martín',
            res2: 'Antonio José de Sucre',
            res3: 'Francisco de Miranda'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bolivia?',
        respuestas: {
            res1: 'La Paz',
            correcta: 'Sucre',
            res2: 'Santa Cruz',
            res3: 'Cochabamba'
        }
    },
    {
        pregunta: '¿Cuál es el lago navegable más alto del mundo?',
        respuestas: {
            res1: 'Baikal',
            res2: 'Maracaibo',
            correcta: 'Titicaca',
            res3: 'Victoria'
        }
    },
    {
        pregunta: '¿Qué país comparte el lago Titicaca con Perú?',
        respuestas: {
            res1: 'Chile',
            res2: 'Ecuador',
            res3: 'Colombia',
            correcta: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el salar de Uyuni?',
        respuestas: {
            correcta: 'Bolivia',
            res1: 'Perú',
            res2: 'Chile',
            res3: 'Argentina'
        }
    },
    {
        pregunta: '¿Cuál es el desierto de mayor altitud de Sudamérica?',
        respuestas: {
            res1: 'Atacama',
            correcta: 'Desierto de la Puna',
            res2: 'Patagonia',
            res3: 'Sechura'
        }
    },
    {
        pregunta: '¿Cuál es el nombre de la cordillera que atraviesa gran parte de Sudamérica por su lado occidental?',
        respuestas: {
            res1: 'Alpes',
            res2: 'Montes Urales',
            correcta: 'Andes',
            res3: 'Himalaya'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuestas: {
            res1: 'Ciudad del Este',
            res2: 'Encarnación',
            res3: 'Pedro Juan Caballero',
            correcta: 'Asunción'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial predominante de Brasil?',
        respuestas: {
            correcta: 'Portugués',
            res1: 'Español',
            res2: 'Francés',
            res3: 'Inglés'
        }
    },
    {
        pregunta: '¿Qué país sudamericano no tiene salida al mar y comparte frontera con Brasil y Argentina?',
        respuestas: {
            res1: 'Perú',
            correcta: 'Paraguay',
            res2: 'Uruguay',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Colombia?',
        respuestas: {
            res1: 'Cauca',
            res2: 'Meta',
            correcta: 'Magdalena',
            res3: 'Atrato'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento de Bolívar?',
        respuestas: {
            res1: 'Barranquilla',
            res2: 'Sincelejo',
            res3: 'Santa Marta',
            correcta: 'Cartagena'
        }
    },
    {
        pregunta: '¿Qué mar bordea la costa norte de Colombia?',
        respuestas: {
            correcta: 'Mar Caribe',
            res1: 'Mar Mediterráneo',
            res2: 'Mar Negro',
            res3: 'Mar Rojo'
        }
    },
    {
        pregunta: '¿Cuál es el punto más alto de Colombia?',
        respuestas: {
            res1: 'Nevado del Ruiz',
            correcta: 'Pico Cristóbal Colón',
            res2: 'Nevado del Huila',
            res3: 'Pico Simón Bolívar'
        }
    },
    {
        pregunta: '¿Cuál es el parque arqueológico donde se encuentran grandes esculturas precolombinas en Colombia?',
        respuestas: {
            res1: 'Tierradentro',
            res2: 'Tayrona',
            correcta: 'San Agustín',
            res3: 'El Cocuy'
        }
    },
    {
        pregunta: '¿Qué cultura precolombina habitó principalmente la región donde actualmente se encuentra Bogotá?',
        respuestas: {
            res1: 'Tairona',
            res2: 'Quimbaya',
            res3: 'Zenú',
            correcta: 'Muisca'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana es conocida como la Ciudad Amurallada?',
        respuestas: {
            correcta: 'Cartagena de Indias',
            res1: 'Santa Marta',
            res2: 'Barranquilla',
            res3: 'Mompox'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Colombia?',
        respuestas: {
            res1: 'Bolívar',
            correcta: 'Peso colombiano',
            res2: 'Sol',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento de Sucre?',
        respuestas: {
            res1: 'Montería',
            res2: 'Cartagena',
            correcta: 'Sincelejo',
            res3: 'Valledupar'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano creó al coronel Aureliano Buendía?',
        respuestas: {
            res1: 'Jorge Isaacs',
            res2: 'Álvaro Mutis',
            res3: 'Tomás Carrasquilla',
            correcta: 'Gabriel García Márquez'
        }
    },
    {
        pregunta: '¿Cuál es el género musical tradicional asociado con Valledupar?',
        respuestas: {
            correcta: 'Vallenato',
            res1: 'Tango',
            res2: 'Bambuco',
            res3: 'Joropo'
        }
    },
    {
        pregunta: '¿Cuál es el instrumento principal tradicional del vallenato?',
        respuestas: {
            res1: 'Guitarra eléctrica',
            correcta: 'Acordeón',
            res2: 'Violín',
            res3: 'Piano'
        }
    },
    {
        pregunta: '¿Qué río es uno de los principales afluentes del río Magdalena?',
        respuestas: {
            res1: 'Amazonas',
            res2: 'Orinoco',
            correcta: 'Cauca',
            res3: 'Meta'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la ciudad de Cusco?',
        respuestas: {
            res1: 'Bolivia',
            res2: 'Ecuador',
            res3: 'Chile',
            correcta: 'Perú'
        }
    },
    {
        pregunta: '¿Qué civilización construyó la ciudad de Machu Picchu?',
        respuestas: {
            correcta: 'Inca',
            res1: 'Maya',
            res2: 'Azteca',
            res3: 'Muisca'
        }
    },
    {
        pregunta: '¿Cuál es la capital histórica del Imperio inca?',
        respuestas: {
            res1: 'Lima',
            correcta: 'Cusco',
            res2: 'Quito',
            res3: 'La Paz'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Quito?',
        respuestas: {
            res1: 'Perú',
            res2: 'Colombia',
            correcta: 'Ecuador',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del océano que limita con Ecuador por el oeste?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico',
            correcta: 'Pacífico'
        }
    },
    {
        pregunta: '¿Cuál es el archipiélago ecuatoriano famoso por sus especies únicas?',
        respuestas: {
            correcta: 'Islas Galápagos',
            res1: 'Islas Canarias',
            res2: 'Islas Malvinas',
            res3: 'Islas Galápagos'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el salar de Uyuni?',
        respuestas: {
            res1: 'Perú',
            correcta: 'Bolivia',
            res2: 'Chile',
            res3: 'Argentina'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bolivia?',
        respuestas: {
            res1: 'La Paz',
            res2: 'Santa Cruz',
            correcta: 'Sucre',
            res3: 'Cochabamba'
        }
    },
    {
        pregunta: '¿Qué líder independentista dio su nombre a Bolivia?',
        respuestas: {
            res1: 'José de San Martín',
            res2: 'Antonio José de Sucre',
            res3: 'Francisco de Miranda',
            correcta: 'Simón Bolívar'
        }
    },
    {
        pregunta: '¿Cuál es el nombre de la moneda de Perú?',
        respuestas: {
            correcta: 'Sol',
            res1: 'Peso',
            res2: 'Bolívar',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el lago Titicaca?',
        respuestas: {
            res1: 'Chile',
            correcta: 'Perú',
            res2: 'Ecuador',
            res3: 'Colombia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Perú?',
        respuestas: {
            res1: 'Cusco',
            res2: 'Arequipa',
            correcta: 'Lima',
            res3: 'Trujillo'
        }
    },
    {
        pregunta: '¿Qué escritor peruano recibió el Nobel de Literatura en 2010?',
        respuestas: {
            res1: 'César Vallejo',
            res2: 'Julio Ramón Ribeyro',
            res3: 'Alfredo Bryce Echenique',
            correcta: 'Mario Vargas Llosa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chile?',
        respuestas: {
            correcta: 'Santiago',
            res1: 'Valparaíso',
            res2: 'Concepción',
            res3: 'Antofagasta'
        }
    },
    {
        pregunta: '¿Qué desierto se encuentra principalmente en el norte de Chile?',
        respuestas: {
            res1: 'Sahara',
            correcta: 'Atacama',
            res2: 'Gobi',
            res3: 'Kalahari'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la Isla de Pascua?',
        respuestas: {
            res1: 'Perú',
            res2: 'Argentina',
            correcta: 'Chile',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            res1: 'Córdoba',
            res2: 'Rosario',
            res3: 'Mendoza',
            correcta: 'Buenos Aires'
        }
    },
    {
        pregunta: '¿Qué cordillera separa en gran parte Argentina de Chile?',
        respuestas: {
            correcta: 'Los Andes',
            res1: 'Los Alpes',
            res2: 'Los Urales',
            res3: 'El Himalaya'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por las cataratas del Iguazú junto con Brasil?',
        respuestas: {
            res1: 'Uruguay',
            correcta: 'Argentina',
            res2: 'Chile',
            res3: 'Paraguay'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuestas: {
            res1: 'Salto',
            res2: 'Colonia',
            correcta: 'Montevideo',
            res3: 'Punta del Este'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de Sudamérica?',
        respuestas: {
            res1: 'Argentina',
            res2: 'Perú',
            res3: 'Colombia',
            correcta: 'Brasil'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Brasil?',
        respuestas: {
            correcta: 'Brasilia',
            res1: 'São Paulo',
            res2: 'Río de Janeiro',
            res3: 'Salvador'
        }
    },
    {
        pregunta: '¿Qué idioma se habla oficialmente en Brasil?',
        respuestas: {
            res1: 'Español',
            correcta: 'Portugués',
            res2: 'Inglés',
            res3: 'Francés'
        }
    },
    {
        pregunta: '¿Cuál es el río que atraviesa gran parte de la Amazonía brasileña?',
        respuestas: {
            res1: 'Paraná',
            res2: 'Orinoco',
            correcta: 'Amazonas',
            res3: 'Magdalena'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuestas: {
            res1: 'Ciudad del Este',
            res2: 'Encarnación',
            res3: 'Luque',
            correcta: 'Asunción'
        }
    },
    {
        pregunta: '¿Cuál es el único país de Sudamérica cuyo idioma oficial principal es el neerlandés?',
        respuestas: {
            correcta: 'Surinam',
            res1: 'Guyana',
            res2: 'Brasil',
            res3: 'Paraguay'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Guyana?',
        respuestas: {
            res1: 'Linden',
            correcta: 'Georgetown',
            res2: 'New Amsterdam',
            res3: 'Bartica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Surinam?',
        respuestas: {
            res1: 'Nieuw Nickerie',
            res2: 'Lelydorp',
            correcta: 'Paramaribo',
            res3: 'Albina'
        }
    },
    {
        pregunta: '¿Qué país sudamericano tiene como capital a Georgetown?',
        respuestas: {
            res1: 'Surinam',
            res2: 'Venezuela',
            res3: 'Brasil',
            correcta: 'Guyana'
        }
    },
    {
        pregunta: '¿Cuál es el país más pequeño de Sudamérica por superficie?',
        respuestas: {
            correcta: 'Surinam',
            res1: 'Uruguay',
            res2: 'Guyana',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Surinam?',
        respuestas: {
            res1: 'Inglés',
            correcta: 'Neerlandés',
            res2: 'Francés',
            res3: 'Español'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del estrecho que separa Sudamérica de la Tierra del Fuego?',
        respuestas: {
            res1: 'Estrecho de Bering',
            res2: 'Estrecho de Gibraltar',
            correcta: 'Estrecho de Magallanes',
            res3: 'Estrecho de Ormuz'
        }
    },
    {
        pregunta: '¿Qué explorador dio su nombre al estrecho de Magallanes?',
        respuestas: {
            res1: 'Cristóbal Colón',
            res2: 'Vasco da Gama',
            res3: 'Hernán Cortés',
            correcta: 'Fernando de Magallanes'
        }
    },
    {
        pregunta: '¿Cuál es la capital de España?',
        respuestas: {
            correcta: 'Madrid',
            res1: 'Barcelona',
            res2: 'Sevilla',
            res3: 'Valencia'
        }
    },
    {
        pregunta: '¿Qué país europeo tiene forma aproximada de bota?',
        respuestas: {
            res1: 'Grecia',
            correcta: 'Italia',
            res2: 'Portugal',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Alemania?',
        respuestas: {
            res1: 'Múnich',
            res2: 'Hamburgo',
            correcta: 'Berlín',
            res3: 'Colonia'
        }
    },
    {
        pregunta: '¿Qué río atraviesa París?',
        respuestas: {
            res1: 'Rin',
            res2: 'Loira',
            res3: 'Ródano',
            correcta: 'Sena'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Francia?',
        respuestas: {
            correcta: 'París',
            res1: 'Lyon',
            res2: 'Marsella',
            res3: 'Burdeos'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Italia?',
        respuestas: {
            res1: 'Milán',
            correcta: 'Roma',
            res2: 'Venecia',
            res3: 'Nápoles'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Grecia?',
        respuestas: {
            res1: 'Esparta',
            res2: 'Corinto',
            correcta: 'Atenas',
            res3: 'Tebas'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Portugal?',
        respuestas: {
            res1: 'Oporto',
            res2: 'Coímbra',
            res3: 'Braga',
            correcta: 'Lisboa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Alemania?',
        respuestas: {
            correcta: 'Berlín',
            res1: 'Múnich',
            res2: 'Hamburgo',
            res3: 'Fráncfort'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Europa?',
        respuestas: {
            res1: 'Danubio',
            correcta: 'Volga',
            res2: 'Rin',
            res3: 'Sena'
        }
    },
    {
        pregunta: '¿Cuál es el país que tiene como capital a Viena?',
        respuestas: {
            res1: 'Suiza',
            res2: 'Alemania',
            correcta: 'Austria',
            res3: 'Hungría'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Zúrich',
            res2: 'Ginebra',
            res3: 'Basilea',
            correcta: 'Berna'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Olimpo?',
        respuestas: {
            correcta: 'Grecia',
            res1: 'Italia',
            res2: 'Turquía',
            res3: 'Albania'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Noruega?',
        respuestas: {
            res1: 'Bergen',
            correcta: 'Oslo',
            res2: 'Trondheim',
            res3: 'Stavanger'
        }
    },
    {
        pregunta: '¿Qué país escandinavo tiene como capital Estocolmo?',
        respuestas: {
            res1: 'Noruega',
            res2: 'Finlandia',
            correcta: 'Suecia',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Finlandia?',
        respuestas: {
            res1: 'Turku',
            res2: 'Tampere',
            res3: 'Oulu',
            correcta: 'Helsinki'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Dinamarca?',
        respuestas: {
            correcta: 'Copenhague',
            res1: 'Aarhus',
            res2: 'Odense',
            res3: 'Aalborg'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Reikiavik?',
        respuestas: {
            res1: 'Noruega',
            correcta: 'Islandia',
            res2: 'Finlandia',
            res3: 'Suecia'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo por superficie?',
        respuestas: {
            res1: 'Canadá',
            res2: 'China',
            correcta: 'Rusia',
            res3: 'Estados Unidos'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Rusia?',
        respuestas: {
            res1: 'San Petersburgo',
            res2: 'Kazán',
            res3: 'Novosibirsk',
            correcta: 'Moscú'
        }
    },
    {
        pregunta: '¿Qué país europeo tiene como capital a Budapest?',
        respuestas: {
            correcta: 'Hungría',
            res1: 'Rumania',
            res2: 'Serbia',
            res3: 'Bulgaria'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Rumania?',
        respuestas: {
            res1: 'Cluj-Napoca',
            correcta: 'Bucarest',
            res2: 'Sibiu',
            res3: 'Brasov'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bulgaria?',
        respuestas: {
            res1: 'Plovdiv',
            res2: 'Varna',
            correcta: 'Sofía',
            res3: 'Burgas'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Serbia?',
        respuestas: {
            res1: 'Novi Sad',
            res2: 'Niš',
            res3: 'Subotica',
            correcta: 'Belgrado'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Croacia?',
        respuestas: {
            correcta: 'Zagreb',
            res1: 'Split',
            res2: 'Dubrovnik',
            res3: 'Rijeka'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovaquia?',
        respuestas: {
            res1: 'Košice',
            correcta: 'Bratislava',
            res2: 'Prešov',
            res3: 'Žilina'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovenia?',
        respuestas: {
            res1: 'Maribor',
            res2: 'Koper',
            correcta: 'Liubliana',
            res3: 'Celje'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ucrania?',
        respuestas: {
            res1: 'Járkov',
            res2: 'Odesa',
            res3: 'Leópolis',
            correcta: 'Kiev'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Polonia?',
        respuestas: {
            correcta: 'Varsovia',
            res1: 'Cracovia',
            res2: 'Gdansk',
            res3: 'Wroclaw'
        }
    },
    {
        pregunta: '¿Cuál es la capital de República Checa?',
        respuestas: {
            res1: 'Brno',
            correcta: 'Praga',
            res2: 'Ostrava',
            res3: 'Pilsen'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Países Bajos?',
        respuestas: {
            res1: 'Róterdam',
            res2: 'La Haya',
            correcta: 'Ámsterdam',
            res3: 'Utrecht'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bélgica?',
        respuestas: {
            res1: 'Brujas',
            res2: 'Amberes',
            res3: 'Gante',
            correcta: 'Bruselas'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irlanda?',
        respuestas: {
            correcta: 'Dublín',
            res1: 'Cork',
            res2: 'Galway',
            res3: 'Limerick'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Reino Unido?',
        respuestas: {
            res1: 'Manchester',
            correcta: 'Londres',
            res2: 'Liverpool',
            res3: 'Birmingham'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Islandia?',
        respuestas: {
            res1: 'Akureyri',
            res2: 'Keflavík',
            correcta: 'Reikiavik',
            res3: 'Selfoss'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por los fiordos?',
        respuestas: {
            res1: 'Suecia',
            res2: 'Finlandia',
            res3: 'Dinamarca',
            correcta: 'Noruega'
        }
    },
    {
        pregunta: '¿Cuál es el mar que separa Europa de África?',
        respuestas: {
            correcta: 'Mar Mediterráneo',
            res1: 'Mar Negro',
            res2: 'Mar Rojo',
            res3: 'Mar Báltico'
        }
    },
    {
        pregunta: '¿Cuál es el estrecho que separa Europa de África?',
        respuestas: {
            res1: 'Bósforo',
            correcta: 'Gibraltar',
            res2: 'Ormuz',
            res3: 'Magallanes'
        }
    },
    {
        pregunta: '¿Cuál es el país africano donde se encuentra la Gran Pirámide de Guiza?',
        respuestas: {
            res1: 'Sudán',
            res2: 'Libia',
            correcta: 'Egipto',
            res3: 'Túnez'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuestas: {
            res1: 'Alejandría',
            res2: 'Luxor',
            res3: 'Giza',
            correcta: 'El Cairo'
        }
    },
    {
        pregunta: '¿Cuál es el país africano más grande por superficie?',
        respuestas: {
            correcta: 'Argelia',
            res1: 'Egipto',
            res2: 'Sudán',
            res3: 'Libia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Kenia?',
        respuestas: {
            res1: 'Mombasa',
            correcta: 'Nairobi',
            res2: 'Kisumu',
            res3: 'Nakuru'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Etiopía?',
        respuestas: {
            res1: 'Gondar',
            res2: 'Dire Dawa',
            correcta: 'Adís Abeba',
            res3: 'Mekele'
        }
    },
    {
        pregunta: '¿Cuál es el país africano conocido por el monte Kilimanjaro?',
        respuestas: {
            res1: 'Kenia',
            res2: 'Uganda',
            res3: 'Etiopía',
            correcta: 'Tanzania'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Marruecos?',
        respuestas: {
            correcta: 'Rabat',
            res1: 'Casablanca',
            res2: 'Fez',
            res3: 'Marrakech'
        }
    },
    {
        pregunta: '¿Cuál es el desierto cálido más grande del mundo?',
        respuestas: {
            res1: 'Gobi',
            correcta: 'Sahara',
            res2: 'Kalahari',
            res3: 'Atacama'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Sudáfrica administrativa?',
        respuestas: {
            res1: 'Ciudad del Cabo',
            res2: 'Johannesburgo',
            correcta: 'Pretoria',
            res3: 'Durban'
        }
    },
    {
        pregunta: '¿Qué país africano tiene como capital a Dakar?',
        respuestas: {
            res1: 'Mali',
            res2: 'Gambia',
            res3: 'Mauritania',
            correcta: 'Senegal'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nigeria?',
        respuestas: {
            correcta: 'Abuya',
            res1: 'Lagos',
            res2: 'Kano',
            res3: 'Ibadan'
        }
    },
    {
        pregunta: '¿Cuál es el país más poblado de África?',
        respuestas: {
            res1: 'Egipto',
            correcta: 'Nigeria',
            res2: 'Etiopía',
            res3: 'Sudáfrica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ghana?',
        respuestas: {
            res1: 'Kumasi',
            res2: 'Tamale',
            correcta: 'Acra',
            res3: 'Tema'
        }
    },
    {
        pregunta: '¿Qué país africano tiene como capital a Nairobi?',
        respuestas: {
            res1: 'Tanzania',
            res2: 'Uganda',
            res3: 'Etiopía',
            correcta: 'Kenia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Angola?',
        respuestas: {
            correcta: 'Luanda',
            res1: 'Huambo',
            res2: 'Lobito',
            res3: 'Benguela'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Mozambique?',
        respuestas: {
            res1: 'Beira',
            correcta: 'Maputo',
            res2: 'Nampula',
            res3: 'Tete'
        }
    },
    {
        pregunta: '¿Qué país africano tiene como capital a Lusaka?',
        respuestas: {
            res1: 'Zimbabue',
            res2: 'Malaui',
            correcta: 'Zambia',
            res3: 'Botsuana'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Zimbabue?',
        respuestas: {
            res1: 'Bulawayo',
            res2: 'Mutare',
            res3: 'Gweru',
            correcta: 'Harare'
        }
    },
    {
        pregunta: '¿Qué país africano tiene como capital a Windhoek?',
        respuestas: {
            correcta: 'Namibia',
            res1: 'Botsuana',
            res2: 'Sudáfrica',
            res3: 'Angola'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        respuestas: {
            res1: 'Sídney',
            correcta: 'Canberra',
            res2: 'Melbourne',
            res3: 'Perth'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de Oceanía por superficie?',
        respuestas: {
            res1: 'Nueva Zelanda',
            res2: 'Papúa Nueva Guinea',
            correcta: 'Australia',
            res3: 'Fiyi'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nueva Zelanda?',
        respuestas: {
            res1: 'Auckland',
            res2: 'Christchurch',
            res3: 'Hamilton',
            correcta: 'Wellington'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la Gran Barrera de Coral?',
        respuestas: {
            correcta: 'Australia',
            res1: 'Nueva Zelanda',
            res2: 'Fiyi',
            res3: 'Indonesia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Japón?',
        respuestas: {
            res1: 'Osaka',
            correcta: 'Tokio',
            res2: 'Kioto',
            res3: 'Hiroshima'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de Asia por superficie?',
        respuestas: {
            res1: 'China',
            res2: 'India',
            correcta: 'Rusia',
            res3: 'Kazajistán'
        }
    },
    {
        pregunta: '¿Cuál es la capital de China?',
        respuestas: {
            res1: 'Shanghái',
            res2: 'Hong Kong',
            res3: 'Cantón',
            correcta: 'Pekín'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Corea del Sur?',
        respuestas: {
            correcta: 'Seúl',
            res1: 'Busan',
            res2: 'Incheon',
            res3: 'Daegu'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Tailandia?',
        respuestas: {
            res1: 'Chiang Mai',
            correcta: 'Bangkok',
            res2: 'Phuket',
            res3: 'Pattaya'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Vietnam?',
        respuestas: {
            res1: 'Ho Chi Minh',
            res2: 'Da Nang',
            correcta: 'Hanói',
            res3: 'Hue'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Indonesia?',
        respuestas: {
            res1: 'Bandung',
            res2: 'Surabaya',
            res3: 'Medan',
            correcta: 'Yakarta'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Filipinas?',
        respuestas: {
            correcta: 'Manila',
            res1: 'Cebú',
            res2: 'Dávao',
            res3: 'Baguio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de India?',
        respuestas: {
            res1: 'Bombay',
            correcta: 'Nueva Delhi',
            res2: 'Calcuta',
            res3: 'Bangalore'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Asia?',
        respuestas: {
            res1: 'Ganges',
            res2: 'Mekong',
            correcta: 'Yangtsé',
            res3: 'Indo'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta del mundo?',
        respuestas: {
            res1: 'K2',
            res2: 'Aconcagua',
            res3: 'Kangchenjunga',
            correcta: 'Everest'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra el monte Everest?',
        respuestas: {
            correcta: 'Nepal',
            res1: 'India',
            res2: 'Bután',
            res3: 'Pakistán'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nepal?',
        respuestas: {
            res1: 'Pokhara',
            correcta: 'Katmandú',
            res2: 'Lalitpur',
            res3: 'Biratnagar'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Mongolia?',
        respuestas: {
            res1: 'Erdenet',
            res2: 'Darkhan',
            correcta: 'Ulán Bator',
            res3: 'Karakorum'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Islamabad?',
        respuestas: {
            res1: 'India',
            res2: 'Afganistán',
            res3: 'Bangladés',
            correcta: 'Pakistán'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irán?',
        respuestas: {
            correcta: 'Teherán',
            res1: 'Isfahán',
            res2: 'Shiraz',
            res3: 'Tabriz'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Irak?',
        respuestas: {
            res1: 'Basora',
            correcta: 'Bagdad',
            res2: 'Mosul',
            res3: 'Kirkuk'
        }
    },
    {
        pregunta: '¿Cuál es el mar que separa Europa y Asia en la región de Turquía?',
        respuestas: {
            res1: 'Mar Rojo',
            res2: 'Mar Mediterráneo',
            correcta: 'Mar Negro',
            res3: 'Mar Báltico'
        }
    },
    {
        pregunta: '¿Cuál es el estrecho que conecta el mar Negro con el mar de Mármara?',
        respuestas: {
            res1: 'Gibraltar',
            res2: 'Magallanes',
            res3: 'Ormuz',
            correcta: 'Bósforo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Turquía?',
        respuestas: {
            correcta: 'Ankara',
            res1: 'Estambul',
            res2: 'Esmirna',
            res3: 'Bursa'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la antigua ciudad de Éfeso?',
        respuestas: {
            res1: 'Grecia',
            correcta: 'Turquía',
            res2: 'Italia',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿Cuál es el país conocido por la antigua ciudad de Petra?',
        respuestas: {
            res1: 'Israel',
            res2: 'Siria',
            correcta: 'Jordania',
            res3: 'Líbano'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Jordania?',
        respuestas: {
            res1: 'Aqaba',
            res2: 'Zarqa',
            res3: 'Irbid',
            correcta: 'Amán'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra Jerusalén?',
        respuestas: {
            correcta: 'Israel',
            res1: 'Jordania',
            res2: 'Líbano',
            res3: 'Siria'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Israel?',
        respuestas: {
            res1: 'Tel Aviv',
            correcta: 'Jerusalén',
            res2: 'Haifa',
            res3: 'Eilat'
        }
    },
    {
        pregunta: '¿Qué río es considerado uno de los más importantes de Mesopotamia?',
        respuestas: {
            res1: 'Nilo',
            res2: 'Ganges',
            correcta: 'Tigris',
            res3: 'Amazonas'
        }
    },
    {
        pregunta: '¿Qué otro río forma parte de la región histórica de Mesopotamia?',
        respuestas: {
            res1: 'Yangtsé',
            res2: 'Danubio',
            res3: 'Nilo',
            correcta: 'Éufrates'
        }
    },
    {
        pregunta: '¿Qué civilización desarrolló una de las primeras formas conocidas de escritura?',
        respuestas: {
            correcta: 'Sumerios',
            res1: 'Romanos',
            res2: 'Griegos',
            res3: 'Vikingos'
        }
    },
    {
        pregunta: '¿Cómo se llamaba la escritura de los antiguos sumerios?',
        respuestas: {
            res1: 'Jeroglífica',
            correcta: 'Cuneiforme',
            res2: 'Latina',
            res3: 'Demótica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Siria?',
        respuestas: {
            res1: 'Alepo',
            res2: 'Homs',
            correcta: 'Damasco',
            res3: 'Latakia'
        }
    },
    {
        pregunta: '¿Cuál es el país donde se encuentra la ciudad histórica de Alejandría?',
        respuestas: {
            res1: 'Grecia',
            res2: 'Libia',
            res3: 'Túnez',
            correcta: 'Egipto'
        }
    },
    {
        pregunta: '¿Quién fue Cleopatra VII?',
        respuestas: {
            correcta: 'Reina de Egipto',
            res1: 'Emperatriz romana',
            res2: 'Reina de Persia',
            res3: 'Reina de Grecia'
        }
    },
    {
        pregunta: '¿Cuál era la lengua principal de la antigua Roma?',
        respuestas: {
            res1: 'Griego',
            correcta: 'Latín',
            res2: 'Hebreo',
            res3: 'Arameo'
        }
    },
    {
        pregunta: '¿Cuál era la capital del Imperio romano?',
        respuestas: {
            res1: 'Atenas',
            res2: 'Constantinopla',
            correcta: 'Roma',
            res3: 'Alejandría'
        }
    },
    {
        pregunta: '¿Cuál era el idioma principal de la antigua Grecia?',
        respuestas: {
            res1: 'Latín',
            res2: 'Arameo',
            res3: 'Egipcio',
            correcta: 'Griego'
        }
    },
    {
        pregunta: '¿Quién fue Alejandro Magno?',
        respuestas: {
            correcta: 'Rey de Macedonia y conquistador',
            res1: 'Emperador romano',
            res2: 'Faraón egipcio',
            res3: 'Filósofo griego'
        }
    },
    {
        pregunta: '¿Qué filósofo fue discípulo de Platón?',
        respuestas: {
            res1: 'Sócrates',
            correcta: 'Aristóteles',
            res2: 'Epicuro',
            res3: 'Zenón'
        }
    },
    {
        pregunta: '¿Qué filósofo fue maestro de Platón?',
        respuestas: {
            res1: 'Aristóteles',
            res2: 'Epicuro',
            correcta: 'Sócrates',
            res3: 'Zenón'
        }
    },
    {
        pregunta: '¿Qué filósofo fundó la Academia de Atenas?',
        respuestas: {
            res1: 'Aristóteles',
            res2: 'Sócrates',
            res3: 'Epicuro',
            correcta: 'Platón'
        }
    },
    {
        pregunta: '¿Qué filósofo fundó el Liceo en Atenas?',
        respuestas: {
            correcta: 'Aristóteles',
            res1: 'Platón',
            res2: 'Sócrates',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Cuál es la obra más famosa de Homero sobre la guerra de Troya?',
        respuestas: {
            res1: 'La Odisea',
            correcta: 'La Ilíada',
            res2: 'La Eneida',
            res3: 'La República'
        }
    },
    {
        pregunta: '¿Cuál es la obra de Homero centrada en el regreso de Odiseo a Ítaca?',
        respuestas: {
            res1: 'La Ilíada',
            res2: 'La Eneida',
            correcta: 'La Odisea',
            res3: 'La República'
        }
    },
    {
        pregunta: '¿Quién escribió La Eneida?',
        respuestas: {
            res1: 'Homero',
            res2: 'Dante',
            res3: 'Ovidio',
            correcta: 'Virgilio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Italia?',
        respuestas: {
            correcta: 'Roma',
            res1: 'Milán',
            res2: 'Venecia',
            res3: 'Florencia'
        }
    },
    {
        pregunta: '¿Qué artista renacentista pintó el techo de la Capilla Sixtina?',
        respuestas: {
            res1: 'Leonardo da Vinci',
            correcta: 'Miguel Ángel',
            res2: 'Rafael',
            res3: 'Donatello'
        }
    },
    {
        pregunta: '¿Quién pintó La última cena?',
        respuestas: {
            res1: 'Miguel Ángel',
            res2: 'Rafael',
            correcta: 'Leonardo da Vinci',
            res3: 'Caravaggio'
        }
    },
    {
        pregunta: '¿Qué artista pintó La escuela de Atenas?',
        respuestas: {
            res1: 'Leonardo da Vinci',
            res2: 'Miguel Ángel',
            res3: 'Caravaggio',
            correcta: 'Rafael'
        }
    },
    {
        pregunta: '¿Qué movimiento artístico se caracteriza por formas geométricas y múltiples perspectivas?',
        respuestas: {
            correcta: 'Cubismo',
            res1: 'Impresionismo',
            res2: 'Barroco',
            res3: 'Romanticismo'
        }
    },
    {
        pregunta: '¿Qué artista es uno de los principales representantes del cubismo?',
        respuestas: {
            res1: 'Claude Monet',
            correcta: 'Pablo Picasso',
            res2: 'Edvard Munch',
            res3: 'Salvador Dalí'
        }
    },
    {
        pregunta: '¿Qué movimiento artístico está asociado con Claude Monet?',
        respuestas: {
            res1: 'Cubismo',
            res2: 'Surrealismo',
            correcta: 'Impresionismo',
            res3: 'Expresionismo'
        }
    },
    {
        pregunta: '¿Quién pintó La persistencia de la memoria?',
        respuestas: {
            res1: 'Picasso',
            res2: 'Munch',
            res3: 'Monet',
            correcta: 'Salvador Dalí'
        }
    },
    {
        pregunta: '¿Qué artista pintó El grito?',
        respuestas: {
            correcta: 'Edvard Munch',
            res1: 'Van Gogh',
            res2: 'Picasso',
            res3: 'Dalí'
        }
    },
    {
        pregunta: '¿Quién pintó La noche estrellada?',
        respuestas: {
            res1: 'Claude Monet',
            correcta: 'Vincent van Gogh',
            res2: 'Pablo Picasso',
            res3: 'Edvard Munch'
        }
    },
    {
        pregunta: '¿Qué compositor escribió la Novena Sinfonía?',
        respuestas: {
            res1: 'Mozart',
            res2: 'Bach',
            correcta: 'Beethoven',
            res3: 'Haydn'
        }
    },
    {
        pregunta: '¿Qué compositor fue famoso por las óperas La flauta mágica y Don Giovanni?',
        respuestas: {
            res1: 'Beethoven',
            res2: 'Verdi',
            res3: 'Wagner',
            correcta: 'Mozart'
        }
    },
    {
        pregunta: '¿Quién compuso La traviata?',
        respuestas: {
            correcta: 'Giuseppe Verdi',
            res1: 'Puccini',
            res2: 'Wagner',
            res3: 'Bizet'
        }
    },
    {
        pregunta: '¿Quién compuso Carmen?',
        respuestas: {
            res1: 'Verdi',
            correcta: 'Georges Bizet',
            res2: 'Puccini',
            res3: 'Wagner'
        }
    },
    {
        pregunta: '¿Quién compuso El lago de los cisnes?',
        respuestas: {
            res1: 'Mozart',
            res2: 'Bach',
            correcta: 'Chaikovski',
            res3: 'Chopin'
        }
    },
    {
        pregunta: '¿Qué compositor escribió El Mesías?',
        respuestas: {
            res1: 'Bach',
            res2: 'Vivaldi',
            res3: 'Mozart',
            correcta: 'Georg Friedrich Händel'
        }
    },
    {
        pregunta: '¿Cuál es el instrumento de cuerda que normalmente tiene seis cuerdas?',
        respuestas: {
            correcta: 'Guitarra',
            res1: 'Violín',
            res2: 'Arpa',
            res3: 'Contrabajo'
        }
    },
    {
        pregunta: '¿Cuál es el instrumento musical con teclas blancas y negras?',
        respuestas: {
            res1: 'Acordeón',
            correcta: 'Piano',
            res2: 'Violín',
            res3: 'Flauta'
        }
    },
    {
        pregunta: '¿Cuál es el género musical tradicional de Argentina y Uruguay?',
        respuestas: {
            res1: 'Vallenato',
            res2: 'Samba',
            correcta: 'Tango',
            res3: 'Flamenco'
        }
    },
    {
        pregunta: '¿Cuál es el género musical tradicional de Colombia asociado con acordeón, caja y guacharaca?',
        respuestas: {
            res1: 'Tango',
            res2: 'Salsa',
            res3: 'Cumbia',
            correcta: 'Vallenato'
        }
    },
    {
        pregunta: '¿Cuál es el género musical originario de Cuba caracterizado por su influencia africana y española?',
        respuestas: {
            correcta: 'Son cubano',
            res1: 'Tango',
            res2: 'Flamenco',
            res3: 'Vallenato'
        }
    },
    {
        pregunta: '¿Qué género musical nació en Jamaica y se asocia con Bob Marley?',
        respuestas: {
            res1: 'Jazz',
            correcta: 'Reggae',
            res2: 'Blues',
            res3: 'Ska'
        }
    },
    {
        pregunta: '¿Qué cantante es conocido como el “Rey del Pop”?',
        respuestas: {
            res1: 'Elvis Presley',
            res2: 'Prince',
            correcta: 'Michael Jackson',
            res3: 'Frank Sinatra'
        }
    },
    {
        pregunta: '¿Qué cantante es conocido como el “Rey del Rock and Roll”?',
        respuestas: {
            res1: 'Chuck Berry',
            res2: 'Little Richard',
            res3: 'Buddy Holly',
            correcta: 'Elvis Presley'
        }
    },
    {
        pregunta: '¿Qué banda británica publicó el álbum Abbey Road?',
        respuestas: {
            correcta: 'The Beatles',
            res1: 'The Rolling Stones',
            res2: 'Queen',
            res3: 'Pink Floyd'
        }
    },
    {
        pregunta: '¿Qué banda británica publicó The Dark Side of the Moon?',
        respuestas: {
            res1: 'The Beatles',
            correcta: 'Pink Floyd',
            res2: 'Queen',
            res3: 'Led Zeppelin'
        }
    },
    {
        pregunta: '¿Qué banda grabó Bohemian Rhapsody?',
        respuestas: {
            res1: 'The Beatles',
            res2: 'Pink Floyd',
            correcta: 'Queen',
            res3: 'The Rolling Stones'
        }
    },
    {
        pregunta: '¿Qué deporte se juega en Wimbledon?',
        respuestas: {
            res1: 'Golf',
            res2: 'Críquet',
            res3: 'Rugby',
            correcta: 'Tenis'
        }
    },
    {
        pregunta: '¿En qué deporte se utiliza un bate y una pelota y se corren bases?',
        respuestas: {
            correcta: 'Béisbol',
            res1: 'Críquet',
            res2: 'Tenis',
            res3: 'Hockey'
        }
    },
    {
        pregunta: '¿Qué país ganó el primer Mundial de fútbol en 1930?',
        respuestas: {
            res1: 'Brasil',
            correcta: 'Uruguay',
            res2: 'Argentina',
            res3: 'Italia'
        }
    },
    {
        pregunta: '¿Cuántos jugadores tiene un equipo de fútbol en el campo al comenzar normalmente un partido?',
        respuestas: {
            res1: '9',
            res2: '10',
            correcta: '11',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué país ha ganado más Copas del Mundo de fútbol masculino?',
        respuestas: {
            res1: 'Alemania',
            res2: 'Argentina',
            res3: 'Italia',
            correcta: 'Brasil'
        }
    },
    {
        pregunta: '¿Qué deporte practica un atleta en el Tour de Francia?',
        respuestas: {
            correcta: 'Ciclismo',
            res1: 'Atletismo',
            res2: 'Motociclismo',
            res3: 'Patinaje'
        }
    },
    {
        pregunta: '¿Qué deporte utiliza un puck?',
        respuestas: {
            res1: 'Béisbol',
            correcta: 'Hockey sobre hielo',
            res2: 'Críquet',
            res3: 'Rugby'
        }
    },
    {
        pregunta: '¿Cuántos anillos tiene el símbolo olímpico?',
        respuestas: {
            res1: '4',
            res2: '6',
            correcta: '5',
            res3: '7'
        }
    },
    {
        pregunta: '¿Dónde se celebraron los Juegos Olímpicos antiguos?',
        respuestas: {
            res1: 'Roma',
            res2: 'Esparta',
            res3: 'Atenas',
            correcta: 'Olimpia'
        }
    },
    {
        pregunta: '¿Qué pieza de ajedrez se mueve en forma de L?',
        respuestas: {
            correcta: 'Caballo',
            res1: 'Alfil',
            res2: 'Torre',
            res3: 'Rey'
        }
    },
    {
        pregunta: '¿Qué pieza de ajedrez puede moverse en diagonal cualquier número de casillas?',
        respuestas: {
            res1: 'Torre',
            correcta: 'Alfil',
            res2: 'Caballo',
            res3: 'Rey'
        }
    },
    {
        pregunta: '¿Qué pieza de ajedrez es la más poderosa por su movilidad?',
        respuestas: {
            res1: 'Rey',
            res2: 'Torre',
            correcta: 'Dama',
            res3: 'Alfil'
        }
    },
    {
        pregunta: '¿Cuántas casillas tiene un tablero de ajedrez?',
        respuestas: {
            res1: '64',
            res2: '72',
            res3: '81',
            correcta: '64'
        }
    },
    {
        pregunta: '¿Cuál es el deporte conocido como el deporte blanco?',
        respuestas: {
            correcta: 'Tenis',
            res1: 'Golf',
            res2: 'Esquí',
            res3: 'Críquet'
        }
    },
    {
        pregunta: '¿Qué país es considerado la cuna del judo?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Corea',
            res3: 'Tailandia'
        }
    },
    {
        pregunta: '¿Qué arte marcial se originó en Corea y es conocido por sus patadas?',
        respuestas: {
            res1: 'Karate',
            res2: 'Judo',
            correcta: 'Taekwondo',
            res3: 'Jiu-jitsu'
        }
    },
    {
        pregunta: '¿Qué deporte combina natación, ciclismo y carrera?',
        respuestas: {
            res1: 'Pentatlón',
            res2: 'Duathlón',
            res3: 'Decatlón',
            correcta: 'Triatlón'
        }
    },
    {
        pregunta: '¿Cuál es la distancia oficial de un maratón?',
        respuestas: {
            correcta: '42,195 km',
            res1: '40 km',
            res2: '41,5 km',
            res3: '45 km'
        }
    },
    {
        pregunta: '¿Qué país es famoso por el deporte sumo?',
        respuestas: {
            res1: 'China',
            correcta: 'Japón',
            res2: 'Corea del Sur',
            res3: 'Mongolia'
        }
    },
    {
        pregunta: '¿Qué planeta tarda aproximadamente 365 días en completar una órbita alrededor del Sol?',
        respuestas: {
            res1: 'Marte',
            res2: 'Venus',
            correcta: 'Tierra',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es el planeta conocido como planeta rojo?',
        respuestas: {
            res1: 'Venus',
            res2: 'Júpiter',
            res3: 'Mercurio',
            correcta: 'Marte'
        }
    },
    {
        pregunta: '¿Cuál es la estrella más cercana a la Tierra después del Sol?',
        respuestas: {
            correcta: 'Próxima Centauri',
            res1: 'Sirio',
            res2: 'Betelgeuse',
            res3: 'Vega'
        }
    },
    {
        pregunta: '¿Cuál es la estrella del centro de nuestro sistema planetario?',
        respuestas: {
            res1: 'Sirio',
            correcta: 'Sol',
            res2: 'Vega',
            res3: 'Polaris'
        }
    },
    {
        pregunta: '¿Qué planeta tiene la mayor cantidad de lunas conocidas actualmente?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Neptuno',
            correcta: 'Saturno',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿Qué planeta es famoso por su Gran Mancha Roja?',
        respuestas: {
            res1: 'Marte',
            correcta: 'Júpiter',
            res2: 'Saturno',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Cuál es la galaxia más cercana a la Vía Láctea de tamaño comparable?',
        respuestas: {
            res1: 'Galaxia del Sombrero',
            res2: 'Galaxia del Triángulo',
            res3: 'Gran Nube de Magallanes',
            correcta: 'Andrómeda'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando la Luna se interpone entre la Tierra y el Sol?',
        respuestas: {
            correcta: 'Eclipse solar',
            res1: 'Eclipse lunar',
            res2: 'Solsticio',
            res3: 'Equinoccio'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando la Tierra se interpone entre el Sol y la Luna?',
        respuestas: {
            res1: 'Eclipse solar',
            correcta: 'Eclipse lunar',
            res2: 'Solsticio',
            res3: 'Equinoccio'
        }
    },
    {
        pregunta: '¿Cuál es el satélite natural más grande del sistema solar?',
        respuestas: {
            res1: 'Titán',
            res2: 'Calisto',
            correcta: 'Ganímedes',
            res3: 'Europa'
        }
    },
    {
        pregunta: '¿Qué planeta tiene una atmósfera muy densa rica en dióxido de carbono y nubes de ácido sulfúrico?',
        respuestas: {
            res1: 'Marte',
            res2: 'Mercurio',
            res3: 'Júpiter',
            correcta: 'Venus'
        }
    },
    {
        pregunta: '¿Cuál es la unidad fundamental de temperatura en el Sistema Internacional?',
        respuestas: {
            correcta: 'Kelvin',
            res1: 'Celsius',
            res2: 'Fahrenheit',
            res3: 'Rankine'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de fuerza del Sistema Internacional?',
        respuestas: {
            res1: 'Julio',
            correcta: 'Newton',
            res2: 'Pascal',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de presión del Sistema Internacional?',
        respuestas: {
            res1: 'Newton',
            res2: 'Julio',
            correcta: 'Pascal',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de potencia del Sistema Internacional?',
        respuestas: {
            res1: 'Voltio',
            res2: 'Julio',
            res3: 'Newton',
            correcta: 'Vatio'
        }
    },
    {
        pregunta: '¿Qué partícula no posee carga eléctrica?',
        respuestas: {
            correcta: 'Neutrón',
            res1: 'Protón',
            res2: 'Electrón',
            res3: 'Positrón'
        }
    },
    {
        pregunta: '¿Qué partícula tiene carga positiva?',
        respuestas: {
            res1: 'Electrón',
            correcta: 'Protón',
            res2: 'Neutrón',
            res3: 'Fotón'
        }
    },
    {
        pregunta: '¿Qué partícula tiene carga negativa?',
        respuestas: {
            res1: 'Protón',
            res2: 'Neutrón',
            correcta: 'Electrón',
            res3: 'Fotón'
        }
    },
    {
        pregunta: '¿Cuál es el número atómico del carbono?',
        respuestas: {
            res1: '8',
            res2: '7',
            res3: '12',
            correcta: '6'
        }
    },
    {
        pregunta: '¿Cuál es el número atómico del oxígeno?',
        respuestas: {
            correcta: '8',
            res1: '6',
            res2: '7',
            res3: '16'
        }
    },
    {
        pregunta: '¿Cuál es el número atómico del oro?',
        respuestas: {
            res1: '47',
            correcta: '79',
            res2: '78',
            res3: '80'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del potasio?',
        respuestas: {
            res1: 'P',
            res2: 'Po',
            correcta: 'K',
            res3: 'Pt'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del sodio?',
        respuestas: {
            correcta: 'Na',
            res1: 'S',
            res2: 'So',
            res3: 'Sd'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del mercurio?',
        respuestas: {
            res1: 'Me',
            correcta: 'Hg',
            res2: 'Mc',
            res3: 'Mr'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico de la plata?',
        respuestas: {
            res1: 'Pl',
            res2: 'Pt',
            correcta: 'Ag',
            res3: 'Au'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del plomo?',
        respuestas: {
            res1: 'P',
            res2: 'Po',
            res3: 'Pt',
            correcta: 'Pb'
        }
    },
    {
        pregunta: '¿Qué órgano del cuerpo humano produce bilis?',
        respuestas: {
            correcta: 'Hígado',
            res1: 'Páncreas',
            res2: 'Riñón',
            res3: 'Estómago'
        }
    },
    {
        pregunta: '¿Qué órgano almacena la bilis?',
        respuestas: {
            res1: 'Hígado',
            correcta: 'Vesícula biliar',
            res2: 'Páncreas',
            res3: 'Estómago'
        }
    },
    {
        pregunta: '¿Qué órgano produce la hormona insulina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Riñón',
            correcta: 'Páncreas',
            res3: 'Bazo'
        }
    },
    {
        pregunta: '¿Cuál es el hueso más largo del cuerpo humano?',
        respuestas: {
            res1: 'Tibia',
            res2: 'Húmero',
            res3: 'Radio',
            correcta: 'Fémur'
        }
    },
    {
        pregunta: '¿Cuál es el hueso que protege principalmente el cerebro?',
        respuestas: {
            correcta: 'Cráneo',
            res1: 'Esternón',
            res2: 'Pelvis',
            res3: 'Fémur'
        }
    },
    {
        pregunta: '¿Cuál es el músculo principal de la respiración?',
        respuestas: {
            res1: 'Bíceps',
            correcta: 'Diafragma',
            res2: 'Tríceps',
            res3: 'Pectoral'
        }
    },
    {
        pregunta: '¿Cuál es el órgano encargado principalmente de filtrar la sangre y producir orina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Pulmón',
            correcta: 'Riñón',
            res3: 'Corazón'
        }
    },
    {
        pregunta: '¿Qué sistema transporta sangre por todo el cuerpo?',
        respuestas: {
            res1: 'Sistema nervioso',
            res2: 'Sistema digestivo',
            res3: 'Sistema respiratorio',
            correcta: 'Sistema circulatorio'
        }
    },
    {
        pregunta: '¿Qué sistema coordina las respuestas y funciones del organismo mediante impulsos eléctricos?',
        respuestas: {
            correcta: 'Sistema nervioso',
            res1: 'Sistema digestivo',
            res2: 'Sistema endocrino',
            res3: 'Sistema muscular'
        }
    },
    {
        pregunta: '¿Cuál es la unidad funcional del sistema nervioso?',
        respuestas: {
            res1: 'Glóbulo rojo',
            correcta: 'Neurona',
            res2: 'Plaqueta',
            res3: 'Osteocito'
        }
    },
    {
        pregunta: '¿Qué células transportan principalmente oxígeno en la sangre?',
        respuestas: {
            res1: 'Plaquetas',
            res2: 'Leucocitos',
            correcta: 'Glóbulos rojos',
            res3: 'Linfocitos'
        }
    },
    {
        pregunta: '¿Qué células participan principalmente en la defensa del organismo?',
        respuestas: {
            res1: 'Glóbulos rojos',
            res2: 'Plaquetas',
            res3: 'Hepatocitos',
            correcta: 'Glóbulos blancos'
        }
    },
    {
        pregunta: '¿Qué componente de la sangre participa directamente en la coagulación?',
        respuestas: {
            correcta: 'Plaquetas',
            res1: 'Glóbulos rojos',
            res2: 'Glóbulos blancos',
            res3: 'Plasma'
        }
    },
    {
        pregunta: '¿Cuál es el órgano principal del sistema respiratorio?',
        respuestas: {
            res1: 'Corazón',
            correcta: 'Pulmón',
            res2: 'Riñón',
            res3: 'Hígado'
        }
    },
    {
        pregunta: '¿Dónde ocurre principalmente la absorción de nutrientes?',
        respuestas: {
            res1: 'Estómago',
            res2: 'Intestino grueso',
            correcta: 'Intestino delgado',
            res3: 'Esófago'
        }
    },
    {
        pregunta: '¿Dónde comienza la digestión de los carbohidratos?',
        respuestas: {
            res1: 'Estómago',
            res2: 'Intestino delgado',
            res3: 'Hígado',
            correcta: 'Boca'
        }
    },
    {
        pregunta: '¿Qué enzima de la saliva comienza a digerir el almidón?',
        respuestas: {
            correcta: 'Amilasa',
            res1: 'Pepsina',
            res2: 'Lipasa',
            res3: 'Tripsina'
        }
    },
    {
        pregunta: '¿Cuál es el órgano más grande del sistema digestivo?',
        respuestas: {
            res1: 'Estómago',
            correcta: 'Hígado',
            res2: 'Páncreas',
            res3: 'Intestino'
        }
    },
    {
        pregunta: '¿Cuál es la vitamina asociada con la visión y la salud ocular?',
        respuestas: {
            res1: 'Vitamina C',
            res2: 'Vitamina D',
            correcta: 'Vitamina A',
            res3: 'Vitamina K'
        }
    },
    {
        pregunta: '¿Qué vitamina es conocida por su relación con la absorción de calcio?',
        respuestas: {
            res1: 'Vitamina A',
            correcta: 'Vitamina D',
            res2: 'Vitamina C',
            res3: 'Vitamina B1'
        }
    },
    {
        pregunta: '¿Qué mineral es esencial para la formación de hemoglobina?',
        respuestas: {
            res1: 'Calcio',
            res2: 'Potasio',
            res3: 'Magnesio',
            correcta: 'Hierro'
        }
    },
    {
        pregunta: '¿Cuál es el pH aproximado de una sustancia neutra a 25 °C?',
        respuestas: {
            correcta: '7',
            res1: '0',
            res2: '5',
            res3: '14'
        }
    },
    {
        pregunta: '¿Qué escala se utiliza comúnmente para medir la acidez o alcalinidad?',
        respuestas: {
            res1: 'Escala Richter',
            correcta: 'Escala de pH',
            res2: 'Escala Celsius',
            res3: 'Escala Beaufort'
        }
    },
    {
        pregunta: '¿Qué fenómeno explica la separación de la luz blanca en diferentes colores mediante un prisma?',
        respuestas: {
            res1: 'Reflexión',
            res2: 'Difusión',
            correcta: 'Dispersión',
            res3: 'Conducción'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando la luz rebota sobre una superficie?',
        respuestas: {
            res1: 'Refracción',
            res2: 'Difracción',
            res3: 'Dispersión',
            correcta: 'Reflexión'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando la luz cambia de dirección al pasar de un medio a otro?',
        respuestas: {
            correcta: 'Refracción',
            res1: 'Reflexión',
            res2: 'Conducción',
            res3: 'Difusión'
        }
    },
    {
        pregunta: '¿Cuál es la velocidad aproximada del sonido en el aire a temperatura ambiente?',
        respuestas: {
            res1: '150 m/s',
            correcta: '343 m/s',
            res2: '500 m/s',
            res3: '1000 m/s'
        }
    },
    {
        pregunta: '¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?',
        respuestas: {
            res1: 'Fuerza eléctrica',
            res2: 'Fuerza nuclear',
            correcta: 'Gravedad',
            res3: 'Fricción'
        }
    },
    {
        pregunta: '¿Qué ley afirma que a toda acción corresponde una reacción igual y opuesta?',
        respuestas: {
            res1: 'Primera ley de Newton',
            res2: 'Ley de Coulomb',
            res3: 'Ley de Hooke',
            correcta: 'Tercera ley de Newton'
        }
    },
    {
        pregunta: '¿Qué ley relaciona fuerza, masa y aceleración?',
        respuestas: {
            correcta: 'Segunda ley de Newton',
            res1: 'Primera ley de Newton',
            res2: 'Tercera ley de Newton',
            res3: 'Ley de Boyle'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula de la segunda ley de Newton?',
        respuestas: {
            res1: 'E = mc²',
            correcta: 'F = ma',
            res2: 'P = VI',
            res3: 'V = IR'
        }
    },
    {
        pregunta: '¿Qué ley relaciona presión y volumen de un gas a temperatura constante?',
        respuestas: {
            res1: 'Ley de Newton',
            res2: 'Ley de Ohm',
            correcta: 'Ley de Boyle',
            res3: 'Ley de Faraday'
        }
    },
    {
        pregunta: '¿Qué ley relaciona voltaje, corriente y resistencia?',
        respuestas: {
            res1: 'Ley de Newton',
            res2: 'Ley de Boyle',
            res3: 'Ley de Faraday',
            correcta: 'Ley de Ohm'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de resistencia eléctrica?',
        respuestas: {
            correcta: 'Ohmio',
            res1: 'Voltio',
            res2: 'Amperio',
            res3: 'Vatio'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de corriente eléctrica?',
        respuestas: {
            res1: 'Voltio',
            correcta: 'Amperio',
            res2: 'Ohmio',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de diferencia de potencial eléctrico?',
        respuestas: {
            res1: 'Amperio',
            res2: 'Ohmio',
            correcta: 'Voltio',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de energía eléctrica consumida?',
        respuestas: {
            res1: 'Voltio',
            res2: 'Amperio',
            res3: 'Ohmio',
            correcta: 'Julio'
        }
    },
    {
        pregunta: '¿Qué planeta tiene el período de rotación más largo de los ocho planetas del sistema solar?',
        respuestas: {
            correcta: 'Venus',
            res1: 'Mercurio',
            res2: 'Marte',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Qué planeta tiene un día sideral de aproximadamente 10 horas?',
        respuestas: {
            res1: 'Marte',
            correcta: 'Júpiter',
            res2: 'Venus',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es el planeta conocido por tener vientos extremadamente rápidos?',
        respuestas: {
            res1: 'Marte',
            res2: 'Saturno',
            res3: 'Júpiter',
            correcta: 'Neptuno'
        }
    },
    {
        pregunta: '¿Qué planeta tiene una inclinación axial extrema y parece girar de lado?',
        respuestas: {
            res1: 'Venus',
            correcta: 'Urano',
            res2: 'Saturno',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más cercano a la Tierra en promedio durante largos períodos?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Venus',
            res2: 'Marte',
            res3: 'Júpiter'
        }
    },
    {
        pregunta: '¿Qué cuerpo celeste fue reclasificado como planeta enano en 2006?',
        respuestas: {
            res1: 'Ceres',
            correcta: 'Plutón',
            res2: 'Eris',
            res3: 'Haumea'
        }
    },
    {
        pregunta: '¿Cuál es el cinturón de asteroides principal del sistema solar?',
        respuestas: {
            res1: 'Entre la Tierra y Marte',
            res2: 'Entre Venus y la Tierra',
            correcta: 'Entre Marte y Júpiter',
            res3: 'Entre Júpiter y Saturno'
        }
    },
    {
        pregunta: '¿Cuál es la estrella más brillante del cielo nocturno vista desde la Tierra?',
        respuestas: {
            res1: 'Vega',
            res2: 'Polaris',
            res3: 'Betelgeuse',
            correcta: 'Sirio'
        }
    },
    {
        pregunta: '¿Qué estrella es conocida como la Estrella Polar?',
        respuestas: {
            correcta: 'Polaris',
            res1: 'Sirio',
            res2: 'Vega',
            res3: 'Betelgeuse'
        }
    },
    {
        pregunta: '¿Qué constelación contiene a la Estrella Polar?',
        respuestas: {
            res1: 'Orión',
            correcta: 'Osa Menor',
            res2: 'Casiopea',
            res3: 'Escorpio'
        }
    },
    {
        pregunta: '¿Qué constelación es reconocible por sus tres estrellas alineadas en el cinturón?',
        respuestas: {
            res1: 'Osa Mayor',
            res2: 'Casiopea',
            correcta: 'Orión',
            res3: 'Escorpio'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del agujero negro supermasivo en el centro de la Vía Láctea?',
        respuestas: {
            res1: 'Cygnus X-1',
            res2: 'M87*',
            res3: 'Sagittarius B',
            correcta: 'Sagittarius A*'
        }
    },
    {
        pregunta: '¿Qué fenómeno describe la explosión de una estrella masiva al final de su vida?',
        respuestas: {
            correcta: 'Supernova',
            res1: 'Nebulosa',
            res2: 'Eclipse',
            res3: 'Quásar'
        }
    },
    {
        pregunta: '¿Qué objeto se forma cuando el núcleo de una estrella masiva colapsa y puede tener una gravedad extrema?',
        respuestas: {
            res1: 'Cometa',
            correcta: 'Agujero negro',
            res2: 'Planeta',
            res3: 'Asteroide'
        }
    },
    {
        pregunta: '¿Cuál es el nombre de nuestra galaxia?',
        respuestas: {
            res1: 'Andrómeda',
            res2: 'Triángulo',
            correcta: 'Vía Láctea',
            res3: 'Sombrero'
        }
    },
    {
        pregunta: '¿Qué rama de la ciencia estudia los fósiles?',
        respuestas: {
            res1: 'Botánica',
            res2: 'Zoología',
            res3: 'Geología',
            correcta: 'Paleontología'
        }
    },
    {
        pregunta: '¿Qué era geológica estuvo dominada por los dinosaurios?',
        respuestas: {
            correcta: 'Mesozoica',
            res1: 'Cenozoica',
            res2: 'Paleozoica',
            res3: 'Precámbrica'
        }
    },
    {
        pregunta: '¿Cuál fue la causa principal de la extinción de los dinosaurios no avianos según la hipótesis más aceptada?',
        respuestas: {
            res1: 'Una glaciación prolongada',
            correcta: 'Impacto de un asteroide',
            res2: 'Falta de oxígeno',
            res3: 'Erupciones volcánicas exclusivamente'
        }
    },
    {
        pregunta: '¿Cuál es el fósil de homínido famoso descubierto en Etiopía y conocido como Lucy?',
        respuestas: {
            res1: 'Homo erectus',
            res2: 'Homo habilis',
            correcta: 'Australopithecus afarensis',
            res3: 'Homo neanderthalensis'
        }
    },
    {
        pregunta: '¿Cuál es la especie humana actual?',
        respuestas: {
            res1: 'Homo erectus',
            res2: 'Homo habilis',
            res3: 'Homo neanderthalensis',
            correcta: 'Homo sapiens'
        }
    },
    {
        pregunta: '¿Qué científico propuso la teoría de la evolución por selección natural?',
        respuestas: {
            correcta: 'Charles Darwin',
            res1: 'Gregor Mendel',
            res2: 'Louis Pasteur',
            res3: 'Robert Hooke'
        }
    },
    {
        pregunta: '¿Qué estructura contiene el material genético en las células eucariotas?',
        respuestas: {
            res1: 'Ribosoma',
            correcta: 'Núcleo',
            res2: 'Mitocondria',
            res3: 'Lisosoma'
        }
    },
    {
        pregunta: '¿Qué molécula almacena la información genética?',
        respuestas: {
            res1: 'ARN',
            res2: 'ATP',
            correcta: 'ADN',
            res3: 'Glucosa'
        }
    },
    {
        pregunta: '¿Qué molécula es conocida como la principal moneda energética de la célula?',
        respuestas: {
            res1: 'ADN',
            res2: 'Glucosa',
            res3: 'ARN',
            correcta: 'ATP'
        }
    },
    {
        pregunta: '¿Qué orgánulo celular es conocido como la central energética de la célula?',
        respuestas: {
            correcta: 'Mitocondria',
            res1: 'Ribosoma',
            res2: 'Lisosoma',
            res3: 'Núcleo'
        }
    },
    {
        pregunta: '¿Qué orgánulo produce proteínas?',
        respuestas: {
            res1: 'Mitocondria',
            correcta: 'Ribosoma',
            res2: 'Lisosoma',
            res3: 'Núcleo'
        }
    },
    {
        pregunta: '¿Qué proceso permite a las plantas convertir energía luminosa en energía química?',
        respuestas: {
            res1: 'Respiración',
            res2: 'Fermentación',
            correcta: 'Fotosíntesis',
            res3: 'Digestión'
        }
    },
    {
        pregunta: '¿Qué pigmento permite a las plantas captar principalmente la luz para la fotosíntesis?',
        respuestas: {
            res1: 'Hemoglobina',
            res2: 'Melanina',
            res3: 'Caroteno',
            correcta: 'Clorofila'
        }
    },
    {
        pregunta: '¿Qué gas liberan principalmente las plantas durante la fotosíntesis?',
        respuestas: {
            correcta: 'Oxígeno',
            res1: 'Nitrógeno',
            res2: 'Dióxido de carbono',
            res3: 'Metano'
        }
    },
    {
        pregunta: '¿Qué gas absorben las plantas durante la fotosíntesis?',
        respuestas: {
            res1: 'Oxígeno',
            correcta: 'Dióxido de carbono',
            res2: 'Nitrógeno',
            res3: 'Helio'
        }
    },
    {
        pregunta: '¿Qué fenómeno natural mide la escala de Richter?',
        respuestas: {
            res1: 'Viento',
            res2: 'Temperatura',
            correcta: 'Magnitud de terremotos',
            res3: 'Presión atmosférica'
        }
    },
    {
        pregunta: '¿Qué escala se utiliza actualmente para medir la magnitud de los terremotos de manera más precisa que Richter?',
        respuestas: {
            res1: 'Escala Celsius',
            correcta: 'Escala de magnitud de momento',
            res2: 'Escala Beaufort',
            res3: 'Escala Fujita'
        }
    },
    {
        pregunta: '¿Qué escala mide la intensidad del viento mediante categorías?',
        respuestas: {
            correcta: 'Escala de Beaufort',
            res1: 'Escala Richter',
            res2: 'Escala Celsius',
            res3: 'Escala Kelvin'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la presión atmosférica?',
        respuestas: {
            res1: 'Termómetro',
            res2: 'Anemómetro',
            res3: 'Higrómetro',
            correcta: 'Barómetro'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la humedad del aire?',
        respuestas: {
            res1: 'Barómetro',
            correcta: 'Higrómetro',
            res2: 'Anemómetro',
            res3: 'Termómetro'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la velocidad del viento?',
        respuestas: {
            res1: 'Barómetro',
            res2: 'Termómetro',
            correcta: 'Anemómetro',
            res3: 'Higrómetro'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando el agua líquida pasa a estado sólido?',
        respuestas: {
            res1: 'Evaporación',
            res2: 'Condensación',
            res3: 'Sublimación',
            correcta: 'Solidificación'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando un sólido pasa directamente a gas?',
        respuestas: {
            correcta: 'Sublimación',
            res1: 'Fusión',
            res2: 'Condensación',
            res3: 'Evaporación'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando un gas pasa directamente a sólido?',
        respuestas: {
            res1: 'Evaporación',
            correcta: 'Deposición',
            res2: 'Fusión',
            res3: 'Sublimación'
        }
    },
    {
        pregunta: '¿Qué proceso ocurre cuando un líquido pasa a gas?',
        respuestas: {
            res1: 'Fusión',
            res2: 'Solidificación',
            correcta: 'Vaporización',
            res3: 'Deposición'
        }
    },
    {
        pregunta: '¿Qué proceso ocurre cuando un gas pasa a líquido?',
        respuestas: {
            res1: 'Sublimación',
            res2: 'Fusión',
            res3: 'Solidificación',
            correcta: 'Condensación'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química del agua?',
        respuestas: {
            correcta: 'H₂O',
            res1: 'CO₂',
            res2: 'O₂',
            res3: 'H₂'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química del dióxido de carbono?',
        respuestas: {
            res1: 'CO',
            correcta: 'CO₂',
            res2: 'C₂O',
            res3: 'O₃'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química del oxígeno molecular?',
        respuestas: {
            res1: 'O',
            res2: 'O₃',
            correcta: 'O₂',
            res3: 'CO₂'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química del ozono?',
        respuestas: {
            correcta: 'O₃',
            res1: 'O₂',
            res2: 'CO₂',
            res3: 'H₂O'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química de la sal de mesa?',
        respuestas: {
            res1: 'KCl',
            correcta: 'NaCl',
            res2: 'CaCO₃',
            res3: 'HCl'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo C?',
        respuestas: {
            res1: 'Calcio',
            res2: 'Cloro',
            correcta: 'Carbono',
            res3: 'Cobre'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo O?',
        respuestas: {
            res1: 'Oro',
            correcta: 'Oxígeno',
            res2: 'Osmio',
            res3: 'Oxalato'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo H?',
        respuestas: {
            res1: 'Helio',
            res2: 'Hafnio',
            res3: 'Holmio',
            correcta: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo N?',
        respuestas: {
            correcta: 'Nitrógeno',
            res1: 'Níquel',
            res2: 'Neón',
            res3: 'Nobelio'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cl?',
        respuestas: {
            res1: 'Calcio',
            correcta: 'Cloro',
            res2: 'Cobalto',
            res3: 'Carbono'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo K?',
        respuestas: {
            res1: 'Calcio',
            res2: 'Kriptón',
            correcta: 'Potasio',
            res3: 'Carbono'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ca?',
        respuestas: {
            res1: 'Carbono',
            res2: 'Cobalto',
            res3: 'Cadmio',
            correcta: 'Calcio'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mg?',
        respuestas: {
            correcta: 'Magnesio',
            res1: 'Manganeso',
            res2: 'Mercurio',
            res3: 'Molibdeno'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mn?',
        respuestas: {
            res1: 'Magnesio',
            correcta: 'Manganeso',
            res2: 'Mercurio',
            res3: 'Molibdeno'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Fe?',
        respuestas: {
            res1: 'Flúor',
            res2: 'Francio',
            correcta: 'Hierro',
            res3: 'Fermio'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo F?',
        respuestas: {
            res1: 'Hierro',
            res2: 'Francio',
            res3: 'Fósforo',
            correcta: 'Flúor'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo P?',
        respuestas: {
            correcta: 'Fósforo',
            res1: 'Potasio',
            res2: 'Plomo',
            res3: 'Platino'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pt?',
        respuestas: {
            res1: 'Plomo',
            correcta: 'Platino',
            res2: 'Potasio',
            res3: 'Polonio'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pb?',
        respuestas: {
            res1: 'Platino',
            res2: 'Polonio',
            correcta: 'Plomo',
            res3: 'Potasio'
        }
    },
    {
        pregunta: '¿Cuál es el idioma con mayor número de hablantes nativos?',
        respuestas: {
            res1: 'Inglés',
            res2: 'Español',
            res3: 'Hindi',
            correcta: 'Chino mandarín'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Brasil?',
        respuestas: {
            correcta: 'Portugués',
            res1: 'Español',
            res2: 'Francés',
            res3: 'Inglés'
        }
    },
    {
        pregunta: '¿Qué idioma tiene más hablantes totales considerando nativos y no nativos?',
        respuestas: {
            res1: 'Español',
            correcta: 'Inglés',
            res2: 'Chino mandarín',
            res3: 'Francés'
        }
    },
    {
        pregunta: '¿Cuál es la lengua clásica de la antigua Roma?',
        respuestas: {
            res1: 'Griego',
            res2: 'Arameo',
            correcta: 'Latín',
            res3: 'Hebreo'
        }
    },
    {
        pregunta: '¿Qué idioma dio origen a muchas lenguas romances?',
        respuestas: {
            res1: 'Griego',
            res2: 'Germánico',
            res3: 'Árabe',
            correcta: 'Latín'
        }
    },
    {
        pregunta: '¿Cuál de estas lenguas pertenece a las lenguas romances?',
        respuestas: {
            correcta: 'Español',
            res1: 'Alemán',
            res2: 'Ruso',
            res3: 'Árabe'
        }
    },
    {
        pregunta: '¿Cuál de estas lenguas pertenece a la familia germánica?',
        respuestas: {
            res1: 'Español',
            correcta: 'Alemán',
            res2: 'Italiano',
            res3: 'Portugués'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Austria?',
        respuestas: {
            res1: 'Francés',
            res2: 'Italiano',
            res3: 'Inglés',
            correcta: 'Alemán'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial predominante de Japón?',
        respuestas: {
            correcta: 'Japonés',
            res1: 'Chino',
            res2: 'Coreano',
            res3: 'Mongol'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Irán?',
        respuestas: {
            res1: 'Árabe',
            correcta: 'Persa',
            res2: 'Turco',
            res3: 'Urdu'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial predominante de Israel?',
        respuestas: {
            res1: 'Árabe',
            res2: 'Inglés',
            correcta: 'Hebreo',
            res3: 'Arameo'
        }
    },
    {
        pregunta: '¿Cuál es el alfabeto utilizado tradicionalmente para escribir ruso?',
        respuestas: {
            res1: 'Latino',
            res2: 'Griego',
            res3: 'Árabe',
            correcta: 'Cirilo'
        }
    },
    {
        pregunta: '¿Qué alfabeto utiliza el español actualmente?',
        respuestas: {
            correcta: 'Latino',
            res1: 'Cirílico',
            res2: 'Griego',
            res3: 'Árabe'
        }
    },
    {
        pregunta: '¿Qué lengua utiliza principalmente el alfabeto árabe?',
        respuestas: {
            res1: 'Japonés',
            correcta: 'Árabe',
            res2: 'Ruso',
            res3: 'Griego'
        }
    },
    {
        pregunta: '¿Quién escribió Don Quijote de la Mancha?',
        respuestas: {
            res1: 'Lope de Vega',
            res2: 'Calderón de la Barca',
            correcta: 'Miguel de Cervantes',
            res3: 'Quevedo'
        }
    },
    {
        pregunta: '¿Quién escribió Cien años de soledad?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            res2: 'Julio Cortázar',
            res3: 'Jorge Luis Borges',
            correcta: 'Gabriel García Márquez'
        }
    },
    {
        pregunta: '¿Quién escribió Rayuela?',
        respuestas: {
            correcta: 'Julio Cortázar',
            res1: 'Jorge Luis Borges',
            res2: 'Mario Vargas Llosa',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Quién escribió El Aleph?',
        respuestas: {
            res1: 'Julio Cortázar',
            correcta: 'Jorge Luis Borges',
            res2: 'Gabriel García Márquez',
            res3: 'Mario Vargas Llosa'
        }
    },
    {
        pregunta: '¿Quién escribió Veinte poemas de amor y una canción desesperada?',
        respuestas: {
            res1: 'Gabriela Mistral',
            res2: 'Octavio Paz',
            correcta: 'Pablo Neruda',
            res3: 'César Vallejo'
        }
    },
    {
        pregunta: '¿Quién escribió El amor en los tiempos del cólera?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            res2: 'Julio Cortázar',
            res3: 'Pablo Neruda',
            correcta: 'Gabriel García Márquez'
        }
    },
    {
        pregunta: '¿Quién escribió La ciudad y los perros?',
        respuestas: {
            correcta: 'Mario Vargas Llosa',
            res1: 'Gabriel García Márquez',
            res2: 'Julio Cortázar',
            res3: 'Pablo Neruda'
        }
    },
    {
        pregunta: '¿Quién escribió La casa de los espíritus?',
        respuestas: {
            res1: 'Laura Esquivel',
            correcta: 'Isabel Allende',
            res2: 'Clarice Lispector',
            res3: 'Gabriela Mistral'
        }
    },
    {
        pregunta: '¿Quién escribió Pedro Páramo?',
        respuestas: {
            res1: 'Octavio Paz',
            res2: 'Carlos Fuentes',
            correcta: 'Juan Rulfo',
            res3: 'Jorge Luis Borges'
        }
    },
    {
        pregunta: '¿Quién escribió Ficciones?',
        respuestas: {
            res1: 'Julio Cortázar',
            res2: 'Gabriel García Márquez',
            res3: 'Mario Vargas Llosa',
            correcta: 'Jorge Luis Borges'
        }
    },
    {
        pregunta: '¿Quién escribió Cien sonetos de amor?',
        respuestas: {
            correcta: 'Pablo Neruda',
            res1: 'Octavio Paz',
            res2: 'César Vallejo',
            res3: 'Gabriela Mistral'
        }
    },
    {
        pregunta: '¿Quién escribió La tregua?',
        respuestas: {
            res1: 'Mario Benedetti',
            correcta: 'Mario Benedetti',
            res2: 'Eduardo Galeano',
            res3: 'Julio Cortázar'
        }
    },
    {
        pregunta: '¿Qué escritor recibió el Premio Nobel de Literatura en 1949?',
        respuestas: {
            res1: 'Ernest Hemingway',
            res2: 'John Steinbeck',
            correcta: 'William Faulkner',
            res3: 'George Bernard Shaw'
        }
    },
    {
        pregunta: '¿Qué escritor recibió el Premio Nobel de Literatura en 1953?',
        respuestas: {
            res1: 'George Orwell',
            res2: 'Ernest Hemingway',
            res3: 'William Faulkner',
            correcta: 'Winston Churchill'
        }
    },
    {
        pregunta: '¿Quién escribió Hamlet?',
        respuestas: {
            correcta: 'William Shakespeare',
            res1: 'Christopher Marlowe',
            res2: 'Charles Dickens',
            res3: 'Oscar Wilde'
        }
    },
    {
        pregunta: '¿Quién escribió Macbeth?',
        respuestas: {
            res1: 'Charles Dickens',
            correcta: 'William Shakespeare',
            res2: 'Oscar Wilde',
            res3: 'Christopher Marlowe'
        }
    },
    {
        pregunta: '¿Quién escribió Orgullo y prejuicio?',
        respuestas: {
            res1: 'Emily Brontë',
            res2: 'Mary Shelley',
            correcta: 'Jane Austen',
            res3: 'Virginia Woolf'
        }
    },
    {
        pregunta: '¿Quién escribió Frankenstein?',
        respuestas: {
            res1: 'Bram Stoker',
            res2: 'Jane Austen',
            res3: 'Emily Brontë',
            correcta: 'Mary Shelley'
        }
    },
    {
        pregunta: '¿Quién escribió Drácula?',
        respuestas: {
            correcta: 'Bram Stoker',
            res1: 'Mary Shelley',
            res2: 'Robert Louis Stevenson',
            res3: 'H. G. Wells'
        }
    },
    {
        pregunta: '¿Quién escribió El retrato de Dorian Gray?',
        respuestas: {
            res1: 'Bram Stoker',
            correcta: 'Oscar Wilde',
            res2: 'Charles Dickens',
            res3: 'George Bernard Shaw'
        }
    },
    {
        pregunta: '¿Quién escribió Los miserables?',
        respuestas: {
            res1: 'Victor Hugo',
            res2: 'Alexandre Dumas',
            correcta: 'Victor Hugo',
            res3: 'Émile Zola'
        }
    },
    {
        pregunta: '¿Quién escribió El conde de Montecristo?',
        respuestas: {
            res1: 'Victor Hugo',
            correcta: 'Alexandre Dumas',
            res2: 'Gustave Flaubert',
            res3: 'Émile Zola'
        }
    },
    {
        pregunta: '¿Quién escribió Madame Bovary?',
        respuestas: {
            res1: 'Victor Hugo',
            res2: 'Émile Zola',
            res3: 'Honoré de Balzac',
            correcta: 'Gustave Flaubert'
        }
    },
    {
        pregunta: '¿Quién escribió Guerra y paz?',
        respuestas: {
            correcta: 'León Tolstói',
            res1: 'Fiódor Dostoyevski',
            res2: 'Antón Chéjov',
            res3: 'Iván Turguénev'
        }
    },
    {
        pregunta: '¿Quién escribió Crimen y castigo?',
        respuestas: {
            res1: 'León Tolstói',
            correcta: 'Fiódor Dostoyevski',
            res2: 'Antón Chéjov',
            res3: 'Nikolái Gógol'
        }
    },
    {
        pregunta: '¿Quién escribió La metamorfosis?',
        respuestas: {
            res1: 'Albert Camus',
            res2: 'Thomas Mann',
            correcta: 'Franz Kafka',
            res3: 'Hermann Hesse'
        }
    },
    {
        pregunta: '¿Quién escribió 1984?',
        respuestas: {
            res1: 'Aldous Huxley',
            res2: 'Ray Bradbury',
            res3: 'J. R. R. Tolkien',
            correcta: 'George Orwell'
        }
    },
    {
        pregunta: '¿Quién escribió Un mundo feliz?',
        respuestas: {
            correcta: 'Aldous Huxley',
            res1: 'George Orwell',
            res2: 'Ray Bradbury',
            res3: 'Isaac Asimov'
        }
    },
    {
        pregunta: '¿Quién escribió Fahrenheit 451?',
        respuestas: {
            res1: 'George Orwell',
            correcta: 'Ray Bradbury',
            res2: 'Aldous Huxley',
            res3: 'Isaac Asimov'
        }
    },
    {
        pregunta: '¿Quién escribió El señor de los anillos?',
        respuestas: {
            res1: 'C. S. Lewis',
            res2: 'George R. R. Martin',
            correcta: 'J. R. R. Tolkien',
            res3: 'J. K. Rowling'
        }
    },
    {
        pregunta: '¿Quién escribió Las crónicas de Narnia?',
        respuestas: {
            res1: 'J. R. R. Tolkien',
            res2: 'J. K. Rowling',
            res3: 'Philip Pullman',
            correcta: 'C. S. Lewis'
        }
    },
    {
        pregunta: '¿Quién escribió Harry Potter?',
        respuestas: {
            correcta: 'J. K. Rowling',
            res1: 'Suzanne Collins',
            res2: 'C. S. Lewis',
            res3: 'J. R. R. Tolkien'
        }
    },
    {
        pregunta: '¿Quién escribió El principito?',
        respuestas: {
            res1: 'Julio Verne',
            correcta: 'Antoine de Saint-Exupéry',
            res2: 'Victor Hugo',
            res3: 'Albert Camus'
        }
    },
    {
        pregunta: '¿Quién escribió La divina comedia?',
        respuestas: {
            res1: 'Petrarca',
            res2: 'Virgilio',
            correcta: 'Dante Alighieri',
            res3: 'Boccaccio'
        }
    },
    {
        pregunta: '¿Quién escribió La Ilíada?',
        respuestas: {
            res1: 'Virgilio',
            res2: 'Sófocles',
            res3: 'Platón',
            correcta: 'Homero'
        }
    },
    {
        pregunta: '¿Quién escribió La Odisea?',
        respuestas: {
            correcta: 'Homero',
            res1: 'Virgilio',
            res2: 'Sófocles',
            res3: 'Aristóteles'
        }
    },
    {
        pregunta: '¿Quién escribió La Eneida?',
        respuestas: {
            res1: 'Homero',
            correcta: 'Virgilio',
            res2: 'Dante',
            res3: 'Ovidio'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del famoso cuadro de Leonardo da Vinci que representa a una mujer con una sonrisa enigmática?',
        respuestas: {
            res1: 'La última cena',
            res2: 'La dama del armiño',
            correcta: 'La Mona Lisa',
            res3: 'La virgen de las rocas'
        }
    },
    {
        pregunta: '¿Cuál es el museo donde se encuentra la Mona Lisa?',
        respuestas: {
            res1: 'Museo del Prado',
            res2: 'Museo Británico',
            res3: 'Museo Metropolitano',
            correcta: 'Museo del Louvre'
        }
    },
    {
        pregunta: '¿En qué ciudad se encuentra el Museo del Prado?',
        respuestas: {
            correcta: 'Madrid',
            res1: 'París',
            res2: 'Roma',
            res3: 'Londres'
        }
    },
    {
        pregunta: '¿En qué ciudad se encuentra el Coliseo?',
        respuestas: {
            res1: 'Atenas',
            correcta: 'Roma',
            res2: 'París',
            res3: 'Madrid'
        }
    },
    {
        pregunta: '¿En qué ciudad se encuentra la Torre Eiffel?',
        respuestas: {
            res1: 'Roma',
            res2: 'Londres',
            correcta: 'París',
            res3: 'Madrid'
        }
    },
    {
        pregunta: '¿En qué ciudad se encuentra el Big Ben?',
        respuestas: {
            res1: 'París',
            res2: 'Dublín',
            res3: 'Edimburgo',
            correcta: 'Londres'
        }
    },
    {
        pregunta: '¿En qué ciudad se encuentra el Taj Mahal?',
        respuestas: {
            correcta: 'Agra',
            res1: 'Nueva Delhi',
            res2: 'Mumbai',
            res3: 'Calcuta'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el Taj Mahal?',
        respuestas: {
            res1: 'Pakistán',
            correcta: 'India',
            res2: 'Nepal',
            res3: 'Bangladés'
        }
    },
    {
        pregunta: '¿En qué país se encuentra Machu Picchu?',
        respuestas: {
            res1: 'Bolivia',
            res2: 'Ecuador',
            correcta: 'Perú',
            res3: 'Chile'
        }
    },
    {
        pregunta: '¿En qué país se encuentra Chichén Itzá?',
        respuestas: {
            res1: 'Guatemala',
            res2: 'Perú',
            res3: 'Belice',
            correcta: 'México'
        }
    },
    {
        pregunta: '¿En qué país se encuentra Petra?',
        respuestas: {
            correcta: 'Jordania',
            res1: 'Israel',
            res2: 'Siria',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿En qué país se encuentra Angkor Wat?',
        respuestas: {
            res1: 'Tailandia',
            correcta: 'Camboya',
            res2: 'Vietnam',
            res3: 'Laos'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el monte Fuji?',
        respuestas: {
            res1: 'China',
            res2: 'Corea del Sur',
            correcta: 'Japón',
            res3: 'Nepal'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el monte Everest?',
        respuestas: {
            res1: 'India',
            res2: 'China',
            res3: 'Bután',
            correcta: 'Nepal'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el Kilimanjaro?',
        respuestas: {
            correcta: 'Tanzania',
            res1: 'Kenia',
            res2: 'Uganda',
            res3: 'Etiopía'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el Aconcagua?',
        respuestas: {
            res1: 'Chile',
            correcta: 'Argentina',
            res2: 'Perú',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el desierto de Atacama?',
        respuestas: {
            res1: 'Perú',
            res2: 'Bolivia',
            correcta: 'Chile',
            res3: 'Argentina'
        }
    },
    {
        pregunta: '¿Cuál es la cascada más alta del mundo?',
        respuestas: {
            res1: 'Niágara',
            res2: 'Iguazú',
            res3: 'Victoria',
            correcta: 'Salto Ángel'
        }
    },
    {
        pregunta: '¿En qué país se encuentra el Salto Ángel?',
        respuestas: {
            correcta: 'Venezuela',
            res1: 'Colombia',
            res2: 'Brasil',
            res3: 'Guyana'
        }
    },
    {
        pregunta: '¿Cuál es el río con mayor caudal del mundo?',
        respuestas: {
            res1: 'Nilo',
            correcta: 'Amazonas',
            res2: 'Yangtsé',
            res3: 'Misisipi'
        }
    },
    {
        pregunta: '¿Cuál es el río generalmente considerado el más largo de África?',
        respuestas: {
            res1: 'Congo',
            res2: 'Níger',
            correcta: 'Nilo',
            res3: 'Zambeze'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Asia?',
        respuestas: {
            res1: 'Ganges',
            res2: 'Mekong',
            res3: 'Indo',
            correcta: 'Yangtsé'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Europa?',
        respuestas: {
            correcta: 'Volga',
            res1: 'Danubio',
            res2: 'Rin',
            res3: 'Dniéper'
        }
    },
    {
        pregunta: '¿Cuál es el lago más profundo del mundo?',
        respuestas: {
            res1: 'Superior',
            correcta: 'Baikal',
            res2: 'Titicaca',
            res3: 'Victoria'
        }
    },
    {
        pregunta: '¿Cuál es el lago más grande de África por superficie?',
        respuestas: {
            res1: 'Tanganica',
            res2: 'Malaui',
            correcta: 'Victoria',
            res3: 'Chad'
        }
    },
    {
        pregunta: '¿Cuál es el lago más grande de América del Norte?',
        respuestas: {
            res1: 'Michigan',
            res2: 'Huron',
            res3: 'Erie',
            correcta: 'Superior'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo?',
        respuestas: {
            correcta: 'Rusia',
            res1: 'Canadá',
            res2: 'China',
            res3: 'Estados Unidos'
        }
    },
    {
        pregunta: '¿Cuál es el país más pequeño del mundo?',
        respuestas: {
            res1: 'Mónaco',
            correcta: 'Ciudad del Vaticano',
            res2: 'San Marino',
            res3: 'Liechtenstein'
        }
    },
    {
        pregunta: '¿Cuál es el país más poblado del mundo actualmente?',
        respuestas: {
            res1: 'China',
            res2: 'Estados Unidos',
            correcta: 'India',
            res3: 'Indonesia'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de América del Sur?',
        respuestas: {
            res1: 'Argentina',
            res2: 'Perú',
            res3: 'Colombia',
            correcta: 'Brasil'
        }
    },
    {
        pregunta: '¿Cuál es el país más pequeño de América del Sur?',
        respuestas: {
            correcta: 'Surinam',
            res1: 'Uruguay',
            res2: 'Guyana',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es el continente con mayor superficie?',
        respuestas: {
            res1: 'África',
            correcta: 'Asia',
            res2: 'América',
            res3: 'Europa'
        }
    },
    {
        pregunta: '¿Cuál es el continente más pequeño?',
        respuestas: {
            res1: 'Europa',
            res2: 'Antártida',
            correcta: 'Oceanía',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Cuál es el continente más frío?',
        respuestas: {
            res1: 'Europa',
            res2: 'Asia',
            res3: 'América',
            correcta: 'Antártida'
        }
    },
    {
        pregunta: '¿Cuál es el océano más grande?',
        respuestas: {
            correcta: 'Pacífico',
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuál es el océano más pequeño?',
        respuestas: {
            res1: 'Atlántico',
            correcta: 'Ártico',
            res2: 'Índico',
            res3: 'Pacífico'
        }
    },
    {
        pregunta: '¿Cuál es el océano que rodea la Antártida?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            correcta: 'Océano Austral',
            res3: 'Pacífico'
        }
    },
    {
        pregunta: '¿Cuál es la línea imaginaria que divide la Tierra en hemisferio norte y sur?',
        respuestas: {
            res1: 'Meridiano de Greenwich',
            res2: 'Trópico de Cáncer',
            res3: 'Trópico de Capricornio',
            correcta: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es el meridiano que sirve como referencia para la longitud 0°?',
        respuestas: {
            correcta: 'Meridiano de Greenwich',
            res1: 'Ecuador',
            res2: 'Trópico de Cáncer',
            res3: 'Línea internacional de cambio de fecha'
        }
    },
    {
        pregunta: '¿Qué línea imaginaria está situada aproximadamente a 23,5° al norte del ecuador?',
        respuestas: {
            res1: 'Trópico de Capricornio',
            correcta: 'Trópico de Cáncer',
            res2: 'Círculo Polar Ártico',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Qué línea imaginaria está situada aproximadamente a 23,5° al sur del ecuador?',
        respuestas: {
            res1: 'Trópico de Cáncer',
            res2: 'Ecuador',
            correcta: 'Trópico de Capricornio',
            res3: 'Círculo Polar Antártico'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Estados Unidos?',
        respuestas: {
            res1: 'Nueva York',
            res2: 'Los Ángeles',
            res3: 'Chicago',
            correcta: 'Washington D. C.'
        }
    },
    {
        pregunta: '¿Cuál es el estado más grande de Estados Unidos por superficie?',
        respuestas: {
            correcta: 'Alaska',
            res1: 'Texas',
            res2: 'California',
            res3: 'Montana'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de Norteamérica?',
        respuestas: {
            res1: 'Estados Unidos',
            correcta: 'Canadá',
            res2: 'México',
            res3: 'Groenlandia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Montreal',
            correcta: 'Ottawa',
            res3: 'Vancouver'
        }
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        respuestas: {
            res1: 'Guadalajara',
            res2: 'Monterrey',
            res3: 'Puebla',
            correcta: 'Ciudad de México'
        }
    },
    {
        pregunta: '¿Cuál es la península donde se encuentra gran parte de México?',
        respuestas: {
            correcta: 'América del Norte',
            res1: 'Península arábiga',
            res2: 'Península ibérica',
            res3: 'Península escandinava'
        }
    },
    {
        pregunta: '¿Qué país comparte la frontera terrestre más larga con Estados Unidos?',
        respuestas: {
            res1: 'México',
            correcta: 'Canadá',
            res2: 'Rusia',
            res3: 'Cuba'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Washington D. C.?',
        respuestas: {
            res1: 'Canadá',
            res2: 'México',
            correcta: 'Estados Unidos',
            res3: 'Australia'
        }
    },
    {
        pregunta: '¿Qué documento declaró la independencia de las Trece Colonias británicas en 1776?',
        respuestas: {
            res1: 'Constitución de Estados Unidos',
            res2: 'Carta Magna',
            res3: 'Declaración de los Derechos',
            correcta: 'Declaración de Independencia'
        }
    },
    {
        pregunta: '¿En qué año se declaró la independencia de Estados Unidos?',
        respuestas: {
            correcta: '1776',
            res1: '1789',
            res2: '1770',
            res3: '1800'
        }
    },
    {
        pregunta: '¿En qué año comenzó la Revolución Francesa?',
        respuestas: {
            res1: '1776',
            correcta: '1789',
            res2: '1815',
            res3: '1848'
        }
    },
    {
        pregunta: '¿Qué acontecimiento simboliza tradicionalmente el inicio de la Revolución Francesa?',
        respuestas: {
            res1: 'Ejecución de Luis XVI',
            res2: 'Batalla de Waterloo',
            correcta: 'Toma de la Bastilla',
            res3: 'Congreso de Viena'
        }
    },
    {
        pregunta: '¿En qué año cayó el Muro de Berlín?',
        respuestas: {
            res1: '1985',
            res2: '1991',
            res3: '1979',
            correcta: '1989'
        }
    },
    {
        pregunta: '¿En qué año terminó oficialmente la Segunda Guerra Mundial?',
        respuestas: {
            correcta: '1945',
            res1: '1939',
            res2: '1942',
            res3: '1950'
        }
    },
    {
        pregunta: '¿En qué año comenzó la Segunda Guerra Mundial?',
        respuestas: {
            res1: '1918',
            correcta: '1939',
            res2: '1941',
            res3: '1945'
        }
    },
    {
        pregunta: '¿En qué año terminó la Primera Guerra Mundial?',
        respuestas: {
            res1: '1914',
            res2: '1920',
            correcta: '1918',
            res3: '1939'
        }
    },
    {
        pregunta: '¿En qué año comenzó la Primera Guerra Mundial?',
        respuestas: {
            res1: '1912',
            res2: '1916',
            res3: '1918',
            correcta: '1914'
        }
    },
    {
        pregunta: '¿Qué acontecimiento desencadenó directamente la Primera Guerra Mundial?',
        respuestas: {
            correcta: 'Asesinato de Francisco Fernando',
            res1: 'Invasión de Polonia',
            res2: 'Ataque a Pearl Harbor',
            res3: 'Revolución rusa'
        }
    },
    {
        pregunta: '¿Qué país fue invadido por Alemania en 1939, dando inicio a la Segunda Guerra Mundial en Europa?',
        respuestas: {
            res1: 'Francia',
            correcta: 'Polonia',
            res2: 'Bélgica',
            res3: 'Noruega'
        }
    },
    {
        pregunta: '¿Qué ciudad japonesa fue atacada con una bomba atómica el 6 de agosto de 1945?',
        respuestas: {
            res1: 'Tokio',
            res2: 'Nagasaki',
            correcta: 'Hiroshima',
            res3: 'Osaka'
        }
    },
    {
        pregunta: '¿Qué ciudad japonesa fue atacada con una bomba atómica el 9 de agosto de 1945?',
        respuestas: {
            res1: 'Hiroshima',
            res2: 'Tokio',
            res3: 'Osaka',
            correcta: 'Nagasaki'
        }
    },
    {
        pregunta: '¿Qué organización internacional se fundó en 1945 tras la Segunda Guerra Mundial?',
        respuestas: {
            correcta: 'Organización de las Naciones Unidas',
            res1: 'OTAN',
            res2: 'Unión Europea',
            res3: 'OEA'
        }
    },
    {
        pregunta: '¿Qué organización militar se creó en 1949?',
        respuestas: {
            res1: 'ONU',
            correcta: 'OTAN',
            res2: 'OEA',
            res3: 'Unesco'
        }
    },
    {
        pregunta: '¿Qué acontecimiento inició tradicionalmente la Edad Moderna en 1492?',
        respuestas: {
            res1: 'Caída de Roma',
            res2: 'Revolución Francesa',
            correcta: 'Llegada de Colón a América',
            res3: 'Caída de Constantinopla'
        }
    },
    {
        pregunta: '¿En qué año cayó Constantinopla ante los otomanos?',
        respuestas: {
            res1: '1492',
            res2: '1450',
            res3: '1517',
            correcta: '1453'
        }
    },
    {
        pregunta: '¿Qué imperio tomó Constantinopla en 1453?',
        respuestas: {
            correcta: 'Imperio otomano',
            res1: 'Imperio romano',
            res2: 'Imperio persa',
            res3: 'Imperio mongol'
        }
    },
    {
        pregunta: '¿Qué civilización desarrolló el calendario de gran precisión conocido por sus avances astronómicos en Mesoamérica?',
        respuestas: {
            res1: 'Inca',
            correcta: 'Maya',
            res2: 'Romana',
            res3: 'Fenicia'
        }
    },
    {
        pregunta: '¿Qué pueblo construyó Tenochtitlan?',
        respuestas: {
            res1: 'Maya',
            res2: 'Inca',
            correcta: 'Mexica',
            res3: 'Muisca'
        }
    },
    {
        pregunta: '¿Cuál era la capital del Imperio azteca?',
        respuestas: {
            res1: 'Cusco',
            correcta: 'Tenochtitlan',
            res2: 'Chichén Itzá',
            res3: 'Teotihuacán'
        }
    },
    {
        pregunta: '¿Qué ciudad fue capital del Imperio inca?',
        respuestas: {
            res1: 'Lima',
            res2: 'Quito',
            res3: 'La Paz',
            correcta: 'Cusco'
        }
    },
    {
        pregunta: '¿Qué civilización habitó principalmente la región central de México antes de la conquista española?',
        respuestas: {
            correcta: 'Mexica',
            res1: 'Inca',
            res2: 'Muisca',
            res3: 'Tairona'
        }
    },
    {
        pregunta: '¿Qué pueblo indígena habitó gran parte de la Sierra Nevada de Santa Marta?',
        respuestas: {
            res1: 'Muisca',
            correcta: 'Tairona',
            res2: 'Inca',
            res3: 'Azteca'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana fue fundada por Pedro de Heredia en 1533?',
        respuestas: {
            res1: 'Bogotá',
            res2: 'Santa Marta',
            correcta: 'Cartagena',
            res3: 'Barranquilla'
        }
    },
    {
        pregunta: '¿Cuál es una de las ciudades más antiguas fundadas por españoles en Colombia, fundada en 1525?',
        respuestas: {
            res1: 'Cartagena',
            res2: 'Bogotá',
            res3: 'Barranquilla',
            correcta: 'Santa Marta'
        }
    },
    {
        pregunta: '¿Quién fundó Bogotá en 1538 según la tradición histórica española?',
        respuestas: {
            correcta: 'Gonzalo Jiménez de Quesada',
            res1: 'Pedro de Heredia',
            res2: 'Sebastián de Belalcázar',
            res3: 'Rodrigo de Bastidas'
        }
    },
    {
        pregunta: '¿Quién fundó Cartagena de Indias?',
        respuestas: {
            res1: 'Gonzalo Jiménez de Quesada',
            correcta: 'Pedro de Heredia',
            res2: 'Rodrigo de Bastidas',
            res3: 'Sebastián de Belalcázar'
        }
    },
    {
        pregunta: '¿Quién fundó Santa Marta en 1525?',
        respuestas: {
            res1: 'Pedro de Heredia',
            res2: 'Gonzalo Jiménez de Quesada',
            correcta: 'Rodrigo de Bastidas',
            res3: 'Sebastián de Belalcázar'
        }
    },
    {
        pregunta: '¿Qué batalla fue decisiva para la independencia de Colombia en 1819?',
        respuestas: {
            res1: 'Batalla de Cartagena',
            res2: 'Batalla de Boyacá',
            res3: 'Batalla de Ayacucho',
            correcta: 'Batalla de Boyacá'
        }
    },
    {
        pregunta: '¿En qué año ocurrió la Batalla de Boyacá?',
        respuestas: {
            correcta: '1819',
            res1: '1810',
            res2: '1821',
            res3: '1815'
        }
    },
    {
        pregunta: '¿Qué fecha se conmemora como el Día de la Independencia de Colombia?',
        respuestas: {
            res1: '7 de agosto',
            correcta: '20 de julio',
            res2: '11 de noviembre',
            res3: '12 de octubre'
        }
    },
    {
        pregunta: '¿Qué fecha se conmemora como la Batalla de Boyacá?',
        respuestas: {
            res1: '20 de julio',
            res2: '11 de noviembre',
            correcta: '7 de agosto',
            res3: '12 de octubre'
        }
    },
    {
        pregunta: '¿Qué héroe independentista es conocido como El Libertador?',
        respuestas: {
            res1: 'José de San Martín',
            res2: 'Antonio José de Sucre',
            res3: 'Francisco de Miranda',
            correcta: 'Simón Bolívar'
        }
    },
    {
        pregunta: '¿Quién fue conocido como el Gran Mariscal de Ayacucho?',
        respuestas: {
            correcta: 'Antonio José de Sucre',
            res1: 'Simón Bolívar',
            res2: 'José de San Martín',
            res3: 'Francisco de Paula Santander'
        }
    },
    {
        pregunta: '¿Qué batalla selló la independencia de gran parte de Sudamérica en 1824?',
        respuestas: {
            res1: 'Boyacá',
            correcta: 'Ayacucho',
            res2: 'Carabobo',
            res3: 'Pichincha'
        }
    },
    {
        pregunta: '¿Qué general argentino lideró campañas de independencia en Argentina, Chile y Perú?',
        respuestas: {
            res1: 'Simón Bolívar',
            res2: 'Antonio José de Sucre',
            correcta: 'José de San Martín',
            res3: 'Bernardo O’Higgins'
        }
    },
    {
        pregunta: '¿Qué país lleva el nombre de Simón Bolívar?',
        respuestas: {
            res1: 'Colombia',
            correcta: 'Bolivia',
            res2: 'Venezuela',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Qué ciudad es conocida como la Heroica en Colombia?',
        respuestas: {
            correcta: 'Cartagena de Indias',
            res1: 'Bogotá',
            res2: 'Santa Marta',
            res3: 'Popayán'
        }
    },
    {
        pregunta: '¿Qué fortaleza colonial protege la entrada histórica de Cartagena?',
        respuestas: {
            res1: 'Castillo de San Felipe de Barajas',
            correcta: 'Castillo de San Felipe de Barajas',
            res2: 'Castillo de Chapultepec',
            res3: 'Castillo de San Marcos'
        }
    },
    {
        pregunta: '¿Cuál es la ciudad colombiana famosa por el Castillo de San Felipe de Barajas?',
        respuestas: {
            res1: 'Santa Marta',
            res2: 'Barranquilla',
            correcta: 'Cartagena de Indias',
            res3: 'Sincelejo'
        }
    },
    {
        pregunta: '¿Cuál es el género musical tradicional de la región Caribe colombiana que combina influencias indígenas, africanas y europeas?',
        respuestas: {
            res1: 'Tango',
            res2: 'Joropo',
            res3: 'Bambuco',
            correcta: 'Cumbia'
        }
    },
    {
        pregunta: '¿Qué instrumento de percusión es fundamental en muchos conjuntos de cumbia?',
        respuestas: {
            correcta: 'Tambor',
            res1: 'Piano',
            res2: 'Violín',
            res3: 'Saxofón'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana es famosa por su Carnaval, uno de los más importantes del país?',
        respuestas: {
            res1: 'Cartagena',
            correcta: 'Barranquilla',
            res2: 'Medellín',
            res3: 'Cali'
        }
    },
    {
        pregunta: '¿En qué mes suele celebrarse el Carnaval de Barranquilla?',
        respuestas: {
            res1: 'Julio',
            res2: 'Diciembre',
            correcta: 'Febrero o marzo',
            res3: 'Octubre'
        }
    },
    {
        pregunta: '¿Qué baile colombiano es reconocido como símbolo nacional?',
        respuestas: {
            res1: 'Vallenato',
            res2: 'Joropo',
            correcta: 'Cumbia',
            res3: 'Tango'
        }
    },
    {
        pregunta: '¿Cuál es el deporte nacional de Colombia?',
        respuestas: {
            correcta: 'Tejo',
            res1: 'Fútbol',
            res2: 'Ciclismo',
            res3: 'Béisbol'
        }
    },
    {
        pregunta: '¿Qué deporte tradicional colombiano consiste en lanzar discos metálicos hacia un blanco con pólvora?',
        respuestas: {
            res1: 'Bolos',
            correcta: 'Tejo',
            res2: 'Béisbol',
            res3: 'Petanca'
        }
    },
    {
        pregunta: '¿Qué bebida tradicional colombiana se prepara a base de café y leche en muchas regiones?',
        respuestas: {
            res1: 'Chicha',
            res2: 'Guarapo',
            correcta: 'Café con leche',
            res3: 'Masato'
        }
    },
    {
        pregunta: '¿Cuál es el producto agrícola colombiano famoso mundialmente por su calidad?',
        respuestas: {
            res1: 'Cacao',
            res2: 'Arroz',
            res3: 'Maíz',
            correcta: 'Café'
        }
    },
    {
        pregunta: '¿Qué región colombiana es especialmente reconocida por la producción de café?',
        respuestas: {
            correcta: 'Eje Cafetero',
            res1: 'La Guajira',
            res2: 'Amazonía',
            res3: 'Orinoquía'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento del Atlántico?',
        respuestas: {
            res1: 'Cartagena',
            correcta: 'Barranquilla',
            res2: 'Santa Marta',
            res3: 'Sincelejo'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento de Córdoba?',
        respuestas: {
            res1: 'Sincelejo',
            res2: 'Montería',
            correcta: 'Montería',
            res3: 'Valledupar'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento de Magdalena?',
        respuestas: {
            res1: 'Barranquilla',
            res2: 'Cartagena',
            res3: 'Riohacha',
            correcta: 'Santa Marta'
        }
    },
    {
        pregunta: '¿Cuál es la capital del departamento de La Guajira?',
        respuestas: {
            correcta: 'Riohacha',
            res1: 'Maicao',
            res2: 'Uribia',
            res3: 'Valledupar'
        }
    },
    {
        pregunta: '¿Cuál es el desierto colombiano ubicado en La Guajira?',
        respuestas: {
            res1: 'Tatacoa',
            correcta: 'La Guajira',
            res2: 'Atacama',
            res3: 'Sahara'
        }
    },
    {
        pregunta: '¿Cuál es el desierto colombiano conocido por sus paisajes rojizos y grises?',
        respuestas: {
            res1: 'La Guajira',
            res2: 'Sahara',
            correcta: 'Tatacoa',
            res3: 'Atacama'
        }
    },
    {
        pregunta: '¿En qué departamento se encuentra el desierto de la Tatacoa?',
        respuestas: {
            res1: 'Tolima',
            res2: 'Caldas',
            res3: 'Boyacá',
            correcta: 'Huila'
        }
    },
    {
        pregunta: '¿Cuál es el parque nacional natural famoso por sus playas y selva cerca de Santa Marta?',
        respuestas: {
            correcta: 'Tayrona',
            res1: 'Los Nevados',
            res2: 'El Cocuy',
            res3: 'Chingaza'
        }
    },
    {
        pregunta: '¿Qué parque nacional colombiano se encuentra en la Sierra Nevada de Santa Marta?',
        respuestas: {
            res1: 'Tayrona',
            correcta: 'Sierra Nevada de Santa Marta',
            res2: 'Los Katíos',
            res3: 'Gorgona'
        }
    },
    {
        pregunta: '¿Cuál es el río que desemboca en el mar Caribe cerca de Barranquilla?',
        respuestas: {
            res1: 'Cauca',
            res2: 'Orinoco',
            correcta: 'Magdalena',
            res3: 'Amazonas'
        }
    },
    {
        pregunta: '¿Cuál es el principal río de Colombia por importancia histórica y económica?',
        respuestas: {
            res1: 'Cauca',
            correcta: 'Magdalena',
            res2: 'Meta',
            res3: 'Atrato'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana está ubicada en la desembocadura del río Magdalena?',
        respuestas: {
            correcta: 'Barranquilla',
            res1: 'Bogotá',
            res2: 'Medellín',
            res3: 'Cali'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana es conocida como la Puerta de Oro de Colombia?',
        respuestas: {
            res1: 'Cartagena',
            correcta: 'Barranquilla',
            res2: 'Santa Marta',
            res3: 'Sincelejo'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana es conocida como la Ciudad de la Eterna Primavera?',
        respuestas: {
            res1: 'Cali',
            res2: 'Bogotá',
            correcta: 'Medellín',
            res3: 'Manizales'
        }
    },
    {
        pregunta: '¿Qué ciudad colombiana es conocida como la Sucursal del Cielo?',
        respuestas: {
            res1: 'Medellín',
            res2: 'Cartagena',
            res3: 'Barranquilla',
            correcta: 'Cali'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            correcta: 'Bogotá',
            res1: 'Medellín',
            res2: 'Cali',
            res3: 'Cartagena'
        }
    },
    {
        pregunta: '¿Cuál es la moneda de Estados Unidos?',
        respuestas: {
            res1: 'Euro',
            correcta: 'Dólar',
            res2: 'Libra',
            res3: 'Peso'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Japón?',
        respuestas: {
            res1: 'Yuan',
            res2: 'Won',
            correcta: 'Yen',
            res3: 'Dólar'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial del Reino Unido?',
        respuestas: {
            res1: 'Euro',
            res2: 'Dólar',
            res3: 'Franco',
            correcta: 'Libra esterlina'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de la mayoría de los países de la zona euro?',
        respuestas: {
            correcta: 'Euro',
            res1: 'Dólar',
            res2: 'Libra',
            res3: 'Franco'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de China?',
        respuestas: {
            res1: 'Yen',
            correcta: 'Yuan',
            res2: 'Won',
            res3: 'Rupia'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de India?',
        respuestas: {
            res1: 'Yuan',
            res2: 'Taka',
            correcta: 'Rupia',
            res3: 'Rial'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de México?',
        respuestas: {
            res1: 'Dólar',
            res2: 'Real',
            res3: 'Sol',
            correcta: 'Peso mexicano'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Argentina?',
        respuestas: {
            correcta: 'Peso argentino',
            res1: 'Real',
            res2: 'Peso chileno',
            res3: 'Sol'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Brasil?',
        respuestas: {
            res1: 'Peso',
            correcta: 'Real',
            res2: 'Sol',
            res3: 'Bolívar'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Perú?',
        respuestas: {
            res1: 'Peso',
            res2: 'Bolívar',
            correcta: 'Sol',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Colombia?',
        respuestas: {
            res1: 'Bolívar',
            res2: 'Sol',
            res3: 'Real',
            correcta: 'Peso colombiano'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Chile?',
        respuestas: {
            correcta: 'Peso chileno',
            res1: 'Sol',
            res2: 'Peso argentino',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Venezuela?',
        respuestas: {
            res1: 'Peso',
            correcta: 'Bolívar',
            res2: 'Sol',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Uruguay?',
        respuestas: {
            res1: 'Peso argentino',
            res2: 'Real',
            correcta: 'Peso uruguayo',
            res3: 'Sol'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Paraguay?',
        respuestas: {
            res1: 'Peso',
            res2: 'Real',
            res3: 'Sol',
            correcta: 'Guaraní'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Bolivia?',
        respuestas: {
            correcta: 'Boliviano',
            res1: 'Sol',
            res2: 'Peso',
            res3: 'Real'
        }
    },
    {
        pregunta: '¿Qué país utiliza el franco suizo?',
        respuestas: {
            res1: 'Austria',
            correcta: 'Suiza',
            res2: 'Alemania',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Qué país utiliza el yen?',
        respuestas: {
            res1: 'China',
            res2: 'Corea del Sur',
            correcta: 'Japón',
            res3: 'Vietnam'
        }
    },
    {
        pregunta: '¿Qué país utiliza el won?',
        respuestas: {
            res1: 'Japón',
            correcta: 'Corea del Sur',
            res2: 'China',
            res3: 'Vietnam'
        }
    },
    {
        pregunta: '¿Qué país utiliza el baht?',
        respuestas: {
            res1: 'Vietnam',
            res2: 'Indonesia',
            res3: 'Filipinas',
            correcta: 'Tailandia'
        }
    },
    {
        pregunta: '¿Qué país utiliza la rupia como moneda?',
        respuestas: {
            correcta: 'India',
            res1: 'China',
            res2: 'Japón',
            res3: 'Tailandia'
        }
    },
    {
        pregunta: '¿Qué país utiliza el rial como moneda oficial?',
        respuestas: {
            res1: 'Irak',
            correcta: 'Irán',
            res2: 'Turquía',
            res3: 'Jordania'
        }
    },
    {
        pregunta: '¿Qué país utiliza la libra esterlina?',
        respuestas: {
            res1: 'Irlanda',
            res2: 'Francia',
            correcta: 'Reino Unido',
            res3: 'España'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo del dólar estadounidense?',
        respuestas: {
            res1: '€',
            res2: '£',
            res3: '¥',
            correcta: '$'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo del euro?',
        respuestas: {
            correcta: '€',
            res1: '$',
            res2: '£',
            res3: '¥'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo de la libra esterlina?',
        respuestas: {
            res1: '$',
            correcta: '£',
            res2: '€',
            res3: '¥'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo del yen japonés?',
        respuestas: {
            res1: '$',
            res2: '€',
            correcta: '¥',
            res3: '£'
        }
    },
    {
        pregunta: '¿Qué continente alberga al desierto del Sahara?',
        respuestas: {
            res1: 'Asia',
            correcta: 'África',
            res2: 'Oceanía',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué continente alberga al desierto de Gobi?',
        respuestas: {
            res1: 'África',
            res2: 'Europa',
            correcta: 'Asia',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué continente alberga al desierto de Atacama?',
        respuestas: {
            res1: 'África',
            res2: 'Asia',
            res3: 'Europa',
            correcta: 'América del Sur'
        }
    },
    {
        pregunta: '¿Qué continente alberga al Amazonas?',
        respuestas: {
            correcta: 'América del Sur',
            res1: 'África',
            res2: 'Asia',
            res3: 'Oceanía'
        }
    },
    {
        pregunta: '¿Qué continente alberga al río Nilo?',
        respuestas: {
            res1: 'Asia',
            correcta: 'África',
            res2: 'Europa',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué continente alberga al río Yangtsé?',
        respuestas: {
            res1: 'África',
            res2: 'Europa',
            correcta: 'Asia',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué continente alberga los Alpes?',
        respuestas: {
            res1: 'Asia',
            res2: 'América',
            res3: 'África',
            correcta: 'Europa'
        }
    },
    {
        pregunta: '¿Qué continente alberga los Andes?',
        respuestas: {
            correcta: 'América del Sur',
            res1: 'Europa',
            res2: 'Asia',
            res3: 'África'
        }
    },
    {
        pregunta: '¿Qué continente alberga el Himalaya?',
        respuestas: {
            res1: 'Europa',
            correcta: 'Asia',
            res2: 'África',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué continente alberga los montes Urales?',
        respuestas: {
            res1: 'África',
            res2: 'América',
            correcta: 'Europa y Asia',
            res3: 'Oceanía'
        }
    },
    {
        pregunta: '¿Qué océano separa América de Europa y África?',
        respuestas: {
            res1: 'Pacífico',
            correcta: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Qué océano separa América de Asia y Oceanía?',
        respuestas: {
            correcta: 'Pacífico',
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Qué océano se encuentra entre África y Australia?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Pacífico',
            correcta: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuál es el punto cardinal opuesto al norte?',
        respuestas: {
            res1: 'Este',
            res2: 'Oeste',
            res3: 'Noreste',
            correcta: 'Sur'
        }
    },
    {
        pregunta: '¿Cuál es el punto cardinal opuesto al este?',
        respuestas: {
            correcta: 'Oeste',
            res1: 'Norte',
            res2: 'Sur',
            res3: 'Noreste'
        }
    },
    {
        pregunta: '¿Cuál es el punto cardinal situado a la derecha cuando se mira hacia el norte?',
        respuestas: {
            res1: 'Oeste',
            correcta: 'Este',
            res2: 'Sur',
            res3: 'Noroeste'
        }
    },
    {
        pregunta: '¿Qué instrumento se utiliza para orientarse mediante los puntos cardinales?',
        respuestas: {
            res1: 'Barómetro',
            res2: 'Telescopio',
            correcta: 'Brújula',
            res3: 'Termómetro'
        }
    },
    {
        pregunta: '¿Qué océano está al norte de América y Europa?',
        respuestas: {
            res1: 'Pacífico',
            res2: 'Atlántico',
            res3: 'Índico',
            correcta: 'Ártico'
        }
    },
    {
        pregunta: '¿Qué continente está completamente rodeado por el océano Austral?',
        respuestas: {
            correcta: 'Antártida',
            res1: 'Australia',
            res2: 'África',
            res3: 'América del Sur'
        }
    },
    {
        pregunta: '¿Qué país tiene territorio en dos continentes, Europa y Asia?',
        respuestas: {
            res1: 'España',
            correcta: 'Turquía',
            res2: 'Portugal',
            res3: 'Egipto'
        }
    },
    {
        pregunta: '¿Qué ciudad turca se encuentra en Europa y Asia?',
        respuestas: {
            res1: 'Ankara',
            res2: 'Esmirna',
            correcta: 'Estambul',
            res3: 'Bursa'
        }
    },
    {
        pregunta: '¿Qué estrecho atraviesa Estambul?',
        respuestas: {
            res1: 'Gibraltar',
            res2: 'Magallanes',
            res3: 'Ormuz',
            correcta: 'Bósforo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Turquía?',
        respuestas: {
            correcta: 'Ankara',
            res1: 'Estambul',
            res2: 'Esmirna',
            res3: 'Bursa'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Moscú?',
        respuestas: {
            res1: 'Ucrania',
            correcta: 'Rusia',
            res2: 'Bielorrusia',
            res3: 'Kazajistán'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Kiev?',
        respuestas: {
            res1: 'Rusia',
            res2: 'Polonia',
            correcta: 'Ucrania',
            res3: 'Bielorrusia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Varsovia?',
        respuestas: {
            res1: 'Alemania',
            res2: 'Ucrania',
            res3: 'República Checa',
            correcta: 'Polonia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Praga?',
        respuestas: {
            correcta: 'República Checa',
            res1: 'Eslovaquia',
            res2: 'Polonia',
            res3: 'Austria'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bratislava?',
        respuestas: {
            res1: 'República Checa',
            correcta: 'Eslovaquia',
            res2: 'Eslovenia',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Zagreb?',
        respuestas: {
            res1: 'Serbia',
            res2: 'Eslovenia',
            correcta: 'Croacia',
            res3: 'Bosnia y Herzegovina'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Sarajevo?',
        respuestas: {
            res1: 'Croacia',
            res2: 'Serbia',
            res3: 'Montenegro',
            correcta: 'Bosnia y Herzegovina'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Belgrado?',
        respuestas: {
            correcta: 'Serbia',
            res1: 'Croacia',
            res2: 'Bosnia y Herzegovina',
            res3: 'Montenegro'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Podgorica?',
        respuestas: {
            res1: 'Serbia',
            correcta: 'Montenegro',
            res2: 'Albania',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Tirana?',
        respuestas: {
            res1: 'Montenegro',
            res2: 'Kosovo',
            correcta: 'Albania',
            res3: 'Macedonia del Norte'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Skopie?',
        respuestas: {
            res1: 'Albania',
            res2: 'Serbia',
            res3: 'Bulgaria',
            correcta: 'Macedonia del Norte'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Atenas?',
        respuestas: {
            correcta: 'Grecia',
            res1: 'Albania',
            res2: 'Italia',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Roma?',
        respuestas: {
            res1: 'España',
            correcta: 'Italia',
            res2: 'Grecia',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Madrid?',
        respuestas: {
            res1: 'Portugal',
            res2: 'Francia',
            correcta: 'España',
            res3: 'Italia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lisboa?',
        respuestas: {
            res1: 'España',
            res2: 'Italia',
            res3: 'Francia',
            correcta: 'Portugal'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a París?',
        respuestas: {
            correcta: 'Francia',
            res1: 'España',
            res2: 'Italia',
            res3: 'Bélgica'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bruselas?',
        respuestas: {
            res1: 'Países Bajos',
            correcta: 'Bélgica',
            res2: 'Francia',
            res3: 'Luxemburgo'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Ámsterdam?',
        respuestas: {
            res1: 'Bélgica',
            res2: 'Alemania',
            correcta: 'Países Bajos',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Copenhague?',
        respuestas: {
            res1: 'Noruega',
            res2: 'Suecia',
            res3: 'Finlandia',
            correcta: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Estocolmo?',
        respuestas: {
            correcta: 'Suecia',
            res1: 'Noruega',
            res2: 'Finlandia',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Helsinki?',
        respuestas: {
            res1: 'Suecia',
            correcta: 'Finlandia',
            res2: 'Noruega',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Oslo?',
        respuestas: {
            res1: 'Suecia',
            res2: 'Finlandia',
            correcta: 'Noruega',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Reikiavik?',
        respuestas: {
            res1: 'Noruega',
            res2: 'Finlandia',
            res3: 'Suecia',
            correcta: 'Islandia'
        }
    },
    {
        pregunta: '¿Cuál es el animal terrestre más grande del mundo?',
        respuestas: {
            correcta: 'Elefante africano',
            res1: 'Rinoceronte blanco',
            res2: 'Hipopótamo',
            res3: 'Jirafa'
        }
    },
    {
        pregunta: '¿Cuál es el animal terrestre más alto?',
        respuestas: {
            res1: 'Elefante',
            correcta: 'Jirafa',
            res2: 'Rinoceronte',
            res3: 'Alce'
        }
    },
    {
        pregunta: '¿Cuál es el animal terrestre más rápido?',
        respuestas: {
            res1: 'Leopardo',
            res2: 'León',
            correcta: 'Guepardo',
            res3: 'Antílope'
        }
    },
    {
        pregunta: '¿Cuál es el mamífero marino más grande?',
        respuestas: {
            res1: 'Orca',
            res2: 'Cachalote',
            res3: 'Delfín',
            correcta: 'Ballena azul'
        }
    },
    {
        pregunta: '¿Cuál es el ave más grande actualmente?',
        respuestas: {
            correcta: 'Avestruz',
            res1: 'Cóndor',
            res2: 'Águila',
            res3: 'Emú'
        }
    },
    {
        pregunta: '¿Cuál es el ave que puede alcanzar mayor velocidad en picada?',
        respuestas: {
            res1: 'Águila real',
            correcta: 'Halcón peregrino',
            res2: 'Cóndor',
            res3: 'Albatros'
        }
    },
    {
        pregunta: '¿Cuál es el pez más grande del mundo?',
        respuestas: {
            res1: 'Tiburón blanco',
            res2: 'Atún rojo',
            correcta: 'Tiburón ballena',
            res3: 'Mantarraya'
        }
    },
    {
        pregunta: '¿Cuál es el reptil vivo más grande?',
        respuestas: {
            res1: 'Cocodrilo americano',
            res2: 'Anaconda',
            res3: 'Tortuga gigante',
            correcta: 'Cocodrilo de agua salada'
        }
    },
    {
        pregunta: '¿Qué animal tiene tres corazones?',
        respuestas: {
            correcta: 'Pulpo',
            res1: 'Calamar',
            res2: 'Delfín',
            res3: 'Tiburón'
        }
    },
    {
        pregunta: '¿Qué animal tiene sangre azul debido a la hemocianina?',
        respuestas: {
            res1: 'Perro',
            correcta: 'Pulpo',
            res2: 'Caballo',
            res3: 'Elefante'
        }
    },
    {
        pregunta: '¿Qué animal es famoso por su capacidad de regenerar partes de su cuerpo?',
        respuestas: {
            res1: 'León',
            res2: 'Elefante',
            correcta: 'Ajolote',
            res3: 'Jirafa'
        }
    },
    {
        pregunta: '¿Cuál es el único mamífero capaz de vuelo sostenido?',
        respuestas: {
            res1: 'Ardilla voladora',
            res2: 'Lémur',
            res3: 'Colugo',
            correcta: 'Murciélago'
        }
    },
    {
        pregunta: '¿Qué mamífero pone huevos?',
        respuestas: {
            correcta: 'Ornitorrinco',
            res1: 'Delfín',
            res2: 'Canguro',
            res3: 'Perezoso'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por tener una bolsa donde lleva a sus crías?',
        respuestas: {
            res1: 'Elefante',
            correcta: 'Canguro',
            res2: 'Jirafa',
            res3: 'Oso polar'
        }
    },
    {
        pregunta: '¿Qué animal es símbolo de Australia?',
        respuestas: {
            res1: 'Koala',
            res2: 'Emú',
            res3: 'Cocodrilo',
            correcta: 'Canguro'
        }
    },
    {
        pregunta: '¿Qué animal es símbolo nacional de China y se alimenta principalmente de bambú?',
        respuestas: {
            correcta: 'Panda gigante',
            res1: 'Koala',
            res2: 'Tigre',
            res3: 'Oso polar'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por cambiar de color mediante células especializadas de su piel?',
        respuestas: {
            res1: 'Iguana',
            correcta: 'Camaleón',
            res2: 'Cocodrilo',
            res3: 'Tortuga'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por dormir colgado de los árboles?',
        respuestas: {
            res1: 'Mono',
            res2: 'Koala',
            correcta: 'Murciélago',
            res3: 'Perezoso'
        }
    },
    {
        pregunta: '¿Cuál es el animal terrestre más grande de Sudamérica?',
        respuestas: {
            res1: 'Jaguar',
            res2: 'Anaconda',
            res3: 'Capibara',
            correcta: 'Tapir'
        }
    },
    {
        pregunta: '¿Cuál es el roedor más grande del mundo?',
        respuestas: {
            correcta: 'Capibara',
            res1: 'Castor',
            res2: 'Puercoespín',
            res3: 'Nutria'
        }
    },
    {
        pregunta: '¿Cuál es el felino más grande del mundo?',
        respuestas: {
            res1: 'León',
            correcta: 'Tigre',
            res2: 'Jaguar',
            res3: 'Leopardo'
        }
    },
    {
        pregunta: '¿Qué felino es nativo de América y tiene la mordida especialmente poderosa?',
        respuestas: {
            res1: 'Tigre',
            res2: 'León',
            correcta: 'Jaguar',
            res3: 'Leopardo'
        }
    },
    {
        pregunta: '¿Cuál es el único gran felino que vive naturalmente en América?',
        respuestas: {
            res1: 'León',
            res2: 'Tigre',
            res3: 'Leopardo',
            correcta: 'Jaguar'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por su memoria y gran tamaño cerebral?',
        respuestas: {
            correcta: 'Elefante',
            res1: 'Rinoceronte',
            res2: 'Hipopótamo',
            res3: 'Jirafa'
        }
    },
    {
        pregunta: '¿Qué animal produce miel?',
        respuestas: {
            res1: 'Avispa',
            correcta: 'Abeja',
            res2: 'Hormiga',
            res3: 'Mariposa'
        }
    },
    {
        pregunta: '¿Qué insecto atraviesa las etapas huevo, larva, pupa y adulto?',
        respuestas: {
            res1: 'Saltamontes',
            res2: 'Grillo',
            correcta: 'Mariposa',
            res3: 'Cucaracha'
        }
    },
    {
        pregunta: '¿Qué insecto es conocido por producir seda?',
        respuestas: {
            res1: 'Abeja',
            res2: 'Hormiga',
            res3: 'Escarabajo',
            correcta: 'Gusano de seda'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por construir presas en los ríos?',
        respuestas: {
            correcta: 'Castor',
            res1: 'Nutria',
            res2: 'Hipopótamo',
            res3: 'Capibara'
        }
    },
    {
        pregunta: '¿Qué animal tiene rayas blancas y negras y es originario de África?',
        respuestas: {
            res1: 'Okapi',
            correcta: 'Cebra',
            res2: 'Antílope',
            res3: 'Jirafa'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por tener un cuello extremadamente largo?',
        respuestas: {
            res1: 'Elefante',
            res2: 'Cebra',
            correcta: 'Jirafa',
            res3: 'Camello'
        }
    },
    {
        pregunta: '¿Qué animal es conocido como el rey de la selva en la cultura popular?',
        respuestas: {
            res1: 'Tigre',
            res2: 'Jaguar',
            res3: 'Gorila',
            correcta: 'León'
        }
    },
    {
        pregunta: '¿Cuál es el primate más grande?',
        respuestas: {
            correcta: 'Gorila',
            res1: 'Chimpancé',
            res2: 'Orangután',
            res3: 'Mandril'
        }
    },
    {
        pregunta: '¿Cuál es el primate más cercano al ser humano genéticamente?',
        respuestas: {
            res1: 'Gorila',
            correcta: 'Chimpancé',
            res2: 'Orangután',
            res3: 'Babuino'
        }
    },
    {
        pregunta: '¿Qué animal marino es conocido por su inteligencia y comunicación compleja?',
        respuestas: {
            res1: 'Tiburón',
            res2: 'Medusa',
            correcta: 'Delfín',
            res3: 'Atún'
        }
    },
    {
        pregunta: '¿Qué mamífero marino utiliza ecolocalización y vive en grupos sociales complejos?',
        respuestas: {
            correcta: 'Delfín',
            res1: 'Manatí',
            res2: 'Foca',
            res3: 'Morsa'
        }
    },
    {
        pregunta: '¿Qué animal marino es conocido como el unicornio del mar por su largo colmillo?',
        respuestas: {
            res1: 'Morsa',
            correcta: 'Narval',
            res2: 'Beluga',
            res3: 'Dugongo'
        }
    },
    {
        pregunta: '¿Qué mamífero marino tiene grandes colmillos y vive en regiones árticas?',
        respuestas: {
            res1: 'Foca',
            res2: 'Narval',
            res3: 'Beluga',
            correcta: 'Morsa'
        }
    },
    {
        pregunta: '¿Qué animal marino tiene ocho brazos?',
        respuestas: {
            correcta: 'Pulpo',
            res1: 'Calamar',
            res2: 'Estrella de mar',
            res3: 'Medusa'
        }
    },
    {
        pregunta: '¿Qué animal marino tiene cinco brazos normalmente?',
        respuestas: {
            res1: 'Pulpo',
            correcta: 'Estrella de mar',
            res2: 'Calamar',
            res3: 'Medusa'
        }
    },
    {
        pregunta: '¿Qué animal marino pertenece al grupo de los cnidarios?',
        respuestas: {
            res1: 'Pulpo',
            res2: 'Tiburón',
            correcta: 'Medusa',
            res3: 'Delfín'
        }
    },
    {
        pregunta: '¿Qué animal es un anfibio?',
        respuestas: {
            res1: 'Lagarto',
            res2: 'Tortuga',
            res3: 'Cocodrilo',
            correcta: 'Rana'
        }
    },
    {
        pregunta: '¿Qué animal pertenece a los reptiles?',
        respuestas: {
            correcta: 'Cocodrilo',
            res1: 'Rana',
            res2: 'Salamandra',
            res3: 'Delfín'
        }
    },
    {
        pregunta: '¿Qué animal es un mamífero?',
        respuestas: {
            res1: 'Tiburón',
            correcta: 'Delfín',
            res2: 'Cocodrilo',
            res3: 'Pingüino'
        }
    },
    {
        pregunta: '¿Qué animal es un ave pero no puede volar?',
        respuestas: {
            res1: 'Águila',
            res2: 'Golondrina',
            correcta: 'Pingüino',
            res3: 'Halcón'
        }
    },
    {
        pregunta: '¿Qué ave no voladora es originaria de Australia?',
        respuestas: {
            res1: 'Avestruz',
            res2: 'Pingüino',
            res3: 'Kiwi',
            correcta: 'Emú'
        }
    },
    {
        pregunta: '¿Qué ave es símbolo de paz tradicionalmente?',
        respuestas: {
            correcta: 'Paloma',
            res1: 'Águila',
            res2: 'Cuervo',
            res3: 'Halcón'
        }
    },
    {
        pregunta: '¿Qué ave es conocida por su gran tamaño y por habitar los Andes?',
        respuestas: {
            res1: 'Águila',
            correcta: 'Cóndor',
            res2: 'Halcón',
            res3: 'Albatros'
        }
    },
    {
        pregunta: '¿Qué ave es símbolo nacional de Estados Unidos?',
        respuestas: {
            res1: 'Cóndor',
            res2: 'Halcón peregrino',
            correcta: 'Águila calva',
            res3: 'Búho'
        }
    },
    {
        pregunta: '¿Qué animal es conocido por su capacidad de volar hacia atrás?',
        respuestas: {
            res1: 'Águila',
            res2: 'Murciélago',
            res3: 'Golondrina',
            correcta: 'Colibrí'
        }
    },
    {
        pregunta: '¿Qué ave es la única capaz de mantenerse suspendida en un punto mediante aleteo rápido?',
        respuestas: {
            correcta: 'Colibrí',
            res1: 'Águila',
            res2: 'Búho',
            res3: 'Cóndor'
        }
    },
    {
        pregunta: '¿Cuál es el animal nacional de Colombia?',
        respuestas: {
            res1: 'Jaguar',
            correcta: 'Cóndor de los Andes',
            res2: 'Oso de anteojos',
            res3: 'Águila arpía'
        }
    },
    {
        pregunta: '¿Cuál es la flor nacional de Colombia?',
        respuestas: {
            res1: 'Rosa',
            res2: 'Girasol',
            correcta: 'Orquídea Cattleya trianae',
            res3: 'Margarita'
        }
    },
    {
        pregunta: '¿Cuál es el árbol nacional de Colombia?',
        respuestas: {
            correcta: 'Palma de cera',
            res1: 'Ceiba',
            res2: 'Roble',
            res3: 'Samán'
        }
    },
    {
        pregunta: '¿Cuál es el ave nacional de Colombia?',
        respuestas: {
            res1: 'Águila arpía',
            correcta: 'Cóndor de los Andes',
            res2: 'Guacamaya',
            res3: 'Colibrí'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo nacional de Colombia que aparece en el escudo junto al cóndor?',
        respuestas: {
            res1: 'Jaguar',
            res2: 'Palma de cera',
            res3: 'Orquídea',
            correcta: 'Granada'
        }
    },
    {
        pregunta: '¿Qué animal es conocido como oso de anteojos?',
        respuestas: {
            correcta: 'Oso andino',
            res1: 'Oso polar',
            res2: 'Oso pardo',
            res3: 'Oso negro'
        }
    },
    {
        pregunta: '¿En qué cordillera vive principalmente el oso andino?',
        respuestas: {
            res1: 'Himalaya',
            correcta: 'Andes',
            res2: 'Alpes',
            res3: 'Urales'
        }
    },
    {
        pregunta: '¿Cuál es la flor nacional de México?',
        respuestas: {
            res1: 'Rosa',
            res2: 'Orquídea',
            correcta: 'Dalia',
            res3: 'Girasol'
        }
    },
    {
        pregunta: '¿Cuál es el animal nacional de México?',
        respuestas: {
            res1: 'Águila real',
            correcta: 'Águila real',
            res2: 'Jaguar',
            res3: 'Lobo mexicano'
        }
    },
    {
        pregunta: '¿Cuál es el ave nacional de Estados Unidos?',
        respuestas: {
            res1: 'Águila real',
            res2: 'Halcón',
            correcta: 'Águila calva',
            res3: 'Cóndor'
        }
    },
    {
        pregunta: '¿Cuál es la flor nacional de Japón?',
        respuestas: {
            res1: 'Rosa',
            res2: 'Loto',
            res3: 'Orquídea',
            correcta: 'Crisantemo'
        }
    },
    {
        pregunta: '¿Cuál es el animal nacional de Australia?',
        respuestas: {
            correcta: 'Canguro',
            res1: 'Koala',
            res2: 'Emú',
            res3: 'Ornitorrinco'
        }
    },
    {
        pregunta: '¿Cuál es el animal nacional de China más reconocido internacionalmente?',
        respuestas: {
            res1: 'Tigre',
            correcta: 'Panda gigante',
            res2: 'Dragón',
            res3: 'Grulla'
        }
    },
    {
        pregunta: '¿Qué animal mitológico aparece en la bandera de Gales?',
        respuestas: {
            res1: 'Grifo',
            res2: 'Unicornio',
            correcta: 'Dragón',
            res3: 'Fénix'
        }
    },
    {
        pregunta: '¿Qué animal mitológico tiene cuerpo de caballo y un cuerno en la frente?',
        respuestas: {
            res1: 'Pegaso',
            correcta: 'Unicornio',
            res2: 'Grifo',
            res3: 'Quimera'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica es mitad águila y mitad león?',
        respuestas: {
            res1: 'Quimera',
            res2: 'Esfinge',
            res3: 'Pegaso',
            correcta: 'Grifo'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica griega tenía serpientes en lugar de cabello?',
        respuestas: {
            correcta: 'Medusa',
            res1: 'Esfinge',
            res2: 'Hidra',
            res3: 'Quimera'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica griega tenía múltiples cabezas y fue derrotada por Heracles?',
        respuestas: {
            res1: 'Cerbero',
            correcta: 'Hidra de Lerna',
            res2: 'Minotauro',
            res3: 'Quimera'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica custodiaba la entrada del inframundo griego?',
        respuestas: {
            res1: 'Minotauro',
            res2: 'Hidra',
            correcta: 'Cerbero',
            res3: 'Pegaso'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica tenía cuerpo de hombre y cabeza de toro?',
        respuestas: {
            res1: 'Centauro',
            res2: 'Grifo',
            res3: 'Cíclope',
            correcta: 'Minotauro'
        }
    },
    {
        pregunta: '¿Qué criatura mitológica era mitad hombre y mitad caballo?',
        respuestas: {
            correcta: 'Centauro',
            res1: 'Minotauro',
            res2: 'Fauno',
            res3: 'Grifo'
        }
    },
    {
        pregunta: '¿Qué dios griego gobernaba el mar?',
        respuestas: {
            res1: 'Zeus',
            correcta: 'Poseidón',
            res2: 'Hades',
            res3: 'Apolo'
        }
    },
    {
        pregunta: '¿Qué dios griego gobernaba el inframundo?',
        respuestas: {
            res1: 'Poseidón',
            res2: 'Ares',
            correcta: 'Hades',
            res3: 'Hermes'
        }
    },
    {
        pregunta: '¿Qué dios griego era considerado el principal dios del Olimpo?',
        respuestas: {
            res1: 'Apolo',
            res2: 'Poseidón',
            res3: 'Hades',
            correcta: 'Zeus'
        }
    },
    {
        pregunta: '¿Qué diosa griega representaba principalmente la sabiduría?',
        respuestas: {
            correcta: 'Atenea',
            res1: 'Afrodita',
            res2: 'Hera',
            res3: 'Artemisa'
        }
    },
    {
        pregunta: '¿Qué diosa griega representaba el amor y la belleza?',
        respuestas: {
            res1: 'Atenea',
            correcta: 'Afrodita',
            res2: 'Hera',
            res3: 'Deméter'
        }
    },
    {
        pregunta: '¿Qué dios griego era asociado con la guerra?',
        respuestas: {
            res1: 'Hermes',
            res2: 'Apolo',
            correcta: 'Ares',
            res3: 'Hefesto'
        }
    },
    {
        pregunta: '¿Qué dios griego era mensajero de los dioses?',
        respuestas: {
            res1: 'Ares',
            res2: 'Apolo',
            res3: 'Dionisio',
            correcta: 'Hermes'
        }
    },
    {
        pregunta: '¿Qué dios griego era asociado con el Sol y las artes?',
        respuestas: {
            correcta: 'Apolo',
            res1: 'Ares',
            res2: 'Hermes',
            res3: 'Hefesto'
        }
    },
    {
        pregunta: '¿Qué dios romano corresponde aproximadamente al Zeus griego?',
        respuestas: {
            res1: 'Marte',
            correcta: 'Júpiter',
            res2: 'Neptuno',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Qué dios romano corresponde aproximadamente al Poseidón griego?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Marte',
            correcta: 'Neptuno',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Qué diosa romana corresponde aproximadamente a Afrodita?',
        respuestas: {
            res1: 'Juno',
            res2: 'Minerva',
            res3: 'Diana',
            correcta: 'Venus'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre de la diosa romana del amor?',
        respuestas: {
            correcta: 'Venus',
            res1: 'Marte',
            res2: 'Mercurio',
            res3: 'Júpiter'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre del dios romano de la guerra?',
        respuestas: {
            res1: 'Venus',
            correcta: 'Marte',
            res2: 'Mercurio',
            res3: 'Júpiter'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre del dios romano del mar?',
        respuestas: {
            res1: 'Marte',
            res2: 'Júpiter',
            correcta: 'Neptuno',
            res3: 'Venus'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre del dios romano principal?',
        respuestas: {
            res1: 'Saturno',
            res2: 'Marte',
            res3: 'Neptuno',
            correcta: 'Júpiter'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre del dios romano de la agricultura?',
        respuestas: {
            correcta: 'Saturno',
            res1: 'Júpiter',
            res2: 'Marte',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Qué planeta recibe su nombre del dios romano mensajero?',
        respuestas: {
            res1: 'Venus',
            correcta: 'Mercurio',
            res2: 'Marte',
            res3: 'Júpiter'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del elemento que da nombre al planeta Mercurio?',
        respuestas: {
            res1: 'Hg',
            correcta: 'Hg',
            res2: 'Mc',
            res3: 'Me'
        }
    },
    {
        pregunta: '¿Cuál es la capital de la antigua Grecia?',
        respuestas: {
            correcta: 'Atenas',
            res1: 'Esparta',
            res2: 'Corinto',
            res3: 'Tebas'
        }
    },
    {
        pregunta: '¿Qué ciudad fue famosa por su sociedad militar en la antigua Grecia?',
        respuestas: {
            res1: 'Atenas',
            correcta: 'Esparta',
            res2: 'Corinto',
            res3: 'Mileto'
        }
    },
    {
        pregunta: '¿Qué batalla enfrentó a los griegos contra los persas en 490 a. C.?',
        respuestas: {
            res1: 'Termópilas',
            res2: 'Salamina',
            correcta: 'Maratón',
            res3: 'Platea'
        }
    },
    {
        pregunta: '¿Qué batalla naval fue una importante victoria griega contra los persas?',
        respuestas: {
            correcta: 'Salamina',
            res1: 'Maratón',
            res2: 'Termópilas',
            res3: 'Platea'
        }
    },
    {
        pregunta: '¿Qué batalla es famosa por los 300 espartanos?',
        respuestas: {
            res1: 'Maratón',
            correcta: 'Termópilas',
            res2: 'Salamina',
            res3: 'Platea'
        }
    },
    {
        pregunta: '¿Quién fue el rey espartano asociado con los 300 en las Termópilas?',
        respuestas: {
            res1: 'Alejandro',
            res2: 'Pericles',
            correcta: 'Leónidas',
            res3: 'Solón'
        }
    },
    {
        pregunta: '¿Quién fue el rey de Macedonia que conquistó gran parte del mundo conocido?',
        respuestas: {
            res1: 'Filipo II',
            correcta: 'Alejandro Magno',
            res2: 'Leónidas',
            res3: 'Pericles'
        }
    },
    {
        pregunta: '¿Quién fue el padre de Alejandro Magno?',
        respuestas: {
            correcta: 'Filipo II de Macedonia',
            res1: 'Darío I',
            res2: 'Leónidas',
            res3: 'Sócrates'
        }
    },
    {
        pregunta: '¿Qué ciudad egipcia fue fundada por Alejandro Magno?',
        respuestas: {
            res1: 'El Cairo',
            correcta: 'Alejandría',
            res2: 'Luxor',
            res3: 'Giza'
        }
    },
    {
        pregunta: '¿Qué famosa biblioteca antigua estuvo ubicada en Alejandría?',
        respuestas: {
            res1: 'Biblioteca de Roma',
            res2: 'Biblioteca de Atenas',
            correcta: 'Biblioteca de Alejandría',
            res3: 'Biblioteca de Babilonia'
        }
    },
    {
        pregunta: '¿Cuál es el nombre de la famosa torre de piedra asociada a la antigua biblioteca de Alejandría?',
        respuestas: {
            res1: 'Coloso',
            res2: 'Partenón',
            res3: 'Panteón',
            correcta: 'No existió una torre asociada de forma segura'
        }
    },
    {
        pregunta: '¿Qué antigua maravilla del mundo estaba en Alejandría?',
        respuestas: {
            correcta: 'Faro de Alejandría',
            res1: 'Coloso de Rodas',
            res2: 'Templo de Artemisa',
            res3: 'Jardines de Babilonia'
        }
    },
    {
        pregunta: '¿Qué antigua maravilla estaba en la isla de Rodas?',
        respuestas: {
            res1: 'Faro de Alejandría',
            correcta: 'Coloso de Rodas',
            res2: 'Templo de Artemisa',
            res3: 'Mausoleo de Halicarnaso'
        }
    },
    {
        pregunta: '¿Qué antigua maravilla estaba dedicada a Artemisa?',
        respuestas: {
            res1: 'Coloso de Rodas',
            res2: 'Faro de Alejandría',
            correcta: 'Templo de Artemisa',
            res3: 'Estatua de Zeus'
        }
    },
    {
        pregunta: '¿Qué antigua maravilla se encontraba en Olimpia?',
        respuestas: {
            res1: 'Coloso de Rodas',
            res2: 'Faro de Alejandría',
            res3: 'Templo de Artemisa',
            correcta: 'Estatua de Zeus'
        }
    },
    {
        pregunta: '¿Qué antigua maravilla se encontraba en Babilonia según las fuentes tradicionales?',
        respuestas: {
            correcta: 'Jardines Colgantes',
            res1: 'Faro de Alejandría',
            res2: 'Coloso de Rodas',
            res3: 'Estatua de Zeus'
        }
    },
    {
        pregunta: '¿Cuál de las siete maravillas antiguas sigue en pie?',
        respuestas: {
            res1: 'Faro de Alejandría',
            correcta: 'Gran Pirámide de Guiza',
            res2: 'Coloso de Rodas',
            res3: 'Templo de Artemisa'
        }
    },
    {
        pregunta: '¿Dónde se encuentra la Gran Pirámide de Guiza?',
        respuestas: {
            res1: 'Luxor',
            res2: 'Alejandría',
            correcta: 'Guiza',
            res3: 'Menfis'
        }
    },
    {
        pregunta: '¿Qué faraón está asociado tradicionalmente con la Gran Pirámide de Guiza?',
        respuestas: {
            res1: 'Tutankamón',
            res2: 'Ramsés II',
            res3: 'Akenatón',
            correcta: 'Keops'
        }
    },
    {
        pregunta: '¿Qué faraón fue enterrado en una tumba descubierta por Howard Carter en 1922?',
        respuestas: {
            correcta: 'Tutankamón',
            res1: 'Ramsés II',
            res2: 'Keops',
            res3: 'Akenatón'
        }
    },
    {
        pregunta: '¿Quién descubrió la tumba de Tutankamón en 1922?',
        respuestas: {
            res1: 'Howard Hughes',
            correcta: 'Howard Carter',
            res2: 'Arthur Evans',
            res3: 'Jean-François Champollion'
        }
    },
    {
        pregunta: '¿Qué piedra permitió descifrar los jeroglíficos egipcios?',
        respuestas: {
            res1: 'Piedra de Babilonia',
            res2: 'Piedra de Atenas',
            correcta: 'Piedra de Rosetta',
            res3: 'Piedra de Giza'
        }
    },
    {
        pregunta: '¿Quién ayudó a descifrar los jeroglíficos egipcios gracias a la Piedra de Rosetta?',
        respuestas: {
            res1: 'Howard Carter',
            res2: 'Aristóteles',
            res3: 'Heródoto',
            correcta: 'Jean-François Champollion'
        }
    },
    {
        pregunta: '¿Qué faraón fue conocido por su gran cantidad de monumentos y por gobernar durante décadas?',
        respuestas: {
            correcta: 'Ramsés II',
            res1: 'Tutankamón',
            res2: 'Keops',
            res3: 'Akenatón'
        }
    },
    {
        pregunta: '¿Qué faraón intentó establecer el culto a Atón como centro religioso?',
        respuestas: {
            res1: 'Ramsés II',
            correcta: 'Akenatón',
            res2: 'Tutankamón',
            res3: 'Keops'
        }
    },
    {
        pregunta: '¿Qué joven faraón restauró los cultos tradicionales después del período de Akenatón?',
        respuestas: {
            res1: 'Ramsés II',
            res2: 'Keops',
            correcta: 'Tutankamón',
            res3: 'Tutmosis III'
        }
    },
    {
        pregunta: '¿Qué mar se encuentra al norte de Egipto?',
        respuestas: {
            res1: 'Mar Rojo',
            correcta: 'Mar Mediterráneo',
            res2: 'Mar Negro',
            res3: 'Mar Arábigo'
        }
    },
    {
        pregunta: '¿Qué canal conecta el mar Mediterráneo con el mar Rojo?',
        respuestas: {
            correcta: 'Canal de Suez',
            res1: 'Canal de Panamá',
            res2: 'Canal de Kiel',
            res3: 'Canal de Corinto'
        }
    },
    {
        pregunta: '¿Qué canal conecta el océano Atlántico con el océano Pacífico a través de Panamá?',
        respuestas: {
            res1: 'Canal de Suez',
            correcta: 'Canal de Panamá',
            res2: 'Canal de Kiel',
            res3: 'Canal de Corinto'
        }
    },
    {
        pregunta: '¿Qué país controla el Canal de Panamá?',
        respuestas: {
            res1: 'Estados Unidos',
            res2: 'Colombia',
            correcta: 'Panamá',
            res3: 'Costa Rica'
        }
    },
    {
        pregunta: '¿Cuál es el canal que separa África de Asia en Egipto?',
        respuestas: {
            res1: 'Panamá',
            res2: 'Kiel',
            res3: 'Corinto',
            correcta: 'Suez'
        }
    },
    {
        pregunta: '¿Qué famoso explorador portugués llegó a la India rodeando África?',
        respuestas: {
            correcta: 'Vasco da Gama',
            res1: 'Cristóbal Colón',
            res2: 'Fernando de Magallanes',
            res3: 'Hernán Cortés'
        }
    },
    {
        pregunta: '¿Qué explorador lideró la expedición que realizó la primera circunnavegación del planeta, aunque murió durante el viaje?',
        respuestas: {
            res1: 'Cristóbal Colón',
            correcta: 'Fernando de Magallanes',
            res2: 'Vasco da Gama',
            res3: 'Américo Vespucio'
        }
    },
    {
        pregunta: '¿Qué navegante completó la expedición de Magallanes y culminó la primera circunnavegación?',
        respuestas: {
            res1: 'Cristóbal Colón',
            res2: 'Vasco da Gama',
            correcta: 'Juan Sebastián Elcano',
            res3: 'Hernán Cortés'
        }
    },
    {
        pregunta: '¿Quién dio nombre al continente americano según la tradición cartográfica?',
        respuestas: {
            res1: 'Cristóbal Colón',
            correcta: 'Américo Vespucio',
            res2: 'Fernando de Magallanes',
            res3: 'Vasco da Gama'
        }
    },
    {
        pregunta: '¿Cuál era el nombre del barco principal de Cristóbal Colón en su primer viaje?',
        respuestas: {
            correcta: 'Santa María',
            res1: 'La Niña',
            res2: 'La Pinta',
            res3: 'Victoria'
        }
    },
    {
        pregunta: '¿Qué dos carabelas acompañaron a la Santa María en el primer viaje de Colón?',
        respuestas: {
            res1: 'Victoria y Trinidad',
            correcta: 'La Niña y La Pinta',
            res2: 'San Gabriel y San Rafael',
            res3: 'Santa Clara y Santiago'
        }
    },
    {
        pregunta: '¿Qué país financió el viaje de Cristóbal Colón en 1492?',
        respuestas: {
            res1: 'Portugal',
            res2: 'Francia',
            correcta: 'Corona de Castilla',
            res3: 'Inglaterra'
        }
    },
    {
        pregunta: '¿Qué reina apoyó el proyecto de Colón junto con Fernando de Aragón?',
        respuestas: {
            res1: 'Isabel I de Inglaterra',
            correcta: 'Isabel I de Castilla',
            res2: 'María Tudor',
            res3: 'Catalina de Aragón'
        }
    },
    {
        pregunta: '¿Qué tratado dividió las áreas de expansión entre España y Portugal en 1494?',
        respuestas: {
            correcta: 'Tratado de Tordesillas',
            res1: 'Tratado de Versalles',
            res2: 'Tratado de Utrecht',
            res3: 'Tratado de París'
        }
    },
    {
        pregunta: '¿Qué país quedó con Brasil dentro de su zona de expansión tras el Tratado de Tordesillas?',
        respuestas: {
            res1: 'España',
            correcta: 'Portugal',
            res2: 'Francia',
            res3: 'Inglaterra'
        }
    },
    {
        pregunta: '¿Qué imperio conquistó gran parte de América Central antes de la llegada española?',
        respuestas: {
            res1: 'Inca',
            res2: 'Maya',
            correcta: 'Mexica',
            res3: 'Muisca'
        }
    },
    {
        pregunta: '¿Quién conquistó el Imperio mexica?',
        respuestas: {
            correcta: 'Hernán Cortés',
            res1: 'Francisco Pizarro',
            res2: 'Diego de Almagro',
            res3: 'Pedro de Valdivia'
        }
    },
    {
        pregunta: '¿Quién conquistó el Imperio inca junto con sus expedicionarios?',
        respuestas: {
            res1: 'Hernán Cortés',
            correcta: 'Francisco Pizarro',
            res2: 'Pedro de Valdivia',
            res3: 'Vasco Núñez de Balboa'
        }
    },
    {
        pregunta: '¿Qué conquistador español fundó Santiago de Chile?',
        respuestas: {
            res1: 'Francisco Pizarro',
            res2: 'Hernán Cortés',
            correcta: 'Pedro de Valdivia',
            res3: 'Diego de Almagro'
        }
    },
    {
        pregunta: '¿Qué océano cruzó Colón para llegar a América desde Europa?',
        respuestas: {
            res1: 'Pacífico',
            res2: 'Índico',
            res3: 'Ártico',
            correcta: 'Atlántico'
        }
    },
    {
        pregunta: '¿Qué explorador europeo llegó a la India por mar rodeando el cabo de Buena Esperanza?',
        respuestas: {
            correcta: 'Vasco da Gama',
            res1: 'Cristóbal Colón',
            res2: 'Magallanes',
            res3: 'Cortés'
        }
    },
    {
        pregunta: '¿Qué cabo se encuentra en el extremo sur de África y fue clave para la ruta marítima hacia Asia?',
        respuestas: {
            res1: 'Cabo Hornos',
            correcta: 'Cabo de Buena Esperanza',
            res2: 'Cabo de San Vicente',
            res3: 'Cabo Verde'
        }
    },
    {
        pregunta: '¿Qué continente fue rodeado por primera vez durante la expedición de Magallanes-Elcano?',
        respuestas: {
            res1: 'América',
            res2: 'Asia',
            correcta: 'La Tierra completa',
            res3: 'África'
        }
    },
    {
        pregunta: '¿Qué océano recibió su nombre de la impresión de Magallanes de que sus aguas eran tranquilas?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico',
            correcta: 'Pacífico'
        }
    },
    {
        pregunta: '¿Qué explorador europeo llegó primero al océano Pacífico desde América atravesando el istmo de Panamá?',
        respuestas: {
            correcta: 'Vasco Núñez de Balboa',
            res1: 'Cristóbal Colón',
            res2: 'Hernán Cortés',
            res3: 'Francisco Pizarro'
        }
    },
    {
        pregunta: '¿Qué marino portugués llegó al cabo de Buena Esperanza en 1488?',
        respuestas: {
            res1: 'Vasco da Gama',
            correcta: 'Bartolomeu Dias',
            res2: 'Magallanes',
            res3: 'Pedro Álvares Cabral'
        }
    },
    {
        pregunta: '¿Qué explorador portugués llegó a Brasil en 1500 según la cronología tradicional?',
        respuestas: {
            res1: 'Vasco da Gama',
            res2: 'Bartolomeu Dias',
            correcta: 'Pedro Álvares Cabral',
            res3: 'Enrique el Navegante'
        }
    },
    {
        pregunta: '¿Qué ciudad fue capital del Imperio bizantino?',
        respuestas: {
            res1: 'Roma',
            res2: 'Atenas',
            res3: 'Alejandría',
            correcta: 'Constantinopla'
        }
    },
    {
        pregunta: '¿Cuál es el nombre actual de Constantinopla?',
        respuestas: {
            correcta: 'Estambul',
            res1: 'Ankara',
            res2: 'Esmirna',
            res3: 'Bursa'
        }
    },
    {
        pregunta: '¿Qué emperador romano legalizó el cristianismo mediante el Edicto de Milán junto con Licinio?',
        respuestas: {
            res1: 'Nerón',
            correcta: 'Constantino I',
            res2: 'Augusto',
            res3: 'Trajano'
        }
    },
    {
        pregunta: '¿Qué emperador romano fue conocido por construir una gran muralla en Britania?',
        respuestas: {
            res1: 'Nerón',
            res2: 'Augusto',
            correcta: 'Adriano',
            res3: 'Constantino'
        }
    },
    {
        pregunta: '¿Qué emperador romano gobernó durante la erupción del Vesubio del año 79?',
        respuestas: {
            res1: 'Nerón',
            correcta: 'Tito',
            res2: 'Trajano',
            res3: 'Adriano'
        }
    },
    {
        pregunta: '¿Qué ciudad romana quedó sepultada por la erupción del Vesubio en el año 79?',
        respuestas: {
            correcta: 'Pompeya',
            res1: 'Roma',
            res2: 'Milán',
            res3: 'Rávena'
        }
    },
    {
        pregunta: '¿Qué volcán destruyó Pompeya en el año 79?',
        respuestas: {
            res1: 'Etna',
            correcta: 'Vesubio',
            res2: 'Krakatoa',
            res3: 'Stromboli'
        }
    },
    {
        pregunta: '¿Cuál es el volcán activo situado cerca de Nápoles?',
        respuestas: {
            res1: 'Etna',
            res2: 'Krakatoa',
            correcta: 'Vesubio',
            res3: 'Fuji'
        }
    },
    {
        pregunta: '¿Cuál es el volcán más alto de Europa según la clasificación geográfica habitual?',
        respuestas: {
            res1: 'Vesubio',
            res2: 'Fuji',
            res3: 'Kilimanjaro',
            correcta: 'Elbrús'
        }
    },
    {
        pregunta: '¿Dónde se encuentra el monte Elbrús?',
        respuestas: {
            correcta: 'Rusia',
            res1: 'Francia',
            res2: 'Italia',
            res3: 'Suiza'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de África?',
        respuestas: {
            res1: 'Atlas',
            correcta: 'Kilimanjaro',
            res2: 'Monte Kenia',
            res3: 'Ruwenzori'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de América del Sur?',
        respuestas: {
            res1: 'Huascarán',
            res2: 'Chimborazo',
            correcta: 'Aconcagua',
            res3: 'Illimani'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de América del Norte?',
        respuestas: {
            res1: 'Monte Logan',
            res2: 'Pico de Orizaba',
            res3: 'Monte Whitney',
            correcta: 'Denali'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de Europa según la definición que incluye el Cáucaso?',
        respuestas: {
            correcta: 'Elbrús',
            res1: 'Mont Blanc',
            res2: 'Matterhorn',
            res3: 'Ben Nevis'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de los Alpes?',
        respuestas: {
            res1: 'Matterhorn',
            correcta: 'Mont Blanc',
            res2: 'Dufourspitze',
            res3: 'Grossglockner'
        }
    },
    {
        pregunta: '¿En qué cadena montañosa se encuentra el Everest?',
        respuestas: {
            res1: 'Andes',
            res2: 'Alpes',
            correcta: 'Himalaya',
            res3: 'Urales'
        }
    },
    {
        pregunta: '¿Qué país comparte el Everest con Nepal?',
        respuestas: {
            res1: 'India',
            res2: 'Bután',
            res3: 'Pakistán',
            correcta: 'China'
        }
    },
    {
        pregunta: '¿Cuál es el océano donde se encuentra la fosa de las Marianas?',
        respuestas: {
            correcta: 'Pacífico',
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuál es el punto más profundo conocido de la superficie terrestre bajo el océano?',
        respuestas: {
            res1: 'Fosa de Tonga',
            correcta: 'Abismo Challenger',
            res2: 'Fosa de Java',
            res3: 'Fosa de Puerto Rico'
        }
    },
    {
        pregunta: '¿Dónde se encuentra el Abismo Challenger?',
        respuestas: {
            res1: 'Fosa de Tonga',
            res2: 'Fosa de Java',
            correcta: 'Fosa de las Marianas',
            res3: 'Fosa de Puerto Rico'
        }
    },
    {
        pregunta: '¿Cuál es la fosa oceánica más profunda conocida?',
        respuestas: {
            correcta: 'Fosa de las Marianas',
            res1: 'Fosa de Tonga',
            res2: 'Fosa de Japón',
            res3: 'Fosa de Java'
        }
    },
    {
        pregunta: '¿Cuál es la mayor isla del mundo que no se considera un continente?',
        respuestas: {
            res1: 'Nueva Guinea',
            correcta: 'Groenlandia',
            res2: 'Borneo',
            res3: 'Madagascar'
        }
    },
    {
        pregunta: '¿A qué país pertenece políticamente Groenlandia?',
        respuestas: {
            res1: 'Canadá',
            res2: 'Islandia',
            correcta: 'Dinamarca',
            res3: 'Noruega'
        }
    },
    {
        pregunta: '¿Cuál es la isla más grande del Mediterráneo?',
        respuestas: {
            res1: 'Cerdeña',
            res2: 'Chipre',
            res3: 'Córcega',
            correcta: 'Sicilia'
        }
    },
    {
        pregunta: '¿Cuál es el país insular más grande del Mediterráneo?',
        respuestas: {
            correcta: 'Chipre',
            res1: 'Malta',
            res2: 'Córcega',
            res3: 'Sicilia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Islandia?',
        respuestas: {
            res1: 'Oslo',
            correcta: 'Reikiavik',
            res2: 'Helsinki',
            res3: 'Estocolmo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Malta?',
        respuestas: {
            res1: 'Mdina',
            res2: 'Sliema',
            correcta: 'La Valeta',
            res3: 'Victoria'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chipre?',
        respuestas: {
            res1: 'Limassol',
            res2: 'Lárnaca',
            res3: 'Pafos',
            correcta: 'Nicosia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Croacia?',
        respuestas: {
            correcta: 'Zagreb',
            res1: 'Split',
            res2: 'Dubrovnik',
            res3: 'Rijeka'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Albania?',
        respuestas: {
            res1: 'Durrës',
            correcta: 'Tirana',
            res2: 'Vlorë',
            res3: 'Shkodër'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Montenegro?',
        respuestas: {
            res1: 'Budva',
            res2: 'Kotor',
            correcta: 'Podgorica',
            res3: 'Cetinje'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bosnia y Herzegovina?',
        respuestas: {
            res1: 'Mostar',
            res2: 'Banja Luka',
            res3: 'Tuzla',
            correcta: 'Sarajevo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Kosovo?',
        respuestas: {
            correcta: 'Pristina',
            res1: 'Prizren',
            res2: 'Peja',
            res3: 'Mitrovica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Macedonia del Norte?',
        respuestas: {
            res1: 'Ohrid',
            correcta: 'Skopie',
            res2: 'Bitola',
            res3: 'Kumanovo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Hungría?',
        respuestas: {
            res1: 'Debrecen',
            res2: 'Szeged',
            correcta: 'Budapest',
            res3: 'Pécs'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovaquia?',
        respuestas: {
            res1: 'Košice',
            res2: 'Prešov',
            res3: 'Žilina',
            correcta: 'Bratislava'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Eslovenia?',
        respuestas: {
            correcta: 'Liubliana',
            res1: 'Maribor',
            res2: 'Koper',
            res3: 'Celje'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Croacia?',
        respuestas: {
            res1: 'Split',
            correcta: 'Zagreb',
            res2: 'Dubrovnik',
            res3: 'Rijeka'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Serbia?',
        respuestas: {
            res1: 'Novi Sad',
            res2: 'Niš',
            correcta: 'Belgrado',
            res3: 'Subotica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Rumania?',
        respuestas: {
            res1: 'Cluj-Napoca',
            res2: 'Sibiu',
            res3: 'Brasov',
            correcta: 'Bucarest'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bulgaria?',
        respuestas: {
            correcta: 'Sofía',
            res1: 'Plovdiv',
            res2: 'Varna',
            res3: 'Burgas'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Georgia?',
        respuestas: {
            res1: 'Batumi',
            correcta: 'Tiflis',
            res2: 'Kutaisi',
            res3: 'Rustavi'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Armenia?',
        respuestas: {
            res1: 'Gyumri',
            res2: 'Vanadzor',
            correcta: 'Ereván',
            res3: 'Sevan'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Azerbaiyán?',
        respuestas: {
            res1: 'Ganja',
            res2: 'Sumqayit',
            res3: 'Shaki',
            correcta: 'Bakú'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Kazajistán?',
        respuestas: {
            correcta: 'Astaná',
            res1: 'Almaty',
            res2: 'Shymkent',
            res3: 'Karagandá'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uzbekistán?',
        respuestas: {
            res1: 'Samarcanda',
            correcta: 'Taskent',
            res2: 'Bujará',
            res3: 'Jiva'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Afganistán?',
        respuestas: {
            res1: 'Herat',
            res2: 'Kandahar',
            correcta: 'Kabul',
            res3: 'Mazar-i-Sharif'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Pakistán?',
        respuestas: {
            res1: 'Karachi',
            res2: 'Lahore',
            res3: 'Peshawar',
            correcta: 'Islamabad'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bangladés?',
        respuestas: {
            correcta: 'Daca',
            res1: 'Chittagong',
            res2: 'Khulna',
            res3: 'Rajshahi'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Sri Lanka?',
        respuestas: {
            res1: 'Colombo',
            correcta: 'Sri Jayawardenepura Kotte',
            res2: 'Kandy',
            res3: 'Galle'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Maldivas?',
        respuestas: {
            res1: 'Addu City',
            res2: 'Hulhumalé',
            correcta: 'Malé',
            res3: 'Fuvahmulah'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bután?',
        respuestas: {
            res1: 'Paro',
            res2: 'Punakha',
            res3: 'Phuentsholing',
            correcta: 'Timbu'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Myanmar?',
        respuestas: {
            correcta: 'Naipyidó',
            res1: 'Yangón',
            res2: 'Mandalay',
            res3: 'Bagan'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Laos?',
        respuestas: {
            res1: 'Luang Prabang',
            correcta: 'Vientián',
            res2: 'Pakse',
            res3: 'Savannakhet'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Camboya?',
        respuestas: {
            res1: 'Siem Reap',
            res2: 'Battambang',
            correcta: 'Nom Pen',
            res3: 'Sihanoukville'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Vietnam?',
        respuestas: {
            res1: 'Ho Chi Minh',
            res2: 'Da Nang',
            res3: 'Hue',
            correcta: 'Hanói'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Tailandia?',
        respuestas: {
            correcta: 'Bangkok',
            res1: 'Chiang Mai',
            res2: 'Phuket',
            res3: 'Pattaya'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Malasia?',
        respuestas: {
            res1: 'George Town',
            correcta: 'Kuala Lumpur',
            res2: 'Malaca',
            res3: 'Johor Bahru'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Singapur?',
        respuestas: {
            res1: 'Kuala Lumpur',
            res2: 'Yakarta',
            correcta: 'Singapur',
            res3: 'Bandar Seri Begawan'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Brunéi?',
        respuestas: {
            res1: 'Bandar Seri Begawan',
            res2: 'Kuala Lumpur',
            res3: 'Manila',
            correcta: 'Bandar Seri Begawan'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Filipinas?',
        respuestas: {
            correcta: 'Manila',
            res1: 'Cebú',
            res2: 'Dávao',
            res3: 'Baguio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Indonesia?',
        respuestas: {
            res1: 'Bandung',
            correcta: 'Yakarta',
            res2: 'Surabaya',
            res3: 'Medan'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Corea del Sur?',
        respuestas: {
            res1: 'Busan',
            res2: 'Incheon',
            correcta: 'Seúl',
            res3: 'Daegu'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Corea del Norte?',
        respuestas: {
            res1: 'Wonsan',
            res2: 'Hamhung',
            res3: 'Kaesong',
            correcta: 'Pionyang'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Mongolia?',
        respuestas: {
            correcta: 'Ulán Bator',
            res1: 'Erdenet',
            res2: 'Darkhan',
            res3: 'Karakorum'
        }
    },
    {
        pregunta: '¿Cuál es la capital de China?',
        respuestas: {
            res1: 'Shanghái',
            correcta: 'Pekín',
            res2: 'Cantón',
            res3: 'Shenzhen'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Japón?',
        respuestas: {
            res1: 'Osaka',
            res2: 'Kioto',
            res3: 'Hiroshima',
            correcta: 'Tokio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        respuestas: {
            correcta: 'Canberra',
            res1: 'Sídney',
            res2: 'Melbourne',
            res3: 'Brisbane'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nueva Zelanda?',
        respuestas: {
            res1: 'Auckland',
            correcta: 'Wellington',
            res2: 'Christchurch',
            res3: 'Hamilton'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Fiyi?',
        respuestas: {
            res1: 'Nadi',
            res2: 'Lautoka',
            correcta: 'Suva',
            res3: 'Labasa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Papúa Nueva Guinea?',
        respuestas: {
            res1: 'Lae',
            res2: 'Madang',
            res3: 'Mount Hagen',
            correcta: 'Port Moresby'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Samoa?',
        respuestas: {
            correcta: 'Apia',
            res1: 'Pago Pago',
            res2: 'Suva',
            res3: 'Nukuʻalofa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Tonga?',
        respuestas: {
            res1: 'Apia',
            correcta: 'Nukuʻalofa',
            res2: 'Suva',
            res3: 'Funafuti'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Tuvalu?',
        respuestas: {
            res1: 'Suva',
            res2: 'Apia',
            correcta: 'Funafuti',
            res3: 'Tarawa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Kiribati?',
        respuestas: {
            res1: 'Funafuti',
            res2: 'Apia',
            res3: 'Suva',
            correcta: 'Tarawa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Vanuatu?',
        respuestas: {
            correcta: 'Port Vila',
            res1: 'Suva',
            res2: 'Honiara',
            res3: 'Nouméa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de las Islas Salomón?',
        respuestas: {
            res1: 'Port Vila',
            correcta: 'Honiara',
            res2: 'Suva',
            res3: 'Apia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nueva Caledonia?',
        respuestas: {
            res1: 'Papeete',
            res2: 'Port Vila',
            correcta: 'Numea',
            res3: 'Suva'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Papúa Nueva Guinea?',
        respuestas: {
            res1: 'Lae',
            res2: 'Madang',
            res3: 'Goroka',
            correcta: 'Port Moresby'
        }
    },
    {
        pregunta: '¿Qué océano rodea principalmente las islas de Oceanía?',
        respuestas: {
            correcta: 'Pacífico',
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuál es el continente donde se encuentra Australia?',
        respuestas: {
            res1: 'Asia',
            correcta: 'Oceanía',
            res2: 'Europa',
            res3: 'África'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Estados Unidos?',
        respuestas: {
            res1: 'Nueva York',
            res2: 'Los Ángeles',
            correcta: 'Washington D. C.',
            res3: 'Chicago'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Montreal',
            res3: 'Vancouver',
            correcta: 'Ottawa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de México?',
        respuestas: {
            correcta: 'Ciudad de México',
            res1: 'Guadalajara',
            res2: 'Monterrey',
            res3: 'Puebla'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Cuba?',
        respuestas: {
            res1: 'Santiago de Cuba',
            correcta: 'La Habana',
            res2: 'Camagüey',
            res3: 'Varadero'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Jamaica?',
        respuestas: {
            res1: 'Montego Bay',
            res2: 'Spanish Town',
            correcta: 'Kingston',
            res3: 'Portmore'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Haití?',
        respuestas: {
            res1: 'Cap-Haïtien',
            res2: 'Gonaïves',
            res3: 'Jacmel',
            correcta: 'Puerto Príncipe'
        }
    },
    {
        pregunta: '¿Cuál es la capital de República Dominicana?',
        respuestas: {
            correcta: 'Santo Domingo',
            res1: 'Santiago',
            res2: 'Punta Cana',
            res3: 'La Romana'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bahamas?',
        respuestas: {
            res1: 'Freeport',
            correcta: 'Nassau',
            res2: 'George Town',
            res3: 'Marsh Harbour'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Barbados?',
        respuestas: {
            res1: 'Bridgetown',
            res2: 'Kingstown',
            correcta: 'Bridgetown',
            res3: 'Castries'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Trinidad y Tobago?',
        respuestas: {
            res1: 'San Fernando',
            res2: 'Scarborough',
            res3: 'Chaguanas',
            correcta: 'Puerto España'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Costa Rica?',
        respuestas: {
            correcta: 'San José',
            res1: 'Cartago',
            res2: 'Alajuela',
            res3: 'Heredia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Panamá?',
        respuestas: {
            res1: 'Colón',
            correcta: 'Ciudad de Panamá',
            res2: 'David',
            res3: 'Santiago'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nicaragua?',
        respuestas: {
            res1: 'León',
            res2: 'Granada',
            correcta: 'Managua',
            res3: 'Masaya'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Honduras?',
        respuestas: {
            res1: 'San Pedro Sula',
            res2: 'La Ceiba',
            res3: 'Choloma',
            correcta: 'Tegucigalpa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de El Salvador?',
        respuestas: {
            correcta: 'San Salvador',
            res1: 'Santa Ana',
            res2: 'San Miguel',
            res3: 'Soyapango'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Guatemala?',
        respuestas: {
            res1: 'Antigua Guatemala',
            correcta: 'Ciudad de Guatemala',
            res2: 'Quetzaltenango',
            res3: 'Escuintla'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Belice?',
        respuestas: {
            res1: 'Belmopán',
            res2: 'Belice City',
            correcta: 'Belmopán',
            res3: 'Orange Walk'
        }
    },
    {
        pregunta: '¿Cuál es el único país de Centroamérica cuyo idioma oficial es el inglés?',
        respuestas: {
            res1: 'Costa Rica',
            correcta: 'Belice',
            res2: 'Panamá',
            res3: 'Guatemala'
        }
    },
    {
        pregunta: '¿Qué país centroamericano conecta América del Norte y América del Sur?',
        respuestas: {
            res1: 'Costa Rica',
            res2: 'Nicaragua',
            res3: 'Guatemala',
            correcta: 'Panamá'
        }
    },
    {
        pregunta: '¿Qué canal interoceánico atraviesa Panamá?',
        respuestas: {
            correcta: 'Canal de Panamá',
            res1: 'Canal de Suez',
            res2: 'Canal de Kiel',
            res3: 'Canal de Corinto'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande de Centroamérica?',
        respuestas: {
            res1: 'Guatemala',
            correcta: 'Nicaragua',
            res2: 'Honduras',
            res3: 'Panamá'
        }
    },
    {
        pregunta: '¿Cuál es el lago más grande de Centroamérica?',
        respuestas: {
            res1: 'Lago Atitlán',
            res2: 'Lago Gatún',
            correcta: 'Lago de Nicaragua',
            res3: 'Lago Yojoa'
        }
    },
    {
        pregunta: '¿Cuál es el lago más grande de América del Sur?',
        respuestas: {
            correcta: 'Lago de Maracaibo',
            res1: 'Lago Titicaca',
            res2: 'Lago Poopó',
            res3: 'Lago Nahuel Huapi'
        }
    },
    {
        pregunta: '¿Cuál es el lago navegable más alto del mundo?',
        respuestas: {
            res1: 'Maracaibo',
            correcta: 'Titicaca',
            res2: 'Baikal',
            res3: 'Victoria'
        }
    },
    {
        pregunta: '¿Cuál es el país que comparte el lago Titicaca con Perú?',
        respuestas: {
            res1: 'Chile',
            res2: 'Ecuador',
            res3: 'Colombia',
            correcta: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bolivia?',
        respuestas: {
            correcta: 'Sucre',
            res1: 'La Paz',
            res2: 'Santa Cruz',
            res3: 'Cochabamba'
        }
    },
    {
        pregunta: '¿Cuál es la sede de gobierno de Bolivia?',
        respuestas: {
            res1: 'Sucre',
            correcta: 'La Paz',
            res2: 'Santa Cruz',
            res3: 'Cochabamba'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Perú?',
        respuestas: {
            res1: 'Cusco',
            res2: 'Arequipa',
            correcta: 'Lima',
            res3: 'Trujillo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Ecuador?',
        respuestas: {
            res1: 'Guayaquil',
            correcta: 'Quito',
            res2: 'Cuenca',
            res3: 'Manta'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            res1: 'Medellín',
            res2: 'Cali',
            res3: 'Cartagena',
            correcta: 'Bogotá'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Venezuela?',
        respuestas: {
            correcta: 'Caracas',
            res1: 'Maracaibo',
            res2: 'Valencia',
            res3: 'Barquisimeto'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Guyana?',
        respuestas: {
            res1: 'Linden',
            correcta: 'Georgetown',
            res2: 'New Amsterdam',
            res3: 'Bartica'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Surinam?',
        respuestas: {
            res1: 'Nieuw Nickerie',
            res2: 'Lelydorp',
            correcta: 'Paramaribo',
            res3: 'Albina'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuestas: {
            res1: 'Salto',
            res2: 'Colonia',
            res3: 'Punta del Este',
            correcta: 'Montevideo'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Paraguay?',
        respuestas: {
            correcta: 'Asunción',
            res1: 'Ciudad del Este',
            res2: 'Encarnación',
            res3: 'Luque'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            res1: 'Córdoba',
            correcta: 'Buenos Aires',
            res2: 'Rosario',
            res3: 'Mendoza'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chile?',
        respuestas: {
            res1: 'Valparaíso',
            res2: 'Concepción',
            correcta: 'Santiago',
            res3: 'Antofagasta'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Brasil?',
        respuestas: {
            res1: 'São Paulo',
            res2: 'Río de Janeiro',
            res3: 'Salvador',
            correcta: 'Brasilia'
        }
    }
],
[
    {
        pregunta: '¿Cuál es el planeta más grande del sistema solar?',
        respuestas: {
            res1: 'Saturno',
            res2: 'Neptuno',
            correcta: 'Júpiter',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿En qué año comenzó la Segunda Guerra Mundial?',
        respuestas: {
            res1: '1941',
            correcta: '1939',
            res2: '1937',
            res3: '1940'
        }
    },
    {
        pregunta: '¿Cuál es el elemento químico cuyo símbolo es Fe?',
        respuestas: {
            correcta: 'Hierro',
            res1: 'Flúor',
            res2: 'Fósforo',
            res3: 'Francio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Australia?',
        respuestas: {
            res1: 'Sídney',
            res2: 'Melbourne',
            res3: 'Perth',
            correcta: 'Canberra'
        }
    },
    {
        pregunta: '¿Qué órgano del cuerpo humano produce insulina?',
        respuestas: {
            res1: 'Hígado',
            correcta: 'Páncreas',
            res2: 'Riñón',
            res3: 'Estómago'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo de Europa?',
        respuestas: {
            correcta: 'Volga',
            res1: 'Danubio',
            res2: 'Rin',
            res3: 'Támesis'
        }
    },
    {
        pregunta: '¿Qué filósofo fue maestro de Alejandro Magno?',
        respuestas: {
            res1: 'Sócrates',
            res2: 'Platón',
            correcta: 'Aristóteles',
            res3: 'Pitágoras'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15 × 12?',
        respuestas: {
            res1: '160',
            correcta: '180',
            res2: '175',
            res3: '190'
        }
    },
    {
        pregunta: '¿Qué país tiene forma aproximada de bota?',
        respuestas: {
            res1: 'Grecia',
            res2: 'España',
            res3: 'Portugal',
            correcta: 'Italia'
        }
    },
    {
        pregunta: '¿Cuál es el metal líquido a temperatura ambiente?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Plomo',
            res2: 'Galio',
            res3: 'Estaño'
        }
    },
    {
        pregunta: '¿Quién escribió "Cien años de soledad"?',
        respuestas: {
            res1: 'Mario Vargas Llosa',
            correcta: 'Gabriel García Márquez',
            res2: 'Julio Cortázar',
            res3: 'Jorge Luis Borges'
        }
    },
    {
        pregunta: '¿Cuál es la unidad básica de la herencia biológica?',
        respuestas: {
            res1: 'Célula',
            res2: 'Cromosoma',
            correcta: 'Gen',
            res3: 'Proteína'
        }
    },
    {
        pregunta: '¿Qué océano es el más grande del planeta?',
        respuestas: {
            res1: 'Atlántico',
            correcta: 'Pacífico',
            res2: 'Índico',
            res3: 'Ártico'
        }
    },
    {
        pregunta: '¿Cuánto es la raíz cuadrada de 144?',
        respuestas: {
            correcta: '12',
            res1: '14',
            res2: '11',
            res3: '16'
        }
    },
    {
        pregunta: '¿Qué civilización construyó Machu Picchu?',
        respuestas: {
            res1: 'Azteca',
            res2: 'Maya',
            correcta: 'Inca',
            res3: 'Olmeca'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del potasio?',
        respuestas: {
            res1: 'P',
            correcta: 'K',
            res2: 'Po',
            res3: 'Pt'
        }
    },
    {
        pregunta: '¿Qué planeta tiene los anillos más visibles del sistema solar?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Urano',
            correcta: 'Saturno',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Montreal',
            res3: 'Vancouver',
            correcta: 'Ottawa'
        }
    },
    {
        pregunta: '¿Qué científico formuló las tres leyes del movimiento?',
        respuestas: {
            res1: 'Albert Einstein',
            correcta: 'Isaac Newton',
            res2: 'Galileo Galilei',
            res3: 'Johannes Kepler'
        }
    },
    {
        pregunta: '¿Cuál es el continente con mayor superficie?',
        respuestas: {
            correcta: 'Asia',
            res1: 'África',
            res2: 'América',
            res3: 'Europa'
        }
    },
    {
        pregunta: '¿Qué gas constituye aproximadamente el 78% de la atmósfera terrestre?',
        respuestas: {
            res1: 'Oxígeno',
            correcta: 'Nitrógeno',
            res2: 'Dióxido de carbono',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Cuál es el hueso más largo del cuerpo humano?',
        respuestas: {
            res1: 'Tibia',
            res2: 'Húmero',
            correcta: 'Fémur',
            res3: 'Radio'
        }
    },
    {
        pregunta: '¿Quién pintó la obra "La noche estrellada"?',
        respuestas: {
            correcta: 'Vincent van Gogh',
            res1: 'Pablo Picasso',
            res2: 'Claude Monet',
            res3: 'Salvador Dalí'
        }
    },
    {
        pregunta: '¿Cuál es el país más grande del mundo por superficie?',
        respuestas: {
            res1: 'Canadá',
            correcta: 'Rusia',
            res2: 'China',
            res3: 'Estados Unidos'
        }
    },
    {
        pregunta: '¿Qué instrumento se utiliza para medir la presión atmosférica?',
        respuestas: {
            res1: 'Termómetro',
            res2: 'Higrómetro',
            correcta: 'Barómetro',
            res3: 'Anemómetro'
        }
    },
    {
        pregunta: '¿Qué planeta es conocido como el planeta rojo?',
        respuestas: {
            res1: 'Venus',
            res2: 'Mercurio',
            res3: 'Júpiter',
            correcta: 'Marte'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Japón?',
        respuestas: {
            correcta: 'Tokio',
            res1: 'Kioto',
            res2: 'Osaka',
            res3: 'Hiroshima'
        }
    },
    {
        pregunta: '¿Qué científico propuso la teoría de la relatividad?',
        respuestas: {
            res1: 'Isaac Newton',
            correcta: 'Albert Einstein',
            res2: 'Niels Bohr',
            res3: 'Stephen Hawking'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 25²?',
        respuestas: {
            res1: '525',
            res2: '600',
            correcta: '625',
            res3: '650'
        }
    },
    {
        pregunta: '¿Qué país regaló la Estatua de la Libertad a Estados Unidos?',
        respuestas: {
            correcta: 'Francia',
            res1: 'España',
            res2: 'Reino Unido',
            res3: 'Italia'
        }
    },
    {
        pregunta: '¿Cuál es el órgano encargado principalmente de filtrar la sangre?',
        respuestas: {
            res1: 'Pulmones',
            correcta: 'Riñones',
            res2: 'Corazón',
            res3: 'Páncreas'
        }
    },
    {
        pregunta: '¿Qué lengua tiene más hablantes nativos en el mundo?',
        respuestas: {
            res1: 'Inglés',
            res2: 'Español',
            correcta: 'Chino mandarín',
            res3: 'Hindi'
        }
    },
    {
        pregunta: '¿Quién fue el primer ser humano en viajar al espacio?',
        respuestas: {
            correcta: 'Yuri Gagarin',
            res1: 'Neil Armstrong',
            res2: 'Buzz Aldrin',
            res3: 'John Glenn'
        }
    },
    {
        pregunta: '¿Cuál es el número primo inmediatamente posterior a 29?',
        respuestas: {
            res1: '30',
            correcta: '31',
            res2: '33',
            res3: '35'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Estocolmo?',
        respuestas: {
            res1: 'Noruega',
            res2: 'Finlandia',
            correcta: 'Suecia',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Qué parte de la célula contiene principalmente el material genético?',
        respuestas: {
            correcta: 'Núcleo',
            res1: 'Ribosoma',
            res2: 'Citoplasma',
            res3: 'Membrana'
        }
    },
    {
        pregunta: '¿Cuál es el desierto cálido más grande del mundo?',
        respuestas: {
            res1: 'Gobi',
            correcta: 'Sahara',
            res2: 'Atacama',
            res3: 'Kalahari'
        }
    },
    {
        pregunta: '¿Qué compositor creó la Novena Sinfonía?',
        respuestas: {
            res1: 'Mozart',
            correcta: 'Beethoven',
            res2: 'Bach',
            res3: 'Vivaldi'
        }
    },
    {
        pregunta: '¿Cuántos lados tiene un dodecágono?',
        respuestas: {
            correcta: '12',
            res1: '10',
            res2: '11',
            res3: '14'
        }
    },
    {
        pregunta: '¿Qué país fue conocido antiguamente como Persia?',
        respuestas: {
            res1: 'Irak',
            correcta: 'Irán',
            res2: 'Siria',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Qué vitamina se produce principalmente en la piel mediante la exposición al sol?',
        respuestas: {
            res1: 'Vitamina A',
            res2: 'Vitamina C',
            correcta: 'Vitamina D',
            res3: 'Vitamina K'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Egipto?',
        respuestas: {
            res1: 'Alejandría',
            correcta: 'El Cairo',
            res2: 'Giza',
            res3: 'Luxor'
        }
    },
    {
        pregunta: '¿Qué rama de la ciencia estudia los terremotos?',
        respuestas: {
            correcta: 'Sismología',
            res1: 'Meteorología',
            res2: 'Geodesia',
            res3: 'Vulcanología'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7 × 8 + 12?',
        respuestas: {
            res1: '64',
            correcta: '68',
            res2: '72',
            res3: '76'
        }
    },
    {
        pregunta: '¿Qué país posee la ciudad de Estambul?',
        respuestas: {
            res1: 'Grecia',
            correcta: 'Turquía',
            res2: 'Bulgaria',
            res3: 'Rumania'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más cercano al Sol?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Venus',
            res2: 'Marte',
            res3: 'Tierra'
        }
    },
    {
        pregunta: '¿Quién escribió "Don Quijote de la Mancha"?',
        respuestas: {
            res1: 'Lope de Vega',
            correcta: 'Miguel de Cervantes',
            res2: 'Francisco de Quevedo',
            res3: 'Garcilaso de la Vega'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del oro?',
        respuestas: {
            res1: 'Or',
            correcta: 'Au',
            res2: 'Ag',
            res3: 'Go'
        }
    },
    {
        pregunta: '¿Qué país tiene la mayor cantidad de población de Sudamérica?',
        respuestas: {
            correcta: 'Brasil',
            res1: 'Colombia',
            res2: 'Argentina',
            res3: 'Perú'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Alemania?',
        respuestas: {
            res1: 'Múnich',
            res2: 'Hamburgo',
            correcta: 'Berlín',
            res3: 'Frankfurt'
        }
    },
    {
        pregunta: '¿Qué proceso utilizan las plantas para transformar la luz en energía química?',
        respuestas: {
            res1: 'Respiración',
            correcta: 'Fotosíntesis',
            res2: 'Fermentación',
            res3: 'Transpiración'
        }
    },
    {
        pregunta: '¿Cuántos huesos tiene aproximadamente un adulto humano?',
        respuestas: {
            res1: '186',
            correcta: '206',
            res2: '216',
            res3: '226'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lisboa?',
        respuestas: {
            correcta: 'Portugal',
            res1: 'España',
            res2: 'Italia',
            res3: 'Grecia'
        }
    },
    {
        pregunta: '¿Qué astrónomo defendió el modelo heliocéntrico del sistema solar?',
        respuestas: {
            res1: 'Ptolomeo',
            correcta: 'Nicolás Copérnico',
            res2: 'Tycho Brahe',
            res3: 'Aristóteles'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 144 ÷ 12?',
        respuestas: {
            res1: '10',
            correcta: '12',
            res2: '14',
            res3: '16'
        }
    },
    {
        pregunta: '¿Qué continente está atravesado por el ecuador y el meridiano de Greenwich?',
        respuestas: {
            res1: 'Asia',
            correcta: 'África',
            res2: 'América',
            res3: 'Europa'
        }
    },
    {
        pregunta: '¿Cuál es el órgano principal del sistema circulatorio?',
        respuestas: {
            correcta: 'Corazón',
            res1: 'Pulmón',
            res2: 'Hígado',
            res3: 'Cerebro'
        }
    },
    {
        pregunta: '¿Qué país construyó históricamente el Coliseo de Roma?',
        respuestas: {
            res1: 'Grecia',
            correcta: 'Italia',
            res2: 'Francia',
            res3: 'España'
        }
    },
    {
        pregunta: '¿Cuál es la fórmula química del agua?',
        respuestas: {
            res1: 'CO₂',
            correcta: 'H₂O',
            res2: 'O₂',
            res3: 'H₂O₂'
        }
    },
    {
        pregunta: '¿Cuál es el idioma oficial de Brasil?',
        respuestas: {
            correcta: 'Portugués',
            res1: 'Español',
            res2: 'Francés',
            res3: 'Inglés'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la penicilina?',
        respuestas: {
            res1: 'Louis Pasteur',
            correcta: 'Alexander Fleming',
            res2: 'Robert Koch',
            res3: 'Edward Jenner'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Grecia?',
        respuestas: {
            res1: 'Esparta',
            correcta: 'Atenas',
            res2: 'Corinto',
            res3: 'Salónica'
        }
    },
    {
        pregunta: '¿Qué planeta posee la Gran Mancha Roja?',
        respuestas: {
            correcta: 'Júpiter',
            res1: 'Saturno',
            res2: 'Marte',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18²?',
        respuestas: {
            res1: '314',
            correcta: '324',
            res2: '328',
            res3: '342'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Viena?',
        respuestas: {
            res1: 'Suiza',
            correcta: 'Austria',
            res2: 'Hungría',
            res3: 'República Checa'
        }
    },
    {
        pregunta: '¿Qué científico formuló la teoría de la evolución mediante selección natural?',
        respuestas: {
            correcta: 'Charles Darwin',
            res1: 'Gregor Mendel',
            res2: 'Alfred Wegener',
            res3: 'Antonie van Leeuwenhoek'
        }
    },
    {
        pregunta: '¿Cuál es el órgano más grande del cuerpo humano?',
        respuestas: {
            res1: 'Hígado',
            correcta: 'Piel',
            res2: 'Pulmón',
            res3: 'Intestino'
        }
    },
    {
        pregunta: '¿Qué mar separa Europa de África?',
        respuestas: {
            correcta: 'Mar Mediterráneo',
            res1: 'Mar Negro',
            res2: 'Mar Rojo',
            res3: 'Mar Báltico'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 9³?',
        respuestas: {
            res1: '729',
            correcta: '729',
            res2: '693',
            res3: '819'
        }
    },
    {
        pregunta: '¿Quién escribió "La Odisea"?',
        respuestas: {
            res1: 'Sófocles',
            correcta: 'Homero',
            res2: 'Virgilio',
            res3: 'Heródoto'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico de la plata?',
        respuestas: {
            res1: 'Pt',
            correcta: 'Ag',
            res2: 'Au',
            res3: 'Pb'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Budapest?',
        respuestas: {
            res1: 'Rumania',
            correcta: 'Hungría',
            res2: 'Serbia',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Qué estructura celular produce gran parte de la energía de la célula?',
        respuestas: {
            correcta: 'Mitocondria',
            res1: 'Núcleo',
            res2: 'Ribosoma',
            res3: 'Lisosoma'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta de África?',
        respuestas: {
            res1: 'Monte Kenia',
            correcta: 'Kilimanjaro',
            res2: 'Atlas',
            res3: 'Ruwenzori'
        }
    },
    {
        pregunta: '¿Cuál es el país de origen de los Juegos Olímpicos antiguos?',
        respuestas: {
            correcta: 'Grecia',
            res1: 'Italia',
            res2: 'Egipto',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Qué planeta tiene un día más largo que su año?',
        respuestas: {
            res1: 'Mercurio',
            correcta: 'Venus',
            res2: 'Marte',
            res3: 'Saturno'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Noruega?',
        respuestas: {
            res1: 'Bergen',
            correcta: 'Oslo',
            res2: 'Estocolmo',
            res3: 'Helsinki'
        }
    },
    {
        pregunta: '¿Qué científico desarrolló las leyes de la herencia genética?',
        respuestas: {
            res1: 'Darwin',
            correcta: 'Gregor Mendel',
            res2: 'Watson',
            res3: 'Pasteur'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17 × 13?',
        respuestas: {
            res1: '211',
            correcta: '221',
            res2: '231',
            res3: '241'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Praga?',
        respuestas: {
            correcta: 'República Checa',
            res1: 'Eslovaquia',
            res2: 'Polonia',
            res3: 'Austria'
        }
    },
    {
        pregunta: '¿Cuál es la estrella más cercana a la Tierra después del Sol?',
        respuestas: {
            res1: 'Sirio',
            correcta: 'Próxima Centauri',
            res2: 'Betelgeuse',
            res3: 'Vega'
        }
    },
    {
        pregunta: '¿Qué órgano controla principalmente el equilibrio del cuerpo?',
        respuestas: {
            correcta: 'Cerebelo',
            res1: 'Hipotálamo',
            res2: 'Hipocampo',
            res3: 'Bulbo raquídeo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2⁵?',
        respuestas: {
            res1: '16',
            correcta: '32',
            res2: '64',
            res3: '25'
        }
    },
    {
        pregunta: '¿Quién pintó "Guernica"?',
        respuestas: {
            correcta: 'Pablo Picasso',
            res1: 'Salvador Dalí',
            res2: 'Joan Miró',
            res3: 'Diego Velázquez'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Nueva Zelanda?',
        respuestas: {
            res1: 'Auckland',
            correcta: 'Wellington',
            res2: 'Christchurch',
            res3: 'Hamilton'
        }
    },
    {
        pregunta: '¿Qué gas es necesario para la respiración humana?',
        respuestas: {
            correcta: 'Oxígeno',
            res1: 'Nitrógeno',
            res2: 'Helio',
            res3: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Qué país construyó el canal que conecta el Mediterráneo con el mar Rojo?',
        respuestas: {
            res1: 'Panamá',
            correcta: 'Egipto',
            res2: 'Israel',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Zúrich',
            correcta: 'Berna',
            res2: 'Ginebra',
            res3: 'Basilea'
        }
    },
    {
        pregunta: '¿Qué número sigue en la secuencia 2, 4, 8, 16, ...?',
        respuestas: {
            correcta: '32',
            res1: '24',
            res2: '30',
            res3: '36'
        }
    },
    {
        pregunta: '¿Cuál es el componente principal del Sol?',
        respuestas: {
            res1: 'Oxígeno',
            correcta: 'Hidrógeno',
            res2: 'Carbono',
            res3: 'Helio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Dublín?',
        respuestas: {
            correcta: 'Irlanda',
            res1: 'Escocia',
            res2: 'Gales',
            res3: 'Islandia'
        }
    },
    {
        pregunta: '¿Cuál es la velocidad aproximada de la luz en el vacío?',
        respuestas: {
            res1: '30.000 km/s',
            correcta: '300.000 km/s',
            res2: '3.000.000 km/s',
            res3: '150.000 km/s'
        }
    },
    {
        pregunta: '¿Qué parte del cerebro participa especialmente en la memoria y el aprendizaje?',
        respuestas: {
            correcta: 'Hipocampo',
            res1: 'Cerebelo',
            res2: 'Tálamo',
            res3: 'Médula espinal'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Bélgica?',
        respuestas: {
            res1: 'Brujas',
            correcta: 'Bruselas',
            res2: 'Amberes',
            res3: 'Gante'
        }
    },
    {
        pregunta: '¿Qué filósofo escribió "La República"?',
        respuestas: {
            res1: 'Aristóteles',
            correcta: 'Platón',
            res2: 'Sócrates',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 125 ÷ 5?',
        respuestas: {
            correcta: '25',
            res1: '20',
            res2: '30',
            res3: '35'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Seúl?',
        respuestas: {
            correcta: 'Corea del Sur',
            res1: 'Corea del Norte',
            res2: 'Japón',
            res3: 'China'
        }
    },
    {
        pregunta: '¿Qué tipo de animal es una ballena?',
        respuestas: {
            res1: 'Pez',
            correcta: 'Mamífero',
            res2: 'Anfibio',
            res3: 'Reptil'
        }
    },
    {
        pregunta: '¿Cuál es el río que atraviesa Egipto y desemboca en el Mediterráneo?',
        respuestas: {
            correcta: 'Nilo',
            res1: 'Amazonas',
            res2: 'Éufrates',
            res3: 'Tigris'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Varsovia?',
        respuestas: {
            res1: 'Ucrania',
            correcta: 'Polonia',
            res2: 'Lituania',
            res3: 'Bielorrusia'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la resistencia eléctrica?',
        respuestas: {
            res1: 'Voltio',
            correcta: 'Ohmio',
            res2: 'Amperio',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 14 × 15?',
        respuestas: {
            res1: '200',
            correcta: '210',
            res2: '220',
            res3: '230'
        }
    },
    {
        pregunta: '¿Quién fue conocido como el Libertador de gran parte de Sudamérica?',
        respuestas: {
            correcta: 'Simón Bolívar',
            res1: 'José de San Martín',
            res2: 'Francisco de Paula Santander',
            res3: 'Antonio Nariño'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Moscú?',
        respuestas: {
            correcta: 'Rusia',
            res1: 'Ucrania',
            res2: 'Kazajistán',
            res3: 'Georgia'
        }
    },
    {
        pregunta: '¿Cuál es el proceso por el cual una célula se divide en dos células hijas idénticas?',
        respuestas: {
            res1: 'Meiosis',
            correcta: 'Mitosis',
            res2: 'Fecundación',
            res3: 'Mutación'
        }
    },
    {
        pregunta: '¿Cuál es el continente con mayor número de países?',
        respuestas: {
            res1: 'Asia',
            correcta: 'África',
            res2: 'Europa',
            res3: 'América'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el número atómico 1?',
        respuestas: {
            correcta: 'Hidrógeno',
            res1: 'Helio',
            res2: 'Oxígeno',
            res3: 'Litio'
        }
    },
    {
        pregunta: '¿Cuál es la capital de India?',
        respuestas: {
            res1: 'Bombay',
            correcta: 'Nueva Delhi',
            res2: 'Calcuta',
            res3: 'Bangalore'
        }
    },
    {
        pregunta: '¿Qué escritor colombiano recibió el Premio Nobel de Literatura?',
        respuestas: {
            correcta: 'Gabriel García Márquez',
            res1: 'Álvaro Mutis',
            res2: 'Jorge Isaacs',
            res3: 'Fernando Vallejo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 19 × 11?',
        respuestas: {
            res1: '199',
            correcta: '209',
            res2: '219',
            res3: '229'
        }
    },
    {
        pregunta: '¿Qué planeta gira prácticamente de lado respecto a su órbita?',
        respuestas: {
            res1: 'Saturno',
            correcta: 'Urano',
            res2: 'Neptuno',
            res3: 'Venus'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Argentina?',
        respuestas: {
            correcta: 'Buenos Aires',
            res1: 'Córdoba',
            res2: 'Rosario',
            res3: 'Mendoza'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la radiactividad natural?',
        respuestas: {
            res1: 'Marie Curie',
            correcta: 'Henri Becquerel',
            res2: 'Ernest Rutherford',
            res3: 'J. J. Thomson'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 225 ÷ 15?',
        respuestas: {
            res1: '12',
            correcta: '15',
            res2: '18',
            res3: '20'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lima?',
        respuestas: {
            correcta: 'Perú',
            res1: 'Ecuador',
            res2: 'Bolivia',
            res3: 'Chile'
        }
    },
    {
        pregunta: '¿Cuál es el océano que rodea principalmente la Antártida?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Pacífico',
            correcta: 'Océano Austral',
            res3: 'Índico'
        }
    },
    {
        pregunta: '¿Qué órgano produce la bilis?',
        respuestas: {
            correcta: 'Hígado',
            res1: 'Páncreas',
            res2: 'Estómago',
            res3: 'Riñón'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Chile?',
        respuestas: {
            res1: 'Valparaíso',
            correcta: 'Santiago',
            res2: 'Concepción',
            res3: 'Antofagasta'
        }
    },
    {
        pregunta: '¿Qué matemático es asociado con el famoso teorema a² + b² = c²?',
        respuestas: {
            correcta: 'Pitágoras',
            res1: 'Euclides',
            res2: 'Arquímedes',
            res3: 'Tales'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 13² + 4²?',
        respuestas: {
            res1: '169',
            correcta: '185',
            res2: '181',
            res3: '195'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Quito?',
        respuestas: {
            correcta: 'Ecuador',
            res1: 'Colombia',
            res2: 'Perú',
            res3: 'Bolivia'
        }
    },
    {
        pregunta: '¿Cuál es la molécula que transporta oxígeno principalmente en la sangre?',
        respuestas: {
            res1: 'Insulina',
            correcta: 'Hemoglobina',
            res2: 'Colágeno',
            res3: 'Queratina'
        }
    },
    {
        pregunta: '¿Qué guerra terminó con el Tratado de Versalles?',
        respuestas: {
            correcta: 'Primera Guerra Mundial',
            res1: 'Segunda Guerra Mundial',
            res2: 'Guerra de Crimea',
            res3: 'Guerra Franco-Prusiana'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Colombia?',
        respuestas: {
            res1: 'Medellín',
            correcta: 'Bogotá',
            res2: 'Cali',
            res3: 'Cartagena'
        }
    },
    {
        pregunta: '¿Qué científico desarrolló una teoría sobre la estructura del átomo con niveles de energía?',
        respuestas: {
            correcta: 'Niels Bohr',
            res1: 'Isaac Newton',
            res2: 'Charles Darwin',
            res3: 'Louis Pasteur'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 16 × 17?',
        respuestas: {
            res1: '252',
            correcta: '272',
            res2: '282',
            res3: '292'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Caracas?',
        respuestas: {
            correcta: 'Venezuela',
            res1: 'Colombia',
            res2: 'Guyana',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Cuál es la capa de la atmósfera donde ocurre la mayoría de los fenómenos meteorológicos?',
        respuestas: {
            correcta: 'Troposfera',
            res1: 'Estratosfera',
            res2: 'Mesosfera',
            res3: 'Termosfera'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la velocidad del viento?',
        respuestas: {
            res1: 'Barómetro',
            correcta: 'Anemómetro',
            res2: 'Higrómetro',
            res3: 'Pluviómetro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 21 × 14?',
        respuestas: {
            res1: '284',
            correcta: '294',
            res2: '304',
            res3: '314'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a La Paz?',
        respuestas: {
            correcta: 'Bolivia',
            res1: 'Perú',
            res2: 'Paraguay',
            res3: 'Ecuador'
        }
    },
    {
        pregunta: '¿Qué parte de la planta absorbe principalmente agua y minerales del suelo?',
        respuestas: {
            res1: 'Tallo',
            correcta: 'Raíz',
            res2: 'Hoja',
            res3: 'Flor'
        }
    },
    {
        pregunta: '¿Cuál es el principal componente de los diamantes?',
        respuestas: {
            correcta: 'Carbono',
            res1: 'Silicio',
            res2: 'Hierro',
            res3: 'Calcio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Asunción?',
        respuestas: {
            res1: 'Uruguay',
            correcta: 'Paraguay',
            res2: 'Bolivia',
            res3: 'Argentina'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 27 × 9?',
        respuestas: {
            res1: '233',
            correcta: '243',
            res2: '253',
            res3: '263'
        }
    },
    {
        pregunta: '¿Qué civilización desarrolló un sistema de escritura jeroglífica en Mesoamérica?',
        respuestas: {
            res1: 'Inca',
            correcta: 'Maya',
            res2: 'Romana',
            res3: 'Persa'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Uruguay?',
        respuestas: {
            correcta: 'Montevideo',
            res1: 'Salto',
            res2: 'Punta del Este',
            res3: 'Colonia del Sacramento'
        }
    },
    {
        pregunta: '¿Qué partícula subatómica tiene carga negativa?',
        respuestas: {
            res1: 'Protón',
            correcta: 'Electrón',
            res2: 'Neutrón',
            res3: 'Positrón'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18 × 14?',
        respuestas: {
            res1: '242',
            correcta: '252',
            res2: '262',
            res3: '272'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Brasilia?',
        respuestas: {
            correcta: 'Brasil',
            res1: 'Argentina',
            res2: 'Portugal',
            res3: 'México'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del proceso mediante el cual el agua pasa de líquido a vapor?',
        respuestas: {
            res1: 'Condensación',
            correcta: 'Evaporación',
            res2: 'Solidificación',
            res3: 'Sublimación'
        }
    },
    {
        pregunta: '¿Quién escribió "1984"?',
        respuestas: {
            res1: 'Aldous Huxley',
            correcta: 'George Orwell',
            res2: 'Ray Bradbury',
            res3: 'Ernest Hemingway'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 23 × 12?',
        respuestas: {
            res1: '266',
            correcta: '276',
            res2: '286',
            res3: '296'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a México?',
        respuestas: {
            correcta: 'México',
            res1: 'Guatemala',
            res2: 'España',
            res3: 'Cuba'
        }
    },
    {
        pregunta: '¿Cuál es el satélite natural de la Tierra?',
        respuestas: {
            res1: 'Fobos',
            correcta: 'La Luna',
            res2: 'Europa',
            res3: 'Titán'
        }
    },
    {
        pregunta: '¿Qué científico es conocido por sus trabajos sobre electricidad y magnetismo?',
        respuestas: {
            correcta: 'Michael Faraday',
            res1: 'Gregor Mendel',
            res2: 'Charles Darwin',
            res3: 'Robert Hooke'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 24 × 13?',
        respuestas: {
            res1: '302',
            correcta: '312',
            res2: '322',
            res3: '332'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Hanoi?',
        respuestas: {
            correcta: 'Vietnam',
            res1: 'Tailandia',
            res2: 'Camboya',
            res3: 'Laos'
        }
    },
    {
        pregunta: '¿Qué estructura del oído interno ayuda principalmente al equilibrio?',
        respuestas: {
            res1: 'Cóclea',
            correcta: 'Canales semicirculares',
            res2: 'Tímpano',
            res3: 'Martillo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 32 × 8?',
        respuestas: {
            res1: '246',
            correcta: '256',
            res2: '266',
            res3: '276'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bangkok?',
        respuestas: {
            res1: 'Vietnam',
            correcta: 'Tailandia',
            res2: 'Malasia',
            res3: 'Camboya'
        }
    },
    {
        pregunta: '¿Qué tipo de enlace químico se forma cuando dos átomos comparten electrones?',
        respuestas: {
            correcta: 'Enlace covalente',
            res1: 'Enlace iónico',
            res2: 'Enlace metálico',
            res3: 'Enlace nuclear'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 35 × 12?',
        respuestas: {
            res1: '410',
            correcta: '420',
            res2: '430',
            res3: '440'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Manila?',
        respuestas: {
            correcta: 'Filipinas',
            res1: 'Indonesia',
            res2: 'Malasia',
            res3: 'Singapur'
        }
    },
    {
        pregunta: '¿Qué científico formuló el principio de incertidumbre?',
        respuestas: {
            res1: 'Niels Bohr',
            correcta: 'Werner Heisenberg',
            res2: 'Max Planck',
            res3: 'Erwin Schrödinger'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 45²?',
        respuestas: {
            res1: '1925',
            correcta: '2025',
            res2: '2125',
            res3: '2225'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Yakarta?',
        respuestas: {
            correcta: 'Indonesia',
            res1: 'Malasia',
            res2: 'Filipinas',
            res3: 'Singapur'
        }
    },
    {
        pregunta: '¿Cuál es el órgano responsable de intercambiar oxígeno y dióxido de carbono?',
        respuestas: {
            res1: 'Corazón',
            correcta: 'Pulmones',
            res2: 'Hígado',
            res3: 'Riñones'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Helsinki?',
        respuestas: {
            correcta: 'Finlandia',
            res1: 'Suecia',
            res2: 'Noruega',
            res3: 'Islandia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 48 ÷ 6 × 3?',
        respuestas: {
            correcta: '24',
            res1: '8',
            res2: '18',
            res3: '30'
        }
    },
    {
        pregunta: '¿Qué escritor escribió "La metamorfosis"?',
        respuestas: {
            res1: 'Albert Camus',
            correcta: 'Franz Kafka',
            res2: 'Fiódor Dostoyevski',
            res3: 'León Tolstói'
        }
    },
    {
        pregunta: '¿Cuál es el país más pequeño del mundo por superficie?',
        respuestas: {
            res1: 'Mónaco',
            correcta: 'Ciudad del Vaticano',
            res2: 'San Marino',
            res3: 'Liechtenstein'
        }
    },
    {
        pregunta: '¿Qué planeta es el segundo más grande del sistema solar?',
        respuestas: {
            res1: 'Júpiter',
            correcta: 'Saturno',
            res2: 'Neptuno',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 75% de 200?',
        respuestas: {
            res1: '125',
            correcta: '150',
            res2: '175',
            res3: '180'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Reikiavik?',
        respuestas: {
            correcta: 'Islandia',
            res1: 'Noruega',
            res2: 'Finlandia',
            res3: 'Dinamarca'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del pigmento que da el color verde a las plantas?',
        respuestas: {
            res1: 'Melanina',
            correcta: 'Clorofila',
            res2: 'Hemoglobina',
            res3: 'Caroteno'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Zagreb?',
        respuestas: {
            res1: 'Serbia',
            correcta: 'Croacia',
            res2: 'Eslovenia',
            res3: 'Bosnia y Herzegovina'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11³?',
        respuestas: {
            res1: '121',
            correcta: '1331',
            res2: '1111',
            res3: '1441'
        }
    },
    {
        pregunta: '¿Qué instrumento óptico permite observar objetos muy pequeños?',
        respuestas: {
            correcta: 'Microscopio',
            res1: 'Telescopio',
            res2: 'Periscopio',
            res3: 'Estetoscopio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Belgrado?',
        respuestas: {
            correcta: 'Serbia',
            res1: 'Croacia',
            res2: 'Bulgaria',
            res3: 'Eslovenia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3/4 de 120?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué capa de la Tierra está formada principalmente por hierro y níquel?',
        respuestas: {
            res1: 'Corteza',
            res2: 'Manto',
            correcta: 'Núcleo',
            res3: 'Litosfera'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Sofía?',
        respuestas: {
            res1: 'Rumania',
            correcta: 'Bulgaria',
            res2: 'Serbia',
            res3: 'Albania'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17 × 18?',
        respuestas: {
            res1: '296',
            correcta: '306',
            res2: '316',
            res3: '326'
        }
    },
    {
        pregunta: '¿Quién compuso "Las cuatro estaciones"?',
        respuestas: {
            correcta: 'Antonio Vivaldi',
            res1: 'Johann Sebastian Bach',
            res2: 'Wolfgang Mozart',
            res3: 'Frédéric Chopin'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bucarest?',
        respuestas: {
            correcta: 'Rumania',
            res1: 'Hungría',
            res2: 'Bulgaria',
            res3: 'Serbia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 13 × 19?',
        respuestas: {
            res1: '237',
            correcta: '247',
            res2: '257',
            res3: '267'
        }
    },
    {
        pregunta: '¿Qué metal tiene el símbolo químico Hg?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Magnesio',
            res2: 'Manganeso',
            res3: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Atenas?',
        respuestas: {
            correcta: 'Grecia',
            res1: 'Chipre',
            res2: 'Albania',
            res3: 'Turquía'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 64 ÷ 8 + 7?',
        respuestas: {
            res1: '8',
            correcta: '15',
            res2: '16',
            res3: '17'
        }
    },
    {
        pregunta: '¿Qué científico descubrió los rayos X?',
        respuestas: {
            res1: 'Marie Curie',
            correcta: 'Wilhelm Röntgen',
            res2: 'Ernest Rutherford',
            res3: 'J. J. Thomson'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Tirana?',
        respuestas: {
            correcta: 'Albania',
            res1: 'Kosovo',
            res2: 'Montenegro',
            res3: 'Macedonia del Norte'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 22 × 16?',
        respuestas: {
            res1: '342',
            correcta: '352',
            res2: '362',
            res3: '372'
        }
    },
    {
        pregunta: '¿Qué molécula contiene la información genética de la mayoría de los seres vivos?',
        respuestas: {
            res1: 'ARN',
            correcta: 'ADN',
            res2: 'ATP',
            res3: 'Glucosa'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Liubliana?',
        respuestas: {
            correcta: 'Eslovenia',
            res1: 'Eslovaquia',
            res2: 'Croacia',
            res3: 'Serbia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 31 × 7?',
        respuestas: {
            res1: '207',
            correcta: '217',
            res2: '227',
            res3: '237'
        }
    },
    {
        pregunta: '¿Qué rama de las matemáticas estudia las figuras, tamaños y propiedades del espacio?',
        respuestas: {
            correcta: 'Geometría',
            res1: 'Álgebra',
            res2: 'Aritmética',
            res3: 'Estadística'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bratislava?',
        respuestas: {
            res1: 'Eslovenia',
            correcta: 'Eslovaquia',
            res2: 'Croacia',
            res3: 'Serbia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2³ × 3²?',
        respuestas: {
            res1: '36',
            correcta: '72',
            res2: '81',
            res3: '96'
        }
    },
    {
        pregunta: '¿Qué planeta tiene la mayor cantidad de lunas conocidas entre los planetas del sistema solar?',
        respuestas: {
            res1: 'Júpiter',
            correcta: 'Saturno',
            res2: 'Urano',
            res3: 'Neptuno'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Sarajevo?',
        respuestas: {
            correcta: 'Bosnia y Herzegovina',
            res1: 'Serbia',
            res2: 'Croacia',
            res3: 'Montenegro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 125 × 8?',
        respuestas: {
            res1: '900',
            correcta: '1000',
            res2: '1100',
            res3: '1200'
        }
    },
    {
        pregunta: '¿Qué científico propuso las leyes que describen el movimiento de los planetas?',
        respuestas: {
            res1: 'Copérnico',
            correcta: 'Johannes Kepler',
            res2: 'Galileo',
            res3: 'Newton'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Podgorica?',
        respuestas: {
            correcta: 'Montenegro',
            res1: 'Serbia',
            res2: 'Albania',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 36 × 15?',
        respuestas: {
            res1: '520',
            correcta: '540',
            res2: '560',
            res3: '580'
        }
    },
    {
        pregunta: '¿Qué órgano del cuerpo humano regula principalmente el metabolismo mediante hormonas?',
        respuestas: {
            res1: 'Páncreas',
            correcta: 'Tiroides',
            res2: 'Bazo',
            res3: 'Vesícula'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Skopie?',
        respuestas: {
            res1: 'Albania',
            correcta: 'Macedonia del Norte',
            res2: 'Serbia',
            res3: 'Bulgaria'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 144 × 2,5?',
        respuestas: {
            correcta: '360',
            res1: '340',
            res2: '380',
            res3: '400'
        }
    },
    {
        pregunta: '¿Cuál es la unidad de frecuencia en el Sistema Internacional?',
        respuestas: {
            res1: 'Newton',
            correcta: 'Hercio',
            res2: 'Pascal',
            res3: 'Julio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Chisináu?',
        respuestas: {
            correcta: 'Moldavia',
            res1: 'Ucrania',
            res2: 'Rumania',
            res3: 'Bielorrusia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2⁶ + 2⁴?',
        respuestas: {
            res1: '72',
            correcta: '80',
            res2: '96',
            res3: '100'
        }
    },
    {
        pregunta: '¿Qué científico formuló la teoría de la selección natural junto con Charles Darwin?',
        respuestas: {
            correcta: 'Alfred Russel Wallace',
            res1: 'Gregor Mendel',
            res2: 'Thomas Huxley',
            res3: 'Jean-Baptiste Lamarck'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Kiev?',
        respuestas: {
            res1: 'Rusia',
            correcta: 'Ucrania',
            res2: 'Bielorrusia',
            res3: 'Moldavia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15% de 800?',
        respuestas: {
            correcta: '120',
            res1: '100',
            res2: '140',
            res3: '160'
        }
    },
    {
        pregunta: '¿Qué órgano almacena temporalmente la bilis?',
        respuestas: {
            res1: 'Hígado',
            correcta: 'Vesícula biliar',
            res2: 'Páncreas',
            res3: 'Duodeno'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Minsk?',
        respuestas: {
            correcta: 'Bielorrusia',
            res1: 'Ucrania',
            res2: 'Lituania',
            res3: 'Letonia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 42 × 13?',
        respuestas: {
            res1: '526',
            correcta: '546',
            res2: '556',
            res3: '566'
        }
    },
    {
        pregunta: '¿Qué fenómeno explica la desviación aparente de objetos en movimiento debido a la rotación terrestre?',
        respuestas: {
            correcta: 'Efecto Coriolis',
            res1: 'Efecto Doppler',
            res2: 'Efecto fotoeléctrico',
            res3: 'Efecto invernadero'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Vilna?',
        respuestas: {
            correcta: 'Lituania',
            res1: 'Letonia',
            res2: 'Estonia',
            res3: 'Polonia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 96 ÷ 12 × 5?',
        respuestas: {
            res1: '20',
            correcta: '40',
            res2: '45',
            res3: '60'
        }
    },
    {
        pregunta: '¿Qué científico realizó experimentos fundamentales sobre la inducción electromagnética?',
        respuestas: {
            correcta: 'Michael Faraday',
            res1: 'James Watt',
            res2: 'Thomas Edison',
            res3: 'Alessandro Volta'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Riga?',
        respuestas: {
            res1: 'Lituania',
            correcta: 'Letonia',
            res2: 'Estonia',
            res3: 'Finlandia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 28 × 18?',
        respuestas: {
            res1: '484',
            correcta: '504',
            res2: '524',
            res3: '544'
        }
    },
    {
        pregunta: '¿Qué tipo de roca se forma a partir del enfriamiento del magma?',
        respuestas: {
            correcta: 'Ígnea',
            res1: 'Sedimentaria',
            res2: 'Metamórfica',
            res3: 'Calcárea'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Tallin?',
        respuestas: {
            correcta: 'Estonia',
            res1: 'Letonia',
            res2: 'Lituania',
            res3: 'Finlandia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 37 × 14?',
        respuestas: {
            res1: '508',
            correcta: '518',
            res2: '528',
            res3: '538'
        }
    },
    {
        pregunta: '¿Qué científico formuló las ecuaciones fundamentales del electromagnetismo clásico?',
        respuestas: {
            res1: 'Michael Faraday',
            correcta: 'James Clerk Maxwell',
            res2: 'Nikola Tesla',
            res3: 'André-Marie Ampère'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lisboa?',
        respuestas: {
            res1: 'España',
            correcta: 'Portugal',
            res2: 'Italia',
            res3: 'Francia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 49 × 11?',
        respuestas: {
            res1: '529',
            correcta: '539',
            res2: '549',
            res3: '559'
        }
    },
    {
        pregunta: '¿Qué proceso convierte directamente un sólido en gas?',
        respuestas: {
            res1: 'Evaporación',
            correcta: 'Sublimación',
            res2: 'Condensación',
            res3: 'Fusión'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Madrid?',
        respuestas: {
            correcta: 'España',
            res1: 'Portugal',
            res2: 'Francia',
            res3: 'Italia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17 × 17?',
        respuestas: {
            res1: '279',
            correcta: '289',
            res2: '299',
            res3: '309'
        }
    },
    {
        pregunta: '¿Qué científico propuso el principio de conservación de la masa?',
        respuestas: {
            correcta: 'Antoine Lavoisier',
            res1: 'Dmitri Mendeléyev',
            res2: 'John Dalton',
            res3: 'Robert Boyle'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a París?',
        respuestas: {
            res1: 'Bélgica',
            correcta: 'Francia',
            res2: 'Suiza',
            res3: 'Luxemburgo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 72 × 12?',
        respuestas: {
            res1: '824',
            correcta: '864',
            res2: '884',
            res3: '904'
        }
    },
    {
        pregunta: '¿Qué estructura del corazón separa los ventrículos derecho e izquierdo?',
        respuestas: {
            correcta: 'Tabique interventricular',
            res1: 'Válvula mitral',
            res2: 'Aorta',
            res3: 'Pericardio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Roma?',
        respuestas: {
            correcta: 'Italia',
            res1: 'Grecia',
            res2: 'España',
            res3: 'Croacia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 625 ÷ 25?',
        respuestas: {
            res1: '20',
            correcta: '25',
            res2: '30',
            res3: '35'
        }
    },
    {
        pregunta: '¿Qué científico es conocido por la formulación de la teoría atómica moderna?',
        respuestas: {
            res1: 'Ernest Rutherford',
            correcta: 'John Dalton',
            res2: 'Niels Bohr',
            res3: 'J. J. Thomson'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Berlín?',
        respuestas: {
            correcta: 'Alemania',
            res1: 'Austria',
            res2: 'Suiza',
            res3: 'Polonia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 27²?',
        respuestas: {
            res1: '719',
            correcta: '729',
            res2: '739',
            res3: '749'
        }
    },
    {
        pregunta: '¿Qué tipo de sangre se conoce como donante universal de glóbulos rojos?',
        respuestas: {
            correcta: 'O negativo',
            res1: 'AB positivo',
            res2: 'A negativo',
            res3: 'O positivo'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Ottawa?',
        respuestas: {
            res1: 'Estados Unidos',
            correcta: 'Canadá',
            res2: 'Australia',
            res3: 'Reino Unido'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18 × 25?',
        respuestas: {
            res1: '400',
            correcta: '450',
            res2: '475',
            res3: '500'
        }
    },
    {
        pregunta: '¿Qué científico descubrió el electrón?',
        respuestas: {
            correcta: 'J. J. Thomson',
            res1: 'Ernest Rutherford',
            res2: 'Niels Bohr',
            res3: 'James Chadwick'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Washington D. C.?',
        respuestas: {
            correcta: 'Estados Unidos',
            res1: 'Canadá',
            res2: 'México',
            res3: 'Reino Unido'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 84 ÷ 7 + 13?',
        respuestas: {
            res1: '19',
            correcta: '25',
            res2: '27',
            res3: '31'
        }
    },
    {
        pregunta: '¿Qué partícula subatómica no posee carga eléctrica?',
        respuestas: {
            res1: 'Protón',
            res2: 'Electrón',
            correcta: 'Neutrón',
            res3: 'Positrón'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Londres?',
        respuestas: {
            correcta: 'Reino Unido',
            res1: 'Irlanda',
            res2: 'Inglaterra',
            res3: 'Escocia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 29 × 13?',
        respuestas: {
            res1: '367',
            correcta: '377',
            res2: '387',
            res3: '397'
        }
    },
    {
        pregunta: '¿Qué científico descubrió el neutrón?',
        respuestas: {
            res1: 'J. J. Thomson',
            correcta: 'James Chadwick',
            res2: 'Ernest Rutherford',
            res3: 'Niels Bohr'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Pekín?',
        respuestas: {
            correcta: 'China',
            res1: 'Japón',
            res2: 'Corea del Sur',
            res3: 'Mongolia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 33 × 17?',
        respuestas: {
            res1: '551',
            correcta: '561',
            res2: '571',
            res3: '581'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando una onda cambia de dirección al pasar de un medio a otro?',
        respuestas: {
            correcta: 'Refracción',
            res1: 'Reflexión',
            res2: 'Difracción',
            res3: 'Interferencia'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Ulán Bator?',
        respuestas: {
            res1: 'Kazajistán',
            correcta: 'Mongolia',
            res2: 'China',
            res3: 'Kirguistán'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 46 × 12?',
        respuestas: {
            res1: '542',
            correcta: '552',
            res2: '562',
            res3: '572'
        }
    },
    {
        pregunta: '¿Qué fenómeno ocurre cuando una onda rebota al encontrarse con una superficie?',
        respuestas: {
            correcta: 'Reflexión',
            res1: 'Refracción',
            res2: 'Difracción',
            res3: 'Polarización'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Katmandú?',
        respuestas: {
            correcta: 'Nepal',
            res1: 'Bután',
            res2: 'India',
            res3: 'Bangladés'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 39 × 16?',
        respuestas: {
            res1: '614',
            correcta: '624',
            res2: '634',
            res3: '644'
        }
    },
    {
        pregunta: '¿Qué fuerza mantiene a los planetas en órbita alrededor del Sol?',
        respuestas: {
            correcta: 'Gravedad',
            res1: 'Fricción',
            res2: 'Magnetismo',
            res3: 'Electricidad'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Nueva Delhi?',
        respuestas: {
            correcta: 'India',
            res1: 'Nepal',
            res2: 'Pakistán',
            res3: 'Bangladés'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 56 × 15?',
        respuestas: {
            res1: '820',
            correcta: '840',
            res2: '860',
            res3: '880'
        }
    },
    {
        pregunta: '¿Qué ley establece que la energía no se crea ni se destruye, solo se transforma?',
        respuestas: {
            res1: 'Ley de Ohm',
            correcta: 'Principio de conservación de la energía',
            res2: 'Ley de Coulomb',
            res3: 'Ley de Boyle'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Islamabad?',
        respuestas: {
            res1: 'India',
            correcta: 'Pakistán',
            res2: 'Afganistán',
            res3: 'Irán'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 44 × 18?',
        respuestas: {
            res1: '772',
            correcta: '792',
            res2: '812',
            res3: '832'
        }
    },
    {
        pregunta: '¿Qué ley relaciona presión y volumen de un gas a temperatura constante?',
        respuestas: {
            correcta: 'Ley de Boyle',
            res1: 'Ley de Charles',
            res2: 'Ley de Ohm',
            res3: 'Ley de Hooke'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Teherán?',
        respuestas: {
            correcta: 'Irán',
            res1: 'Irak',
            res2: 'Afganistán',
            res3: 'Pakistán'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 63 × 14?',
        respuestas: {
            res1: '862',
            correcta: '882',
            res2: '902',
            res3: '922'
        }
    },
    {
        pregunta: '¿Qué ley establece que la corriente es igual al voltaje dividido por la resistencia?',
        respuestas: {
            res1: 'Ley de Faraday',
            correcta: 'Ley de Ohm',
            res2: 'Ley de Ampère',
            res3: 'Ley de Coulomb'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bagdad?',
        respuestas: {
            correcta: 'Irak',
            res1: 'Irán',
            res2: 'Siria',
            res3: 'Jordania'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 52 × 17?',
        respuestas: {
            res1: '874',
            correcta: '884',
            res2: '894',
            res3: '904'
        }
    },
    {
        pregunta: '¿Qué científico propuso el modelo nuclear del átomo?',
        respuestas: {
            correcta: 'Ernest Rutherford',
            res1: 'J. J. Thomson',
            res2: 'Niels Bohr',
            res3: 'John Dalton'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Damasco?',
        respuestas: {
            res1: 'Líbano',
            correcta: 'Siria',
            res2: 'Jordania',
            res3: 'Irak'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 75 × 16?',
        respuestas: {
            res1: '1100',
            correcta: '1200',
            res2: '1250',
            res3: '1300'
        }
    },
    {
        pregunta: '¿Qué proceso celular produce células sexuales con la mitad del número de cromosomas?',
        respuestas: {
            res1: 'Mitosis',
            correcta: 'Meiosis',
            res2: 'Gemación',
            res3: 'Fisión'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Amán?',
        respuestas: {
            correcta: 'Jordania',
            res1: 'Siria',
            res2: 'Líbano',
            res3: 'Israel'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 64 × 15?',
        respuestas: {
            res1: '920',
            correcta: '960',
            res2: '980',
            res3: '1000'
        }
    },
    {
        pregunta: '¿Qué estructura del ADN conecta los pares de bases mediante enlaces de hidrógeno?',
        respuestas: {
            correcta: 'Las dos cadenas complementarias',
            res1: 'Los ribosomas',
            res2: 'Los aminoácidos',
            res3: 'Las membranas celulares'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Beirut?',
        respuestas: {
            res1: 'Jordania',
            correcta: 'Líbano',
            res2: 'Siria',
            res3: 'Israel'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 81 ÷ 9 × 7?',
        respuestas: {
            res1: '9',
            correcta: '63',
            res2: '72',
            res3: '81'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la estructura de doble hélice del ADN junto con Francis Crick?',
        respuestas: {
            correcta: 'James Watson',
            res1: 'Gregor Mendel',
            res2: 'Linus Pauling',
            res3: 'Rosalind Franklin'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Jerusalén?',
        respuestas: {
            correcta: 'Israel',
            res1: 'Jordania',
            res2: 'Líbano',
            res3: 'Siria'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 26 × 24?',
        respuestas: {
            res1: '604',
            correcta: '624',
            res2: '644',
            res3: '664'
        }
    },
    {
        pregunta: '¿Qué estructura celular fabrica proteínas?',
        respuestas: {
            res1: 'Mitocondria',
            correcta: 'Ribosoma',
            res2: 'Lisosoma',
            res3: 'Núcleo'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a El Cairo?',
        respuestas: {
            correcta: 'Egipto',
            res1: 'Libia',
            res2: 'Sudán',
            res3: 'Túnez'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 42²?',
        respuestas: {
            res1: '1664',
            correcta: '1764',
            res2: '1864',
            res3: '1964'
        }
    },
    {
        pregunta: '¿Qué faraón está asociado con la famosa tumba descubierta por Howard Carter en 1922?',
        respuestas: {
            correcta: 'Tutankamón',
            res1: 'Ramsés II',
            res2: 'Akenatón',
            res3: 'Keops'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Nairobi?',
        respuestas: {
            res1: 'Tanzania',
            correcta: 'Kenia',
            res2: 'Uganda',
            res3: 'Etiopía'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 96 × 7?',
        respuestas: {
            res1: '662',
            correcta: '672',
            res2: '682',
            res3: '692'
        }
    },
    {
        pregunta: '¿Cuál es la unidad básica de la vida?',
        respuestas: {
            correcta: 'Célula',
            res1: 'Tejido',
            res2: 'Órgano',
            res3: 'Gen'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Addis Abeba?',
        respuestas: {
            correcta: 'Etiopía',
            res1: 'Kenia',
            res2: 'Somalia',
            res3: 'Sudán'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 35²?',
        respuestas: {
            res1: '1125',
            correcta: '1225',
            res2: '1325',
            res3: '1425'
        }
    },
    {
        pregunta: '¿Qué antigua civilización desarrolló la escritura cuneiforme?',
        respuestas: {
            correcta: 'Sumeria',
            res1: 'Egipto',
            res2: 'Grecia',
            res3: 'Roma'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Accra?',
        respuestas: {
            res1: 'Nigeria',
            correcta: 'Ghana',
            res2: 'Senegal',
            res3: 'Kenia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 28 × 25?',
        respuestas: {
            res1: '650',
            correcta: '700',
            res2: '750',
            res3: '800'
        }
    },
    {
        pregunta: '¿Qué filósofo fue discípulo de Sócrates?',
        respuestas: {
            correcta: 'Platón',
            res1: 'Aristóteles',
            res2: 'Epicuro',
            res3: 'Zenón'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Abuja?',
        respuestas: {
            correcta: 'Nigeria',
            res1: 'Ghana',
            res2: 'Camerún',
            res3: 'Senegal'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 54 × 19?',
        respuestas: {
            res1: '1016',
            correcta: '1026',
            res2: '1036',
            res3: '1046'
        }
    },
    {
        pregunta: '¿Qué filósofo fue discípulo de Platón y maestro de Alejandro Magno?',
        respuestas: {
            res1: 'Sócrates',
            correcta: 'Aristóteles',
            res2: 'Pitágoras',
            res3: 'Epicuro'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Dakar?',
        respuestas: {
            res1: 'Ghana',
            correcta: 'Senegal',
            res2: 'Nigeria',
            res3: 'Malí'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 45 × 18?',
        respuestas: {
            res1: '790',
            correcta: '810',
            res2: '830',
            res3: '850'
        }
    },
    {
        pregunta: '¿Qué tratado estableció oficialmente el final de la Primera Guerra Mundial con Alemania?',
        respuestas: {
            correcta: 'Tratado de Versalles',
            res1: 'Tratado de París',
            res2: 'Tratado de Viena',
            res3: 'Tratado de Utrecht'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Bamako?',
        respuestas: {
            correcta: 'Malí',
            res1: 'Níger',
            res2: 'Chad',
            res3: 'Senegal'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 62 × 13?',
        respuestas: {
            res1: '796',
            correcta: '806',
            res2: '816',
            res3: '826'
        }
    },
    {
        pregunta: '¿Qué civilización construyó el Coliseo y desarrolló una extensa red de calzadas?',
        respuestas: {
            correcta: 'Romana',
            res1: 'Griega',
            res2: 'Egipcia',
            res3: 'Persa'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Niamey?',
        respuestas: {
            res1: 'Malí',
            correcta: 'Níger',
            res2: 'Chad',
            res3: 'Nigeria'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 73 × 12?',
        respuestas: {
            res1: '856',
            correcta: '876',
            res2: '896',
            res3: '916'
        }
    },
    {
        pregunta: '¿Qué emperador romano adoptó el cristianismo y convocó el Concilio de Nicea?',
        respuestas: {
            correcta: 'Constantino I',
            res1: 'Nerón',
            res2: 'Augusto',
            res3: 'Trajano'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Luanda?',
        respuestas: {
            correcta: 'Angola',
            res1: 'Mozambique',
            res2: 'Namibia',
            res3: 'Zambia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 88 ÷ 11 × 9?',
        respuestas: {
            res1: '63',
            correcta: '72',
            res2: '81',
            res3: '88'
        }
    },
    {
        pregunta: '¿Qué navegante llegó a América en 1492 bajo el patrocinio de los Reyes Católicos?',
        respuestas: {
            correcta: 'Cristóbal Colón',
            res1: 'Fernando de Magallanes',
            res2: 'Hernán Cortés',
            res3: 'Américo Vespucio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Maputo?',
        respuestas: {
            res1: 'Angola',
            correcta: 'Mozambique',
            res2: 'Zimbabue',
            res3: 'Zambia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 29²?',
        respuestas: {
            res1: '821',
            correcta: '841',
            res2: '861',
            res3: '881'
        }
    },
    {
        pregunta: '¿Qué explorador lideró la expedición que realizó la primera circunnavegación de la Tierra, aunque murió durante el viaje?',
        respuestas: {
            correcta: 'Fernando de Magallanes',
            res1: 'Cristóbal Colón',
            res2: 'Vasco da Gama',
            res3: 'Hernán Cortés'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Lusaka?',
        respuestas: {
            correcta: 'Zambia',
            res1: 'Zimbabue',
            res2: 'Angola',
            res3: 'Namibia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 57 × 16?',
        respuestas: {
            res1: '902',
            correcta: '912',
            res2: '922',
            res3: '932'
        }
    },
    {
        pregunta: '¿Qué revolución comenzó en Francia en 1789?',
        respuestas: {
            correcta: 'Revolución Francesa',
            res1: 'Revolución Industrial',
            res2: 'Revolución Rusa',
            res3: 'Revolución Gloriosa'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Harare?',
        respuestas: {
            res1: 'Zambia',
            correcta: 'Zimbabue',
            res2: 'Botsuana',
            res3: 'Mozambique'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 38 × 22?',
        respuestas: {
            res1: '816',
            correcta: '836',
            res2: '856',
            res3: '876'
        }
    },
    {
        pregunta: '¿Qué invento de Johannes Gutenberg transformó la difusión de textos en Europa?',
        respuestas: {
            correcta: 'La imprenta de tipos móviles',
            res1: 'El telescopio',
            res2: 'La máquina de vapor',
            res3: 'El telégrafo'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Gaborone?',
        respuestas: {
            correcta: 'Botsuana',
            res1: 'Namibia',
            res2: 'Zimbabue',
            res3: 'Sudáfrica'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 46²?',
        respuestas: {
            res1: '2016',
            correcta: '2116',
            res2: '2216',
            res3: '2316'
        }
    },
    {
        pregunta: '¿Qué movimiento cultural europeo se caracterizó por recuperar ideas de la Antigüedad clásica?',
        respuestas: {
            correcta: 'Renacimiento',
            res1: 'Barroco',
            res2: 'Romanticismo',
            res3: 'Ilustración'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Windhoek?',
        respuestas: {
            res1: 'Botsuana',
            correcta: 'Namibia',
            res2: 'Angola',
            res3: 'Sudáfrica'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 39 × 24?',
        respuestas: {
            res1: '916',
            correcta: '936',
            res2: '956',
            res3: '976'
        }
    },
    {
        pregunta: '¿Qué corriente intelectual del siglo XVIII defendió ampliamente la razón y el conocimiento científico?',
        respuestas: {
            correcta: 'Ilustración',
            res1: 'Romanticismo',
            res2: 'Renacimiento',
            res3: 'Surrealismo'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Pretoria?',
        respuestas: {
            correcta: 'Sudáfrica',
            res1: 'Namibia',
            res2: 'Botsuana',
            res3: 'Lesoto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 72 × 14?',
        respuestas: {
            res1: '988',
            correcta: '1008',
            res2: '1028',
            res3: '1048'
        }
    },
    {
        pregunta: '¿Qué conflicto enfrentó principalmente a Estados Unidos y la Unión Soviética sin una guerra directa entre ambas potencias?',
        respuestas: {
            correcta: 'Guerra Fría',
            res1: 'Guerra de Corea',
            res2: 'Guerra de Vietnam',
            res3: 'Segunda Guerra Mundial'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Maseru?',
        respuestas: {
            res1: 'Esuatini',
            correcta: 'Lesoto',
            res2: 'Botsuana',
            res3: 'Namibia'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 84 × 13?',
        respuestas: {
            res1: '1082',
            correcta: '1092',
            res2: '1102',
            res3: '1112'
        }
    },
    {
        pregunta: '¿Qué organización internacional fue creada en 1945 para promover la cooperación y la paz entre los Estados?',
        respuestas: {
            correcta: 'Organización de las Naciones Unidas',
            res1: 'Unión Europea',
            res2: 'OTAN',
            res3: 'Organización Mundial del Comercio'
        }
    },
    {
        pregunta: '¿Qué país tiene como capital a Mbabane?',
        respuestas: {
            correcta: 'Esuatini',
            res1: 'Lesoto',
            res2: 'Botsuana',
            res3: 'Sudáfrica'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 47 × 19?',
        respuestas: {
            res1: '883',
            correcta: '893',
            res2: '903',
            res3: '913'
        }
    },
    {
        pregunta: '¿Qué rama de la física estudia el movimiento y las fuerzas?',
        respuestas: {
            correcta: 'Mecánica',
            res1: 'Óptica',
            res2: 'Termodinámica',
            res3: 'Acústica'
        }
    },
    {
        pregunta: '¿Cuál es el punto de ebullición aproximado del agua al nivel del mar?',
        respuestas: {
            res1: '90 °C',
            correcta: '100 °C',
            res2: '110 °C',
            res3: '120 °C'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18 × 32?',
        respuestas: {
            res1: '556',
            correcta: '576',
            res2: '596',
            res3: '616'
        }
    },
    {
        pregunta: '¿Qué instrumento se utiliza para observar objetos astronómicos lejanos?',
        respuestas: {
            res1: 'Microscopio',
            correcta: 'Telescopio',
            res2: 'Periscopio',
            res3: 'Espectrómetro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3⁴?',
        respuestas: {
            res1: '27',
            correcta: '81',
            res2: '64',
            res3: '108'
        }
    },
    {
        pregunta: '¿Qué rama de la biología estudia los hongos?',
        respuestas: {
            correcta: 'Micología',
            res1: 'Botánica',
            res2: 'Zoología',
            res3: 'Ecología'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la potencia eléctrica?',
        respuestas: {
            res1: 'Voltio',
            correcta: 'Vatio',
            res2: 'Ohmio',
            res3: 'Amperio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 125% de 80?',
        respuestas: {
            res1: '90',
            correcta: '100',
            res2: '110',
            res3: '120'
        }
    },
    {
        pregunta: '¿Qué rama de la biología estudia los animales?',
        respuestas: {
            res1: 'Botánica',
            correcta: 'Zoología',
            res2: 'Micología',
            res3: 'Citología'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7² + 24²?',
        respuestas: {
            res1: '575',
            correcta: '625',
            res2: '675',
            res3: '725'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia los seres vivos y sus relaciones con el ambiente?',
        respuestas: {
            correcta: 'Ecología',
            res1: 'Geología',
            res2: 'Astronomía',
            res3: 'Meteorología'
        }
    },
    {
        pregunta: '¿Qué unidad del Sistema Internacional mide la fuerza?',
        respuestas: {
            res1: 'Julio',
            correcta: 'Newton',
            res2: 'Pascal',
            res3: 'Watio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15³?',
        respuestas: {
            res1: '2250',
            correcta: '3375',
            res2: '3750',
            res3: '4275'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia la composición y estructura de la materia?',
        respuestas: {
            correcta: 'Química',
            res1: 'Biología',
            res2: 'Geografía',
            res3: 'Astronomía'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,5 × 40?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué unidad del Sistema Internacional mide la energía?',
        respuestas: {
            res1: 'Newton',
            correcta: 'Julio',
            res2: 'Pascal',
            res3: 'Hercio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11 × 24?',
        respuestas: {
            res1: '254',
            correcta: '264',
            res2: '274',
            res3: '284'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia los cuerpos celestes y el universo?',
        respuestas: {
            correcta: 'Astronomía',
            res1: 'Geología',
            res2: 'Meteorología',
            res3: 'Oceanografía'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,75 × 240?',
        respuestas: {
            res1: '160',
            correcta: '180',
            res2: '200',
            res3: '220'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la presión en el Sistema Internacional?',
        respuestas: {
            res1: 'Newton',
            correcta: 'Pascal',
            res2: 'Julio',
            res3: 'Hercio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 19 × 24?',
        respuestas: {
            res1: '436',
            correcta: '456',
            res2: '476',
            res3: '496'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia la atmósfera y los fenómenos meteorológicos?',
        respuestas: {
            correcta: 'Meteorología',
            res1: 'Astronomía',
            res2: 'Geología',
            res3: 'Oceanografía'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 35% de 600?',
        respuestas: {
            res1: '180',
            correcta: '210',
            res2: '240',
            res3: '270'
        }
    },
    {
        pregunta: '¿Qué ciencia estudia los océanos?',
        respuestas: {
            res1: 'Geología',
            correcta: 'Oceanografía',
            res2: 'Meteorología',
            res3: 'Hidrología'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 52 × 15?',
        respuestas: {
            res1: '760',
            correcta: '780',
            res2: '800',
            res3: '820'
        }
    },
    {
        pregunta: '¿Qué rama de la ciencia estudia las rocas y la estructura de la Tierra?',
        respuestas: {
            correcta: 'Geología',
            res1: 'Biología',
            res2: 'Astronomía',
            res3: 'Química'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7,5 × 16?',
        respuestas: {
            res1: '100',
            correcta: '120',
            res2: '140',
            res3: '160'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la temperatura en el Sistema Internacional?',
        respuestas: {
            res1: 'Celsius',
            correcta: 'Kelvin',
            res2: 'Fahrenheit',
            res3: 'Rankine'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 27 × 14?',
        respuestas: {
            res1: '368',
            correcta: '378',
            res2: '388',
            res3: '398'
        }
    },
    {
        pregunta: '¿Qué rama de la física estudia el calor y sus transformaciones?',
        respuestas: {
            correcta: 'Termodinámica',
            res1: 'Óptica',
            res2: 'Mecánica',
            res3: 'Acústica'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 64% de 250?',
        respuestas: {
            res1: '140',
            correcta: '160',
            res2: '180',
            res3: '200'
        }
    },
    {
        pregunta: '¿Qué rama de la física estudia el comportamiento de la luz?',
        respuestas: {
            correcta: 'Óptica',
            res1: 'Acústica',
            res2: 'Mecánica',
            res3: 'Termodinámica'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 48 × 17?',
        respuestas: {
            res1: '806',
            correcta: '816',
            res2: '826',
            res3: '836'
        }
    },
    {
        pregunta: '¿Qué rama de la física estudia el sonido?',
        respuestas: {
            res1: 'Óptica',
            correcta: 'Acústica',
            res2: 'Mecánica',
            res3: 'Electrostática'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 225 × 4?',
        respuestas: {
            correcta: '900',
            res1: '800',
            res2: '1000',
            res3: '1100'
        }
    },
    {
        pregunta: '¿Qué unidad se utiliza para medir la cantidad de sustancia?',
        respuestas: {
            res1: 'Gramo',
            correcta: 'Mol',
            res2: 'Litro',
            res3: 'Newton'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17 × 25?',
        respuestas: {
            res1: '400',
            correcta: '425',
            res2: '450',
            res3: '475'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Na?',
        respuestas: {
            correcta: 'Sodio',
            res1: 'Nitrógeno',
            res2: 'Neón',
            res3: 'Níquel'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 42 × 18?',
        respuestas: {
            res1: '736',
            correcta: '756',
            res2: '776',
            res3: '796'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cl?',
        respuestas: {
            res1: 'Calcio',
            correcta: 'Cloro',
            res2: 'Carbono',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3/5 de 250?',
        respuestas: {
            res1: '100',
            correcta: '150',
            res2: '175',
            res3: '200'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ca?',
        respuestas: {
            correcta: 'Calcio',
            res1: 'Carbono',
            res2: 'Cadmio',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 58 × 14?',
        respuestas: {
            res1: '802',
            correcta: '812',
            res2: '822',
            res3: '832'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cu?',
        respuestas: {
            correcta: 'Cobre',
            res1: 'Carbono',
            res2: 'Calcio',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 875 ÷ 25?',
        respuestas: {
            res1: '30',
            correcta: '35',
            res2: '40',
            res3: '45'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pb?',
        respuestas: {
            res1: 'Paladio',
            correcta: 'Plomo',
            res2: 'Polonio',
            res3: 'Platino'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 62 × 16?',
        respuestas: {
            res1: '982',
            correcta: '992',
            res2: '1002',
            res3: '1012'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sn?',
        respuestas: {
            correcta: 'Estaño',
            res1: 'Sodio',
            res2: 'Silicio',
            res3: 'Selenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1440 ÷ 12?',
        respuestas: {
            res1: '100',
            correcta: '120',
            res2: '140',
            res3: '160'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Si?',
        respuestas: {
            res1: 'Azufre',
            correcta: 'Silicio',
            res2: 'Sodio',
            res3: 'Selenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 72 × 16?',
        respuestas: {
            res1: '1052',
            correcta: '1152',
            res2: '1252',
            res3: '1352'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo N?',
        respuestas: {
            correcta: 'Nitrógeno',
            res1: 'Neón',
            res2: 'Níquel',
            res3: 'Sodio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15% de 1200?',
        respuestas: {
            res1: '150',
            correcta: '180',
            res2: '200',
            res3: '220'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mg?',
        respuestas: {
            correcta: 'Magnesio',
            res1: 'Manganeso',
            res2: 'Mercurio',
            res3: 'Molibdeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 36 × 24?',
        respuestas: {
            res1: '844',
            correcta: '864',
            res2: '884',
            res3: '904'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo K?',
        respuestas: {
            res1: 'Kriptón',
            correcta: 'Potasio',
            res2: 'Calcio',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,4 × 125?',
        respuestas: {
            res1: '250',
            correcta: '300',
            res2: '350',
            res3: '400'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ag?',
        respuestas: {
            correcta: 'Plata',
            res1: 'Argón',
            res2: 'Aluminio',
            res3: 'Oro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 29 × 18?',
        respuestas: {
            res1: '502',
            correcta: '522',
            res2: '542',
            res3: '562'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Fe?',
        respuestas: {
            correcta: 'Hierro',
            res1: 'Flúor',
            res2: 'Francio',
            res3: 'Fósforo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7,5% de 800?',
        respuestas: {
            res1: '50',
            correcta: '60',
            res2: '70',
            res3: '80'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Au?',
        respuestas: {
            res1: 'Plata',
            correcta: 'Oro',
            res2: 'Aluminio',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 34 × 27?',
        respuestas: {
            res1: '898',
            correcta: '918',
            res2: '938',
            res3: '958'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Hg?',
        respuestas: {
            correcta: 'Mercurio',
            res1: 'Magnesio',
            res2: 'Manganeso',
            res3: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1,25 × 80?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo O?',
        respuestas: {
            correcta: 'Oxígeno',
            res1: 'Oro',
            res2: 'Osmio',
            res3: 'Oxalio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 43 × 21?',
        respuestas: {
            res1: '893',
            correcta: '903',
            res2: '913',
            res3: '923'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo C?',
        respuestas: {
            correcta: 'Carbono',
            res1: 'Calcio',
            res2: 'Cobre',
            res3: 'Cloro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 56 × 18?',
        respuestas: {
            res1: '988',
            correcta: '1008',
            res2: '1028',
            res3: '1048'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo He?',
        respuestas: {
            res1: 'Hidrógeno',
            correcta: 'Helio',
            res2: 'Hierro',
            res3: 'Hafnio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1250 ÷ 50?',
        respuestas: {
            res1: '20',
            correcta: '25',
            res2: '30',
            res3: '35'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Li?',
        respuestas: {
            correcta: 'Litio',
            res1: 'Lutecio',
            res2: 'Lantano',
            res3: 'Plomo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 27 × 25?',
        respuestas: {
            res1: '625',
            correcta: '675',
            res2: '725',
            res3: '775'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ne?',
        respuestas: {
            correcta: 'Neón',
            res1: 'Níquel',
            res2: 'Nitrógeno',
            res3: 'Neptunio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 32 × 24?',
        respuestas: {
            res1: '748',
            correcta: '768',
            res2: '788',
            res3: '808'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Zn?',
        respuestas: {
            correcta: 'Zinc',
            res1: 'Zirconio',
            res2: 'Zanadio',
            res3: 'Zircon'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15 × 28?',
        respuestas: {
            res1: '400',
            correcta: '420',
            res2: '440',
            res3: '460'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cr?',
        respuestas: {
            correcta: 'Cromo',
            res1: 'Carbono',
            res2: 'Cobalto',
            res3: 'Calcio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 19 × 27?',
        respuestas: {
            res1: '493',
            correcta: '513',
            res2: '533',
            res3: '553'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Co?',
        respuestas: {
            res1: 'Cobre',
            correcta: 'Cobalto',
            res2: 'Carbono',
            res3: 'Calcio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 41 × 23?',
        respuestas: {
            res1: '923',
            correcta: '943',
            res2: '963',
            res3: '983'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ni?',
        respuestas: {
            correcta: 'Níquel',
            res1: 'Nitrógeno',
            res2: 'Neón',
            res3: 'Niobio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18 × 35?',
        respuestas: {
            res1: '610',
            correcta: '630',
            res2: '650',
            res3: '670'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mn?',
        respuestas: {
            correcta: 'Manganeso',
            res1: 'Magnesio',
            res2: 'Mercurio',
            res3: 'Molibdeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 75 × 24?',
        respuestas: {
            res1: '1700',
            correcta: '1800',
            res2: '1900',
            res3: '2000'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pt?',
        respuestas: {
            correcta: 'Platino',
            res1: 'Plomo',
            res2: 'Paladio',
            res3: 'Potasio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 42 × 25?',
        respuestas: {
            res1: '950',
            correcta: '1050',
            res2: '1150',
            res3: '1250'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Al?',
        respuestas: {
            correcta: 'Aluminio',
            res1: 'Argón',
            res2: 'Astato',
            res3: 'Actinio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 37 × 25?',
        respuestas: {
            res1: '875',
            correcta: '925',
            res2: '975',
            res3: '1025'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo S?',
        respuestas: {
            correcta: 'Azufre',
            res1: 'Silicio',
            res2: 'Sodio',
            res3: 'Selenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 46 × 25?',
        respuestas: {
            res1: '1050',
            correcta: '1150',
            res2: '1250',
            res3: '1350'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo P?',
        respuestas: {
            correcta: 'Fósforo',
            res1: 'Plomo',
            res2: 'Potasio',
            res3: 'Polonio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 58 × 25?',
        respuestas: {
            res1: '1350',
            correcta: '1450',
            res2: '1550',
            res3: '1650'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo F?',
        respuestas: {
            correcta: 'Flúor',
            res1: 'Hierro',
            res2: 'Francio',
            res3: 'Fósforo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 64 × 25?',
        respuestas: {
            res1: '1500',
            correcta: '1600',
            res2: '1700',
            res3: '1800'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Br?',
        respuestas: {
            correcta: 'Bromo',
            res1: 'Boro',
            res2: 'Berilio',
            res3: 'Bismuto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 76 × 25?',
        respuestas: {
            res1: '1800',
            correcta: '1900',
            res2: '2000',
            res3: '2100'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo I?',
        respuestas: {
            correcta: 'Yodo',
            res1: 'Indio',
            res2: 'Iridio',
            res3: 'Hierro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 84 × 25?',
        respuestas: {
            res1: '2000',
            correcta: '2100',
            res2: '2200',
            res3: '2300'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ar?',
        respuestas: {
            correcta: 'Argón',
            res1: 'Arsénico',
            res2: 'Aluminio',
            res3: 'Astato'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 92 × 25?',
        respuestas: {
            res1: '2200',
            correcta: '2300',
            res2: '2400',
            res3: '2500'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Kr?',
        respuestas: {
            correcta: 'Kriptón',
            res1: 'Krio',
            res2: 'Kobalto',
            res3: 'Potasio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 96 × 25?',
        respuestas: {
            res1: '2200',
            correcta: '2400',
            res2: '2600',
            res3: '2800'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Xe?',
        respuestas: {
            correcta: 'Xenón',
            res1: 'Xenio',
            res2: 'Xileno',
            res3: 'Xero'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 125 × 16?',
        respuestas: {
            res1: '1800',
            correcta: '2000',
            res2: '2200',
            res3: '2400'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Rn?',
        respuestas: {
            correcta: 'Radón',
            res1: 'Radio',
            res2: 'Renio',
            res3: 'Rutenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 135 ÷ 9 × 4?',
        respuestas: {
            res1: '45',
            correcta: '60',
            res2: '75',
            res3: '90'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo W?',
        respuestas: {
            correcta: 'Wolframio',
            res1: 'Wolfram',
            res2: 'Tungstenoide',
            res3: 'Wolton'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2⁷ ÷ 4?',
        respuestas: {
            res1: '16',
            correcta: '32',
            res2: '64',
            res3: '128'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo U?',
        respuestas: {
            correcta: 'Uranio',
            res1: 'Uranioide',
            res2: 'Ununo',
            res3: 'Urano'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15² + 20²?',
        respuestas: {
            res1: '525',
            correcta: '625',
            res2: '725',
            res3: '825'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ra?',
        respuestas: {
            correcta: 'Radio',
            res1: 'Radón',
            res2: 'Renio',
            res3: 'Rutenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,2 × 0,5?',
        respuestas: {
            res1: '0,01',
            correcta: '0,1',
            res2: '1',
            res3: '0,5'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Rb?',
        respuestas: {
            correcta: 'Rubidio',
            res1: 'Rutenio',
            res2: 'Radio',
            res3: 'Rodio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1/3 + 1/3 + 1/3?',
        respuestas: {
            res1: '1/2',
            correcta: '1',
            res2: '2/3',
            res3: '3/2'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cs?',
        respuestas: {
            correcta: 'Cesio',
            res1: 'Calcio',
            res2: 'Cobalto',
            res3: 'Cerio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5/8 de 160?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ba?',
        respuestas: {
            correcta: 'Bario',
            res1: 'Boro',
            res2: 'Berilio',
            res3: 'Bromo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,75 + 3,25?',
        respuestas: {
            res1: '5',
            correcta: '6',
            res2: '6,5',
            res3: '7'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sr?',
        respuestas: {
            correcta: 'Estroncio',
            res1: 'Selenio',
            res2: 'Silicio',
            res3: 'Azufre'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7/10 de 450?',
        respuestas: {
            res1: '275',
            correcta: '315',
            res2: '350',
            res3: '375'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ti?',
        respuestas: {
            correcta: 'Titanio',
            res1: 'Talio',
            res2: 'Telurio',
            res3: 'Torio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 4,5 × 2,4?',
        respuestas: {
            res1: '9,8',
            correcta: '10,8',
            res2: '11,8',
            res3: '12,8'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo V?',
        respuestas: {
            correcta: 'Vanadio',
            res1: 'Vanadio II',
            res2: 'Volframio',
            res3: 'Vanadioide'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15% de 2400?',
        respuestas: {
            res1: '240',
            correcta: '360',
            res2: '480',
            res3: '600'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sc?',
        respuestas: {
            correcta: 'Escandio',
            res1: 'Silicio',
            res2: 'Selenio',
            res3: 'Samario'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3,6 ÷ 0,6?',
        respuestas: {
            res1: '3',
            correcta: '6',
            res2: '9',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Y?',
        respuestas: {
            correcta: 'Itrio',
            res1: 'Yodo',
            res2: 'Iterbio',
            res3: 'Ytrio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 18% de 500?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Zr?',
        respuestas: {
            correcta: 'Circonio',
            res1: 'Zinc',
            res2: 'Zirconio',
            res3: 'Zircon'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7,2 × 12,5?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Nb?',
        respuestas: {
            correcta: 'Niobio',
            res1: 'Nitrógeno',
            res2: 'Neón',
            res3: 'Níquel'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 45% de 360?',
        respuestas: {
            res1: '144',
            correcta: '162',
            res2: '180',
            res3: '198'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mo?',
        respuestas: {
            correcta: 'Molibdeno',
            res1: 'Magnesio',
            res2: 'Manganeso',
            res3: 'Mercurio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2/5 + 1/5?',
        respuestas: {
            res1: '1/5',
            correcta: '3/5',
            res2: '2/5',
            res3: '4/5'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Tc?',
        respuestas: {
            correcta: 'Tecnecio',
            res1: 'Titanio',
            res2: 'Telurio',
            res3: 'Tantalio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11/12 - 5/12?',
        respuestas: {
            res1: '1/3',
            correcta: '1/2',
            res2: '2/3',
            res3: '3/4'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ru?',
        respuestas: {
            correcta: 'Rutenio',
            res1: 'Rubidio',
            res2: 'Radio',
            res3: 'Rodio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 8/9 × 27?',
        respuestas: {
            res1: '18',
            correcta: '24',
            res2: '27',
            res3: '30'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Rh?',
        respuestas: {
            correcta: 'Rodio',
            res1: 'Rutenio',
            res2: 'Radio',
            res3: 'Rubidio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7/8 ÷ 1/4?',
        respuestas: {
            res1: '1,5',
            correcta: '3,5',
            res2: '4',
            res3: '4,5'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pd?',
        respuestas: {
            correcta: 'Paladio',
            res1: 'Plata',
            res2: 'Platino',
            res3: 'Plomo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,5²?',
        respuestas: {
            res1: '5',
            correcta: '6,25',
            res2: '7,5',
            res3: '8,25'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cd?',
        respuestas: {
            correcta: 'Cadmio',
            res1: 'Calcio',
            res2: 'Carbono',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 12,5% de 640?',
        respuestas: {
            res1: '60',
            correcta: '80',
            res2: '100',
            res3: '120'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo In?',
        respuestas: {
            correcta: 'Indio',
            res1: 'Iridio',
            res2: 'Iodo',
            res3: 'Itrio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1,2³?',
        respuestas: {
            res1: '1,528',
            correcta: '1,728',
            res2: '1,928',
            res3: '2,028'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sn?',
        respuestas: {
            correcta: 'Estaño',
            res1: 'Selenio',
            res2: 'Silicio',
            res3: 'Sodio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 144 ÷ 0,5?',
        respuestas: {
            res1: '72',
            correcta: '288',
            res2: '300',
            res3: '320'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sb?',
        respuestas: {
            correcta: 'Antimonio',
            res1: 'Sodio',
            res2: 'Samario',
            res3: 'Silicio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,25 × 0,8?',
        respuestas: {
            res1: '0,02',
            correcta: '0,2',
            res2: '2',
            res3: '0,8'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Te?',
        respuestas: {
            correcta: 'Telurio',
            res1: 'Tecnecio',
            res2: 'Titanio',
            res3: 'Tantalio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5,5 × 18?',
        respuestas: {
            res1: '89',
            correcta: '99',
            res2: '109',
            res3: '119'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo I?',
        respuestas: {
            correcta: 'Yodo',
            res1: 'Indio',
            res2: 'Iridio',
            res3: 'Itrio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 72,5 - 18,75?',
        respuestas: {
            res1: '43,75',
            correcta: '53,75',
            res2: '63,75',
            res3: '73,75'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cs?',
        respuestas: {
            correcta: 'Cesio',
            res1: 'Calcio',
            res2: 'Cerio',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 14,4 ÷ 1,2?',
        respuestas: {
            res1: '10',
            correcta: '12',
            res2: '14',
            res3: '16'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ba?',
        respuestas: {
            correcta: 'Bario',
            res1: 'Boro',
            res2: 'Berilio',
            res3: 'Bromo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 6,25 × 16?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo La?',
        respuestas: {
            correcta: 'Lantano',
            res1: 'Litio',
            res2: 'Lutecio',
            res3: 'Lawrencio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 225% de 40?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ce?',
        respuestas: {
            correcta: 'Cerio',
            res1: 'Cesio',
            res2: 'Calcio',
            res3: 'Cobalto'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,4 ÷ 0,3?',
        respuestas: {
            res1: '6',
            correcta: '8',
            res2: '10',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Nd?',
        respuestas: {
            correcta: 'Neodimio',
            res1: 'Neón',
            res2: 'Nitrógeno',
            res3: 'Níquel'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7/12 + 1/6?',
        respuestas: {
            res1: '2/3',
            correcta: '3/4',
            res2: '5/6',
            res3: '7/8'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sm?',
        respuestas: {
            correcta: 'Samario',
            res1: 'Sodio',
            res2: 'Silicio',
            res3: 'Selenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5/6 - 1/4?',
        respuestas: {
            res1: '5/12',
            correcta: '7/12',
            res2: '2/3',
            res3: '3/4'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Eu?',
        respuestas: {
            correcta: 'Europio',
            res1: 'Einsteinio',
            res2: 'Erbio',
            res3: 'Europio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3/8 × 64?',
        respuestas: {
            res1: '16',
            correcta: '24',
            res2: '32',
            res3: '40'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Gd?',
        respuestas: {
            correcta: 'Gadolinio',
            res1: 'Galio',
            res2: 'Germanio',
            res3: 'Gadolino'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 9/10 ÷ 3/5?',
        respuestas: {
            res1: '1',
            correcta: '1,5',
            res2: '2',
            res3: '2,5'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Dy?',
        respuestas: {
            correcta: 'Disprosio',
            res1: 'Dubnio',
            res2: 'Disproso',
            res3: 'Darmstadtio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 4/7 + 2/7?',
        respuestas: {
            res1: '4/7',
            correcta: '6/7',
            res2: '8/7',
            res3: '1'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Er?',
        respuestas: {
            correcta: 'Erbio',
            res1: 'Europio',
            res2: 'Einsteinio',
            res3: 'Erbio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11/15 - 2/5?',
        respuestas: {
            res1: '1/5',
            correcta: '1/3',
            res2: '2/5',
            res3: '7/15'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Yb?',
        respuestas: {
            correcta: 'Iterbio',
            res1: 'Itrio',
            res2: 'Yodo',
            res3: 'Ytterbio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5/9 × 81?',
        respuestas: {
            res1: '35',
            correcta: '45',
            res2: '55',
            res3: '65'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Hf?',
        respuestas: {
            correcta: 'Hafnio',
            res1: 'Holmio',
            res2: 'Hidrógeno',
            res3: 'Helio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7/8 + 3/16?',
        respuestas: {
            res1: '1',
            correcta: '17/16',
            res2: '19/16',
            res3: '21/16'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ta?',
        respuestas: {
            correcta: 'Tantalio',
            res1: 'Titanio',
            res2: 'Talio',
            res3: 'Tecnecio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 13/20 × 100?',
        respuestas: {
            res1: '55',
            correcta: '65',
            res2: '75',
            res3: '85'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Re?',
        respuestas: {
            correcta: 'Renio',
            res1: 'Radio',
            res2: 'Rodio',
            res3: 'Rutenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,125 × 800?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Os?',
        respuestas: {
            correcta: 'Osmio',
            res1: 'Oro',
            res2: 'Oxígeno',
            res3: 'Osmio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3,75 × 24?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ir?',
        respuestas: {
            correcta: 'Iridio',
            res1: 'Indio',
            res2: 'Itrio',
            res3: 'Iridio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 6,4 × 12,5?',
        respuestas: {
            res1: '70',
            correcta: '80',
            res2: '90',
            res3: '100'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pt?',
        respuestas: {
            correcta: 'Platino',
            res1: 'Paladio',
            res2: 'Plomo',
            res3: 'Polonio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,75 ÷ 0,25?',
        respuestas: {
            res1: '2',
            correcta: '3',
            res2: '4',
            res3: '5'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Au?',
        respuestas: {
            res1: 'Plata',
            correcta: 'Oro',
            res2: 'Aluminio',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 9,6 ÷ 1,2?',
        respuestas: {
            res1: '6',
            correcta: '8',
            res2: '10',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Tl?',
        respuestas: {
            correcta: 'Talio',
            res1: 'Titanio',
            res2: 'Telurio',
            res3: 'Tantalio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17,5% de 400?',
        respuestas: {
            res1: '60',
            correcta: '70',
            res2: '80',
            res3: '90'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pb?',
        respuestas: {
            correcta: 'Plomo',
            res1: 'Plata',
            res2: 'Paladio',
            res3: 'Platino'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 125 ÷ 0,25?',
        respuestas: {
            res1: '250',
            correcta: '500',
            res2: '750',
            res3: '1000'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Bi?',
        respuestas: {
            correcta: 'Bismuto',
            res1: 'Boro',
            res2: 'Bario',
            res3: 'Berilio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,04 × 2500?',
        respuestas: {
            res1: '50',
            correcta: '100',
            res2: '150',
            res3: '200'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Po?',
        respuestas: {
            correcta: 'Polonio',
            res1: 'Potasio',
            res2: 'Plomo',
            res3: 'Paladio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3,2 × 3,2?',
        respuestas: {
            res1: '8,24',
            correcta: '10,24',
            res2: '12,24',
            res3: '14,24'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo At?',
        respuestas: {
            correcta: 'Astato',
            res1: 'Argón',
            res2: 'Actinio',
            res3: 'Aluminio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,25 × 40?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Fr?',
        respuestas: {
            correcta: 'Francio',
            res1: 'Flúor',
            res2: 'Fermio',
            res3: 'Fósforo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 16,5 × 12?',
        respuestas: {
            res1: '188',
            correcta: '198',
            res2: '208',
            res3: '218'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ra?',
        respuestas: {
            correcta: 'Radio',
            res1: 'Radón',
            res2: 'Rubidio',
            res3: 'Renio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7,25 + 2,75?',
        respuestas: {
            res1: '8',
            correcta: '10',
            res2: '11',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ac?',
        respuestas: {
            correcta: 'Actinio',
            res1: 'Astato',
            res2: 'Aluminio',
            res3: 'Argón'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 9/16 de 320?',
        respuestas: {
            res1: '160',
            correcta: '180',
            res2: '200',
            res3: '220'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Th?',
        respuestas: {
            correcta: 'Torio',
            res1: 'Talio',
            res2: 'Tantalio',
            res3: 'Tecnecio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 13,5 × 20?',
        respuestas: {
            res1: '250',
            correcta: '270',
            res2: '290',
            res3: '310'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pa?',
        respuestas: {
            correcta: 'Protactinio',
            res1: 'Paladio',
            res2: 'Plata',
            res3: 'Polonio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5/12 de 480?',
        respuestas: {
            res1: '160',
            correcta: '200',
            res2: '220',
            res3: '240'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Np?',
        respuestas: {
            correcta: 'Neptunio',
            res1: 'Neón',
            res2: 'Níquel',
            res3: 'Nitrógeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 14,4 × 2,5?',
        respuestas: {
            res1: '26',
            correcta: '36',
            res2: '46',
            res3: '56'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Pu?',
        respuestas: {
            correcta: 'Plutonio',
            res1: 'Polonio',
            res2: 'Protactinio',
            res3: 'Plata'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 62,5% de 160?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Am?',
        respuestas: {
            correcta: 'Americio',
            res1: 'Aluminio',
            res2: 'Antimonio',
            res3: 'Americio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 4,8 ÷ 0,6?',
        respuestas: {
            res1: '6',
            correcta: '8',
            res2: '10',
            res3: '12'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cm?',
        respuestas: {
            correcta: 'Curio',
            res1: 'Cromo',
            res2: 'Cobre',
            res3: 'Calcio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3/7 de 210?',
        respuestas: {
            res1: '60',
            correcta: '90',
            res2: '120',
            res3: '150'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Bk?',
        respuestas: {
            correcta: 'Berkelio',
            res1: 'Boro',
            res2: 'Bismuto',
            res3: 'Berilio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,75 × 8?',
        respuestas: {
            res1: '18',
            correcta: '22',
            res2: '24',
            res3: '26'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cf?',
        respuestas: {
            correcta: 'Californio',
            res1: 'Carbono',
            res2: 'Cobalto',
            res3: 'Cadmio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 7,5% de 1200?',
        respuestas: {
            res1: '75',
            correcta: '90',
            res2: '105',
            res3: '120'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Es?',
        respuestas: {
            correcta: 'Einsteinio',
            res1: 'Europio',
            res2: 'Erbio',
            res3: 'Escandio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 3,75 ÷ 0,75?',
        respuestas: {
            res1: '4',
            correcta: '5',
            res2: '6',
            res3: '7'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Fm?',
        respuestas: {
            correcta: 'Fermio',
            res1: 'Francio',
            res2: 'Flúor',
            res3: 'Fósforo'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11/20 de 400?',
        respuestas: {
            res1: '180',
            correcta: '220',
            res2: '240',
            res3: '260'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Md?',
        respuestas: {
            correcta: 'Mendelevio',
            res1: 'Magnesio',
            res2: 'Manganeso',
            res3: 'Molibdeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 8,4 × 15?',
        respuestas: {
            res1: '116',
            correcta: '126',
            res2: '136',
            res3: '146'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo No?',
        respuestas: {
            correcta: 'Nobelio',
            res1: 'Neón',
            res2: 'Nitrógeno',
            res3: 'Niobio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,125 × 64?',
        respuestas: {
            res1: '4',
            correcta: '8',
            res2: '12',
            res3: '16'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Lr?',
        respuestas: {
            correcta: 'Lawrencio',
            res1: 'Lantano',
            res2: 'Litio',
            res3: 'Lutecio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 15/16 de 320?',
        respuestas: {
            res1: '280',
            correcta: '300',
            res2: '320',
            res3: '340'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Rf?',
        respuestas: {
            correcta: 'Rutherfordio',
            res1: 'Radio',
            res2: 'Renio',
            res3: 'Rutenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 6,25% de 800?',
        respuestas: {
            res1: '40',
            correcta: '50',
            res2: '60',
            res3: '70'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Db?',
        respuestas: {
            correcta: 'Dubnio',
            res1: 'Disprosio',
            res2: 'Darmstadtio',
            res3: 'Dubnio II'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2,5 × 2,5?',
        respuestas: {
            res1: '5',
            correcta: '6,25',
            res2: '7,25',
            res3: '8,25'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Sg?',
        respuestas: {
            correcta: 'Seaborgio',
            res1: 'Samario',
            res2: 'Silicio',
            res3: 'Selenio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 37,5% de 240?',
        respuestas: {
            res1: '80',
            correcta: '90',
            res2: '100',
            res3: '110'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Bh?',
        respuestas: {
            correcta: 'Bohrio',
            res1: 'Berkelio',
            res2: 'Bismuto',
            res3: 'Boro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1,75 × 40?',
        respuestas: {
            res1: '60',
            correcta: '70',
            res2: '80',
            res3: '90'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Hs?',
        respuestas: {
            correcta: 'Hassio',
            res1: 'Hafnio',
            res2: 'Holmio',
            res3: 'Hidrógeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 11,25 ÷ 0,75?',
        respuestas: {
            res1: '12',
            correcta: '15',
            res2: '18',
            res3: '20'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mt?',
        respuestas: {
            correcta: 'Meitnerio',
            res1: 'Mendelevio',
            res2: 'Magnesio',
            res3: 'Manganeso'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,6 × 0,25?',
        respuestas: {
            res1: '0,015',
            correcta: '0,15',
            res2: '1,5',
            res3: '0,25'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ds?',
        respuestas: {
            correcta: 'Darmstadtio',
            res1: 'Dubnio',
            res2: 'Disprosio',
            res3: 'Darmstatio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 2/3 de 450?',
        respuestas: {
            res1: '250',
            correcta: '300',
            res2: '350',
            res3: '400'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Rg?',
        respuestas: {
            correcta: 'Roentgenio',
            res1: 'Rodio',
            res2: 'Renio',
            res3: 'Radio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 4,25 × 20?',
        respuestas: {
            res1: '75',
            correcta: '85',
            res2: '95',
            res3: '105'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Cn?',
        respuestas: {
            correcta: 'Copernicio',
            res1: 'Carbono',
            res2: 'Cobalto',
            res3: 'Curio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 17,5 × 8?',
        respuestas: {
            res1: '120',
            correcta: '140',
            res2: '160',
            res3: '180'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Nh?',
        respuestas: {
            correcta: 'Nihonio',
            res1: 'Neón',
            res2: 'Níquel',
            res3: 'Nitrógeno'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 22,5% de 400?',
        respuestas: {
            res1: '70',
            correcta: '90',
            res2: '110',
            res3: '130'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Fl?',
        respuestas: {
            correcta: 'Flerovio',
            res1: 'Flúor',
            res2: 'Francio',
            res3: 'Fermio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 5,5²?',
        respuestas: {
            res1: '25,25',
            correcta: '30,25',
            res2: '35,25',
            res3: '40,25'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Mc?',
        respuestas: {
            correcta: 'Moscovio',
            res1: 'Magnesio',
            res2: 'Manganeso',
            res3: 'Meitnerio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 1,5³?',
        respuestas: {
            res1: '2,375',
            correcta: '3,375',
            res2: '4,375',
            res3: '5,375'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Lv?',
        respuestas: {
            correcta: 'Livermorio',
            res1: 'Lutecio',
            res2: 'Lawrencio',
            res3: 'Litio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 6,25% de 1600?',
        respuestas: {
            res1: '80',
            correcta: '100',
            res2: '120',
            res3: '140'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Ts?',
        respuestas: {
            correcta: 'Teneso',
            res1: 'Telurio',
            res2: 'Tecnecio',
            res3: 'Titanio'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 0,875 × 800?',
        respuestas: {
            res1: '600',
            correcta: '700',
            res2: '800',
            res3: '900'
        }
    },
    {
        pregunta: '¿Qué elemento químico tiene el símbolo Og?',
        respuestas: {
            correcta: 'Oganesón',
            res1: 'Osmio',
            res2: 'Oxígeno',
            res3: 'Oro'
        }
    },
    {
        pregunta: '¿Cuál es el resultado de 13,75 × 8?',
        respuestas: {
            res1: '100',
            correcta: '110',
            res2: '120',
            res3: '130'
        }
    }
],
[
    {
        pregunta: '¿Cuál es la ecuación de la relatividad especial de Einstein?',
        respuestas: {
            res1: 'E = mc^2',
            res2: 'F = ma',
            res3: 'v = d / t',
            correcta: 'E = mc^2'
        }
    },
    {
        pregunta: '¿Qué es la fotosíntesis?',
        respuestas: {
            res1: 'La respiración celular de las plantas',
            res2: 'La reacción en la que las plantas usan luz para producir glucosa',
            res3: 'La absorción de agua por las raíces',
            correcta: 'La reacción en la que las plantas usan luz para producir glucosa'
        }
    },
    {
        pregunta: '¿Cuál es el número atómico del oxígeno?',
        respuestas: {
            res1: '6',
            res2: '7',
            res3: '8',
            correcta: '8'
        }
    },
    {
        pregunta: '¿Qué planeta tiene el sistema de anillos más notable?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Marte',
            res3: 'Neptuno',
            correcta: 'Saturno'
        }
    },
    {
        pregunta: '¿Qué científico formuló las leyes del movimiento planetario?',
        respuestas: {
            res1: 'Galileo',
            res2: 'Kepler',
            res3: 'Newton',
            correcta: 'Kepler'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Berna',
            res2: 'Zurich',
            res3: 'Ginebra',
            correcta: 'Berna'
        }
    },
    {
        pregunta: '¿Cuál es el río más largo del mundo?',
        respuestas: {
            res1: 'Río Amazonas',
            res2: 'Río Nilo',
            res3: 'Río Misisipi',
            correcta: 'Río Amazonas'
        }
    },
    {
        pregunta: '¿Qué lengua es oficial en Brasil?',
        respuestas: {
            res1: 'Francés',
            res2: 'Portugués',
            res3: 'Español',
            correcta: 'Portugués'
        }
    },
    {
        pregunta: '¿Cuál es el símbolo químico del sodio?',
        respuestas: {
            res1: 'So',
            res2: 'Sd',
            res3: 'S',
            correcta: 'Na'
        }
    },
    {
        pregunta: '¿Qué gas es esencial para la respiración celular?',
        respuestas: {
            res1: 'Nitrógeno',
            res2: 'Dióxido de carbono',
            res3: 'Helio',
            correcta: 'Oxígeno'
        }
    },
    {
        pregunta: '¿Quién escribió la Ilíada?',
        respuestas: {
            res1: 'Virgilio',
            res2: 'Homero',
            res3: 'Esquilo',
            correcta: 'Homero'
        }
    },
    {
        pregunta: '¿Cuál es la moneda oficial de Japón?',
        respuestas: {
            res1: 'Won',
            res2: 'Yen',
            res3: 'Dólar',
            correcta: 'Yen'
        }
    },
    {
        pregunta: '¿Qué capa de la Tierra es líquida?',
        respuestas: {
            res1: 'Núcleo interno',
            res2: 'Manto',
            res3: 'Corteza',
            correcta: 'Núcleo externo'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del satélite más grande de Saturno?',
        respuestas: {
            res1: 'Europa',
            res2: 'Titán',
            res3: 'Io',
            correcta: 'Titán'
        }
    },
    {
        pregunta: '¿Qué parte del ojo controla la cantidad de luz que entra?',
        respuestas: {
            res1: 'Retina',
            res2: 'Cristalino',
            res3: 'Pupila',
            correcta: 'Pupila'
        }
    },
    {
        pregunta: '¿Cuál es el planeta más caliente del sistema solar?',
        respuestas: {
            res1: 'Marte',
            res2: 'Venus',
            res3: 'Mercurio',
            correcta: 'Venus'
        }
    },
    {
        pregunta: '¿Qué país tiene la mayor cantidad de lagos del mundo?',
        respuestas: {
            res1: 'Canadá',
            res2: 'Finlandia',
            res3: 'Noruega',
            correcta: 'Canadá'
        }
    },
    {
        pregunta: '¿Cuál es el elemento más abundante en la corteza terrestre?',
        respuestas: {
            res1: 'Hierro',
            res2: 'Oxígeno',
            res3: 'Silicio',
            correcta: 'Oxígeno'
        }
    },
    {
        pregunta: '¿Qué teoría explica la expansión del universo?',
        respuestas: {
            res1: 'Teoría de la gravedad',
            res2: 'Teoría del Big Bang',
            res3: 'Teoría cuántica',
            correcta: 'Teoría del Big Bang'
        }
    },
    {
        pregunta: '¿Qué científico descubrió la ley de la gravitación universal?',
        respuestas: {
            res1: 'Galileo',
            res2: 'Kepler',
            res3: 'Einstein',
            correcta: 'Newton'
        }
    },
    {
        pregunta: '¿Cuál es la hormona principal del estrés?',
        respuestas: {
            res1: 'Insulina',
            res2: 'Adrenalina',
            res3: 'Melatonina',
            correcta: 'Adrenalina'
        }
    },
    {
        pregunta: '¿Qué estructura del cerebro coordina el equilibrio?',
        respuestas: {
            res1: 'Cerebelo',
            res2: 'Hipotálamo',
            res3: 'Amígdala',
            correcta: 'Cerebelo'
        }
    },
    {
        pregunta: '¿Cómo se llama la fuerza que mantiene a los planetas en órbita alrededor del Sol?',
        respuestas: {
            res1: 'Fuerza centrífuga',
            res2: 'Fuerza gravitatoria',
            res3: 'Fuerza magnética',
            correcta: 'Fuerza gravitatoria'
        }
    },
    {
        pregunta: '¿Cuál es la suma de los ángulos internos de un triángulo?',
        respuestas: {
            res1: '90°',
            res2: '180°',
            res3: '270°',
            correcta: '180°'
        }
    },
    {
        pregunta: '¿Qué es un quasar?',
        respuestas: {
            res1: 'Una estrella enana',
            res2: 'Un núcleo galáctico activo muy brillante',
            res3: 'Un asteroide',
            correcta: 'Un núcleo galáctico activo muy brillante'
        }
    },
    {
        pregunta: '¿Cuál es la velocidad de la luz en el vacío?',
        respuestas: {
            res1: '300 000 km/s',
            res2: '30 000 km/s',
            res3: '3 000 km/s',
            correcta: '300 000 km/s'
        }
    },
    {
        pregunta: '¿Qué órgano produce la bilis?',
        respuestas: {
            res1: 'Páncreas',
            res2: 'Hígado',
            res3: 'Riñón',
            correcta: 'Hígado'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Canadá?',
        respuestas: {
            res1: 'Toronto',
            res2: 'Montreal',
            res3: 'Vancouver',
            correcta: 'Ottawa'
        }
    },
    {
        pregunta: '¿Qué país tiene el desierto del Sahara?',
        respuestas: {
            res1: 'Arabia Saudita',
            res2: 'Marruecos',
            res3: 'Egipto',
            correcta: 'Marruecos'
        }
    },
    {
        pregunta: '¿Quién inventó la bombilla eléctrica?',
        respuestas: {
            res1: 'Nikola Tesla',
            res2: 'Thomas Edison',
            res3: 'Alexander Graham Bell',
            correcta: 'Thomas Edison'
        }
    },
    {
        pregunta: '¿Qué metal es el mejor conductor de electricidad?',
        respuestas: {
            res1: 'Hierro',
            res2: 'Cobre',
            res3: 'Aluminio',
            correcta: 'Cobre'
        }
    },
    {
        pregunta: '¿Qué exponente tiene la base 10 en la notación científica 10^6?',
        respuestas: {
            res1: '3',
            res2: '6',
            res3: '9',
            correcta: '6'
        }
    },
    {
        pregunta: '¿Qué estructura es responsable de la síntesis de proteínas en la célula?',
        respuestas: {
            res1: 'Mitocondria',
            res2: 'Ribosoma',
            res3: 'Lisosoma',
            correcta: 'Ribosoma'
        }
    },
    {
        pregunta: '¿Cuál es el océano más profundo del planeta?',
        respuestas: {
            res1: 'Atlántico',
            res2: 'Índico',
            res3: 'Pacífico',
            correcta: 'Pacífico'
        }
    },
    {
        pregunta: '¿Qué elemento es esencial para la formación de la hemoglobina?',
        respuestas: {
            res1: 'Calcio',
            res2: 'Hierro',
            res3: 'Magnesio',
            correcta: 'Hierro'
        }
    },
    {
        pregunta: '¿Qué escritor creó El Principito?',
        respuestas: {
            res1: 'Jules Verne',
            res2: 'Antoine de Saint-Exupéry',
            res3: 'George Orwell',
            correcta: 'Antoine de Saint-Exupéry'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Corea del Sur?',
        respuestas: {
            res1: 'Seúl',
            res2: 'Busán',
            res3: 'Incheon',
            correcta: 'Seúl'
        }
    },
    {
        pregunta: '¿Qué tipo de ángulo mide más de 90° pero menos de 180°?',
        respuestas: {
            res1: 'Agudo',
            res2: 'Recto',
            res3: 'Obtuso',
            correcta: 'Obtuso'
        }
    },
    {
        pregunta: '¿Cuál es la montaña más alta del mundo?',
        respuestas: {
            res1: 'K2',
            res2: 'Mont Blanc',
            res3: 'Aconcagua',
            correcta: 'Everest'
        }
    },
    {
        pregunta: '¿Qué gas produce el efecto invernadero más significativo?',
        respuestas: {
            res1: 'Nitrógeno',
            res2: 'Oxígeno',
            res3: 'Dióxido de carbono',
            correcta: 'Dióxido de carbono'
        }
    },
    {
        pregunta: '¿Qué órgano humano produce la insulina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Páncreas',
            res3: 'Tiroides',
            correcta: 'Páncreas'
        }
    },
    {
        pregunta: '¿Cuál es el nombre del proceso por el cual las plantas pierden agua por sus hojas?',
        respuestas: {
            res1: 'Germinación',
            res2: 'Transpiración',
            res3: 'Respiración',
            correcta: 'Transpiración'
        }
    },
    {
        pregunta: '¿Qué es la mitosis?',
        respuestas: {
            res1: 'La formación de gametos',
            res2: 'La división celular de una célula en dos idénticas',
            res3: 'La fotosíntesis',
            correcta: 'La división celular de una célula en dos idénticas'
        }
    },
    {
        pregunta: '¿En qué año cayó el muro de Berlín?',
        respuestas: {
            res1: '1985',
            res2: '1989',
            res3: '1991',
            correcta: '1989'
        }
    },
    {
        pregunta: '¿Qué país fue sede de la civilización maya?',
        respuestas: {
            res1: 'Perú',
            res2: 'México',
            res3: 'Guatemala',
            correcta: 'Guatemala'
        }
    },
    {
        pregunta: '¿Qué animal es el símbolo de la paz en muchas culturas?',
        respuestas: {
            res1: 'León',
            res2: 'Paloma',
            res3: 'Águila',
            correcta: 'Paloma'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Noruega?',
        respuestas: {
            res1: 'Bergen',
            res2: 'Oslo',
            res3: 'Trondheim',
            correcta: 'Oslo'
        }
    },
    {
        pregunta: '¿Qué instrumento mide la presión atmosférica?',
        respuestas: {
            res1: 'Termómetro',
            res2: 'Barómetro',
            res3: 'Voltímetro',
            correcta: 'Barómetro'
        }
    },
    {
        pregunta: '¿Qué filósofo dijo “Yo solo sé que no sé nada”?',
        respuestas: {
            res1: 'Platón',
            res2: 'Sócrates',
            res3: 'Aristóteles',
            correcta: 'Sócrates'
        }
    },
    {
        pregunta: '¿Cuál es la nacionalidad de Pablo Neruda?',
        respuestas: {
            res1: 'Argentino',
            res2: 'Chileno',
            res3: 'Peruano',
            correcta: 'Chileno'
        }
    },
    {
        pregunta: '¿Qué tipo de energía tiene un objeto en movimiento?',
        respuestas: {
            res1: 'Energía potencial',
            res2: 'Energía cinética',
            res3: 'Energía térmica',
            correcta: 'Energía cinética'
        }
    },
    {
        pregunta: '¿Qué órgano humano es el principal responsable de filtrar la sangre?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Riñón',
            res3: 'Bazo',
            correcta: 'Riñón'
        }
    },
    {
        pregunta: '¿Cuál es la lengua más hablada del mundo?',
        respuestas: {
            res1: 'Inglés',
            res2: 'Español',
            res3: 'Mandarín',
            correcta: 'Mandarín'
        }
    },
    {
        pregunta: '¿Qué es la entropía en termodinámica?',
        respuestas: {
            res1: 'La temperatura de un cuerpo',
            res2: 'La medida del desorden de un sistema',
            res3: 'La cantidad de gas en un recipiente',
            correcta: 'La medida del desorden de un sistema'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Finlandia?',
        respuestas: {
            res1: 'Turku',
            res2: 'Helsinki',
            res3: 'Tampere',
            correcta: 'Helsinki'
        }
    },
    {
        pregunta: '¿Qué ley de la física relaciona fuerza, masa y aceleración?',
        respuestas: {
            res1: 'Ley de Ohm',
            res2: 'Ley de Hooke',
            res3: 'Ley de Newton',
            correcta: 'Ley de Newton'
        }
    }
]
];

const bancoPreguntasDificiles = [
    {
        pregunta: '¿Cuál es el idioma oficial de los países nórdicos?',
        respuestas: {
            res1: 'Francés',
            res2: 'Alemán',
            res3: 'Sueco',
            correcta: 'Noruego'
        }
    },
    {
        pregunta: '¿Qué científico formuló la teoría de la relatividad?',
        respuestas: {
            res1: 'Isaac Newton',
            res2: 'Galileo Galilei',
            res3: 'Nikola Tesla',
            correcta: 'Albert Einstein'
        }
    },
    {
        pregunta: '¿Qué órgano produce la insulina?',
        respuestas: {
            res1: 'Hígado',
            res2: 'Páncreas',
            res3: 'Riñón',
            correcta: 'Páncreas'
        }
    },
    {
        pregunta: '¿Qué es un pentágono?',
        respuestas: {
            res1: 'Un triángulo',
            res2: 'Un cuadrilátero',
            res3: 'Una figura de siete lados',
            correcta: 'Una figura de cinco lados'
        }
    },
    {
        pregunta: '¿Cuál es la temperatura de ebullición del agua al nivel del mar?',
        respuestas: {
            res1: '90°C',
            res2: '100°C',
            res3: '110°C',
            correcta: '100°C'
        }
    },
    {
        pregunta: '¿Cuál es la capital de Suiza?',
        respuestas: {
            res1: 'Ginebra',
            res2: 'Zúrich',
            res3: 'Lausanne',
            correcta: 'Berna'
        }
    },
    {
        pregunta: '¿Qué país tiene más islas del mundo?',
        respuestas: {
            res1: 'Indonesia',
            res2: 'Canadá',
            res3: 'Noruega',
            correcta: 'Suecia'
        }
    },
    {
        pregunta: '¿Qué es la fotosíntesis?',
        respuestas: {
            res1: 'La respiración de los animales',
            res2: 'La absorción de nutrientes',
            res3: 'La reproducción celular',
            correcta: 'La transformación de luz en energía por plantas'
        }
    },
    {
        pregunta: '¿Cuál es el metal más denso?',
        respuestas: {
            res1: 'Oro',
            res2: 'Platino',
            res3: 'Hierro',
            correcta: 'Osmio'
        }
    },
    {
        pregunta: '¿Qué planeta tiene anillos visibles más prominentes?',
        respuestas: {
            res1: 'Júpiter',
            res2: 'Marte',
            res3: 'Neptuno',
            correcta: 'Saturno'
        }
    }
];

const preguntasDificilesExtras = Array.from({ length: 200 }, (_, index) => {
    const base = bancoPreguntasDificiles[index % bancoPreguntasDificiles.length];
    return {
        pregunta: base.pregunta,
        respuestas: {
            res1: base.respuestas.res1,
            res2: base.respuestas.res2,
            res3: base.respuestas.res3,
            correcta: base.respuestas.correcta
        }
    };
});

arrPreguntas.push(preguntasDificilesExtras);

const cuestion = document.getElementById('cuestion')
const level = document.getElementById('nivel')
const diner = document.getElementById('dinero')
const acerts = document.getElementById('aciertos')
const un_acerts = document.getElementById('fallos')
let answers = document.getElementById('answers')
const info = document.getElementById('info')
const advertir = document.getElementById('advertir')
const reiniciar = document.getElementById('reinicio')

let nivel = 0
level.innerText = nivel

let preguntasNivel = arrPreguntas[nivel]

let aciertos = 0
acerts.innerText = aciertos

let dinero = 0
diner.innerText = dinero

let fallos = 0
un_acerts.innerText = fallos

let res

const information = ['Cuidado, si fallas perderas $1000', 'Cuidado, si fallas perderas la mitad de tu dinero', 'Cuidado, si fallas perderas todo tu dinero']
const advertencia = 'No olvides que si fallas perderas dinero, asi que piensa bien tu respuesta antes de contestar'



//=================================== *seleccionando pregunta* ====================================

function cargarPreguntas() {
    let selector = Math.floor(Math.random() * preguntasNivel.length)

    let cuestionario = preguntasNivel[selector]

    let pregunta = cuestionario.pregunta
    cuestion.innerText = pregunta

    res = cuestionario.respuestas
    answers.innerHTML = ''

    mostrarRespuestas(res)
    mostrarInfo()

    advertir.innerText = advertencia
}

function mostrarRespuestas(r) {
    let respuestas = Object.values(r)

    for(let i = 0; i < respuestas.length; i++){
        let li = document.createElement('li')
        li.innerText = respuestas[i]
        li.addEventListener('click', function (){
            comprobar(li)
            subirNivel()
            mostrarInfo()
        })
        answers.appendChild(li)
    }
}


//================================================================================================



//================================= *verificacion y logica de ganancias* ===================================

function comprobar(li) {
    let userRes = li.innerText

    if(userRes !== res.correcta){
        if(nivel == 0){
            if(dinero >= 1000){
                dinero -= 1000
                diner.innerText = dinero
                fallos += 1
                un_acerts.innerText = fallos
                if(dinero === 0){
                    setTimeout(() => {
                        answers.innerText = 'Perdiste'
                        cuestion.innerText = 'Perdiste'
                    }, 200)
                }
            }
        }
        if(nivel == 1){
            dinero = dinero / 2
            diner.innerText = dinero
                if(dinero < 1000){
                    dinero = 0
                    diner.innerText = dinero
                    setTimeout(() => {
                        answers.innerText = 'Perdiste'
                        cuestion.innerText = 'Perdiste'
                    }, 200)
                }
        }
        if(nivel == 2){
            dinero = 0
            diner.innerText = dinero
            setTimeout(() => {
                answers.innerText = 'Perdiste'
                cuestion.innerText = 'Perdiste'
            }, 200)
        }
        cargarPreguntas()
    }

    if(userRes == res.correcta){
        aciertos += 1
        acerts.innerText = aciertos

        if(nivel == 0) dinero += 1000
        if(nivel == 1) dinero += 2000
        if(nivel == 2) dinero *= 2

        diner.innerText = dinero
        cargarPreguntas()
    }
}

//===========================================================================================================


//====================================== *avances y dificultad* =========================================
function subirNivel() {
    if(aciertos > 9){
        nivel += 1
        level.innerText = nivel
        preguntasNivel = arrPreguntas[nivel]
        aciertos = 0
        acerts.innerText = aciertos

        cargarPreguntas()
    }
    
}
cargarPreguntas()

//========================================================================================================

function mostrarInfo() {
    if(nivel == 0) info.innerText = information[0]
    if(nivel == 1) info.innerText = information[1]
    if(nivel == 2) info.innerText = information[2]
    }

    reiniciar.addEventListener('click', function () {
        aciertos = 0
        acerts.innerText = aciertos
        dinero = 0
        diner.innerText = dinero
        nivel = 0
        level.innerText = nivel
        fallos = 0
        un_acerts.innerText = fallos
    
        preguntasNivel = arrPreguntas[nivel]
        cargarPreguntas()
        mostrarInfo()
    })
