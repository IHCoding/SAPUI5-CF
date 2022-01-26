sap.ui.define(
    ["sap/ui/test/Opa5"],
    /**
     * @param {typeof sap.ui.test.Opa5} Opa5
     */
    function (Opa5) {
        "use strict";

        return Opa5.extend("SAPUI5_CF.SAPUI5CFLaunchpad.test.integration.arrangements.Startup", {
            iStartMyApp: function () {
                this.iStartMyUIComponent({
                    componentConfig: {
                        name: "SAPUI5_CF.SAPUI5CFLaunchpad",
                        async: true,
                        manifest: true,
                    },
                });
            },
        });
    }
);
