# PodTask
Inspiration
As a team made up of first-year co-op students, we quickly realized that in all of our different experiences the knowledge gap we initially faced at work was being poorly addressed. Our professional development took up hours of our work day through online courses and on-boarding. This signifies an immense loss of productivity from the standpoint of a company. Furthermore, when the courses we were required to take mismatched the actual knowledge of technologies or skills we needed for our workplaces, it was our responsibility to catch up on our own after work. This in summary was a very inefficient process which cost our companies money, cost us our free time and lead us to feel behind or lost at work. This same concept can be applied to any business professional, whether they are a software developer looking to improve their Java skills, or an accountant looking to work on their leadership skills.

The “GSoft : The Future of Work Challenge” in the area of capturing employee skills as well as “Concordia Bootcamp’s Explore Education Challenge” truly encaptured the issue we were trying to solve perfectly: How might we create a better platform for professional development that is not time-consuming, flexible, and allows professionals to be recognized by their employers for the skills they acquire?

The “Octave Group Innovative Music Player Challenge” presented the perfect opportunity to rethink professional development programs. Podcasts are a form of media quickly gaining popularity among young and older adults alike. They allow for multi-tasking while learning meaning professional development can be done at your desk, in the car or in the shower.

Therefore, we decided to develop PodTask. PodTask is a web application Slack bot hybrid service that allows employees to listen to podcasts related to a wide range of technologies and skill sets and also allows employers to login and see what their employees are learning and listening to. PodTask saves the employer money and earns the employee recognition, free time, and potential opportunity to grow within the company.

What it does
PodTask as a product is broken down into a suite of tools and features. These are a slack bot, an employee portal and podcast player, an employer portal, an analytics dashboard for each user type, and a podcast recommendation engine.

Upon launching PodTask the user is prompted to enter join their team through a code provided by their supervisor or project manager. From there, as they listen to various podcasts, the web app will begin analyzing both personal and team trends in learning based on minutes listened by topic.

This data is present to both the user and their supervisor through analytics dashboards. By summarizing data in these dashboards, users are able to share the skills they’ve learned in the past quarter and their current skill repertoire with co-workers through apps such as Reflektive, Slack, or Linkedin. Furthermore, they may be eligible for credits or bonuses that are awarded for professional development as their supervisor and/or human resources department can track their progress. Another tool that PodTask uses to give supervisors insight into their employees’ professional development is a slackbot which updates them on what their employees are listening to through GETting information from the press button function calls in the JS files.

Lastly, PodTask has a recommendation engine system which recommends playlists based on the interests of or the fields the team works in. Therefore, if one member of the team is learning a framework such as Node.js, others on the team will be recommended similar podcasts keeping everyone on the same page and facilitating easier adoption of cutting-edge technology.

How we built it
The frontend was created with Amina which resulted in a sleek and simple user-interface.The front end was created using HTML5/CSS3 to create various wireframes and create a basic web app. One of the most essential parts of the web application was creating the audio player page. We wanted to find a sleek and intuitive way for users to access their favourite podcasts as well as see what these podcasts are contributing to in terms of their skills. To utilise the Octave Group API, we used Javascript to call on the API and play various podcasts into the loading screen. The OG API was tested through the command prompt and Git Bash, and called in the Javascript/HTML code using GET requests for the various features on the visual audio player (there were a variety of functions that correlated to each API call such as ToggleAudio() which controlled the play and pause buttons). The slack bot was created in Glitch, Slack’s IDE, and coded in Javascript, while using OAuth tokens for authentication. Permission also needed to be configured to allow our bot to WRITE messages to the Slack channel.

The backend was written in Python. Django was used for user authentication and management of users through its automatically generated sqlite database. A prototype recommendation engine was made separately in Jupyter Notebook leveraging pandas and numpy. The artificial intelligence aspect was handled by the natural language toolkit corpus package and scikit-learn’s singular value decomposition, cosine similarity, a data preprocessing tools. The dataset used was a free open source dataset of technical articles found on Kaggle.com. The model is a hybrid between a content-based recommender and a collaborative filtering model.

This project was designed using Sketch and required hours of deliberation and research to determine the customer requirements and engineering specifications. In terms of determining which features we wanted to include in the web application, we carefully read through the requirements for each of the challenges we wanted to compete within and decided to create an application that satisfied all of these requirements.

As someone who currently works in project management for my co-op placement, I knew how important it was to improve productivity and efficiency in the workplace. I also knew how important it was to understand each of your team members’ skills so that you can allocate to each project in the best way possible. Through the use of PodTask, it is quite simple to do all of this. In terms of how we built it, I used a variety of tools: artboards, linear gradient, rounding tools, etc to create the look and feel I wanted. Through the use of various plugins, we were able to create buttons that could be clicked to link to another portion of the artboard or an external link as was required for the music player.

This was my first time using Sketch and I believe it was a successful trial, able to create 7 different artboards that required the use of a variety of tools. In the end, when deep linking, I followed various online tutorials but the product came together and is able to be tested.

Challenges we ran into
Our greatest challenge was integrating our various features into one stand-alone web application. Our front-end and back-end were two separate projects and we struggled with combining them in time for submission. Our podcast player and Slack bot were also two other separate projects. Furthermore, our recommendation was also a separate project. In the near future we will consolidate these products. Command prompt and calling the OG APi ran into technical issues related to the VM, creating the audio player algorithm which called the API appropriately.

Accomplishments that we're proud of
Creating beautiful UI/UX designs using Sketch.
Learning how to use APIs and linking them to a web application.
Creating podcast player!
What we learned
APIs
The basics of front-end and back-end development
Slackbots
Javascript functions
Building recommendation systems with sklearn
What's next for PodTask
Integrate the various features of this prototype.
Extend our subscription-based business model to include various subscription plans and tailored services; beyond the scope of the corporate world.
Should podcasts replace music in coffee shops and other public areas? We think, yes.
Partner with professional development programs, such as those in universities or public organizations and introduce PodTask to this environment.
License the product to third-party organizations such as Coursera, Audible.com, Spotify etc.
