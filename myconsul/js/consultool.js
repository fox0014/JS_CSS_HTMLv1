function consul_get(url,myid,asynctf){
	var xmlhttp;
	var myresult;
	if (window.XMLHttpRequest)
	{
		//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
		xmlhttp=new XMLHttpRequest();
	}
	else
	{
		// IE6, IE5 浏览器执行代码
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			myresult = xmlhttp.responseText;
//		document.getElementById(myid).innerHTML = myresult;
		}
	}
	xmlhttp.open("GET",url,Boolean(asynctf));
	xmlhttp.send();
	return(myresult);
}

 function myrequest(uri, callback) {
    $.ajax({
      url: uri,
      method: 'get',
      success: function (data) {
        callback(null, data)
      },
      error: function (xhr, textStatus, errorThrown) {
        callback(errorThrown)
      }
    })
  }
  

function appendTextasynctf()
{

	$("#table_data").empty();
	urlitem = JSON.parse(consul_get('http://10.68.60.59:8500/v1/catalog/services',"demo",false));

	for(var key in urlitem){
		var localurl = "http://10.68.60.59:8500/v1/catalog/service/"+key;
		myrequest(localurl, function (err, data) {
			if (err) {
			  // handle error
			  return
			}
			// handle after request logic
	//		console.log(data)
			xiongxiong1 = data
			len = data.length
			for (var i=0;i<len;i++){		
				var $trTemp = $("<tr></tr>");
				//往行里面追加 td单元格
				$trTemp.append("<td>"+ xiongxiong1[i].ID +"</td>");
				$trTemp.append("<td>"+ xiongxiong1[i].Node +"</td>");
				$trTemp.append("<td>"+ xiongxiong1[i].Address +"</td>");
				$trTemp.append("<td>"+ xiongxiong1[i].ServicePort +"</td>");
				$trTemp.append("<td><a>"+ xiongxiong1[i].ServiceName +"</a></td>");
				$trTemp.appendTo("#table_data");
			}	
		
//		xiongxiong = consul_get(localurl,"demo",false);
//		xiongxiong1 = JSON.parse(xiongxiong);
	})	
}
}



function appendText()
{
	
	$("#table_data").empty();	
	urlitem = JSON.parse(consul_get('http://10.68.60.59:8500/v1/catalog/services',"demo",false));
	for(var key in urlitem){
		var localurl = "http://10.68.60.59:8500/v1/catalog/service/"+key
		xiongxiong = consul_get(localurl,"demo",false);
		xiongxiong1 = JSON.parse(xiongxiong);
		len =xiongxiong1.length;
		for (var i=0;i<len;i++)
		{
						var $trTemp = $("<tr></tr>");
						//往行里面追加 td单元格
						$trTemp.append("<td>"+ xiongxiong1[i].ID +"</td>");
						$trTemp.append("<td>"+ xiongxiong1[i].Node +"</td>");
						$trTemp.append("<td>"+ xiongxiong1[i].Address +"</td>");
						$trTemp.append("<td>"+ xiongxiong1[i].ServicePort +"</td>");
						$trTemp.append("<td><a>"+ xiongxiong1[i].ServiceName +"</a></td>");
						$trTemp.appendTo("#table_data");
		//var txt1="<p>Text.</p>";              // 以 HTML 创建新元素
		//var txt2=$("<p></p>").text(xiongxiong1[i]['ServiceName']);  // 以 jQuery 创建新元素
		//$("body").append(txt2);        // 追加新元素
	}	
}
}

	