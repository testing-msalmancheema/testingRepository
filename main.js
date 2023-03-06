function preventFormSubmit() {
    var forms;
    forms = document.querySelectorAll("form");
    for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener("submit", function(e) {
    e.preventDefault();
    });
    }
    }
    window.addEventListener("load", preventFormSubmit);
    function handleFormSubmit(f) {
    google.script.run.withSuccessHandler().send(f);
    }
    function receive(r) {
    var output;
    output = document.getElementById("output");
    output.value = r;
    }
    function copy() {
        var output;
        output = document.getElementById("output");
        output.select();
        document.execCommand("copy");
        }
        function saveAsTxtFile() {
        var output = document.getElementById("output").value;
        output = output.replace(/\n/g, "\r\n");
        var blob = new Blob([output], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "GTextTransfer.txt");
        }
        function clearAll() {
            document.getElementById("output").value = "";
        }
        function readFile() {
            var input = document.getElementById("input");
            var inputTxt = document.getElementById("inputTxt");
          let file = input.files[0];
        
          let reader = new FileReader();
        
          reader.readAsText(file);
        
          reader.onload = function() {
            inputTxt.value = reader.result;
          };
        
          reader.onerror = function() {
            console.log(reader.error);
          };
        
        }