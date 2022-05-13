let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val();
	
    if(filter === "Harlem"){
    $("img").css("filter", "contrast(115%) brightness(120%)");
    }
	else if(filter === "Bushwick"){ 
    $("img").css("filter", "contrast(50%) brightness(180%)");
    }
    else if(filter === "SOMA"){ 
    $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
    }
     else if(filter === "Sunset"){ 
    $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    }
    else if(filter === "Shylah"){ 
    $("img").css("filter", "contrast(130%) hue-rotate(-10deg) saturate(150%)");
    }
    
    
  // As you're writing your if-statements, think to yourself: What is the condition? And what code should execute if the condition is met?
    
    // 1. Harlem - Let's do the first example together. Below is the code block we want to execute if the user types Harlem in the input. Make sure to uncomment the jQuery code.
    
    //$("img").css("filter", "contrast(115%) brightness(120%)");

    // 2. Bushwick - Below is the code block we want to execute if the user types Bushwick in the input. 
    
        // $("img").css("filter", "contrast(50%) brightness(180%)");
    
    // 3. SOMA - Below is the code block we want to execute if the user types SOMA in the input. 
    
        // $("img").css("filter", "grayscale(50%) hue-rotate(10deg)");
        
    // 4. Sunset - Below is the code block we want to execute if the user types Sunset in the input. 
    
        // $("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)");
    
    
});

$(".reset").click(function() {
    $("img").css("filter", "");
});
