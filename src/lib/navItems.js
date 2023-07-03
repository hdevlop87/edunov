export const navItems = [
    {
        name: "dashboard",
        label: "Dashboard",
        icon: "bxs:dashboard",
        route: "/dashboard",
    },
    //=======================================================//
    {
        name: "students",
        label: "Students",
        icon: "clarity:users-solid",
        route: "/dashboard/students",
        allowedRoles: ['admin','teacher'],
        subMenu: [
            {
                name: "studentsDetails",
                label: "Students Details",
                icon: "clarity:users-solid",
                route: "/dashboard/students",
                allowedRoles: ['admin','teacher']
            },
            {
                name: "studentsAdd",
                label: "Students Add",
                icon: "clarity:users-solid",
                route: "/dashboard/students/add",
                allowedRoles: ['admin']
            },
        ]
    },
    //=======================================================//
    {
        name: "teachers",
        label: "Teachers",
        icon: "fa6-solid:user-tie",
        route: "/dashboard/teachers",
        allowedRoles: ['admin', 'teacher'],
        subMenu: [
            {
                name: "teachersDetails",
                label: "Teachers Details",
                icon: "clarity:users-solid",
                route: "/dashboard/teachers",
                allowedRoles: ['admin','teacher']
            },
            {
                name: "teachersAdd",
                label: "Teachers Add",
                icon: "clarity:users-solid",
                route: "/dashboard/teachers/add",
                allowedRoles: ['admin']
            },
        ]
    },
    //=======================================================//
    {
        name: "parents",
        label: "Parents",
        icon: "foundation:torsos-female-male",
        route: "/dashboard/parents",
        allowedRoles: ['admin', 'teacher'],
        subMenu: [
            {
                name: "parentsDetails",
                label: "Parents Details",
                icon: "foundation:torsos-female-male",
                route: "/dashboard/parents",
                allowedRoles: ['admin', 'teacher']
            },
            {
                name: "parentsAdd",
                label: "Parents Add",
                icon: "foundation:torsos-female-male",
                route: "/dashboard/parents/add",
                allowedRoles: ['admin']
            },
        ]
    },
    //=======================================================//
    {
        name: "staff",
        label: "Staff",
        icon: "ph:users-fill",
        route: "/dashboard/staff",
        allowedRoles: ['admin', 'teacher'],
        subMenu: [
            {
                name: "staffDetails",
                label: "Staff Details",
                icon: "ph:users-fill",
                route: "/dashboard/staff",
                allowedRoles: ['admin', 'teacher']
            },
            {
                name: "staffAdd",
                label: "Staff Add",
                icon: "ph:users-fill",
                route: "/dashboard/staff/add",
                allowedRoles: ['admin']
            },
        ]
    },
    //=======================================================//
    {
        name: "attendances",
        label: "Attendances",
        icon: "fluent:clipboard-task-list-rtl-24-filled",
        route: "/dashboard/attendances",
        allowedRoles: ['admin', 'teacher'],
        subMenu: [
            {
                name: "attendancesDetails",
                label: "Attendance Details",
                icon: "fluent:clipboard-task-list-rtl-24-filled",
                route: "/dashboard/attendances",
                allowedRoles: ['admin', 'teacher']
            },
            {
                name: "attendancesAdd",
                label: "Add Attendance",
                icon: "fluent:clipboard-task-list-rtl-24-filled",
                route: "/dashboard/attendances/add",
                allowedRoles: ['admin', 'teacher']
            },
        ]
    },
    //=======================================================//
    {
        name: "exam",
        label: "Exam",
        icon: "healthicons:i-exam-multiple-choice",
        route: "/dashboard/exam",
        subMenu: [
            {
                name: "examDetails",
                label: "Exam Details",
                icon: "clarity:users-solid",
                route: "/dashboard/exam",
                allowedRoles: ['admin', 'teacher']
            },
            {
                name: "examAdd",
                label: "Exam Add",
                icon: "clarity:users-solid",
                route: "/dashboard/exam/add",
                allowedRoles: ['admin', 'teacher']
            },
        ]
    },
    {
        name: "homework",
        label: "Homework",
        icon: "ion:book",
        route: "/dashboard/homework",
        allowedRoles: ['teacher'],
    },
    {
        name: "grades",
        label: "Grades",
        icon: "material-symbols:add-notes-sharp",
        route: "/dashboard/grades",
        allowedRoles: ['teacher'],
    },
    {
        name: "timetable",
        label: "Timetable",
        icon: "mdi:timetable",
        route: "/dashboard/timetable",
        allowedRoles: ['teacher'],
    },
    {
        name: "assignments",
        label: "Assignments",
        icon: "basil:book-solid",
        route: "/dashboard/assignments",
        allowedRoles: ['teacher'],
    },
    {
        name: "calendar",
        label: "Calendar",
        icon: "ant-design:calendar-filled",
        route: "/dashboard/calendar",
        allowedRoles: ['admin', 'teacher', 'student'],
    },
    //=======================================================//
    // {
    //     name: "class",
    //     label: "Class",
    //     icon: "ph:chalkboard-teacher-fill",
    //     route: "/dashboard/class",
    // },
    // //=======================================================//
    // {
    //     name: "subject",
    //     label: "Subject",
    //     icon: "wpf:books",
    //     route: "/dashboard/subject",
    // },
    //=======================================================//
    // {
    //     name: "feesCollection",
    //     label: "Fees",
    //     icon: "fluent:money-hand-24-filled",
    //     route: "/dashboard/fees-collection",
    // },
    // {
    //     name: "transport",
    //     label: "Transport",
    //     icon: "bxs:bus-school",
    //     route: "/dashboard/transport",
    // },

];
