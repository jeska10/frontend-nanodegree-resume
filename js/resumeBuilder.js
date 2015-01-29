/*  
    This file contains code the objects that control the data displayed in the resume.  Each object contains a display
    function to display the object attribute values.
*/

// bio object contains biographic information, including contact info   
var bio = {
    'name': 'John Eska',
    'role': 'Senior Applications Developer',
    'contacts': {
        'mobile' : '618-580-6238',
        'email' : 'johneska10@gmail.com',
        'github' : 'jeska10',
        'twitter': 'none',
        'location' : 'St. Louis'
    },
    'welcomeMessage': 'Welcome to my resume.',
    'skills': ['programming','java','jquery','javascript','oracle'],
    'bioPic': 'images/fry.jpg',
    display: function () {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);

        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);

        $('#topContacts').append(formattedMobile);
        $('#topContacts').append(formattedEmail);
        $('#topContacts').append(formattedGitHub);
        $('#topContacts').append(formattedLocation);
        $('#footerContacts').append(formattedMobile);
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedGitHub);
        $('#footerContacts').append(formattedLocation);
               
        $('#header').append(formattedWelcomeMsg);
        $('#header').append(HTMLskillsStart);

        if (bio.skills.length > 0) {
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace('%data%',bio.skills[i]);
                $('#skills').append(formattedSkill);
            }
        }
    }
}

// education object that contains educational information, including online courses.
var education = {
    'schools': [
        {
            'name': 'Eastern Illinois University',
            'location': 'Charleston, IL, US',
            'degree': 'None',
            'majors': ['General Studies'],
            'dates': '1989-1991',
            'url': 'http://www.eiu.edu'
        },
        {
            'name': 'Southern Illinois University',
            'location': 'Edwardsville, IL, US',
            'degree': 'BA',
            'majors': ['Business Administration'],
            'dates': '1991-1994',
            'url': 'http://www.siue.edu'
        },
        {
            'name': 'Southern Illinois University',
            'location': 'Edwardsville, IL, US',
            'degree': 'BA',
            'majors': ['MIS'],
            'dates': '1999-2002',
            'url': 'http://www.siue.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity',
            'date': '2014',
            'url': 'https://www.udacity.com/course/ud304'
        },
        {
            'title': 'Javascript Basics',
            'school': 'Udacity',
            'date': '2015',
            'url': 'https://www.udacity.com/course/ud804'
        },
        {
            'title': 'Intro to jQuery',
            'school': 'Udacity',
            'date': '2015',
            'url': 'https://www.udacity.com/course/ud245'
        }
    ],
    display: function() {
        if (education.schools.length > 0) {
            for (var i = 0; i < education.schools.length; i++) {
                $('#education').append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace('%data%',education.schools[i].name); 
                var formattedSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[i].degree);
                $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
                $('.education-entry:last').find('a').attr('href',education.schools[i].url);
                var formattedSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[i].location);
                $('.education-entry:last').append(formattedSchoolLocation);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%',education.schools[i].dates);
                $('.education-entry:last').append(formattedSchoolDates);
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[i].majors);
                $('.education-entry:last').append(formattedSchoolMajor);
            }

            $('#education').append(HTMLonlineClasses);
            for (var i = 0; i < education.onlineCourses.length; i++) {
                $('#education').append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%',education.onlineCourses[i].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%',education.onlineCourses[i].school);
                $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                $('.education-entry:last').find('a').attr('href',education.onlineCourses[i].url);
                var formattedOnlineDates = HTMLonlineDates.replace('%data%',education.onlineCourses[i].date);
                $('.education-entry:last').append(formattedOnlineDates);
                var formattedOnlineURL = HTMLonlineURL.replace('%data%',education.onlineCourses[i].url);
                $('.education-entry:last').append(formattedOnlineURL);
                $('.education-entry:last').find('a').attr('href',education.onlineCourses[i].url);
            }
        }
    }
}

// work object contains information related to work experience
var work = {
    'jobs': [
        {
            'employer': 'AT&T Wifi Services, Inc.',
            'title': 'Senior-Applications Developer',
            'location': 'St. Louis, MO',
            'dates': '2012-current',
            'description': 'Java developer'
        },
        {
            'employer': 'AT&T Wifi Services Inc.',
            'title': 'Professional-Applications Developer',
            'location': 'St. Louis, MO',
            'dates': '2009-2012',
            'description': 'Design, develop, and maintain database applications utilizing Oracle.  ' +
                           'Perform application DBA duties for applications utilizing ORACLE databases.'
        },
        {
            'employer': 'AT&T Services Inc.',
            'title': 'Senior Analyst',
            'location': 'St. Louis, MO',
            'dates': '2006-2009',
            'description': 'Designed, developed, and maintained database driven dynamic web applications to support ' +
                           'middleware developement using JSP and Servlets within the Struts framework.'
        }
    ],
    display: function() {
        if (work.jobs.length > 0) {
            for (var i = 0; i < work.jobs.length; i++) {
                $('#workExperience').append(HTMLworkStart);
                var formattedWorkEmployer = HTMLworkEmployer.replace('%data%',work.jobs[i].employer);
                var formattedWorkTitle = HTMLworkTitle.replace('%data%',work.jobs[i].title);
                $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
                var formattedWorkDates = HTMLworkDates.replace('%data%',work.jobs[i].dates);
                $('.work-entry:last').append(formattedWorkDates);
                var formattedWorkLocation = HTMLworkLocation.replace('%data%',work.jobs[i].location);
                $('.work-entry:last').append(formattedWorkLocation);
                var formattedWorkDescription = HTMLworkDescription.replace('%data%',work.jobs[i].description);
                $('.work-entry:last').append(formattedWorkDescription);
            }
        }
    }
}

// the projects object contains information related to projects completed.
var projects = {
    'projects': [
        {
            'title': 'Sample Project 1',
            'dates': '2013',
            'description': 'Sample project 1 that did something.',
            'images': ['http://placehold.it/350x150','http://placehold.it/350x150']
        },
        {
            'title': 'Sample Project 2',
            'dates': '2014',
            'description': 'Sample project 2 that did something.',
            'images': ['http://placehold.it/350x150','http://placehold.it/350x150']
        },
        {
            'title': 'Sample Project 3',
            'dates': '2015',
            'description': 'Sample project 3 that did something.',
            'images': ['http:/placehold.it/350x150','http://placehold.it/350x150']
        }
    ],
    display: function() {

        if (projects.projects.length > 0) {
            for (var i = 0; i < projects.projects.length; i++) {
                $('#projects').append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace('%data%',projects.projects[i].title);
                $('.project-entry:last').append(formattedProjectTitle);
                var formattedProjectDates = HTMLprojectDates.replace('%data%',projects.projects[i].dates);
                $('.project-entry:last').append(formattedProjectDates);
                var formattedProjectDescription = HTMLprojectDescription.replace('%data%',projects.projects[i].description);
                $('.project-entry:last').append(formattedProjectDescription);
                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    console.log(projects.projects[i].images[j]);
                    var formattedProjectImage = HTMLprojectImage.replace('%data%',projects.projects[i].images[j]);
                    $('.project-entry:last').append(formattedProjectImage);
                }
            }
        }
    }
}

var map = {
    display: function() {
        //place map on page
        $('#mapDiv').append(googleMap);
    }
}

//display resume sections
bio.display();
education.display();
work.display();
projects.display();
map.display();

