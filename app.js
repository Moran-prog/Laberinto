
window.onload=function()
{
	document.onkeydown=teclas;
}

var tops = 0;
var lefts = 0;
var movimientos=0;

function teclas(e)
{
	var rotacion=270;
	var codigo= e.keyCode;
	if (codigo==40)
	{
		movimientos++;
		tops=tops+2;
		document.getElementById('raton').style.top=tops+"px";
		rotacion=rotacion-270;
		document.getElementById('raton').style.transform="rotate"+"("+rotacion+"deg)";
		document.getElementById('mov').textContent=movimientos;
	}
	if (codigo==38)
	{
		movimientos++;
		tops=tops-2;
		document.getElementById('raton').style.top=tops+"px";
		rotacion=rotacion-90;
		document.getElementById('raton').style.transform="rotate"+"("+rotacion+"deg)";
		document.getElementById('mov').textContent=movimientos;
	}
	if (codigo==39)
	{
		movimientos++;
		lefts=lefts+2;
		document.getElementById('raton').style.left=lefts+"px";
		document.getElementById('raton').style.transform="rotate"+"("+rotacion+"deg)";
		document.getElementById('mov').textContent=movimientos;
	}
	if (codigo==37)
	{
		movimientos++;
		lefts=lefts-2;
		document.getElementById('raton').style.left=lefts+"px";
		rotacion=rotacion+180;
		document.getElementById('raton').style.transform="rotate"+"("+rotacion+"deg)";
		document.getElementById('mov').textContent=movimientos;
	}

	var ratonpos=document.getElementById('raton').getBoundingClientRect();
	var rattop=ratonpos.top;
	var ratleft=ratonpos.left;
	var ratright=ratonpos.right;
	var ratbottom=ratonpos.bottom;

	//pared de abajo
	if (ratbottom==584) 
	{
		tops=tops-4;
	}
	//pared de arriba
	if (rattop==106) 
	{
		tops=tops+4;
	}
	//pared de la izquierda
	if (ratright==198&&rattop>=104&&rattop<396||ratright==198&&ratbottom>=490&&ratbottom<588) 
	{
		lefts=lefts-4;
	}
	//pared de la derecha
	if(ratright==580&&rattop<=526&&rattop>=236||ratright==580&&rattop>=104&&rattop<=138)
	{
		lefts=lefts-4;
	}
	//izquierda de celdas u1,d1,t1 y ci1
	if (ratright==266&&rattop>100) 
	{
		lefts=lefts+4;
	}
	//abajo de celdas u3,u4 y d3,d4
	if (ratbottom==196&&ratright<=644&&ratright>=396||ratbottom==292&&ratright<=644&&ratright>=396) 
	{
		tops=tops-4;
	}
	//arriba de celdas u3,u4 y d3,d4
	if(rattop==204&&ratright<=644&&ratright>=396||rattop==300&&ratright<=644&&ratright>=396)
	{
		tops=tops+4;
	}
	//derecha de las celdas d1 y t1
	if(ratright==296&&ratbottom<=392&&ratbottom>=202)
	{
		lefts=lefts-4;
	}
	//izquierda de las celdas d2 y t2
	if (ratleft==304&&ratbottom<=392&&ratbottom>=202) 
	{
		lefts=lefts+4;
	}
	//abajo de celda cu1
	if (ratbottom==486&&ratright>=202&&ratright<360)
	{
		tops=tops-4;
	}
	//derecha de celda cu2
	if (ratright==390&&rattop>=396&&rattop<492) 
	{
		lefts=lefts-4;
	}
	//abajo de celdas t1,t2 y t3
	if(ratbottom==390&&ratleft>=204&&ratleft<=488)
	{
		tops=tops-4;
	}
	//ariba de celdas cu1,cu2,cu3 y de ci1
	if (rattop==398&&ratright>=202&&ratright<550||rattop==494&&ratleft>=204&&ratleft<=298) 
	{
		tops=tops+4;
	}
	//izquierda de celda cu3
	if (ratleft==398&&rattop>=396&&rattop<=428) 
	{
		lefts=lefts+4;
	}
	//abajo de celda cu3
	if(ratbottom==486&&ratleft>=396&&ratleft<=488)
	{
		tops=tops-4;
	}
	//arriba de celda ci3
	if (rattop==494&&ratright>=394&&ratright<=548) 
	{
		tops=tops+4;
	}

	//linea u3-d3
	if (ratright==392&&rattop>138&&rattop<204) 
	{
		lefts=lefts-4;
	}
	//linea d1-d2
	if (ratbottom==198&&ratleft>236&&ratleft<302) 
	{
		tops=tops-4;
	}
	//linea d3-t3
	if (ratright==392&&rattop>234&&rattop<300) 
	{
		lefts=lefts-4;
	}
	//linea t3-cu3
	if (ratleft==490&&rattop>332&&rattop<398) 
	{
		lefts=lefts+4;
	}
	//linea cu1-ci1
	if (ratleft==300&&rattop>428&&rattop<492) 
	{
		lefts=lefts+4;
	}
	//linea cu3-ci3
	if (ratleft==490&&rattop>428&&rattop<492) 
	{
		lefts=lefts+4;
	}

	//entrada
	if (ratleft==116&&rattop>=398&&rattop<=426) 
	{
		lefts=lefts+4;
	}
	if (rattop==398&&ratleft>=116&&ratleft<=146) 
	{
		tops=tops+4;
	}
	if (rattop==426&&ratleft>=116&&ratleft<=146) 
	{
		tops=tops-4;
	}
	if (ratright>=620) 
	{
		lefts=lefts-4;
		document.getElementById('go').style.visibility="visible";
	}
}