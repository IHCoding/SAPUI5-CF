/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["SAPUI5_CF/SAPUI5CFLaunchpad/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
