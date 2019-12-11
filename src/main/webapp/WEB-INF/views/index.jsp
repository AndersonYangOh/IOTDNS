<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">


<title>My JSP 'index.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript"
	src="<%=request.getContextPath()%>/js/jquery.json-2.2.js" /></script>
<script>
	function search() {
		var data = new Object();
		data.dep = $("#dep").val();
		$.ajax({
			type : 'POST',
			url : './search',
			data : $.toJSON(data),
			dataType : "json",
			contentType : "text/plain;charset=UTF-8",
			success : function(resp) {
				var data = $.parseJSON(resp);
				$("#result").html("");
				for(var i=0;i<data.length;i++){
					$("#result").append(
							data[i].id + ":" + data[i].name + ":"
									+ data[i].dep + "<br>")
				}
				
					
				
			}
		});
	}
	
	function add(){
		var issuc= new Object();
		issuc.title = "1tes";
	}
	
	
	function setNum1(){
		$("#chooseString").val(1); 
	}
	function setNum2(){
		$("#chooseString").val(2); 
	}
	function setNum3(){
		$("#chooseString").val(3); 
	}
	function setNum4(){
		$("#chooseString").val(4); 
	}
	
	function search4() {
		var data = new Object();
		data.chooseString = $("#chooseString").val();
		data.valueString = $("#valueString").val();
		$.ajax({
			type : 'POST',
			url : './search4',
			data : $.toJSON(data),
			dataType : "json",
			contentType : "text/plain;charset=UTF-8",
			success : function(resp) {
				var chooseString =  $("#chooseString").val();
				var data = $.parseJSON(resp);
				$("#result").html("");
				if(chooseString=="1"){
					for(var i=0;i<data.length;i++){
						$("#result").append(
								data[i].industry + ":" + data[i].detailIndustry + ":"
										+ data[i].product + ":" + data[i].customerNum +
										":" + data[i].actualConnect +"<br>")
					}
				}
				
				if(chooseString=="2"){
					for(var i=0;i<data.length;i++){
						$("#result").append(
								data[i].customer + ":" + data[i].accountId + ":"
										+ data[i].industry + ":" + data[i].detail +
										":" + data[i].province+ data[i].city 
										+ ":" + data[i].product +":" + data[i].actualConnect+"<br>")
					}
				}
					
				if(chooseString=="3"){
					for(var i=0;i<data.length;i++){
						$("#result").append(
								data[i].province+ data[i].city  +":" + data[i].customerNum +
								":" + data[i].actualConnect +"<br>")
					}
				}
				
				if(chooseString=="4"){ 
						$("#result").append(
								data.imei + ":" + data.companyName + ":"
										+ data.modelName + ":" + data.product + ":"
										+ data.networkType + ":" + data.customer +":"
										+ data.industry +  
										":" + data.province+ data.city 
										+ ":"  + data.actualConnect+"<br>")
					 
				}
			}
		});
	}
</script>
</head>

<body>
	 
	
	
	<div>
		<input type="button" value="行业" onclick="setNum1()">
		<input type="button" value="企业" onclick="setNum2()">
		<input type="button" value="地域" onclick="setNum3()">
		<input type="button" value="设备" onclick="setNum4()">
		<input type="text" id="valueString" name="valueString" value="" /><br> 
		<input type="button" value="查询" onclick="search4()">
		<input type="hidden" value="" name="chooseString" id="chooseString">
	</div>
	
	
	<div id="result"></div>
</body>
</html>
