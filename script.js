//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    userNamePrompt,
    favoriteSpeechPrompt;

var i = 0;

var oldestYear = speechesArray[0].year;
var newestYear = speechesArray[0].year;

/* 1. Use a WHILE loop to display the author of each speech in our array in the console
First, set up a variable outside of the loop called i and set it to zero. We’ll use this as our 
iterator inside the loop to keep track of which speech we’re on while we’re looping. Next, set up 
a while loop and with the stop comparison of the variable i being less than the length of the speechesArray.
Inside the WHILE loop use a console.log() statement to display the author's name for each object in the speechesArray*/


while(i < speechesArray.length) {
	console.log("This speech is written by " + speechesArray[i].author + ".");
	i +=1;
}


/* 2. When the user clicks the Donate button, use a FOR loop to loop over the speechesArray and check if the user's value 
matches the value of the author property on each speech object in the array. If the user's input matches the author name, 
display something like this in the console:[author name] was [author age] during this speech.*/


document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  favoriteSpeechPrompt = window.prompt('Which speech author is your favorite?');

  for(i=0; i<speechesArray.length; i +=1){
  	if(favoriteSpeechPrompt === speechesArray[i].author) {
  		console.log(speechesArray[i].author + ' was ' + speechesArray[i].authorAge + ' during this speech.') 
  	}
  }
});

/* 3. Compare a selected speech's year value to that of every other object in the speechesArray
First, create variables for the oldest and newest year and set them both to the year value of the first object 
in the speechesArray. We do this because we need to start with a value from one of the objects in the array in 
order to start comparing the others to it. 

Now, loop over the speechesArray and use a conditional to check if the year value for each speech is less than the 
value of the oldest variable. If the speech's year value is older, set the value of the oldest variable to the value 
of that speech's year. Repeat this process with the newest variable, checking if the object's year property is greater 
than the newer variable.
 
After you've set values for the oldest and newest variables in the FOR loop, compare the value for the selected speech 
to both variables and display the appropriate message in the console */


for(i=0; i<speechesArray.length; i +=1){
  if(speechesArray[i].year < oldestYear) {
    oldestYear = speechesArray[i].year;
    console.log(speechesArray[i].author + " This is the oldest speech on the page.");
  } else if(speechesArray[i].year > newestYear) {
    newestYear = speechesArray[i].year;
    console.log(speechesArray[i].author + " This is the newest speech on the page.");
  }   


};



document.getElementById('BtnChurchill').addEventListener('click', function(){
	 //Code in here executes when the user clicks the "Churchill" button.
	 console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);

	 if(speechesArray[0].yearIsBCE === true){
	   console.log('This speech took place before the common era.');
	 }else{
	   console.log('This speech took place during the common era.');
	 }

	 if(speechesArray[0].year < speechesArray[1].year && speechesArray[0].year < speechesArray[2].year){
	    console.log('This is the oldest speech on the page.');
     }else if(speechesArray[0].year > speechesArray[1].year && speechesArray[0].year > speechesArray[2].year){
        console.log('This is the most recent speech on the page.');
     }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
	 //Code in here executes when the user clicks the "Ghandi" button.
	    console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);

     if(speechesArray[1].yearIsBCE === true){
        console.log('This speech took place before the common era.');
	 }else{
	    console.log('This speech took place during the common era.');
	 }

     if(speechesArray[1].year < speechesArray[0].year && speechesArray[1].year < speechesArray[2].year){
	    console.log('This is the oldest speech on the page.');
     }else if(speechesArray[1].year > speechesArray[0].year && speechesArray[1].year > speechesArray[2].year){
        console.log('This is the most recent speech on the page.');
     }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  	//Code in here executes when the user clicks the "Demosthenes" button.
  		console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);

 	 if(speechesArray[2].yearIsBCE === true){
    	console.log('This speech took place before the common era.');
  	}else{
    	console.log('This speech took place during the common era.');
  }

  	 if(speechesArray[2].year < speechesArray[0].year && speechesArray[2].year < speechesArray[1].year){
    	console.log('This is the oldest speech on the page.');
  	}else if(speechesArray[2].year > speechesArray[0].year && speechesArray[2].year > speechesArray[1].year){
    	console.log('This is the most recent speech on the page.');
  }
});
