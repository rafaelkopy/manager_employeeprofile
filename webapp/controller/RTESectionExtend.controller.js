sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
    ], (ControllerExtension) => {
	"use strict";
    
        return ControllerExtension.extend("manageremployeeprofile.controller.RTESectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::RTESection--",
        override: {   
            onInit() { 
                 this.getView().byId(this._sectionPrefix + "richTextEditorId").attachReady(function(){
                    this.getView().byId(this._sectionPrefix + "richTextEditorId").addButtonGroup("styles").addButtonGroup("table")
                }.bind(this))            
              }
            }      
          });
        });  
    