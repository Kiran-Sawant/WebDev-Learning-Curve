var playerOne = prompt("Player One enter your name, you will be Blue.")
var playerTwo = prompt("Player Two enter your name, you will be Red.")

var state = "blue";

$('h3').text(`${playerOne}: it is your turn, please pick a column to drop your blue chip.`)

$('td').on('click', addColor)

function addColor(){

    var clickId = Number(this.id)
    var tableData = $('td');

    for(i=clickId; i < (clickId + 36); i+=7){
        // if no class & no last column
        if(tableData.eq(i)[0].className == "" && i != (clickId + 35)){
            // console.log('I continued');
            continue;
        // if no class but last column
        } else if(tableData.eq(i)[0].className == "" && i == (clickId + 35)){
            // console.log("No class but last");
            if(state == "blue"){
                // tableData.eq(i).removeClass();
                tableData.eq(i).addClass('blue');
                traverse(state)
                state = "red";
                $('h3').text(`${playerTwo}: it is your turn, please pick a column to drop your red chip.`);
                break;
            } else if(state == 'red') {
                // tableData.eq(i).removeClass();
                tableData.eq(i).addClass('red');
                traverse(state)
                state = "blue";
                $('h3').text(`${playerOne}: it is your turn, please pick a column to drop your blue chip.`);
                break;
                }
        // if class
        } else if(tableData.eq(i)[0].className != ""){
            // console.log("class")
            if(state == "blue"){
                // tableData.eq(i - 7).removeClass();
                tableData.eq(i - 7).addClass('blue');
                traverse(state)
                state = "red";
                $('h3').text(`${playerTwo}: it is your turn, please pick a column to drop your red chip.`);
                break;
            } else if(state == 'red') {
                // tableData.eq(i - 7).removeClass();
                tableData.eq(i - 7).addClass('red');
                traverse(state)
                state = "blue";
                $('h3').text(`${playerOne}: it is your turn, please pick a column to drop your blue chip.`);
                break;
                }
        // if some fuck up
        } else {console.log("Tu chutya hai!"); break}
    }
}

function traverse(state){
    var taData = $('td');
    var counter = 0;
    
    // horizontal traverser
    for(i=0; i < 42; i++){
        // var curClass = taData.eq(i)[0].className
        console.log(taData.eq(i)[0].className);

        // if no class
        if(taData.eq(i)[0].className == ''){
            continue;
        // if class == state
        } else if(taData.eq(i)[0].className == state) {
            counter += 1;
            if(counter == 4){
                alert(`${state} Won, refresh to restart`)
            } else {continue;}
        // if non-empty class !=
        } else if(taData.eq(i)[0].className != state && taData.eq(i)[0].className != ""){
            counter = 0;
            continue;
        }
    }
    // vertical traverser
    for(i=0; i<7; i++){
        for(j=i; j < (i + 36); j+=7){
            // if no class.
            if(taData.eq(j)[0].className == ''){
                continue;
            }
            // if class == state
            else if(taData.eq(j)[0].className == state) {
                counter += 1;
                if(counter == 4){
                    alert(`${state} Won, refresh to restart`)
                } else {continue;}
            }
            // if non-empty class not equal
            else if(taData.eq(j)[0].className != state && taData.eq(j)[0].className != ""){
                counter = 0;
                continue;
            }
        }
    }
    console.log(counter)
}