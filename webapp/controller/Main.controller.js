sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/training/model/type/ConnId"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.training.controller.Main", {

		onInit: function() {
			var oModel = new JSONModel();
			this.getView().setModel(oModel);
		}

	});

});