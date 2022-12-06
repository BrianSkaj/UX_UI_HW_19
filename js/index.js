function handleClick(e){
    // Remove previous selection
    const selectionState=$(e.target)
    $('.selected').removeClass('selected')

    // Add selected class to new selection
    $(e.target).addClass('selected')
    $(".selection-bio").addClass('bioDeselected')
    if(selectionState.hasClass('bioDeselected')){
        selectionState.removeClass('bioDeselected')
        $('.details').hide()
    }
    else{
        $('.details').show()
    }

    // Create new class selector
    const selectedDetailsClass ='.'+ e.target.classList[0] + '-details'

    $(selectedDetailsClass).addClass('selected')

    console.log(selectedDetailsClass)
}
 

// Wait for page to load
$(document).ready(function(){

    // Query for selectable elements
    $(".clickable").click(handleClick)

    // Add click events
    //    Print console.log

});