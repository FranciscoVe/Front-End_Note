var Cont2 = Cont+1;
var isFirstLogin = 0;
var uid = "";
$(document).ready(function (){
    $("#SCont").html(Cont);    
    /*
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            var bir,sex,email,pic,uid;
            uid = response.authResponse.userID
            FB.api('/me', function(response) {
		        email = response.email;
		        var query = FB.Data.query('select birthday_date,uid,pic_with_logo,sex from user where uid={0}',uid);
                query.wait(function(rows) {
                    bir = rows[0].birthday_date;
                    if(rows[0].sex == "male" || rows[0].sex == "男性" || rows[0].sex == "1"){
                        sex = "1";
                    }else{
                        sex = "0";
                    }
                    pic = rows[0].pic_with_logo;
                    
                    $.ajax({
		                type:"POST",
		                url:"SS.aspx",
		                data:"Bir="+ encodeURIComponent(bir) +"&Email="+ encodeURIComponent(email) +"&pic="+ encodeURIComponent(pic) + "&sid="+ encodeURIComponent(sex) + "&uid="+uid,
		                dataType:"html",
		                success:function(data){
                        },
		                anync:false
	                });
                });        
            });           
        }
    });
    */

});
function dologin(){
    FB.getLoginStatus(function(response) {
        if (response.authResponse) {
            uid = response.authResponse.userID;
            doStore();
        } else {
            isFirstLogin = 1;
            FB.login(handleSessionResponse, {scope:'email,read_stream,publish_stream,user_birthday,offline_access'});
        };
    });
};

function handleSessionResponse(response) {

    if (!response.authResponse) {
        return;
    }else{
    	uid = response.authResponse.userID;
    };
    doStore();

};
function doStore(){
    $("#SCont").hide().html(Cont2).show(300);
    $.ajax({
        type:"POST",
        url:"/AdTag/ShowStore.aspx",
        data:"ID="+ ID +"&uid="+ uid +"&Btn=1",
        dataType:"html",
        success:function(data){
            var aa = data.split("%%%");
            if(aa[0] == "1" || aa[0] == "2"){
                
                if(aa[0] == "1"){
                    
                    
                    FB.ui({ 
				        method: 'stream.publish', 
				        display: 'popup', 
				        auto_publish:'true',
				        message: '我收藏了一個廣告! - '+aa[1] + '-#廣告讚!', 
				        attachment: { 
				            name: aa[1],
				            href: 'http://www.blogad.com.tw/Transfer/TranLike.aspx?ID='+ID+'&M=Store', 
				            caption: aa[2], 
				            
				            action_links: [{ text: '廣告讚!', href: 'https://www.facebook.com/BlogAD.Fans/app_208195102528120'}],
				            media: [{ "type": "image", "src": aa[3], "href": "http://www.blogad.com.tw/Transfer/TranLike.aspx?ID="+ID+"&M=Store"}] 
				        }
				    });
				    /*
				    var my_post = {'message':'我收藏了一個廣告! - '+aa[1] + '-#廣告讚!',
                        'name':aa[1],
                        'href': 'http://www.blogad.com.tw/Transfer/TranLike.aspx?ID='+ID+'&M=Store', 
                        'caption': aa[2],
                        'picture': aa[3],
                        'link': 'http://www.blogad.com.tw/Transfer/TranLike.aspx?ID='+ID+'&M=Store',
                        'source': aa[3]
                    
                    };
                    
                    FB.api('/' + uid + '/feed', 'post', my_post,
                       function(response) {
                           if (!response || response.error) {
                                 //document.getElementById("feedback").innerHTML = "Sorry, something went wrong";
                           } else {
			                    //alert(response.id);
                                 //document.getElementById("feedback").innerHTML = "sent !";
                           }
                       }
                    );  */
				    /*
                    var publish = {
                        method: 'stream.publish',
                        message: '我收藏了一個廣告! - '+aa[1],
                        attachment: {
                            name: aa[1],
                            caption: aa[2],
                            media: [
                            {
                                type: 'image',
		       		            href: 'http://www.blogad.com.tw/Transfer/TranLike.aspx?ID='+ID+'&M=Store',
		       		            src: aa[3]
                            }],
                            href: 'http://www.blogad.com.tw/Transfer/TranLike.aspx?ID='+ID+'&M=Store'
                        },
                        action_links: [
                            { text: '我要收藏廣告', href: 'http://apps.facebook.com/myadmarket/' }
                        ],
                        auto_publish:'true',
                        user_prompt_message: ''
                    };
                    
                    FB.api(
                        publish,
                        function(response) {
                            if (response && response.post_id) {
                                
                            } else {
                                
                            }   
                        }
                    );
                    */
	                
                };

                if(isFirstLogin == 1){ 
                    if(confirm("收藏廣告成功，您現在要瀏覽收藏的所有廣告嗎?")){
                        window.top.location = "http://apps.facebook.com/myadmarket/";
                    };
                };
            }else{
                $("#SCont").hide().html(Cont).show(300);
            };
            
        },
        anync:false
    });
}