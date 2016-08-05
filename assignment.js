// put your javascript code here

var categories_template, animals_template, all_animals_template, animal_template;

var current_category = animals_data.category[0];
var current_photo = current_category.animals[0].image1;
var current_image_src = current_photo
function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){

	//
	// compile all of our templates ready for use
	//
	var source   = $("#categories-template").html();
	categories_template = Handlebars.compile(source);
	
	source   = $("#animals-template").html();
	animals_template = Handlebars.compile(source);
	
	source   = $("#all-animals-template").html();
	all_animals_template = Handlebars.compile(source);
	
	source   = $("#animal-template").html();
	animal_template = Handlebars.compile(source);

	
	$("#all-category-tab").click(function () {

		showTemplate(categories_template, animals_data);

		$(".nav-tabs .active").removeClass("active");

		$("#all-category-tab").addClass("active");
 
		$(".category-thumbnail").click(function (){
			
			var index = $(this).data("id");

			current_category = animals_data.category[index];
			
			showTemplate(animals_template, current_category);
			
			$(".crop-img").click(function(){
				current_image_src = $(this).data("src");
			});

			$(".photo-thumbnail").click(function (){
				var src = current_image_src;
				var index = $(this).data("id");
				current_animal = current_category.animals[index];
				
				showTemplate(animal_template, current_animal);
				$("#fullImage").attr("src",src);
			});
		});
	});

	// 
	//  clicking on the photos tab shows all of the 
	//  photos in the current album
	//
	$("#selected-category-tab").click(function () {
		
		showTemplate(animals_template, current_category);

		$(".nav-tabs .active").removeClass("active");
		
		$("#selected-category-tab").addClass("active");

		// $(".photo-thumbnail").click(function (){
		// 	// get the index (position in the array)
		// 	// of the photo we clicked on
		// 	// "this" is the element that was clicked on
		// 	// data("id") gets the attribute data-id
		// 	// (which we set to the index of the photo in
		// 	// the array - @index)
		// 	var index = $(this).data("id");

		// 	// set the current photo to this photo
		// 	current_photo = current_category.photos[index];
			
		// 	// displays the single photo template
		// 	showTemplate(all-animals_template, current_photo);
		// });
	});

	$("#all-animals-tabs").click(function () {
		
		showTemplate(all_animals_template, animals_data);
		
		$(".nav-tabs .active").removeClass("active");
		
		$("#all-animals-tabs").addClass("active");
	});

	$("#all-category-tab").click();

});