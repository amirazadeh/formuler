function showhide() {
    var selectbox = document.getElementById("publikationselectbox");
    var publiselect = selectbox.options[selectbox.selectedIndex].value;
    var wiwoRadio = document.publi.wiwo.value;
    var handsonder = document.publi.handelsblatt.value;

    if (publiselect == "Handelsblatt") habl.style.display = "block"; else habl.style.display = "none";
    if (publiselect == "Handelsblatt" && handsonder == "sonderformat") {
        sonderformat.style.display = "block";
        habl.style.display = "block";
    } else {
        sonderformat.style.display = "none";
    }
    if (publiselect == "Wirtschaftswoche") wiwo.style.display = "block"; else wiwo.style.display = "none";
    if (publiselect == "Wirtschaftswoche" && wiwoRadio == "satzspiegel") {
        wiwosatzspiegel.style.display = "block";
        wiwo.style.display = "block";
    } else {
        wiwosatzspiegel.style.display = "none";
    }
    if (publiselect == "Wirtschaftswoche" && wiwoRadio == "anschnitt") {
        wiwoanschnitt.style.display = "block";
        wiwo.style.display = "block";
    } else {
        wiwoanschnitt.style.display = "none";
    }
}

function showhandbilder(a) {
    a.style.display = "block";
}


function hide(a, b) {
    var show = document.getElementById(a);
    var hide = document.getElementById(b);

    if (a == "null") {
        hide.style.display = "none";
    }

    else if (b == "null") {
        if (show.style.display === "none") {
            show.style.display = "block";
        }
    }

    else {
        if (show.style.display === "none") {
            show.style.display = "block";
        }
        else show.style.display = "none";
        hide.style.display = "none";
    }
}


function weiter() {
    //$("#target").append();
    $("#target").append("");
}

function review() {

    var kunde = document.getElementById("fname").value;
    document.getElementById("reviewkunde").innerHTML = kunde;

    var publiselectbox = document.getElementById("publikationselectbox").value;
    document.getElementById("reviewpublikation").innerHTML = publiselectbox;

    var logo = document.getElementById("logo").value;
    document.getElementById("reviewlogo").innerHTML = logo;

    var lektorat = document.getElementById("lektorat").value;
    document.getElementById("reviewlektorat").innerHTML = lektorat;
}


