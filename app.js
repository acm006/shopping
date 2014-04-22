$(document).ready(function () {

    $("#add_items").submit(function (e) {
        e.preventDefault();
        addToList();
    });

    $("#items").on("click", ".remove", function () {
        $(this).parent().fadeOut();
    });
    
    $("#items").on("click", ".checkbox", function () {
        $(this).parent().toggleClass("have");
    });

});

function addToList() {
    var item_name = $("#item_to_get").val();
    var item_quant = $("#quantity_to_get").val();
    $("#items").append('<li class="list_entry"><button class="remove">X</button> ' + item_name + ' x ' + item_quant + ' <button class="checkbox">&#x2713;</button></li>');
    $('#add_items').trigger("reset");
}