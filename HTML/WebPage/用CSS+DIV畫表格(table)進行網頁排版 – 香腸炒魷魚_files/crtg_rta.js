if (window.scupioads && 
    typeof window.scupioads[0] === 'object' && (
    window.scupioads[0]['cid'] === '9420' ||
    window.scupioads[0]['cid'] === '9422' ||
    window.scupioads[0]['cid'] === '9867' ||
    window.scupioads[0]['cid'] === '9914' ||
    window.scupioads[0]['cid'] === '9915' ||
    window.scupioads[0]['cid'] === '9916' ||
    window.scupioads[0]['cid'] === '9917' ||
    window.scupioads[0]['cid'] === '9918' ||
    window.scupioads[0]['cid'] === '9919' ||
    window.scupioads[0]['cid'] === '9920' ||
    window.scupioads[0]['cid'] === '9921' ||
    window.scupioads[0]['cid'] === '9923' ||
    window.scupioads[0]['cid'] === '9924' ||
    window.scupioads[0]['cid'] === '9925' ||
    window.scupioads[0]['cid'] === '9926' ||
    window.scupioads[0]['cid'] === '10160' ||
    window.scupioads[0]['cid'] === '10161' ||
    window.scupioads[0]['cid'] === '10162' ||
    window.scupioads[0]['cid'] === '10163' ||
    window.scupioads[0]['cid'] === '10164' ||
    window.scupioads[0]['cid'] === '10165' ||
    window.scupioads[0]['cid'] === '10166' ||
    window.scupioads[0]['cid'] === '10167' ||
    window.scupioads[0]['cid'] === '10168' ||
    window.scupioads[0]['cid'] === '10169' ||
    window.scupioads[0]['cid'] === '10170' ||
    window.scupioads[0]['cid'] === '10171' ||
    window.scupioads[0]['cid'] === '10172' ||
    window.scupioads[0]['cid'] === '10173' ||
    window.scupioads[0]['cid'] === '10174' ||
    window.scupioads[0]['cid'] === '10175' ||
    window.scupioads[0]['cid'] === '10176' ||
    window.scupioads[0]['cid'] === '10177' ||
    window.scupioads[0]['cid'] === '10178' ||
    window.scupioads[0]['cid'] === '10179' ||
    window.scupioads[0]['cid'] === '10180' ||
    window.scupioads[0]['cid'] === '10181' ||
    window.scupioads[0]['cid'] === '10182'
)) {

    var crtg_nid = '3761',
        crtg_cookiename = 'crtg_rta',
        crtg_varname = 'crtg_content';

    function crtg_getCookie(c_name) {
        var i, x, y, ARRCookies = document.cookie.split(";");
        for (i = 0; i < ARRCookies.length; i++) {
            x = ARRCookies[i].substr(0, ARRCookies[i].indexOf("="));
            y = ARRCookies[i].substr(ARRCookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) {
                return unescape(y);
            }
        }
        return '';
    }

    var crtg_content = crtg_getCookie(crtg_cookiename);
    var crtg_rnd = Math.floor(Math.random() * 99999999999);

    (function() {
        var crtg_url = location.protocol + '//rtax.criteo.com/delivery/rta/rta.js?netId=' + escape(crtg_nid);
        crtg_url += '&cookieName=' + escape(crtg_cookiename);
        crtg_url += '&rnd=' + crtg_rnd;
        crtg_url += '&varName=' + escape(crtg_varname);
        var crtg_script = document.createElement('script');
        crtg_script.type = 'text/javascript';
        crtg_script.src = crtg_url;
        crtg_script.async = true;
        if (document.getElementsByTagName("head").length > 0) document.getElementsByTagName("head")[0].appendChild(crtg_script);
        else if (document.getElementsByTagName("body").length > 0) document.getElementsByTagName("body")[0].appendChild(crtg_script);
    })();

}
