var xDimension1=[
    // '北京扬天在线信息技术有限公司',
	'郑州椿长仪器仪表有限公司',
	'北京鑫鹏旺管业有限公司',
	'众海汇智(长沙)智能制造有限责任公司',
	'翼猫科技发展(上海)有限公司',
	'苏州索克维尔信息技术有限公司',
	'杭州络河科技有限公司',
	'烟台鼎信液压机械设备有限公司',
	'浙江擎海信息科技股份有限公司',
	'浙江美店网络科技有限公司',
	'上海祐云信息技术有限公司',
	'苏州艾克威尔科技有限公司',
	'安徽晶太信息科技有限公司',
	'上海固越电子科技有限公司',
	'北京海博创源科技有限公司'];
var yDimension1=[
    // 113352,
	77557,
	52382,
	52372,
	52352,
	48941,
	46352,
	45062,
	39504,
	36552,
	33152,
	32352,
	32034,
	27106,
	25652
	];



function chart2() {
		var myFileChart2 = echarts.init(document.getElementById('chart2'));
		myFileChart2.clear();
		myFileChart2.setOption({
				title : {
					text : ''
				},

				//

				grid:{
					left:'8%',
					bottom:'18%',
					top:'24%',
					right:'2.5%'
				},


				//x轴
			    xAxis : [{
					type : 'category',
					data : xDimension1,

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
			        },

			        nameLocation:'center',

					axisLabel : {
						textStyle:{
							color:'#fff',
						},
						interval :'0' ,

						formatter:function(params){
			               if (params.length > 3) {
			                  return params.substring(0, 3) + '...';
			               } else {
			                  return params;
			               }
				        }


					},

					axisPointer : {
						type : 'shadow'
					}
				}],

				//y轴
				yAxis :[{
			            type: 'value',
			            name: '注册设备数(个)        ',
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
						barWidth:20,
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

		            	data : yDimension1
					}],
				//series结束





		});
	}