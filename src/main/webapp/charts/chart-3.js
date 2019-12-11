var xDimension2=['北京',
	'天津',
	'上海',
	'重庆',
	'河北',
	'山西',
	'辽宁',
	'吉林',
	'黑龙江',
	'江苏',
	'浙江',
	'安徽',
	'福建',
	'江西',
	'山东',
	'河南',
	'湖北',
	'湖南',
	'广东',
	'海南',
	'四川',
	'贵州',
	'云南',
	'陕西',
	'甘肃',
	'青海',
	'内蒙古',
	'广西',
	'西藏',
	'宁夏',
	'新疆'];
var yDimension2=[1416,
	534,
	785,
	337,
	905,
	662,
	1316,
	201,
	239,
	1296,
	1151,
	549,
	326,
	316,
	1493,
	931,
	594,
	578,
	2692,
	140,
	558,
	198,
	88,
	352,
	57,
	19,
	289,
	293,
	15,
	81,
	279];



	function chart3() {
		var myFileChart = echarts.init(document.getElementById('chart3'));
		myFileChart.clear();
		myFileChart.setOption({
				title : {
					text : ''
				},

				//

				grid:{
					left:'6%',
					bottom:'18%',
					top:'24%',
					right:'2.5%'
				},


				//x轴
			    xAxis : [{
					type : 'category',
					data : xDimension2,

                	axisLine:{
				          show:true,
				          lineStyle:{
				            color:"#fbffdd"//x轴颜色，若不设置全局字体颜色，则可改变x轴颜色
				          }
				    },

				        //坐标轴刻度
			        axisTick:{
			        	show:false,
			          // alignWithLabel:true,//可使坐标刻度线居中，此时需要设置 boundaryGap:true,
			          interval:'0',
			          length:20,
			        },

			        nameLocation:'center',

					axisLabel : {
						textStyle:{
							color:'#fff',
						},
						interval :'0' ,


						formatter:function(params){
			        		var newStr = "";
			        		var n = params.length;
			        		var a = 4;
			        		var r = Math.ceil(n/a);
			        		if(n>a){
			        			for(var i = 0;i<r;i++){
			        				var tempStr = "";
			        				var start = i*a;
			        				var end = start + a;
			        				if(i==r-1){
			        					tempStr = params.substring(start,n);
			        				}else{
			        					tempStr = params.substring(start,end)+"\n";
			        				}
			        				newStr += tempStr;
			        			}
			        		}else{
			        			newStr = params;
			        		}
			        		return newStr;
		        		}	

					},

					axisPointer : {
						type : 'shadow'
					}
				}],

				//y轴
				yAxis :[{
			            type: 'value',
			            name: '注册企业数(个)',
			            nameLocation:'end',
			            nameTextStyle:{
			            	color:'#fff',
			            	align:'right',

			            },
			            nameGap:14,

			            axisLine: {
	                    	lineStyle: {
	                       	 	type: 'solid',
	                        	color: '#fbffdd'//y轴的颜色
	                    	}
	               		 },

	               		splitLine:{
							show:true,
							lineStyle:{
								color:'#fbffdd',
								width:1
							}
						},

						// y轴值颜色
						axisLabel : {

							textStyle:{
								color:'#fff'
							},
							// rotate:40
						},
						
						axisTick:{
				          show:false,
			        	},

			        }],


			    //柱子
				series : [{
						name : '',
						type : 'bar',
						barWidth:18,
// 						barMaxWidth:10,//最大宽度
// 		            	barMinWidth:2,//最小宽度

						itemStyle:{
							normal: {
								 color: new echarts.graphic.LinearGradient(
                       				 0, 0, 0, 1,
				                        [
				                            {offset: 0, color: 'rgba(255,232,126,0.5)'},
				                            {offset: 0.5, color: '#eed048'},
				                            {offset: 1, color: '#fecf00'}
				                        ]
				                    )

							},
							emphasis: {
								 color: new echarts.graphic.LinearGradient(
                       				 0, 0, 0, 1,
				                        [
				                            {offset: 0, color: 'rgba(238,255,181,0.5)'},
				                            {offset: 0.5, color: '#f7ff7a'},
				                            {offset: 1, color: '#f0ff00'}
				                        ]
				                    )

							}
            			},

		            	data : yDimension2
					}],
				//series结束





		});
	}