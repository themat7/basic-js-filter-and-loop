var dino = ['Allosaurus', 'Diplodicus',
'T-rex', 'Gigantasaurus', 'Spinosaurus'];
var info = 'The highest rated dinosaurs are: ';
var para = document.querySelector('p');
var header = document.querySelector('h1');
var btn = document.querySelector('button');
var input = document.querySelector('input');
var dinoComment = document.getElementById('dinoComment');
function displayDino(){
	var x = document.createElement('img');
	x.setAttribute('src', 'bckImg.jpg');
	x.setAttribute('height', '1200');
	x.setAttribute('width', '1900');
	x.setAttribute('background-size', 'cover');
	x.setAttribute('position', 'fixed');
	
	document.getElementById('welcome').appendChild(x);
	/*Displays bck img into css welcome id              */
}

btn.addEventListener('click', function(){
	var yourDino = input.value;
	input.value = '';
	input.focus();
			if (yourDino === 'Allosaurus'|| yourDino === 'Gigantasaurus'|| yourDino === 'Spinosaurus'|| yourDino === 'T-rex'|| yourDino === 'Diplodicus') {
        para.textContent = yourDino + ' , you picked one of the top 5!!';
		displayDino();
		}
				else if (yourDino.indexOf('Dildo') !==  -1|| yourDino.indexOf('dildo') !== -1)
				{
					dinoComment.textContent	 = yourDino + ' HAHAHA very funny';
				}
				else if (yourDino.indexOf('faggot') !== -1 || yourDino.indexOf('Faggot') !== -1)
				{
					dinoComment.textContent = yourDino + ' ?' + '   not particualrly funny. Your fired!!!';
				}
				else if (yourDino.indexOf('bollocks') !== -1 || yourDino.indexOf('Bollocks') !== -1)
				{
					dinoComment.textContent = yourDino + '.....' + '   Verrrrry Funny Hannah...';
				}

				else 
				{
				dinoComment.textContent = yourDino + ' ....interesting choice!';	
				}
				/*Else if with Switch statement  that picks up user input to make a pseudo filter 
                  Uses indexOf to check for value , will give -1 if not found hence
				  !== -1
				*/
				
      });
for (var i =0; i < dino.length; i++){
                info += dino[i] + ', ';	
header.textContent = info;
/* loopto print var dino array    */
}
header.textContent= header.textContent.slice(0,header.textContent.length-2) + '!';
/*Gets the header length the takes 1 character off and replaces is with "!"    */
