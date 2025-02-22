"use strict";
//var adTimer;
{

	globalThis.C3.Plugins.Lagged_API_REVSHARE.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase
	{

		constructor()
		{
			super();

            const properties = this._getInitProperties();
			this._adPlaying = false;
			this._offlineMode=false;
			this._username = "Guest";
			this._userid = 0;
			this._useravatar="https://lagged.com/images/avatars/default-avatar.jpg";
			var self=this;
			this._savedAchs = [];
			//to do test 1:
			this['LaggedAPI'];

			//Load the api from the CDN
			//check if offline:
			var loadScript="//lagged.com/api/rev-share/lagged.js";

			try{
			if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === "preview.construct.net"){
				this._offlineMode=true;
			}
		}catch(e){
			console.log(e);
		}

		try{
			if(!this._offlineMode){
				if(window.parent.username){
					this._username=window.parent.username;
				}
			}
		}catch(e){
		console.log(e);
		}

		try{
			(function(C,l,a,y,_,i,o){C[_]=C[_]||function(){
			(C[_].q=C[_].q||[]).push(arguments)},C[_].l=1*new Date();i=l.createElement(a),
			o=l.getElementsByTagName(a)[0];i.async=1;i.src=y;
			
			i.onload=function(){
				setTimeout(function(){
					if(!self._offlineMode){
						
						LaggedAPI.User.get(function(userData) {
							self._username=userData.user.name;
							self._userid=userData.user.id;
							self._useravatar=userData.user.avatar;

						});
					}
				},100);
			}
			
			o.parentNode.insertBefore(i,o)
			})(window,document,'script',loadScript,'Lagged');

		}catch(e){
			console.log(e);
		}


		}

		_release()
		{
			super._release();
		}

		GetUsername()
		{
			return this._username;
		}

		GetUserID()
		{
			return this._userid;
		}

		GetUserAvatar()
		{
			return this._useravatar;
		}

		_saveToJson()
		{
			return {
				// data to be saved for savegames
			};
		}

		_loadFromJson(o)
		{
		}
	};
}
