---
title: Using Intersection observer API
date: "2022-02-28"
description: "What Intersection Observer is and web performance" 
---

## Native Intersection Observer API Implementation

<br/>

```js
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px 0px 0px 0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
```

Intersection Observer API detects asynchonously whether an element is within the viewport of the screen. With the options object you can pass down how you want to implemement the API.

root: Checks if the target element is in the viewport. <br/>
rootMargin: Gives the root space and you could use CSS values (like "10px"). The format is: top, right, bottom, left. <br/>
threshold: A number or array values that represent the target elements visibility and when the callback for Intersection Observer should execute. For example: 50% mark would be "0.5". <br/>

To observer the target:

<br/>

```js
let target = document.querySelector('#listItem');
observer.observe(target);
```

Since the callback is executed on the main thread when the threshold is met, resourcefulness is important.

There's alot that happens before a page loading and the main thread parser getting to invoke the API.

<br/>

## [Everything before the API is being called:](https://www.speedshop.co/2015/11/05/page-weight-doesnt-matter.html)

>> Browser opens connection to yoursite.com, does DNS/TCP/SSL setup.

>> Browser downloads the document (HTML).

>> Browser starts parsing the document. When the parser encounters a subresource, it opens a connection and downloads it. 

>> If the subresource is an external script tag, the parser stops, waits until it the script has downloaded, executes the entire script, and then moves on.

>> As soon as the parser stops and has to wait for an external script to download, it sends ahead something called a preloader. The preloader may notice and begin downloading resources if it understands how to (hint: a very popular Javascript pattern prevents this).

>> And Robert's your auntie's husband.

<br/>

## You can preload all kinds of content using the ``as`` attribute with a link element:

- audio: Audio file, as typically used in ``<audio>``.
- document: An HTML document intended to be embedded by a ``<frame>`` or ``<iframe>``.
- embed: A resource to be embedded inside an ``<embed>`` element.
- fetch: Resource to be accessed by a fetch or XHR request, such as an ArrayBuffer or JSON file.
- font: Font file.
- image: Image file.
- object: A resource to be embedded inside an ``<object>`` element.
- script: JavaScript file.
- style: CSS stylesheet.
- track: WebVTT file.
- worker: A JavaScript web worker or shared worker.

<br/>

## [How Gatsby uses Intersection Observer API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#replace-history-to-change-back-button-behavior)

In Gatsby's Link API, the Intersection Observer is used under the hood to bring fast page navigation. The ``Link`` component gives access to **preloading** the most important resources, and is one of the core pillars of ensuring web performance.

When the current page has a ``Link`` component in the viewport the browser calls a low priority request to fetch the ``Link``'s page. And a trigger is added (the callback) to switch to "high-priority" to fetch the page, if the mouse hovers over the link. 

## Other notable performance gains before the main parser thread

>> DNS Prefetch - Pretty simple - tell the browser to resolve the DNS of a given hostname (example.com) as soon as possible.

>> Preconnect - Tells the browser to open a connection as soon as possible to a given hostname. Not only will this resolve DNS, it will start a TCP handshake and perform TLS negotiation if the connection is SSL.

>> Prefetch - Tells to browser to download an entire resource (or subresource) that may be required later on. This resource can be an entire HTML document (for example, the next page of search results), or it can be a script, stylesheet, or other subresource. The resource is only downloaded - it isn’t parsed (if script) or rendered (if HTML).

>> Prerender - One of these things is not like the other, and prerender is it. Marking an ``<a>`` tag with prerender will actually cause the browser to get the linked href page and render it before the user even clicks the anchor! This is the technology behind Google’s Instant Pages and Facebook’s Instant Articles.

I find it fascinating how native browser APIs are used across the web all for more performance. And how there are other factors that come before and during to improve performance. 

Below you can find my inspiration and more information about improving Browser Performance and Intersection Observer!

## Resources:
- [Gatsby Link API](https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#replace-history-to-change-back-button-behavior)
- [MDN Link Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload#the_basics)
- [Page Weight Doesn't Matter](https://www.speedshop.co/2015/11/05/page-weight-doesnt-matter.html)