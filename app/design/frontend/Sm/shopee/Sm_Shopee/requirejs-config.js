var config = {
    map: {
        '*': {
            jquerypopper: "Sm_Shopee/js/bootstrap/popper",
            jquerybootstrap: "Sm_Shopee/js/bootstrap/bootstrap.min",
            owlcarousel: "Sm_Shopee/js/owl.carousel",
            jqueryfancyboxpack: "Sm_Shopee/js/jquery.fancybox.pack",
            jqueryunveil: "Sm_Shopee/js/jquery.unveil",
            slick: "Sm_Shopee/js/slick",
            yttheme: "Sm_Shopee/js/yttheme"
        }
    },
    shim: {
        'jquerypopper': {
            'deps': ['jquery'],
            'exports': 'Popper'
        },
        'jquerybootstrap': {
            'deps': ['jquery', 'jquerypopper']
        }
    }
};