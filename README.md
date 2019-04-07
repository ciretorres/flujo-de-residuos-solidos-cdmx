# Interactive visual interface from Urban Solid Waste in CDMX

## Presentation

<img src="./data/CapturaDePantalla2019-04-07_11.58.50a.m..png" width="900">

The Interactive visual interface presents a flow diagram system from the Urban Solid Waste (USW) at Mexico City (CDMX), according to the [Solid Waste's inventory](http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14-dic-2016.compressed.pdf) published by Secretaría del Medio Ambiente (SEDEMA) in CDMX in 2016. The job is been made possible in collaboration with [Patricia Galán Lara](https://www.facebook.com/patricia.g.lara.75). 

How many solid waste flow through each station process regarding with the quantities published.  

As a reference, each pipeline represents the quantity as [strokeWeight](https://processing.org/reference/strokeWeight_.html) from the solid waste information available in a scale divided by ten (e.g. 1,038.23 ton/día, to obtain 103.82), to take only the integer value (for now), and taste how the tools, than i'm using, works with sufficiency.

If you are interested in work together send me a whatsapp 5547904238 or you can mail me at erictorres.velasco@gmail.com

---

## Summary

- [Presentation](#Quantity_representation)
- [Quantity representation](#Quantity_representation)
- [Interaction](#Interaction)
- [Movement](#Movement)
- [Previous work](#Previous_work)
- [Redesign](#Redesign)
- [Acronyms & abbreviations](#Acronyms_and_abbreviations)
- [References](#Reference)

---

## Quantity_representation

<img src="./data/maq.png" width="900">

[Go top](#Summary)

---

## Interaction

<img src="./data/maq1.png" width="900">

[Go top](#Summary)

---

## Movement

<img src="./data/maq2.png" width="900">

[Go top](#Summary)

---

## Previous_work

Initially, the project began with the purpose to explore with visual design and quantity representation structures regarding a social problem in the city with a nine understanding minds at class in Universidad Autónoma Metropolitana (UAM), campus [Cuajimalpa](http://cua.uam.mx/).  

The visualization in this project intented to represent the management from the Urban Solid Waste of each municipality to the final destination site in México City, with respect to the previous research in collaboration with the team Master degree Information Design and proffesor [Nora Morales](http://noramorales.academia.edu/) who guided us into the process.  


We decided to represent the visualization with a spatio-temporal structure (Meirelles, 2013), because of the type of dimention that the information naturally has been used. Traditionally, we use maps for modelling the rational relation space, and for taking action about the geography.  

Thus, the flow visual reconstruction came in with the solid waste properties (e.g. location). The quantity is transferred to different management points and the values that acquires in each context are essentials.

<img src="data/RedisenoI.jpg">


### Charles Minard

In 1869, Charles Minard designed a flow map which displays the Napoleon's March to and from Russia, 1812-1813, and combines statistical data techniques with a timeline, and spatio-temporal information about the French army, the **line width represents the number of soldiers marching** to and from Russia, with **each millimeter standing for 10,000 men**. The march starts with 420,000 men in the Polish–Russian border (center left, beige line), reaches Moscow with 100,000 (top right), and ends with 10,000 men (black line). **The line graph at the bottom represents the temperatures** faced by the army on the way back to Poland, which are associated with the line standing for the return trip.  

<img src="./data/MapCharlesMinard.png" width="900">


"Connections between temperatures and the march offer new levels of information: the relationships between deaths and low temperatures (probably also aggravated by fatigue). For example, 22,000 men died crossing the River Berezina due to the extreme low temperatures (–20oC [–4oF])".

---

### Graphic Digital Prototyping

With the information recollected, we needed to figure out how to visualize it. But first, we had to define which question is going to be answer. So, according with the [Solid Waste's inventory](http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14-dic-2016.compressed.pdf), we tried to catch each value from every site mentioned in the document and draw this numbers in relation with figures and shapes. 

#### Prototype I:
<img src="data/PrototipoI.png">

#### Prototype II:
<img src="data/PrototipoII.jpg">

After that, we noticed that there where some unknown quantities didn't mention in the inventory. Thats why, we decided to descomposed the system and started taking the measure for every site which process the solid waste.

#### Prototype III:
<img src="data/PrototipoIII.png">

Ending, with a few changes in representation and color style. We could finally comprehended something bigger and more complex, that motived me to take it to the next level of prototyping and started to understanding its logic structure from the semantic point of view.

#### Prototype IV:
<img src="data/MasterResiduosSolidos.png">

That reasoning, set me on working with another techonology to design a represent this kinds of aspects to keep speculating about the physical form that could be naturally understand through some interactive helping tools.  
The image above was used to be presented in an exhibition at Universidad Autónoma Metropolitana (UAM), campus [Cuajimalpa](http://cua.uam.mx/). With a serie of others works designed by the team, that integrated the comprehension of the whole system. In this visualization, each municipality was referred to its imagotype for the print version.

[Go top](#Summary)

---

## Redesign

### Riall Sankey Diagram

In 1968, Riall Sankey proposed a diagram as a visual representation tool for talking about thermal effiency in the vapor machines. In Sankey's diagrams **the widths of bands are scaled to the corresponding quantities of the vapor flow**.  

<img src="data/DiagramRiallSankey.png">

Flows in Sankey diagrams act much more like 'rivers' (as opposed to threads) in which you lose memory of the previous steps. This can be useful in thoses cases in which the user is more interested in relating different data dimensions next to each other more than centering the visualization partition arround a leading dimension.

---

### Fineo Density

Fineo Density is visualization technique of continuous flow of data based on Sankey diagram structure, to represent relations between multidimensional categorical data. Fineo has a network structure, where nodes are individual categories grouped under a dimension, with the flow lines representing connections. Connections are grouped at every level, thus providing the width between pairs of axes.

<img src="data/FineoDensityDesign.jpg">

With this inspiration in mind, I decided to code the diagram flow structure with the information available used previously, to find how much urban solid waste is transferred from every process site and relate as a category. So first, I had to make some adjustments in adobe illustrator to the graphic visualization prototype to respect every width of the lines.

#### Adjustments to graphic prototype:
<img src="data/FlujoMinardFinal.png">

It is relevant to mention, that the color for the lines was used acoording to the [Basic style guide for the Public Administration web sites of Mexico City](http://www.cdmx.gob.mx/storage/app/media/Guia_Estilos_Sitios_Web_CDMX_v.1.3.pdf). Thas why the pink is the main color, after the purple that distinguish the selection plants from the final dispotition sites.  
With this categorization process, we could finally viewed the gaps that the information presented by SEDEMA has. Without mention, how many urban solid waste quantity ends every day at the final disposition sites.  

Finally, the result, with a few problems with the knowledge about the tool, was a sketching prototype made in Processing. With this last update in 01/06/2018.

#### Processing prototype:
<img src="data/FlujoDeResiduosSolidosUrbanos.png">


[Go top](#Summary)

---

## Acronyms_and_abbreviations
DGSU: Dirección General de Servicios Urbanos  
CEDA: Central de Abastos  
RME: Residuos de Manejo Especial  
CDMX: Ciudad de México  
RSU: Residuos Sólidos Urbanos

[Go top](#Summary)

---

## Reference

  * CDMX  

[Inventario de Residuos Sólidos, Ciudad de México 2015. SEDEMA](http://www.cms.sedema.cdmx.gob.mx/storage/app/media/IRS-2015-14-dic-2016.compressed.pdf)  
[Guía de estilo básica para portales web de la Administración Pública de la Ciudad de México](http://www.cdmx.gob.mx/storage/app/media/Guia_Estilos_Sitios_Web_CDMX_v.1.3.pdf)  

  * Riall Sankey  

[Schmidt, Mario. Der Einsatz von Sankey-Diagrammen im Stoffstrommanagement (2006)](https://www.econstor.eu/bitstream/10419/97580/1/786508884.pdf)  
[Schmidt, Mario. The Sankey Diagram in Energy and Material Flow Management. Part I: History (2008)](http://onlinelibrary.wiley.com/doi/10.1111/j.1530-9290.2008.00004.x/full=)  
[Minutes of the Proceedings of the Institution of Civil Engineers. E-ISSN 1753-7843. Volume 134 Issue 1898, 1898, pp. 278-312. PART 4](http://www.icevirtuallibrary.com/doi/abs/10.1680/imotp.1898.19100)  
[Sankey-Diagrams](http://www.sankey-diagrams.com/)  

  * Fineo Design   

[Fineo](http://www.densitydesign.org/research/fineo/)  
[Fineo Live](http://fineo.densitydesign.org/custom/vis/index.php?tablename=set131487359439&submit=Visualize)

  * Books  

[Meirelles, Isabelle. 2013. Design for information_ an introduction to the histories, theories, and best practices behind effective visualizations. USA: Rockport Publishers.](./data/Isabelle Meirelles-2013-Design for information_ an introduction to the histories, theories, and best practices behind effective visualizations.pdf)

[Go top](#Summary)

---

# Readme!