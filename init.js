/**
 *  DevDocs Codiad Plugin
 *  Copyright (c) 2013 - Kent Safranski (Fluidbyte)
 */

(function(global, $){
    
    // Define core
    var codiad = global.codiad,
        scripts= document.getElementsByTagName('script'),
        path = scripts[scripts.length-1].src.split('?')[0],
        curpath = path.split('/').slice(0, -1).join('/')+'/';

    codiad.DevDocs = {
        
        // Allows relative `this.path` linkage
        path: curpath,

        open: function() {
            width = Math.round(($(document).width())/1.5);
            codiad.modal.load(width,this.path+'dialog.php');
            codiad.modal.hideOverlay();
        }

    };

})(this, jQuery);
