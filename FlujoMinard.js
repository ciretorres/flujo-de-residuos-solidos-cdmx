var boton1 = true;
var boton2 = true;
var xp1, xc1, xc2, xp2; //'x'
var yp1, yc1, yc2, yp2; //'y'
var centerX = 0, centerY = 0, offsetX = 0, offsetY = 0;
var zoom = .6;
var imagoComposta, imagoDGSU, imagoParticular,
imagoCEDA, imagoEDO, imagoRME, imagoSubproductos;
var imago = new Array(12); 

function preload(){
  //imago[0]= loadImage("data/imago0.png");  // Load the image  
  for(var i=0;i<12;i++){
    imago[i]= loadImage("data/imago"+i+".png");  // Load the image  
  }

  imagoRME = loadImage("data/imagoRME.png");
  imagoComposta = loadImage("data/imagoComposta.png");
  imagoDGSU = loadImage("data/imagoDGSU.png");
  imagoParticular = loadImage("data/imagoParticular.png");
  imagoCEDA = loadImage("data/imagoCEDA.png");
  imagoEDO = loadImage("data/imagoEDO.png");
  imagoSubproductos = loadImage("data/imagoSubproductos.png");
}
function setup(){      
  //size(displayWidth,displayHeight);
  createCanvas(windowWidth,displayHeight);
  background(140); // Gray
  centerX = 0;
  centerY = 0; 
  cursor(MOVE);
  smooth();
  //stroke(237,65,151,153); // Rosa Mancera  
}
function draw(){  
  imageMode(CENTER);
  background(140); // Gray

  //image(imago[i],xt,yt+100);

  fill(0); // All the shapes in black
  noStroke(); 
  
  
  if (mousePressed == true) {
    centerX = mouseX-offsetX;
    centerY = mouseY-offsetY;
  }
  translate(centerX,centerY);
  scale(zoom);
  randomSeed(100);
  
  /** CONTROLLER (X,Y) **/   
  var xp = 110; var yc = 100; /** DELEGACIONES CDMX **/  
  var xt = 750; var yt = 50; /** PLANTAS DE TRANSFERENCIA **/  
  var xre = 805; var yre = 1050; /** RECOLECCIÓN DE EDO. DE MÉXICO **/
  var xdgsu = 200; var ydgsu = 960; /** RECOLECCIÓN DGSU **/
  var xrp = 300; var yrp = 1080; /** RECOLECCIÓN PARTICULAR **/
  var xceda = 500; var yceda = 1130; /** RECOLECCIÓN CEDA **/
  var xrme = 980; var yrme = 900; /** RECOLECCIÓN RME **/
  var xco = 1040; var yco = 100; /** PLANTA DE COMPOSTA **/
  var xd = 1305; var yd = 150; /** SITIOS DE DISPOSICIÓN FINAL **/
  var xps = 1250; var yps = 780; /** PLANTAS DE SELECCIÓN **/
  var xpc = 1305; var ypc = 650; /** PLANTAS COMPACTADORAS **/
  var xrs = 1650; var yrs = 350; /** RECUPERACIÓN DE SUBPRODUCTOS **/
  
  /** DELEGACIONES CDMX **/

  rectMode(CENTER); rect(xp,yc+5,125,50);
  textAlign(CENTER); fill(255);
  text("Recolección\ndelegacional",xp,yc+2); // Title
  fill(0); text("7,340 (ton/día)",xp,yc+45);  

  for(var i=xp-58;i<60+xp;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yc+55,i+2,yc+55);
  }

  if(boton1){
    for(var i=0;i<16;i++){
      strokeWeight(3);
      stroke(0,0,0,102); // ColorStroke
      noFill();      

      /* COUNT Vertex */
      xp1 = xp; //START
      yp1 = yc+80;
      xp2 = xt; // END
      yp2 = yt+100;  
      /* ANGLES Vertex */
      xc1 = 200; // START
      yc1 = yc+80; 
      xc2 = 280; // END
      yc2 = yt+105;

      switch(i){
        case 0: // MIGUEL HIDALGO          
          var k = 0;
          for(var j=0;j<2;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);
            k += 70;
            endShape();      
          }    
          break;
        case 1: // CUAJIMALPA
          k = 70;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);          
            endShape();      
          } 
          break;
        case 2: // ÁLVARO OBREGÓN
           k = 70;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xp2,yp2+k);          
            endShape();      
          }  
          break;
        case 3: // MAGDALENA CONTRERAS
          k = 70;          
          for(var j=0;j<2;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 4: // TLALPAN
          k = 140;          
          for(var j=0;j<2;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 5: // COYOACÁN
          k = 210;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 6: // XOCHIMILCO
          k = 210;          
          for(var j=0;j<2;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 7: // TLÁHUAC
          k = 280;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 8: // MILPA ALTA
          k = 350;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 9: // VENUSTIANO CARRANZA  
          k = 420;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 10: // BENITO JUÁREZ
          k = 490;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 11: // IZTACALCO
          k = 560;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape(); 
          }             
          break;
        case 12: // IZTAPALAPA
          k = 560;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 13: // CUAUHTÉMOC
          k = 630;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 14: // GUSTAVO MADERO
          k = 700;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }   
          break;
        case 15: // AZCAPOTZALCO
          k = 770;          
          for(var j=0;j<1;j++){    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+100,yp1); // startAngle    
            //line(xp2,yp2+k,xp2-100,yp2+k); // endAngle
            bezierVertex(xc1,yc1,xc2,yc2+k,xt,yp2+k);  
            k += 70;
            endShape();      
          }                  
          break;
        //default:
      }      
      
      fill(0);
      noStroke();
      ellipse(xp,yc+80,30,30); // DrawEllipses
      yc += 50;      
    }    
  
  /** PLANTAS DE TRANSFERENCIA **/  

  rectMode(CENTER); fill(0); rect(xt,yt+5,125,50);
  textAlign(CENTER); fill(255);
  text("Planta\nde Transferencia",xt,yt+2); // Title
  fill(0); text("8,528 (ton/día)",xt,yt+45);  
  
  for(var i=xt-58;i<60+xt;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yt+55,i+2,yt+55);
  }

  if(boton1 && boton2){
    for(var i=0;i<12;i++){
      strokeWeight(3);
      stroke(0,0,0,153); // ColorStroke
      noFill();      
      
      // Curves CEDA
      beginShape();
      vertex(xt,yt+100);
      bezierVertex(xt-200,yt+100,xceda+200,yceda+80,xceda,yceda+80);
      endShape();      
      // Curves DGSU
      beginShape();
      vertex(xt,yt+100);
      bezierVertex(xt-200,yt+100,xdgsu+200,ydgsu+80,xdgsu,ydgsu+80);
      endShape();
      // Curves Recolección Particular
      beginShape();
      vertex(xt,yt+100);
      bezierVertex(xt-200,yt+100,xrp+200,yrp+90,xrp,yrp+90);
      endShape();      
      // Curves plantas compactadoras
      strokeWeight(6);
      beginShape();
      vertex(xt,yt+100);
      bezierVertex(xt+200,yt+100,xpc-200,ypc+90,xpc,ypc+90);
      endShape();
      // Curves plantas de composta
      if(i==0) strokeWeight(0);
      if(i==1) strokeWeight(14);
      if(i==2) strokeWeight(11);
      if(i==3) strokeWeight(29);
      if(i==4) strokeWeight(7);
      if(i==5) strokeWeight(2);
      if(i==6) strokeWeight(10);
      if(i==7) strokeWeight(4);
      if(i==8) strokeWeight(19);
      if(i==9) strokeWeight(5);
      if(i==10) strokeWeight(11);
      if(i==11) strokeWeight(10);           
      beginShape();
      vertex(xt,yt+100);
      bezierVertex(xt+100,yt+100,xco-100,yco+90,xco,yco+90);
      endShape();
      
      // Curves Sistema de disposición Final
      stroke(237,65,151,153);
      
      /* COUNT Vertex */
      xp1 = xt; //START
      yp1 = yt+100;      
      yp2 = yd+160; 
      
      switch(i){
        case 0:
          var k = 50;          
          for(var j=0;j<3;j++){   
            strokeWeight(1);
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }         
          break;
        case 1:
          k = -70;          
          for(var j=0;j<5;j++){   
            strokeWeight(3);
            if(j==0) strokeWeight(19);            
            if(j==1) strokeWeight(30);            
            if(j==2) strokeWeight(23);                
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }    
          break;
        case 2:
          k = -70;          
          for(var j=0;j<2;j++){   
            strokeWeight(1);   
            if(j==0) strokeWeight(6);            
            if(j==1) strokeWeight(22);                      
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 3:
          k = -70;          
          for(var j=0;j<5;j++){   
            strokeWeight(1);            
            if(j==0) strokeWeight(3);            
            if(j==1) strokeWeight(33);            
            if(j==2) strokeWeight(0);                    
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 4:
          k = -70;          
          for(var j=0;j<3;j++){   
            strokeWeight(1);            
            if(j==0) strokeWeight(8);            
            if(j==1) strokeWeight(14);          
                        
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 5:
          k = -70;          
          for(var j=0;j<3;j++){   
            strokeWeight(1);            
            if(j==0) strokeWeight(1);            
            if(j==1) strokeWeight(2);             
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yp2+k,xd-200,yp2+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 6:
          k = -70;          
          for(var j=0;j<4;j++){   
            strokeWeight(1);            
            if(j==0) strokeWeight(35);            
            if(j==1) strokeWeight(2);                 
            if(j==2) strokeWeight(3);                  
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 7:
          k = -70;          
          for(var j=0;j<4;j++){               
            if(j==0) strokeWeight(6);            
            if(j==1) strokeWeight(11);                 
            if(j==2) strokeWeight(1);            
            if(j==3) strokeWeight(3);                  
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }
          break;
        case 8:
          k = -70;          
          for(var j=0;j<4;j++){               
            if(j==0) strokeWeight(41);            
            if(j==1) strokeWeight(57);                 
            if(j==2) strokeWeight(1);            
            if(j==3) strokeWeight(3);                           
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          }                       
          break;
        case 9:
          k = -70;          
          for(var j=0;j<4;j++){               
            if(j==0) strokeWeight(15);            
            if(j==1) strokeWeight(28);                 
            if(j==2) strokeWeight(3);            
            if(j==3) strokeWeight(2);                                  
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          } 
          break;
        case 10:
          k = -70;          
          for(var j=0;j<4;j++){               
            if(j==0) strokeWeight(1);            
            if(j==1) strokeWeight(1);                 
            if(j==2) strokeWeight(1);            
            if(j==3) strokeWeight(1);                           
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          } 
          break;
        case 11:
          k = -70;          
          for(var j=0;j<4;j++){               
            if(j==0) strokeWeight(27);            
            if(j==1) strokeWeight(19);                 
            if(j==2) strokeWeight(35);            
            if(j==3) strokeWeight(1);                           
            beginShape();
            vertex(xp1,yp1);
            //line(xp1,yp1,xp1+200,yp1); // startAngle    
            //line(xd,yt+k,xd-200,yt+k); // endAngle
            bezierVertex(xp1+200,yp1,xd-200,yp2+k,xd,yp2+k);  
            k += 70;
            endShape();      
          } 
          break;
        //default:
      }      
      
      fill(0);    
      noStroke();     
      //ellipse(xt,yt+100,60,60); // DrawEllipses
      //imago = loadImage("imago"+i+".png");
      //image(imago,xt,yt+100);      
      image(imago[i],xt,yt+100);
      yt += 70;            
  }   
    
  /** SITIOS DE DISPOSICIÓN FINAL **/   
  
  rectMode(CENTER); fill(0); rect(xd,yd+5,125,50);
  textAlign(CENTER); fill(255);
  text("Sistema de\nDisposición final",xd,yd+2); // Title
  fill(0); text("8,677 (ton/día)",xd,yd+45);  
  
  strokeWeight(1); stroke(0);
  for(var i=xd-58;i<60+xd;i+=5){ // DashLine  
    line(i,yd+55,i+2,yd+55);
  }

  // Curves From PlantasDeSeleccion To PlantasCompactadoras
  var ypc2 = 90;
  yps = 880;
  for(var i=0;i<2;i++){
    strokeWeight(5);
    noFill();    
    stroke(0,0,0,102);    
    beginShape();
    vertex(xpc,ypc+90);
    //line(xpc,ypc+90,xpc+200,ypc+90); // startAngle    
    //line(xps,yps+ypc2+30,xps+200,yps+ypc2+30); // endAngle
    bezierVertex(xpc+200,ypc+90,xpc+200,yps+30+ypc2,xps,yps+30+ypc2);            
    endShape();
    ypc2 += 100;  
  }
  noStroke(); 
  
  // Curves From Plantas de Selección To SistemaDeDisposicionFinal  
  for(var i=0;i<5;i++){
    var yps3 = 120;
    for(var j=0;j<2;j++){
    strokeWeight(3);    
    stroke(0,0,0,102);
    noFill();
    beginShape();
    vertex(xd,yd+90);
    //line(xd,yd+90,xd+200,yd+90);
    //line(xps,yps+yps3,xps+200,yps+yps3);
    bezierVertex(xd+400,yd+89,xps+400,yps+yps3,xps,yps+yps3);
    endShape();
    yps3 += 100;
    }
    // Curves Recolección RME
    strokeWeight(3); 
    stroke(237,65,151,153);  
    // float xrme = 900; float yrme = 900;
    beginShape();
    vertex(xd,yd+90);
    //line(xd,yd+90,xd+200,yd+90);
    //line(xps,yps+yps3,xps+200,yps+yps3);
    bezierVertex(xd-200,yd+90,xrme+200,yrme+80,xrme,yrme+80);
    endShape();
    noStroke(); 
    fill(237,65,151);
    if(i==0){
      //ellipse(805,d,40,40);
    } else if(i==1) {
      ellipse(xd,yd+90,65,65);        
    }
    ellipse(xd,yd+90,50,50);
    yd += 70;
  }
  
  /** RECOLECCIÓN RME **/   
  
  rectMode(CENTER); fill(0); rect(xrme,yrme+5,125,25);
  textAlign(CENTER); fill(255);
  text("Recolección RME",xrme,yrme+8); // Title
  fill(0); text("9 (ton/día)",xrme,yrme+35);  
  
  strokeWeight(1); stroke(0);
  for(var i=xrme-58;i<60+xrme;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yrme+45,i+2,yrme+45);
  }  

  fill(0);
  noStroke();
  //ellipse(xrme,yrme+80,50,50);
  //imagoRME = loadImage("imagoRME.png");
  image(imagoRME,xrme,yrme+80); // LoadImages  
  
  /** PLANTAS COMPACTADORAS **/   
  
  rectMode(CENTER); fill(0); rect(xpc,ypc+5,125,50); 
  textAlign(CENTER); fill(255);
  text("Plantas\nCompactadoras",xpc,ypc+2); // Title
  fill(0); text("536 (ton/día)",xpc,ypc+45);  
  
  
  for(var i=xpc-58;i<60+xpc;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,ypc+55,i+2,ypc+55);
  }  
  
  fill(0);
  noStroke();  
  ellipse(xpc,ypc+90,50,50); // DrawEllipse
  }         
    
  
  /** PLANTAS DE SELECCIÓN **/   
  
  rectMode(CENTER); fill(0); rect(xps,yps+5,125,50); 
  textAlign(CENTER); fill(255);
  text("Plantas\nde Selección",xps,yps+2); // Title
  fill(0); text("3,573 (ton/día)",xps,yps+45);  
  
  
  for(var i=xps-58;i<60+xps;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yps+55,i+2,yps+55);
  }
  
  
  for(var i=0;i<2;i++){
    // Curves Recolección Edo. de México
    noFill();
    strokeWeight(3);
    stroke(182,117,145);
    //float xre = 805; float yre = 1050;
    if(i==0) strokeWeight(111);
    if(i==1) strokeWeight(31);    
    beginShape();
    vertex(xps,yps+120);
    bezierVertex(xps-200,yps+120,xre+200,yre+120,xre,yre+120);
    endShape();
    // Curves DGSU      
    strokeWeight(3);
    beginShape();
    vertex(xps,yps+120);
    bezierVertex(xps+200,yps+120,xdgsu+200,ydgsu+80,xdgsu,ydgsu+80);
    endShape();    
    // Curves Recuperación de Subproductos    
    stroke(0,0,0,204);
    if(i==0) strokeWeight(8);
    if(i==1) strokeWeight(9);    
    beginShape();
    vertex(xps,yps+120);    
    bezierVertex(xps+300,yps+120,xrs,yrs+300,xrs,yrs+90);
    endShape();
    
    fill(182,117,145);
    noStroke();
    if(i==0){
      ellipse(xps,yps+120,110,110);
    }
    ellipse(xps,yps+120,50,50); // DrawEllipse
    yps += 100;
  }
  
  /** RECOLECCIÓN EDO. DE MÉXICO **/   
  
  rectMode(CENTER); fill(0); rect(xre,yre+5,125,50);
  textAlign(CENTER); fill(255);
  text("Recolección\nEdo. de México",xre,yre+2); // Title
  fill(0); text("1,423 (ton/día)",xre,yre+45);  
  
  
  for(var i=xre-58;i<60+xre;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yre+55,i+2,yre+55);
  }
  
  fill(0);
  noStroke();
  //ellipse(xre,yre+120,100,100); 
  //imagoEDO = loadImage("imagoEDO.png");
  image(imagoEDO,xre,yre+120); // LoadImage  
  
  /** RECOLECCIÓN DGSU **/   
  
  rectMode(CENTER); fill(0); rect(xdgsu,ydgsu+5,125,25);
  textAlign(CENTER); fill(255);
  text("Recolección DGSU",xdgsu,ydgsu+8); // Title
  fill(0); text("578 (ton/día)",xdgsu,ydgsu+35);    
  
  for(var i=xdgsu-58;i<60+xdgsu;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,ydgsu+45,i+2,ydgsu+45);
  }  

  fill(0);
  noStroke();
  //ellipse(xdgsu,ydgsu+80,50,50); 
  //imagoDGSU = loadImage("imagoDGSU.png");
  image(imagoDGSU,xdgsu,ydgsu+80); // LoadImage  
  
  /** RECOLECCIÓN PARTICULAR **/   
  
  rectMode(CENTER); fill(0); rect(xrp,yrp+5,125,50);
  textAlign(CENTER); fill(255);
  text("Recolección\nparticular",xrp,yrp+2); // Title
  fill(0); text("43 (ton/día)",xrp,yrp+45);    
  
  for(var i=xrp-58;i<60+xrp;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yrp+55,i+2,yrp+55);
  }  

  fill(0);
  noStroke();
  //ellipse(xrp,yrp+90,50,50);
  //imagoParticular = loadImage("imagoParticular.png");
  image(imagoParticular,xrp,yrp+90); // LoadImage  
  
  /** RECOLECCIÓN CEDA **/   
  
  rectMode(CENTER); fill(0); rect(xceda,yceda+5,125,25);
  textAlign(CENTER); fill(255);
  text("Recolección CEDA",xceda,yceda+8); // Title
  fill(0); text("585 (ton/día)",xceda,yceda+35);  
  
  
  for(var i=xceda-58;i<60+xceda;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yceda+45,i+2,yceda+45);
  }  

  fill(0);
  noStroke();
  //ellipse(xceda,yceda+80,50,50);
  //imagoCEDA = loadImage("imagoCEDA.png");
  image(imagoCEDA,xceda,yceda+80); // LoadImage    
  
  /** RECUPERACIÓN DE SUBPRODUCTOS **/   
  
  rectMode(CENTER); fill(0); rect(xrs,yrs+5,125,50); 
  textAlign(CENTER); fill(255);
  text("Recuperación\nde Subproductos",xrs,yrs+2); // Title
  fill(0); text("182 (ton/día)",xrs,yrs+45);    
  
  for(var i=xrs-58;i<60+xrs;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yrs+55,i+2,yrs+55);
  }  
  
  fill(0);
  noStroke();
  //ellipse(xrs,yrs+90,50,50);  
  //imagoSubproductos = loadImage("imagoSubproductos.png");
  image(imagoSubproductos,xrs,yrs+90); // LoadImage
  
  
  /** PLANTA DE COMPOSTA **/   
  
  rectMode(CENTER); fill(0); rect(xco,yco+5,125,50); 
  textAlign(CENTER); fill(255);
  text("Planta\nde Composta",xco,yco+2); // Title
  fill(0); text("1,384 (ton/día)",xco,yco+45);    
  
  for(var i=xco-58;i<60+xco;i+=5){ // DashLine  
    strokeWeight(1); stroke(0);
    line(i,yco+55,i+2,yco+55);
  }
  
  fill(0);
  noStroke();
  //ellipse(xco,yco+90,50,50);
  //imagoComposta = loadImage("imagoComposta.png");
  image(imagoComposta,xco,yco+90); // LoadImage  
  
  // fill(237,65,151);
  // rect(1910,1190,70,13);
  // rect(1580,1205,70,13);
  // textAlign(LEFT);
  // fill(0);
  // text("Flujo de residuos sólidos urbanos\n El flujo presenta la gestión que tienen los desechos sólidos de cada delegación (16) de la ciudad de México (CDMX), con base a la\ninformación recabada en el Inventario de Residuos Sólidos (2015) del reporte de la SEDEMA.\nLa forma del gráfico se inspiró al inicio con el sistema de flujo o mapa propuesto por Charles Minard (1869), presentando el\nmovimiento, las pérdidas humanas y la temperatura ambiental durante la campaña de Napoleón contra Rusia en 1812. La dirección\ndel flujo muestra que los residuos sólidos toman y convergen en diferentes etapas del proceso antes de ser o no reciclados.\nDentro del sistema se representan los ‘huecos de información’ como rutas o flujos en color negro y opacidad para diferenciar las\ngrandes relaciones que muestran las plantas de transferencia hacia los rellenos sanitarios de los que dispone la ciudad.\nEl color rosa (#ed419; 237, 65, 151, 153) guía el estilo institucional de CDMX. El color lila (#b67591; 181, 116, 145, 153) distingue\nlas plantas de selección del sistema de disposición final.\nEl tamaño del gráfico hace visible y fácil de ubicar el imagotipo de cada delegación para la versión impresa y para la versión web\npermite reproducir el sistema de flujo interactivo desde cada ícono de la delegación.",1550,1000);
  // text("Referencias:\nInventario de Residuos Sólidos, Ciudad de México 2015. SEDEMA.\nGuía de estilo básica para portales web de la Administración Pública de la Ciudad de México.",1550,1180);
  }     
  
  //fill(255);
  //rectMode(LEFT);
  //rect(0,0,50,50);
  //rect(0,250,50,50);
  //fill(0);
  //text("+",50,50);  
  //text("-",50,150);

}

function mousePressed(){
  offsetX = mouseX-centerX;
  offsetY = mouseY-centerY;

  // if(mouseX > 1910 && mouseX < 1980 && mouseY > 1190 && mouseY<1203){
  //   link("http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14-dic-2016.compressed.pdf");
  // } 
  // if(mouseX > 1580 && mouseX < 1650 && mouseY > 1205 && mouseY<1218) link("http://www.cdmx.gob.mx/storage/app/media/Guia_Estilos_Sitios_Web_CDMX_v.1.3.pdf");
  
  //if(mouseX > 50 && mouseX < 100 && mouseY > 50 && mouseY<100){
    //boton1 = !boton1;
  //}
  // float xp = 110; float yc = 100;
  //if(mouseX > 50 && mouseX < 150 && mouseY > 85 && mouseY<185){    
    //boton2 = !boton2;
  //}
  
  //if(mouseX > 0 && mouseX < 50 && mouseY > 0 && mouseY< 50){
    //zoom += 0.05;
  //}
  //if(mouseX > 0 && mouseX < 100 && mouseY > 200 && mouseY< 300){
    //zoom -= 0.05;
  //}  
}

function keyPressed() {
  // zoom
  if (keyCode == UP_ARROW) zoom += 0.05;
  if (keyCode == DOWN_ARROW) zoom -= 0.05;
}