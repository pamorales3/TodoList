// Checks off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Deletes a todo when the trash icon is clicked
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Creates a new todo 
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");

        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// Add and removes the text input box
$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});
