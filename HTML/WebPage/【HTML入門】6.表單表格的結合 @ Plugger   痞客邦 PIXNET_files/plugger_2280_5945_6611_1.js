(function(window, undefined) {
    var _w = window;
    var _d = window.document;
    var _undefined = typeof (undefined);

    // if there is not a global Scupio object, create it 
    window.Scupio = window.Scupio || { alive: {}, response: {} };

    var _s = _w.Scupio;
    var ts4 = (new Date).getTime() + Math.floor(Math.random() * 14930352);

    // prepare all the parameters needed before asking for an ad
    var scriptId = "plugger_2280_5945_6611_1" + ts4;
    window.Scupio.alive = window.Scupio.alive || {};
    _s.alive[scriptId] = true;
   
    var iw = '160'; var ih = '600'; var pub = 'lRsAAwQ5QDI='; var cid = '6611'; var wid = '2280,17,18'; ;

    // detect protocol
    var http = 'http' + (_w.location.protocol.charAt(4) == 's' ? 's://' : '://');

    var jQQ; // keep a private jQuery for ourselves

    // 1. compatible with legacy code, write a div hook for us to grab on to
    var hook_string = "<div id=\"" + scriptId + "\" ";
    hook_string += "style='width:" + iw + "px;height:" + ih + "px;margin:0;padding:0;border:0;";
    hook_string += "position:relative;vertical-align:baseline;'></div>";
    window.document.write(hook_string);

    // 2. build browser detection object
    var browser = {
        init: function() {
            this.iFrame = this.detectIFrame();
            this.name = this.searchString(this.dataBrowser) ||
                "an unknown browser";
            this.version = this.searchVersion(navigator.userAgent) ||
                this.searchVersion(navigator.appVersion) ||
                "an unknown version";
            this.OS = this.searchString(this.dataOS) ||
                "an unknown OS";
            this.mobile = (/iPhone|iPod|iPad|Android|BlackBerry|Opera/)
                .test(navigator.userAgent);
        },
        detectIFrame: function() {
            return _w.self != _w.top;
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch ||
                    data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
            dataOS: [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone"
        }]
        };
        browser.init();

        // 3. script/stylesheet loader
        function jsmultiloader(url, callback) {
            var script_list = [];
            var total = 0;
            var _d = window.document;
            var l;

            if (typeof (url) === 'string') {
                script_list.push(url);
                total++;
            }
            else if (typeof (url) === 'object') {
                l = url.length;
                for (var i = 0; i < l; i++) {
                    script_list.push(url[i]);
                    total++;
                }
            }

            l = script_list.length;
            var script;
            for (var i = 0; i < l; i++) {
                script = '';
                if (script_list[i].split('.').pop() === "css") {
                    script = window.document.createElement("link");
                    script.type = "text/css";
                    script.rel = "stylesheet";
                    script.href = script_list[i];
                    total--;
                }
                else {
                    script = _d.createElement("script");
                    script.type = "text/javascript";
                    script.src = script_list[i];
                    if (script.readyState) { // IE
                        script.onreadystatechange = function() {
                            if (script.readyState == "loaded" || script.readyState == "complete") {
                                total--;
                                if (typeof (callback) === "function" && total <= 0) {
                                    script.onreadystatechange = null;
                                    callback();
                                }
                            }
                        };
                    }
                    else { // other browsers
                        script.onload = function() {
                            total--;
                            if (typeof (callback) === "function" && total <= 0) {
                                callback();
                            }
                        };
                    }
                }

                (_d.getElementsByTagName('head')[0] || _d.getElementsByTagName('body')[0])
                .appendChild(script);
            }
        };
        
        // 3. Change Protocal
        _s.protocallSwapper = _s.protocallSwapper || function (url, protocall) {
            // url, please use full url, example "http://www.scupio.com"
            // protacall, example "https://"
            // returns url, example "https://www.scupio.com"
            var url_temp = url;
        
            if(typeof(url_temp) === "string") {
                var url_head_short = url.substring(0, 7);
                var url_head_long = url.substring(0, 8);
            
                if((url_head_short === "http://")) {
                    url_temp = protocall + url_temp.substring(7);
                }
                else if((url_head_long === "https://")) {
                    url_temp = protocall + url_temp.substring(8);
                }
            }
        
            return url_temp;
        }
        
        // 4. VCE url builder
        function vce_url(c3, adid, wid, cid, w, h) {                                
          var temp = wid.split(',');
                            
          // append VCE
          var url = "<script src='http://b.voicefive.com/c2/11473066/rs.js#c1=3&amp;c3=" + c3 + 
                    "&amp;c4=" + adid + 
                    "&amp;c5=" + cid + 
                    "&amp;c6=&amp;c10=1&amp;c11=" + temp[0] + 
                    "&amp;c13=" + w + "x" + h + "&amp;c16=gen&amp;ax_i=&amp;ax_g=&amp;'></script>";
    
          return url;
        }

        function loadGeneralAdtype(ts4, iw, ih, cid, wid, pub) {
            var bws = 'm=1&s=0,4,158,598,999999,20,cccccc,3,5,9,2,10,4,0,-1,1,,CM,,,,-1,,8,1,1,0&fs=333333&shf=http://www.scupio.com&ssf=fsz:11pt,lh:23px,c:336666,txd:n&scf=fsz:10pt,lh:20px,c:000000,txd:n&suf=&sif=&pif=90,90,3&si=160,600,1;4;17;20';
            var ic = '#333333';

            var url = location.href;
            var uu = "";
            for (i = 0; i < url.length; i++) {
                var v = url.charCodeAt(i);
                if (v > 255) {
                    uu = encodeURIComponent(url);
                    break;
                }
            }

            var ref = document.referrer ? encodeURIComponent(document.referrer) : "";

            var parameter_string = '';
            parameter_string += '<iframe id="ad-scupio" FRAMEBORDER="0" SCROLLING="no" HEIGHT="' + ih;
            parameter_string += '" WIDTH="' + iw;
            parameter_string += '" MARGINHEIGHT="0" MARGINWIDTH="0" style="background-color:' + ic;
            parameter_string += '" src="' + http + 'adsense.scupio.com/ADPInline/ADViewer.aspx?' + bws;
            parameter_string += '&channelid=' + cid;
            parameter_string += '&wid=' + wid;
            parameter_string += '&PubID=' + pub;
            parameter_string += '&CA=' + ts4;
            parameter_string += '&u=' + uu;
            parameter_string += '&iframe=y';
            parameter_string += '&ref=' + ref;
            parameter_string += '"></iframe>';

            jQQ('#' + scriptId).append(parameter_string);
        }

        function buildModalPlayer(ts4, iw, ih) {
            // player parameters
            var 
            id = ts4,
            width = 560,
            height = 315,
            volume = 0.5,
            volume_on_by_default = true,
            auto_start = false,
            play_only_in_view_port = false;
            
            // build modal
            var modal_string = "";
            modal_string += "<div id=\"modal" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;display:none;\">";
            // mask
            modal_string += "  <div id=\"mask" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:fixed;top:0;left:0;width:100%;height:100%;background-color:#1c1c1c;filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity:0.5;opacity:0.5;z-index:10000;\"><\/div>";
            modal_string += "  <div id=\"container" + id + "\" style=\"margin-top:-195px;margin-bottom:0;margin-left:-475px;margin-right:0;padding:0;border:0;vertical-align:baseline;position:fixed;z-index:10001;top:50%;left:50%;width:950px;height:390px;background-color:black;\">";
            modal_string += "  <div id=\"toggle-button" + id + "\" style=\"margin:0;padding:0px;border:0;vertical-align:baseline;position:absolute;top:0px;right:0px;width:85px;height:20px;z-index:121;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;filter:alpha(opacity=100);-moz-opacity:1.0;-khtml-opacity:1.0;opacity:1.0;background:url('" + http + "adsense.scupio.com/adpinline/images/player-icon2.png') -142px -253px;\"><\/div>"

            // expandable
            if (_s.response[id].clickplayopen) {
                modal_string += "    <img id=\"click-area" + id + "\" src=\"" + _s.response[id].clickplayopen + "\" style=\"cursor:pointer;margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0px;left:0px;\" \/>";
                modal_string += "    <div id=\"scupio-player" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:45px;left:30px;z-index:10;\">";
                modal_string += "        <div id=\"player-hook" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                modal_string += "        <\/div>";
                modal_string += "    <\/div>";
                width = 560;
                height = 315;
            }
            else {
                modal_string += "    <div id=\"scupio-player" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                modal_string += "        <div id=\"player-hook" + id + "\" style=\"margin:0;padding:0;border:0;vertical-align:baseline;position:absolute;top:0;left:0;z-index:10;\">";
                modal_string += "        <\/div>";
                modal_string += "    <\/div>";
                width = 950;
                height = 390;
            }

            modal_string += "  <\/div>";
            modal_string += "<\/div>";

            jQQ("body").append(modal_string);

            // mm
            if (_s.response[id].mm && _s.response[id].mm.pc) {
              // append mm pixel code
              jQQ('body').append('<img style="display:inline-block;margin:0;padding:0;border:0;width:0;height:0;" src="' + _s.response[id].mm.pc + '"></img>');
            }

            var has_mouse = false;
            jQQ("#container" + id).hover(function(){
              has_mouse = true;
            }, function(){
              has_mouse = false;
            });

            var ad_is_valid = true;
            // prepare player parameters
            var parameters = {};

            // required parameters 
            parameters.id = id;
            parameters.hook = "player-hook" + id;

            parameters.$ = jQQ;

            parameters.attributes = {};
            if (browser.name === "Explorer") {
                parameters.attributes.preload = "none";
                ad_is_valid = false;
            }

            // player dimension
            parameters.style = {
                width: width,
                height: height
            };

            // video source
            if (_s.response[id].video) {
            var video_path = _s.response[id].video.substring(0, _s.response[id].video.length - 4);
            parameters.source = [{ type: "video/webm", src: video_path + ".webm" },
                                 { type: "video/mp4", src: video_path + ".mp4" },
                                 { type: "video/ogg", src: video_path + ".ogv" }];
            }
            else {
                ad_is_valid = false;
            }

            // browser information
            parameters.browser = {};
            if (browser.name) parameters.browser.name = browser.name;
            if (browser.iFrame) parameters.browser.in_iframe = browser.iFrame;
            if (browser.OS) {
                parameters.browser.os = browser.OS;
            }
            if (browser.mobile) {
                ad_is_valid = false;
            }

            parameters.behavior = {
                volume: volume,
                volume_on_by_default: volume_on_by_default,
                auto_start: auto_start,
                has_loader_gif: false,
                ttl: 14
            };

            // money event
            var trueViewEvent = false; // let view event reset this, since trueview only happens after a view
            parameters.event = {
                onView: function() {
                    // send view log
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=3&va=3&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=2&va=1&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    if( typeof(_s.response[id].vce) !== "undefined" &&
                        typeof(_s.response[id].vce.c3) !== "undefined" && 
                        typeof(_s.response[id].adid) !== "undefined") {
                            
                        // append VCE
                        jQQ("#player_wrapper_" + id).append(vce_url(_s.response[id].vce.c3, _s.response[id].adid, wid, cid, iw, ih));
                    }
                },
                on30s: function() {
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=6&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                },
                on25p: function (mouse) {
                  // mm
                  if (_s.response[id].mm) {
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=25&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    if (mouse || has_mouse) {
                      jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=25&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    }
                  }
                },
                on50p: function (mouse) {
                  // mm
                  if (_s.response[id].mm) {
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=50&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    if (mouse || has_mouse) {
                      jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=50&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    }
                  }
                },
                on75p: function (mouse) {
                  // mm
                  if (_s.response[id].mm) {
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=75&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    if (mouse || has_mouse) {
                      jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=75&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    }
                  }
                },
                onEnded: function(in_view, player_id, mouse) {
                    jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=2&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                    // mm
                    if (_s.response[id].mm) {
                        jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=9&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                        if (mouse || has_mouse) {
                          jsmultiloader(http + "adsense.scupio.com/adpinline/VideoClick.aspx?vl=4&va=10&t=100&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp);
                        }
                    }
                }
            };

            if (_s.response[id].fblink) {
                parameters.event.onFbClick = function() {
                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=5&ToURL=" + encodeURIComponent(_s.response[id].fblink) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                    window.open(redirentURI, '_blank');
                };
            }

            if (_s.response[id].link) {
                parameters.event.onAdClick = function() {
                    var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                    window.open(redirentURI, '_blank');
                };
            }
            
            jQQ("#click-area" + id).click(function () {
                var redirentURI = "http://money.scupio.com/adpinline/VideoClick.aspx?vl=4&va=4&ToURL=" + encodeURIComponent(_s.response[id].link) + "&u=" + encodeURIComponent(_w.location.href) + "&" + _s.response[id].cp;
                window.open(redirentURI, '_blank');
            });

            parameters.event.onDestroy = function() { };
            parameters.event.onError = function() { };

            if (ad_is_valid) {
                var barbar = _s._Player_.create(parameters);

                jQQ(document).keyup(function() {
                    jQQ("#modal" + id).hide();
                    if (typeof (barbar) !== "undefined") {
                        barbar.reset();
                        barbar.play = false;
                        barbar.pause = true;
                    }
                });

                jQQ("#mask" + id + ", #toggle-button" + id).click(function() {
                    jQQ("#modal" + id).hide();
                    if (typeof (barbar) !== "undefined") {
                        barbar.reset();
                        barbar.play = false;
                        barbar.pause = true;
                    }
                });

                jQQ("#mask" + scriptId).click(function() {
                    jQQ("#modal" + id).show();
                    try {
                        barbar.reset();
                        barbar.play = true;
                        barbar.pause = false;
                    }
                    catch (err) { }
                });

                jQQ("#" + scriptId).append("<div style=\"margin-top:-40px;margin-bottom:0;margin-left:-40px;margin-right:0;padding:0;border:0;position:absolute;vertical-align:baseline;top:50%;left:50%;bottom:50%;right:50%;width:79px;height:77px;background:url('" + http + "adsense.scupio.com/adpinline/images/player-icon2.png') -2px -5px;z-index:2;\"><\/div>");
            }
        }

        function loadModalPlayerAdtype(ts4, iw, ih, cid, wid, pub) {
            // player parameters
            var id = ts4;
            var adviewerArg = "&channelid=6611&wid=2280,17,26&PubID=lRsAAwQ5QDI=";
            var maskwidth = 0;

            var ref = document.referrer ? encodeURIComponent(document.referrer) : "";

            _s.response = _s.response || {};
            // setup response object
            _s.response[id] = null;
            var ad_assets_url = http + "adsense.scupio.com/ADPInline/ADViewer.aspx?sv=1," + iw +
            "," + ih + adviewerArg + "&u=" + encodeURIComponent(location.href) + "&ref=" + ref + "&oid=" + id;
            var src = http + "adsense.scupio.com/adpinline/js/";
            // load VideoJS
            jsmultiloader(
                [src + "video-js.min.css", src + "video.min.js", ad_assets_url],
                function() {
                    if (window.Scupio.response[id] == null) // viewer has no comment on playing video
                    {
                        loadGeneralAdtype(ts4, iw, ih, cid, wid, pub);
                    }
                    else {
                        jQQ("#" + scriptId).append(
                            "<div style=\"margin:0;padding:0;border:0;position:absolute;" +
                            "vertical-align:baseline;top:0;left:0;width:" + iw + "px;height:" + ih + "px;z-index:1;" +
                            "background-image: url('" + window.Scupio.response[id].adbanner + "');\">" + 
                            "</div>" // fix this http and https problem
                        );
                        
                        // append mask window.Scupio.response[id].maskwidth;
                        if (typeof(window.Scupio.response[id].maskwidth) === "number") {
                            maskwidth = window.Scupio.response[id].maskwidth;
                        }
                        
                        jQQ("#" + scriptId).append(
                            "<div id=\"mask" + scriptId + "\" style=\"margin:0;padding:0;border:0;position:absolute;" +
                            "vertical-align:baseline;" + 
                            "top:" + maskwidth + "px;" + 
                            "left:" + maskwidth + "px;" +
                            "right:" + maskwidth + "px;" + 
                            "bottom:" + maskwidth + "px;" + 
                            "z-index:99;\"></div>"
                        );
                        
                        // append comScore reach pixel code
                        jsmultiloader(http + "adsense.scupio.com/adpinline/js/comScore.js", function(){
                            if(typeof(wid) !== "undefined") {
                                var wid_temp = wid.split(',');
                                wid_temp[1] = jQQ.trim(wid_temp[1]); // second field is channel id
                                if(typeof(_s.comScore[wid_temp[1]]) !== "undefined") {
                                    jQQ("body").append(_s.comScore[wid_temp[1]]);
                                }
                            }
                        });
                        
                        jsmultiloader(src + "player2.js", function() {
                            var intervalId;
                            intervalId = setInterval(function() {
                                if (typeof (jQQ) !== _undefined &&
                                    typeof (VideoJS) !== _undefined &&
                                    _s.response[id] !== null &&
                                    typeof (window.Scupio._Player_) !== _undefined) {
                                    _w.clearInterval(intervalId);
                                    buildModalPlayer(ts4, iw, ih);
                                }
                            }, 200);
                        });
                    }
                }
            );
        }

        jsmultiloader(
        [http + "ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js?a=" + ts4,
         http + "adsense.scupio.com/adpinline/js/vp.js?a=" + ts4],
         function() {
            jQQ = jQuery.noConflict(true);
            
            if( (browser.name === "Explorer") ||
                (browser.name === "Opera") ||
                browser.mobile ||
                browser.iFrame ) {
                loadGeneralAdtype(ts4, iw, ih, cid, wid, pub);
            }
            else if ( typeof(_s.channelratio) !== "undefined" && 
                      typeof(_s.channelratio[cid]) !== "undefined" &&
                      (Math.random() > _s.channelratio[cid]) ) {
                loadGeneralAdtype(ts4, iw, ih, cid, wid, pub);
            }
            else if ( typeof(_s.adtyperatio) !== "undefined" && 
                      typeof(_s.adtyperatio['26']) !== "undefined" &&
                      (Math.random() > _s.adtyperatio['26']) ) {
                loadGeneralAdtype(ts4, iw, ih, cid, wid, pub);
            }
            else {
                loadModalPlayerAdtype(ts4, iw, ih, cid, wid, pub);
            }
        }
    );

})(window);
