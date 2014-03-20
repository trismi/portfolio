App = Ember.Application.create({LOG_TRANSITIONS:true});

App.Router.map(function() {
  // put your routes here
  this.resource("resume");
  this.resource("projects",function()
  	{
  		this.resource("project", {path: "/:project_id"});
  	});
  this.route("contact");
});

App.ResumeRoute = Ember.Route.extend(
	{
		model : function()
		{
			return App.RESUME;
		}
	}
);

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
		"id" : 1,
		"name" : "Project 1",
		"image" : 'images/project1.jpg',
		"description" : "This is the first project"
	},
	{
		"id" : 2,
		"name" : "Project 2",
		"image" : 'images/project2.jpg',
		"description" : "This is the second project"
	},
	{
		"id" : 3,
		"name" : "Project 3",
		"image" : 'images/project3.jpg',
		"description" : "This is the third project"
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