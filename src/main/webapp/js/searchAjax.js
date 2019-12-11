//查询 

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
	
	/**
	 * 加载新闻下拉检索框
	 * @param domeId
	 * 			下拉框ID
	 * @param id
	 * 			初省下拉框VALUE
	 * @param name
	 * 			初省下拉框TEXT			
	 * @returns
	 */
	function loadCustomSelect2(domeId, id, name) {  
		var params = {};
		if (id == null || name == null) {
			params["id"] = 0;
			params["name"] = "";
		} else {
			params["id"] = id;
			params["name"] = name;
		}
		$('#' + domeId).select2({    

			data : [params], //初始值
			ajax: {    
                url : "search/keywordName",    
                dataType : 'json',    
                delay : 250,    
                data : function (params) {    
                    return {    
                    	keyword : params.term // 函数的参数    
                        //page: params.page  //分页显示先不要，没有效果    
                    };    
                },    
                processResults : function (data, params) {    
                    //params.page = params.page || 1; 
                	//alert(data.items)
                	//alert(params.term)
                    return {    
                        results : data.items
                        //pagination: {    
                        //    more: (params.page * 10) < data.total_count    
                        //}    
                    };    
                },    
                cache : true     
            },
	        escapeMarkup : function (markup) { return markup; }, // let our custom formatter work    
	        minimumInputLength: 1, //至少输入n个字符，才去加载数据
	        maximumInputLength:100, //限制最大输入字符
	        templateResult: formatRepo,    
	        templateSelection: formatRepo  
        });
	}
	function loadImeiSelect2(domeId, id, name) {  
		var params = {};
		if (id == null || name == null) {
			params["id"] = 0;
			params["name"] = "";
		} else {
			params["id"] = id;
			params["name"] = name;
		}
		$('#' + domeId).select2({    

			data : [params], //初始值
			ajax: {    
                url : "search/keywordImei",    
                dataType : 'json',    
                delay : 250,    
                data : function (params) {    
                    return {    
                    	keyword : params.term // 函数的参数    
                        //page: params.page  //分页显示先不要，没有效果    
                    };    
                },    
                processResults : function (data, params) {    
                    //params.page = params.page || 1; 
                	//alert(data.items)
                	//alert(params.term)
                    return {    
                        results : data.items
                        //pagination: {    
                        //    more: (params.page * 10) < data.total_count    
                        //}    
                    };    
                },    
                cache : true     
            },
	        escapeMarkup : function (markup) { return markup; }, // let our custom formatter work    
	        minimumInputLength: 1, //至少输入n个字符，才去加载数据
	        maximumInputLength:100, //限制最大输入字符
	        templateResult: formatRepo,    
	        templateSelection: formatRepo  
        });
	}
	function formatRepo(repo) {    
        if (repo.loading) return repo.text;    
        var markup = "<div>" + repo.name + "</div>";    
        return markup;    
    }
$(document).ready(function() {	
	

	loadCustomSelect2("search_box", null, null);
	loadImeiSelect2("search_box2", null, null);
	
	$("#search_button").click(function(){ 
		var data = new Object();
		data.chooseString = $("#chooseString").val();
		if(data.chooseString=="1"){
			data.valueString = $('#drop_hy option:selected') .val();
		}
		if(data.chooseString=="2"){data.valueString = $("#search_box").val();}
		if(data.chooseString=="3"){
			data.valueString = $('#drop_dy option:selected') .val();
		}
		if(data.chooseString=="4"){data.valueString = $("#search_box2").val();} 
		$.ajax({
			type : 'POST',
			url : 'search/search4',
			data : $.toJSON(data),
			dataType : "json",
			contentType : "text/plain;charset=UTF-8",
			success : function(resp) {

				$("#fix_center,#mask").removeClass("box_hidden");
				var chooseString =  $("#chooseString").val();
				var data = $.parseJSON(resp);
				$("#tablecontent").html("");
				$("#res_list").html("");
				if(chooseString=="1"){
					var string ="";
					for(var i=0;i<data.length;i++){
						string +="<tr><td>"+
								data[i].industry + "</td><td>" + data[i].detailIndustry + "</td><td>"
										+ data[i].product + "</td><td>" + data[i].customerNum +
										"</td><td>" + data[i].actualConnect +"</td></tr>";
					}
					$("#tablecontent").append("<tr><th>行业类型</th>" +
							"<th>细分行业</th><th>产品名称</th>" +
							"<th>注册企业数</th><th>注册设备数</th>" +
							"</th></tr>");
					$("#tablecontent").append(string);  
				}
				
				if(chooseString=="2"){
					var string ="";
					var stringproduct ="";
					
						if(data.length>1){
							if (typeof(data[0].product) != "undefined"){
								stringproduct = data[0].product;
							}
							for(var i=0;i<data.length;i++){
								stringproduct += data[i].product +"、";
								
							}

							var industry ="-";
							if (typeof(data[0].industry) != "undefined"){
								industry = data[0].industry;
							} 
							
							var detail ="-";
							if (typeof(data[0].detail) != "undefined"){
								detail = data[0].detail;
							}
							stringproduct = stringproduct.substr(0, stringproduct.length - 1); 
							string +="<li><div class=\"rlist_title\">企业名称：</div><div class=\"rlist_value\">"+
							data[0].customer + "</div></li>" + 
							"<li><div class=\"rlist_title\">企业编码：</div><div class=\"rlist_value\">"+
							data[0].accountId + "</div></li>"
									+ 
									"<li><div class=\"rlist_title\">行业类型：</div><div class=\"rlist_value\">"+
									industry + "</div></li>" + 
									"<li><div class=\"rlist_title\">细分行业：</div><div class=\"rlist_value\">"+
									detail +
									"</div></li>" + 
									"<li><div class=\"rlist_title\">注册地：</div><div class=\"rlist_value\">"+
									data[0].province+ data[0].city 
									+ "</div></li>" + 
									"<li><div class=\"rlist_title\">重点产品：</div><div class=\"rlist_value\">"+
									stringproduct +"</div></li>"
									+ 
									"<li><div class=\"rlist_title\">注册设备数：</div><div class=\"rlist_value\">"+
									data[0].actualConnect+"</div></li>";
						}
						else{
							var industry ="-";
							if (typeof(data[0].industry) != "undefined"){
								industry = data[0].industry;
							}
							var product ="-";
							if (typeof(data[0].product) != "undefined"){
								product = data[0].product;
							}
							var detail ="-";
							if (typeof(data[0].detail) != "undefined"){
								detail = data[0].detail;
							}
							string +="<li><div class=\"rlist_title\">企业名称：</div><div class=\"rlist_value\">"+
							data[0].customer + "</div></li>" + 
							"<li><div class=\"rlist_title\">企业编码：</div><div class=\"rlist_value\">"+
							data[0].accountId + "</div></li>"
									+ 
									"<li><div class=\"rlist_title\">行业类型：</div><div class=\"rlist_value\">"+
									industry + "</div></li>" + 
									"<li><div class=\"rlist_title\">细分行业：</div><div class=\"rlist_value\">"+
									detail +
									"</div></li>" + 
									"<li><div class=\"rlist_title\">注册地：</div><div class=\"rlist_value\">"+
									data[0].province+ data[0].city 
									+ "</div></li>" + 
									"<li><div class=\"rlist_title\">重点产品：</div><div class=\"rlist_value\">"+
									product +"</div></li>"
									+ 
									"<li><div class=\"rlist_title\">注册设备数：</div><div class=\"rlist_value\">"+
									data[0].actualConnect+"</div></li>";
						}
						 
					$("#res_list").append(string);  
				}
					
				if(chooseString=="3"){
					var string ="";
					var provinceTatol =0;
					var provinceTatol2 =0;
					for(var i=0;i<data.length;i++){
						string +="<tr><td>"+
								data[i].province+"</td><td>"+ data[i].city  +"</td><td>" + data[i].customerNum +
								"</td><td>" + data[i].actualConnect +"</td></tr>";
						provinceTatol +=data[i].customerNum;
						provinceTatol2 += data[i].actualConnect;
					}
					$("#tablecontent").append("<tr><th>省份</th><th>城市</th>" +
							"<th>注册企业数</th><th>注册设备数</th>" +
							"</th></tr>");
					$("#tablecontent").append("<tr><td>"+data[0].province+"</td><td>"+"</td>" +
							"<td>"+provinceTatol+"</td><td>"+provinceTatol2+"</td>" +
							"</th></tr>");
					$("#tablecontent").append(string);  
				}
				
				if(chooseString=="4"){  
					var string ="";
					var companyName ="-";
					if (typeof(data.companyName) != "undefined"){
						companyName = data.companyName;
					}
					var modelName ="-";
					if (typeof(data.modelName) != "undefined"){
						modelName = data.modelName;
					}
					var product ="-";
					if (typeof(data.product) != "undefined"){
						product = data.product;
					}
					var networkType ="-";
					if (typeof(data.networkType) != "undefined"){
						networkType = data.networkType;
					}
					var customer ="-";
					if (typeof(data.customer) != "undefined"&&data.customer!=""){
						customer = data.customer;
					}
					var industry ="-";
					if (typeof(data.industry) != "undefined"){
						industry = data.industry;
					}
					var province ="-";
					if (typeof(data.province) != "undefined"){
						province = data.province;
					}
					var city ="";
					if (typeof(data.city) != "undefined"){
						city = data.city;
					}
					var actualConnect ="-";
					if (typeof(data.actualConnect) != "undefined"){
						actualConnect = data.actualConnect;
					}
						string +="<li><div class=\"rlist_title\">设备标识：</div><div class=\"rlist_value\">"+
						data.imei + "</div></li><li><div class=\"rlist_title\">" +
										"产品品牌：</div><div class=\"rlist_value\">" + companyName + "</div></li>"
										+ "<li><div class=\"rlist_title\">产品型号：</div><div class=\"rlist_value\">"+
										modelName + "</div></li>" + 
										"<li><div class=\"rlist_title\">产品类型：</div><div class=\"rlist_value\">"+
										product + "</div></li>"
										+ "<li><div class=\"rlist_title\">产品支持网络类型：</div><div class=\"rlist_value\">"+
										networkType + "</div></li>" +
										"<li><div class=\"rlist_title\">所在企业：</div><div class=\"rlist_value\">"+
										customer +"</div></li>"
										+ 
										"<li><div class=\"rlist_title\">所在行业：</div><div class=\"rlist_value\">"+
										industry +  
										"</div></li>" +
										"<li><div class=\"rlist_title\">所在地：</div><div class=\"rlist_value\">"+
										province+ city 
										+ "</div></li>"  +
										"<li><div class=\"rlist_title\">所在企业同类型设备数：</div><div class=\"rlist_value\">"+
										actualConnect+"</div></li>"; 
						$("#res_list").append(string); 
					 
				}
			}
		});
	});
});	