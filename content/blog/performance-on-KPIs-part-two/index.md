---
title: Analyzing performance metrics and improvements on KPIs (Part Two)
date: "2022-04-16"
description: "Part two of performance metrics on KPIs and improvements"
---

This post is a continuation of performance metrics and Key Performance Indicators. These are the rest of the performance metrics to be aware of, so let’s get right to it.

# [Cumulative Layout Shift (CLS)](https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API)

The cumulative layout shift score metric is the sum of all unexpected layout shifts that occur from the time the page first loads and the time its lifecycle state goes to hidden. The Cumulative Layout Shift (CLS) is an important user-centric metric for gauging visual stability since it quantifies how often users experience unexpected layout shifts—a low CLS indicates that the page is enjoyable.

[Improving CLS can improve ad revenue. iCook improved CLS by 15% and saw a 10% increase in ad revenue as a result.](https://wpostats.com/2021/03/18/icook-ad-revenue.html)



## CLS in 2021

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-CLS-by-device.png"/>

Because CLS is defined by how much layout shift a user perceives rather than how long it takes to visually see something like FCP and LCP, its performance across devices was very consistent.

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-CLS-by-ect.png"/>

In comparison to FCP and LCP, performance loss from 4G to 3G and below was not as noticeable. There is some loss, but it isn't shown in the device data; only the connection type is affected. Of all connection types, offline websites had the best CLS performance. Some assets, such as photos and advertising, that might otherwise cause layout alterations may not be cached on sites with service worker caching. As a result, they'd never load and would never trigger a layout shift. More basic versions of the online website are frequently used as fallback HTML for these sites.

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-CLS-by-rank.png"/>

For the top 10,000 websites, CLS performance revealed an unusual dip. Furthermore, all of the rated groups above 1Million (M) outperformed the sites ranked below 1M. The sub-1M group performs better since the "all" group outperformed all of the other ranking groupings. 

The sub-1M group performs better since the "all" group outperformed all of the other ranking groupings. WordPress may have played a hand in this metric and others again, since 60% of WordPress-based origins had a good CLS.

## Tips for Improvement

Reserving space for images using CSS-grid is a notable performance improvement. I love me [some css grid tricks](https://css-tricks.com/a-responsive-grid-layout-with-no-media-queries/)

```HTML

<title>Same fit image in grid</title>
<style>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }
.grid img {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  max-width: 100%;
}
</style>
<main class="grid">
  <img src="sample1.jpg" alt="Sample photo one">
  <img src="sample2.jpg" alt="Sample photo two">
  <img src="sample3.jpg" alt="Sample photo three">
  <img src="sample4.jpg" alt="Sample photo four">
  <img src="sample5.jpg" alt="Sample photo five">
  <img src="sample6.jpg" alt="Sample photo six">
</main>

```

This implementation holds the images inside the grid areas and resizes them using ```grid-template-columns``` and ```align-items``` stretch property. This is only one of many improvements that can be implemented. Gains for improving performance for CLS can come from eliminating text-shifts when web fonts are loaded, top banners being inserted after the [First Paint](https://developer.mozilla.org/en-US/docs/Glossary/First_paint), [non-composited animations and iframes](https://cocolyze.com/en/seo-glossary/non-composited-animations).








## First Input Delay (FID)

The time between when a user interacts with your site for the first time (i.e. when they click a link, push a button, or utilize a custom, JavaScript-powered control) and when the browser is able to respond to that interaction is known as the First Input Delay. In other terms, it is the time interval between the initial user interaction on a web page and the browser's reaction to that interaction, measured in milliseconds. This measure does not take into account scrolling or zooming.

Reducating FID can yield mobile ad revenue. [Swappie reduced their FID by 90% (among other metrics) and saw a 42% increase in mobile revenue and a 10 percentage point increase in relative mobile conversion rate.](https://wpostats.com/2021/09/16/swappie-revenue-increase.html)

### FID in 2021


<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-FID-by-device.png"/>

FID performance on desktops was higher than on mobile devices, thanks to faster device speeds that can execute and handle large JavaScript better.

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-FID-by-ect.png"/>

The performance of FID was affected by connection type to some extent, although not as much as the other measures. The wide range of scores seems to limit the amount of variation in the outcomes. FID was worse for offline websites than every other connection category, unlike the other parameters. This might be owing to the fact that many websites with service workers are more complex.

Also to note is that the impact of client-side JavaScript executing on the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread) is not mitigated by using a service worker.

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-FID-by-rank.png"/>

FID's rank-based performance was flat. We see very huge bars in the "good" category for all FID measures, making it less beneficial until we've genuinely reached peak performance.

### Performance improvement tip

Having small bundle sizes and third-party scripts increases the FID metric. The most common improvement is to reduce long-running Javascript.

### [Note: Offset your Third Party Scripts to a Web Worker by using partytown](https://github.com/BuilderIO/partytown).



## Total Blocking Time (TBT)

The time between FCP and TTI is known as Total Blocking Time. This is the time where the main thread is blocked and prevents responsive input.  Because it measures load responsiveness, Total Blocking Time is an high priority metric. The degree of how non-interactive a page is before it becomes effectively interactive is measured by load responsiveness—a low TBT ensures that the page is functional.

Web Vitals optimized Mercado Libre (TBT included). In order to test and enhance the interactivity of product detail pages in the real world, TBT was used as a proxy metric in the lab. [They optimized the product detail pages' interaction for a 90% reduction in Max Potential FID in Lighthouse and a 9% improvement in FID in Chrome User Experience Report (2020).](https://web.dev/how-mercadolibre-optimized-web-vitals/).

## TBT in 2021

TBT is only available in Mobile. 

<img src="https://almanac.httparchive.org/static/images/2021/performance/performance-tbt.png"/>


WebPageTest does not represent real-world user experiences, therefore the data comes from a single throttled-CPU Lighthouse run. When comparing TBT to FID, however, actual interactivity was shown to be much poorer. According to Web Almanac,   the "real" assessment interaction is somewhere in the center. Whether your FID is "good," they recommend looking at TBT to determine if you're missing any unpleasant user experiences that FID isn't picking up on. The same issues that create bad FID also cause poor TBT.

## Tips for improvement

1) Cutting JavaScript execution time <br/>
2) Replacing huge JavaScript libraries with smaller equivalents <br
3) Discarding any JavaScript that is no longer in use <br/>
4) Minimizing the impact of third-party code

## Closing Thoughts

These last 3 performance metrics are important because they lead to a better internet for everyone. They also notably improve KPIs, in my future projects I will keep these in mind.

<br/>
<br/>


## Resources

[User centric performance metrics](https://web.dev/user-centric-performance-metrics/)

[State of the web](https://almanac.httparchive.org/static/pdfs/web_almanac_2021_en.pdf)