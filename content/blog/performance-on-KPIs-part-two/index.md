---
title: Analyzing performance metrics and improvements on KPIs (Part Two)
date: "2022-04-16"
description: "Part two of performance metrics on KPIs and improvements"
---

User metrics are what drive the internet. Daily and weekly, there's always the next improvement to an existing framework, dependency, or library. All [vary by size](https://bundlephobia.com/). There's a good reason to monitor the size of a dependency. For one, it directly impacts how fast a web page will load for different network conditions. And two, it reduces the reliance on a dependency that has the possibility of being abandoned in the future. This is a small example of why performance is important and it perfectly correlates with a Key Performance Indicator like [Bounce Rate](https://en.wikipedia.org/wiki/Bounce_rate) depending on the web application.

As with many things software engineering, it often depends on HOW you would like to implement a feature and the requirements in order to set a [performance budget](https://developer.mozilla.org/en-US/docs/Web/Performance/Performance_budgets) and monitor the application. Almost always, the best monitoring is [Real User Monitoring](https://developer.mozilla.org/en-US/docs/Glossary/Real_User_Monitoring) (RUM). RUM relies on actual people clicking on the page to take important measurements rather than automated tests simply going over a given set of test steps. Monitoring user interaction within a website or an application is important because it helps to determine if users are being served quickly and without errors and, if not, which part of a business process is failing.

In this first part article, I will analyse the current landscape of performance across the top ranked +5,700,000 million sites on Desktop and +8,200,000 on mobile, how these metrics could impact important KPIs like [Conversion rates](https://en.wikipedia.org/wiki/Conversion_rate_optimization), [Abandonment rates](https://en.wikipedia.org/wiki/Abandonment_rate), [Bounce rates](https://en.wikipedia.org/wiki/Bounce_rate), [Session Durations](https://en.wikipedia.org/wiki/Session_(web_analytics)), Engagement, Traffic and ad revenue. By giving practical examples of companies that have implemented the performance improvement using case studies, and provide some tips, show off small snippets of template implementation for some areas.

I had to rewrite the entirety of this post (Not fun) because I was using March 2019 to March 2022 performance metrics. Because HOW the APIs’ metric is measured for users could change. For example, [changes in thresholds for First Contentful Paint and other metrics](https://web.dev/defining-core-web-vitals-thresholds/). So the best possible metrics are those from 2021 because they are the most consistent and relevant. Exciting!? Great! Let's dive in!


# [Time-to-First-Byte (TTFB)](https://developer.mozilla.org/en-US/docs/Glossary/time_to_first_byte)

Time-to-First- Byte is the time it takes for a page to load from start to finish, including when the page's initial scripts (if any) have loaded and it can reliably respond to user input. When it comes to measuring connection setup time and web server responsiveness, the time to first byte is crucial. It can be used to determine when a web server is taking too long to reply to queries. It comes before any other useful loading performance metric in the case of navigation requests. This means it takes priority before the HTML document is requested. [It is the Real-world server response latencies, as experienced by real-world users navigating the web.](https://ismyhostfastyet.com/).

Radins made significant improvements to their Time-to-First-Byte and experienced significant net positives in their KPIs. Radins did this by improving their Speed Index by 51% for desktop experience and saw a significant increase in conversion by +12% and a drop in bounce rates by -25%. Google DoubleClick's study concluded that 53% of visitors leave a website if they believe it takes more than 3 seconds to render. The constant here is the network condition.

## TTFB in 2021

https://almanac.httparchive.org/static/images/2021/performance/performance-TTFB-by-device.png

This year, desktop TTFB was faster than mobile, attributed to higher network rates. In comparison to the previous year, TTFB improved somewhat on desktop but slowed on mobile.

https://almanac.httparchive.org/static/images/2021/performance/performance-TTFB-by-ect.png

TTFB is still has a long way off. 75% of websites were on a 4G connection, 25% on a 3G connection, and the rest were insignificant or irrelevant. Only 19% of origins had "good" performance at 4G effective speeds. TTFB happens over an offline connection by Service worker caching. Service worker caching is likely used by the majority of offline sites that record and relay TTFB data. Even if the response is coming from the Cache Storage API or the HTTP Cache. TTFB counts how long it takes for the first byte of the response to be received for the page. There is no need for a dedicated server for this since it comes from the client themselves. 

The time it takes the service worker thread to start up and handle the response might also contribute to TTFB if the response demands action from the service worker. Even when service worker starting times are taken into account, these sites receive their first byte on average faster than the other connection types.

https://almanac.httparchive.org/static/images/2021/performance/performance-TTFB-by-rank.png

In terms of rank, higher-ranking sites had a faster TTFB. One factor might be that most of these organisations are larger and have greater resources to focus on performance. They could concentrate on increasing server performance and providing assets via edge CDNs. Another factor might be selection bias: in locations with nearby servers, i.e. reduced latency, the top sources may be accessed more frequently. Another approach is to use a content management system (CMS).

https://almanac.httparchive.org/static/images/2021/performance/cms-adoption-by-rank.png

In the "all" group, 42 percent of pages (mobile) utilised a CMS, but just 7% of the top 1,000 sites did. When we look at the top 5 CMSs in order of popularity, we can find that WordPress is the most popular, accounting for 33.6 percent of "all" pages:

https://almanac.httparchive.org/static/images/2021/performance/top-cmss-by-rank.png

Below is how each CMS performs by metric:

https://datastudio.google.com/reporting/55bc8fad-44c2-4280-aa0b-5f3f0cd3d2be/page/M6ZPC?s=o6zLzlTpWaI

In July 2021, just 5% of WordPress sources experienced decent TTFB. Given WordPress's substantial percentage in the top 10 million websites, its low TTFB might be a factor in the TTFB deterioration by rank.

## Tips for improvement

A tool to retrieve your performance metrics, besides Lighthouse, is [GTmetrix](https://gtmetrix.com/). You could do edge [caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#types_of_caches) for HTML.

# [First Contentful Paint (FCP)](https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint)

The First Contentful Paint is the time it takes for the page's main content to display on the screen when the navigation begins. First Contentful Paint is a more technical term that refers to the time between when the page first loads and when any part of the page's content is rendered on the screen. Because it reflects the first point in the page load timeline where the user can see anything on the screen, First Contentful Paint is an important, user-centric metric for measuring perceived load speed. A quick First Contentful Paint helps reassure the user that something is actually occurring.

FCP is important for KPIs like conversion rate. Yelp, improved their FCP and gained better performance and improvement. [Yelp reduced FCP (75th percentile) by 45% and Page Complete (75th percentile) by 25% and saw a 15% improvement in their conversion rate.](https://engineeringblog.yelp.com/2021/01/boosting-user-conversion-with-ux-performance-wins.html). Unsurprisingly, the same improvements to user timing can yield better performance and happier user engagement across the web.

## FCP in 2021

The performance of FCP paint across the web for mobile devices decreased.

https://almanac.httparchive.org/static/images/2021/performance/performance-FCP-by-device.png

Why? Both greater average network speeds and quicker CPUs could be to blame. On mobile, just 38% of origins (URLs) had good FCP. [Resources that obstruct rendering](https://developer.mozilla.org/en-US/docs/Web/Progressive web apps/Loading#render-blocking resources) typical issue  is synchronous JavaScript . Because the initial portion of FCP is TTFB, a low TTFB will make achieving a good FCP challenging.

https://almanac.httparchive.org/static/images/2021/performance/performance-FCP-by-ect.png

Clients at 3G and below speeds experienced significant degradations in FCP during 2021. Using RUM to analyze real devices and networks that reflect a web app's user data from analytics helps in this regard. Packaging large JavaScript bundles using highend desktops with fiber connections is not representative of most users in the wild. Offline connections were closer in performance to 4G though not quite as good. [Service worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#the_premise_of_service_workers) start-up time plus [multiple cache reads](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control#vocabulary) could have contributed. More factors come into play with FCP than with TTFB.




## Implementation for improvement

```js
// React Hook for adapting based on network status (2G, 3G, 4G)
// For a news site, if the speed is 2G you could decide to only display the MOST popular news
// For a car rental company, you could decide to showcase the car with an image instead of a video, unless the user clicks

import React from "react";

import { useNetworkStatus } from "react-adaptive-hooks/network";

const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch (effectiveConnectionType) {
    case "2g":
      media = <img src="medium-res.jpg" />;
      break;
    case "3g":
      media = <img src="high-res.jpg" />;
      break;
    case "4g":
      media = (
        <video muted controls>
          ...
        </video>
      );
      break;
    default:
      media = (
        <video muted controls>
          ...
        </video>
      );
      break;
  }

  return <div>{media}</div>;
};
```

As my first ever shameless plug (I feel old saying that), checkout my previous blog post for [implementation of improving FCP based on different network conditions](https://natc02.github.io/blog/increasing-network-utilization/).
# [Largest Contentful Paint (LCP)](https://developer.mozilla.org/en-US/docs/Web/API/Largest_Contentful_Paint_API)

The LCP is the time it takes for a page to load from the time the first text block or image element appears on the screen to the time the largest text block or image element is rendered on the screen. Because it marks the point in the page load timeline when the website's major content has likely loaded, LCP is an important, user-centric metric for measuring perceived load speed. A fast LCP helps reassure the user that the page is valuable.

A practical look on why this is important is Vodafone, [who improved their LCP by 31%, resulting in an 8% increase in sales, a 15% increase in their lead to visit rate, and an 11% increase in their cart to visit rate.](https://web.dev/vodafone/).

## LCP in 2021

The performance metric of LCP was faster on desktop than mobile.

https://almanac.httparchive.org/static/images/2021/performance/performance-LCP-by-device.png

TTFB has the same effect on LCP as it does on FCP. The trends in FCP are mirrored in comparisons by device, connection type, and rank. LCP performance is influenced by render-blocking resources, total weight, and loading strategies.

https://almanac.httparchive.org/static/images/2021/performance/performance-LCP-by-ect.png

Offline URLs with good LCP were more closely matched to 4G experiences, while offline origins with low LCP were higher. LCP happens after FCP, and the extra budget of 0.7 seconds may explain why more offline websites scored well on LCP than on FCP.

https://almanac.httparchive.org/static/images/2021/performance/performance-LCP-by-rank.png

The performance differences by rank were closer in LCP than in FCP. In addition, the top 1,000 origins had a higher share of origins with poor LCP. On WordPress, 28% of origins reported having good LCP. Poor LCP is usually caused by a number of issues, thus this is an opportunity to improve the user experience.

## Tips for improvement

Lazy loading of the LCP element is an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern) and causes more delays for the render.

### Implementation with [LazyLoad](https://www.andreaverlicchi.eu/vanilla-lazyload/).



```html
<!-- For a plain, boring lazy image–!>
<img alt="A plain lazy image" class="lazy" data-src="plain_lazy.jpg" />

<!-- For a responsive lazy image w/ srcset and sizes–!>

<img
  alt="A lazy image"
  class="lazy"
  data-src="lazy.jpg"
  data-srcset="lazy_400.jpg 400w, 
    lazy_800.jpg 800w"
  data-sizes="100w"
/>
```

Largest Contentful Paint is very important, but the Time To First Byte takes precedence.


## Closing Thoughts

These last 3 performance metrics are important because they lead to a better internet for everyone. But, they also improve KPIs. So its a win-win.

## Resources

[User centric performance metrics](https://web.dev/user-centric-performance-metrics/) <br/>


[State of the web](https://almanac.httparchive.org/static/pdfs/web_almanac_2021_en.pdf)