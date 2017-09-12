var bio = {
    "name": "Annika Kaiser",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "redacted",
        "email": "redacted",
        "github": "annjkai",
        "location": "Leipzig"
    },
    "welcomeMessage": "Welcome to this here page",
    "skills": ["JavaScript, CSS3, HTML5", "Java, XML", "Project management", "Translation"],
    "biopic": "images/fry.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Self-employed",
            "title": "Frontend Developer",
            "location": "Leipzig",
            "dates": "July 2017 - now",
            "description": "Aspiring frontend developer with a good foundation in Java, XML, CSS3, HTML5" +
            " and JavaScript."
        },
        {
            "employer": "ICC Sprachinstitut",
            "title": "Project Manager IdA III",
            "location": "Leipzig",
            "dates": "October 2016 - June 2017",
            "description": "Project manager and language teacher for participants doing a 9-week internship abroad."
        },
        {
            "employer": "Wohanka",
            "title": "Junior Proofreader",
            "location": "Leipzig",
            "dates": "July 2015 - September 2016",
            "description": "Proofreader for texts translated into English from German and Dutch with a focus on " +
            "marketing and legal texts."
        },
        {
            "employer": "Freelance",
            "title": "Business English Instructor",
            "location": "Leipzig",
            "dates": "September 2012 - June 2015",
            "description": "Language and business skills instructor for adults learning English in a professional context."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Miwok",
            "dates": "April 2017",
            "description": "A language-learning Android app built based on the Udacity Android for Beginners course.",
            "images": ""
        },
        {
            "title": "My Resume",
            "dates": "June 2017",
            "description": "A simple Android app which displays a dynamic, user-friendly resume.",
            "images": ""
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Calgary",
            "location": "Calgary, AB",
            "degree": "BA (Hons) Linguistics",
            "major": ["Linguistics"],
            "dates": "2005 - 2010"
        }
    ],
    "onlineClasses": [
        {
            "title": "Web Development Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": ""
        },
        {
            "title": "Android for Beginners",
            "school": "Udacity",
            "dates": "2016-2017",
            "url": ""
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.contacts.biopic);


$("#header").append(formattedName).append(formattedRole).append(formattedMobile).append(formattedEmail)
    .append(formattedGithub).append(formattedLocation).append(formattedBiopic);

if (bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}


/*Work function using a for loop*/
function displayWork() {
    //append HTLworkStart before running the for loop
    $("#workExperience").append(HTMLworkStart);

    /*for loop runs through the object and checks how many total jobs are available (4)*/
    for (i = 0; i < work.jobs.length; i++) {

        //var unformattedWorkTitle = getWorkTitle(i);

        /*the employer name and job title get formatted and then added together*/
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);

        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        /*the rest of the data gets formatted seperately from the title and employer*/
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        /*test to make the content shows up where it's suppsed to*/
        //console.log(formattedWorkTitle);

        /*add each of the last formatted variables in order*/
        $(".work-entry:last").append(formattedWorkDates)
            .append(formattedWorkLocation).append(formattedWorkDescription);
    }
}

displayWork();

/* This is the old Work function using a for in loop
function displayWork() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for (job in work.jobs) {

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            var formattedJobInfo = formattedDates + formattedDescription;
            $(".work-entry:last").append(formattedJobInfo);
        }
    }
}

displayWork(); */


/*these functions are not necessary but they helped me test whether the loop was working
function getProjectTitle(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].title);
}

function getProjectDescription(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].description);
}

function getProjectDates(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].dates);
}*/

/*the displayProject function which allows the for loop to execute*/
function displayProject() {
    //append HTMLprojectStart before running the for loop
    $("#projects").append(HTMLprojectStart);

    /*for loop which checks how many objects there are (2) and calls the values*/
    for (i = 0; i < projects.projects.length; i++) {

        //I used this to check whether I could still get the plain Jane title printed out
        //var unformattedTitle = getTitle(i);

        /*each item gets formatted and the data in it gets replaced as the for loop runs*/
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);

        /*this checks whether the desired value prints in the desired spot*/
        //console.log(formattedProjectTitle);

        /*add each of the formatted variables in order*/
        $(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription);
    }
}

//throw each project on the page
displayProject();

/*old education function
function displayEducation() {

    if (education.schools.length > 0) {

        $("#education").append(HTMLschoolStart);

        for (education in education.schools) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[education].name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[education].location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[education].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[education].major);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.school[education].dates);

            var formattedEducationInfo = formattedSchoolName + formattedSchoolLocation;

            $(".education-entry:last").append(formattedEducationInfo);

        }
    }
}

displayEducation();
*/

function displayEducation() {
    $("#education").append(HTMLschoolStart);

    for (i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);

        var formattedSchoolTitle = formattedSchoolName + formattedSchoolDegree;

        $(".education-entry:last").append(formattedSchoolTitle);

        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

        $(".education-entry:last").append(formattedSchoolDates).append(formattedSchoolLocation)
            .append(formattedSchoolMajor);
    }

    for (i = 0; i < education.onlineClasses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[i].school);

        var formattedOnlineTitleInfo = formattedOnlineTitle + formattedOnlineSchool;

        $(".education-entry:last").append(formattedOnlineTitleInfo);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[i].url);

        $(".education-entry:last").append(formattedOnlineDates).append(formattedOnlineURL);
    }
}

displayEducation();

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


