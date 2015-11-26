$(document).ready(function(){
	$("#trashcan").droppable({
		drop: function(){
			console.log('dropped!');
		},
		acceptable: "#item"
	});

	$("#item").draggable();
	$("#item2").draggable();
});