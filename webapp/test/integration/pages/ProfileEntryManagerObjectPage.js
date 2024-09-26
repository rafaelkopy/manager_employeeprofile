sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'manageremployeeprofile',
            componentId: 'ProfileEntryManagerObjectPage',
            contextPath: '/EmployeeProfileManager/_ProfileEntry'
        },
        CustomPageDefinitions
    );
});