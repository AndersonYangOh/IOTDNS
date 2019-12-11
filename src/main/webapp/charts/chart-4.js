var xDimension3=['电源时序器',
	'无线遥控开关',
	'工业温控器',
	'智能采集器',
	'工业平板电脑',
	'智能手表',
	'行车记录仪',
	'无线路由器',
	'报警器',
	'智能马蹄锁'];
var yDimension3=[871213	,
	980517	,
	847370	,
	454777	,
	551772	,
	379360	,
	283976	,
	791540	,
	239478	,
	291999	];

function chart4() {
		var myFileChart = echarts.init(document.getElementById('chart4'));
		myFileChart.clear();
		myFileChart.setOption({
				title : {
					text : ''
				},

				//

				grid:{
					left:'7%',
					bottom:'18%',
					top:'24%',
					right:'2.5%'
				},


				//x轴
			    xAxis : [{
					type : 'category',
					data : xDimension3,

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
					},

					axisPointer : {
						type : 'shadow'
					}
				}],

				//y轴
				yAxis :[{
			            type: 'value',
			            name: '注册设备数(个)             ',
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
							}
						},
						 axisTick:{
				          show:false,
			        	},

			        }],


			    //柱子
				series : [{
						name : '',
						type : 'bar',
						barWidth:24,
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

		            	data : yDimension3
					}],
				//series结束





		});
	}