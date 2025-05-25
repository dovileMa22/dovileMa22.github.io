$(document).ready(function(){
    // Šiame kode pakeisime logiką, kad sklandus slinkimas veiktų tik tada,
    // kai esame pagrindiniame puslapyje IR nuoroda veda į inkaro ID.
    $("a").on('click', function(event) {
        // Patikriname, ar nuoroda yra į inkaro ID O NE į išorinį failą (pvz., ../index.html)
        if (this.hash !== "" && this.pathname === window.location.pathname) {
            // Tikriname, ar elementas su šiuo hash ID tikrai egzistuoja
            if ($(this.hash).length) { // Patikriname, ar jQuery rado bent vieną elementą
                event.preventDefault(); // Neleidžiame naršyklei šokti iš karto
                var hash = this.hash;
                $('body,html').animate({
                    scrollTop: $(hash).offset().top
                }, 1200, function(){
                    window.location.hash = hash;
                });
            }
        }
    });

    // Papildoma logika, kad puslapis sklandžiai nuslinktų, jei buvo įkeltas su inkaro nuoroda
    // (pvz., ateinant iš contact.html)
    if (window.location.hash) {
        // Uždelsiame šiek tiek, kad užtikrintume, jog visi elementai yra įkelti
        setTimeout(function() {
            var hash = window.location.hash;
            if ($(hash).length) { // Patikriname, ar elementas su šiuo hash ID tikrai egzistuoja
                $('body,html').animate({
                    scrollTop: $(hash).offset().top
                }, 1200); // Nereikia nustatyti window.location.hash, nes jau esame ten
            }
        }, 10); // Mažas uždelsimas gali padėti įkelti visus elementus
    }
});

var width = $(window).width(); 

window.onscroll = function(){
    if ((width >= 900)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#middle").css("background-size","150% auto");
        }else{
            $("#middle").css("background-size","100% auto");         
        }
    }
};

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display","none");
    },800);
},1450);