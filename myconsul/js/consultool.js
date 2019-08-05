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