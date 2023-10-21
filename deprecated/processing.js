// function setup(){
//     if(displayWidth<1025){
//         displayWidth = displayWidth+300;
//     } else {}
//     createCanvas(displayWidth, 800);
//     background(204); // gray
//     textFont("Roboto", 28);
//     smooth();
// }
// function side_bar(){
//     rectMode(CORNER); fill(255); noStroke();
//     rect(1280*2-140,0,width,800*3);
//     rect(0,1500,1280*3,500);
//     textAlign(RIGHT); fill(0);
//     text("El flujo presenta la gestión que\n"
//     +"tienen los desechos sólidos de\n"
//     +"cada delegación de la ciudad\n"
//     +"de México con base en la\n"
//     +"información recabada en el\n"
//     +"Inventario de Residuos Sólidos\n"
//     +"del reporte de la SEDEMA (2015).\n\n"
//     +"La forma del gráfico se inspiró\n"
//     +"a partir del sistema de flujo o mapa\n"
//     +"que propone Charles Minard en\n"
//     +"1869 para visualizar el movimiento,\n"
//     +"las pérdidas humanas y la\n"
//     +"temperatura ambiental durante la\n"
//     +"campaña de Napoleón hacia\n"
//     +"Rusia en 1812.\n\n"
//     +"La dirección del flujo revela que\n"
//     +"los residuos sólidos convergen\n"
//     +"en diferentes etapas del proceso\n"
//     +"antes de ser o no reciclados.\n\n"
//     +"En el sistema se representan los\n"
//     +"‘huecos de información’ como\n"
//     +"rutas o flujos en color negro\n"
//     +"y sin grosor para diferenciar las\n"
//     +"grandes relaciones que muestran\n"
//     +"las plantas de transferencia hacia\n"
//     +"los rellenos sanitarios de los que\n"
//     +"dispone la ciudad.\n\n"
//     +"El proyecto se encuentra en\n"
//     +"mantenimiento para procesar los\n"
//     +"datos que existen sobre la gestión\n"
//     +"de residuos sólidos urbanos.\n\n"
//     +"Actualización: 1/06/2018", 1280*2+450, 100);
//     textAlign(LEFT);
//     text("Si te interesa colaborar mándame "
//     +"un whatsapp al 5547904238 o "
//     +"me puedes escribir un correo a "
//     +"erictorres.velasco@gmail.com "
//     +"o también puedes checar el código\n"
//     +"haciendo clic en el encabezado "
//     +"para comentarlo y comenzar :)\n\n"
//     +"Toda la información fue extraída de los siguientes enlaces: "
//     +"http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14-dic-2016.compressed.pdf y\n"
//     +"http://www.cdmx.gob.mx/storage/app/media/Guia_Estilos_Sitios_Web_CDMX_v.1.3.pdf", 100, 1600);
// }
function draw() {
  background(204); // gray
  strokeWeight(1);
  stroke(0);
  //scale(0.4);
  //---------------------------------------------------------- VALORES PARA INICIALIZAR
  // Delegaciones
  (x1_delegaciones = 50),
    (y1_delegaciones = 100),
    (x2_delegaciones = 50),
    (y2_delegaciones = 800 * 2);
  // line(x1_delegaciones, 0, x2_delegaciones, y2_delegaciones);
  // Transferencias
  (x1_transferencias = 600),
    (y1_transferencias = 30),
    (x2_transferencias = 600),
    (y2_transferencias = 800 * 2);
  // line(x1_transferencias, 0, x2_transferencias, y2_transferencias);
  // Compactadora, composta y disposición final
  (x1_compactadora = 1280 * 2 - 180),
    (y1_compactadora = 180),
    (x2_compactadora = 1280 * 2 - 180),
    (y2_compactadora = 800 * 2);
  (x1_composta = x1_compactadora),
    (y1_composta = 50),
    (x2_composta = x1_compactadora),
    (y2_composta = 800 * 2);
  (x1_disposicion = x1_compactadora),
    (y1_disposicion = 265),
    (x2_disposicion = x1_compactadora),
    (y2_disposicion = 800 * 2);
  (x1_recuperacion = x1_compactadora),
    (y1_recuperacion = 850),
    (x2_recuperacion = x1_compactadora),
    (y2_recuperacion = 800 * 2);
  // line(x1_compactadora, 0, x2_compactadora, y2_compactadora);
  // Selección
  (x1_seleccion = 1600),
    (y1_seleccion = 900),
    (x2_seleccion = 1600),
    (y2_seleccion = 800 * 2);
  (x1_rme = x1_seleccion),
    (y1_rme = 870),
    (x2_rme = x1_seleccion),
    (y2_rme = 800 * 2);
  // line(x1_seleccion, 0, x2_seleccion, y2_seleccion);
  // Recolección Edo. de México
  (x1_edo = 800), (y1_edo = 350), (x2_edo = 800), (y2_edo = 800 * 2);
  // line(x1_edo, 0, x2_edo, y2_edo);
  // Recolección DGSU
  (x1_dgsu = 370), (y1_dgsu = 1050), (x2_dgsu = 370), (y2_dgsu = 800 * 2);
  // line(x1_dgsu, 0, x2_dgsu, y2_dgsu);
  // Recolección particular
  (x1_particular = 310),
    (y1_particular = 1000),
    (x2_particular = 310),
    (y2_particular = 800 * 2);
  // line(x1_particular, 0, x2_particular, y2_particular);
  // Recolección CEDA
  (x1_ceda = 250), (y1_ceda = 950), (x2_ceda = 250), (y2_ceda = 800 * 2);
  // line(x1_ceda, 0, x2_ceda, y2_ceda);

  //---------------------------------------------------------- DIBUJAR CURVAS DESDE LOS SITIOS DE TRANSFERENCIA
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 01
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias,
    700,
    y1_transferencias,
    700,
    y1_compactadora,
    x1_compactadora,
    y1_compactadora,
  );
  strokeWeight(1);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 3,
    700,
    y1_transferencias + 3,
    700,
    y1_disposicion,
    x1_disposicion,
    y1_disposicion,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 4,
    700,
    y1_transferencias + 4,
    700,
    y1_disposicion + 180,
    x1_disposicion,
    y1_disposicion + 180,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 5,
    700,
    y1_transferencias + 5,
    700,
    y1_disposicion + 410,
    x1_disposicion,
    y1_disposicion + 410,
  );
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 6,
    700,
    y1_transferencias + 6,
    700,
    y1_seleccion,
    x1_seleccion,
    y1_seleccion,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 7,
    700,
    y1_transferencias + 7,
    700,
    y1_seleccion + 210,
    x1_seleccion,
    y1_seleccion + 210,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 02
  strokeWeight(14);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 80 - 50,
    700,
    y1_transferencias + 80 - 50,
    700,
    y1_composta,
    x1_composta,
    y1_composta,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 90 - 50,
    700,
    y1_transferencias + 90 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(19);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 102 - 50,
    700,
    y1_transferencias + 102 - 50,
    700,
    y1_disposicion + 10,
    x1_disposicion,
    y1_disposicion + 10,
  );
  strokeWeight(30);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 126 - 50,
    700,
    y1_transferencias + 126 - 50,
    700,
    y1_disposicion + 195,
    x1_disposicion,
    y1_disposicion + 195,
  );
  strokeWeight(23);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 152 - 50,
    700,
    y1_transferencias + 152 - 50,
    700,
    y1_disposicion + 422,
    x1_disposicion,
    y1_disposicion + 422,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 165 - 50,
    700,
    y1_transferencias + 165 - 50,
    700,
    y1_disposicion + 495,
    x1_disposicion,
    y1_disposicion + 495,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 168 - 50,
    700,
    y1_transferencias + 168 - 50,
    700,
    y1_disposicion + 530,
    x1_disposicion,
    y1_disposicion + 530,
  );
  strokeWeight(29);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 184 - 50,
    700,
    y1_transferencias + 184 - 50,
    700,
    y1_seleccion + 15,
    x1_seleccion,
    y1_seleccion + 15,
  );
  strokeWeight(8);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 202 - 50,
    700,
    y1_transferencias + 202 - 50,
    700,
    y1_seleccion + 215,
    x1_seleccion,
    y1_seleccion + 215,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 03
  strokeWeight(11);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 225 - 50,
    700,
    y1_transferencias + 225 - 50,
    700,
    y1_composta + 12,
    x1_composta,
    y1_composta + 12,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 233 - 50,
    700,
    y1_transferencias + 233 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(6);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 239 - 50,
    700,
    y1_transferencias + 239 - 50,
    700,
    y1_disposicion + 22,
    x1_disposicion,
    y1_disposicion + 22,
  );
  strokeWeight(22);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 253 - 50,
    700,
    y1_transferencias + 253 - 50,
    700,
    y1_disposicion + 221,
    x1_disposicion,
    y1_disposicion + 221,
  );
  strokeWeight(1);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 264 - 50,
    700,
    y1_transferencias + 264 - 50,
    700,
    y1_seleccion + 30,
    x1_seleccion,
    y1_seleccion + 30,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 266 - 50,
    700,
    y1_transferencias + 266 - 50,
    700,
    y1_seleccion + 220,
    x1_seleccion,
    y1_seleccion + 220,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 04
  strokeWeight(29);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 295 - 50,
    700,
    y1_transferencias + 295 - 50,
    700,
    y1_composta + 32,
    x1_composta,
    y1_composta + 32,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 312 - 50,
    700,
    y1_transferencias + 312 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(3);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 316 - 50,
    700,
    y1_transferencias + 316 - 50,
    700,
    y1_disposicion + 26,
    x1_disposicion,
    y1_disposicion + 26,
  );
  strokeWeight(33);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 334 - 50,
    700,
    y1_transferencias + 334 - 50,
    700,
    y1_disposicion + 248,
    x1_disposicion,
    y1_disposicion + 248,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 351 - 50,
    700,
    y1_transferencias + 351 - 50,
    700,
    y1_disposicion + 497,
    x1_disposicion,
    y1_disposicion + 497,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 352 - 50,
    700,
    y1_transferencias + 352 - 50,
    700,
    y1_disposicion + 532,
    x1_disposicion,
    y1_disposicion + 532,
  );
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 353 - 50,
    700,
    y1_transferencias + 353 - 50,
    700,
    y1_seleccion + 31,
    x1_seleccion,
    y1_seleccion + 31,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 354 - 50,
    700,
    y1_transferencias + 354 - 50,
    700,
    y1_seleccion + 221,
    x1_seleccion,
    y1_seleccion + 221,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 05
  strokeWeight(7);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 370 - 50,
    700,
    y1_transferencias + 370 - 50,
    700,
    y1_composta + 50,
    x1_composta,
    y1_composta + 50,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 376 - 50,
    700,
    y1_transferencias + 376 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(8);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 383 - 50,
    700,
    y1_transferencias + 383 - 50,
    700,
    y1_disposicion + 31,
    x1_disposicion,
    y1_disposicion + 31,
  );
  strokeWeight(14);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 394 - 50,
    700,
    y1_transferencias + 394 - 50,
    700,
    y1_disposicion + 271,
    x1_disposicion,
    y1_disposicion + 271,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 401 - 50,
    700,
    y1_transferencias + 401 - 50,
    700,
    y1_disposicion + 434,
    x1_disposicion,
    y1_disposicion + 434,
  );
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 402 - 50,
    700,
    y1_transferencias + 402 - 50,
    700,
    y1_seleccion + 32,
    x1_seleccion,
    y1_seleccion + 32,
  );
  strokeWeight(7);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 406 - 50,
    700,
    y1_transferencias + 406 - 50,
    700,
    y1_seleccion + 225,
    x1_seleccion,
    y1_seleccion + 225,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 06
  strokeWeight(2);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 420 - 50,
    700,
    y1_transferencias + 420 - 50,
    700,
    y1_composta + 54,
    x1_composta,
    y1_composta + 54,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 424 - 50,
    700,
    y1_transferencias + 424 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(1);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 427 - 50,
    700,
    y1_transferencias + 427 - 50,
    700,
    y1_disposicion + 35,
    x1_disposicion,
    y1_disposicion + 35,
  );
  strokeWeight(2);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 428 - 50,
    700,
    y1_transferencias + 428 - 50,
    700,
    y1_disposicion + 279,
    x1_disposicion,
    y1_disposicion + 279,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 430 - 50,
    700,
    y1_transferencias + 430 - 50,
    700,
    y1_disposicion + 435,
    x1_disposicion,
    y1_disposicion + 435,
  );
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 431 - 50,
    700,
    y1_transferencias + 431 - 50,
    700,
    y1_seleccion + 33,
    x1_seleccion,
    y1_seleccion + 33,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 432 - 50,
    700,
    y1_transferencias + 432 - 50,
    700,
    y1_seleccion + 228,
    x1_seleccion,
    y1_seleccion + 228,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 07
  strokeWeight(10);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 450 - 50,
    700,
    y1_transferencias + 450 - 50,
    700,
    y1_composta + 60,
    x1_composta,
    y1_composta + 60,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 458 - 50,
    700,
    y1_transferencias + 458 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(35);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 478 - 50,
    700,
    y1_transferencias + 478 - 50,
    700,
    y1_disposicion + 52,
    x1_disposicion,
    y1_disposicion + 52,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 496 - 50,
    700,
    y1_transferencias + 496 - 50,
    700,
    y1_disposicion + 280,
    x1_disposicion,
    y1_disposicion + 280,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 498 - 50,
    700,
    y1_transferencias + 498 - 50,
    700,
    y1_disposicion + 436,
    x1_disposicion,
    y1_disposicion + 436,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 500 - 50,
    700,
    y1_transferencias + 500 - 50,
    700,
    y1_disposicion + 498,
    x1_disposicion,
    y1_disposicion + 498,
  );
  strokeWeight(2);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 501 - 50,
    700,
    y1_transferencias + 501 - 50,
    700,
    y1_seleccion + 35,
    x1_seleccion,
    y1_seleccion + 35,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 503 - 50,
    700,
    y1_transferencias + 503 - 50,
    700,
    y1_seleccion + 230,
    x1_seleccion,
    y1_seleccion + 230,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 08
  strokeWeight(4);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 520 - 50,
    700,
    y1_transferencias + 520 - 50,
    700,
    y1_composta + 67,
    x1_composta,
    y1_composta + 67,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 525 - 50,
    700,
    y1_transferencias + 525 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(6);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 531 - 50,
    700,
    y1_transferencias + 531 - 50,
    700,
    y1_disposicion + 72,
    x1_disposicion,
    y1_disposicion + 72,
  );
  strokeWeight(11);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 539 - 50,
    700,
    y1_transferencias + 539 - 50,
    700,
    y1_disposicion + 286,
    x1_disposicion,
    y1_disposicion + 286,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 545 - 50,
    700,
    y1_transferencias + 545 - 50,
    700,
    y1_disposicion + 438,
    x1_disposicion,
    y1_disposicion + 438,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 547 - 50,
    700,
    y1_transferencias + 547 - 50,
    700,
    y1_disposicion + 500,
    x1_disposicion,
    y1_disposicion + 500,
  );
  strokeWeight(7);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 552 - 50,
    700,
    y1_transferencias + 552 - 50,
    700,
    y1_seleccion + 39,
    x1_seleccion,
    y1_seleccion + 39,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 557 - 50,
    700,
    y1_transferencias + 557 - 50,
    700,
    y1_seleccion + 233,
    x1_seleccion,
    y1_seleccion + 233,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 09
  strokeWeight(19);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 575 - 45,
    700,
    y1_transferencias + 575 - 45,
    700,
    y1_composta + 78,
    x1_composta,
    y1_composta + 78,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 587 - 45,
    700,
    y1_transferencias + 587 - 45,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(41);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 610 - 45,
    700,
    y1_transferencias + 610 - 45,
    700,
    y1_disposicion + 95,
    x1_disposicion,
    y1_disposicion + 95,
  );
  strokeWeight(57);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 659 - 45,
    700,
    y1_transferencias + 659 - 45,
    700,
    y1_disposicion + 320,
    x1_disposicion,
    y1_disposicion + 320,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 688 - 45,
    700,
    y1_transferencias + 688 - 45,
    700,
    y1_disposicion + 439,
    x1_disposicion,
    y1_disposicion + 439,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 690 - 45,
    700,
    y1_transferencias + 690 - 45,
    700,
    y1_disposicion + 503,
    x1_disposicion,
    y1_disposicion + 503,
  );
  strokeWeight(8);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 695 - 45,
    700,
    y1_transferencias + 695 - 45,
    700,
    y1_seleccion + 46,
    x1_seleccion,
    y1_seleccion + 46,
  );
  strokeWeight(4);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 701 - 45,
    700,
    y1_transferencias + 701 - 45,
    700,
    y1_seleccion + 236,
    x1_seleccion,
    y1_seleccion + 236,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 10
  strokeWeight(5);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 720 - 50,
    700,
    y1_transferencias + 720 - 50,
    700,
    y1_composta + 90,
    x1_composta,
    y1_composta + 90,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 725 - 50,
    700,
    y1_transferencias + 725 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(15);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 735 - 50,
    700,
    y1_transferencias + 735 - 50,
    700,
    y1_disposicion + 123,
    x1_disposicion,
    y1_disposicion + 123,
  );
  strokeWeight(28);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 756 - 50,
    700,
    y1_transferencias + 756 - 50,
    700,
    y1_disposicion + 362,
    x1_disposicion,
    y1_disposicion + 362,
  );
  strokeWeight(3);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 771 - 50,
    700,
    y1_transferencias + 771 - 50,
    700,
    y1_disposicion + 440,
    x1_disposicion,
    y1_disposicion + 440,
  );
  strokeWeight(2);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 773 - 50,
    700,
    y1_transferencias + 773 - 50,
    700,
    y1_disposicion + 505,
    x1_disposicion,
    y1_disposicion + 505,
  );
  strokeWeight(9);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 778 - 50,
    700,
    y1_transferencias + 778 - 50,
    700,
    y1_seleccion + 54,
    x1_seleccion,
    y1_seleccion + 54,
  );
  strokeWeight(4);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 783 - 50,
    700,
    y1_transferencias + 783 - 50,
    700,
    y1_seleccion + 240,
    x1_seleccion,
    y1_seleccion + 240,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 11
  strokeWeight(11);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 800 - 50,
    700,
    y1_transferencias + 800 - 50,
    700,
    y1_composta + 98,
    x1_composta,
    y1_composta + 98,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 808 - 50,
    700,
    y1_transferencias + 808 - 50,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 812 - 50,
    700,
    y1_transferencias + 812 - 50,
    700,
    y1_disposicion + 131,
    x1_disposicion,
    y1_disposicion + 131,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 813 - 50,
    700,
    y1_transferencias + 813 - 50,
    700,
    y1_disposicion + 376,
    x1_disposicion,
    y1_disposicion + 376,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 814 - 50,
    700,
    y1_transferencias + 814 - 50,
    700,
    y1_disposicion + 441,
    x1_disposicion,
    y1_disposicion + 441,
  );
  draw_curve(
    x1_transferencias,
    y1_transferencias + 815 - 50,
    700,
    y1_transferencias + 815 - 50,
    700,
    y1_disposicion + 506,
    x1_disposicion,
    y1_disposicion + 506,
  );
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 816 - 50,
    700,
    y1_transferencias + 816 - 50,
    700,
    y1_seleccion + 59,
    x1_seleccion,
    y1_seleccion + 59,
  );
  stroke(0, 0, 0, 140);
  //---------------------------------------------------------- SITIO 12
  strokeWeight(10);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 840 - 60,
    700,
    y1_transferencias + 840 - 60,
    700,
    y1_composta + 108,
    x1_composta,
    y1_composta + 108,
  );
  strokeWeight(6);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 848 - 60,
    700,
    y1_transferencias + 848 - 60,
    700,
    (y1_compactadora += 3),
    x1_compactadora,
    (y1_compactadora += 3),
  );
  strokeWeight(27);
  stroke(237, 65, 151, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 864 - 60,
    700,
    y1_transferencias + 864 - 60,
    700,
    y1_disposicion + 145,
    x1_disposicion,
    y1_disposicion + 145,
  );
  strokeWeight(19);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 887 - 60,
    700,
    y1_transferencias + 887 - 60,
    700,
    y1_disposicion + 386,
    x1_disposicion,
    y1_disposicion + 386,
  );
  strokeWeight(35);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 914 - 60,
    700,
    y1_transferencias + 914 - 60,
    700,
    y1_disposicion + 459,
    x1_disposicion,
    y1_disposicion + 459,
  );
  strokeWeight(1);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 932 - 60,
    700,
    y1_transferencias + 932 - 60,
    700,
    y1_disposicion + 507,
    x1_disposicion,
    y1_disposicion + 507,
  );
  strokeWeight(16);
  stroke(182, 117, 144, 153);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 940 - 60,
    700,
    y1_transferencias + 940 - 60,
    700,
    y1_seleccion + 67,
    x1_seleccion,
    y1_seleccion + 67,
  );
  strokeWeight(5);
  draw_curve(
    x1_transferencias,
    y1_transferencias + 950 - 60,
    700,
    y1_transferencias + 950 - 60,
    700,
    y1_seleccion + 244,
    x1_seleccion,
    y1_seleccion + 244,
  );
  stroke(0, 0, 0, 140);
  //----------------------------------------------------------
  (x = 100), (y = 0), (ancho = 20), (alto = 190);
  rectMode(CENTER);
  fill(204);
  strokeWeight(0); // Apply stroke to see it!
  rect(x1_transferencias - 30, y1_transferencias + 450, ancho + 35, alto + 700);
  rect(x1_composta + 30, y1_composta + 400, ancho + 35, alto + 700);

  //---------------------------------------------------------- DELEGACIONES A LOS SITIOS DE TRANSFERENCIA
  strokeWeight(1); // delegaciones - transferencia
  draw_curve(
    x1_delegaciones,
    y1_delegaciones,
    x1_delegaciones + 200,
    y1_delegaciones,
    x1_delegaciones + 300,
    y1_transferencias + 2,
    x1_transferencias,
    y1_transferencias + 2,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones,
    x1_delegaciones + 200,
    y1_delegaciones,
    x1_delegaciones + 300,
    y1_transferencias + 88,
    x1_transferencias,
    y1_transferencias + 88,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 51,
    x1_delegaciones + 200,
    y1_delegaciones + 51,
    x1_delegaciones + 300,
    y1_transferencias + 88,
    x1_transferencias,
    y1_transferencias + 88,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 100,
    x1_delegaciones + 200,
    y1_delegaciones + 100,
    x1_delegaciones + 300,
    y1_transferencias + 88,
    x1_transferencias,
    y1_transferencias + 88,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 150,
    x1_delegaciones + 200,
    y1_delegaciones + 150,
    x1_delegaciones + 300,
    y1_transferencias + 88,
    x1_transferencias,
    y1_transferencias + 88,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 151,
    x1_delegaciones + 200,
    y1_delegaciones + 151,
    x1_delegaciones + 300,
    y1_transferencias + 192,
    x1_transferencias,
    y1_transferencias + 192,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 200,
    x1_delegaciones + 200,
    y1_delegaciones + 200,
    x1_delegaciones + 300,
    y1_transferencias + 192,
    x1_transferencias,
    y1_transferencias + 192,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 201,
    x1_delegaciones + 200,
    y1_delegaciones + 201,
    x1_delegaciones + 300,
    y1_transferencias + 267,
    x1_transferencias,
    y1_transferencias + 267,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 250,
    x1_delegaciones + 200,
    y1_delegaciones + 250,
    x1_delegaciones + 300,
    y1_transferencias + 267,
    x1_transferencias,
    y1_transferencias + 267,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 300,
    x1_delegaciones + 200,
    y1_delegaciones + 300,
    x1_delegaciones + 300,
    y1_transferencias + 267,
    x1_transferencias,
    y1_transferencias + 267,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 301,
    x1_delegaciones + 200,
    y1_delegaciones + 301,
    x1_delegaciones + 300,
    y1_transferencias + 338,
    x1_transferencias,
    y1_transferencias + 338,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 350,
    x1_delegaciones + 200,
    y1_delegaciones + 350,
    x1_delegaciones + 300,
    y1_transferencias + 338,
    x1_transferencias,
    y1_transferencias + 338,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 400,
    x1_delegaciones + 200,
    y1_delegaciones + 400,
    x1_delegaciones + 300,
    y1_transferencias + 375,
    x1_transferencias,
    y1_transferencias + 375,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 450,
    x1_delegaciones + 200,
    y1_delegaciones + 450,
    x1_delegaciones + 300,
    y1_transferencias + 424,
    x1_transferencias,
    y1_transferencias + 424,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 500,
    x1_delegaciones + 200,
    y1_delegaciones + 500,
    x1_delegaciones + 300,
    y1_transferencias + 486,
    x1_transferencias,
    y1_transferencias + 486,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 550,
    x1_delegaciones + 200,
    y1_delegaciones + 550,
    x1_delegaciones + 300,
    y1_transferencias + 588,
    x1_transferencias,
    y1_transferencias + 588,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 600,
    x1_delegaciones + 200,
    y1_delegaciones + 600,
    x1_delegaciones + 300,
    y1_transferencias + 588,
    x1_transferencias,
    y1_transferencias + 588,
  );

  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 650,
    x1_delegaciones + 200,
    y1_delegaciones + 650,
    x1_delegaciones + 300,
    y1_transferencias + 700,
    x1_transferencias,
    y1_transferencias + 700,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 700,
    x1_delegaciones + 200,
    y1_delegaciones + 700,
    x1_delegaciones + 300,
    y1_transferencias + 755,
    x1_transferencias,
    y1_transferencias + 755,
  );
  draw_curve(
    x1_delegaciones,
    y1_delegaciones + 750,
    x1_delegaciones + 200,
    y1_delegaciones + 750,
    x1_delegaciones + 300,
    y1_transferencias + 833,
    x1_transferencias,
    y1_transferencias + 833,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- EDO. DE MÉXICO A LA PLANTA DE SELECCIÓN
  strokeWeight(111);
  stroke(182, 117, 144, 153); // edo. de méxico – selección
  draw_curve(
    x1_edo,
    y1_edo + 940 - 60,
    x1_edo + 450,
    y1_edo + 940 - 60,
    x1_edo + 450,
    y1_seleccion + 131,
    x1_seleccion,
    y1_seleccion + 131,
  );
  strokeWeight(31);
  draw_curve(
    x1_edo,
    y1_edo + 951,
    x1_edo + 700,
    y1_edo + 951,
    x1_edo + 700,
    y1_seleccion + 262,
    x1_seleccion,
    y1_seleccion + 262,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- DGSU - A SITIO DE TRANSFERENCIA Y PLANTA DE SELECCIÓN
  strokeWeight(1);
  stroke(0, 0, 0, 140); // dgsu – transferencia y selección
  draw_curve(
    x1_dgsu,
    y1_dgsu,
    x1_dgsu + 230,
    y1_dgsu,
    x1_dgsu,
    y1_transferencias + 2 + 1,
    x1_transferencias,
    y1_transferencias + 2 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 2,
    x1_dgsu + 230,
    y1_dgsu + 2,
    x1_dgsu,
    y1_transferencias + 88 + 1,
    x1_transferencias,
    y1_transferencias + 88 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 3,
    x1_dgsu + 230,
    y1_dgsu + 3,
    x1_dgsu,
    y1_transferencias + 192 + 1,
    x1_transferencias,
    y1_transferencias + 192 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 4,
    x1_dgsu + 230,
    y1_dgsu + 4,
    x1_dgsu,
    y1_transferencias + 267 + 1,
    x1_transferencias,
    y1_transferencias + 267 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 5,
    x1_dgsu + 230,
    y1_dgsu + 5,
    x1_dgsu,
    y1_transferencias + 338 + 1,
    x1_transferencias,
    y1_transferencias + 338 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 6,
    x1_dgsu + 230,
    y1_dgsu + 6,
    x1_dgsu,
    y1_transferencias + 375 + 1,
    x1_transferencias,
    y1_transferencias + 375 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 7,
    x1_dgsu + 230,
    y1_dgsu + 7,
    x1_dgsu,
    y1_transferencias + 424 + 1,
    x1_transferencias,
    y1_transferencias + 424 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 8,
    x1_dgsu + 230,
    y1_dgsu + 8,
    x1_dgsu,
    y1_transferencias + 486 + 1,
    x1_transferencias,
    y1_transferencias + 486 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 9,
    x1_dgsu + 230,
    y1_dgsu + 9,
    x1_dgsu,
    y1_transferencias + 588 + 1,
    x1_transferencias,
    y1_transferencias + 588 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 10,
    x1_dgsu + 230,
    y1_dgsu + 10,
    x1_dgsu,
    y1_transferencias + 700 + 1,
    x1_transferencias,
    y1_transferencias + 700 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 11,
    x1_dgsu + 230,
    y1_dgsu + 11,
    x1_dgsu,
    y1_transferencias + 755 + 1,
    x1_transferencias,
    y1_transferencias + 755 + 1,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 12,
    x1_dgsu + 230,
    y1_dgsu + 12,
    x1_dgsu,
    y1_transferencias + 833 + 1,
    x1_transferencias,
    y1_transferencias + 833 + 1,
  );

  draw_curve(
    x1_dgsu,
    y1_dgsu + 13,
    x1_dgsu + 400,
    y1_dgsu + 13,
    x1_dgsu + 700,
    y1_seleccion + 76,
    x1_seleccion,
    y1_seleccion + 76,
  );
  draw_curve(
    x1_dgsu,
    y1_dgsu + 14,
    x1_dgsu + 400,
    y1_dgsu + 14,
    x1_dgsu + 700,
    y1_seleccion + 248,
    x1_seleccion,
    y1_seleccion + 248,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- PARTICULAR A SITIO DE TRANSFERENCIA
  strokeWeight(1); // particular – transferencia
  draw_curve(
    x1_particular,
    y1_particular,
    x1_particular + 230,
    y1_particular,
    x1_particular,
    y1_transferencias + 2 + 2,
    x1_transferencias,
    y1_transferencias + 2 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 2,
    x1_particular + 230,
    y1_particular + 2,
    x1_particular,
    y1_transferencias + 88 + 2,
    x1_transferencias,
    y1_transferencias + 88 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 3,
    x1_particular + 230,
    y1_particular + 3,
    x1_particular,
    y1_transferencias + 192 + 2,
    x1_transferencias,
    y1_transferencias + 192 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 4,
    x1_particular + 230,
    y1_particular + 4,
    x1_particular,
    y1_transferencias + 267 + 2,
    x1_transferencias,
    y1_transferencias + 267 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 5,
    x1_particular + 230,
    y1_particular + 5,
    x1_particular,
    y1_transferencias + 338 + 2,
    x1_transferencias,
    y1_transferencias + 338 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 6,
    x1_particular + 230,
    y1_particular + 6,
    x1_particular,
    y1_transferencias + 375 + 2,
    x1_transferencias,
    y1_transferencias + 375 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 7,
    x1_particular + 230,
    y1_particular + 7,
    x1_particular,
    y1_transferencias + 424 + 2,
    x1_transferencias,
    y1_transferencias + 424 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 8,
    x1_particular + 230,
    y1_particular + 8,
    x1_particular,
    y1_transferencias + 486 + 2,
    x1_transferencias,
    y1_transferencias + 486 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 9,
    x1_particular + 230,
    y1_particular + 9,
    x1_particular,
    y1_transferencias + 588 + 2,
    x1_transferencias,
    y1_transferencias + 588 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 10,
    x1_particular + 230,
    y1_particular + 10,
    x1_particular,
    y1_transferencias + 700 + 2,
    x1_transferencias,
    y1_transferencias + 700 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 11,
    x1_particular + 230,
    y1_particular + 11,
    x1_particular,
    y1_transferencias + 755 + 2,
    x1_transferencias,
    y1_transferencias + 755 + 2,
  );
  draw_curve(
    x1_particular,
    y1_particular + 12,
    x1_particular + 230,
    y1_particular + 12,
    x1_particular,
    y1_transferencias + 833 + 2,
    x1_transferencias,
    y1_transferencias + 833 + 2,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- CEDA A SITIO DE TRANSFERENCIA
  strokeWeight(1); // ceda – transferencia
  draw_curve(
    x1_ceda,
    y1_ceda,
    x1_ceda + 230,
    y1_ceda,
    x1_ceda,
    y1_transferencias + 2 + 3,
    x1_transferencias,
    y1_transferencias + 2 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 2,
    x1_ceda + 230,
    y1_ceda + 2,
    x1_ceda,
    y1_transferencias + 88 + 3,
    x1_transferencias,
    y1_transferencias + 88 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 3,
    x1_ceda + 230,
    y1_ceda + 3,
    x1_ceda,
    y1_transferencias + 192 + 3,
    x1_transferencias,
    y1_transferencias + 192 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 4,
    x1_ceda + 230,
    y1_ceda + 4,
    x1_ceda,
    y1_transferencias + 267 + 3,
    x1_transferencias,
    y1_transferencias + 267 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 5,
    x1_ceda + 230,
    y1_ceda + 5,
    x1_ceda,
    y1_transferencias + 338 + 3,
    x1_transferencias,
    y1_transferencias + 338 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 6,
    x1_ceda + 230,
    y1_ceda + 6,
    x1_ceda,
    y1_transferencias + 375 + 3,
    x1_transferencias,
    y1_transferencias + 375 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 7,
    x1_ceda + 230,
    y1_ceda + 7,
    x1_ceda,
    y1_transferencias + 424 + 3,
    x1_transferencias,
    y1_transferencias + 424 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 8,
    x1_ceda + 230,
    y1_ceda + 8,
    x1_ceda,
    y1_transferencias + 486 + 3,
    x1_transferencias,
    y1_transferencias + 486 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 9,
    x1_ceda + 230,
    y1_ceda + 9,
    x1_ceda,
    y1_transferencias + 588 + 3,
    x1_transferencias,
    y1_transferencias + 588 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 10,
    x1_ceda + 230,
    y1_ceda + 10,
    x1_ceda,
    y1_transferencias + 700 + 3,
    x1_transferencias,
    y1_transferencias + 700 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 11,
    x1_ceda + 230,
    y1_ceda + 11,
    x1_ceda,
    y1_transferencias + 755 + 3,
    x1_transferencias,
    y1_transferencias + 755 + 3,
  );
  draw_curve(
    x1_ceda,
    y1_ceda + 12,
    x1_ceda + 230,
    y1_ceda + 12,
    x1_ceda,
    y1_transferencias + 833 + 3,
    x1_transferencias,
    y1_transferencias + 833 + 3,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- RME A SITIO DE DISPOSICIÓN FINAL
  strokeWeight(1); // rme – disposicion final
  draw_curve(
    x1_rme,
    y1_rme + 1,
    x1_rme + 400,
    y1_rme + 1,
    x1_rme + 400,
    y1_disposicion + 159,
    x1_disposicion,
    y1_disposicion + 159,
  );
  draw_curve(
    x1_rme,
    y1_rme + 2,
    x1_rme + 400,
    y1_rme + 2,
    x1_rme + 400,
    y1_disposicion + 395,
    x1_disposicion,
    y1_disposicion + 395,
  );
  draw_curve(
    x1_rme,
    y1_rme + 3,
    x1_rme + 400,
    y1_rme + 3,
    x1_rme + 400,
    y1_disposicion + 477,
    x1_disposicion,
    y1_disposicion + 477,
  );
  draw_curve(
    x1_rme,
    y1_rme + 4,
    x1_rme + 400,
    y1_rme + 4,
    x1_rme + 400,
    y1_disposicion + 508,
    x1_disposicion,
    y1_disposicion + 508,
  );
  draw_curve(
    x1_rme,
    y1_rme + 5,
    x1_rme + 400,
    y1_rme + 5,
    x1_rme + 400,
    y1_disposicion + 533,
    x1_disposicion,
    y1_disposicion + 533,
  );
  strokeWeight(1);
  //----------------------------------------------------------
  fill(204);
  strokeWeight(0); // Apply stroke to see it!
  rect(x1_edo - 30, y1_edo + 895, ancho + 35, alto - 45);
  rect(x1_seleccion + 30, y1_seleccion + 150, ancho + 35, alto + 100);
  //----------------------------------------------------------

  //---------------------------------------------------------- PLANTA DE SELECCIÓN A SITIO DE DISPOSICIÓN FINAL
  strokeWeight(1); // selección – disposición final
  draw_curve(
    x1_seleccion,
    y1_seleccion + 1 + 90,
    x1_seleccion + 400,
    y1_seleccion + 1 + 90,
    x1_seleccion + 400,
    y1_disposicion + 159 + 1,
    x1_disposicion,
    y1_disposicion + 159 + 1,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 2 + 90,
    x1_seleccion + 400,
    y1_seleccion + 2 + 90,
    x1_seleccion + 400,
    y1_disposicion + 395 + 1,
    x1_disposicion,
    y1_disposicion + 395 + 1,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 3 + 90,
    x1_seleccion + 400,
    y1_seleccion + 3 + 90,
    x1_seleccion + 400,
    y1_disposicion + 477 + 1,
    x1_disposicion,
    y1_disposicion + 477 + 1,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 4 + 90,
    x1_seleccion + 400,
    y1_seleccion + 4 + 90,
    x1_seleccion + 400,
    y1_disposicion + 508 + 1,
    x1_disposicion,
    y1_disposicion + 508 + 1,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 5 + 90,
    x1_seleccion + 400,
    y1_seleccion + 5 + 90,
    x1_seleccion + 400,
    y1_disposicion + 533 + 1,
    x1_disposicion,
    y1_disposicion + 533 + 1,
  );
  //---------------------------------------------------------- DISPOSICIÓN FINAL 02
  draw_curve(
    x1_seleccion,
    y1_seleccion + 1 + 240,
    x1_seleccion + 400,
    y1_seleccion + 1 + 240,
    x1_seleccion + 400,
    y1_disposicion + 159 + 2,
    x1_disposicion,
    y1_disposicion + 159 + 2,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 2 + 240,
    x1_seleccion + 400,
    y1_seleccion + 2 + 240,
    x1_seleccion + 400,
    y1_disposicion + 395 + 2,
    x1_disposicion,
    y1_disposicion + 395 + 2,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 3 + 240,
    x1_seleccion + 400,
    y1_seleccion + 3 + 240,
    x1_seleccion + 400,
    y1_disposicion + 477 + 2,
    x1_disposicion,
    y1_disposicion + 477 + 2,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 4 + 240,
    x1_seleccion + 400,
    y1_seleccion + 4 + 240,
    x1_seleccion + 400,
    y1_disposicion + 508 + 2,
    x1_disposicion,
    y1_disposicion + 508 + 2,
  );
  draw_curve(
    x1_seleccion,
    y1_seleccion + 5 + 240,
    x1_seleccion + 400,
    y1_seleccion + 5 + 240,
    x1_seleccion + 400,
    y1_disposicion + 533 + 2,
    x1_disposicion,
    y1_disposicion + 533 + 2,
  );
  //----------------------------------------------------------

  //---------------------------------------------------------- PLANTA DE SELECCIÓN A RECUPERACIÓN DE SUBPRODUCTOS
  strokeWeight(8); // selección - recuperación de subproductos
  draw_curve(
    x1_seleccion,
    y1_seleccion + 100,
    x1_seleccion + 400,
    y1_seleccion + 100,
    x1_seleccion + 400,
    y1_recuperacion,
    x1_recuperacion,
    y1_recuperacion,
  );
  strokeWeight(9);
  draw_curve(
    x1_seleccion,
    y1_seleccion + 250,
    x1_seleccion + 400,
    y1_seleccion + 250,
    x1_seleccion + 400,
    y1_recuperacion + 8,
    x1_recuperacion,
    y1_recuperacion + 8,
  );
  strokeWeight(1);
  //----------------------------------------------------------

  //---------------------------------------------------------- CUADROS
  // rect(x,y,ancho,alto);

  fill(255); // botones
  //---------------------------------------------------------- DELEGACIONES
  rect(x1_delegaciones, y1_delegaciones, ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  rect(x1_delegaciones, (y1_delegaciones += 50), ancho, alto - 180);
  //---------------------------------------------------------- SITIOS DE TRANSFERENCIA
  rect(x1_transferencias, y1_transferencias + 2, ancho, alto - 175);
  rect(x1_transferencias, y1_transferencias + 88, ancho, alto - 53);
  rect(x1_transferencias, y1_transferencias + 192, ancho, alto - 135);
  rect(x1_transferencias, y1_transferencias + 267, ancho, alto - 110);
  80;
  rect(x1_transferencias, y1_transferencias + 338, ancho, alto - 145);
  45;
  rect(x1_transferencias, y1_transferencias + 375, ancho, alto - 175);
  15;
  rect(x1_transferencias, y1_transferencias + 424, ancho, alto - 129);
  61;
  rect(x1_transferencias, y1_transferencias + 486, ancho, alto - 143);
  47;
  rect(x1_transferencias, y1_transferencias + 588, ancho, alto - 53);
  137;
  rect(x1_transferencias, y1_transferencias + 700, ancho, alto - 120);
  70;
  rect(x1_transferencias, y1_transferencias + 755, ancho, alto - 165);
  25;
  rect(x1_transferencias, y1_transferencias + 833, ancho, alto - 70);
  120;
  //---------------------------------------------------------- COMPOSTA
  rect(x1_composta, y1_composta + 53, ancho, alto - 67);
  //---------------------------------------------------------- COMPACTADORA
  rect(x1_compactadora, y1_compactadora - 34, ancho, alto - 117);
  //---------------------------------------------------------- SITIOS DE DISPOSICIÓN FINAL
  rect(x1_disposicion, y1_disposicion + 80, ancho, alto - 27);
  rect(x1_disposicion, y1_disposicion + 288, ancho, alto + 32);
  rect(x1_disposicion, y1_disposicion + 445, ancho, alto - 116);
  rect(x1_disposicion, y1_disposicion + 500, ancho, alto - 170);
  rect(x1_disposicion, y1_disposicion + 532, ancho, alto - 180);
  //---------------------------------------------------------- RECUPERACIÓN DE SUBPRODUCTOS
  rect(x1_recuperacion, y1_recuperacion + 4, ancho, alto - 172);
  //---------------------------------------------------------- EDO. DE MÉXICO
  rect(x1_edo, y1_edo + 895, ancho, alto - 45);
  //---------------------------------------------------------- RME
  rect(x1_rme, y1_rme + 3, ancho, alto - 180);
  //---------------------------------------------------------- PLANTAS DE SELECCIÓN
  rect(x1_seleccion, y1_seleccion + 93, ancho, alto);
  rect(x1_seleccion, y1_seleccion + 244, ancho, alto - 120);
  //---------------------------------------------------------- DGSY
  rect(x1_dgsu, y1_dgsu + 7, ancho, alto - 170);
  //---------------------------------------------------------- RECOLECCIÓN PARTICULAR
  rect(x1_particular, y1_particular + 7, ancho, alto - 170);
  //---------------------------------------------------------- CEDA
  rect(x1_ceda, y1_ceda + 7, ancho, alto - 170);

  //---------------------------------------------------------- INTERACCIÓN CON EL MOUSE
  //fill(0);
  //rect(20,100,20,10);
  //---------------------------------------------------------- DELEGACIONES
  textAlign(CENTER);
  if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 40 &&
    mouseY < 47
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 100, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 200, 100, 200, 80);
    fill(0);
    text("Delegación:\n 1", x1_delegaciones + 200, 95);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 60 &&
    mouseY < 67
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 150, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 150, 200, 80);
    fill(0);
    text("Delegación:\n 2", x1_delegaciones + 180, 145);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 80 &&
    mouseY < 87
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 200, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 200, 200, 80);
    fill(0);
    text("Delegación:\n 3", x1_delegaciones + 180, 195);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 100 &&
    mouseY < 107
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 250, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 250, 200, 80);
    fill(0);
    text("Delegación:\n 4", x1_delegaciones + 180, 245);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 120 &&
    mouseY < 127
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 300, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 300, 200, 80);
    fill(0);
    text("Delegación:\n 5", x1_delegaciones + 180, 295);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 140 &&
    mouseY < 147
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 350, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 350, 200, 80);
    fill(0);
    text("Delegación:\n 6", x1_delegaciones + 180, 345);
  } else if (
    mouseX > x1_delegaciones - 134 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 160 &&
    mouseY < 167
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 400, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 400, 200, 80);
    fill(0);
    text("Delegación:\n 7", x1_delegaciones + 180, 395);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 180 &&
    mouseY < 187
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 450, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 450, 200, 80);
    fill(0);
    text("Delegación:\n 8", x1_delegaciones + 180, 445);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 200 &&
    mouseY < 207
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 500, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 500, 200, 80);
    fill(0);
    text("Delegación:\n 9", x1_delegaciones + 180, 495);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 220 &&
    mouseY < 227
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 550, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 550, 200, 80);
    fill(0);
    text("Delegación:\n 10", x1_delegaciones + 180, 545);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 240 &&
    mouseY < 247
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 600, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 600, 200, 80);
    fill(0);
    text("Delegación:\n 11", x1_delegaciones + 180, 595);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 260 &&
    mouseY < 267
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 650, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 650, 200, 80);
    fill(0);
    text("Delegación:\n 12", x1_delegaciones + 180, 645);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 280 &&
    mouseY < 287
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 700, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 700, 200, 80);
    fill(0);
    text("Delegación:\n 13", x1_delegaciones + 180, 695);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 300 &&
    mouseY < 307
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 750, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 750, 200, 80);
    fill(0);
    text("Delegación:\n 14", x1_delegaciones + 180, 745);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 320 &&
    mouseY < 327
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 800, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 800, 200, 80);
    fill(0);
    text("Delegación:\n 15", x1_delegaciones + 180, 795);
  } else if (
    mouseX > x1_delegaciones - 34 &&
    mouseX < x1_delegaciones - 23 &&
    mouseY > 340 &&
    mouseY < 347
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_delegaciones, 850, 20, 10);
    fill(255);
    noStroke();
    rect(x1_delegaciones + 180, 850, 200, 80);
    fill(0);
    text("Delegación:\n 16", x1_delegaciones + 180, 845);
  } else {
    // Do nothing!
  }

  //---------------------------------------------------------- SITIOS DE TRANSFERENCIA
  if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 10 &&
    mouseY < 20
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 32, 20, 15);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 80, 200, 80);
    fill(0);
    text("Transferencia:\n 1", x1_transferencias + 200, 75);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 22 &&
    mouseY < 78
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 118, 20, 137);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 100, 200, 80);
    fill(0);
    text("Transferencia:\n 2", x1_transferencias + 200, 95);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 81 &&
    mouseY < 103
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 222, 20, 55);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 210, 200, 80);
    fill(0);
    text("Transferencia:\n 3", x1_transferencias + 200, 205);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 106 &&
    mouseY < 138
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 297, 20, 80);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 290, 200, 80);
    fill(0);
    text("Transferencia:\n 4", x1_transferencias + 200, 285);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 141 &&
    mouseY < 158
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 368, 20, 45);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 360, 200, 80);
    fill(0);
    text("Transferencia:\n 5", x1_transferencias + 200, 355);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 161 &&
    mouseY < 170
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 405, 20, 15);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 380, 200, 80);
    fill(0);
    text("Transferencia:\n 6", x1_transferencias + 200, 375);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 173 &&
    mouseY < 198
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 454, 20, 61);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 420, 200, 80);
    fill(0);
    text("Transferencia:\n 7", x1_transferencias + 200, 415);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 201 &&
    mouseY < 221
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 516, 20, 47);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 490, 200, 80);
    fill(0);
    text("Transferencia:\n 8", x1_transferencias + 200, 485);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 223 &&
    mouseY < 280
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 618, 20, 137);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 590, 200, 80);
    fill(0);
    text("Transferencia:\n 9", x1_transferencias + 200, 585);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 283 &&
    mouseY < 309
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 730, 20, 70);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 690, 200, 80);
    fill(0);
    text("Transferencia:\n 10", x1_transferencias + 200, 685);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 311 &&
    mouseY < 322
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 785, 20, 25);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 740, 200, 80);
    fill(0);
    text("Transferencia:\n 11", x1_transferencias + 200, 735);
  } else if (
    mouseX > x1_transferencias - 363 &&
    mouseX < x1_transferencias - 232 &&
    mouseY > 324 &&
    mouseY < 374
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_transferencias, 863, 20, 120);
    fill(255);
    noStroke();
    rect(x1_transferencias + 200, 830, 200, 80);
    fill(0);
    text("Transferencia:\n 12", x1_transferencias + 200, 825);
  } else {
    // Do nothing!
  }

  //---------------------------------------------------------- COMPOSTA, COMPACTADORA, SITIOS DE DISPOSICIONAL FINAL Y RECUPERACIÓN
  if (
    mouseX > x1_composta - 1431 &&
    mouseX < x1_composta - 1420 &&
    mouseY > 18 &&
    mouseY < 69
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_composta, 103, 20, 123);
    fill(255);
    noStroke();
    rect(x1_composta - 200, 80, 200, 80);
    fill(0);
    text("Composta:\n 1", x1_composta - 200, 75);
  } else if (
    mouseX > x1_compactadora - 1431 &&
    mouseX < x1_compactadora - 1420 &&
    mouseY > 73 &&
    mouseY < 104
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_compactadora, 210, 20, 73);
    fill(255);
    noStroke();
    rect(x1_compactadora - 200, 200, 200, 80);
    fill(0);
    text("Compactadora:\n 1", x1_compactadora - 200, 195);
  } else if (
    mouseX > x1_disposicion - 1431 &&
    mouseX < x1_disposicion - 1420 &&
    mouseY > 107 &&
    mouseY < 174
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_disposicion, 345, 20, 163);
    fill(255);
    noStroke();
    rect(x1_disposicion - 200, 310, 200, 80);
    fill(0);
    text("Disposición:\n 1", x1_disposicion - 200, 305);
  } else if (
    mouseX > x1_disposicion - 1431 &&
    mouseX < x1_disposicion - 1420 &&
    mouseY > 179 &&
    mouseY < 269
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_disposicion, 553, 20, 222);
    fill(255);
    noStroke();
    rect(x1_disposicion - 200, 490, 200, 80);
    fill(0);
    text("Disposición:\n 2", x1_disposicion - 200, 485);
  } else if (
    mouseX > x1_disposicion - 1431 &&
    mouseX < x1_disposicion - 1420 &&
    mouseY > 272 &&
    mouseY < 303
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_disposicion, 710, 20, 74);
    fill(255);
    noStroke();
    rect(x1_disposicion - 200, 660, 200, 80);
    fill(0);
    text("Disposición:\n 3", x1_disposicion - 200, 655);
  } else if (
    mouseX > x1_disposicion - 1431 &&
    mouseX < x1_disposicion - 1420 &&
    mouseY > 305 &&
    mouseY < 314
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_disposicion, 765, 20, 20);
    fill(255);
    noStroke();
    rect(x1_disposicion - 200, 730, 200, 80);
    fill(0);
    text("Disposición:\n 4", x1_disposicion - 200, 725);
  } else if (
    mouseX > x1_disposicion - 1431 &&
    mouseX < x1_disposicion - 1420 &&
    mouseY > 319 &&
    mouseY < 324
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_disposicion, 797, 20, 10);
    fill(255);
    noStroke();
    rect(x1_disposicion - 200, 750, 200, 80);
    fill(0);
    text("Disposición:\n 5", x1_disposicion - 200, 745);
  } else if (
    mouseX > x1_recuperacion - 1431 &&
    mouseX < x1_recuperacion - 1420 &&
    mouseY > 340 &&
    mouseY < 348
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_recuperacion, 854, 20, 18);
    fill(255);
    noStroke();
    rect(x1_recuperacion - 200, 810, 200, 80);
    fill(0);
    text("Recuperación:\n 1", x1_recuperacion - 200, 805);
  } else {
    // Do nothing!
  }

  //---------------------------------------------------------- PLANTAS DE SELECCIÓN Y RME
  if (
    mouseX > x1_rme - 965 &&
    mouseX < x1_rme - 955 &&
    mouseY > 349 &&
    mouseY < 354
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_rme, 873, 20, 10);
    fill(255);
    noStroke();
    rect(x1_rme + 200, 780, 200, 80);
    fill(0);
    text("Recolección\n RME", x1_rme + 200, 775);
  } else if (
    mouseX > x1_seleccion - 965 &&
    mouseX < x1_seleccion - 955 &&
    mouseY > 360 &&
    mouseY < 439
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_seleccion, 993, 20, 190);
    fill(255);
    noStroke();
    rect(x1_seleccion + 200, 960, 200, 80);
    fill(0);
    text("Selección:\n 1", x1_seleccion + 200, 955);
  } else if (
    mouseX > x1_seleccion - 965 &&
    mouseX < x1_seleccion - 955 &&
    mouseY > 445 &&
    mouseY < 478
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_seleccion, 1144, 20, 70);
    fill(255);
    noStroke();
    rect(x1_seleccion + 200, 1160, 200, 80);
    fill(0);
    text("Selección:\n 2", x1_seleccion + 200, 1155);
  } else {
    // Do nothing!
  }

  //---------------------------------------------------------- EDO. DE MÉXICO
  if (
    mouseX > x1_edo - 483 &&
    mouseX < x1_edo - 475 &&
    mouseY > 472 &&
    mouseY < 530
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_edo, 1245, 20, 145);
    fill(255);
    noStroke();
    rect(x1_edo + 200, 1160, 200, 80);
    fill(0);
    text("Recolección:\n Edo. de México", x1_edo + 200, 1155);
  } else {
    // Do nothing!
  }

  //---------------------------------------------------------- RECOLECCIÓN DGSU, PARTICULAR Y CEDA
  if (
    mouseX > x1_transferencias - 455 &&
    mouseX < x1_transferencias - 445 &&
    mouseY > 422 &&
    mouseY < 432
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_dgsu, 1057, 20, 20);
    fill(255);
    noStroke();
    rect(x1_dgsu - 100, 1130, 200, 80);
    fill(0);
    text("Recolección\n DGSU", x1_dgsu - 100, 1125);
  } else if (
    mouseX > x1_transferencias - 479 &&
    mouseX < x1_transferencias - 469 &&
    mouseY > 401 &&
    mouseY < 411
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_particular, 1007, 20, 20);
    fill(255);
    noStroke();
    rect(x1_particular - 150, 1030, 200, 80);
    fill(0);
    text("Recolección\n particular", x1_particular - 150, 1025);
  } else if (
    mouseX > x1_transferencias - 503 &&
    mouseX < x1_transferencias - 493 &&
    mouseY > 380 &&
    mouseY < 390
  ) {
    strokeWeight(3);
    stroke(0);
    rect(x1_ceda, 957, 20, 20);
    fill(255);
    noStroke();
    rect(x1_ceda - 120, 950, 200, 80);
    fill(0);
    text("Recolección\n CEDA", x1_ceda - 120, 945);
  } else {
    // Do nothing!
  }

  //side_bar();
}

function draw_curve(xp1, yp1, xc1, yc1, xc2, yc2, xp2, yp2) {
  beginShape();
  noFill();
  vertex(xp1, yp1);
  // line(xp1,yp1,xc1,yc1);
  // line(xp2,yp2,xc2,yc2);
  bezierVertex(xc1, yc1, xc2, yc2, xp2, yp2);
  endShape();
}
