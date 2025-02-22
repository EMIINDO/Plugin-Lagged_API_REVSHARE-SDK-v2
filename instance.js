"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.Lagged_API_REVSHARE;

    PLUGIN_CLASS.Instance = class MyCustomInstance extends SDK.IInstanceBase {
        constructor(sdkType, inst) {
            super(sdkType, inst);
        }

        Release() {
        }

        OnCreate() {

        }

        OnPropertyChanged(id, value) {
        }

        LoadC2Property(name, valueString) {
            return false;		// not handled
        }
    };
}
