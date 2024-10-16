sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
    ], (ControllerExtension, Filter, FilterOperator) => {
	"use strict";
    
        return ControllerExtension.extend("manageremployeeprofile.controller.SkillSectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::SkillSection--",
        override: {   
            onInit() { 
                this.getView().byId(this._sectionPrefix + "gridListId");
            },
            onAfterRendering() {
               const SkillsView = this.getView().byId(this._sectionPrefix + "gridListId");

//               const Routing = ItemsBinding.getPr

               const ItemsBinding = SkillsView.getBinding("items");
               ItemsBinding.filter(new Filter({ path: 'EmployeeId', operator: FilterOperator.EQ , value1: '7dc9de58-3904-1edf-8ab2-04e6f6c9d632' }));
            }
           }      
          });
        });  
    