---
layout: post
title: "Understanding JavaScript Closures"
date: 2008-04-09 22:37:05 -0500
comments: true
categories: ["Programming", "JavaScript"]
---
<p>So it took me awhile to truly understand JavaScript closures. There is limited documentation of the subject on the web, but here is a list of the resources I used to finally grasp not only what specifically creates a closure, but also why we would want to use them.</p>

<ul>
<li><a href="http://books.google.com/books?id=VOS6IlCsuU4C&dq=javascript">JavaScript: the Definitive Guide</a></li>
<li><a href="http://www.crockford.com/javascript/private.html">Douglas Crockford: Private Members in JavaScript</a></li>
<li><a href="http://blog.morrisjohns.com/javascript_closures_for_dummies">JavaScript Closures for Dummies</a></li>
<li><a href="http://www.jibbering.com/faq/faq_notes/closures.html">jibbering.com/faq/faq_notes/closures.html</a></li>
</ul>

<p>First, let's define closures:</p>
<ul>
<li>A "closure" is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression). - Jim Ley </li>
<li>...JavaScript has closures. What this means is that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned. This is an extremely powerful property of the language. - Douglas Crockford</li>
<li>Things are different if you save a reference to the nested function in the global scope. You do so by using the nested function as the return value of the outer function or by storing the nested function as a property of some other object. - JavaScript: the Definitive Guide</li>
<li>Simply put, a closure is a variable, created inside a function, which continues to exist after the function has finished executing. - Patrick Hunlock</li>
</ul>


<p>I should preface the more detailed explanation below with a few prerequisite concepts. If you don't truly grasp these concepts, then you may get hung up when trying to understand JavaScript closures. Fortunately, your quest to understand closures should force you to understand these concepts on a deeper level first.</p>

<ul>
<li>global object and global scope</li>
<li>reference types and primitive types</li>
<li>lexical scope and the scope chain</li>
<li>the call object or the ECMA activation object</li>
<li>idea of persistent data</li>
<li>private variables</li>
<li>using return</li>
</ul>


<p>To begin, we want to create a reusable function containing data that persists across invocations.</p>
<p>We don't want to hard code variables into the reusable function, and a local variable will not persist.</p>
<p>From what we have learned by our <a href="#">'Responsible JavaScript for the Enterprise'</a> guidelines and through our understanding of the call object, lexical scope, and namespacing: we also know that we want to greatly limit global variables in our global scope.</p>

<p>So instead, we want the developer to make two calls: One, to set up or 'configure' the function, and two, to invoke this 'pre-configured' function.</p>
<p>The power is in the first call. I like to refer to it as the configuration call. </p>
<p>During the configuration call, we 'freeze' the inner function by setting a reference to it in the global scope.</p>
<p>So this data persists. Why?</p>
<p>We have an external reference to this inner function.</p>
<p>The inner nested function retains its reference to the call object of the outer function.</p>
<p>The outer function's local scope resolves and the reference to its inner function remains.</p>
<p></p>
<p></p>

<p>This is an example from a <a href="http://www.synthesispraxis.com/">friend</a> that helped me finally wrap my head around the power of the technique.</p>

{% codeblock Initialize closure.js %}
function configEquation(A,B,C){
  //The equation: Ax^ex1 + Bx^ex2 + Cx^ex3
  //The exponents are ex1, ex2, and ex3
  //The coefficients are A, B, and C and are set

  var ex1 = 2;
  var ex2 = 1;
  var ex3 = 0;

//The exponents constitute a quadratic equation.
function theEquation(x){
	var result = A * Math.pow(x,ex1) + B * Math.pow(x,ex2) + C * Math.pow(x,ex3);
	return result; 
  }

	return theEquation; //notice we return the reference not the invocation of the function(no params)
  }

var myEquation = configEquation(2,3,0); //the configuration call
  console.log('myEquation, x = 2: ' + myEquation(2));
  console.log('myEquation, x = 5: ' + myEquation(5));

var myEquation2 = configEquation(1,1,1); //a 2nd configuration call
  console.log('myEquation2, x = 2: ' + myEquation2(2));
  console.log('myEquation2, x = 5: ' + myEquation2(5));
{% endcodeblock %}
