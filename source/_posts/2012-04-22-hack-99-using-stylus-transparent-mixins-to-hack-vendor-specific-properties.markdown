---
layout: post
title: "Using Stylus’ Transparent Mixins to Hack Vendor-Specific Properties"
date: 2012-04-22 19:11:35 -0500
comments: true
categories: ["CSS"]
---

One of the most interesting features of [Stylus](https://github.com/LearnBoost/stylus) is transparent Mixins. One reason they are interesting is that at the time of this writing, this feature is exclusive to Stylus, other CSS metalanguages like Less and Sass do not offer Transparent Mixin support.

We already defined a mixin earlier, when we explored mixins with Jade. Here they are used similarly.

Before we begin with the transparent aspect of Stylus mixin support, let’s build a simple CSS mixin. Perhaps, the best example, as provided by TJ Holowaychuk in this [beginner screencast]( http://www.screenr.com/bNY) uses vendor-specific prefixes.

How about we take his example and expand it to a slightly more challenging scenario.

In case you haven’t come across this challenge before, lets set some context. Browser makers, or vendors, implement proprietary extensions to standard CSS specifications to release and test browser features that have been developed pre ‘Candidate Recommendation’ W3C draft status. Although vendor-specific prefixes can be frustrating for web developers, they are a necessary evil, allowing new properties to be widely tested before they become available as standard CSS properties.

Each Vendor maintains a list of their proprietary CSS properties. The following table provides the extension prefixes for all the modern browsers:

<table border="1">
<tr>
<th>Extension</th>
<th>Rendering Engine</th>
<th>Browser(s)</th>
<th>Example</th>
</tr>
<tr>
<td>-moz-</td>
<td>Camino</td>
<td>Mozilla Firefox</td>
<td>-moz-border-radius</td>
</tr>
<tr>
<td>-ms-</td>
<td>Trident</td>
<td>Internet Explorer</td>
<td>-ms-layout-grid</td>
</tr>
<tr>
<td>-o-</td>
<td>Presto</td>
<td>Opera</td>
<td>-o-border-radius</td>
</tr>
<tr>
<td>-webkit-</td>
<td>Webkit</td>
<td>Chrome, Safari</td>
<td>-webkit-border-radius</td>
</tr>
</table>


And here is a few valuable resources for finding these properties:

- [Webkit-unofficial at css-infos.net](http://css-infos.net/properties/webkit) 
- [Safari](http://developer.apple.com/library/safari/#documentation/AppleApplications/Reference/SafariCSSRef/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW1)
- [Mozilla](https://developer.mozilla.org/en/CSS_Reference/Mozilla_Extensions)
- [Opera](http://www.opera.com/docs/specs/presto28/css/o-vendor/)
- [Internet Explorer](http://blogs.msdn.com/b/ie/archive/2008/09/08/microsoft-css-vendor-extensions.aspx)

Without a metalanguage that provides logic to CSS, these declarations can become cumbersome and repetitive.
Here is an example of a div element that needs to have corners take on different size radiuses:

First, the markup in Jade.

{% codeblock example.html %}
header
  h1= title
  p Welcome to #{title}

div.panel panel test
div.mixin-panel mixin-panel test
div.t-mixin-panel transparent-mixin-panel test
{% endcodeblock %}

Then, the styles in basic CSS.

{% codeblock example.css %}
div.panel {
  -moz-border-radius: 10px 5px;
  -webkit-border-radius: 10px 5px;
  border-radius: 10px 5px;
}
{% endcodeblock %}

This produces the following effect:

<img src="/images/blogposts/stylus-example265x185.png"/>

With that context in mind, let’s leverage Stylus to help us manage our code. First, we are able to remove all parenthesis, semi-colons, and colons.

{% codeblock example2.css %}
div.panel
  -moz-border-radius 10px 5px
  -webkit-border-radius 10px 5px
  border-radius 10px 5px
{% endcodeblock %}

Much like Jade, this simplified syntax goes along way in our ability to quickly write CSS. Now, let’s apply some logic, by creating a border-radius mixin, and pass our values as arguments to our mixin:

{% codeblock example3.css %}
my-border-radius-mixin (...args)
  -moz-border-radius args
  -webkit-border-radius args
  border-radius args

div.panel
  my-border-radius-mixin (10px 5px)

{% endcodeblock %}

And we can reuse this mixin in other contexts, which continues to help reduce code bloat and keep your code DRY.

{% codeblock example4.css %}
my-border-radius-mixin (...args)
  -moz-border-radius args
  -webkit-border-radius args
  border-radius args

div.panel
  border-radius-mixin (10px 5px)

div.other-panel
  border-radius-mixin (3px 32px 100px 55px)

div.another-panel
  my-border-radius-mixin (5px 10px 33px 43px)

{% endcodeblock %}

While Stylus allows us to name our mixin as we choose, we are also given the ability to apply mixins ‘transparently.’ In the case of a simple implementation of border-radius, a transparent mixin would make a lot of sense. In effect, this normalizes browser implementations and provides an abstraction layer for CSS developers.

{% codeblock example5.css %}
border-radius (...args)
  -moz-border-radius args
  -webkit-border-radius args
  border-radius args

div.panel
  border-radius 10px 5px

{% endcodeblock %}

As long as a border-radius mixin is present, Stylus will find it, and apply the vendor-specific properties transparently.

