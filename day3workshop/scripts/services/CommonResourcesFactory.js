hrApp.factory('commonResourcesFactory', function () {
        var baseUrl = "http://hrapp-zth.rhcloud.com/hrapp/jobs";
        return {
           findAllDepartmentsUrl : baseUrl + "departments",
           findAllEmployeesUrl : baseUrl + "employees",
           findAllJobsUrl : baseUrl + "jobs",
           findOneDepartmentUrl : baseUrl + "departments/",
           findOneEmployeeUrl : baseUrl + "employees/",
           findOneJobUrl : baseUrl + "jobs/findOne/",
           deleteDepartmentUrl : baseUrl + "departments/",
           deleteEmployeeUrl : baseUrl + "employees/",
           deleteJobUrl : baseUrl + "jobs/delete/",
           addDepartmentUrl : baseUrl + "departments/",
           addEmployeeUrl : baseUrl + "employees/",
           addJobUrl : baseUrl + "jobs/create",
           editDepartmentUrl : baseUrl + "departments/",
           editEmployeeUrl : baseUrl + "employees/",
           editJobUrl : baseUrl + "jobs/edit"
        };
    }
);