sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast"], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("shop.Shopingcart.controller.Login", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf shop.Shopingcart.view.Login
		 */ //	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf shop.Shopingcart.view.Login
		 */ //	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf shop.Shopingcart.view.Login
		 */ //	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf shop.Shopingcart.view.Login
		 */ //	onExit: function() {
		//
		//	}
		/**
		 *@memberOf shop.Shopingcart.controller.Login
		 */
		action: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			var sUser = this.byId("user").getValue();
			if (sUser == "admin") {
				oRouter.navTo("Admin");
			}
			if (sUser === "user") {
				oRouter.navTo("Employee");
			} else {
				MessageToast.show("invalid user name or password");
			}

		}
	});
});