---
layout: post
title: "RVM (Ruby Version Manager) and Ruby On Rails"
date: 2011-09-26 23:35:58 -0500
comments: true
categories: ["Ruby on Rails", "Programming", "Productivity", "Open Source", "code", "Business Computer Programming"]
---
Here is a brief overview of [Ruby Version Manager](http://beginrescueend.com) and some explanation as to why you would want to use it. I began to use RVM when I started my first Rails 3 project. It was a bit confusing at first, but now I couldn't live without it. I have created numerous gemsets for various configurations to include different versions of Ruby (1.87 and 1.91), versions of Rails (2.3, 3.09, 3.1) and different projects that have vastly different gems such as different testing frameworks, different JavaScript libraries, and different ORMs.

This allows me to essentially sandbox each of these applications' dependencies.

One helpful hint I might offer is to get in the habit of declaring your gemset when you launch a new terminal. I tend to have multiple terminals open at once and it took me awhile to remember that each time I launched a terminal, RVM would fall back to my default gemset. So if I clone a Rails 3.1 project, I need to remember to switch to my rails3.1 gemset prior to runninig bundle install.

Simply put, RVM helps:

- manage versions of Ruby
- manage packages of Gemsets

##RUBY

{% codeblock %}

$ rvm list
$ rvm install 1.9.2-head

{% endcodeblock %}

And, you can set a version as default

{% codeblock %}

$ rvm use 1.9.2-head --default

{% endcodeblock %}

###GEMSETS

{% codeblock %}
# Start by creating our gemset(s):

$  rvm gemset create rails309

# Or create multiple at a time:

$  rvm gemset create rails307 rails31

# The result can be verified by listing the available gemsets:

$  rvm gemset list

# See everything with list_all, this has been very useful:

$ rvm gemset list_all

# If a gem’s name still leaves room for confusion, simply delete it and create a more meaningful one (e.g., rails31rc):

$  rvm gemset delete rails31

{% endcodeblock %}

Now that we have multiple gemsets installed, we must first select the one we want to use, and we can also set it as the default gemset by passing it the —default flag:
  
{% codeblock %}

$ rvm use 1.9.2-head@rails309 --default

{% endcodeblock %}

###Installing Rails

Installing rails is as easy as installing any other gem: we only need to specify it’s name, but we can always choose a specific version, or to speed up the installation process by skipping the documentation:

{% codeblock %}

$ gem install rails --no-rdoc --no-ri
# Or
$ gem install rails [-v 3.0.7] [--no-rdoc --no-ri]
# Or
$ gem install rails -v ">=3.1.0rc"

{% endcodeblock %}

###In Summary and Why Am I doing this?

Rails is distributed as a gem, and there are conflicts between Rails 2 and Rails 3, so if you want to run multiple versions of Rails on the same system you need to create a separate gemset for each:

{% codeblock %}

$ rvm --create 1.8.7-p302@rails2app
$ rvm --create use 1.9.2@rails3app

{% endcodeblock %}


In other words, for application specific gemsets it is convenient to select the version of Ruby and the collection of gems by doing the following:

{% codeblock %}

$ rvm --create use 1.9.2@mongoid-app

# Also, which gemset am I using?
$ rvm gemset name

$ rvm gemdir

{% endcodeblock %}
