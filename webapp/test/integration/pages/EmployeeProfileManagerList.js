sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'manageremployeeprofile',
            componentId: 'EmployeeProfileManagerList',
            contextPath: '/EmployeeProfileManager'
        },
        CustomPageDefinitions
    );
});