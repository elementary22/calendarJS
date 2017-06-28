'use strict';

angular
    .module('calendar')
    .component('calendar', {
        templateUrl: `app/components/calendar/template/calendar.template.html`,
        controller: calendarController 
    });

    calendarController.$inject = ["monthRenderer"];
    function calendarController(monthRenderer){
        
        let vm = this;
        vm.month = monthRenderer.currentMonth;
        vm.previousMonth = monthRenderer.previousMonth;
        vm.nextMonth = monthRenderer.nextMonth;
    };