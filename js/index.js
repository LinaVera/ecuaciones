function signosS(sx, sy, sz) {
  signos = 0;
  if (sx == '+') signos++;
  if (sy == '+') signos++;
  if (sz == '+') signos++;
  return signos;
}

function clasificar() {
  mensaje = "MENSAJE";
  ruta = "RUTA DE IMAGEN";

  const sX = document.getElementById("singX").value;
  const a = document.getElementById("a").value;
  const x = document.getElementById("x").value;
  const sY = document.getElementById("singY").value;
  const b = document.getElementById("b").value;
  const y = document.getElementById("y").value;
  const sZ = document.getElementById("singZ").value;
  const c = document.getElementById("c").value;
  const z = document.getElementById("z").value;
  solucion = document.getElementById("solucion");
  grafica  = document.getElementById("grafica");

  //validaciones
  f=1;
  signos = signosS(sX, sY, sZ);
  cuadrados = x == 2 && y == 2 && z == 2;
  valores = a != 0 && b != 0 && c != 0;
  exponentes = x < 0 || y < 0 || z < 0 || x > 2 || y > 2 || z > 2;
  esfera = (a == b && b == c) && cuadrados && signos == 3 && f == 1;
  esferoide = !esfera && (a == b || a == c || b == c) && cuadrados && signos == 3 && f == 1 && valores;
  elipsoide = cuadrados && signos == 3 && f == 1 && valores && !esfera && !esferoide;
  hiperUna = cuadrados && signos == 2 && f == 1 && valores;
  hiperDos = cuadrados && signos == 1 && f == 1 && valores;
  cono = cuadrados && signos == 2 && f == 0 && valores;
  parabola = (x == 2 && y == 2 && z == 1) || (x == 2 && y == 1 && z == 2) || (x == 1 && y == 2 && z == 2);
  paraElip = (parabola) && (signos == 2) && (f == 0) && valores;
  paraHiper = (parabola) && (signos == 1) && (f == 0) && valores;
  if (valores) {
    if (exponentes) {
      mensaje = "EXPONENTES INVÁLIDOS";
      alert(mensaje);
      ruta = "https://definicion.de/wp-content/uploads/2009/02/error.png";
    } else if (esfera) {
      mensaje = "ES UNA ESFERA";
      ruta = "https://i.pinimg.com/originals/b5/e3/89/b5e389ce55160463f8a7ccbf09075e0e.jpg";
    } else if (esferoide) {
      mensaje = "ES UN ESFEROIDE";
      ruta = "https://www.disfrutalasmatematicas.com/geometria/images/spheroid.svg";
    } else if (elipsoide) {
      mensaje = "ES UN ELIPSOIDE";
      ruta = "https://www.urbipedia.org/images/d/da/Elipsoide_de_revoluci%C3%B3n_pelota_rugby.png";
    } else if (hiperUna) {
      mensaje = "ES UN HIPERBOLOIDE DE UNA HOJA";
      ruta = "https://es-academic.com/pictures/eswiki/72/Hyperb1N.png";
    } else if (hiperDos) {
      mensaje = "ES UN HIPERBOLOIDE DE DOS HOJAS";
      ruta = "https://www.urbipedia.org/images/thumb/d/de/Hiperboloide_dos_hojas.png/240px-Hiperboloide_dos_hojas.png";
    } else if (cono) {
      mensaje = "ES UN CONO ELÍPTICO";
      ruta = "https://sites.google.com/site/calculovectorialhakim/_/rsrc/1425772217710/superficies-cuadraticas/fig3-conoeliptico.jpg?height=320&width=219";
    } else if (paraElip) {
      mensaje = "ES UN PARABOLOIDE ELIPTICO";
      ruta = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Paraboloid_of_Revolution.svg/230px-Paraboloid_of_Revolution.svg.png";
    } else if (paraHiper) {
      mensaje = "ES UN PARABOLOIDE HIPERBOLICO";
      ruta = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/HyperbolicParaboloid.svg/1200px-HyperbolicParaboloid.svg.png";
    }
  } else {
    mensaje = "VALORES PARA A, B, C INVÁLIDOS";
    ruta = "https://definicion.de/wp-content/uploads/2009/02/error.png";
    alert(mensaje);
  }

  if (mensaje == null) {
    ruta = "https://definicion.de/wp-content/uploads/2009/02/error.png";
    alert("LA ECUACION NO PERTENECE A NINGUNA SUPERFICIE AQUÍ ESTABLECIDA");
  } else {
    console.log(ruta);
  }

  solucion.innerHTML = mensaje;
  grafica.innerHTML = "<img src='"+ ruta +"' alt='imagen del resultado' class='card-img-top' >";
  
}
