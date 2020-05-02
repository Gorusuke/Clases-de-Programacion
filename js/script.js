$(document).ready(function () {
    
    // Menu Fijo

    var fixedHeader = $("#fixedHeader");

    $(window).on("scroll", function(){
        
        var offsetTop = $("#proyectos").offset().top;

        if ($(window).scrollTop() >= offsetTop){

            fixedHeader.css("margin-top", 0);
        }
        else if ($(window).scrollTop() <= offsetTop/2){

            fixedHeader.css("margin-top", "-68px");
        }
    })

    // Volver Arriba

    var VolverArriba = $("#btnVolverArriba");

    $(window).on("scroll", function(){
        
        var offsetTop = $("#proyectos").offset().top;

        if ($(window).scrollTop() >= offsetTop){

            VolverArriba.css("margin-right", 0);
        }
        else if ($(window).scrollTop() <= offsetTop/2){

            VolverArriba.css("margin-right", "-68px");
        }
    });

    $("a.volver-arriba").on("click", function(e){
        e.preventDefault();

        if($(window).scrollTop() != 0){
            $("html, body").animate({scrollTop: 0}, 1000);
        }
    });

    // Efecto Scroll Suave A Los Enlaces

    $("a.scroll-suave").on("click", function(e){
        e.preventDefault();
        var seccionOT = $($(this).attr("href")).offset().top + 10
        $("html, body").stop().animate({scrollTop: seccionOT}, 1000);   
    });

    $("a.scroll-acercaDe").on("click", function(e){
        e.preventDefault();
        var seccionOT = $($(this).attr("href")).offset().top -120
        $("html, body").stop().animate({scrollTop: seccionOT}, 1000);   
    });

    $("a.scroll-equipo").on("click", function(e){
        e.preventDefault();
        var seccionOT = $($(this).attr("href")).offset().top - 65
        $("html, body").stop().animate({scrollTop: seccionOT}, 1000);   
    });

    // Creando Modal

    $(".imagen-proyecto").on("click", function(){

        var rutaImagen = $(this).attr("src")
        var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fas fa-times"></i></div></div>';
        $("#proyectos").after(modal);

        $("#btnCerrar").on("click", function(){
            $("#modal").remove();
        })
    })
    
    // Salir con ESC
    $(document).on("keyup", function(e){
        if (e.which == 27){
            $("#modal").remove();
        }
    })

    // Movimiento Slider

    var slider = $("#slider");
    var btnAnterior = $("#btnAnterior");
    var btnSiguiente = $("#btnSiguiente");

    // Se Pasa la ultima foto al 1er lugar

    $("#slider .slide:last").insertBefore("#slider .slide:first");

    // Con margen negativo se vuelve a mostrar el 1er slider
    slider.css("margin-left", "-50%");

    // Funcion para que el slide se mueva a la derecha
    function moverDerecha() {
        if (!slider.is(":animated")) {
            slider.animate({
                marginLeft: "-116.65%"
            }, 700 , function () {
                $("#slider .slide:first").insertAfter("#slider .slide:last");
                slider.css("margin-left", "-50%");
                resetInterval()
            }); 
        }
               
    }
    btnSiguiente.on("click", moverDerecha);

    // Funcion para que el slide se mueva a la Izquierda
    function moverIzquierda() {
        if (!slider.is(":animated")) {
            $("#slider .slide:last").insertBefore("#slider .slide:first");
            slider.css("margin-left", "-116.65%");
            slider.animate({
                marginLeft: "-50%"
            }, 700, function () {
                resetInterval()                
            });
        }
       
    }
    btnAnterior.on("click", moverIzquierda);


    // Intervalo para que el slider se mueva Automaticamente

    var intervalo= setInterval(moverDerecha, 4500);

    function resetInterval() {
        clearInterval(intervalo);
        intervalo =  setInterval(moverDerecha, 4500);
    }
    
    // Validacion de formulario

    var formulario = $("#formulario");
    var nombre = $("#nombre");
    var email = $("#email");
    var mensaje = $("#mensaje");

    function valNombre(e) {
        
        if (nombre.val() == "" || nombre.val() == null) {
            e.preventDefault();
            $('input[type="text"] + .error').css("display", "block");            
        }
        else {
            $('input[type="text"] + ".error').css("display", "none");
        }        
    }

    function valEmail(e) {
        
        if (email.val() == "" || email.val() == null) {
            e.preventDefault();
            $('input[type="email"] + .error').css("display", "block");            
        }
        else {
            $('input[type="email"] + .error').css("display", "none");
        }        
    }

    function valMensaje(e) {
        
        if (mensaje.val() == "" || mensaje.val() == null) {
            e.preventDefault();
            $('textarea + .error').css("display", "block");            
        }
        else {
            $('textarea + .error').css("display", "none");
        }        
    }

    function validacion(e) {
        valNombre(e);
        valEmail(e);
        valMensaje(e);
    }

    formulario.on("submit", validacion);

    // Menu Mobile

    var numero = 1;
    
    $("#btnMenu").on("click", function(e){
        e.preventDefault();
        if (numero == 1) {
            $(".menu-mobile .menu-principal").animate({left: 0}, 300, function(){
                numero = 0;
            });            
        }
        else{
            $(".menu-mobile .menu-principal").animate({left: "-100%"}, 300, function(){
                numero = 1;
            });
        }
    })

    $(".menu-mobile .menu-principal a").on("click", function(){
        $(".menu-mobile .menu-principal").animate({left: "-100%"}, 300, function(){
            numero = 1;
        });
    })

})  