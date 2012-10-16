---
layout: post
title: "Git Cheatsheet"
date: 2011-09-26 23:10:56 -0500
comments: true
categories: ["Programming", "Productivity", "Open Source", "code", "Business Computer Programming"]
---

I made the switch from Subversion to Git awhile back, and early on I created a cheatsheet pulled from various sources on the web. I thought I'd share.

###Git First-Time System Setup

After installing Git, you should perform a set of one-time setup steps. These are system setups, meaning you only have to do them once per computer:

{% codeblock %}
$ sudo apt-get install git-core
$ git config --global user.email youremail[at symbol]example.com
$ git config --global user.name "John Doe"
$ git config --global user.name "Your Name"
$ git config --global alias.co checkout
{% endcodeblock %}


As a final setup step, you can optionally set the editor Git will use for commit messages.

{% codeblock %}
$ git config --global core.editor "mate -w"

# Replace “mate -w” with “gvim -f” for gVim or “mvim -f” for MacVim.

{% endcodeblock %}

###Quick Reference – Most Often Used Commands

{% codeblock %}
$ cd /path/to/repository
$ git init
$ git add .
$ git add -u
$ git log
$ git status
$ git commit -m "initial commit"

# made a mistake on the git commit
$ git commit -amend -m "initial commit"

# Add the remote repository

# ex 1
$ git remote add unfuddle git@subdomain.unfuddle.com:subdomain/abbreviation.git

# ex 2
$ git remote add origin git@subdomain.unfuddle.com:subdomain/abbreviation.git

# Configure the repository
$ git config remote.unfuddle.push refs/heads/master:refs/heads/master

# Push master branch to remote repository named unfuddle
$ git push unfuddle master

# Other commands:

# Clone an existing remote repo 
$ git clone git@subdomain.unfuddle.com:subdomain/abbreviation.git

# List all branches within your repo
$ git branch -a

#Create and switch to a new branch "whatever"
$ git checkout -b whatever 

{% endcodeblock %}

Those are the basics, should be enough to make you dangerous.	
