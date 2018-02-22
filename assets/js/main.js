$(document).ready(function(){

    var controller = new ScrollMagic.Controller();


    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#start1',
        triggerHook: 0.4,

        duration:'40%'



    })

        .setTween("#kon",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '#kon',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon",  {opacity:0})
        .addTo(controller);





    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '#start1',
        triggerHook: 0.8,
        duration:'60%'



    })

        .setTween("#kon2",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene4 = new ScrollMagic.Scene({
        triggerElement: '#start1',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon2",  {opacity:0})
        .addTo(controller);



    var ourScene5 = new ScrollMagic.Scene({
        triggerElement: '#start1',
        triggerHook: 0.6,
        duration:'60%'



    })

        .setTween("#kon3",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene6 = new ScrollMagic.Scene({
        triggerElement: '#start1',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon3",  {opacity:0})
        .addTo(controller);



    /* ===========================================================   start2 kontainer     ======================================================================================  */

    var ourScene7 = new ScrollMagic.Scene({
        triggerElement: '#start2',
        triggerHook: 0.7,

        duration:'40%'



    })

        .setTween("#kon4",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene8 = new ScrollMagic.Scene({
        triggerElement: '#start2',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon4",  {opacity:0})
        .addTo(controller);



    var ourScene9 = new ScrollMagic.Scene({
        triggerElement: '#start2',
        triggerHook: 0.6,
        duration:'60%'



    })

        .setTween("#kon5",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene10 = new ScrollMagic.Scene({
        triggerElement: '#start2',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon5",  {opacity:0})
        .addTo(controller);



    var ourScene11 = new ScrollMagic.Scene({
        triggerElement: '#start2',
        triggerHook: 0.4,

        duration:'40%'



    })

        .setTween("#kon6",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene12 = new ScrollMagic.Scene({
        triggerElement: '#kon5',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon6",  {opacity:0})
        .addTo(controller);

    /* ===========================================================   start3 kontainer     ======================================================================================  */

    var ourScene13 = new ScrollMagic.Scene({
        triggerElement: '#start3',
        triggerHook: 0.4,

        duration:'40%'



    })

        .setTween("#kon7",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene14 = new ScrollMagic.Scene({
        triggerElement: '#kon7',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon7",  {opacity:0})
        .addTo(controller);





    var ourScene15 = new ScrollMagic.Scene({
        triggerElement: '#start3',
        triggerHook: 0.8,
        duration:'60%'



    })

        .setTween("#kon8",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene16 = new ScrollMagic.Scene({
        triggerElement: '#start3',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon8",  {opacity:0})
        .addTo(controller);



    var ourScene17 = new ScrollMagic.Scene({
        triggerElement: '#start3',
        triggerHook: 0.6,
        duration:'60%'



    })

        .setTween("#kon9",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene18 = new ScrollMagic.Scene({
        triggerElement: '#start3',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon9",  {opacity:0})
        .addTo(controller);

    /* ===========================================================   start4 kontainer     ======================================================================================  */


    var ourScene19 = new ScrollMagic.Scene({
        triggerElement: '#start4',
        triggerHook: 0.7,

        duration:'40%'



    })

        .setTween("#kon10",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene20 = new ScrollMagic.Scene({
        triggerElement: '#start4',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon10",  {opacity:0})
        .addTo(controller);



    var ourScene21 = new ScrollMagic.Scene({
        triggerElement: '#start4',
        triggerHook: 0.6,
        duration:'60%'



    })

        .setTween("#kon11",  { y:'70',opacity:1})
        .addTo(controller);



    var ourScene22 = new ScrollMagic.Scene({
        triggerElement: '#start4',
        duration:'30%',
        triggerHook: 0

    })
        .setTween("#kon11",  {opacity:0})
        .addTo(controller);



    var ourScene23 = new ScrollMagic.Scene({
        triggerElement: '#start4',
        triggerHook: 0.4,

        duration:'40%'



    })

        .setTween("#kon12",  { y:'70', opacity:1})
        .addTo(controller);



    var ourScene24 = new ScrollMagic.Scene({
        triggerElement: '#kon12',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kon12",  {opacity:0})
        .addTo(controller);


    /* ===========================================================   start5 kontakbutton    ======================================================================================  */



    var ourScene25 = new ScrollMagic.Scene({
        triggerElement: '#start5',
        triggerHook: 0.6,

        duration:'40%'



    })

        .setTween("#kontaktbutton",  { y:'100', opacity:1, scale:1.2})
        .addTo(controller);



    var ourScene26 = new ScrollMagic.Scene({
        triggerElement: '#start5',
        duration:'19%',
        triggerHook: 0



    })
        .setTween("#kontaktbutton",  {opacity:0})
        .addTo(controller);





    var ourScene30 = new ScrollMagic.Scene({
        triggerElement: '#slikadiv'





    })
        .setPin("#slikadiv", {pushFollowers: false})
        .addTo(controller);





    var ourScene31 = new ScrollMagic.Scene({
        triggerElement: '#trigger1',
        offset: -100





    })
        .setTween("#slika1",  {opacity:0 })
        .addTo(controller);





/*   ========================================================== First scroll down on index.html ==========================================================  */





/*   ========================================================== First scroll down on index.html ==========================================================  */




/*   ========================================================== Usluge scroll triggering animations ==========================================================  */




    var ourScene50 = new ScrollMagic.Scene({
        triggerElement: '#planiranjetrigger',
        triggerHook: 0.6,
        duration: '30%'




    })

        .setTween("#planiranje",  { y:'100',opacity:1})
        .addTo(controller);




    var ourScene51 = new ScrollMagic.Scene({
        triggerElement: '#dizajntrigger',
        triggerHook: 0.6,
        duration: '30%'




    })

        .setTween("#dizajn",  { y:'100',opacity:1})
        .addTo(controller);




    var ourScene52 = new ScrollMagic.Scene({
        triggerElement: '#izradatrigger',
        triggerHook: 0.6,
        duration: '30%'




    })

        .setTween("#izrada",  { y:'100',opacity:1})
        .addTo(controller);
        






    var ourScene53 = new ScrollMagic.Scene({
        triggerElement: '#odrzavanjetrigger',
        triggerHook: 0.6,
        duration: '30%'




    })

        .setTween("#odrzavanje",  { y:'100',opacity:1})
        .addTo(controller);
        




    var ourScene61 = new ScrollMagic.Scene({
        triggerElement: '#salijevo',
        triggerHook: 0.6





    })

        .setTween("#salijevo",  { x:'0'})
        .addTo(controller);
        

    var ourScene62 = new ScrollMagic.Scene({
        triggerElement: '#sadesno',
        triggerHook: 0.6





    })

        .setTween("#sadesno",  { x:'0'})
        .addTo(controller);
        



    var ourScene63 = new ScrollMagic.Scene({
        triggerElement: '#fademe',
        triggerHook: 0.6





    })

        .setTween("#fademe",  { opacity:1})
        .addTo(controller);
        



    var ourScene64 = new ScrollMagic.Scene({
        triggerElement: '#salijevo2',
        triggerHook: 0.7





    })

        .setTween("#salijevo2",  { x:'0'})
        .addTo(controller);
        

    var ourScene65 = new ScrollMagic.Scene({
        triggerElement: '#sadesno2',
        triggerHook: 0.7





    })

        .setTween("#sadesno2",  { x:'0'})
        .addTo(controller);
        


    var ourScene66 = new ScrollMagic.Scene({
        triggerElement: '#foot',
        triggerHook: 0.8





    })

        .setTween("#foot",  { opacity:1})
        .addTo(controller);
        




});




function relocate_kontakt()
{
    location.href = "https://www.almeny.com/test/Kontakt.html";
}
















