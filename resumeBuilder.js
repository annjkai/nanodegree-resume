var bio = {
    "name": "Annika Kaiser",
    "role": "Frontend Developer",
    "contacts": {
        "mobile": "0152 5597 0220",
        "email": "annika.kaiser@gmail.com",
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
            "degree": "BA (Hons)",
            "major": ["Linguistics"],
            "dates": "2005"
        }
    ],
    "onlineCourses": [
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

displayWork();


/*each of these functions builds up to the for loop - they call a projectIndex variable. the console.logs are to test*/
function getTitle(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].title);

}

function getDescription(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].description);
}

function getDates(args) {
    var projectIndex = args;
    console.log(projects.projects[projectIndex].dates);
}

/*the displayProject function which allows the for loop to execute*/
function displayProject() {
    //appeld HTMLprojectStart before running the for loop
    $("#projects").append(HTMLprojectStart);

    /*for loop which checks how many objects there are (2) and calls the values*/
    for (i = 0; i < projects.projects.length; i++) {

        //I used this to check whether I could still get the plain Jane title printed out
        //var unformattedTitle = getTitle(i);

        /*each item gets formatted and the data in it gets replaced as the for loop runs*/
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        console.log(formattedProjectTitle);

        /*add each of the formatted variables in order*/
        $(".project-entry:last").append(formattedProjectTitle).append(formattedProjectDates).append(formattedProjectDescription);
    }
}
//throw each project on the page
displayProject();



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


function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);


