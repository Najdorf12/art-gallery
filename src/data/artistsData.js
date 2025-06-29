import iconLau from "/icons/icon2.jpeg";
import iconEdu from "/icons/icon1.jpeg";
import icon4 from "/icons/icon4.jpeg";

import imgLau1 from "/artists/laura/01.jpg";
import imgLau2 from "/artists/laura/02.jpg";
import imgLau3 from "/artists/laura/03.jpg";
import imgLau4 from "/artists/laura/04.jpg";
import imgLau5 from "/artists/laura/05.jpg";

import imgEdu1 from "/artists/edu/01.jpg";
import imgEdu2 from "/artists/edu/02.jpg";
import imgEdu3 from "/artists/edu/03.jpg";
import imgEdu4 from "/artists/edu/04.jpg";

import imgManu1 from "/artists/manu/01.jpg";
import imgManu2 from "/artists/manu/02.jpg";
import imgManu3 from "/artists/manu/03.jpg";
import imgManu4 from "/artists/manu/04.jpg";
import imgManu5 from "/artists/manu/05.jpg";

import imgGonza1 from "/artists/gonza/01.jpeg";
import imgGonza2 from "/artists/gonza/02.jpeg";
import imgGonza3 from "/artists/gonza/03.jpeg";
import imgGonza4 from "/artists/gonza/04.jpeg";
import imgGonza5 from "/artists/gonza/05.jpeg";
import imgGonza6 from "/artists/gonza/06.jpeg";
import imgGonza7 from "/artists/gonza/07.jpeg";

export const artistsData = [
  {
    id: "LauraAguirre",
    icon: iconLau,
    firstname: "Laura",
    lastname: "Aguirre",
    fullName: "Laura Verónica Aguirre Naretto",
    contentHome: "Lorem ipsum dolor sit",
    email: "laura.en.obra@gmail.com",
    phone: "+56988479123",
    description: `Licenciada en Arte en la PUCV, grabadora y artista textil.
    Actualmente estudia Arquitectura en la misma universidad, buscando nuevas escalas espaciales.
    Cada pieza es un encuentro entre lo íntimo y lo colectivo, un diálogo donde la imagen se construye y deconstruye, como una memoria que se transforma con el tiempo.`,
    description2: `Laura desarrolla su quehacer artístico en torno a diversas técnicas de grabado tradicional, de una factura impecable, combina gestos de apariencia espontanea con un cuidado único en la composición y su estructura  donde el gesto y la materia dialogan para ser parte de su proceso de obra: pliegues y despliegues que transforman la imagen en un acto vivo.
    Cada pieza es un encuentro entre lo íntimo y lo colectivo, un diálogo donde la imagen se construye y deconstruye, como una memoria que se transforma con el tiempo. El grabado es territorio fértil para explorar las tensiones entre lo controlado y lo espontáneo, permitiendo que el gesto se funda con la técnica y emerja como presencia.`,
    quote1: `Cada pieza es un encuentro entre lo íntimo y lo colectivo`,
    quote2: `El grabado es la conexión entre emoción y técnica`,
    quote3: `Cada pieza es un encuentro entre lo íntimo y lo colectivo`,
    obras: [
      {
        image: imgLau1,
        name: "Jinete I",
        description: {
          autor: "Laura Aguirre Naretto",
          titulo: "Jinete I",
          tecnica: "Litografía sobre papel",
          medidas: "50 x 35",
        },
      },
      {
        image: imgLau2,
        name: "Jinete II",
        description: {
          autor: "Laura Aguirre Naretto",
          titulo: "Jinete II",
          tecnica: "Litografía sobre papel",
          medidas: "50 x 35",
        },
      },
      {
        image: imgLau3,
        name: "Jinete III",
        description: {
          autor: "Laura Aguirre Naretto",
          titulo: "Jinete III",
          tecnica: "Litografía sobre papel",
          medidas: "50 x 35",
        },
      },
      {
        image: imgLau4,
        name: "Jinete IV",
        description: {
          autor: "Laura Aguirre Naretto",
          titulo: "Jinete IV",
          tecnica: "Litografía sobre papel",
          medidas: "50 x 35",
        },
      },
      {
        image: imgLau5,
        name: "Jinete V",
        description: {
          autor: "Laura Aguirre Naretto",
          titulo: "Jinete V",
          tecnica: "Litografía sobre papel",
          medidas: "50 x 35",
        },
      },
    ],
  },

  {
    id: "EduHinojosa",
    icon: iconEdu,
    firstname: "Edu",
    lastname: "Hinojosa",
    fullName: "Eduardo Hinojosa",
    contentHome: "Lorem ipsum dolor sit",
    email: "edophinojosa@gmail.com",
    phone: "+56978357440",
    description: `Eduardo Perez Hinojosa (Edu Hinojosa) es licenciado en Artes (UPLA) y diseñador escénico con amplia experiencia en escenógrafia y montaje de arte. Desde el año 2016 ha trabajado en diseño escénico, instalación y performance para diversos proyectos con artistas de Chile, Argentina, México, Rumania, Francia, Italia y España.`,
    description2: `Participando desde el área técnica y de montaje en diferentes espectáculos relacionados a las artes tanto en Chile como en el extranjero; como diseñador escénico y montajista en el festival de teatro para el fin del mundo TFM, 2017 México; Asistencia de arte en proyecto IMPERECEDEROS dir. Stefanie Duarte, intervención y performance Site-especific, obra expuesta en “Prague Quadriennial of Performance Desing y Space 2019”, Praga, Republica Checa o siendo parte del equipo de montaje proyecto LA COCINA PUBLICA intervención y performance Site-specific, temporada 2022, Paris, Francia.
   Actualmente, se desempeña como montajista de arte y museografía para distintas galerías, museos y salas de arte en Chile, destacándose como montajista del Festival  Internacional de Fotografía de Valparaíso (FIFV) desde el año 2018 a la fecha y siendo parte del equipo de montaje FAGNES en la realización de la "XII Bienal de Artes Internacional de Valparaíso, 2024" uno de los eventos de arte contemporáneo más importantes del país. 
   Su obra pictórica toma elementos de la tradición académica del óleo, sumando gestos de contemporaneidad por medio de la  mixtura de técnicas, recursos graficos y la incorporacion de materiales como: tintas, acrílicos y pinturas sintéticas. 
   Sus recursos narrativos y poéticos entrelazan  indígenas latinoamericanos con elementos propios de la cultura actual de consumo, elaborando un discurso crítico en torno al vinculo dado entre “desarrollo” y capitalismo.`,
    quote1: `Es un dialogo irreverente entre primitivismo y modernidad`,
    quote2: `Busco representar un sincretismo de imaginarios latinoamericanos habitando un mundo contemporáneo`,
    obras: [
      {
        image: imgEdu1,
        name: "Bombas de Colores",
        description: {
          autor: "Eduardo Perez Hinojosa",
          titulo: "Bombas de Colores",
          tecnica: "Óleo y acílico sobre tela",
          medidas: "70 x 60",
        },
      },
      {
        image: imgEdu2,
        name: "Tu Caos es tu Calma",
        description: {
          autor: "Eduardo Perez Hinojosa",
          titulo: "Tu Caos es tu Calma",
          tecnica: "Óleo y acrílico sobre tela",
          medidas: "70 x 50",
        },
      },
      {
        image: imgEdu3,
        name: "No es una pesadilla, es la realidad",
        description: {
          autor: "Eduardo Perez Hinojosa",
          titulo: "No es una pesadilla, es la realidad",
          tecnica: "Óleo y acrílico sobre tela",
          medidas: "96 x 120",
        },
      },
      {
        image: imgEdu4,
        name: "Sagrado Caos",
        description: {
          autor: "Eduardo Perez Hinojosa",
          titulo: "Sagrado Caos",
          tecnica: "Óleo y acrílico sobre tela",
          medidas: "100 x 80",
        },
      },
    ],
  },
  {
    id: "ManuJorquera",
    icon: icon4,
    firstname: "Manu",
    lastname: "Jorquera",
    fullName: "Laura Aguirre Naretto",
    contentHome: "Lorem ipsum dolor sit",
    description: `Se formó como grabador en la Escuela Nacional de Bellas Artes de Viña del Mar, y posteriormente continuó su desarrollo artístico de manera autodidacta. Desde muy temprana edad se vinculó al Graffiti y al Street Art, estilos urbanos que influyeron profundamente en su obra, aportando una estética vibrante, fluida y contemporánea, que se ha convertido en su sello personal.`,
    description2:
      "Como artista, Jorquera ha desarrollado un imaginario visual que rescata y resignifica símbolos de la cultura popular mestiza chilena y latinoamericana, tales como la gente común, el gallo —ícono de fuerza y rebeldía—, y elementos de la religiosidad cristiana popular, en los que se mezcla lo sagrado y lo cotidiano.",
    quote1: `Con cada pincelada busco mezclar lo sagrado con lo cotidiano`,
    quote2: `El graffiti y el Street art aportaron una estética vibrante, fluida y contemporánea a mi pintura de caballete`,
    quote3: `Rescato símbolos de la cultura popular mestiza chilena y latinoamericana`,
    obras: [
      {
        image: imgManu1,
        name: "Niño disfrazado de gallo III",
        description: {
          autor: "Manu Jorquera",
          titulo: "Niño disfrazado de gallo III",
          tecnica: "Técnica mixta sobre cartón",
          medidas: "51 x 73",
        },
      },
      {
        image: imgManu2,
        name: "Retrato Morena I",
        description: {
          autor: "Manu Jorquera",
          titulo: "Retrato Morena I",
          tecnica: "Técnica mixta sobre cartón",
          medidas: "48 x 46",
        },
      },
      {
        image: imgManu3,
        name: "Pareja de matrimonio III",
        description: {
          autor: "Manu Jorquera",
          titulo: "Pareja de matrimonio III",
          tecnica: "Acrílico sobre papel",
          medidas: "38 x 55",
        },
      },
      {
        image: imgManu4,
        name: "Florero Rojo II",
        description: {
          autor: "Manu Jorquera",
          titulo: "Florero Rojo II",
          tecnica: "Técnica mixta sobre papel",
          medidas: "52 x 75",
        },
      },
      {
        image: imgManu5,
        name: "Gallo de pelea Azul I",
        description: {
          autor: "Manu Jorquera",
          titulo: "Gallo de pelea Azul I",
          tecnica: "Técnica mixta sobre papel",
          medidas: "65 x 35",
        },
      },
    ],
  },
  {
    id: "GonzaloOlivares",
    icon: icon4,
    firstname: "Gonza",
    lastname: "Olivares",
    fullName: "Laura Aguirre Naretto",
    contentHome: "Lorem ipsum dolor sit",
    description: `Diseñador gráfico desde el año 2008. Desde el 2012, fundador junto a la compañía Teatro Turba, de la editorial Corazón de Hueso. Algunos de sus trabajos realizados son piezas gráficas para las obras teatrales y literarias:  Papá Noel Mamá Tampoco, Dubois Santo Asesino, La Táctica del Avestruz, Rodeo’s, Las Trajedias se las dejamos a Shakespeare, Las Estaciones de Eva, Dubois Vive y para el Cómic “El Color Secreto”.`,
    description2:
      "Desde el collage ha generado publicaciones tipo fanzines como “Piedra” o “Salbutamol”, ambos ejemplares donde utiliza la técnica del recorte para ilustrar y presentar obras en formato reducido.Ha realizado talleres de gráfica y serigrafía abiertos en la vía pública para niñas y niños de poblaciones de Valparaíso y La Calera, además de crear espacios de trabajo en torno a la gráfica en centros cerrados del SENAME, (Servicio Nacional de Menores), organismo gubernamental chileno, encargado de la protección de derechos de niños, niñas y adolescentes, de entre 14 y 17 vulnerados en sus derechos o que han infringido la ley.",
    quote1: "La gráfica es una herramienta de trabajo social",
    quote2: "Por medio de la gráfica construyo espacios de encuentro",
    obras: [
      {
        image: imgGonza1,
        name: "Puré de papas",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Sagrado Caos",
          tecnica: "Collage análogo sobre papel",
          medidas: "33 x 20",
        },
      },
      {
        image: imgGonza2,
        name: "Gabriela",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Gabriela",
          tecnica: "Collage análogo sobre papel",
          medidas: "55 x 30",
        },
      },
      {
        image: imgGonza3,
        name: "Co-Demar",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Co-Demar",
          tecnica: "Collage análogo sobre papel",
          medidas: "30 x 45",
        },
      },
      {
        image: imgGonza4,
        name: "El nuevo Mundo",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "El nuevo mundo",
          tecnica: "Collage análogo sobre papel",
          medidas: "50 x 25",
        },
      },
      {
        image: imgGonza5,
        name: "Jinetes",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Jinetes",
          tecnica: "Collage análogo sobre papel",
          medidas: "30 x 42",
        },
      },
      {
        image: imgGonza6,
        name: "Madre-Culebra",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Madre-Culebra",
          tecnica: "Collage análogo sobre papel",
          medidas: "45 x 29",
        },
      },
      {
        image: imgGonza7,
        name: "Lorem Impsum",
        description: {
          autor: "Gonzalo Olivares Díaz",
          titulo: "Sagrado Caos",
          tecnica: "Collage análogo sobre papel",
          medidas: "100 x 80",
        },
      },
    ],
  },
];
