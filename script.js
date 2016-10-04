var butts=document.body.getElementsByClassName("btn");
var clear=document.getElementById("clear");
var mas=document.getElementById("mas");
var player=1;
var	b1=document.getElementById("b1"),
	b2=document.getElementById("b2"),
	b3=document.getElementById("b3"),
	b4=document.getElementById("b4"),
	b5=document.getElementById("b5"),
	b6=document.getElementById("b6"),
	b7=document.getElementById("b7"),
	b8=document.getElementById("b8"),
	b9=document.getElementById("b9");
var arr=[];

	
for(var i=0; i<butts.length; i++){
	(function(){
		var b=butts[i];

		b.addEventListener("click", function(){
			if(b.textContent==""){
				if(player==1){
					b.textContent="X";
					mas.textContent="O turn now";
					bbb("X");
					return player-=1;



				}
				else{
					b.textContent="O";
					mas.textContent="X turn now";
					bbb("O");
					return player+=1;
				}
			}	else{
				mas.textContent="this square is alredy used";
			}
		
		});

		var clearr =function (){
			b.textContent="";
			mas.textContent="X to begining";
			b.className="btn";
			return player=1;
		} ;

		clear.addEventListener("click", clearr);
			


	})();
	
}

function bbb(a){

	if(b1.textContent==a && b2.textContent==a && b3.textContent==a){
		b1.className="win";
		b2.className="win";
		b3.className="win";
		alert(a +" win");
		clearr();

	}
	else if(b4.textContent==a && b5.textContent==a && b6.textContent==a){
		b4.className="win";
		b5.className="win";
		b6.className="win";
		alert(a +" win");
	}
	else if(b7.textContent==a && b8.textContent==a && b9.textContent==a){
		b7.className="win";
		b8.className="win";
		b9.className="win";
		alert(a +" win");
	}
	else if(b1.textContent==a && b4.textContent==a && b7.textContent==a){
		b1.className="win";
		b4.className="win";
		b7.className="win";
		alert(a +" win");
	}
	else if(b2.textContent==a && b5.textContent==a && b8.textContent==a){
		b2.className="win";
		b5.className="win";
		b8.className="win";
		alert(a +" win");
	}
	 else if(b3.textContent==a && b6.textContent==a && b9.textContent==a){
	 	b3.className="win";
		b6.className="win";
		b9.className="win";
		alert(a +" win");
	}
	else if(b1.textContent==a && b5.textContent==a && b9.textContent==a){
		b1.className="win";
		b5.className="win";
		b9.className="win";
		alert(a +" win");
	}
	else if(b3.textContent==a && b5.textContent==a && b7.textContent==a){
		b3.className="win";
		b5.className="win";
		b7.className="win";
		alert(a +" win");
	}
	else if( !b1.textContent=="" && !b2.textContent=="" && !b3.textContent=="" &&
			 !b4.textContent=="" && !b5.textContent=="" && !b6.textContent=="" &&
			 !b7.textContent=="" && !b8.textContent=="" && !b9.textContent==""){
		alert("draw! to play again Click the button clear");
	}
	
}