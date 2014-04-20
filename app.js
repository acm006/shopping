$(document).ready( function(){
		
		$("#add_items").submit(function(e){
			e.preventDefault();
			var item_name = $("#item_to_get").val();
			var item_quant = $("#quantity_to_get").val();	
			$("#items").append('<li class="list_entry"><button class="remove">X</button> '+item_name+' x '+item_quant+' <button class="checkbox">&#x2713;</button></li>');	
			$('#add_items').trigger("reset");
		});
		
		$(".remove").on("click", function () {
			$(this).parent().fadeOut();
		});
			
		$(".checkbox").on("click", function () {
			$(this).parent().toggleClass("have");
		});
			

});