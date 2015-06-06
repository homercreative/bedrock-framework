require(['jquery', 'modernizr', 'responsiveNav'], function ($) {
   $(document).ready(function () {
      console.log('Welcome To Bedrock!');

       $('#main-nav').responsiveNav({
           switchWidth: 800,  // width (in px to switch at)
           menuName: 'Menu'
       });

   });
});