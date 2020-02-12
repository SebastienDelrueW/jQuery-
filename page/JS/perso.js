$(function() {

    $('aside a').click(function() {
        // alert('clic');

        // j'annule le clic sur le lien
        event.preventDefault();
        console.log($(this).attr('href'));

        var monHref = $(this).attr('href');

        $('figure img').attr("src", monHref);





        // Récupèrer dans une variable le alt des images vignettes puis changer le contenu de figcation avec cette variable


        var monAlt = $('aside a').attr('alt');
        // console.log(monAlt);

        $('figcaption h3').html(monAlt);

    });



});