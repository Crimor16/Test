function isDigit(str) {
	return str && !/[^\d]/.test(str);
};
let a = Math.round(Math.random() * (9 - 6) + 6);

let c = Math.round(Math.random() * (14 - 11) + 11);

let b = c - a;

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

let div = document.querySelector("div");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3")

let h1 = document.querySelector("#h");
let spanA = document.querySelector("#a");
let spanPLUS = document.querySelector("#plus");
let spanB = document.querySelector("#b");
let spanC = document.querySelector("#c");
let x1 = 100;
let x2 = 300;
let CreateInput = document.createElement('input');

let input2;
let input3;
let value2;
let value3;
CreateInput.style.width = '25px';
CreateInput.style.height = '30px';
CreateInput.style.textAlign = 'center';
CreateInput.style.fontSize = '35px';
CreateInput.style.marginLeft = x1+33+a*2 +'px';

h.appendChild(spanA).innerHTML = a;
h.appendChild(spanPLUS).innerHTML = "+";
h.appendChild(spanB).innerHTML = b;
h.appendChild(spanC).innerHTML = " = ?";

let TrueA = document.createElement('h1');
let TrueB = document.createElement('h1');

TrueA.style.display = 'inline-block';
TrueA.style.marginLeft = x1+33+a*2 +'px';

TrueB.style.display = 'inline-block';
TrueB.style.marginLeft = x2-70 +'px';

ctx.beginPath();
	ctx.moveTo(-30, 150); //Начальная точка
	ctx.quadraticCurveTo(x1, -140, a*48, 150);// для 6
	//ctx.quadraticCurveTo(180/*Контрольная точка(x)*/, 10/*Контрольная точка(y)*/, 320/*Конечная точка(x)*/, 150/*Конечная(y)*/);
	ctx.lineWidth = 5;                                                 
	ctx.stroke();
ctx.closePath();

ctx.beginPath();
	ctx.arc(a*39, 81, 6, 0, 2*Math.PI, false);
	ctx.fill();
ctx.closePath();

div2.appendChild (CreateInput);

let input1 = document.querySelector("#div2 input");
let value;
input1.addEventListener('keyup', function (){
	value = input1.value;
	if(isDigit(value) === false){
		input1.value = '';
	};
	if(value.length > 1){
		input1.value = value[0];
	};
	if(+value === a){
		CreateInput.style.border = '';
		CreateInput.style.color = '';
		spanA.style.background = '';
		if(event.keyCode === 13){
			div2.removeChild(input1);
			div2.appendChild(TrueA).innerHTML = a;

			let CreateInput2 = document.createElement('input');

			CreateInput2.style.width = '25px';
			CreateInput2.style.height = '30px';
			CreateInput2.style.textAlign = 'center';
			CreateInput2.style.fontSize = '35px';
			CreateInput2.style.marginLeft = x2+100 +'px';
			CreateInput2.id = "input2";

			div3.appendChild(CreateInput2).innerHTML; 

			ctx = canvas.getContext('2d');
			ctx.beginPath();
				ctx.moveTo(a*39, 150); //Начальная точка
				ctx.quadraticCurveTo(x2,-90,a*40+b*55, 150);
				ctx.lineWidth = 5;                                                                    
				ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
				ctx.arc(a*37+b*42, 81, 6, 0, 2*Math.PI, false);
				ctx.fill();
			ctx.closePath();
			CreateInput.value = '';
			input2 = document.getElementById('input2');
			input2.addEventListener('keyup', function(){
				value2 = input2.value;
				if(isDigit(value2) === false){
					input2.value = '';
				};
				if(value2.length > 1){
					input2.value = value2[0];
				};
				if(+value2 === b){
					CreateInput2.style.color = '';
					CreateInput2.style.background = '';

					spanB.style.background = '';
					if(event.keyCode === 13){
						div3.removeChild(input2);
						div2.appendChild(TrueB).innerHTML = b;
						div.appendChild(h1).innerHTML = a +"+" +b +" = ";

						let CreateInput3 = document.createElement('input');
						CreateInput3.style.width = '50px';
						CreateInput3.style.height = '30px';
						CreateInput3.style.textAlign = 'center';
						CreateInput3.style.fontSize = '35px';
						CreateInput3.id = "input3";
						div.appendChild(CreateInput3).innerHTML; 

						input3 = document.getElementById('input3');
						input3.addEventListener('keyup', function (){
							value3 = input3.value;
							if(isDigit(value3) === false){
								input3.value = '';
							};
							if(value3.length > 2){
								input3.value = value3[0] +value3[1];
							};
							if(+value3 === c){
								CreateInput3.style.border = '';
								CreateInput3.style.color = '';
								if(event.keyCode === 13){
									div.removeChild(input3);
									div.appendChild(h1).innerHTML = a +"+" +b +" = " +c;

								};	
							}
							else{
								CreateInput3.style.color = 'red'																
							}	
						});
					};	
				}
				else{
					CreateInput2.style.color = 'red'
					spanB.style.background = 'orange';
				};
			});
		};	
	}
	else{
		CreateInput.style.color = 'red';
		spanA.style.background = 'orange';
	}
});	
