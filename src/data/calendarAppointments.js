
const calendarAppointments = 
  [{month: "May",
  year: 2025,
  days: [
    {
      date: 25,
      times: [{time:"10:00",selected:false,upcoming:false},{time:"12:00",selected:false,upcoming:false}],
    },
    {
      date: 26,
      times: [{time:"09:00",selected:true,upcoming:false},{time:"12:00",selected:false,upcoming:false}],
    },
    {
      date: 27,
      // times: ["09:00", "13:00"],
       times: [{time:"09:00",selected:false,upcoming:false},{time:"13:00",selected:false,upcoming:false}],
    },
    {
      date: 28,
     // times: ["11:00", "14:00"],
      times: [{time:"08:00",selected:false,upcoming:true},{time:"10:30",selected:false,upcoming:true}],
    },
    {
      date: 29,
      //times: ["12:00", "15:00"],
      times: [{time:"12:00",selected:false,upcoming:false},{time:"15:00",selected:false,upcoming:false}],
    },
    {
      date: 30,
      // times: ["09:00", "11:00"],
      times: [{time:"09:00",selected:false,upcoming:true},{time:"01:00",selected:false,upcoming:true}],
    },
    {
      date: 31,
      // times: ["09:00", "11:00"],
       times: [{time:"09:00",selected:false,upcoming:false},{time:"11:00",selected:false,upcoming:false}],
    },
  ],
  appointmentDetails: [
    {
      title: "Dentist",
      time: "09:00–11:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00–12:00",
      doctor: "Dr. Kevin Djones",
      icon: "💪",
    },
  ]}]


export default calendarAppointments;
