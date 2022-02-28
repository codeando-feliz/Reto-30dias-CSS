let casas = [
    {nombre: "slytherin",
    descripcion: "La Casa Slytherin está caracterizada principalmente por la ambición y "
      + "la astucia. Fue fundada por el mago Salazar Slytherin. Su principal reliquia "
      + "es el guardapelo de Salazar Slytherin. El animal representativo es la serpiente, "
      + "sus colores son verde y plateado y el elemento es el agua, asociada con la astucia"
      + " y la frialdad.",
    background: "linear-gradient(140deg, rgb(80, 135, 42) 0%, var(--gradient-bg-color) 45%, var(--main-bg-color) 100%)"},
    {nombre: "hufflepuff",
    descripcion: "La fundadora es nada menos que la bruja Helga Hufflepuff, amiga desde "
      + "la infancia de Rowena Ravenclaw. Helga fue una bruja muy noble, amigable y "
      + "la principal impulsora de que Hogwarts aceptase a alumnos nacidos de muggles. "
      + "La principal reliquia de la casa es la copa de Helga Hufflepuff. El símbolo de "
      + "la casa es un tejón negro y sus colores representativos son el amarillo y el "
      + "negro carbón.",
    background: "linear-gradient(140deg, rgb(217, 186, 45) 0%, var(--gradient-bg-color) 45%, var(--main-bg-color) 100%)"},
    {nombre: "ravenclaw",
    descripcion: "Ravenclaw busca alumnos creativos, curiosos y que siempre busquen la "
      + "respuesta. Fue fundada por la bruja, nacida en las cañadas de Escocia, Rowena "
      + "Ravenclaw. Supuestamente es la principal inventora del nombre, lugar y formato "
      + "de Hogwarts. También es la causante de que las escaleras se muevan. Su principal "
      + "reliquia es la diadema de Rowena Ravenclaw. El símbolo de la casa es el águila, "
      + "aunque en alguna versión del escudo es un cuervo.",
    background: "linear-gradient(140deg, rgb(85, 151, 180) 0%, var(--gradient-bg-color) 45%, var(--main-bg-color) 100%)"},
    {nombre: "gryffindor",
    descripcion: "La Casa Gryffindor fue fundada por el célebre mago Godric Gryffindor. "
      + "Godric sólo aceptaba en su casa a aquellos magos y brujas que tenían valentía, "
      + "disposición, coraje y caballerosidad, ya que éstas son las cualidades de un "
      + "auténtico Gryffindor. Los colores de esta casa son el dorado y el escarlata "
      + "y su símbolo es un león.",
    background: "linear-gradient(140deg, rgb(187, 21, 14) 0%, var(--gradient-bg-color) 45%, var(--main-bg-color) 100%)"}
  ];

  function houseChosen(id){
    document.querySelector(".escudo").src = `img/${casas[id].nombre}.png`;
    document.querySelector(".casa-nom").innerHTML = casas[id].nombre;
    document.querySelector(".casa-des").innerHTML = casas[id].descripcion;
    document.querySelector("body").style.background = casas[id].background;
  }