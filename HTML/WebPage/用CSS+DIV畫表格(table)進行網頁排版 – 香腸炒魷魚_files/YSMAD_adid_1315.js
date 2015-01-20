
 var ctxtid_A=new Array();
 ctxtid_A[0]="tw_syndication_weblisher_food_travel_leisure_01";
 ctxtid_A[1]="tw_syndication_weblisher_food_travel_leisure_02";
 ctxtid_A[2]="tw_weblisher_mobile";
 ctxtid_A[3]="tw_weblisher_interest";
 var cho=Math.round(Math.random()*(ctxtid_A.length-1)) ;
 var param_ctxtID = ctxtid_A[cho];
 var param_partner_cm = "tw_syndication_weblisher_sofree_cm";
 var param_partner_pm = "tw_syndication_weblisher_sofree_pm";
 
 
 
 var param_outputCharEnc = "utf8";
 var cm2multikw = [];
 var domaincheck=new Array();
 
                      domaincheck[0] = "sofree.cc";
 var param_maxCount="4";
 var param_type="";
 if(((Date.parse("6/28/2013")).valueOf() <= (new Date()).valueOf()) && ((Date.parse("12/31/2015 23:59:59")).valueOf() >= (new Date()).valueOf())){

          
         
         
         var VIH_HostIP; 
         var affilData;
         function loadContent(file){
				     var scriptTag = document.getElementById('loadScript');
				     var head = document.getElementsByTagName('head').item(0)
				     script = document.createElement('script');
				     script.src = file;
				     script.setAttribute('charset',param_outputCharEnc);
					   script.type = 'text/javascript';
					   script.async = true;
					   script.id = 'loadScript';
					   head.appendChild(script)
				 }
         function  GetResults(kw,type){
             var q_url  = "";
             zSr = null;
             
             var serveurl=encodeURIComponent("http://"+document.location.hostname + document.location.pathname);
	           if (type == "pm")	{
	               var pm_adult_set="";
	               if (param_partner_pm.indexOf('adult') > -1){
			               pm_adult_set = '&adultFilter=adult';
		             }
		             if(kw.indexOf("|")> -1){
		                 var kwA=kw.split("|");
		                 if(ckw==100){
		                 	   ckw=kwA.length-1;
		                     thekw=kwA[ckw];
		                 }else if(ckw<0){
		                     thekw="";
		                 }else{
		                     ckw--;
		                     thekw=kwA[ckw];
		                 }
		                 //if(thekw=="" && ckw>0){
		                 //    ckw--;
		                 //    thekw=kwA[ckw];
		                 //}
		             }else{
		                 thekw=kw;
		             }
		             if((thekw!="") && (thekw !=undefined)){
		                 q_url='https://xml-apac-ss.ysm.yahoo.com/d/search/p/yahoo/js/flat/tw/kk/?mkt=tw&Partner='+ param_partner_pm + '&type=' + param_type + '&outputCharEnc=' + param_outputCharEnc + '&maxCount=' + param_maxCount + '&Keywords='+  encodeURIComponent(thekw) + pm_adult_set + '&serveUrl=' + serveurl + '&affilData='+affilData+'&accountFilters=weblisher_block&urlFilters=weblisher_url&rnd=' + Math.random() + Date.parse(new Date());
		                 loadContent(q_url);
		                 loaded_article("pm");
		             }else{
		                 GetResults("","cm");
		             }
	           }else if(type == "cm"){
	               q_url= 'https://tw-cm.ysm.yahoo.com/js_flat_1_0/?config=24278793021&source='+ param_partner_cm + '&type=' + param_type + '&mkt=tw&outputCharEnc='+param_outputCharEnc+'&maxCount='+ param_maxCount +'&cb=' + Number(new Date) + '&ctxtId=' + param_ctxtID +'&ctxtUrl=' + encodeURIComponent(document.location.href);
 	               loadContent(q_url);
		             loaded_article("cm");
		         }
	           
         }
         
         function loaded_article(type){

             if(type == "pm"){
			         if (zSr == null){
				         window.setTimeout("loaded_article('pm')",50);
			         }else{
				         if (zSr.length > 6){
					         PutListings("pm");
					
					         
  	         if(browserflag==0){
  	             
            if(document.getElementById("ysmAD1315_1")){
							  document.getElementById("ysmAD1315_1").innerHTML=ysm_html_1;
							  
					  }
            if(document.getElementById("ysmAD1315_2")){
							  document.getElementById("ysmAD1315_2").innerHTML=ysm_html_2;
							  
					  }          
                 }
					
				         }else{
                     GetResults("","cm");
				         }
			         }
		         }

		         if(type == "cm"){
			         if (zSr == null){
				         window.setTimeout("loaded_article('cm')",50);
			         }else{
				         if (zSr.length > 6){
					         PutListings("cm");

					         
  	         if(browserflag==0){
  	             
            if(document.getElementById("ysmAD1315_1")){
							  document.getElementById("ysmAD1315_1").innerHTML=ysm_html_1;
							  
					  }
            if(document.getElementById("ysmAD1315_2")){
							  document.getElementById("ysmAD1315_2").innerHTML=ysm_html_2;
							  
					  }          
                 }
					         
				         }
			         }
		         }
		         
		         
				    
         }
         
            //hotkey
             var ysm_keyword="";
			       ovtw = null;
					   function writeKeywords(){
				         param_type  = param_type + ",park"; 
				         var  cm2multikw  = [];
				         ysm_keyword = "<span id=ysm_hotword_title>熱門關鍵字：</span>";
					       for(var a=0;a<ovtw[0].ads.length;a++){
							       ysm_keyword += "<span id=ysm_keywordss><a href=\"" + encodeURIComponent(ovtw[0].ads[a].title)+"&type="+ param_type + "\">" + ovtw[0].ads[a].title + "</a></span>&nbsp;&nbsp;";
							       cm2multikw.push(ovtw[0].ads[a].title + ",");
						     }
						     
						     if(browserflag==0){
						         
						     }
						     
			       }
			          
					   function loaded_article2() {	
						     if (ovtw == null){
							       window.setTimeout("loaded_article2()",50);
						     }else{
							       writeKeywords();
						     }
					   }
					   //hotkey
			   
		     var html_1="";
        var html_2="";
        var ysm_html_1 = "";
                     var ysm_html_2 = "";
                     
		     
		     var browserflag=1;
               
			   function  PutListings(type)  {
				    if (zSr.length > 6){

					      var i=6;
					      var j=0;
					      var p=0;
					      var html2="";
					      var descr_A=new Array();
					      var unused1_A=new Array();
					      var clickURL_A=new Array();
					      var title_A=new Array();
					      var sitehost_A=new Array();
					      var unused2_A=new Array();

					      //Listing
					      while  (i  <  zSr.length)  {
                    descr_A[j]=zSr[i++];	//  listing  description 
                    unused1_A[j]=zSr[i++];	//  (ignore)
                    clickURL_A[j]=zSr[i++];	//  listing  link 
                    title_A[j] = zSr[i++];	//  listing  title
                    sitehost_A[j] = zSr[i++];	//  advertisers  domain  name 
                    unused2_A[j]=zSr[i++];	//  (ignore)	
                    if (type=="pm" && param_partner_pm.indexOf('adult') == -1){
                        var rExp = eval('/' + decodeURIComponent(thekw) + '/gi');
                        title_A[j] = title_A[j].replace(rExp,'<span class=\'kyy2\'>' + decodeURIComponent(thekw) + '</span>');
				             descr_A[j] = descr_A[j].replace(rExp,'<span class=\'kyy2\'>' + decodeURIComponent(thekw) + '</span>');
			              }
			              
			              
                    j++;
                }    
                var x=0;
                var sss=0;
                if(j>=4){
                	 sss=4;
                }else{
                    
                   sss=j;

                }
                var s2=0;
                for(var s=0;s<4;s++)   {
                    if(s>=sss){
                     	    break;
                     }
                    var clickURL=clickURL_A[x];
                    var title=title_A[x];
                    var descr=descr_A[x];
                    var sitehost=sitehost_A[x];
                    
                    
                     
                    
                     if(s<2){
            
                     s2++;
                     
                     if(sss>=s2 ){
		                     html_1=html_1 + '<li onclick="window.open(\'' + clickURL + '\')" style="cursor:pointer;">'+'<div>'+'<h3>'+title+'</h3><cite>'+sitehost+'</cite>'+'<p class="descr">'+descr+'</p>'+'</div>'+'</li>';
		                     x++;
		                 }
		                 
		                 if(s2>=sss){
                        s2=0;
                     }
		             }
        
                     else if(s<4){
            
                     s2++;
                     
                     if(sss>=s2 ){
		                     html_2=html_2 + '<li><a href="' + clickURL + '" target="_blank"><h3>' + title + '</h3>' +
      '<div class="descr">' + descr + '</div>' +
      '<cite>' + sitehost + '</cite></a></li>';
		                     x++;
		                 }
		                 
		                 if(s2>=sss){
                        s2=0;
                     }
		             }
        

                }		                                     
			      }
			            
                  var showflag_html='贊助網站';
                  if(html_1!=""){
                      ysm_html_1 = "";
		                  ysm_html_1 = ysm_html_1 + '<div id="ysm_hybrid_s03" class="cont" >'+'<span class=ysmlabel>' + showflag_html +'</span>'+'<div id="ysm_listing_s03"><ul>' +  html_1 + '</ul></div>'+'</div>';
								  }else {

								  }
        
                  var showflag_html='贊助網站';
                  if(html_2!=""){
                      ysm_html_2 = "";
		                  ysm_html_2 = ysm_html_2 + '<div id="ysm_hybrid_s08" class="cont" >' +

	  '<div class="rclt"></div><div class="rcrt"></div>' +
    '<div id="ysm_listing_s08"><ul>' + html_2 + '</ul><div class="ysmlabel2">' + showflag_html + '</div></div>' +
    '<div class="rclb"></div><div class="rcrb"></div>' +
    '</div>';
								  }else {

								  }
        
			            
                  
                 if(browserflag==1){
                 
            if(document.getElementById("ysmAD1315_1")){
							  document.getElementById("ysmAD1315_1").innerHTML=ysm_html_1;
							  
					  }
            if(document.getElementById("ysmAD1315_2")){
							  document.getElementById("ysmAD1315_2").innerHTML=ysm_html_2;
							  
					  }          }
                  
                  
						
			   }

    
			   
		function getClientIP(){
       if (VIH_HostIP == null){
		       window.setTimeout("getClientIP()",50);
		   }else{
			   
					var CurrentDomain = window.location.host;
					var rCurrentDomain="";
					
					CurrentDomain= CurrentDomain.split(".");
					for (var i=1; i<CurrentDomain.length; i++) {
					   if(CurrentDomain[i]!=undefined){
				          if(i==1){
				              rCurrentDomain=CurrentDomain[i];
				          }else{
				              rCurrentDomain=rCurrentDomain + "." + CurrentDomain[i];
				          }
				      }
				  }
				  
				  var domaincheck_flag=0;
				  
					for(var xx=0;xx<domaincheck.length;xx++){
				  	  
					    if(domaincheck[xx]==window.location.host){
						      domaincheck_flag=1;
				      }else{
				          if(rCurrentDomain==domaincheck[xx]){
				          	  domaincheck_flag=1;
				          }
				      }
				  }
				  
				  if(domaincheck_flag==1){ 
						if ((param_partner_pm !="") && (typeof(param_Keywords) != 'undefined' && param_Keywords != "")){
	              GetResults(decodeURIComponent(param_Keywords),"pm")
            }else{
		            GetResults("","cm");
            }
				  
				  }
          
		   }
    }
    
    
			   
    var getipURL="http://ysm.hauchi.com.tw/visitorIP.js.php";loadContent(getipURL);
         getClientIP();     
 }
