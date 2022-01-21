let outputScreen = document.getElementById("output-screen");
        function display(num){
            outputScreen.value += num;
        }
        function Calculate(){
            try{
                outputScreen.value = evaluate(outputScreen.value);
            }
            catch(err){
                alert("Invalid input!")
            }
        }
        function clear(){
            outputScreen.value="";
        }
        function del(){
            outputScreen.value = outputScreen.value.slice(0,-1);
        }