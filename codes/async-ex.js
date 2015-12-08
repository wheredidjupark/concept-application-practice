for(var i=0; i < 5; i++){

	setTimeout(function(){
		console.log(i);
	}, 100);
}

for(var i=0; i < 5; i++){

	var log = function(x){
		
		setTimeout(function(){
		console.log(x);
		}, 100);
	};

	log(i);
	
}


for(var i=0; i < 8; i++){

	(function(x){
		setTimeout(function(){
		console.log(x);
		}, 1000);
	})(i);
	
}