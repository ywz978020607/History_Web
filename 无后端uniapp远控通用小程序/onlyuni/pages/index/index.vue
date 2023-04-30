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
						<!-- <div class="flex">
							<button class="btn btn-primary" @click="seen_id=0;check_main(0);">远程物联</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
							<button  class="btn btn-primary" @click="seen_id=1;init_info();">修改信息</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
							<button  class="btn btn-primary" @click="seen_id=2;check_main(2);">WIFI-HID注入</button> <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
						</div> -->
						<picker v-if="seen_id>=0" v-model = "seen_id" @change="change_seen_id" :value="seen_id" :range="seen_id_tags">
							<view style="color: blue;">功能导航：{{seen_id_tags[seen_id]}}</view>
						</picker>

						</span>
						<span v-html="'<br>'"></span>
						<div v-if="seen_id==0" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
							<hr style="width: 100%; size: 3em;" />
							<div v-for="(each,key,index) in temp_data" style="width: 100%; display: flex;flex-direction: column;align-items: center;" @click="copy(key)">
								<p>备注: {{each["comments"]}} </p>
								<div class="flex" style="white-space: pre-wrap;">
									设备号: {{key}} <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span> <span v-if="each.device_type != 3 && each['status']=='在线'" style="color: red;">{{each["status"]}} </span><span v-else-if="each.device_type != 3" style="">{{each["status"]}} </span>
								</div>
								<!-- 通用IO -->
								<div v-if="each['device_type'] == 0">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} at: {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
										 <div class="flex" style="white-space: pre-wrap;">
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'on')">常高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 'off')">常低</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_on')">触高</button>
											 <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											 <button class="btn btn-primary" @click="send(key,data_each['id'], 't_off')">触低</button>
										 </div>
										 <!-- <span v-html="'<br>'"></span> -->
									</div>
								</div>
								<!-- 剪裁版IO1 -->
								<div v-if="each['device_type'] == 1">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
										<!-- <span v-html="'<br>'"></span>  -->
										<button class="btn btn-primary" @click="send(key,data_each['id'], 't_off')">触低发送</button>
									</div>
								</div>
								<!-- 红外控制 -->
								<div v-if="each['device_type'] == 2">
									<div v-for="(data_each,data_key,data_index) in each.datastreams" :obj="data_each.id" style="display: flex;flex-direction: column;align-items: center;">
										<p>键值{{data_each["id"]}}: {{data_each["value"]}} at: {{data_each["at"].slice(0,10)+' ' +data_each["at"].slice(11,19)}}</p>
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
											id: data_index,
											latitude: data_each.value.lat,longitude: data_each.value.lon,
											width: 20,height: 30,
											title: each.comments
										}]" style="width: 100%; height: 600rpx;"></map>
										<!-- show-location -->
										
										<div class="flex" style="white-space: pre-wrap;">
											<uni-datetime-picker type="datetime" v-model="timeStart" @change="changeTime($event, 'start')" />
											-
											<uni-datetime-picker type="datetime" v-model="timeEnd" @change="changeTime($event, 'end')" />
										</div>
										<div class="flex" style="white-space: pre-wrap;">
											<button class="btn btn-secondary" @click="create_path(key);">生成轨迹并查看</button>
											<span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
											<button class="btn btn-secondary" @click="open_location(data_each.value.lat, data_each.value.lon);">位置分享/导航</button>
										</div>
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
							<label style="float:left">设备ID(英文逗号分割)：</label> <input v-model="input_val[0]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="device_ids">{{device_ids}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left">备注(英文逗号分割)：</label> <input v-model="input_val[1]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="comments">{{comments}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left" @click="showPwd">唯一密钥(点击显示)：</label> <input v-model="input_val[2]" :password="showPassword" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- <a :href="api_key">{{api_key}}</a> --><span v-html="'<br>'"></span>
							<label style="float:left">触发秒数/s：</label> <input v-model="input_val[3]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<span v-html="'<br>'"></span>
							<label style="float:left">hidusb-ID：</label> <input v-model="input_val[4]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<span v-html="'<br>'"></span>
							<label style="float:left">类型(0/1/2/3/.., 英文逗号分割)：</label> 
							<span v-html="'<br>'"></span>
							<input v-model="input_val[7]" style="border:0.5px solid #378888; white-space: pre-wrap;">
							<!-- {{trigger_time}} -->
							<span v-html="'<br>'"></span>
							<button class="btn btn-primary" @click="change()" style="display: flex;flex-direction: column;align-items: center;">新增/修改onenet配置</button>

							<span v-html="'<br>'"></span><span v-html="'<br>'"></span>
							<div class="flex" style="white-space: pre-wrap;">
								<button class="btn btn-secondary" @click="export_info();">一键导出配置</button>
								<span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
								<button class="btn btn-secondary" @click="load_info();">一键导入配置</button>
							</div>
							<input v-model="info_dump" style="border:0.5px solid #378888; white-space: pre-wrap;">
						</div>
						
						<div v-if="seen_id==2" style="display: inline-block;">
							<div v-for="(each,key,index) in temp_data" style="display: flex;flex-direction: column;align-items: center;">
								<p v-if="each['status']=='在线'" style="color: red;">{{each["status"]}} </p><p v-else style="">{{each["status"]}} </p>
								<p>设备号: {{key}} <span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span></p>
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

						<div v-if="seen_id==3" style="display: inline-block;">
							<text>
								小程序由摸鱼大鸽开发，用于广域网下的远程控制/定位追踪/红外控制/广域HID注入等功能，已部署案例：电脑远程开机、车库门控制、随车定位追踪、家居控制等。
							</text>

							<span v-html="'<br>'"></span>
							<text class="flex flex-direction" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
								本小程序无三方后端，小程序直连中国移动onenet物联网平台(中国移动免费平台)，用户可自行注册绑定，教程可参考
								https://www.bilibili.com/read/cv22804787
							</text>
							<span v-html="'<br>'"></span>
							<text class="flex flex-direction" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
								联系方式: 可通过bilibili平台关注[摸鱼大鸽]，也可添加开发者微信号: moyudage123 联系定制、邀请进交流群等。
							</text>
							<span v-html="'<br>'"></span>
							<text class="flex flex-direction" style="width: 100%; display: flex;flex-direction: column;align-items: center;">
								暂不接受捐赠，您的bilibili点赞/关注是作者开发的动力~
							</text>
						</div>

<!-- ------------------------------------------------------------------------------- -->
<!-- ------------------------------------------------------------------------------- -->
						<!-- 独立页面-需返回按钮 -->
						<div v-if="seen_id==-1" style="display: inline-block;">
							<button class="btn btn-primary" @click="restore_seen_id();">返回原主页</button>
							<span v-html="'<br>'"></span>
							<map id="map" :longitude="polyline[0].points[0].lon" :latitude="polyline[0].points[0].lat" :circles="circles" 
										:include-points="polyline[0].points" :polyline="polyline" :markers="polyline[0].markers" style="width: 100%; height: 750rpx;"></map>
							<div class="flex" style="white-space: pre-wrap;">
								<uni-datetime-picker type="datetime" v-model="timeStart" @change="changeTime($event, 'start')" />
								-
								<uni-datetime-picker type="datetime" v-model="timeEnd" @change="changeTime($event, 'end')" />
							</div>
							<div class="flex" style="white-space: pre-wrap;">
								<button class="btn btn-secondary" @click="create_path();">生成轨迹并查看</button>
								<span v-html="'&nbsp;&nbsp;&nbsp;&nbsp;'"></span>
								<button class="btn btn-secondary" @click="open_location();">终点位置导航</button>
							</div>
						</div>
				</div>
				
					
	    </div>
	
	
</template>

<script>
	import index from "./index.js";
	export default index;
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
