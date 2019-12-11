var xDimension0=[
    '轻工家电',
	'工程机械',
	'电子设备制造',
	// '钢铁',
	'高端装备',
	// '建筑',
	// '船舶',
	'电力',
	// '食品制造加工',
	// '纺织',
	// '医药制造',
	'燃气生产和供应',
	// '化学纤维制造',
	'家具制造',
	// '烟草',
	// '文娱用品制造',
	'汽车',
	'铁路'];
var yDimension0=[
	1364,
	1014,
	2520,
	// 77,
	2001,
	// 112,
	// 153,
	1050,
	// 652,
	// 177,
	// 601,
	490,
	// 109,
	2740,
	// 26,
	// 211,
	805,
	1763];

function chart1() {
		var myFileChart = echarts.init(document.getElementById('chart1'));
		myFileChart.clear();
		myFileChart.setOption({
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
					data : xDimension0,

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

		            	data : yDimension0
					}],
				//series结束





		});
	}