"use strict";

{



	var showAdFnWrap=function(){console.log('show ad fn running')};


	globalThis.C3.Plugins.Lagged_API_REVSHARE.Acts =
	{
		ShowAd()
		{
			console.log('LaggedAPI: show an ad, is playing: ', this._adPlaying);
			if(!this._adPlaying){
				var selfy=this;

				selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.PauseGame);
				selfy._adPlaying=true;

				try{

					self["LaggedAPI"]["APIAds"]["show"](function() {
						selfy._adPlaying=false;
						selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.ResumeGame);
						console.log('c3 plugin response: ad finished');
					});

				}catch(e){
					console.log(e);
					selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.ResumeGame);
					selfy._adPlaying=false;
				}
			}
		},
		InitGame(dev_id, pub_id)
		{
			try{
				self["LaggedAPI"]["init"](dev_id,pub_id);
				if(this._offlineMode){
				console.log('LaggedAPI: init game with dev id ', dev_id);
				}
			}catch(e){
				console.log(e);
			}
		},
		rewardAdCheck()
		{
			var selfy=this;
			try{
				self["LaggedAPI"]['GEvents']['reward'](function(success,showAdFn){
					//can show ad
					if(selfy._offlineMode){
					console.log("LaggedAPI: can play ad: ", success);
					}
					if(success){
						selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.RewardAdCanShow);
						showAdFnWrap=showAdFn;
					}
				},function(success){
					if(selfy._offlineMode){
					console.log("LaggedAPI: should trigger after reward ad plays: ", success);
					}
					if(success){
						selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.RewardAdSuccess);
					}else{
						selfy._trigger(globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds.RewardAdFailure);
					}
				});
				if(this._offlineMode){
				console.log("LaggedAPI: Check if reward ad is avaliable, will trigger Reward Ad Check if true");
				}
			}catch(e){
				console.log(e);
			}

		},
		rewardAdPlay()
		{
			try{
				showAdFnWrap();
				if(this._offlineMode){
				console.log("LaggedAPI: Playing reward ad");
				}
			}catch(e){
				console.log(e);
			}
		},
		SaveAchievement(award)
		{
			try{
			if(this._savedAchs.indexOf(award) > -1){

				console.log('LaggedAPI: achievement already saved, skip ', award);

			}else{
			var ach_numb=[];
			ach_numb.push(award);
			this._savedAchs.push(award);

			self["LaggedAPI"]["Achievements"]["save"](ach_numb, function(response) {
				console.log(response);
			});


			// LaggedAPI['Achievements'].save(ach_numb, function(response) {
			// if(response.success) {
			// console.log('achievement saved')
			// // note that we could still have a failure errorcode here when the player
			// // already has an achievement
			// }else {
			// console.log(response.errormsg);
			// }
			// });

			if(this._offlineMode){
				console.log('LaggedAPI: save achievement ', award);
			}
			}
			}catch(e){
				console.log(e);
			}
		},
		SaveScore(score,board)
		{

			try{
			var boardinfo={};
			boardinfo['score']=score;
			boardinfo['board']=board;

			self["LaggedAPI"]["Scores"]["save"](boardinfo, function(response) {
				console.log(response);
			});


			// LaggedAPI['Scores'].save(boardinfo, function(response) {
			// if(response.success) {
			// console.log('high score saved')
			// }else {
			// console.log(response.errormsg);
			// }
			// });

			}catch(e){
				console.log(e);
			}

			if(this._offlineMode){
			console.log('LaggedAPI: Save high score: ', score);
			console.log('LaggedAPI: Save to board id: ', board)
			}

		}
	};
}
