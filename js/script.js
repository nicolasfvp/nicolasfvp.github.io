var cheat=0;
var mostraSenha = function () {
    $("#jsEspere").html("não quero passar meu sofrimento adiante, quero acabar com ele");
    setTimeout(colocaEspera, 5000);
};

var colocaEspera = function () {
    $("#jsEspere").html("espere");
    setTimeout(mostraSenha, 900000);
}
$(document).ready(function () {
    $("#jsPassword").keypress(function (event) {
        if(event.which==13){
        if ($('#jsPassword').val() == "no inicio de tudo") {
            $("#jsFase1").hide()
            $("#jsFase2").show()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "A") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").show()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        }if ($('#jsPassword').val() == "Era a companheira de todos") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").show()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "sempre feliz") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").show()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "alegre alegria") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").show()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "mas as coisas mudaram hoje em dia") {
            document.title = "a seguir, (fase)x-1"
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").show()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "uma pena, o meu amor não mudou ainda") {
            document.title ="O jogo"
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").show()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "sim, tudo isso é uma história de amor") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").show()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()

            colocaEspera();
        } if ($('#jsPassword').val() == "não quero passar meu sofrimento adiante, quero acabar com ele") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").show()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "em milhares de maneiras eu penso mas somente uma funciona") {
            document.title = "sim, é o mesmo de antes"
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").show()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "e nada fara com que tudo volte ao normal") {
            document.title = "o jogo"
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").show()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "o inferno é aqui") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").show()
            $("#jsFase14").hide()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        } if ($('#jsPassword').val() == "adeus amarga vida.") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").show()
            $("#bonus").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
        }if(!localStorage.cheat){
                $("#bonus").show()
            }
        if ($('#jsPassword').val() == "torre eiffel") {
            alert("sim, tudo isso é uma história de amor")
        } if ($('#jsPassword').val() == "eu sou um noob 1") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").show()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 2") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").show()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 3") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").show()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 4") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").show()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 5") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").show()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 6") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").show()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 7") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").show()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 8") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").show()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 9") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").show()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 10") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").show()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 11") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").show()
            $("#noob12").hide()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 12") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").show()
            $("#gabarito").hide()
            cheat=1
            localStorage.cheat=cheat
        } if ($('#jsPassword').val() == "eu sou um noob 13") {
            $("#jsFase1").hide()
            $("#jsFase2").hide()
            $("#jsFase3").hide()
            $("#jsFase4").hide()
            $("#jsFase5").hide()
            $("#jsFase6").hide()
            $("#jsFase7").hide()
            $("#jsFase8").hide()
            $("#jsFase9").hide()
            $("#jsFase10").hide()
            $("#jsFase11").hide()
            $("#jsFase12").hide()
            $("#jsFase13").hide()
            $("#jsFase14").hide()
            $("#noob1").hide()
            $("#noob2").hide()
            $("#noob3").hide()
            $("#noob4").hide()
            $("#noob5").hide()
            $("#noob6").hide()
            $("#noob7").hide()
            $("#noob8").hide()
            $("#noob9").hide()
            $("#noob10").hide()
            $("#noob11").hide()
            $("#noob12").hide()
            $("#noob13").show()
            $("#gabarito").hide() 
            cheat=1
            localStorage.cheat=cheat
    } if ($('#jsPassword').val()=="gabarito"){
        $("#jsFase1").hide()
        $("#jsFase2").hide()
        $("#jsFase3").hide()
        $("#jsFase4").hide()
        $("#jsFase5").hide()
        $("#jsFase6").hide()
        $("#jsFase7").hide()
        $("#jsFase8").hide()
        $("#jsFase9").hide()
        $("#jsFase10").hide()
        $("#jsFase11").hide()
        $("#jsFase12").hide()
        $("#jsFase13").hide()
        $("#jsFase14").hide()
        $("#noob1").hide()
        $("#noob2").hide()
        $("#noob3").hide()
        $("#noob4").hide()
        $("#noob5").hide()
        $("#noob6").hide()
        $("#noob7").hide()
        $("#noob8").hide()
        $("#noob9").hide()
        $("#noob10").hide()
        $("#noob11").hide()
        $("#noob12").hide()
        $("#noob13").hide()
        $("#gabarito").show() 
    }
}


})
})