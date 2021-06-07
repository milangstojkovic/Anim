document.getElementById("mal").onclick = function(){PopuniMain('<video height=700 controls><source src="./resources/modelAtoma.mp4" type="video/mp4"></video>')};

document.getElementById("ieo").onclick =function(){PopuniMain('<video height=700 controls><source src="./resources/vezivanjeOtpornika.mp4" type="video/mp4"></video>')};

document.getElementById("fz").onclick =function(){PopuniMain('<video height=700 controls><source src="./resources/faradejevZakon.mp4" type="video/mp4"></video>')};

document.getElementById("rn").onclick =function(){PopuniMain('<video height=700 controls><source src="./resources/RazdelnikNapona.mp4" type="video/mp4"></video>')};

document.getElementById("rrck").onclick =function(){PopuniMain('<video height=700 controls><source src="./resources/RCKolo.mp4" type="video/mp4"></video>')};

document.getElementById("anim").onclick =function(){PopuniMain("TODO")};

function PopuniMain(s)
{
    document.getElementById("main").innerHTML=s;
}