$(document).ready(function(){
	$("#trashcan").droppable({
		drop: function(){
			console.log('dropped!');
		}
	});

	$("#item").draggable();
});