

var ArrButton=new Array(); 
var ArrCounter=new Array(); 
var ArrId=new Array(); 
var ArrCreate=new Array();
var currentValue = 0;
var vvodFlag=0;
var vvodFlag2=0;


do{
var x = Number(prompt('Введите число разрядов от 1 до 1000:','6'));
//console.log("число разрядов =  " + x);
} while (x<1||x>1000);



	for (var i = 1; i < (x+1); i++) 
	{
		ArrCounter[i] = 0;
		var button=document.createElement("button");
		var buttonText=document.createTextNode("Разряд"+i+":"+ArrCounter[i]);
		button.appendChild(buttonText);
		var div=document.getElementById("div1");
		ArrButton[i]=div.appendChild(button);
		
		var r=Math.round(Math.random()*255);
		var g=Math.round(Math.random()*255);
		var b=Math.round(Math.random()*255);
	    //console.log (r+"_",g+"_",b+"<br/>");

		ArrButton[i].style.backgroundColor="RGB("+r+","+g+","+b+")";
	    ArrId[i]="button"+i;
		ArrButton[i].id = ArrId[i];


		//console.log (ArrCounter[i]);
		//console.log (ArrButton[i]);
		//console.log (ArrId[i]);	
	}

		var button=document.createElement("button");
		var buttonText=document.createTextNode("Наберите эталонную комбинацию кода в разрядах и подтвердите ввод");
		button.appendChild(buttonText);
		var div=document.getElementById("div2");
		var vvod=div.appendChild(button);
			vvod.id="vvod";
			vvod.style="color:red";

			//console.log (vvod,vvodFlag);


		vvod.onclick=function()
		{ 
			var parent=document.getElementById("div2");
			var child=document.getElementById("vvod");
			parent.removeChild(child); 
			vvodFlag++; 
		 	//console.log (vvod,vvodFlag);
		 	confirm("Откройте замок с трех попыток")

		 	if (vvodFlag>0&&vvodFlag<4) 
		 	{
						// switch(vvodFlag)
						// {
						// 	case 1: alert ("Первая попытка");  break;
						// 	case 2: alert  ("Вторая попытка"); break;
						// 	case 3: alert  ("Третья попытка"); break;
						// }
				var button2=document.createElement("button");
				var buttonText=document.createTextNode("Введите комбинацию");
				button2.appendChild(buttonText);
				var div=document.getElementById("div3");
				var vvod2=div.appendChild(button2);

				vvod2.id="vvod2";
				vvod2.style="color:red";
				//console.log (vvodFlag);
				var vvodFlag2=false;
				vvod2.onclick=function()
				{ var vvodFlag2=true; 
					var parent=document.getElementById("div3");
					var child=document.getElementById("vvod2");
					parent.removeChild(child); 
				
				 	//console.log (vvod2,vvodFlag2);
				 	confirm("Ввод подтвержден");

				 	var z=0;
				

					if (vvodFlag2==true) 
					{ //for (var i = 0; i < x; i++) {}

						// switch(z)
						// {
						// 	case 0: document.write ("Неудачная попытка взлома");  break;
						// 	case 1: document.write  (" Замок заблокирован"); break;
						// 	case 2: document.write ("Доступ разрешен"); break;
						// }
						
					}
				}
			}
														

		 }

	
		// for (var i = 0; i < x; i++) { 
			
			 
		// 	ArrButton[i].onclick = function(){
		// 	console.log (ArrId[i]);
		// 	console.log (ArrButton[i]);
		// 	ArrCounter[i]++;

		// 	var button=document.createElement("button"+i);
		// 	var buttonText=document.createTextNode("Разряд"+i+":"+ArrCounter[i]);
		// 	button.appendChild(buttonText);

		// 	console.log(button);
		// 	var parent=document.getElementById("div1");
		// 	var child=document.getElementById(ArrButton[i]);

		// 	console.log(ArrId[i]);
		// 	//parent.replaceChild(button,child);
		// 	//ArrButton[i]=div.appendChild(button);
			
		// 	//button.innerHTML=("Разряд"+i+":"+ArrCounter[i]);
		// 	console.log ("ArrCounter"+i+"="+ArrCounter[i])
		
		// 	}

		// button0.onclick = function(){
		// ArrCounter[0]++
		// var button=document.getElementById("button0");
		// button.innerHTML=("Разряд"+0+":"+ArrCounter[0]);

		//  }		
				


		

			




