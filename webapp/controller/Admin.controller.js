sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"shop/Shopingcart/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("shop.Shopingcart.controller.Admin", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "Admin");
		},
		onselectjob: function (oEvent) {
			var oClicked = oEvent.getSource().getBindingContext("invoice").getObject();
			this.sPath=oEvent.getSource().getBindingContext("invoice").getPath();
			var oModel = new sap.ui.model.json.JSONModel(oClicked);
			this.getView().setModel(oModel);
		},
	/*	OnItemPress: function (oEvent) {

			//Get the Employee ID Selected 

			var oJobIdSelected = oEvent.getSource().getProperty("JobId");

			// Save the Employee ID Selected in This to use it later 

			this._oJobIdSelected = oJobIdSelected;

		},*/
		onEdit: function () {
			var oView = this.getView();
			var oDialog = oView.byId("helloDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "shop.Shopingcart.view.Dialog",this);
				oView.addDependent(oDialog);
			}

			oDialog.open();
		},
/*	onclose:function(){
				this.getView().byId("helloDialog").close();
		}*/
		edit:function(){
			var sJob = this.byId("eJobname").getValue();
			var sId = this.byId("eJobid").getValue();

			var sJobLoc = this.byId("eJobloc").getValue();
			var sLastdt = this.byId("eDate").getValue();
			var sVacancy = this.byId("eVacancy").getValue();
			var sCompany = this.byId("eCname").getValue();
			var sCompanyloc = this.byId("eCloc").getValue();
			var sCeo = this.byId("eCeo").getValue();
			
				var oJob = {};

			oJob = {

				"JobId": sId,
				"JobName": sJob,
				"companyName": sCompany,
				"ceo": sCeo,
				"Clocation": sCompanyloc,
				"jLocation": sJobLoc,
				"lastDate": sLastdt,
				"vacancy": sVacancy
			};
			var oModel=this.getView().getModel("invoice").getProperty("/Invoices");
			console.log(oModel);
			//var oClicked = oEvent.getSource().getBindingContext("invoice").getObject();
			var oModel=this.getView().getModel("invoice");
			var oJobPath = "/Invoice/" + sId;
			this.getView().getModel("invoice").setProperty(this.sPath,oJob);
			oModel.setProperty(oJobPath, oJob);
			this.getView().byId("helloDialog").close();
		},

		onCloseDialog: function () {
			var sJob = this.byId("jname").getValue();
			var sId = this.byId("jid").getValue();

			var sJobLoc = this.byId("jloc").getValue();
			var sLastdt = this.byId("date").getValue();
			var sVacancy = this.byId("vacancyNo").getValue();
			var sCompany = this.byId("cname").getValue();
			var sCompanyloc = this.byId("cloc").getValue();
			var sCeo = this.byId("ceo").getValue();

			var oJob = {};

			oJob = {

				"JobId": sId,
				"JobName": sJob,
				"companyName": sCompany,
				"ceo": sCeo,
				"Clocation": sCompanyloc,
				"jLocation": sJobLoc,
				"lastDate": sLastdt,
				"vacancy": sVacancy
			};

			//Get the json  
			var oModel=this.getView().getModel("invoice");
			var oProp = oModel.getProperty("/Invoices");
		oProp.push(oJob);
		oModel.setProperty("/Invoices",oProp);
		this.getView().byId("createDialog").close();
		
		},
		onAdd: function () {
			var oView = this.getView();
			var oDialog = oView.byId("createDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "shop.Shopingcart.view.Create", this);
				oView.addDependent(oDialog);
			}
			oDialog.open();
		},
		onDelete: function(){
				var aModel=this.getView().getModel("invoice").getProperty("/Invoices");
		},close:function(){
			this.getView().byId("createDialog").close();
				this.getView().byId("helloDialog").close();
		}

	});

});