// ==UserScript==
// @id            the_list_reskin
// @name          Custom CSS for The List @ foopee.com
// @version       1.0
// @author        flynnduism
// @copyright 2013+, flynnduism.com
// @description   Changes the default css for foopee.com
// @include       http://www.foopee.com/punk/the-list/by*
// @resource      myCustomCss http://userstyles.org/styles/96411/foopee-the-list.css
// @grant         GM_addStyle
// @grant         GM_getResourceText
// ==/UserScript==

    // 1. Get CSS from userstyles.org
    GM_addStyle (GM_getResourceText ("myCustomCss") );

    // 2. Load Google Web Font
    (function(font) {
        var head = document.getElementsByTagName('head')[0],
            link = document.createElement('link'),
            style = document.createElement('style'),
            rules = document.createTextNode('body * { font-family: "' + font.family + '", arial, sans-serif !important }');

            link.rel  = 'stylesheet';
        link.href = 'http://fonts.googleapis.com/css?family=' + font.family + ':' + (font.style || []) + '&subset=' + (font.subset || ['latin']);
        head.appendChild(link);

        style.styleSheet ? style.styleSheet.cssText = rules.nodeValue : style.appendChild(rules);
        head.appendChild(style);
    })({ family:'Lato', style:['400','700'] });

    // 3. Add a back link
    var backlink = document.createElement("div");
    backlink.innerHTML = '<div class="backlink"><a href="http://www.foopee.com/punk/the-list/" title="Back">&#171;</a></div>';

    document.body.insertBefore(backlink, document.body.firstChild);
