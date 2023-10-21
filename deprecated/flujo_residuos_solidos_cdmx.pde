/*
* Title: Diagrama de Flujo de Residuos Sólidos Urbanos de la Ciudad de México 2015
* Author: Eric Torres, ciretorres.
* Collaboration: Patricia Galán Lara.
* Update: 05/04/2019
* Description:
*
*/
void setup(){
  size(1280, 1350);
  colorMode(RGB);
  background(0);
  //textFont("Roboto", 28);
  smooth();
} // end setup

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
int x_des_mun = 20; int y_des_mun = 100;
int x_sitio_trans = 450; int y_sitio_trans = 30;
int x_plantaselec_sja = 1050; int y_plantaselec_sja = 1150;
int x_plantaselec_stacat = 1050; int y_plantaselec_stacat = 1278;
int x_planta_compact = 1240; int y_planta_compact = 1100;
int x_planta_compost = 1240; int y_planta_compost = 950;
int x_sitio_dispo_final = 1240; int y_sitio_dispo_final = 30;

int w_rect = 190; int h_rect = 60;

String[] des_municipio = {"Miguel Hidalgo", "Cuajimalpa de Morelos", "Álvaro Obregón", "La Magdalena Contreras", "Tlalpan", "Coyoacán", "Xochimilco", "Tláhuac",
                          "Milpa Alta", "Venustiano Carranza", "Benito Juárez", "Iztacalco", "Iztapalapa", "Cuauhtémoc", "Gustavo A. Madero", "Azcapotzalco"}; 

String[] ton_des_municipio = {"812", "183", "665", "257", "853", "795", "435", "351", "118", "842", "699", "472", "2272", "1293", "1704", "507"}; // Las que genera
                          
String[] sitio_trans = {"sitio_transferencia_miguelh", "sitio_transferencia_alvaro", "sitio_transferencia_tlalpan", "sitio_transferencia_coyo",
                        "sitio_transferencia_xochi", "sitio_transferencia_milpa", "sitio_transferencia_venus", "sitio_transferncia_benito", "sitio_tranferencia_iztapa", 
                        "sio_transferencia_cuauhtémoc", "sito_transferencia_gam", "sitio_transferencia_azcapo"};
                        
String[] ton_sitio_trans_1 = {}; // Las que recibe
String[] ton_sitio_trans_2 = {}; // Las que manda en total

String[] ton_planta_compact = {}; // Las que recibe de los sitios_trans
String[] ton_planta_compost = {}; // Las que recibe de los sitios_trans
                        
String[] sitio_dispo_final = {"sitiodispfinal_milagro", "sitiodispfinal_cañada", "sitiodispfinal_cuauti", "sitiodispfinal_chicolo", "sitiodispfinal_cuautla"};

String[] ton_sitio_dispo_final = {"4,012", "3,054", "1,155", "265", "191"}; // Las que recibe en total

color des_mun = color(0, 153);
color planta_compact = color(109, 30, 70, 153);
color planta_compost = color(109, 63, 86, 153);
color sitio_disp_final = color(237,65,151, 153);
color sitio_seleccion = color(186,51,119, 153);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

void draw(){
  background(204); // gray
  
  //////////////////////////////////////////////////////////////////// CURVAS //////////////////////////////////////////////////////////////////// 
  
  desMunicipio();
  
  plantaComposta();  
  
  plantaCompactadora(); 
  
  plantasSeleccion();
  
  sitiosDisposicionFinal();
  
  //////////////////////////////////////////////////////////////////// CUADROS ////////////////////////////////////////////////////////////////////  
  int inc;  int inc2;
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Delegaciones CDMX
  //------------------------------------------------------------------ 
  inc = 0;
  inc2 = 0;
  for(int i = 0; i < 16; i++){
    fill(255); noStroke();
    rect(x_des_mun, y_des_mun + inc, 20, 10);
    
    if(mouseX > x_des_mun && mouseX < x_des_mun + 20 
    && mouseY > y_des_mun + inc && mouseY < y_des_mun + inc + 10){      
      fill(255); noStroke();
      rect(x_des_mun + 60, y_des_mun + inc2 - 50, 20 + w_rect, h_rect);
      fill(0);
      text("Del. "+des_municipio[i], x_des_mun + 70, y_des_mun + inc2 - 30);
      textSize(18);
      text(ton_des_municipio[i]+" ton/día.", x_des_mun + 70, y_des_mun + inc2 - 5);
      strokeWeight(3); stroke(0);
      rect(x_des_mun, y_des_mun + inc, x_des_mun, 10);
    } // end if    
    inc += 30;
    inc2 += 33;
  } // end for
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Sitios de Transferencia
  //------------------------------------------------------------------ 
  inc = 0;
  inc2 = 0;
  for(int i = 0; i < 12; i++){    
    fill(255); noStroke();
    switch(i){
      case 0:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 10); // Miguel Hidalgo
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 10, sitio_trans[i]);
                inc += 20;
                inc2 += 90;
                break;
      case 1:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 130); // Álvaro Obregón
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 130, sitio_trans[i]);
                inc += 140;
                inc2 += 110;
                break;
      case 2:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 34); // Tlalpan
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 34, sitio_trans[i]);
                inc += 44;
                inc2 += 80;
                break;
      case 3:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 106); // Coyoacán
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 106, sitio_trans[i]);
                inc += 116;
                inc2 += 70;
                break;
      case 4:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 38); // Xochimilco
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 38, sitio_trans[i]);
                inc += 48;
                inc2 += 40;
                break;
      case 5:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 6); // Milpa Alta
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 6, sitio_trans[i]);
                inc += 16;
                inc2 += 50;
                break;
      case 6:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 55); // Venustiano Carranza
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 55, sitio_trans[i]);
                inc += 65;
                inc2 += 60;
                break;
      case 7:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 36); // Benito Juárez
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 36, sitio_trans[i]);
                inc += 46;
                inc2 += 70;
                break;
      case 8:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 162); // Iztapalapa
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 162, sitio_trans[i]);
                inc += 172;
                inc2 += 140;
                break;
      case 9:   rect(x_sitio_trans, y_sitio_trans + inc, 20, 68); // Cuauhtémoc
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 68, sitio_trans[i]);
                inc += 78;
                inc2 += 70;
                break;
      case 10:  rect(x_sitio_trans, y_sitio_trans + inc, 20, 19); // Gustavo A. Madero
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 19, sitio_trans[i]);
                inc += 29;
                inc2 += 60;
                break;
      case 11:  rect(x_sitio_trans, y_sitio_trans + inc, 20, 104); // Azcapotzalco
                infoBox(x_sitio_trans, y_sitio_trans, inc, inc2, 20, 104, sitio_trans[i]);
                break;
      default:  // Do nothing!
    } // end switch
  } // end for
  //------------------------------------------------------------------  
  //------------------------------------------------------------------ Planta Selección
  //------------------------------------------------------------------ 
  fill(255); noStroke();
  rect(x_plantaselec_sja, y_plantaselec_sja, 20, 113); //------------------------ Santa Juan Aragón
  if(mouseX > x_plantaselec_sja && mouseX < x_plantaselec_sja + 20 
    && mouseY > y_plantaselec_sja && mouseY < y_plantaselec_sja + 113){      
      fill(255); noStroke();
      rect(x_plantaselec_sja - 250, y_plantaselec_sja + 10, w_rect, h_rect);
      fill(0);
      text("plantaselec_sja",x_plantaselec_sja - 240, y_plantaselec_sja + 30);
      textSize(18);
      /*
      *  Recorrer una columna con la variable transferencia de residuos sólidos en comparación con las toneladas que genera  las 16 delegaciones de CDMX
      */ 
      text("1,130 ton/día.", x_plantaselec_sja - 240, y_plantaselec_sja + 55);
      strokeWeight(3); stroke(0);
      rect(x_plantaselec_sja, y_plantaselec_sja, 20, 113);
    } // end if
  fill(255); noStroke();
  rect(x_plantaselec_stacat, y_plantaselec_stacat, 20, 49); //------------------------ Santa Catarina    
  if(mouseX > x_plantaselec_stacat && mouseX < x_plantaselec_stacat + 20 
    && mouseY > y_plantaselec_stacat && mouseY < y_plantaselec_stacat + 49){      
      fill(255); noStroke();
      rect(x_plantaselec_stacat - 250, y_plantaselec_stacat , w_rect, h_rect);
      fill(0);
      text("plantaselec_stacat",x_plantaselec_stacat - 240, y_plantaselec_stacat + 20);
      textSize(18);
      /*
      *  Recorrer una columna con la variable transferencia de residuos sólidos en comparación con las toneladas que genera  las 16 delegaciones de CDMX
      */ 
      text("490 ton/día.", x_plantaselec_stacat - 240, y_plantaselec_stacat + 45);
      strokeWeight(3); stroke(0);
      rect(x_plantaselec_stacat, y_plantaselec_stacat, 20, 49);
    } // end if  
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Planta Compactadora
  //------------------------------------------------------------------ 
  fill(255); noStroke();
  rect(x_planta_compact, y_planta_compact, 20, 53);    
  if(mouseX > x_planta_compact && mouseX < x_planta_compact + 20 
    && mouseY > y_planta_compact && mouseY < y_planta_compact + 53){      
      fill(255); noStroke();
      rect(x_planta_compact - 250, y_planta_compact + 10, w_rect, h_rect);
      fill(0);
      text("Planta compactadora",x_planta_compact - 240, y_planta_compact + 30);
      textSize(18);
      /*
      *  Recorrer una columna con la variable transferencia de residuos sólidos en comparación con las toneladas que genera  las 16 delegaciones de CDMX
      */ 
      text("536 ton/día.", x_planta_compact - 240, y_planta_compact + 55);
      strokeWeight(3); stroke(0);
      rect(x_planta_compact, y_planta_compact, 20, 53);
    } // end if  
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------- Planta de Composta
  //------------------------------------------------------------------ 
  fill(255); noStroke();
  rect(x_planta_compost, y_planta_compost, 20, 134);    
  if(mouseX > x_planta_compost && mouseX < x_planta_compost + 20 
    && mouseY > y_planta_compost && mouseY < y_planta_compost + 134){     
      fill(255); noStroke();
      rect(x_planta_compost - 250, y_planta_compost + 20, w_rect, h_rect);
      fill(0);
      text("Planta composta",x_planta_compost - 240, y_planta_compost + 40);
      textSize(18);
      /*
      *  Recorrer una columna con la variable transferencia de residuos sólidos en comparación con las toneladas que genera  las 16 delegaciones de CDMX
      */ 
      text("1,348 ton/día.", x_planta_compost - 240, y_planta_compost + 65);
      strokeWeight(3); stroke(0);
      rect(x_planta_compost, y_planta_compost, 20, 134);
    } // end if  
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Sitios de Disposición Final
  //------------------------------------------------------------------ 
  inc = 0;
  inc2 = 0;
  for(int i = 0; i < 5; i++){    
    fill(255); noStroke();
    switch(i){
      case 0:   rect(x_sitio_dispo_final, y_sitio_dispo_final + inc, 20, 401); // Milagro
                infoBox2(x_sitio_dispo_final, y_sitio_dispo_final, inc, inc2, 20, 401, sitio_dispo_final[i], ton_sitio_dispo_final[i]);
                inc += 411;
                inc2 += 490;
                break;
      case 1:   rect(x_sitio_dispo_final, y_sitio_dispo_final + inc, 20, 305); // Cañada
                infoBox2(x_sitio_dispo_final, y_sitio_dispo_final, inc, inc2, 20, 305, sitio_dispo_final[i], ton_sitio_dispo_final[i]);
                inc += 315;
                inc2 += 250;
                break;
      case 2:   rect(x_sitio_dispo_final, y_sitio_dispo_final + inc, 20, 115); // Cuautitlán
                infoBox2(x_sitio_dispo_final, y_sitio_dispo_final, inc, inc2, 20, 115, sitio_dispo_final[i], ton_sitio_dispo_final[i]);
                inc += 125;
                inc2 += 80;
                break;
      case 3:   rect(x_sitio_dispo_final, y_sitio_dispo_final + inc, 20, 26); // Chicoloapan
                infoBox2(x_sitio_dispo_final, y_sitio_dispo_final, inc, inc2, 20, 26, sitio_dispo_final[i], ton_sitio_dispo_final[i]);
                inc += 36;
                inc2 += 60;
                break;
      case 4:   rect(x_sitio_dispo_final, y_sitio_dispo_final + inc, 20, 19); // Cuautla
                infoBox2(x_sitio_dispo_final, y_sitio_dispo_final, inc, inc2, 20, 19, sitio_dispo_final[i], ton_sitio_dispo_final[i]);
                inc += 29;
                inc2 += 30;
                break;      
      default:  // Do nothing!
    } // end switch
  } // end for
  
  //println("mouseX: " + mouseX);
  //println("mouseY: " + mouseY);
} // end draw
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void infoBox(int x, int y, int inc, int inc2, int w, int h, String sitio_trans){
  if(mouseX > x+10 && mouseX < (x+10) + (w-10) 
    && mouseY > y + inc && mouseY < y + inc + h){      
      fill(255); noStroke();
      rect(x + 60, y + inc2 - 10, w_rect, h_rect);
      /*
      * Hacerlos botones para accionar el flujo en movimiento hacia el sitio según la selección
      */
      fill(sitio_disp_final); rect(x + 70, y + inc2 + 20, 20, 20);
      fill(sitio_seleccion); rect(x + 100, y + inc2 + 20, 20, 20);
      fill(planta_compact); rect(x + 130, y + inc2 + 20, 20, 20);
      fill(planta_compost); rect(x + 160, y + inc2 + 20, 20, 20);
      fill(0);
      text(sitio_trans, x + 70, y + inc2 + 10);
      strokeWeight(3); stroke(0);
      rect(x+10, y + inc, w-10, h);
    } // end if    
} // end infoBox
void infoBox2(int x, int y, int inc, int inc2, int w, int h, String sitio_dispo_final, String toneladas){
  if(mouseX > x && mouseX < x + w 
    && mouseY > y + inc && mouseY < y + inc + h){   
      
      fill(255); noStroke();
      rect(x - 250, y + inc2 + 20, w_rect, h_rect);
      fill(0);
      text(sitio_dispo_final, x - 240, y + inc2 + 40);
      textSize(18);
      /*
      *  Recorrer una columna con la variable transferencia de residuos sólidos en comparación con las toneladas que genera  las 16 delegaciones de CDMX
      */ 
      text(toneladas + " ton/día.", x - 240, y + inc2 + 65);
      strokeWeight(3); stroke(0);
      rect(x, y + inc, w, h);
    } // end if    
} // end infoBox2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void flow(int xp1, int yp1, int xc1, int yc1, int xc2,int yc2, int xp2, int yp2, color colorStroke){
    stroke(colorStroke);
    beginShape();
    noFill();
    vertex(xp1,yp1);
    //stroke(255, 0, 0);
    //line(xp1,yp1,xc1,yc1);
    //line(xp2,yp2,xc2,yc2);
    stroke(colorStroke);
    bezierVertex(xc1,yc1,xc2,yc2,xp2,yp2);    
    endShape(); 
} // end flow
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
void desMunicipio(){
  //------------------------------------------------------------------ Delegaciones a Sitios de Transferencia
  strokeWeight(1);
  //1
  flow(x_des_mun+20, y_des_mun+5, x_des_mun+200, y_des_mun+5, x_des_mun+300, y_sitio_trans+5, x_sitio_trans, y_sitio_trans+5, des_mun);
  flow(x_des_mun+20, y_des_mun+5, x_des_mun+200, y_des_mun+5, x_des_mun+300, y_sitio_trans+90, x_sitio_trans, y_sitio_trans+90, des_mun);
  //2
  flow(x_des_mun+20, y_des_mun+35, x_des_mun+200, y_des_mun+35, x_des_mun+300, y_sitio_trans+90, x_sitio_trans, y_sitio_trans+90, des_mun);
  //3
  flow(x_des_mun+20, y_des_mun+65, x_des_mun+200, y_des_mun+65, x_des_mun+300, y_sitio_trans+90, x_sitio_trans, y_sitio_trans+90, des_mun);
  //4
  flow(x_des_mun+20, y_des_mun+95, x_des_mun+200, y_des_mun+95, x_des_mun+300, y_sitio_trans+90, x_sitio_trans, y_sitio_trans+90, des_mun);
  flow(x_des_mun+20, y_des_mun+95, x_des_mun+200, y_des_mun+95, x_des_mun+300, y_sitio_trans+200, x_sitio_trans, y_sitio_trans+200, des_mun);
  //5
  flow(x_des_mun+20, y_des_mun+125, x_des_mun+200, y_des_mun+125, x_des_mun+300, y_sitio_trans+200, x_sitio_trans, y_sitio_trans+200, des_mun);
  flow(x_des_mun+20, y_des_mun+125, x_des_mun+200, y_des_mun+125, x_des_mun+300, y_sitio_trans+280, x_sitio_trans, y_sitio_trans+280, des_mun);
  //6
  flow(x_des_mun+20, y_des_mun+155, x_des_mun+200, y_des_mun+155, x_des_mun+300, y_sitio_trans+280, x_sitio_trans, y_sitio_trans+280, des_mun);
  //7
  flow(x_des_mun+20, y_des_mun+185, x_des_mun+200, y_des_mun+185, x_des_mun+300, y_sitio_trans+280, x_sitio_trans, y_sitio_trans+280, des_mun);
  flow(x_des_mun+20, y_des_mun+185, x_des_mun+200, y_des_mun+185, x_des_mun+300, y_sitio_trans+350, x_sitio_trans, y_sitio_trans+350, des_mun);
  //8
  flow(x_des_mun+20, y_des_mun+215, x_des_mun+200, y_des_mun+215, x_des_mun+300, y_sitio_trans+350, x_sitio_trans, y_sitio_trans+350, des_mun);
  //9
  flow(x_des_mun+20, y_des_mun+245, x_des_mun+200, y_des_mun+245, x_des_mun+300, y_sitio_trans+390, x_sitio_trans, y_sitio_trans+390, des_mun);
  //10
  flow(x_des_mun+20, y_des_mun+275, x_des_mun+200, y_des_mun+275, x_des_mun+300, y_sitio_trans+440, x_sitio_trans, y_sitio_trans+440, des_mun);
  //11
  flow(x_des_mun+20, y_des_mun+305, x_des_mun+200, y_des_mun+305, x_des_mun+300, y_sitio_trans+500, x_sitio_trans, y_sitio_trans+500, des_mun);
  //12
  flow(x_des_mun+20, y_des_mun+335, x_des_mun+200, y_des_mun+335, x_des_mun+300, y_sitio_trans+600, x_sitio_trans, y_sitio_trans+600, des_mun);
  //13
  flow(x_des_mun+20, y_des_mun+365, x_des_mun+200, y_des_mun+365, x_des_mun+300, y_sitio_trans+600, x_sitio_trans, y_sitio_trans+600, des_mun);
  //14
  flow(x_des_mun+20, y_des_mun+395, x_des_mun+200, y_des_mun+395, x_des_mun+300, y_sitio_trans+710, x_sitio_trans, y_sitio_trans+710, des_mun);
  //15
  flow(x_des_mun+20, y_des_mun+425, x_des_mun+200, y_des_mun+425, x_des_mun+300, y_sitio_trans+775, x_sitio_trans, y_sitio_trans+775, des_mun);
  //16
  flow(x_des_mun+20, y_des_mun+455, x_des_mun+200, y_des_mun+455, x_des_mun+300, y_sitio_trans+850, x_sitio_trans, y_sitio_trans+850, des_mun);
  /*
  * Crear un ciclo para incrementar la posición Y de los flujos
  * if 1, 4, 5, 7:
  *   //y_des_mun+inc;
  *   //inc += 30;
  */
} // end desMunicipio

void plantaComposta(){
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Sitios de Transferencia a Planta Composta
  //------------------------------------------------------------------ 
  // 01 Miguel Hidalgo: NO HAY DATOS!  
  // 02 Álvaro Obregón: 146.41  
  strokeWeight(14.6); 
  flow(x_sitio_trans+20, y_sitio_trans+103, x_sitio_trans+200, y_sitio_trans+103, x_sitio_trans+300, 
  y_planta_compost+7, x_planta_compost, y_planta_compost+7, planta_compost);
  // 03 Tlalpan: 111.79 
  strokeWeight(11.1);
  flow(x_sitio_trans+20, y_sitio_trans+184, x_sitio_trans+200, y_sitio_trans+184, x_sitio_trans+300, 
  y_planta_compost+19, x_planta_compost, y_planta_compost+19, planta_compost); 
  // 04 Coyoacán: 294.19 
  strokeWeight(29.4);
  flow(x_sitio_trans+20, y_sitio_trans+275, x_sitio_trans+200, y_sitio_trans+275, x_sitio_trans+300, 
  y_planta_compost+39, x_planta_compost, y_planta_compost+39, planta_compost);
  // 05 Xochimilco: 78.2 
  strokeWeight(7.8);
  flow(x_sitio_trans+20, y_sitio_trans+345, x_sitio_trans+200, y_sitio_trans+345, x_sitio_trans+300, 
  y_planta_compost+57, x_planta_compost, y_planta_compost+57, planta_compost);
  // 06 Milpa Alta: 22.73 
  strokeWeight(2.2);
  flow(x_sitio_trans+20, y_sitio_trans+371, x_sitio_trans+200, y_sitio_trans+371, x_sitio_trans+300, 
  y_planta_compost+62, x_planta_compost, y_planta_compost+62, planta_compost);
  // 07 Venustiano Carranza: 106.92 
  strokeWeight(10.6);
  flow(x_sitio_trans+20, y_sitio_trans+427, x_sitio_trans+200, y_sitio_trans+427, x_sitio_trans+300, 
  y_planta_compost+68, x_planta_compost, y_planta_compost+68, planta_compost);
  // 08 Benito Juárez: 45.04 
  strokeWeight(4.5);
  flow(x_sitio_trans+20, y_sitio_trans+471, x_sitio_trans+200, y_sitio_trans+471, x_sitio_trans+300, 
  y_planta_compost+75, x_planta_compost, y_planta_compost+75, planta_compost);
  // 09 Iztapalapa: 191.63 
  strokeWeight(19.1);
  flow(x_sitio_trans+20, y_sitio_trans+606, x_sitio_trans+200, y_sitio_trans+606, x_sitio_trans+300, 
  y_planta_compost+86, x_planta_compost, y_planta_compost+86, planta_compost);
  // 10 Cuauhtémoc: 51.91 
  strokeWeight(5.1); 
  flow(x_sitio_trans+20, y_sitio_trans+716, x_sitio_trans+200, y_sitio_trans+716, x_sitio_trans+300, 
  y_planta_compost+98, x_planta_compost, y_planta_compost+98, planta_compost);
  // 11 Gustavo A. Madero: 119.46 
  strokeWeight(11.9);
  flow(x_sitio_trans+20, y_sitio_trans+757, x_sitio_trans+200, y_sitio_trans+757, x_sitio_trans+300, 
  y_planta_compost+106, x_planta_compost, y_planta_compost+106, planta_compost);  
  // 12 Azcapotzalco: 104.3 
  strokeWeight(10.4); 
  flow(x_sitio_trans+20, y_sitio_trans+850, x_sitio_trans+200, y_sitio_trans+850, x_sitio_trans+300, 
  y_planta_compost+117, x_planta_compost, y_planta_compost+117, planta_compost);
} // end plantaComposta

void plantaCompactadora(){
  //------------------------------------------------------------------ Sitios de Transferencia a Planta Compactadora
  strokeWeight(4.45); // El 6 representa la cantidad de basura que manda 
  //1
  flow(x_sitio_trans+20, y_sitio_trans+5, x_sitio_trans+200, y_sitio_trans+5, x_sitio_trans+300, y_planta_compact+4, x_planta_compact, y_planta_compact+4, planta_compact); 
  //2
  flow(x_sitio_trans+20, y_sitio_trans+114, x_sitio_trans+200, y_sitio_trans+114, x_sitio_trans+300, y_planta_compact+8, x_planta_compact, y_planta_compact+8, planta_compact);
  //3
  flow(x_sitio_trans+20, y_sitio_trans+206, x_sitio_trans+200, y_sitio_trans+206, x_sitio_trans+300, y_planta_compact+12, x_planta_compact, y_planta_compact+12, planta_compact);
  //4
  flow(x_sitio_trans+20, y_sitio_trans+301, x_sitio_trans+200, y_sitio_trans+301, x_sitio_trans+300, y_planta_compact+16, x_planta_compact, y_planta_compact+16, planta_compact);
  //5
  flow(x_sitio_trans+20, y_sitio_trans+352, x_sitio_trans+200, y_sitio_trans+352, x_sitio_trans+300, y_planta_compact+20, x_planta_compact, y_planta_compact+20, planta_compact);
  //6
  flow(x_sitio_trans+20, y_sitio_trans+387, x_sitio_trans+200, y_sitio_trans+387, x_sitio_trans+300, y_planta_compact+24, x_planta_compact, y_planta_compact+24, planta_compact);
  //7
  flow(x_sitio_trans+20, y_sitio_trans+454, x_sitio_trans+200, y_sitio_trans+454, x_sitio_trans+300, y_planta_compact+29, x_planta_compact, y_planta_compact+29, planta_compact);
  //8
  flow(x_sitio_trans+20, y_sitio_trans+499, x_sitio_trans+200, y_sitio_trans+499, x_sitio_trans+300, y_planta_compact+33, x_planta_compact, y_planta_compact+33, planta_compact);
  //9
  flow(x_sitio_trans+20, y_sitio_trans+651, x_sitio_trans+200, y_sitio_trans+651, x_sitio_trans+300, y_planta_compact+38, x_planta_compact, y_planta_compact+38, planta_compact);
  //10
  flow(x_sitio_trans+20, y_sitio_trans+729, x_sitio_trans+200, y_sitio_trans+729, x_sitio_trans+300, y_planta_compact+42, x_planta_compact, y_planta_compact+42, planta_compact);
  //11
  flow(x_sitio_trans+20, y_sitio_trans+774, x_sitio_trans+200, y_sitio_trans+774, x_sitio_trans+300, y_planta_compact+46, x_planta_compact, y_planta_compact+46, planta_compact);
  //12
  flow(x_sitio_trans+20, y_sitio_trans+885, x_sitio_trans+200, y_sitio_trans+885, x_sitio_trans+300, y_planta_compact+50, x_planta_compact, y_planta_compact+50, planta_compact);
} // plantaCompactadora

void plantasSeleccion(){
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Sitios de Transferencia a Plantas de Selección
  //--------------------------------- San Juan Aragón
  
  // 16 Miguel Hidalgo: NO HAY DATOS!
  // 17 Álvaro Obregón: 295.15
   strokeWeight(29.5); 
  flow(x_sitio_trans+20, y_sitio_trans+125, x_sitio_trans+200, y_sitio_trans+125, x_sitio_trans+300, 
  y_plantaselec_sja+15, x_plantaselec_sja, y_plantaselec_sja+15, sitio_seleccion);  
  strokeWeight(8.1); // 81.13 
  flow(x_sitio_trans+20, y_sitio_trans+144, x_sitio_trans+200, y_sitio_trans+144, x_sitio_trans+300, 
  y_plantaselec_stacat+5, x_plantaselec_stacat, y_plantaselec_stacat+5, sitio_seleccion);  

  // 18 Tlalpan: 7.05
  strokeWeight(0.7);
  flow(x_sitio_trans+20, y_sitio_trans+189, x_sitio_trans+200, y_sitio_trans+189, x_sitio_trans+300, 
  y_plantaselec_sja+30, x_plantaselec_sja, y_plantaselec_sja+30, sitio_seleccion);  
  strokeWeight(3.4); // 34.9 
  flow(x_sitio_trans+20, y_sitio_trans+191, x_sitio_trans+200, y_sitio_trans+191, x_sitio_trans+300, 
  y_plantaselec_stacat+11, x_plantaselec_stacat, y_plantaselec_stacat+11, sitio_seleccion);  

  // 19 Coyoacán: 122.37
  strokeWeight(12.2);
  flow(x_sitio_trans+20, y_sitio_trans+296, x_sitio_trans+200, y_sitio_trans+296, x_sitio_trans+300, 
  y_plantaselec_sja+36, x_plantaselec_sja, y_plantaselec_sja+36, sitio_seleccion);  
  strokeWeight(7.6); // 76.67 
  flow(x_sitio_trans+20, y_sitio_trans+305, x_sitio_trans+200, y_sitio_trans+305, x_sitio_trans+300, 
  y_plantaselec_stacat+16, x_plantaselec_stacat, y_plantaselec_stacat+16, sitio_seleccion);  

  // 20 Xochimilco: 4.2
  strokeWeight(0.4);
  flow(x_sitio_trans+20, y_sitio_trans+349, x_sitio_trans+200, y_sitio_trans+349, x_sitio_trans+300, 
  y_plantaselec_sja+40, x_plantaselec_sja, y_plantaselec_sja+40, sitio_seleccion);  
  strokeWeight(7.3);
  flow(x_sitio_trans+20, y_sitio_trans+353, x_sitio_trans+200, y_sitio_trans+353, x_sitio_trans+300, 
  y_plantaselec_stacat+23, x_plantaselec_stacat, y_plantaselec_stacat+23, sitio_seleccion);  

  // 21 Milpa Alta: 0.03 
  strokeWeight(0.003);
  flow(x_sitio_trans+200, y_sitio_trans+372, x_sitio_trans+200, y_sitio_trans+372, x_sitio_trans+300, 
  y_plantaselec_sja+42, x_plantaselec_sja, y_plantaselec_sja+42, sitio_seleccion);  
  strokeWeight(1); // 10.42  
  flow(x_sitio_trans+20, y_sitio_trans+372, x_sitio_trans+200, y_sitio_trans+372, x_sitio_trans+300, 
  y_plantaselec_stacat+27, x_plantaselec_stacat, y_plantaselec_stacat+27, sitio_seleccion);  

  // 22 Venustiano Carranza: 20.24
  strokeWeight(2);
  flow(x_sitio_trans+20, y_sitio_trans+433, x_sitio_trans+200, y_sitio_trans+433, x_sitio_trans+300, 
  y_plantaselec_sja+43, x_plantaselec_sja, y_plantaselec_sja+43, sitio_seleccion);  
  strokeWeight(3.8); // 38.23
  flow(x_sitio_trans+20, y_sitio_trans+436, x_sitio_trans+200, y_sitio_trans+436, x_sitio_trans+300, 
  y_plantaselec_stacat+29, x_plantaselec_stacat, y_plantaselec_stacat+29, sitio_seleccion);  

  // 23 Benito Juárez: 72.9
  strokeWeight(7.2);
  flow(x_sitio_trans+20, y_sitio_trans+476, x_sitio_trans+200, y_sitio_trans+476, x_sitio_trans+300, 
  y_plantaselec_sja+48, x_plantaselec_sja, y_plantaselec_sja+48, sitio_seleccion);  
  strokeWeight(3.1); // 30.99
  flow(x_sitio_trans+20, y_sitio_trans+480, x_sitio_trans+200, y_sitio_trans+480, x_sitio_trans+300, 
  y_plantaselec_stacat+32, x_plantaselec_stacat, y_plantaselec_stacat+32, sitio_seleccion);  

  // 24 Iztapalapa: 343.63
  strokeWeight(34.3);
  flow(x_sitio_trans+20, y_sitio_trans+632, x_sitio_trans+200, y_sitio_trans+632, x_sitio_trans+300, 
  y_plantaselec_sja+69, x_plantaselec_sja, y_plantaselec_sja+69, sitio_seleccion);  
  strokeWeight(4.6); // 46.59 
  flow(x_sitio_trans+20, y_sitio_trans+652, x_sitio_trans+200, y_sitio_trans+652, x_sitio_trans+300, 
  y_plantaselec_stacat+35, x_plantaselec_stacat, y_plantaselec_stacat+35, sitio_seleccion);  

  // 25 Cuauhtémoc: 90.34
  strokeWeight(9); 
  flow(x_sitio_trans+20, y_sitio_trans+723, x_sitio_trans+200, y_sitio_trans+723, x_sitio_trans+300, 
  y_plantaselec_sja+91, x_plantaselec_sja, y_plantaselec_sja+91, sitio_seleccion);  
  strokeWeight(4.9); // 49.34  
  flow(x_sitio_trans+20, y_sitio_trans+730, x_sitio_trans+200, y_sitio_trans+730, x_sitio_trans+300, 
  y_plantaselec_stacat+39, x_plantaselec_stacat, y_plantaselec_stacat+39, sitio_seleccion);  

  // 26 Gustavo A. Madero: 6.51
  strokeWeight(0.6);
  flow(x_sitio_trans+20, y_sitio_trans+763, x_sitio_trans+200, y_sitio_trans+763, x_sitio_trans+300, 
  y_plantaselec_sja+96, x_plantaselec_sja, y_plantaselec_sja+96, sitio_seleccion);
  
  // 27 Azcapotzalco: 168.56 
  strokeWeight(16.8); 
  flow(x_sitio_trans+20, y_sitio_trans+863, x_sitio_trans+200, y_sitio_trans+863, x_sitio_trans+300, 
  y_plantaselec_sja+104, x_plantaselec_sja, y_plantaselec_sja+104, sitio_seleccion);
  strokeWeight(4.9); // 49.35
  flow(x_sitio_trans+20, y_sitio_trans+874, x_sitio_trans+200, y_sitio_trans+874, x_sitio_trans+300, 
  y_plantaselec_stacat+43, x_plantaselec_stacat, y_plantaselec_stacat+43, sitio_seleccion);    
  
  //--------------------------------- Santa Catarina
  // 01 Miguel Hidalgo: NO HAY DATOS!
  // 02 Álvaro Obregón: 
  
  // 03 Tlalpan: 
  
  // 04 Coyoacán: 
  
  // 05 Xochimilco: 
  
  // 06 Milpa Alta: 
  
  // 07 Venustiano Carranza: 
  
  // 08 Benito Juárez: 
  
  // 09 Iztapalapa: 
  
  // 10 Cuauhtémoc: 
  
  // 11 Gustavo A. Madero: NO MANDA!
  // 12 Azcapotzalco: 
  
} // end plantasSeleccion

void sitiosDisposicionFinal(){
  //------------------------------------------------------------------ 
  //------------------------------------------------------------------ Sitios de Transferencia a Sitios de Disposición Final
  //------------------------------------------------------------------ 
  
  // 16 Miguel Hidalgo: NO HAY DATOS!  
  // 17 Álvaro Obregón: Milagro, Cañanada, Cuautitlán. TOTAL: 781.63
  strokeWeight(19); // 199.61
  flow(x_sitio_trans+20, y_sitio_trans+30, x_sitio_trans+200, y_sitio_trans+30, x_sitio_trans+300, 
  y_sitio_dispo_final+11, x_sitio_dispo_final, y_sitio_dispo_final+11, sitio_disp_final);
  strokeWeight(30); // 309.14 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+54, x_sitio_trans+200, y_sitio_trans+54, x_sitio_trans+300, 
  y_sitio_dispo_final+427, x_sitio_dispo_final, y_sitio_dispo_final+427, sitio_disp_final);  
  strokeWeight(27); // 272.88 a Cuautitlán
  flow(x_sitio_trans+20, y_sitio_trans+82, x_sitio_trans+200, y_sitio_trans+82, x_sitio_trans+300, 
  y_sitio_dispo_final+740, x_sitio_dispo_final, y_sitio_dispo_final+740, sitio_disp_final); 
  
  // 18 Tlalpan: Milagro, Cañada. TOTAL: 187.38
  strokeWeight(6.6); // 65.15 ton/día a Milagro
  flow(x_sitio_trans+20, y_sitio_trans+164, x_sitio_trans+200, y_sitio_trans+164, x_sitio_trans+300, 
  y_sitio_dispo_final+23, x_sitio_dispo_final, y_sitio_dispo_final+23, sitio_disp_final);  
  strokeWeight(12.2); // 122.23 ton/día a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+173, x_sitio_trans+200, y_sitio_trans+173, x_sitio_trans+300,
  y_sitio_dispo_final+448, x_sitio_dispo_final, y_sitio_dispo_final+448, sitio_disp_final); 
  
  // 19 Coyoacán: Milagro, Cañada, Chicoloapan, Cuautla. TOTAL: 574.61
  strokeWeight(22.6); // 226.13 a Milagro
  flow(x_sitio_trans+20, y_sitio_trans+216, x_sitio_trans+200, y_sitio_trans+216, x_sitio_trans+300, 
  y_sitio_dispo_final+37, x_sitio_dispo_final, y_sitio_dispo_final+37, sitio_disp_final);    
  strokeWeight(33); // 335.28 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+243, x_sitio_trans+200, y_sitio_trans+243, x_sitio_trans+300, 
  y_sitio_dispo_final+470, x_sitio_dispo_final, y_sitio_dispo_final+470, sitio_disp_final);      
  strokeWeight(0.6); // 6.49 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+259, x_sitio_trans+200, y_sitio_trans+259, x_sitio_trans+300, 
  y_sitio_dispo_final+852, x_sitio_dispo_final, y_sitio_dispo_final+852, sitio_disp_final);  
  strokeWeight(0.6); // 6.71 a Cuautla
  flow(x_sitio_trans+20, y_sitio_trans+260, x_sitio_trans+200, y_sitio_trans+260, x_sitio_trans+300, 
  y_sitio_dispo_final+890, x_sitio_dispo_final, y_sitio_dispo_final+890, sitio_disp_final); 
  
  // 20 Xochimilco: Milagro, Cañada, Cuautitlán. TOTAL: 229.73
  strokeWeight(8.8); // 88.41
  flow(x_sitio_trans+20, y_sitio_trans+325, x_sitio_trans+200, y_sitio_trans+325, x_sitio_trans+300, 
  y_sitio_dispo_final+52, x_sitio_dispo_final, y_sitio_dispo_final+52, sitio_disp_final);  
  strokeWeight(14.1); // 141.19 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+335, x_sitio_trans+200, y_sitio_trans+335, x_sitio_trans+300, 
  y_sitio_dispo_final+493, x_sitio_dispo_final, y_sitio_dispo_final+493, sitio_disp_final);  
  strokeWeight(0.014); // 0.14
  flow(x_sitio_trans+20, y_sitio_trans+342, x_sitio_trans+200, y_sitio_trans+342, x_sitio_trans+300, 
  y_sitio_dispo_final+750, x_sitio_dispo_final, y_sitio_dispo_final+750, sitio_disp_final); 
  
  // 21 Milpa Alta: Milagro, Cañada, Cuautitlán. TOTAL: 28.95
  strokeWeight(0.6); // 6.45
  flow(x_sitio_trans+20, y_sitio_trans+369, x_sitio_trans+200, y_sitio_trans+369, x_sitio_trans+300, 
  y_sitio_dispo_final+57, x_sitio_dispo_final, y_sitio_dispo_final+57, sitio_disp_final);  
  strokeWeight(2.2); // 22.45 a Cañanda
  flow(x_sitio_trans+20, y_sitio_trans+370, x_sitio_trans+200, y_sitio_trans+370, x_sitio_trans+300, 
  y_sitio_dispo_final+501, x_sitio_dispo_final, y_sitio_dispo_final+501, sitio_disp_final);  
  strokeWeight(0.004); // 0.04
  flow(x_sitio_trans+20, y_sitio_trans+373, x_sitio_trans+200, y_sitio_trans+373, x_sitio_trans+300, 
  y_sitio_dispo_final+751, x_sitio_dispo_final, y_sitio_dispo_final+751, sitio_disp_final); 
  
  // 22 Venustiano Carranza: Milagro, Cañada, Chicoloapan. TOTAL: 385.10
  strokeWeight(35.3); // 353.14
  flow(x_sitio_trans+20, y_sitio_trans+402, x_sitio_trans+200, y_sitio_trans+402, x_sitio_trans+300, 
  y_sitio_dispo_final+74, x_sitio_dispo_final, y_sitio_dispo_final+74, sitio_disp_final);  
  strokeWeight(2.7); // 27.65 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+420, x_sitio_trans+200, y_sitio_trans+420, x_sitio_trans+300, 
  y_sitio_dispo_final+503, x_sitio_dispo_final, y_sitio_dispo_final+503, sitio_disp_final);   
  strokeWeight(0.4); // 4.31 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+422, x_sitio_trans+200, y_sitio_trans+422, x_sitio_trans+300, 
  y_sitio_dispo_final+853, x_sitio_dispo_final, y_sitio_dispo_final+853, sitio_disp_final);
  
  // 23 Benito Juárez: Milagro, Cañada, Cuautitlán, Chicoloapan. TOTAL: 220.61
  strokeWeight(6.7); // 67.07
  flow(x_sitio_trans+20, y_sitio_trans+453, x_sitio_trans+200, y_sitio_trans+453, x_sitio_trans+300, 
  y_sitio_dispo_final+95, x_sitio_dispo_final, y_sitio_dispo_final+95, sitio_disp_final);  
  strokeWeight(11); // 111.81 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+461, x_sitio_trans+200, y_sitio_trans+461, x_sitio_trans+300, 
  y_sitio_dispo_final+510, x_sitio_dispo_final, y_sitio_dispo_final+510, sitio_disp_final);  
  strokeWeight(3.8); // 38.01
  flow(x_sitio_trans+20, y_sitio_trans+467, x_sitio_trans+200, y_sitio_trans+467, x_sitio_trans+300, 
  y_sitio_dispo_final+755, x_sitio_dispo_final, y_sitio_dispo_final+755, sitio_disp_final); 
  strokeWeight(0.3); // 3.72 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+469, x_sitio_trans+200, y_sitio_trans+469, x_sitio_trans+300, 
  y_sitio_dispo_final+854, x_sitio_dispo_final, y_sitio_dispo_final+854, sitio_disp_final);
  
  // 24 Iztapalapa: Milagro, Cañada, Cuautitlán, Chicoloapan. TOTAL: 1,044.68
  strokeWeight(41.9); // 419.03
  flow(x_sitio_trans+20, y_sitio_trans+516, x_sitio_trans+200, y_sitio_trans+516, x_sitio_trans+300, 
  y_sitio_dispo_final+119, x_sitio_dispo_final, y_sitio_dispo_final+119, sitio_disp_final);  
  strokeWeight(57.9); // 579.39 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+564, x_sitio_trans+200, y_sitio_trans+564, x_sitio_trans+300, 
  y_sitio_dispo_final+544, x_sitio_dispo_final, y_sitio_dispo_final+544, sitio_disp_final);  
  strokeWeight(0.9); // 9.51
  flow(x_sitio_trans+20, y_sitio_trans+593, x_sitio_trans+200, y_sitio_trans+593, x_sitio_trans+300, 
  y_sitio_dispo_final+757, x_sitio_dispo_final, y_sitio_dispo_final+757, sitio_disp_final); 
  strokeWeight(3.6); // 36.74 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+595, x_sitio_trans+200, y_sitio_trans+595, x_sitio_trans+300, 
  y_sitio_dispo_final+856, x_sitio_dispo_final, y_sitio_dispo_final+856, sitio_disp_final);
  
  // 25 Cuauhtémoc: Milagro, Cañada, Cuautitlán, Chicoloapan. TOTAL: 497.55
  strokeWeight(15); // 151.94
  flow(x_sitio_trans+20, y_sitio_trans+675, x_sitio_trans+200, y_sitio_trans+675, x_sitio_trans+300, 
  y_sitio_dispo_final+147, x_sitio_dispo_final, y_sitio_dispo_final+147, sitio_disp_final);  
  strokeWeight(28.6); // 286.80 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+696, x_sitio_trans+200, y_sitio_trans+696, x_sitio_trans+300, 
  y_sitio_dispo_final+587, x_sitio_dispo_final, y_sitio_dispo_final+587, sitio_disp_final);  
  strokeWeight(3.9); // 39.28
  flow(x_sitio_trans+20, y_sitio_trans+711, x_sitio_trans+200, y_sitio_trans+711, x_sitio_trans+300, 
  y_sitio_dispo_final+759, x_sitio_dispo_final, y_sitio_dispo_final+759, sitio_disp_final); 
  strokeWeight(1.9); // 19.53 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+713, x_sitio_trans+200, y_sitio_trans+713, x_sitio_trans+300, 
  y_sitio_dispo_final+858, x_sitio_dispo_final, y_sitio_dispo_final+858, sitio_disp_final);
  
  // 26 Gustavo A. Madero: Milagro, Cañada, Cuautitlán, Chicoloapan. TOTAL: 30.04
  strokeWeight(0.6); // 6.75
  flow(x_sitio_trans+20, y_sitio_trans+747, x_sitio_trans+200, y_sitio_trans+747, x_sitio_trans+300, 
  y_sitio_dispo_final+155, x_sitio_dispo_final, y_sitio_dispo_final+155, sitio_disp_final);  
  strokeWeight(0.9); // 9.13 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+748, x_sitio_trans+200, y_sitio_trans+748, x_sitio_trans+300, 
  y_sitio_dispo_final+601, x_sitio_dispo_final, y_sitio_dispo_final+601, sitio_disp_final);
  strokeWeight(1.3); // 13.30
  flow(x_sitio_trans+20, y_sitio_trans+750, x_sitio_trans+200, y_sitio_trans+750, x_sitio_trans+300, 
  y_sitio_dispo_final+761, x_sitio_dispo_final, y_sitio_dispo_final+761, sitio_disp_final);
  strokeWeight(0.08); // 0.86 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+751, x_sitio_trans+200, y_sitio_trans+751, x_sitio_trans+300, 
  y_sitio_dispo_final+859, x_sitio_dispo_final, y_sitio_dispo_final+859, sitio_disp_final);
  
  // 27 Azcapotzalco: Milagro, Cañada, Cuautitlán, Chicoloapan. TOTAL: 726.83
  strokeWeight(27); // 272.24
  flow(x_sitio_trans+20, y_sitio_trans+788, x_sitio_trans+200, y_sitio_trans+788, x_sitio_trans+300, 
  y_sitio_dispo_final+168, x_sitio_dispo_final, y_sitio_dispo_final+168, sitio_disp_final);  
  strokeWeight(9); // 91.08 a Cañada
  flow(x_sitio_trans+20, y_sitio_trans+806, x_sitio_trans+200, y_sitio_trans+806, x_sitio_trans+300, 
  y_sitio_dispo_final+606, x_sitio_dispo_final, y_sitio_dispo_final+606, sitio_disp_final);  
  strokeWeight(35); // 350.41
  flow(x_sitio_trans+20, y_sitio_trans+827, x_sitio_trans+200, y_sitio_trans+827, x_sitio_trans+300, 
  y_sitio_dispo_final+779, x_sitio_dispo_final, y_sitio_dispo_final+779, sitio_disp_final); 
  strokeWeight(1); // 13.10 a Chicoloapan
  flow(x_sitio_trans+20, y_sitio_trans+845, x_sitio_trans+200, y_sitio_trans+845, x_sitio_trans+300, 
  y_sitio_dispo_final+860, x_sitio_dispo_final, y_sitio_dispo_final+860, sitio_disp_final);
} // end sitiosDisposicionFinal
