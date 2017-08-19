var bio = {
    name: "Hissah ALOTAIBI",
    role: "Software Developer",
    contacts: {
        mobile: "0507988228",
        email: "hassah-111@hotmail.com",
        github: "hotaibi",
        twitter: "@hassose",
        location: "An Nasim Al Gharbi, Riyadh"
    },
    welcomeMessage: "Welcom",
    skills: ["Programming languages", "Web Programming", "Database", "Use Linux operating system", "Use Microsoft software office efficiently", "Graphic Design"],
    biopic: "images/h-logo.png",
    display: function() {
        var formatedName = HTMLheaderName.replace("%data%", bio.name);
        var formatedRole = HTMLheaderRole.replace("%data%", bio.role);


        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var githup = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var Mylocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts, #footerContacts").append(mobile);
        $("#topContacts, #footerContacts").append(email);
        $("#topContacts, #footerContacts").append(githup);
        $("#topContacts, #footerContacts").append(twitter);
        $("#topContacts, #footerContacts").append(Mylocation);

        $("#header").prepend(formatedRole);
        $("#header").prepend(formatedName);


        var bioimg = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(bioimg);
        var welcomeMessageFormat = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcomeMessageFormat);
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (skill in bio.skills) {
                var skillFormatt = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(skillFormatt);
            }
        }

    }
};


var education = {
    schools: [{
            name: "King Saud University",
            location: "King Saud University, Riyadh",
            degree: "Master",
            majors: ["Computer Science"],
            dates: "2014-2017",
            url: "http://ksu.edu.sa/en/"
        },
        {
            name: "Al-Imam Muhammad bin Saud Islamic University",
            location: "Imam Muhammad Ibn Saud Islamic University, Riyadh",
            degree: "Bachelor",
            majors: ["Computer Science"],
            dates: "2008-2013",
            url: "https://imamu.edu.sa/en/Pages/default.aspx"
        }
    ],
    onlineCourses: [{
        title: "Information security awareness Training",
        school: "Deanship of Information Technology",
        dates: "Sep 2015 - Sep 2015",
        url: "https://imamu.edu.sa/en/Pages/default.aspx"
    }],
    display: function() {
        /* display all school */
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var titleFormat = HTMLschoolName.replace("%data%", education.schools[school].name);
            var urlformat = titleFormat.replace("#", education.schools[school].url);
            var degreeFormat = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var nameFormat = urlformat + degreeFormat;
            $(".education-entry:last").append(nameFormat);
            var datesFormat = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(datesFormat);
            var locationFormat = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(locationFormat);
            var majorsFormat = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(majorsFormat);
        }
        /* display all onlineCourses */
        if (education.onlineCourses.length > 0) {
            $(".education-entry:last").append(HTMLonlineClasses);
            for (course in education.onlineCourses) {


                var titleFormat = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                var urlformat = titleFormat.replace("#", education.onlineCourses[course].url);
                var schoolformat = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                var allTitleFormat = urlformat + schoolformat;
                $(".education-entry:last").append(allTitleFormat);
                var dateFormat = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                $(".education-entry:last").append(dateFormat);
                var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                $(".education-entry:last").append(url);

            }
        }


    }

};

var work = {
    jobs: [{
            employer: "Arcom Company",
            title: "Software Developer",
            location: "Olaya St, Riyadh ",
            dates: "Feb 2017 –Present",
            description: "Programming and developing dynamic website by using best practices and latest technology including (HTML, CSS, JavaScript, jQuery-Ajax,Vb.net, ASP.NET).\
            Maintain, debug and review existing website coded.\
             Build a database and write a complex query by SQL server. \
             Communicate with users and technical teams to collect requirements, decisions how solutions should be designed and implemented. \
             White-box testing and validating work."
        },
        {
            employer: "Arcom Company",
            title: "Systems Analyst",
            location: "Abi Dajanah, Al Mursalat, Riyadh  ",
            dates: "Jun 2015- Feb 2017",
            description: "System analysis including (User and system requirements- Use casesactivity diagram- Scenario- interfaces design) and documenting them. \
             Quality assuring of the system analysis. \
             Works closely with business users and team members to define business requirements"
        }
    ],

    display: function() {
        for (experience in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var employerFormat = HTMLworkEmployer.replace("%data%", work.jobs[experience].employer);
            var titleFormat = HTMLworkTitle.replace("%data%", work.jobs[experience].title);
            var emplyerTitleFormat = employerFormat + titleFormat;
            $(".work-entry:last").append(emplyerTitleFormat);
            var datesFormat = HTMLworkDates.replace("%data%", work.jobs[experience].dates);
            $(".work-entry:last").append(datesFormat);
            var descriptionFormat = HTMLworkDescription.replace("%data%", work.jobs[experience].description);
            $(".work-entry:last").append(descriptionFormat);

        }

    }
};
var projects = {
    projects: [{
            title: "Mawhiba website",
            dates: "Feb 2017 –Jun 2017",
            description: "Content management system was built for the Mawhiba Portal to e -Learning to manage and buy courses. \
            I am responsible for building the database using SQL Server, and the implementation of the site using asp.vb, HTML, JavaScript.",
            images: ["images/ibdaat.png"]
        },
        {
            title: "Biometric Usability Research Platform",
            dates: "Jan 2016 –Dec 2016",
            description: "This project aims to develop a system that combines sensors readings from brain, skin, and eye to measure usability and user experience. \
              I built Windows Application using C# and SQL Server",
            images: ["images/bur.png"]
        },
        {
            title: "EasyTrans",
            dates: "May 2015 –Jun 2015",
            description: "I design and implementation of EasyTrans, an accessible translation web application system for Blind Translators (BT) using PHP and MySQL",
            images: ["images/easytreans.png"]
        },
        {
            title: "FamoCity website",
            dates: "Jun 2014-Jun 2015",
            description: "A social networking site like Twitter. it also includes e- commerce. the website developed by ASP.Net, JavaScript, MVC, SQL Server",
            images: ["images/bur.png"]
        },
        {
            title: "Steganography Tool",
            dates: "Jan 2012 –Jan 2013",
            description: "The aim of this project is to develop system able to hide and retrieve the secret message hidden \
                    in Arabic or English text, image or video frames using Java.",
            images: ["images/bur.png"]
        }

    ],
    display: function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var titleFormat = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(titleFormat);
            var dateFormat = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(dateFormat);
            var descriptionFormat = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(descriptionFormat);
            if (projects.projects[project].images.length > 0) {

                for (image in projects.projects[project].images) {
                    var imageFormat = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                    $(".project-entry:last").append(imageFormat);
                }
            }
        }

    }
};
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
