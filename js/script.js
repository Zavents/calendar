$(document).ready(function () {
    const yearDropdown = $('<select id="yearDropdown"></select>');
    const monthDropdown = $('<select id="monthDropdown"></select>');
    
    const currentYear = new Date().getFullYear();
    const minYear = 2000;
    const maxYear = 2100;

    // Populate Year Dropdown
    for (let i = minYear; i <= maxYear; i++) {
        yearDropdown.append(new Option(i, i));
    }
    yearDropdown.val(currentYear);

    // Populate Month Dropdown
    moment.months().forEach((month, index) => {
        monthDropdown.append(new Option(month, index));
    });
    
    $('#calendar').fullCalendar({
        defaultView: 'month',
        header: {
            left: 'prev',
            center: 'customTitle, today',
            right: 'next'
        },
        customButtons: {
            customTitle: {
                text: 'Loading...',
                click: function () {
                    Swal.fire({
                        title: 'Select Date',
                        html: '<label for="eventDate">Date</label>' +
                              '<input type="date" id="eventDate" style="width: calc(100% - 20px); padding: 10px; box-sizing: border-box; border: 1px solid #6f807fa8;">',
                        confirmButtonText: 'Go',
                        preConfirm: () => {
                            return $('#eventDate').val();
                        }
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const selectedDate = result.value;
                            if (selectedDate) {
                                $('#calendar').fullCalendar('gotoDate', moment(selectedDate));
                            } else {
                                Swal.fire('Error', 'Please select a date.', 'error');
                            }
                        }
                    });
                }
            }
        },
        viewRender: function(view) {
            const [month, year] = view.title.split(' ');
            // Update dropdowns with current view values
            $('#monthDropdown').val(moment().month(month).format('M') - 1);
            $('#yearDropdown').val(year);
            
            $('.fc-customTitle-button').html(`
                <span class="fc-customTitle-month">${month}</span>
                <span class="fc-customTitle-year">${year}</span>
            `).on('click', function () {
                Swal.fire({
                    title: 'Select Month and Year',
                    html: `
                        <div style="display: flex; align-items: center; margin-bottom: 10px;">
                            <label for="monthDropdown" style="width: 100px;">Month</label>
                            ${monthDropdown[0].outerHTML}
                        </div>
                        <div style="display: flex; align-items: center;">
                            <label for="yearDropdown" style="width: 100px;">Year</label>
                            ${yearDropdown[0].outerHTML}
                        </div>
                    `,
                    confirmButtonText: 'Go',
                    preConfirm: () => {
                        const selectedYear = $('#yearDropdown').val();
                        const selectedMonth = $('#monthDropdown').val();
                        return { selectedYear, selectedMonth };
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        const { selectedYear, selectedMonth } = result.value;
                        if (selectedYear && selectedMonth) {
                            $('#calendar').fullCalendar('gotoDate', moment([selectedYear, selectedMonth]));
                        } else {
                            Swal.fire('Error', 'Please select a month and year.', 'error');
                        }
                    }
                });
            });
        },
        events: [   {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        },{
            title: 'Meeting sssssssssssssssssssssssssssssssss',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meeting',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meetinger  with kusanger ',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meeting',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meeting',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meeting',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },{
            title: 'Meeting',
            start: '2024-09-03T09:00:00',
            end: '2024-09-03T22:00:00'
        },
         {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
                start: '2024-08-26T09:00:00',
                end: '2024-08-26T22:00:00'
            }, {
                title: 'Meeting',
                start: '2024-08-26T09:00:00',
                end: '2024-08-26T22:00:00'
            }, {
                title: 'Meeting',
                start: '2024-08-26T09:00:00',
                end: '2024-08-26T22:00:00'
            }, {
                title: 'Meeting',
                start: '2024-08-26T09:00:00',
                end: '2024-08-26T22:00:00'
            }, {
                title: 'Meeting',
                start: '2024-08-26T09:00:00',
                end: '2024-08-26T22:00:00'
            }, {
                title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-26T09:00:00',
            end: '2024-08-26T22:00:00'
        }, {
            title: 'Meeting',
            start: '2024-08-27T14:00:00',
            end: '2024-08-27T22:00:00'
        },
        {
            title: 'Meeting',
            start: '2024-08-22T14:00:00',
            end: '2024-08-22T22:00:00'
        }],
        eventLimit: true,
        eventLimitText: "...",
        eventLimitClick: function (cellInfo, jsEvent) {
            showEventsForDate(cellInfo.date);
        },
        dayClick: function (date, jsEvent, view) {
            jsEvent.preventDefault();
            showEventsForDate(date);
        },
        eventClick: function (event, jsEvent, view) {
            jsEvent.preventDefault();
            showEventsForDate(event.start);
        },
        eventRender: function (event, element) {
            element.find('.fc-time').remove();
            element.find('.fc-title').text(event.title);
        }
    });

    // Dropdown change event listeners
    $('#yearDropdown, #monthDropdown').on('change', function () {
        const selectedYear = $('#yearDropdown').val();
        const selectedMonth = $('#monthDropdown').val();
        $('#calendar').fullCalendar('gotoDate', moment([selectedYear, selectedMonth]));
    });

    function showEventsForDate(date) {
        var events = $('#calendar').fullCalendar('clientEvents', function (event) {
            return moment(event.start).isSame(date, 'day');
        });
    
        var formattedDate = moment(date).format('DD MMMM YYYY');
        var eventList = $('<div class="fc-event-list"></div>');
    
        events.forEach(function (event) {
            
            var eventStartTime = moment(event.start).format('hh:mm A');
            var eventEndTime = event.end ? moment(event.end).format('hh:mm A') : 'No end time';
            var eventItem = $('<div class="event-details" style="cursor: pointer; padding: 10px; border: 1px solid #ddd; margin-bottom: 5px; display: flex; align-items: center;"></div>');
            var timeDetails = $('<div class="event-time" style="white-space: pre; font-size: 10px;"></div>').text(`${eventStartTime}\n${eventEndTime}`);
            var description = $('<div class="event-description" style="flex-grow: 1;font-size: 14px;"></div>').text(event.title);
            var removeButton = $('<div style="color: red; margin-left: 10px; cursor: pointer;">X</div>');
    
            eventItem.append(timeDetails).append(description).append(removeButton);
            eventList.append(eventItem);
    
            removeButton.on('click', function () {
                $('#calendar').fullCalendar('removeEvents', event._id);
                eventItem.remove();
            });
        });
    
        if (events.length === 0) {
            eventList.append('<p>There is No Event yet...</p>');
        }
    
        // Determine the current mode (dark or light) based on data-theme attribute
        var isDarkMode = $('html').attr('data-theme') === 'dark';
    
        // Set the image source based on the mode
        var iconSrc = isDarkMode ? 'https://magang.webby.digital/wildan/calendar/assets/calendar-dark.png' : 'https://magang.webby.digital/wildan/calendar/assets/calendar-white.png';
        
        // Add the image using the <img> tag
        var formattedDateWithImage = `<img class="jam" src="${iconSrc}" alt="Date Icon" style="width: 15px; padding-left: 4px; vertical-align: middle;"> ${formattedDate} `;
    
        Swal.fire({
            title: formattedDateWithImage,
            html: eventList.prop('outerHTML'),
            width: '90%',
            confirmButtonText: 'Close',
            focusConfirm: false,
            didOpen: () => {
                Swal.getConfirmButton().blur();
            }
        });
    }
    function updateDropdowns() {
        const currentMoment = $('#calendar').fullCalendar('getDate');
        $('#yearDropdown').val(currentMoment.year());
        $('#monthDropdown').val(currentMoment.month());
    }

});

    // $('#addEventIcon').on('click', function () {
    //     Swal.fire({
    //         title: 'Add New Event',
    //         html:
    //             '<input type="text" id="eventTitle" placeholder="Event Title" style="color: black; width: calc(100% - 20px); padding: 10px; box-sizing: border-box; margin-bottom: 10px;">' +
    //             '<input type="date" id="eventDate" style=" color: black; width: calc(100% - 20px); padding: 10px; box-sizing: border-box; margin-bottom: 10px;">' +
    //             '<label for="eventStartTime" style="color: white;">Start Time</label>' +
    //             '<input type="time" id="eventStartTime" placeholder="Start Time" style="width: calc(100% - 20px); padding: 10px; box-sizing: border-box; margin-bottom: 10px;">' +
    //             '<label for="eventEndTime" style="color: black;">End Time</label>' +
    //             '<input type="time" id="eventEndTime" placeholder="End Time" style="width: calc(100% - 20px); padding: 10px; box-sizing: border-box; margin-bottom: 10px;">',
    //         showCancelButton: true,
    //         confirmButtonText: 'Add Event',
    //         cancelButtonText: 'Close',
    //         preConfirm: () => {
    //             const title = $('#eventTitle').val();
    //             const date = $('#eventDate').val();
    //             const startTime = $('#eventStartTime').val();
    //             const endTime = $('#eventEndTime').val();
    //             return { title, date, startTime, endTime };
    //         }
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             const { title, date, startTime, endTime } = result.value;

    //             if (title && date && startTime && endTime) {
    //                 const eventStart = moment(${date}T${startTime}).format();
    //                 const eventEnd = moment(${date}T${endTime}).format();

    //                 if (moment(eventEnd).isBefore(eventStart)) {
    //                     Swal.fire('Error', 'End time must be after start time.', 'error');
    //                     return;
    //                 }

    //                 $('#calendar').fullCalendar('renderEvent', {
    //                     title: title,
    //                     start: eventStart,
    //                     end: eventEnd,
    //                     allDay: false
    //                 }, true);
    //             } else {
    //                 Swal.fire('Error', 'Please provide a title, date, start time, and end time for the event.', 'error');
    //             }
    //         }
    //     });
    // });
