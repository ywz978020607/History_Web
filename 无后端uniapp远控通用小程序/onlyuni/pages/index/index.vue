<template>
	<div style="display: flex;flex-direction: column;align-items: center;">
	        <header id="top">
	            <!-- 内容显示区域 ：width : 1211px -->
	            <div id="top_box">
	                <!-- <ul class="lf">
	                    <li><a href="#">欢迎</a></li>
	                    <li><a href="#">Welcome!</a></li>
	                </ul> -->
	               <ul class="rt">
	                    <!-- <li>用户名: {{ username }}</li>
	                    <li><a @click="quit">退出登录</a></li> -->
						<li>摸鱼大鸽: 本版本无后端，直连中国移动</li>
	                </ul>
	            </div>
	        </header>
	        <!-- body-block  -->
			<div style="width: 100%; display: flex;flex-direction: column;align-items: center;">
		            <span v-html="'<br>'"></span><span v-html="'<br>'"></span>
					<span style="white-space: pre-wrap;">
						<div class="flex">
							<button class="btn btn-primary" @click="seen_id=0;check_main(0);">远程物联</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
							<button  class="btn btn-primary" @click="seen_id=1;init_info();">修改信息</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
							<button  class="btn btn-primary" @click="seen_id=2;check_main(2);">WIFI-HID注入</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
						</div>
						</span>
						<span v-html="'<br>'"></span>
						<div v-if="seen_id==0" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
							<hr style="width: 100%; size: 3em;" />
							<div v-for="(each,key,index) in temp_data" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
								<p>备注: {{each["comments"]}} </p>
								<p v-if="each.device_type != 3 && each['status']=='在线'" style="color: red;">{{each["status"]}} </p><p v-else-if="each.device_type != 3" style="">{{each["status"]}} </p>
								<p>设备号: {{key}} <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
								<!-- 通用IO -->
								<div v-if="each['device_type'] == 0">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} <span v-html="'<br>'"></span> 更新时间: {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
										 <div class="flex" style="white-space: pre-wrap;">
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'on')">常高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'off')">常低</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_on')">触高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_off')">触低</button>
										 </div>
										 <span v-html="'<br>'"></span>
									</div>
								</div>
								<!-- 剪裁版IO1 -->
								<div v-if="each['device_type'] == 1">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} <span v-html="'<br>'"></span> 更新时间: {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
										<button class="btn btn-primary" @click="send(key,data_each['id'], 't_off')">触低发送</button>
									</div>
								</div>
								<!-- 红外控制 -->
								<div v-if="each['device_type'] == 2">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} <span v-html="'<br>'"></span> 更新时间: {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
										 <div class="flex" style="white-space: pre-wrap;">
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'on')">常高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'off')">常低</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_on')">触高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_off')">触低</button>
										 </div>
										 <span v-html="'<br>'"></span>
									</div>
									
									<div class="flex" style="display: flex;flex-direction: column;align-items: center;">
										<p>红外控制</p>
									</div>
									<div class="flex" style="white-space: pre-wrap;">
										 <button class="btn btn-primary" @click="send(key,0, 'open')">打开</button>
										 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
										 <button class="btn btn-primary" @click="send(key,0, 'close')">关闭</button>
										 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
										 <button class="btn btn-primary" @click="send(key,0, 'up')">调高</button>
										 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
										 <button class="btn btn-primary" @click="send(key,0, 'down')">调低</button>
									</div>
								</div>
								
								<!-- 地图显示 -->
								<div v-if="each['device_type'] == 3" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
									<!-- {{each.datastreams[0]["value"]["lat"]}} -->
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
										<view v-if="data_each.id == 'location'" class="row-bottom" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
											<p>{{data_each["at"]}}</p>
											<!-- <p>{{data_each.value.lon}},{{data_each.value.lat}}</p> -->
											<map id="map" :longitude="data_each.value.lon" :latitude="data_each.value.lat" :scale="16" :circles="circles" 
											:markers="[{
											id: index,
											latitude: data_each.value.lat,longitude: data_each.value.lon,
											width: 20,height: 30,
											title: each.comments
										}]" :polyline="polyline" style="width: 100%; height: 500rpx;"></map>
										<!-- show-location -->
										</view>
									</div>
								</div>
								
								
								<!-- #ifdef H5 -->
								<hr style="width: 100%; size: 3em;" />
								<!-- #endif -->
								<!-- #ifndef H5 -->
								<view class="divider" />
								<!-- #endif -->
							</div>
						
						

						
						</div>
		
						<div v-if="seen_id==1" style="display: inline-block;">
							<label style="float:left">设备产品ID(英文逗号分割)：</label> <input v-model="input_val[0]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="device_ids">{{device_ids}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left">备注(英文逗号分割)：</label> <input v-model="input_val[1]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="comments">{{comments}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left">唯一密钥：</label> <input v-model="input_val[2]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="api_key">{{api_key}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left">触发秒数/s：</label> <input v-model="input_val[3]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							
							<label style="float:left">hidusb-ID：</label> <input v-model="input_val[4]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							
							<label style="float:left">类型(0-完整, 1仅触低按键, 英文逗号分割)：</label> 
							<span v-html="'<br>'"></span>
							<input v-model="input_val[7]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- {{trigger_time}} -->
							<span v-html="'<br>'"></span>
							<button class="btn btn-primary" @click="change()" style="display: flex;flex-direction: column;align-items: center;">新增/修改onenet配置</button>
						</div>
						
						<div v-if="seen_id==2" style="display: inline-block;">
							<div v-for="(each,key,index) in temp_data" style="display: flex;flex-direction: column;align-items: center;">
								<p v-if="each['status']=='在线'" style="color: red;">{{each["status"]}} </p><p v-else style="">{{each["status"]}} </p>
								<p>设备号: {{key}} <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
								<div class="flex" style="white-space: pre-wrap;">
									 <button class="btn btn-primary" @click="send_usb('mkl')" style="display: flex;flex-direction: column;align-items: center;">鼠标左键</button>
									 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
									 <button class="btn btn-primary" @click="send_usb('mkr')" style="display: flex;flex-direction: column;align-items: center;">鼠标右键</button>
								</div>
								
								<div class="flex" style="white-space: pre-wrap;"><button class="btn btn-primary" @click="send_usb('mup')" style="display: flex;flex-direction: column;align-items: center;">鼠标上</button></div>
								<div class="flex" style="white-space: pre-wrap;">
									 <button class="btn btn-primary" @click="send_usb('mleft')" style="display: flex;flex-direction: column;align-items: center;">鼠标左</button>
									 <input v-model="input_val[6]" style="width: 30upx;">
									 <!-- @touchstart="send_usb('mright')" @touchend= -->
									 <button class="btn btn-primary" @click="send_usb('mright')" style="display: flex;flex-direction: column;align-items: center;">鼠标右</button>
								</div>
								<div class="flex" style="white-space: pre-wrap;"><button class="btn btn-primary" @click="send_usb('mdown')" style="display: flex;flex-direction: column;align-items: center;">鼠标下</button></div>
								
								<label style="float:left">下发内容-支持中文：</label>
								<span v-html="'<br>'"></span>
								<input v-model="input_val[5]" style="border:0.5px solid #378888; white-space: pre-wrap;">
								<button class="btn btn-primary" @click="send_usb('kb')" style="display: flex;flex-direction: column;align-items: center;">键盘发送</button>
							
								<!-- #ifdef H5 -->
								<hr style="width: 100%; size: 3em;" />
								<!-- #endif -->
								<!-- #ifndef H5 -->
								<view class="divider" />
								<!-- #endif -->

							</div>
						</div>
				</div>
				
					
	    </div>
	
	
</template>

<script>
	import uCharts from '@/static/u-charts/u-charts.js';
	import wxCharts from '@/static/wxcharts.js'; //@=../..
	var _self;
	var canvaGauge=null; //必须！否则报错
	
		var _self;
		var canvaLineA=null;
		//这里的Data为测试使用，生产环境请从服务器获取
		var Data={
			LineA:{categories:['2012', '2013', '2014', '2015', '2016', '2017'],series:[{name: '成交量A',data:[35, 20, 25, 37, 4, 20]},{name: '成交量B',data:[70, 40, 65, 100, 44, 68]},{name: '成交量C',data:[100, 80, 95, 150, 112, 132]},{name: '成交量D',data:[100, 80, 95, 150, 112, 132]}]},
			}
			
	export default {
		data() {
			return {
				device_ids: "",
				device_type: "",
				api_key: "",
				comments: "",
				trigger_time: "",
				hid_usb: "",
				canvasnamelist:["canvasGauge0","canvasGauge1"],
				title: 'Hello',
			  username: "",
			  intervalId: null,
			  seen_id: 0,
			  //////////////
			  val: [
				  0, 1
			  ],
			  ///画图变量
			  cWidth:'',
			cHeight:'',
			pixelRatio:1,
			  //翻页变量
			  temp_index: 0,
			  all_count: null,
			  charts_len: 7,
			  //// 
			  res_time: "",
			  //// 
			  input_val: [null, null, null, null, null, null, 5, null], //初始8个null
			  temp_data: {},
			  res_data1: [], 
			  // direction: "/uploadapi"
			  // direction: "http://127.0.0.1:8000"
			  // direction: "http://ywz3.buaamc2.net:9013/seepapi"
			// direction: "http://192.168.137.1:8000"
			//#ifndef H5
			direction: "https://api.heclouds.com", // "http://183.230.40.34"
			//#endif
			//#ifdef H5
			direction: "/unionenet",
			//#endif
			}
		},
		onLoad(options) {
			console.log("Op:",options)
			if(options=={}){
			this.username="test";
			}
			else{
			this.username = options.username;		
			}
			//加载时先刷新一下
			// this.fresh();
			this.check_main(this.seen_id);
			
			//定时器
			this.dataRefresh();
			
			//画布
			_self = this;
			//#ifdef H5 || MP-ALIPAY || MP-BAIDU || MP-TOUTIAO
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						_self.pixelRatio =2;
						//正常这里_self.pixelRatio给2就行，如果要求高可用下行
						//_self.pixelRatio =res.pixelRatio;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
		},
		onReady() {
			;
			// this.showLineA("canvasLineA",Data.LineA);
				},
		methods: {
			//////////////////////////////////
			    quit(event) {
			          var url = "../index/index"
			          wx.navigateTo({url})
			    },
				// draw(){
				// 	this.showLineA("canvasLineA",Data.LineA);
				// },
			    fresh() {
			        console.log("fresh")
					this.check_main(this.seen_id);
			    },
			    // 定时刷新数据函数
			    dataRefresh() {
			        // 计时器正在进行中，退出函数
			        if (this.intervalId != null) {
			            return;
			        }
			        // 计时器为空，操作
			        this.intervalId = setInterval(() => {
			            console.log("刷新 " + new Date());
			            // this.fresh(); //加载数据函数
			        }, 10000);
			    },
			    // 停止定时器
			    clear() {
			        clearInterval(this.intervalId); //清除计时器
			        this.intervalId = null; //设置为null
			    },
				//定时器
				created() {
					this.dataRefresh();
				},
				destroyed() {
					// 在页面销毁后，清除计时器
					this.clear();
				},
				/////////////////////////////////////
				//操作--button1
				check_main(seen_id = "") {
					console.log("check once");
					var that = this;
					that.device_ids = uni.getStorageSync("device_ids");
					that.api_key = uni.getStorageSync("api_key");
					that.comments = uni.getStorageSync("comments");
					that.trigger_time = uni.getStorageSync("trigger_time");
					that.hid_usb = uni.getStorageSync("hid_usb");
					that.device_type = uni.getStorageSync("device_type");
					var device_id_split = that.device_ids.split(",");
					var comments_split = that.comments.split(",");
					var devices_type = that.device_type.split(",");
					var hid_usb_split = that.hid_usb.split(",");
					var temp_data = {};
					if (seen_id == 2){
						for(var idx=0;idx<hid_usb_split.length;idx++){
							temp_data[hid_usb_split[idx]] = {
								"status": "在线",
								"datastreams": [],
							}
						}
						uni.request({
							url: that.direction + "/devices/status",
							// url: "http://183.230.40.34/devices/status",
							header: { "api-key": that.api_key},
							data: {'devIds':that.hid_usb},
							method:'GET',//请求方式  或GET，必须为大写
							success: res => {
								// console.log('返回status', res.data["data"]);
								for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
									var device_data = res.data["data"]["devices"][idx];
									if (device_data["online"] == false){
										temp_data[device_data["id"]]["status"] = "离线";
									}
								}
							}
						  });
					}
					else {
						// 首页
						for(var idx=0;idx<device_id_split.length;idx++){
							temp_data[device_id_split[idx]] = {
								"device_type": devices_type[idx],
								"comments": comments_split[idx],
								"status": "在线",
								"datastreams": [],
							}
						}
						//
						uni.request({
							url: that.direction + "/devices/status",
							// url: "http://183.230.40.34/devices/status",
							header: { "api-key": that.api_key},
							data: {'devIds':that.device_ids},
							method:'GET',//请求方式  或GET，必须为大写
							success: res => {
								// console.log('返回status', res.data["data"]);
								for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
									var device_data = res.data["data"]["devices"][idx];
									if (device_data["online"] == false){
										temp_data[device_data["id"]]["status"] = "离线";
									}
								}
							}
						  });
						
						uni.request({
							url: that.direction + "/devices/datapoints",
							header: { "api-key": that.api_key},
							data: {'devIds':that.device_ids},
							method:'GET',//请求方式  或GET，必须为大写
							success: res => {
								// console.log('返回', res.data["data"]);
								for (var idx=0; idx < res.data["data"]["devices"].length; idx++){
									var device_data = res.data["data"]["devices"][idx];
									// 修改顺序 data0 data2 ..
									device_data["datastreams"].sort((a, b)=>{
										return (a["id"] > b["id"])? 1:-1;
									});
									// 坐标转换
									for (var in_idx = 0; in_idx < device_data["datastreams"].length;in_idx++){
										if(device_data["datastreams"][in_idx]["id"] == "location"){
											var translate_coor = that.translate_gps(device_data["datastreams"][in_idx]["value"]["lat"], device_data["datastreams"][in_idx]["value"]["lon"]);
											device_data["datastreams"][in_idx]["value"]["lat"] = translate_coor.latitude;
											device_data["datastreams"][in_idx]["value"]["lon"] = translate_coor.longitude;
										}
									}
									
									
									temp_data[device_data["id"]]["datastreams"] = device_data["datastreams"];
									
								}
							}
						  });
						  
					}
					that.temp_data = temp_data;
				},
				send(device_id, key_name, action) {
					var that = this;
					uni.request({
						url: that.direction + "/cmds?device_id=" + device_id,
						header: { "api-key": that.api_key},
						data: {
							// key_name: JSON.stringify(action, that.trigger_time),
							"key_name": key_name,
							"action": action,
							"period": that.trigger_time
							
						},
						method:'POST',//请求方式  或GET，必须为大写
						success: res => {
							uni.showToast({
							    title: "成功",
							    icon: "none"
							})
						}
					  });
				},
				translate_gps(lat, lon){
					var util = require('../../static/WSCoordinate.js');
					var res1 = util.transformFromWGSToGCJ(lat, lon);
					// console.log(res1);
					return res1;
				},
				isChinese(s){
					return /[\u4e00-\u9fa5]/.test(s);
				},
				ench2Unicode(str){
					if(!str){
						return;
					}
					var unicode = '';
					for (var i = 0; i <  str.length; i++) {
						var temp = str.charAt(i);
						if(this.isChinese(temp)){
							unicode += '\\u' +  temp.charCodeAt(0).toString(16);
						}
						else{
							unicode += '\\u' + temp;
						}
					}
					return unicode;
				},
				send_usb(mode) {
					var that = this;
					var params = {
							"mode": mode
						};
					if(mode == "kb") {
						params["context"] = that.ench2Unicode(that.input_val[5]);
					}
					else {
						params["speed"] = that.input_val[6];
					}
					// console.log(params["context"]);
					uni.request({
						url: that.direction + "/cmds?device_id=" + that.hid_usb,
						header: { "api-key": that.api_key},
						data: params,
						method:'POST',//请求方式  或GET，必须为大写
						success: res => {
							uni.showToast({
							    title: "成功",
							    icon: "none"
							})
						}
					  });
				},
				//修改信息
				change() {
					var that = this;
					// if(that.input_val[0]){uni.setStorageSync("device_ids", that.input_val[0]);}
					if(that.input_val[0]){uni.setStorageSync("device_ids", that.input_val[0]);}
					if(that.input_val[1]){uni.setStorageSync("comments", that.input_val[1]);}
					if(that.input_val[2]){uni.setStorageSync("api_key", that.input_val[2]);}
					if(that.input_val[3]){uni.setStorageSync("trigger_time", that.input_val[3]);}
					if(that.input_val[4]){uni.setStorageSync("hid_usb", that.input_val[4]);}
					if(that.input_val[7]){uni.setStorageSync("device_type", that.input_val[7]);}
					this.check_main();
					uni.showToast({
					    title: "成功",
					    icon: "none"
					})
				},
				init_info() {
					var that = this;
					that.input_val[0] = that.device_ids;
					that.input_val[1] = that.comments;
					that.input_val[2] = that.api_key;
					that.input_val[3] = that.trigger_time;
					that.input_val[4] = that.hid_usb;
					that.input_val[7] = that.device_type;
					that.$forceUpdate();
				}
		}
	
	}
</script>

<style>
	.flex {
	    display: -webkit-box;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	}
	
	.flex-child {
	    -webkit-box-flex: 1 1 auto;
	    -moz-box-flex:  1 1 auto;
	    -webkit-flex:  1 1 auto;
	    -ms-flex:  1 1 auto;
	    flex:  1 1 auto;
	    margin-right:5upx;
	}
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	
	
	/* .charts{width: 750upx; height:500upx;background-color: #FFFFFF;} */
	.charts{width: 750upx; height:500upx;background-color: #FFFFFF;}
</style>
