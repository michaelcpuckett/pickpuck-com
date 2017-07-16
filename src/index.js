module.exports = { default: {
    "displayName": `Michael Puckett`,
    "displayTitle": `JavaScript Engineer`,
    "displayLocation": `Louisville, KY 40206`,
    "contactInfo": `pickpuck.com ∙ michaelcpuckett@gmail.com ∙ 615.209.1380`,
    "badgeUrl": `avatar.jpg`,
    "links": [
        {
            "url": `mailto:michael.c.puckett@gmail.com?subject=yo`,
            "title": `E-mail`
        }, {
            "url": `http://linkedin.com/in/michaelcpuckett`,
            "title": `LinkedIn`
        }, {
            "url": `http://github.com/michaelcpuckett`,
            "title": `Github`
        }, {
            "url": `michael_puckett_resume.pdf`,
            "title": `Resume`,
            "last": true
        }
    ],
    "sections": [
        {
            "headline": `Experience`,
            "articles": [
                {
                    "headline": `Humana (Prosoft)`,
                    "kicker": `<strong>Front-End Web Developer</strong> <i aria-hidden="true"></i> Louisville, KY <i aria-hidden="true"></i> 2016-2017`,
                    "paragraphs": [
                        `I create accessible web components that are shared across many enterprise products.`
                    ]
                }, {
                    "headline": `Apple`,
                    "kicker": `<strong>UI Engineer</strong> <i aria-hidden="true"></i> Cupertino, CA <i aria-hidden="true"></i> 2013 - 2016`,
                    "paragraphs": [
                        `I helped build and maintain the front-end for apple.com across several redesigns.`
                    ]
                }, {
                    "headline": `CNN (TekSystems)`,
                    "kicker": `<strong>Senior Web Developer</strong> <i aria-hidden="true"></i> Atlanta, GA <i aria-hidden="true"></i> 2013`,
                    "paragraphs": [
                        `I worked on the responsive redesign and replatforming of CNN.com.`
                    ]
                }, {
                    "headline": `iostudio`,
                    "kicker": `<strong>Web Developer</strong> <i aria-hidden="true"></i> Nashville, TN <i aria-hidden="true"></i> 2012 - 2013`,
                    "paragraphs": [
                        `I built marketing websites and web apps for clients, including the National Guard.`
                    ]
                }, {
                    "headline": `Fruit of the Loom`,
                    "kicker": `<strong>Web Developer</strong> <i aria-hidden="true"></i> Bowling Green, KY <i aria-hidden="true"></i> 2012`,
                    "paragraphs": [
                        `I designed and developed a relaunch of jerzees.com and maintained other brand websites.`
                    ]
                }, {
                    "headline": `2-Com`,
                    "kicker": `<strong>Web Developer</strong> <i aria-hidden="true"></i> Nashville, TN <i aria-hidden="true"></i> 2010 - 2012`,
                    "paragraphs": [
                        `I worked on a web app that generated marketing materials for small businesses.`
                    ]
                }
            ]
        }, {
            "headline": `Skills`,
            "class": `skills`,
            "articles": [
                {
                    "class": `cool`,
                    "headline": `Front-End Web Development`,
                    "features": [
                        {
                            "title": `Pixel Perfect Implementation`,
                            "description": `I can <strong>reproduce design comps in code</strong> at such a high fidelity that overlaying the coded site and the original design reveals no differences.`
                        }, {
                            "title": `Responsive Web Design`,
                            "description": `For years, I have advocated using <strong>CSS media queries</strong> and <strong>mobile-first patterns</strong> to target all screen sizes from a single responsive codebase.`
                        }, {
                            "title": `Styleguide Driven Development`,
                            "description": `I've found that developers can better collaborate with designers by building a <strong>living library of reusable components</strong> that acts as a shared visual vocabulary.`
                        }, {
                            "title": `Accessibility and Inclusivity`,
                            "description": `To accommodate all users, including those with screen readers, I implement <strong>semantic markup</strong> with <strong>ARIA tags</strong>, and I keep in mind issues like color contrast.`
                        }
                    ],
                    "projects": [
                        {
                            "brand": `Apple`,
                            "shortname": `apple`,
                            "description": `I built pixel-perfect interfaces to support <strong>product launches, campaigns, and transactions</strong> on <a href="http://www.apple.com">apple.com</a>. I created a living styleguide and architected the transition of the UI codebase to SMACSS (Scalable &amp; Modular Architecture) style and a more modern build stack. I received extensive training on web accessibility best practices.`
                        }, {
                            "brand": `iostudio`,
                            "shortname": `iostudio`,
                            "description": `I helped develop <a href="http://www.nationalguard.com">nationalguard.com</a>, the <strong>first website of any branch in the U.S. military to go responsive</strong>, and among the first government sites to do so. I worked closely with designers to address visual issues that arose across multiple mobile and tablet screen sizes.`
                        }
                    ]
                }, {
                    "class": `serene`,
                    "headline": `Application Development`,
                    "features": [
                        {
                            "title": `Crafted, Maintainable Code`,
                            "description": `To avoid technical debt, I focus on maintainability by establishing processes, standards and tooling to support writing <strong>testable, modular, peer-reviewed</strong> code.`
                        }, {
                            "title": `Full Stack JavaScript`,
                            "description": `I've written build systems, CLI scripts, and servers with <strong>NodeJS</strong>. I've used backend technologies like Mongo and services like AWS and Firebase to work with databases.`
                        }, {
                            "title": `Frameworks`,
                            "description": `I'm fluent in <strong>React</strong> paired with <strong>Redux</strong>, together among the newest generation of frameworks based on web components and functional reactive programming concepts. I also have experience with MVC frameworks, such as <strong>Angular1</strong> and <strong>Backbone</strong>.`
                        }, {
                            "title": `iOS/Android/Desktop Apps`,
                            "description": `I believe JavaScript is the best choice for reusing code across multiple platforms, no longer limited to just browsers. I'm not fluent in Swift or Java, but I've created apps that leverage native code with the <strong>React Native</strong> ecosystem.`
                        }
                    ],
                    "projects": [
                        {
                            "shortname": `cnn`,
                            "brand": `CNN`,
                            "reverse": true,
                            "description": `Together with a small team of engineers, I helped migrate <a href="http://www.cnn.com">cnn.com</a> from a legacy backend to an <strong>Express web server</strong> that received JSON data from a CMS. My main responsibility was templating data into markup. By using an <strong>isomorphic template engine</strong>, we gained the flexibility to send pre-rendered markup from the server or to generate markup from JSON on the client, from the same templates.`
                        }, {
                            "shortname": `iostudio`,
                            "brand": `iostudio`,
                            "reverse": true,
                            "description": `I wrote the front-end of a <strong>single page web app written in Angular1 that helped National Guard recruiters</strong> keep track of their potential and active recruits. Features included authentication, account privileges, a calendar, and CRUD (create, read, update, delete) operations on the data over a REST API.`
                        }
                    ]
                }
            ]
        },
        {
            "headline": `Side Projects`,
            "class": `grid`,
            "articles": [
                {
                    "class": `lavish`,
                    "headline": `<a href="http://dallasgrp.com/map/index.html">Google My Maps Clone</a>`,
                    "kicker": `<strong>Developer</strong> <i aria-hidden="true"></i> Louisville, KY <i aria-hidden="true"></i> 2016`,
                    "paragraphs": [
                        `I created and launched a custom map widget built with <strong>React/Redux</strong> and Google's Map APIs and Material Design language.`,
                        `The client requested feature and visual parity with the existing My Maps widget built by Google. It shows categorized locations on a map, and the user can interact with them.`
                    ]
                },
                {
                    "class": `lavish`,
                    "headline": `<a href="https://github.com/michaelcpuckett/superchat">Superchat</a>`,
                    "kicker": `<strong>Developer</strong> <i aria-hidden="true"></i> Nashville, TN <i aria-hidden="true"></i> 2013`,
                    "paragraphs": [
                        `On occasion, I have joined local developers for weekend-long hackathons to make games and apps.`,
                        `At Hack Nashville 2013, I built Superchat to experiment with web sockets and other HTML5 capabilities. Features included a <strong>chat room, drawing to a shared canvas, and drag-and-drop file uploads</strong> all in real time.`
                    ]
                },
                {
                    "class": `lavish`,
                    "headline": `Draft Warren Campaign`,
                    "kicker": `<strong>Developer</strong> <i aria-hidden="true"></i> San Francisco, CA <i aria-hidden="true"></i> 2014`,
                    "paragraphs": [
                        `I volunteered my time to build a <strong>responsive campaign microsite</strong> that let voters send pre-designed postcards to Senator Elizabeth Warren encouraging her to run for president.`,
                        `Although Senator Warren did not end up running in 2016, the campaign was a viral hit and sent a message about what grassroots campaigns can achieve online.`
                    ]
                },
                {
                    "class": `lavish`,
                    "headline": `Rise Over Run Magazine`,
                    "kicker": `<strong>Founder</strong> <i aria-hidden="true"></i> Bowling Green, KY <i aria-hidden="true"></i> 2007 - 2009</p>`,
                    "paragraphs": [
                        `I started an online culture magazine in college. I built and maintained the website, produced content, art directed photo shoots, coordinated fundraising events, and managed a staff of student writers and photographers.`,
                        `The magazine won the 2007 Society of Professional Journalists <strong>Mark of Excellence Award</strong> for Best All-Around Independent Online Student Publication.`
                    ]
                }
            ]
        }, {
            "headline": `Education`,
            "class": `education`,
            "articles": [
                {
                    "headline": `Western Kentucky University`,
                    "kicker": `<strong>BA, Advertising &amp; Graphic Design</strong> <i aria-hidden="true"></i> 3.9 GPA <i aria-hidden="true"></i> 2009`
                },
                {
                    "headline": `Conferences Attended`,
                    "kicker": [
                        `<strong>WWDC</strong> <i aria-hidden="true"></i> 2014, 2015`,
                        `<strong>Camp Sass</strong> <i aria-hidden="true"></i> 2013`,
                        `<strong>Throne of JavaScript</strong> <i aria-hidden="true"></i> 2012`
                    ]
                }
            ]
        }
    ]
}}