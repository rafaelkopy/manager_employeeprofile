sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'manageremployeeprofile/test/integration/FirstJourney',
		'manageremployeeprofile/test/integration/pages/EmployeeProfileManagerList',
		'manageremployeeprofile/test/integration/pages/EmployeeProfileManagerObjectPage',
		'manageremployeeprofile/test/integration/pages/ProfileEntryManagerObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeProfileManagerList, EmployeeProfileManagerObjectPage, ProfileEntryManagerObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('manageremployeeprofile') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeProfileManagerList: EmployeeProfileManagerList,
					onTheEmployeeProfileManagerObjectPage: EmployeeProfileManagerObjectPage,
					onTheProfileEntryManagerObjectPage: ProfileEntryManagerObjectPage
                }
            },
            opaJourney.run
        );
    }
);