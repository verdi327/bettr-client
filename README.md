# Bettr Client
Fitness training simplified.  Automatically generate 12 week training programs individualized to your training level, sex and training availability.

This repo is the front-end client, built in React.  You can see the app live at [https://bettr.fit](https://bettr.fit)

The app is meant for mobile use, but will still scale for desktop viewing.

To check out the app, I suggest you create a dummy account so you can see the onboarding experience.  But, if you just want to view what a program looks like, you can use the demo account.

#### Demo Account Details

* email: s.curry@warriors.com
* password: foobar

## Introduction

With so much information available on the web and social media sites around training advice, it's hard to separate fact from fiction. Bettr cuts through the BS a builds 12 week training programs that use evidence based science to create plans focus balanced, full body training. If you want both better body composition, performance and longevity - bettr is your plan.

## Quick App Demo

![Imgur](https://i.imgur.com/OyZdffc.gif)

## Technology

#### Front End

* React
  * Create React App
  * React Router
* HTML5
* CSS3 (scratch - no frameworks)

#### Testing

* Jest (screen captures & smoke tests)

#### Production

* Deployed via Zeit

## Getting Started

Run `npm install` to load dependencies

Run `npm test` to ensure a stable build

This is only the front end client, so develop locally you'll need the backend server as well.

To get the backend up and running see [https://github.com/verdi327/bettr-server](https://github.com/verdi327/bettr-server)

Deployments are handled through Zeit and can be run via `npm run deploy`
