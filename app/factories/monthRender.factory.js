angular
    .module('app')
    .factory('monthRenderer', function(){

        let date = moment(),
            month = {};

        function monthRender(data){

            month.name = moment(date).month(data).format("MMMM");
            month.year = moment(date).month(data).year();
            month.days = moment(date).month(data).daysInMonth();
            month.weeks = [];

            let firstWeek = moment(date).month(data).startOf('month').week(),
                lastWeek = moment(date).month(data).endOf('month').week();

            switch (month.name) {

                case "December":
                    lastWeek = 53;
                    break;
                default:
                    break;
            };

            if ( lastWeek - firstWeek < 5 ) {
                lastWeek += 1;
            };

            for ( let i = firstWeek; i <= lastWeek; i++ ) {

                let firstDay = moment(date).month(data).week(i).startOf('week'),
                    lastDay = moment(date).month(data).week(i).endOf('week');

                let day = firstDay,
                    week = [];

                while (day <= lastDay) {
                    week.push({
                        date : day.date(),
                        month : moment().month(day.month()).format("MMM"),
                        year : day.year(),
                        isCurrentMonth : day.month() == moment(date).month(),
                        isToday : day.month() == moment().month()
                                && day.date() == moment().date()
                                && day.year() == moment().year()
                    });
                    day = day.clone().add(1,"d");
                };

                month.weeks.push(week);
            };
        }

        monthRender(date.month());


        function nextMonth(){
        date = date.clone().add(1,"M");
        monthRender(date.month());
        };

        function previousMonth(){
        date = date.clone().subtract(1,"M");
        monthRender(date.month());
        };
        
        return {
            currentMonth: month,

            previousMonth(){
                date = date.clone().subtract(1,"M");
                monthRender(date.month());
            },
            
            nextMonth(){
                date = date.clone().add(1,"M");
                monthRender(date.month());
            }
        }
    });