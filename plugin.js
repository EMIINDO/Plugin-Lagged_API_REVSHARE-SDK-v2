"use strict";
// Porting BY EMI INDO with c3addon-ide-plus
{
    const PLUGIN_ID = "Lagged_API_REVSHARE";
    // callMap Deprecated const PLUGIN_VERSION = "1.0.3";
    const PLUGIN_CATEGORY = "general";

    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Lagged_API_REVSHARE = class MyCustomPlugin extends SDK.IPluginBase {
        constructor() {
            super(PLUGIN_ID);

            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());

            this._info.SetName(globalThis.lang(".name"));
            this._info.SetDescription(globalThis.lang(".description"));
            // callMap Deprecated this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("Lagged");
            this._info.SetHelpUrl(globalThis.lang(".help-url"));
            this._info.SetRuntimeModuleMainScript("c3runtime/main.js");
            this._info.SetIsSingleGlobal(true);

            // Support C3 runtimes
            this._info.SetSupportedRuntimes(["c3"]);

            SDK.Lang.PushContext(".properties");

            // this._info.SetProperties([
            // 	new SDK.PluginProperty("text", "game-id", "")
            // ]);

            SDK.Lang.PopContext();		// .properties

            SDK.Lang.PopContext();
        }
    };

    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
