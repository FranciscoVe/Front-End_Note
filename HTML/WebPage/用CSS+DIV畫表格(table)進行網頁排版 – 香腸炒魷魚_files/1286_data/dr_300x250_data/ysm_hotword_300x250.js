;
(function (j) {
	/** v:20141111 11:17 */
	var q = false;

	if (typeof (j.YAHOO) == "undefined") {
		j.YAHOO = {};
	}
	if (typeof (j.YAHOO.YSM) == "undefined") {
		j.YAHOO.YSM = {};
	}

	var i = function (n) {
		if (q) {
			console.log(n);
		}
	};

	var k = function (C, E) {
		var D = document.getElementById(E);
		var B = document.getElementsByTagName("head").item(0);
		var n = document.createElement("script");
		n.src = C;
		n.setAttribute("charset", "utf-8");
		n.type = "text/javascript";
		n.id = E;
		B.appendChild(n);
	};

	var yimgurl = 'https://s.yimg.com/bf/fp/';
	var linkspurl = 'https://tw.linkspot.search.yahoo.com/sales/ysmlist.php?';
	var sourcetag='tw_syndication_weblisher_rm_backfill_park';

	var b = new Date();
	var x = 0;
	var z = b.getFullYear().toString() + (b.getMonth() + 1).toString() + b.getDate().toString() + '12';
	var p = [[sourcetag,'education', '教育學習', '去哪遊學好?','遊學','美國遊學不貴','美國遊學, 遊學','英國留學不貴?','英國留學, 留學','澳洲遊學超推!','澳洲遊學, 遊學','留學代辦哪家好?','留學, 留學代辦','遊學代辦哪家好?','遊學, 遊學代辦','快速背英文單字','英文','去哪留學好?','留學, 留學代辦'], [sourcetag, 'cpghb' , '健康美容', '超強美白術','美白','減肥不二法門','減肥','減肥必勝法','減肥','超強瘦身術','瘦身','神奇快速瘦身法','瘦身','近視雷射, 眼鏡掰掰','近視, 近視雷射','淨膚雷射, 毛孔掰掰','淨膚','神奇防曬美白法','防曬, 美白']];

	var e = function () {
		//		k("https://s.yimg.com/bf/tw/ysm/hp/cfg.js?v=" + z, "linkscfg");
		//k("http://ysm.hauchi.com.tw/h/partner_bananaidol.js?v=" + z, "linkscfg");
		k("https://ysm.hauchi.com.tw/DR/YSMAD/partner_weblisher.js?v=" + z, "linkscfg");
		var n = setInterval(function () {
			if (x < 10 && typeof (YAHOO.YSM.linksp) == "undefined") {
				i("load params retry: " + x);
				x++;
			} else {
				j.clearInterval(n);
				if (typeof (YAHOO.YSM.linksp) == "undefined") {
					YAHOO.YSM.linksp = p;
					YAHOO.YSM.left = 'education';
					YAHOO.YSM.right = 'finance';
					YAHOO.YSM.soeasy = [{
						title: '餐飲美食',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/food.html',
     }, {
						title: '旅遊住宿',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/travel.html',
     }, {
						title: '居家裝潢',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/house_deco.html',
     }, {
						title: '專業製造',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/professional.html',
     }, {
						title: '百貨購物',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/shopping.html',
     }, {
						title: '搬家清潔',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/moving_cleaning.html',
     }, {
						title: '婚姻交友',
						url: 'https://tw.ysm.emarketing.yahoo.com/soeasy/marriage_dating.html',
     }];
				}
				if (typeof (YAHOO.YSM.header) == "undefined") {
					YAHOO.YSM.header = {
						'left': ['市場快訊', 'https://tw.emarketing.yahoo.com/hotword/soeasy2014/index.html'],
						'right': ['搜便利找商家', 'https://tw.rd.yahoo.com/referurl/hp/1024/ysm/evt=51199/*http://tw.ysm.emarketing.yahoo.com/soeasy/index.php']
					};
				}
				c();
			}
		}, 50);
	};
	e();

	var c = function () {
		i(YAHOO.YSM.linksp);
		i(YAHOO.YSM.left);
		i(YAHOO.YSM.right);
		i(tt);
		i(tt);

		var n = '';

		n += '<div style="width:300px;height:250px;">';
		n += '	<div class="hd clearfix">';
		n += '		<span class="title"">強勢主打</span>';
		n += '	</div>';



		n += '	<div class="bd clearfix">';
    
    var twysm_count=2;
    
		for (var l = 0; l < twysm_count; l++) {
			var st = YAHOO.YSM.linksp[l].shift();  //sourcetag
			var pp = YAHOO.YSM.linksp[l].shift();  //圖檔
			var tt = YAHOO.YSM.linksp[l].shift();  //產業標題
			
			
			vl = linkspurl + 'Partner=' + st + '&Keywords=' + encodeURIComponent(tt);

			/** ad module block start */
			n += '		<div class="ysmBlock">';
			n += '			<div class="ysmImg">' + '<a href="' + vl + '" target="_blank"><img src="' + yimgurl + pp + '.png" ></a></div>';
			//n += '			<h2>';
			//n += '				<a style="color:#059;" href="' + vl + '" target="_blank">' + tt + '</a></h2>';

			/** link block */
			n += '<div class="ysmLink">';
			n += '	<ul>';
			var v;
      var ss;
      var nn,s1,s2;
      
      nn=YAHOO.YSM.linksp[l].length / 2;
      
      s1=Math.floor(Math.random()*nn);
      s2=Math.floor(Math.random()*nn);
      while(s1 == s2){
          s2=Math.floor(Math.random()*nn);
      }
      
	    v = YAHOO.YSM.linksp[l][s1*2];
			ss = YAHOO.YSM.linksp[l][s1*2+1];
			n += '<li><a href="' + linkspurl + 'Partner=' + st + '&Keywords=' + encodeURIComponent(ss) + '&v=' + z + '" target="_blank">' + v + '</a></li>';
			
			v = YAHOO.YSM.linksp[l][s2*2];
			ss = YAHOO.YSM.linksp[l][s2*2+1];
			n += '<li><a href="' + linkspurl + 'Partner=' + st + '&Keywords=' + encodeURIComponent(ss) + '&v=' + z + '" target="_blank">' + v + '</a></li>';

			n += '</ul></div>';
			/** Link block end */
			n += '</div>';
			/** ad module block end*/
		}
		n += '	</div>';

		n += '</div>';
		document.getElementById("ysm_hotword_300250").innerHTML = n;
	};
})(window);