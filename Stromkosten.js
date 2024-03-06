
//* Maik Schulte im März 2024 *//


function opener(idx)
{
var doon;

if (document.getElementById(idx).style.display=='none') { doon=1; }
else { doon=0; }

if (doon==1) { document.getElementById(idx).style.display ="inline"; }
if (doon==0) { document.getElementById(idx).style.display ="none"; }
}

function divclick(layerelement,verweisID,verweisHGColor,verweisColor) {
document.getElementById(layerelement).style.backgroundColor = verweisHGColor;
document.getElementById(layerelement).style.color = verweisColor;
/* Farbangabe ist zusaetzlich zum hover noetig, da sonst das Mousover erst beim Ueberfahren des links greift */
}

function divmouveout(layerelement,verweisID,verweisHGColor,verweisColor) {
document.getElementById(layerelement).style.backgroundColor =verweisHGColor;
document.getElementById(layerelement).style.color = verweisColor;
}

function divwebpage(webpage) {
self.location.href= webpage;
}
    
function calcArbeitspreis() {
var help =0;
var v;
var p =0;
var delta;
var STdelta;
var pp;
var Stbe =0;
var s1 =0;
    
	
// var Checkbox_aktiv = document.getElementById("allePositionen").checked;

// Erweitert die Tabelle um die Gesamtberechnung Strom
document.getElementById('GrundpreisTabelle').style.display ="inline"; 
// document.getElementById('idZeileZwischensumme').style.display ="inline"; 

    
v = document.getElementById('idJahresverbrauch').value;
v=v.replace(",",".");
document.getElementById('idposkWhJahr').innerHTML="Anteile in € (%)<br>mit "+r(v)+" kWh pro Jahr";

var s1   = parseFloat(q(document.getElementById("Row10Col2").innerHTML)); // Summe Arbeitspreis


// Strombeschaffung
var Stbe = parseFloat(q(document.getElementById("Row1Col2").innerHTML)); // Strombeschaffung
help=(v*Stbe/100).toFixed(2);
p= (Stbe/s1*100).toFixed(1);
document.getElementById("Row1Col3").innerHTML=r(help)+ " €/Jahr <b>("+r(p)+"%)</b>!" + DELTA(1,v); 
  
// Netznutzungsentgelte  
let Netzn = parseFloat(q(document.getElementById("Row2Col2").innerHTML)); // Netznutzungsentgelte	
help=(v*Netzn/100).toFixed(2);
p= (Netzn/s1*100).toFixed(1);
document.getElementById('Row2Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(2,v);

// Stromsteuer (Ökosteuer)    
let StrSt = parseFloat(q(document.getElementById("Row3Col2").innerHTML)); // Stromsteuer (Ökosteuer)
help=(v*StrSt/100).toFixed(2);
p=(StrSt/s1*100).toFixed(1);
document.getElementById('Row3Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(3,v);
    
// Paragraph-19-Umlage
let ParaUm = parseFloat(q(document.getElementById("Row4Col2").innerHTML)); // Paragraph-19-Umlage
help=(v*ParaUm/100).toFixed(2);
p=(ParaUm/s1*100).toFixed(1);
document.getElementById('Row4Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(4,v);
    
// Offshore-Netzumlage
let Offsh = parseFloat(q(document.getElementById("Row5Col2").innerHTML)); // Offshore-Netzumlage
help=(v*Offsh/100).toFixed(2);
p=(Offsh/s1*100).toFixed(1);
document.getElementById('Row5Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(5,v);
    
// KWK-Abgabe
let kwk = parseFloat(q(document.getElementById("Row6Col2").innerHTML)); // KWK-Abgabe
help=(v*kwk/100).toFixed(2);
p=(kwk/s1*100).toFixed(1);
document.getElementById('Row6Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(6,v);
  
// Konzessionsabgabe
let konze = parseFloat(q(document.getElementById("Row7Col2").innerHTML)); // Konzessionsabgabe
help=(v*konze/100).toFixed(2);
p=(konze/s1*100).toFixed(1);
document.getElementById('Row7Col3').innerHTML=r(help)+" €/Jahr " + "("+r(p)+"%)" +  DELTA(7,v);

// Zwischensumme

// Umsatzsteuer
var USte = parseFloat(q(document.getElementById("Row9Col2").innerHTML)); // Umsatzsteuer
help=(v*USte/100).toFixed(2);
p=(USte/s1*100).toFixed(1);
var UStDelta = fktDelta(9,2)*v/100;
document.getElementById('Row9Col3').innerHTML=r(help)+" €/Jahr <br><span class='bedenkeUStDelta'> &Delta; " + r(UStDelta.toFixed(2)) +" € (zusätzliche Steuereinnahmen)</span>";
    
// Arbeitspreis Summe
var StroT1 = parseFloat(q(document.getElementById("Row10Col1").innerHTML)); // Stromtarif Summe 1
var StroT2 = parseFloat(q(document.getElementById("Row10Col2").innerHTML)); // Stromtarif Summe 2
help=(v*StroT1/100).toFixed(2);
document.getElementById('Row11Col1').innerHTML=r(help);
help=(v*StroT2/100).toFixed(2);
document.getElementById('Row11Col2').innerHTML=r(help);

help=(v*(StroT2-StroT1)/100).toFixed(2);
p=((StroT2-StroT1)/StroT1*100).toFixed(2);
let h2 = (help/12).toFixed(2);
document.getElementById('Row11Col3').innerHTML="Differenz:<br>+" + r(help) + " € (" + r(p) + "%)<br>+"+r(h2)+" € mtl. Abschlag";

UStDelta=(UStDelta*40.903).toFixed(1);
document.getElementById('idposSTdelta').innerHTML="Steuererhöhung über die mehr zu zahlende USt. &#x0394; "+r(UStDelta)+" Mio € (bei 40,9 Mio. BRD Haushalten mit &#8960; "+r(v)+" kWh im Jahr, Stand 2022)";
UStDelta=(v*USte/100*40.903/1000).toFixed(2);
document.getElementById('idposSTdelta').innerHTML=document.getElementById('idposSTdelta').innerHTML + " Ges. USt.-Einnahmen: 7,57 Milliarden € mit &#8960; 3000 kWh pro Haushalt und Jahr.";



// Arbeitspreis+Grundpreis = Summe
var preis;
preis = Grundpreis.options[Grundpreis.selectedIndex].value;
preis = preis.replace(",",".");

help = (preis*12 + v*StroT2/100);
h2 = (help/12).toFixed(0);
help = help.toFixed(0);
document.getElementById("Row13Col2").innerHTML="&sum; " +r(help) + " €/Jahr<br>"+ r(h2) + " € mtl. Abschlag";
//h3 = (h3*19/119).toFixed(0);
//document.getElementById("Row13Col3").innerHTML="&sum; USt. "+ r(h3) +" €/Jahr";
help = (preis*12 + v*StroT1/100);
h2 = (help/12).toFixed(0);
help = help.toFixed(0);
document.getElementById("Row13Col1").innerHTML="&sum; " + r(help) + " €/Jahr<br>"+ r(h2) + " € mtl. Abschlag";
}



function OnChange_cbo_Grundpreis()
{
var preis ="";

//var Checkbox_aktiv = document.getElementById("allePositionen").checked;
preis = Grundpreis.options[Grundpreis.selectedIndex].value;

document.getElementById('idposGrundpreis1').innerHTML=preis;
document.getElementById('idposGrundpreis2').innerHTML=preis;
preis = preis.replace(",",".");
preis = (preis*12).toFixed(2);
document.getElementById("Row12Col3").innerHTML="&sum; "+preis+" €/Jahr";
calcArbeitspreis();
}

function OnChange_cbo_TarifSpalte(nr)
{
var s1 = 0;
var USt = 0;
var d = 0;

	if (nr=="1") a = bisher.options[bisher.selectedIndex].value;
	if (nr=="2") a = neu.options[neu.selectedIndex].value;	


document.getElementById("Row1Col"+nr).innerHTML = r(arrTarife[(a)][4][2].toFixed(3));  // Strombeschaffung und Vertrieb
document.getElementById("Row2Col"+nr).innerHTML = r(arrTarife[(a)][5][2].toFixed(3));  // Netznutzungsentgelte
document.getElementById("Row3Col"+nr).innerHTML = r(arrTarife[(a)][6][2].toFixed(3));  // Stromsteuer (Ökosteuer)
document.getElementById("Row4Col"+nr).innerHTML = r(arrTarife[(a)][7][2].toFixed(3));  // Paragraph-19-Umlage
document.getElementById("Row5Col"+nr).innerHTML = r(arrTarife[(a)][8][2].toFixed(3));  // Offshore-Netzumlage
document.getElementById("Row6Col"+nr).innerHTML = r(arrTarife[(a)][9][2].toFixed(3));  // KWK-Abgabe
document.getElementById("Row7Col"+nr).innerHTML = r(arrTarife[(a)][10][2].toFixed(3)); // Konzessionsabgabe


s1=0;
for ( let i=4; i<=10; i++ ) { s1 = s1 + arrTarife[a][i][2]; }
document.getElementById("Row8Col"+nr).innerHTML =  "= "+r(s1.toFixed(3)); // Zwischensumme
USt = s1*0.19;
s1  = s1*1.19;
document.getElementById("Row9Col"+nr).innerHTML = r(USt.toFixed(3));  //  Umsatzsteuer (19%)
document.getElementById("Row10Col"+nr).innerHTML = "&sum; "+r(s1.toFixed(2)); // Endsumme Arbeitspreis

for ( let i=1; i<=10; i++ ) { // Vergleich erzeuge Deltas in der 3. Spalte
    d = parseFloat(q(document.getElementById("Row"+i+"Col2").innerHTML)) - parseFloat(q(document.getElementById("Row"+i+"Col1").innerHTML));	
	
	if (d==0) { 
	document.getElementById("Row"+i+"Col3").style.backgroundColor="white"; 
	document.getElementById("Row"+i+"Col3").style.fontWeight ="";
	document.getElementById("Row"+i+"Col3").innerHTML =  "";
	}
	if (d<0) { 
	document.getElementById("Row"+i+"Col3").style.backgroundColor="lightgreen"; 
	document.getElementById("Row"+i+"Col3").style.fontWeight ="bold";
	document.getElementById("Row"+i+"Col3").innerHTML =  "&Delta; "+r(d.toFixed(3));
	}

	if (d>0) { 
	document.getElementById("Row"+i+"Col3").style.backgroundColor="yellow"; 
	document.getElementById("Row"+i+"Col3").style.fontWeight ="bold";
	document.getElementById("Row"+i+"Col3").innerHTML =  "&Delta; "+r(d.toFixed(3));
	} 
} // for


// Löschen von Werten
	document.getElementById("Row13Col3").style.backgroundColor="white"; 
	document.getElementById("Row13Col3").style.fontWeight ="";
	document.getElementById("Row13Col3").innerHTML =  "";


for ( let i=1; i<=3; i++ ) { 
	document.getElementById("Row11Col"+i).style.backgroundColor="white"; 
	document.getElementById("Row11Col"+i).style.fontWeight ="";
	document.getElementById("Row11Col"+i).innerHTML =  "";
}

document.getElementById("Row13Col1").innerHTML =  "";
document.getElementById("Row13Col2").innerHTML =  "";
}

function r(i) {
return i.replace(".",",");
}

function q(i) {
i = i.replace(",",".");
i = i.replace(/[^0-9.]/g, '');
return i
}


// Vererbung :-)
function DELTA (row,v)
{
var Zeichen = "+";
var strAusgabe = "";
	
let h = fktDelta(row,3);
	if ( h < 0 ) { Zeichen = ""; }

	if ( Math.abs(h) > 0 ) { 
		h= (h*v /100).toFixed(3); 
		strAusgabe ="<br><b>&Delta;"+Zeichen+r(h)+ " €</b>"; 
	}

return strAusgabe;
}
	
function fktDelta(zeile, dezimalstellen) {
var d = 0;   
// EURO true bedeutet Wertausgabe mit 2 Dezimalstellen. Ansonsten 3 Dezimalstellen hinter dem Komma.
// Number(true)  = wert 1
// Number(false) = wert 0

d = parseFloat(q(document.getElementById("Row"+zeile+"Col2").innerHTML)) - parseFloat(q(document.getElementById("Row"+zeile+"Col1").innerHTML));
d = d.toFixed(dezimalstellen);
return d;
}
/*
<li>yyyyy<a href="javascript:opener('xxxx')">(Klick mich zum Aufklappen)</a></li>
<div id='xxxx'  style="display:none;">
<table border=2 style="background-color:white;"><tr><td>
<h3>NETZFUND</h3>
</td></tr></table></div> 

<figure>
<a href="./img_fff/xxx.jpg" target="_blank"><img src="./img_fff/xxx.jpg" width="400px"></a>
<figcaption></figcaption>
</figure>

*/
-->
/*  Erweiterung */
