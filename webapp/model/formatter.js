sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
		
			switch (sStatus) {
				case "A":
					return "A STATUS";
				case "B":
						return "B STATUS";
				case "C":
						return "C STATUS";
				default:
					return sStatus;
			}
		}
	};
});