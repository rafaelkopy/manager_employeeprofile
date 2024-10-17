sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel"
    ], (ControllerExtension, Filter, FilterOperator, JSONModel) => {
	"use strict";
    
        return ControllerExtension.extend("manageremployeeprofile.controller.SkillSectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::SkillSection--",
        override: {   
            onInit() { 
                this.getView().byId(this._sectionPrefix + "gridListId");
                this.getView().setModel(
                    new JSONModel({
                        id: null,
                    }),
                    "customView"
                )
            },
            onAfterRendering() {
               const SkillsView = this.getView().byId(this._sectionPrefix + "gridListId");

//               const Routing = ItemsBinding.getPr

               const ItemsBinding = SkillsView.getBinding("items");
               const id = this.getView().getModel("customView").getProperty("/id")
               ItemsBinding.filter(new Filter({ path: 'EmployeeId', operator: FilterOperator.EQ , value1: '7dc9de58-3904-1edf-8ab2-04e6f6c9d632' }));
            },
              routing: {
                async onAfterBinding() {
                    this.getView().getModel("customView").setProperty("/id", (await this.getView().getBindingContext().requestProperty("EmployeeId")) )

                }
              }
           }      
          });
        });  
    