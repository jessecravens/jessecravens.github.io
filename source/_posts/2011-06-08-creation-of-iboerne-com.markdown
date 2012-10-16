---
layout: post
title: "Creation of iBoerne.com"
date: 2011-06-08 21:44:44 -0500
comments: true
categories: 
---
Creation of iBoerne.com
--------------------------------------------------------------------------------------------------
secret sauce
 - local domain name
 - transparent account creation
 - targeted Facebook ads
 - exceptional member experience/UI design
 - presence on all platforms iOS and Android


TAGLINES

Be Cool. Use iBoerne.com
iBoerne.com doesn't suck
events.iBoerne - Wuz Happenin?
iBoerne - keep up with Boerne

The simple way to keep up with friends, events, deals, rentals, etc. 

--------------------------------------------------------------------------------------------------

First lets talk Business concept and strategy:

So, I don't know what the hell I want IBoerne to be - what the hell does Boerne need?

Can you start a business and just see where it goes? Is that possible?
What would events.iBoerne be considered? - Content Provider?

Have an event? List it on events.iBoerne today. 
Screenscrape
Manual

Once traffic reaches a certain point begin to sell space - large events, festivals, etc
Very simple Application - but available on all platforms

--------------------------------------------------------------------------------------------------
What drives traffic?
Best online experience for EVENTS 

Start targeting ad

!!!! START SOMEWHERE
use events to get started

events.iBoerne - Wuz Happenin?
Superior online/mobile experience for Local Events
Download the iPhone/ Android app
Very simple App concept. 
http://visitmix.com/Articles/Web-Forms-for-People
USE brightkite as an example

Jesse Cravens of LokalLogik - creators of Local Social Mobile applications. 
LokalLogik Small Town Platform

NETWORK EFFECT!

--------------------------------------------------------------------------------------------------

Best online experience for DEALS / COUPONS 
coupons.iBoerne - Start Saving Now
Affiliate - Groupons, livingsocial?

--------------------------------------------------------------------------------------------------

iBoerne - Interactive Boerne by TastyAppz or LokalLogik Small Town Solutions (Social/Mobile/Local) - sociomobiloco
 - so what does this entail?

Concepts to test out - market research.

What is the appetite for MultiChannel Marketing solutions in Boerne?
Ping.fm

Retailers
Schools
Churches
Restaurants
Appointment Reminders
Promoters
Realtors

Start with One Feature like Events
Multiple Inputs
Screen Scrapers
Input Form
Integration with Facebook
Manual Entry by Admin


Audience Scope?
++++++
The domain is obviously limiting, but that might be ok. 
So - first I think town - LOCAL - SOCIAL - MOBILE 
Then I go regional. Central Texas, I think hill country visitor - more broad - all small towns in central texas - which changes the domain, 
Then my mind wanders to Domestic, and then International.

So theres also the notion that I could use this as an example Business.
And maybe the iBoerne app - or appsuite is the flagship products for a Consulting Business for Local Businesses.
That way the local scope will make sense to any small business owner in any Texas small town 

Much like Kuhl Yogurt - just another use case. 


?Feature Scope?
++++++

One place for what I need in Boerne 

events.iboerne.com - Events - am I the only one that wants to go to one place to see whats happening in Boerne?
rentals.iboerne.com - Rentals - I want to see all rentals in Boerne in one spot
coupons.iboerne.com - Coupons and Deals -  I want to save money, so does everyone else

TRANSPARENT Account creation and login

this stuff here sounds more like - lokallogik.com ---->
Stored Value Card Creation
Managed Multi-Channel Marketing Campaigns - SMS text, MMS, Social (Facebook and Twiter)

Random Acts of Refreshment - expands on gift card model
Sends purchased gift via social media

?Business Model?
++++++
Very targeted ad campaigns


?Technical?
++++++
Drupal vs Rails
Already moving forward with Rails  - not really wanting the Drupal PHP overhead. 
Id rather learn rails cuz Ill be learning on or the other.




--------------------------------------------------------------------------------------------------
Use an application generator template

rails new iboerne2 -m tmpls/railsApps/rails3-application-templates/rails3-mongoid-devise-template.rb -T -O -J

Once you’ve assembled the proper Gemfile, install the gems using bundle install
$ bundle install

rails s


For iboerne3 , I decided to not use the mongo install - due to event calendar but after understanding default test and fixtures, i opted for this template rails new APP_NAME -m https://raw.github.com/RailsApps/rails3-application-templates/master/rails3-devise-rspec-cucumber-template.rb -T


--------------------------------------------------------------------------------------------------
git init

Jesse-Cravenss-MacBook-Pro:iboerne jessecravens$ git init
Reinitialized existing Git repository in /Users/jessecravens/Codebase/rails_projects/iboerne/.git/

Jesse-Cravenss-MacBook-Pro:iboerne jessecravens$ git log
commit ad64981ea09bb72ce1024b2e05b5a319a7004e51
Author: Jesse Cravens <jesse.cravens@gmail.com>
Date:   Tue May 31 21:02:13 2011 -0500

    new Rails app generated by rails_apps_composer

Jesse-Cravenss-MacBook-Pro:iboerne jessecravens$ git status
# On branch working_branch
nothing to commit (working directory clean)
--------------------------------------------------------------------------------------------------
work on a different branch

Here, we will both create a new branch and switch to it 

$ git checkout -b add-RWD-stylesheets
Switched to a new branch 'add-RWD-stylesheets'


$ git branch
master
* add-RWD-stylesheets

The full value of branching only becomes clear when working on a project with multiple developers, but branches are helpful even for a single-developer tutorial such as this one. 

In particular, the master branch is insulated from any changes we make to the topic branch, so even if we really screw things up we can always abandon the changes by checking out the master branch and deleting the topic branch. We’ll see how to do this at the end of the section.


--------------------------------------------------------------------------------------------------
installing Event Calendar
https://github.com/elevation/event_calendar

Rails 3
As a gem:
  gem install event-calendar
Add this to your Gemfile:
  gem 'event-calendar', :require => 'event_calendar'
Or as a plugin:
  rails plugin install git://github.com/elevation/event_calendar.git
To generate the necessary static files AND the example below:
  rails generate event_calendar


this is what I had in the Event model using Mongoid

class Event
  include Mongoid::Document
  field :name, :type => String
  field :description, :type => String
end


So I made the decision that Event Calendar wasn't going to work with Mongo without some considerable pain.

I created a new app that wasn't mongo configured and tried out event calendar

I tested the plugin, had an issue with has_event_calendar, but restarted the server and now its working fine. - per forum recommendation
--------------------------------------------------------------------------------------------------
So in the meantime, I created a static site with html and css, web fonts, etc , Now i have the style of my site that I want to move forward with. 

I plan to create the logo in Canvas - maybe.
or webfonts


--------------------------------------------------------------------------------------------------
Next Ill scaffold the Event 

rails generate scaffold Event name:string start_at:datetime end_at:datetime all_day:boolean

without validations
later we will write a few tests, that will break - and then add validations to resolve the failed tests

git commit -m "scaffolded Event"

Now we are ready to install the event-calendar plugin  

  gem install event-calendar

Add this to your Gemfile:

  gem 'event-calendar', :require => 'event_calendar'

and run bundle

To generate the necessary static files AND the example below:

  rails generate event_calendar

It will ask if you want to force the override of the Event model. 

I select yes and move forward 
There is also a conflict with the migration script. 

woops i forgot to add 2 parameters to the generator:

rails generate event_calendar --use-jquery --use-all-day

so lets just run it again. 

now i got to http://localhost:3000/events

hmm
SQLite3::SQLException: no such table: events: SELECT "events".* FROM "events"

well - i haven't run my db migration yet

rake db:migrate

ok now events work

lets try calendar…

hmm - we need to update our routes, for some reason our generator assumed this entry was in our routes file

  match ':controller(/:action(/:id(.:format)))'

this is legacy and it is not recommended but for now 
  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.

Next - we can add a color field to the Event model

But we can do that later - lets finish our basic application by formulating our testing strategy and merge to master branch
================================

1. Commit our changes and additions to the 'working' Event branch

git commit -m "added Event-calendar"


2. Run our Tests (first we need to write our tests)

and even before that make sure we get our testing framework set up

Generate RSpec
Use the rspec-rails generator to set up files needed for RSpec:
$ rails generate rspec:install
The rspec-rails generator creates the files:
	•	.rspec
	•	spec/spec_helper.rb
You can remove the test folder (it is not needed for RSpec):
$ rm -rf test/
Add Factory Girl for Test Objects

The Factory Girl gem is used to create default model objects for tests. For example, if a controller action requires finding a User object before displaying a “show” page, Factory Girl will create a user just for a test of the controller. You’ll need gem 'factory_girl_rails', :group => :test in your Gemfile.

You’ll need a spec/factories.rb file to contain the factory definitions for any default objects used for testing. You can create one like this:

require 'factory_girl'

Factory.define :user do |u|
  u.name 'Test User'
  u.email 'user@test.com'
  u.password 'please'
end

Add Devise Test Helpers

Using Devise, your controllers will often include before_filter :authenticate_user! to limit access to signed-in users. Your tests will fail unless a default user is created and logs in before each test runs. Devise provides test helpers to make it simple to create and log in a default user.

Create a file spec/support/devise.rb:

RSpec.configure do |config|
  config.include Devise::TestHelpers, :type => :controller
end

Now you can write controller specs that set up a signed-in user before tests are run.

Run RSpec
Run rake -T to check that rake tasks for RSpec are available.
Yep, they are there. 
run rake db:migrate:status to view the status of your migrations
Run rake db:migrate to create a db/schema.rb file so rake spec can run successfully.
You should be able to run rake spec to run all specs. If you haven’t written any specs, you’ll see the message “No examples matching ./spec//_spec.rb could be found”.
You can copy the files from the example spec directory to use our ready-made specs.
Add Cucumber for Behavior Driven Development
If you are creating an application template, this step uses the cucumber recipe from the rails_apps_composer repository.
Use the gem cucumber-rails to set up the app for Cucumber.
You should have the following gems in your Gemfile file:
group :test do
  gem 'cucumber-rails'
  gem 'capybara'
  gem 'database_cleaner'
end
Install the required gems on your computer:
$ bundle install
Use the cucumber-rails generator to set up files needed for Cucumber:
$ rails generate cucumber:install --capybara --rspec
The -–capybara option specifies Capybara instead of the default Webrat for acceptance testing. The -–rspec option enables RSpec matchers for your step definitions.

So whats all this 

Unit Testing
Integration Testing
Acceptance Testing
Functional Testing
Performance Testing

Acceptance Tests/Criteria (in Agile Software Development) are usually created by business customers and expressed in a business domain language. These are high-level tests to test the completeness of a user story or stories 'played' during any sprint/iteration. These tests are created ideally through collaboration between business customers, business analysts, testers and developers, however the business customers (product owners) are the primary owners of these tests. As the user stories pass their acceptance criteria, the business owners can be sure of the fact that the developers are progressing in the right direction about how the application was envisaged to work and so it's essential that these tests include both business logic tests as well as UI validation elements (if need be).


3. Merge Event branch with master branch



4. Finish with a Push to unfuddle private repo

--------------------------------------------------------------------------------------------------
Design for Mobile First

included RWD - media queries

semantic forms markup/stylesheets 

need to consider :
http://visitmix.com/Articles/Web-Forms-for-People
http://www.alistapart.com/articles/signupforms/

The signup form may need to be rethought
but, this will when we get to Facebook integration
--------------------------------------------------------------------------------------------------
Design for Mobile First - Device Recognition

Devise Atlas integration to inched a different to include different libraries for different form factors 

rails plugin install https://github.com/lastminutelabs/Device-Aware.git
make sure you have dependencies installed

1. gem install json

2. gem install rubyzip

rake -T
rake deviceatlas_update

be sure to update your api key
after some finagling and moving items around, i determined that the file appeared to be downloaded using:

http://deviceatlas.com/user/13758/pm_licencing/downloadlatest/9653/zip

instead of the url used in the plugin:
"/getJSON.php?licencekey=" + DEVICE_ATLAS_LICENSE + "&format=zip"

the rake task did not run without error, but it wasn't until later i noticed the file had actually been downloaded.

from there once i included the 

include ActsAsDeviceAware

in the ApplicationController:
ActionController::RoutingError (uninitialized constant ApplicationController::ActsAsDeviceAware):
  app/controllers/application_controller.rb:2:in `<class:ApplicationController>'
  app/controllers/application_controller.rb:1:in `<top (required)>'
  app/controllers/home_controller.rb:1:in `<top (required)>'

--------------------------------------------------------------------------------------------------
RSpec and testing
created a Events scaffold

--------------------------------------------------------------------------------------------------
Facebook integration
Sign up with Facebook

Created an application at developer.facebook.com

App ID
177214749000843
API Key
fefb831fad6a0dbd7e8131410ae5cf1e
App Secret
fc2ee483812471349f43730bf5e7e720
Site URL
http://iboerne.com/
Site Domain
iboerne.com
Contact Email
jesse.cravens@gmail.com
Support Email
jesse.cravens@gmail.com
App Description
iBoerne
Sample Code
Get started quickly with some example code!

--------------------------------------------------------------------------------------------------
Trumpia Integration
Set up a free account at trumpia.com

Gave me an online webform that can be embedded using an iframe.


--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------
