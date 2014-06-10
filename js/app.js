App = Ember.Application.create({LOG_TRANSITIONS:true});

App.Router.map(function() {
  // put your routes here
  this.resource("resume");
  this.resource("projects",function()
	{
		this.resource("project", {path: "/:id"});
	});
  this.route("contact");
});

App.ResumeRoute = Ember.Route.extend({
	model : function()
	{
		return App.RESUME;
	}
});

App.RESUME = 
[
	{	
		"label" : "Summary", 
		"data" : 
		[
			{
				"info" : "I enjoy building interactive, data-driven sites. My focus is on providing the end user with a smooth and intuitive experience, regardless of browsing environment or activity."			
			}
		]
	},
	{
		"label" : "Proficiencies",
		"data":
		[
			{
				"label" : "Technical",
				"info"	: 
				[
					"HTML, CSS, Javascript, XML, XSLT, Linux, Apache, MySQL, PHP, Java, AWS, Git, CMS, URL & DNS management, web hosting and analytics, debugging"
				]
			},
			{
				"label" : "Misc",
				"info"	: 
				[
					"Adobe Web Suite, MS Office Suite, PC, Mac, terminal"
				]
			},
			{
				"label" : "Personal",
				"info"	: 
				[
					"Detail oriented, fast learner, achieves deadlines, problem solver, strong written and verbal communication, communication between business and development teams"
				]
			}
		]
	},
	{
		"label" : "Experience",
		"data" : 
		[
			{
				"place":"Email and Web Development Manager, Responsys",
				"time" : "01/2013 - present",
				"info" : 
				[
					"My focus is to ensure our team of developers has the necessary training to complete projects that support our company’s continually evolving needs. I also hire to forecast, review team utilization, educate clients on best practices, and research emerging technologies as they may impact our clients."
				]
			},
			{
				"place":"Freelance",
				"time" : "Ongoing",
				"info" : 
				[
					"I pair HTML and CSS with a CMS called ExpressionEngine to create web sites that enable clients to update & control site content with no coding knowledge."
				]
			},
			{
				"place":"Senior Email and Web Developer, Responsys",
				"time" : "06/2011 – 12/2012",
				"info" : 
				[
					"I developed complex, hand-coded email campaigns, templates, landing pages, and microsites. I coached other team members and was technical lead on projects. I worked directly with our clients to discover their needs and created solutions to meet their goals. Notable projects: Interact Mobile Site with Oauth login and agenda/calendar system, REI Digital Catalog, Sees Christmas Sweepstakes."
				]
			},
			{
				"place":"Email and Web Developer, Responsys",
				"time" : "05/2010 – 06/2011",
				"info" : 
				[
					"I produced hand-coded HTML files from Photoshop files utilizing a combination of nested table structures and inline CSS. I tested files on multiple platforms, browsers, and email clients including Gmail, Yahoo, Hotmail, and AOL. I also created PHP template tools to speed up email production."
				]
			},
			{
				"place":"Programmer, University of Washington",
				"time" : "06/2009 – 05/2010",
				"info" : 
				[
					"On the iSante project I developed electronic medical record forms based loosely on the OpenMRS implementation, made UI updates in ExtJS, and updated our database. I also fixed numerous bugs. On the KCCARE project I helped plan algorithms and database maintenance and normalization. I updated and maintained the non-survey portions of the site, and completed monthly reports for demographic sets for the county."
				]
			}
		],
		"format" : "place-time"
	},
	{
		"label" : "Education",
		"data" : 
		[
			{
				"place": "University of Washington, Seattle",
				"time" : "2004 - 2009",
				"info": 
				[
					"B.S. in Informatics, with a focus on web development and computer science.",
					"B.A. in Mathematics"
				]
			}
		],
		"format" : "place-time"
	},
	{
		"label" : "References",
		"data":
		[
			{
				"info" : ["Available upon request"]			
			}
		]
	}
];

App.PROJECTS = 
[
	{
		"id" : "1",
		"navName" : "INTERACT 2012",
		"technology" : 
		[ 
			{"tech" : "PHP"},
			{"tech" : "MYSQL"}, 
			{"tech" : "CMS"}, 
			{"tech" : "OAUTH"}, 
			{"tech" : "HTML"}, 
			{"tech" : "CSS"}, 
			{"tech" : "JavaScript"}, 
			{"tech" : "JQuery"}
		],
		"fullName" : "Interact 2012 Mobile Site",
		"images" : 
		[
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_myagenda.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_speakers.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012.jpg'}
		],
		"description" : "The Interact 2012 mobile site was created for the Responsys (now Oracle) company conference, allowing attendees to browse event, speaker, and agenda information. Utilizing social media Oauth logins, users created personalized schedules from conference sessions. All of the content (speakers, agenda items, FAQ) was stored in a CMS that allowed admins to alter the content.",
		"role" : "Technical lead and developer"
	},
	{
		"id" : "2",
		"navName" : "REI DIGITAL CATALOG",
		"fullName" : "REI Adventures Digital Catalog",
		"role" : "Technical lead and developer",
		"technology" : 
		[ 
			{"tech" : "AWS"},
			{"tech" : "JSON"}, 
			{"tech" : "JAVASCRIPT"}, 
			{"tech" : "GOOGLEMAPS"}, 
			{"tech" : "HTML"}, 
			{"tech" : "CSS"}, 
			{"tech" : "JQUERY"}, 
			{"tech" : "PHP"}
		],
		"image" : 'images/project2.jpg',
		"description" : "The digital catalog was made for the REI Adventures group. They wanted an interactive site that engaged customers, portrayed their photography, had a mobile presence, lead generation, social sharing, also provided more feedback and metrics on what people were interested. My favorite part of the project was getting to choose and create the data format so that the catalog content was dynamically generated from the data file. That made it easy to update and change functionality for future iterations of this project. I also enjoyed setting up the website for scalability on AWS services."
	},
	{
		"id" : "3",
		"navName": "SEE'S CHRISTMAS SWEEPSTAKES",
		"fullName" : "See's Countdown to Christmas Sweepstakes",
		"image" : 'images/project3.jpg',
		"technology" : 
		[ 
			{"tech" : "AWS"},
			{"tech" : "PHP"}, 
			{"tech" : "MYSQL"}, 
			{"tech" : "CMS"}, 
			{"tech" : "HTML"}, 
			{"tech" : "CSS"}, 
			{"tech" : "JAVASCRIPT"}, 
			{"tech" : "JQUERY"}, 
			{"tech" : "PHP"}
		],
		"description" : "This project was to increase both customer engagement and the list size for See's Candies. It was a really great project to work on, with a great group of creative people. In the end, we came up with a sweepstakes that offered daily and grand prizes. Users needed to check back every day to see if they were daily prize winners; if they didn't win, they still received a fun piece of content. The content was composed of recipes, holiday to-dos, surveys, and Flash games presented in the form of an advent calendar, and was shareable across Facebook, Pinterest, and Twitter.",
		"role" : "Technical lead and developer"
	},
	{
		"id" : "4",
		"navName" : "ESPRESSO ELEGANCE",

		"technology" : 
		[ 
			{"tech" : "PHP"},
			{"tech" : "MYSQL"}, 
			{"tech" : "CMS"}, 
			{"tech" : "OAUTH"}, 
			{"tech" : "HTML"}, 
			{"tech" : "CSS"}, 
			{"tech" : "JavaScript"}, 
			{"tech" : "JQuery"}
		],
		"fullName" : "Espresso Elegance",
		"images" : 
		[
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_myagenda.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_speakers.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012.jpg'}
		],
		"description" : "The Interact 2012 mobile site was created for the Responsys (now Oracle) company conference, allowing attendees to browse event, speaker, and agenda information. Utilizing social media Oauth logins, it allowed users to browse and create personalized schedules from conference sessions. All of the content (speakers, agenda items, FAQ) was stored in a CMS that allowed admins to alter the content. ",
		"role" : "Technical lead and developer"
	},
	{
		"id" : "5",
		"navName" : "HIP YOGA",

		"technology" : 
		[ 
			{"tech" : "PHP"},
			{"tech" : "MYSQL"}, 
			{"tech" : "CMS"}, 
			{"tech" : "OAUTH"}, 
			{"tech" : "HTML"}, 
			{"tech" : "CSS"}, 
			{"tech" : "JavaScript"}, 
			{"tech" : "JQuery"}
		],
		"fullName" : "HIP Yoga",
		"images" : 
		[
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_myagenda.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_speakers.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012.jpg'}
		],
		"description" : "I worked with a team of designers to create a mobile site for our company conference. The mobile site was created as a way to browse and create personalized schedules from scheduled agenda items. All of the content (speakers, agenda items, FAQ) was stored in a CMS that allowed any user with access to alter the content. Agenda items could be saved to a personalized account that was keyed to a person's Twitter, LinkedIn, or Facebook login through the use of OAuth.",
		"role" : "Technical lead and developer"
	},
	{
		"id" : "6",
		"navName" : "RAINIER RESEARCH",

		"technology" : 
		[ 
			{"tech" : "HTML"},
			{"tech" : "CSS"}, 
			{"tech" : "JAVASCRIPT"}, 
			{"tech" : "JQUERY"}, 
			{"tech" : "EXPRESSION ENGINE"}, 
			{"tech" : "PHP"}
		],
		"fullName" : "Rainier Clinical Research",
		"images" : 
		[
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_myagenda.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012_speakers.jpg'},
			{'img' : 'images/projects/interact2012/Interact_Mobile_Web__CMS_03052012.jpg'}
		],
		"description" : "I worked with a team of designers to create a mobile site for our company conference. The mobile site was created as a way to browse and create personalized schedules from scheduled agenda items. All of the content (speakers, agenda items, FAQ) was stored in a CMS that allowed any user with access to alter the content. Agenda items could be saved to a personalized account that was keyed to a person's Twitter, LinkedIn, or Facebook login through the use of OAuth.",
		"role" : "Technical lead and developer"
	}
];
App.ProjectsRoute = Ember.Route.extend(
	{
		model: function()
		{
			return App.PROJECTS;
		}
	}
);
App.ProjectRoute = Ember.Route.extend({
	model: function(params)
	{
		return App.PROJECTS.findBy('id', params.id)

	}

});

App.ProjectsController = Ember.ArrayController.extend({
	actions: {
		thing: function(project){
			alert(project.name);
			console.log(project.name);
		}
	}
});


App.ClickableView = Ember.View.extend({
	click: function(evt)
	{
		alert("CLICKED");
		alert(evt);
		console.log(evt);
		console.log(this);
		alert(project.id);
//		console.log(this.element);
	},
	classNames: ["green", "blue"]

});

var v = Ember.View.create(
	{
		templateName: 'projects', 
		thing: function(evt){
			var attributes= evt.target.attributes;
        	console.log(attributes);
        	return false;
        }
	});


//App.Resume.
/*App.ResumeRoute = Ember.Route.extend({model: function(){return 'blue'}});
App.ContactRoute = Ember.Route.extend({model: function(){return 'blue'}});
App.ProjectsRoute = Ember.Route.extend({model: function(){return 'blue'}});
*/