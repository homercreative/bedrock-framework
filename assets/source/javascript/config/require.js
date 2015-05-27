require.config({

    // override dat-main from script tag during debug mode
    baseUrl: '../../../',

    // automatically require on page load in debug mode
    //deps: ['cs!site/index'],

    // automatically require this for production build
    //insertRequire: ['cs!site/index'],
    // map bower components to nice paths
    paths: {
        jquery: 'source/javascript/lib/jquery/jquery',
        modernizr: 'source/javascript/lib/modernizr/modernizr'
    },
    shim: {
        modernizr: {
            exports: 'modernizr'
        }
    }
});