var pix=pix||{};!function(){if("undefined"===typeof pix.js_stop){if(pix.panel_login_name&&pix.login_name!=pix.panel_login_name&&pix.server_name==document.location.hostname.toLowerCase()){pix.checklogin_callback=pix.checklogin_callback||"/api/checklogin";if(pix.thirdparty){var u="//"+pix.subdomain+"."+document.location.hostname+pix.checklogin_callback+"?done="+encodeURIComponent(document.location.href)+"&key="+pix.key}else{var u="//"+document.location.hostname+pix.checklogin_callback+"?done="+encodeURIComponent(document.location.href)}if("undefined"!==typeof pix.checklogin_version&&2==pix.checklogin_version){document.location="//"+pix.apisite+"/api/checklogin?done="+encodeURIComponent(u)+"&version=2"}else{document.location="//"+pix.apisite+"/api/checklogin?done="+encodeURIComponent(u)}pix.js_stop=true}}}();