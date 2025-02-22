"use strict";

{
	globalThis.C3.Plugins.Lagged_API_REVSHARE.Cnds =
	{
		ResumeGame() {
			console.log("Lagged API: resume game");
			return true;
		},
		PauseGame() {
			console.log("Lagged API: pause game");
			return true;
		},
		RewardAdCanShow() {
			console.log("Lagged API: can show reward ad");
			return true;
		},
		RewardAdSuccess() {
			console.log("Lagged API: reward ad success, give user reward");
			return true;
		},
		RewardAdFailure() {
			console.log("Lagged API: reward ad failure, do not give user reward");
			return true;
		}

	};
}
