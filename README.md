# MilkSource Website by Insight Creative

Welcome to your new Jamstack website! At Insight Creative we firmly believe in simplicity and strive for that in our technology stack. You won’t find any fancy front-end fameworks, needlessly complex build tools, or overweight content management systems, just simple HTML, CSS, and JS.

Jamstack creates a simple website architecture that makes your website faster, more secure and scalable. Jamstack’s core principles of pre-rendering and decoupling enable your website to be delivered with greater confidence and resilience than ever before.

Here are the main benefits of Jamstack:

## Faster Performance
Serve pre-built markup and assets over a Content Delivery Network.

## More Secure
No need to worry about server or database vulnerabilities, we’ve removed them all! Jamstack websites are pre-built static HTML files and are hosted on CDNs (content delivery networks), so they don’t require the dynamic interactions with servers that put websites at risk.

## Scalability
If your website suddenly goes viral and has many active users, the CDN seamlessly compensates.

## Zero Maintenance
Most common content management systems rely on database, themes and plugins. These all require constant monitoring and updates. These updates are difficult to keep up with and are often buggy and can break your entire website. We’ve removed them all from the equation and regular maintenance is no longer needed. Going forward the focus is 100% on your content and meeting your goals. 

## Development Guide

### Technologies You Should Be Familiarize Yourself With

[Hugo](https://gohugo.io/) + [CloudCannon](https://cloudcannon.com/) + [imgix](https://imgix.com/) + [mapbox](https://www.mapbox.com/)

## Hugo 
Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again. We choose to build with Hugo because of it’s amazing speed. Try it out, you will be impressed.

## CloudCannon 
The CMS marketers *and* developers love to use.

## Image/Video Transformations and Optimizations
Image/video transformations and optimizations are handled through a third-party service called [imgix](https://imgix.com/). imgix’s real-time image and video optimizations, transformations, and digital asset management help developers and marketers deliver better visual experiences on the web.

## Mapbox

The store locator used on the locations and contact page is powered by [Mapbox](https://www.mapbox.com/).

## PostCSS | [PurgeCSS](https://purgecss.com/) (removes unused CSS)

## Installation
Install Hugo. That's it!

[Read the HUGO quickstart guide](https://gohugo.io/getting-started/quick-start/)

## Getting Started

To get started, you can either clone the repository, or deploy straight to [Netlify](#deploy-to-netlify). Then run the following from the project root:

```
npm install
hugo server

```

That’s it! 

When Hugo is done building, you should see a success message like:

```
Web Server is available at //localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```

You may then view your local site in the browser at http://localhost:1313/.

Local development is powered by:

* A local development server at http://localhost:1313/.
* Automatic CSS & JS updates without reloading the page
* Automatic page reloads when content is changed

You now have a local environment up and running, start developing!

Need more information about Hugo? Visit the [Hugo docs](https://gohugo.io/documentation/) or get a jump start with the great [Jamstack tutorials](https://cloudcannon.com/community/learn/) from CloudCannon.

## Images
Images can be found in static/uploads and will be optimized and transformed by imgix.com for usage in your layouts and content.

## Accessibility Tests
We do our best to follow the WCAG2AA standard, and one of the ways we check that we're following the right rules is through automated tools, like [pa11y](https://github.com/pa11y/pa11y/). For more info on the rules being tested checkout the [pa11y wiki](https://github.com/pa11y/pa11y/wiki/HTML-CodeSniffer-Rules).

### Running Tests
To run a web accessibility test do the following:

* Install and run the site locally following the Install and Run instructions above. Site must be running locally to perform the scan.
* If this is your first time running pa11y, then you'll need to run npm install to make sure pa11y is installed.
* In a separate terminal window, run pa11y-ci to initiate the accessibility checker.

## Deploy to Netlify

You can deploy directly to Netlify using this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/insight-creative/Quintessence)

[Additional CMS documentation](https://client-training.insightcreative.info/stadium-bike/)
