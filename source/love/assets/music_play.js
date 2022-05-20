	{
		
		document.writeln("<style>");
		document.writeln("		");
		document.writeln("");
		document.writeln("			.BBW_play {");
		document.writeln("				width: 60px;");
		document.writeln("				height: 60px;");
		document.writeln("				background: url('//static.51bbw.cn/images/play.png') no-repeat;");
		document.writeln("				background-size:100% 100% ;");
		document.writeln("				position: fixed;");
		document.writeln("				top: 2%;");
		document.writeln("				right: 3%;");
		document.writeln("				-webkit-animation: test3 2s infinite linear;");
		document.writeln("				animation: test3 2s infinite linear;");
			document.writeln("			z-index:999999");
		document.writeln("			}");
		document.writeln("");
		document.writeln("		");
		document.writeln("			.BBW_pause {");
		document.writeln("				width: 60px;");
		document.writeln("				height: 60px;");
		document.writeln("				background: url('//static.51bbw.cn/images/play.png') no-repeat;");
		document.writeln("				background-size:100% 100% ;");
		document.writeln("				position: fixed;");
		document.writeln("				top: 2%;");
		document.writeln("				right: 3%;");
			document.writeln("			z-index:999999;");
		document.writeln("				-webkit-touch-callout: none;");
		document.writeln("				-webkit-user-select: none;");
		document.writeln("				-moz-user-select: none;");
		document.writeln("				-ms-user-select: none;");
		document.writeln("				user-select: none;");
		document.writeln("			}");
		document.writeln("	");
		document.writeln("			@-webkit-keyframes test3 {");
		document.writeln("				100% {");
		document.writeln("					-webkit-transform: rotateZ(360deg);");
		document.writeln("					transform: rotateZ(360deg);");
		document.writeln("				}");
		document.writeln("			}");
		document.writeln("			@keyframes test3 {");
		document.writeln("				100% {");
		document.writeln("					-webkit-transform: rotateZ(360deg);");
		document.writeln("					transform: rotateZ(360deg);");
		document.writeln("				}");
		document.writeln("			}");
		document.writeln("		");
		document.writeln("");
		document.writeln("			@media screen and (max-width: 768px){");
		document.writeln("");
		document.writeln("				.BBW_play,.BBW_pause{");
		document.writeln("						width: 50px;");
		document.writeln("						height:50px;");
		document.writeln("				}");
		document.writeln("			@media screen and (min-width: 1200px){");
		document.writeln("				");
		document.writeln("					.BBW_play,.BBW_pause{");
		document.writeln("						width: 60px;");
		document.writeln("						height:60px;");
		document.writeln("					}");
		document.writeln("				}");
		document.writeln("		");
		document.writeln("			");
		document.writeln("			}");
		document.writeln("		</style>");
		document.writeln("");
		
		document.write('<div class="BBW_play" id="BBW_audio_ctr"></div>'); 
		document.write('<audio id="BBW_mp3Btn" src="'+_bgm_url+'" loop autoplay="autoplay"> </audio>');
		//播放器控制
				var audio = document.getElementById('BBW_mp3Btn'); //获取播放器
				var audio_ctr = document.getElementById("BBW_audio_ctr"); //获取按钮
		//兼容苹果微信打开无背景音乐
			
				
				//兼容苹果自带浏览器 随意点击一下播放
				 var windows_click = false;
				    function forceSafariPlayAudio() {
				        if(!windows_click){
				            windows_click=true;
				            audio_ctr.className = 'BBW_play';
				            audio.play(); // iOS 7/8 仅需要 play 一下
				        }   
				    }

				    window.addEventListener('touchstart', forceSafariPlayAudio, false);    
				//旋转按钮点击
				audio_ctr.onclick = function() {
					//防止冒泡
					event.stopPropagation();
					if (audio.paused) {
						//如果当前是暂停状态
						audio.play(); //播放 audio自身自带函数play()
						audio_ctr.className = 'BBW_play'; //动态更改标签的类名
						return;
					}
					//当前是播放状态
					audio.pause(); //暂停
					audio_ctr.className = 'BBW_pause'; //动态更改标签的类名
			}
			//兼容苹果原生
		var _ua = navigator.userAgent.toLowerCase();
				if (_ua.indexOf('applewebkit') > -1 && _ua.indexOf('mobile') > -1 && _ua.indexOf('safari') > -1 &&
				    _ua.indexOf('linux') === -1 && _ua.indexOf('android') === -1 && _ua.indexOf('chrome') === -1 &&
				    _ua.indexOf('ios') === -1 && _ua.indexOf('browser') === -1) {	
						
						audio_ctr.className = 'BBW_pause'; //动态更改标签的类名
				}
				
					if (window.WeixinJSBridge) {
					WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
						audio.play();
					}, false);
				} else {
					document.addEventListener("WeixinJSBridgeReady", function() {
						WeixinJSBridge.invoke('getNetworkType', {}, function(e) {
							audio.play();
						});
					}, false);
				}
				
				
				
	
	
	
	
	
	}	