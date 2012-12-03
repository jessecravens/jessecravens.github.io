---
layout: post
title: "Client/Server 3.0: 6 Ways JavaScript is Revolutionizing the Client/Server Relationship"
date: 2012-11-28 10:02
comments: true
categories: [Presentations, NodeJS, HTML5, Frog, Prototypes, JavaScript]
---

Im giving a talk at Devcon 5 - San Francisco this afternoon: Client/Server 3.0: 6 Ways JavaScript is Revolutionizing the Client/Server Relationship. Here is the other talks on the agenda: [Devcon 5 - San Francisco](http://www.html5report.com/conference/california/agenda.aspx).

Here is a brief summary: 

###1 Device Access Within the Browser

The client gets smarter.

JavaScript Device APIs continue to evolve, allowing more access to device hardware, services and applications such as the camera, microphone, system sensors, native address books, calendars and native messaging applications.
We will explore examples utilizing GeoLocation API, and Device Orientation. 

###2 Client Side Processing w/ Background Threads

The modern web browser's runtime is a single threaded, event loop. Asynchronous programming models, reactionary systems design actually benefit from this architecture. Maturing interpreters improve performance. Web Workers API enables background threads in the browser, making heavy computations realistic. 

So, the client gets more powerful, and becomes an application development evnvironment.
We will explore Web Workers processing heavy computations without blocking the UI for further user interaction. 
 
###3 Device Detection and Descriptors / Adaptive Frameworks

Responsive Web Design is great, but it often isn't enough for larger applications, and applications that need to reach a highly fragmented device market. Adaptive frameworks use DDRs (Device Description Repositories)

We will explore a framework that mixes the best of Responsive with the best of Adaptive: [responderJS](https://github.com/jessecravens/responderjs).

###4 HTML5 Connectivity Revolution and HTTP 2.0

Peter Lubbers coined the term, HTML5 Connectivity Revolution, to describe the next level, web network technologies such as: Web Sockets API, XHR2, Event Source and Server Sent Events, SPDY, CORS.

Engage in a demo of [robodeck](https://github.com/jessecravens/robodeck), a Web Socket driven Collaborative presenations framework.

###5 Single Runtime, Shared Syntax ... the right way

Node.js has enabled the same language, single runtime. But, the paradigms are still quite different. Node streams, inspired by Linux pipes, make IO easy and intuitive. Explore pipe(), pump(), and events in Node streams. 

Solutions like Browserify, help bring Node.js libraries and NPM dependency management to the browser. Next up, Domnode, wrapping common, client-side, I/O bound APIs (XHR, SSE, WebRTC, etc.) in Node streams syntax.

###6 Embedded JavaScript

With Node.js, Angstrom Linux, and cloud document stores like MongoDB, the server is now embedded in the microcontroller client. 

We will explore Arduino wrappers, and Node.js running on the Beaglebone from Texas Instruments. 

The combination of Linux and JavaScript open worlds of opportunity. 

Here is the node.js server used on the Beaglebone in the demo: [beagleserver](https://github.com/jessecravens/beagleserver). 
The Johnny Five code is located here: [node-embedded](https://github.com/nodejshacks/nodejshacks-embedded)

<script async class="speakerdeck-embed" data-slide="4" data-id="086813701bf601302fbe22000a1f8a4e" data-ratio="1.2994923857868" src="//speakerdeck.com/assets/embed.js"></script>

<iframe width="560" height="315" src="http://www.youtube.com/embed/eahWOUYqr90" frameborder="0" allowfullscreen></iframe>