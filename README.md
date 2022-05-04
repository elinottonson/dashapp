DASH APP: A WEB APPLICATION  FOR NATURAL LANGUAGE PROCESSING WITHOUT CODE



Presented By:
Eli Nottonson


Completion Date:
May 2022



Approved By:
Stephen Harris, English Department
Gordon Anderson, Computer Science Department






ABSTRACT
Title: DaSH App: A Web Application for Natural Language Processing Without Code
Author: Eli Nottonson
Thesis/Project Type: Thesis Portfolio
Approved By: Stephen Harris, English Department
Gordon Anderson, Computer Science Department

Natural Language Processing is a field of Computer Science that manipulates language through software. The tools Natural Language Processing provides are extremely beneficial to exploring texts and deriving data driven answers to questionsg. The issue at hand is that these tools require a working knowledge of programming in order to access and implement. Through this thesis, I have created a simple online Natural Language Processing tool called a Bag of Words. A Bag of Words is a fundamental topic that is required in order to learn more complex Natural Language Processing Tools. My tools allow a user to customize their own Bag of Words for their own texts and learn about all the pieces that lead to turning a text into manipulatable data. In addition to creating usable tools, this thesis brings the code used to the user so that they can begin to learn how their text is being broken apart, rather than just have it happen behind the scenes. In addition, other Natural Language Processing tools that exist online are centralized through this web application so that anyone, especially those in the humanities, can utilize powerful tools for their own purposes with little to no knowledge of coding.



INTRODUCTION
For this Honors Thesis Project, I will be creating an easily accessible and usable web application giving access to Natural Language Processing (henceforth referred to as NLP) technologies to those with little to no coding experience for the purpose of text inquiry. I will be creating a suite of NLP tools all hosted on the web. Within each of these tools, a basic layout will be followed in order to maximize the effectiveness of each one, as well as make the code behind each tool available and understandable if one wants to further explore their text through customization. A description of the tool/code used starts each section. From here, the file upload area is available. This is followed by some type of data response or visualization based on the manipulations made to the user’s text input. Each section is then concluded by an interactive code sample demonstrating how the input text was manipulated. This serves to give the user further understanding of how to utilize code to derive data-driven answers to questions about their text. The basic overview of the text stack utilized to implement this is a React.js frontend, a Node.js/Express.js backend, and AWS Lambda functions written in python for text manipulations. Through these listed technologies, my thesis project aims to bridge the gap between what is possible through NLP techniques currently available through python, and the limitations of those in the humanities to derive data-driven answers to their questions. In addition, I aim to make code and its meaning understandable to a user base who may have never used it previously.
This web application aims to fill the void for those in the humanities who would like to utilize Natural Language Processing in order to derive meaning from text in a way that is currently inaccessible to those without a complex understanding of code. Natural Language Processing refers to the manipulation of language by software. It is a broad term that applies to many entities such as speech recognition, language understanding, and language generation. 
To accomplish the goal of creating meaningful data without a knowledge of code, the objective is to simplify the understanding needed for common NLP tools, remove any technological hurdles needed to start utilizing these tools, and lastly provide the user with understanding of the tool and how code manipulates their text. The data structures and algorithms behind foundational NLP tools are complex and require layers of understanding to be able to create, as well as derive meaning, from their results. My thesis aims to simplify these topics, as well as the code behind each tool, so the user can understand what is happening when they input a text, what the result means as it is presented, and what further meaning they can make from the data. The NLP tools this project sets out to create have previously required computational resources to start to access their solutions. In order to begin writing in python, one would originally have to access some type of code compiler, learn the basics of python, apply their newfound python knowledge to create some meaningful code, make the code useful for their specific textual analysis need, and lastly take their resulting data and attempt to visualize it by some means. For someone in the humanities who would like to further inquire about a text, this takes precious time, knowledge, and resources for something that may not even prove to be significant. For users to make the most of this thesis’ tools, I look to bring the opportunity to learn the code behind these tools directly to the user. With each tool will be an interactive code snippet the user can play with to see how their text was manipulated. This allows the user to further learn and customize the preset NLP tools to their liking and for the application of their specific inquiry.
This project is intended to allow direct access to NLP tools to those in the humanities who are looking to further inquire about their text. One example of these tools and its application for generalized text inquiry is the “bag of words” function. A bag-of-words is a common structure in NLP that disregards order and structure to solely look at word multiplicity, or the amount of times each word in the given text comes up. Through this web application, a given user can simply drag and drop their text into the associated space. Their text of up to 500,000 words is manipulated into this bag-of-words and displayed visually as a wordcloud. The meaning that can be taken from a bag of words can be as simple as attempting to find the significant topics discussed in a text, or as complex as an input to an AI model for text prediction. A bag-of-words can be created in real time through this web application, and in addition, the python code that manipulates the user’s text is embedded as a live code segment that is commented and broken down so that the user can learn the NLP techniques they are using live in the same web app section.

PROCESS INFORMATION
Overview
	Through this thesis, I wished to apply my existing knowledge of web applications to a field new to me, while also growing my understanding and toolset of web application technologies to further myself as a software engineer. Natural Language Processing is a field of Computer Science I was exposed to at the start of my Fall 2021 semester. Through my own use of the tools available, I realized that I was struggling with some of the foundations and I come from a coding background. If someone comes from a humanities background and had no previous coding experience, it would be extremely difficult to start working with this level of code and make something useful for yourself. This led me to the overall goal for my thesis- give those in the humanities a place to experiment with NLP while also starting to learn the code behind how their text is being manipulated. In the next few sections I outline how I made this project and accomplished this goal directly through requirement based Agile programming.
Requirements, Functionality, Architecture (RFA)
	This is the process that a software engineer internship had me follow to outline a project and justify the work to be done. It will replace review of literature as it serves to justify the thesis project direction prior to work being completed. Addresses similar projects/inspiration and differences that this project will make, very similar to a review of literature. 
Requirements:
The requirements for this section take pain points and outline the need for the product, and then a solution to each pain point that my project will address. These serve as requirements my project must address.
Pain Points
PP1: An understanding of code is needed to access basic Natural Language Processing (NLP) techniques
Those in the humanities would benefit greatly from NLP tools
To access NLP tools, an understanding and working knowledge of code (mainly python these days) is needed
The time it takes to learn code and apply it to asking questions about a text is large
Solution to PP1: Bring together an easy UI for NLP tools and the code behind it in a way to allow the user to use the tools, and give them the knowledge to further explore if they want to.
PP2: There are very few NLP tools available online
Current available tools lack direction and meaning for those utilizing them for non-code purposes
The tools are sparse and hard to find. To investigate a text requires a lot of time to research
Solution to PP2: Create a centralized source of new and existing NLP tools
Functionality:
This section outlines features to be implemented and how they are to be interacted with. It pulls inspiration from pain points to justify a feature.
Features
Bag-of ]-words maker (PP1)
Text input or file input of txt
AWS Lamda python function that tokenizes based on a few user selected criteria
An interactive word cloud made from the bag of words
Export bag of words as a CSV
Python playground to see how tokenization works
Material to further learn python/nlp ideas
Combines new NLP tools with bridging UI and code for new users to solve PP1
Parts of speech (PP1 + PP2)
Outsourced Iframe to coreNLP’s POS implementation. 
Add information, direction, and a python sandbox
Provides information and explanation of existing NLP tools to be used for a wide variety of users (PP1)
Adds existing content to central source (PP2)
Architecture:
This section outlines the different technologies and data that come together to make this web app. This will include an architecture diagram of the tech stack including external sources, and describe the flow of data through the web application.
Architecture Diagram

Data Flow
External Iframe content are the external tools already created that my web app brings together
A react.js frontend utilizes node for communicating with AWS Lambda functions written in python. Data is taken in by react, sent to a node.js backend, converted to JSON and sent as a payload to AWS
Python functions make the bag or words based on user set preferences and are sent back as a JSON payload to Node, then set in local storage on react
Methods
	This thesis project consists of a web application that serves as a toolbox for several NLP tools. In this section I’ll outline my justification for the tech stack used, how the idea came to be, and lastly how I have progressed with the web app over the semester. 
The web apps frontend was built in React.js. The choice to use React was for a few reasons. First, it is one of the most popular frontend frameworks currently used in industry. Second, it is easily expandable with many options to add new features. Third, it is the framework I am most comfortable with, having used it for other projects as well. For a backend, I am using Node.js. For the most part, the choice to use Node is for the exact same reasons as React. They pair very well together and create a very strong framework for a web application. I also utilize AWS Lambda for Natural Language Processing techniques. I wrote python code utilizing NLTK (an NLP toolkit imported through python) that takes user preferences and a text input in. It manipulates the text in the Lambda function instance and returns a JSON payload of a given bag of words. The last technology resource I use are IFrames. IFrames are a type of HTML5 tag that allows another website to be embedded in another. This is to centralize NLP resources and keep users in a single site as they explore NLP tools.
The idea for this web application came from my thesis exploration/research semester combined with taking CS490A, an introduction to Natural Language Processing course. Through my thesis exploration, I discovered that NLP tools were hard to access, specifically for those in the humanities. My background in Software Engineering focuses on making code easier to use and understand for a wider variety of people. This has been the focus of three different internship projects at MathWorks I have been involved in. By combining this passion with the newfound interest in NLP, I found a specific project I feel can make a huge difference in the NLP field. In talks with my thesis advisor Stephen Harris, we discussed many areas of interests and questions that his peers have regarding NLP that they would like to explore. The barrier of entry to answer these questions through data-driven answers is one that I saw should be lessened. I personally ran into this issue as I came up with a research paper topic for my own NLP project for class. This gave me an impactful project to contribute my own skills to the field of NLP. 
I work on this project in an Agile manner, constantly creating and changing directions to progress in an impactful way. Utilizing a sprint cycle with biweekly meetings, I present my progress to my thesis chair Stephen Harris and we discuss uses, changes, and next steps for the next two weeks. This has allowed me to create innovative and helpful features through changing directions in priorities over the semester.
Deployment
	This application was deployed utilizing Heroku. Heroku is an online deployment option  able to build, run, and operate web applications in the cloud. In order to deploy the application described in methods, Node Package Manager (NPM) is utilized as a package manager to handle all needed dependencies. After the web application is stored in a Github repository, the Heroku command line interface is utilized to link the repository to Heroku’s endpoints. Using the custom script, “"heroku-postbuild": "cd server && npm install && cd ../client && npm install && npm run build && mv -v -f build ../server"”, Heroku is taught the proper process to start and run every part of this application. This script first accesses the frontend and installs all dependencies needed, followed by the same for the backend. After this, the whole application is built and then moved to the backend server folder. After this process completes, Heroku has the current build and is able to run the front and backend concurrently. The link to the deployment can be found in the artifact section.
REFLECTIONS
Problems + Solutions
	Over the course of this semester there were three main problems that I faced and overcame. I first faced a large hurdle learning AWS Lambda, then overcame the UI design process, and finally went through a lengthy process to fully deploy my web application.
	One of the first steps I needed to take to begin completing this thesis project was to set up a way to utilize python’s Natural Language Toolkit (NLTK) in a cloud based environment. The easy choice for this was AWS Lambda as it allows free cloud based functions to be deployed and utilized with the tech stack I had already begun using. After brute creating an initial python Lambda function, I had to import NLTK. NLTK was not an available package import for AWS Lambda functions. This meant I had to somehow store NLTK functions in Lambda and have them be available to my python functions. Through lots of trial and error, I implemented NLTK successfully. To do this I had to utilize AWS Lambda Layers to deploy a dockerized version of a local copy of NLTK and set up the correct environment variable so that my python functions could successfully access this. Once this pipeline was set up, I could successfully use NLTK in my AWS environment. The last steps to finish my data pipeline was to connect to the AWS Lambda instance through the Node.js backend. This process went fairly smoothly and rounded out the struggle to implement AWS Lambda for the purpose of this project.
	The next problem I faced through my thesis was overcoming my own personal hardships with User Interface design. The process I enjoy most when creating web applications is the backend setup and implementation. I thoroughly enjoy creating data pipelines and establishing software infrastructure to manipulate data and make actions from it. Whatever I create in the backend however is unusable to others if they are unable to interact with it. This is where UI design comes into play. UI design is meant to create an easy-to-use interaction that allows the software to be utilized by anyone. In order to create a good frontend user design, you need to have a good sense of the end user and how they would like to interact with the software. This is something I achieved through working alongside my thesis advisor. We discussed an “engineering view” where all tools are right in front of the user but do not necessarily look good. In this state it is only usable to a very small population of people. The key to UI design I learned was how to turn an “engineering view” into one usable by your user base. Through working alongside a few peers from my classes, I was able to successfully take my lack of UI design knowledge and turn something that just looks good/usable by me to something usable by those whom this web application is meant to serve. Many decisions I made in this process were adjusting my page navigation, organizing the onpage tools, and making the whole web app tell a story as opposed to being many random tools all in one place.
	The last problem I overcame over the course of my thesis development was the process of deploying my web app. I originally was able to easily connect my Github repository to Heroku and could get a deployment running within a few minutes. Unfortunately, halfway through the semester Github had a security issue that Heroku needed to protect themselves from. This meant they took down the pipeline for deployment I had an understanding of using. I now needed to quickly find a new way to deploy my thesis and fast, as it was something I hadn’t allocated time to. There were 3 different deployment methods I then tried to implement. The first was to utilize AWS S3. AWS S3 was a good option as it is still free, utilizes the same credentials as AWS Lambda, and looked like it would support my whole web app. After spending several hours deploying to S3, I soon realized that only the Front End would deploy, and I could not host both front and backend utilizing S3. If I wanted to continue with this route, I would need to utilize some different service to deploy just the backend and then assure the two could communicate across the services. I decided to instead attempt an implementation using Netlify. After attempting an implementation here, I came across a very similar issue as S3. After doing some reading and consulting with peers, I decided to try Heroku again, but utilize the Command Line Interface instead. This is a different pipeline to deployment than the one shut down by Heroku as previously mentioned. After playing around with Heroku’s resources, I was able to successfully deploy my full web application as well as the connection to AWS Lambda. This allowed my changes to be continuously deployed and viewable on the web.

Suggestions for the Future
	My biggest regret for this project is it not being a group thesis project. There are two reasons I wish this was the course I took. Firstly, I feel the UI design I can bring to this project is not enough to make a well-rounded product. I amable to make usable React components, but I know that someone who specializes in Frontend design would have been able to add much more to this project. In addition, if my role had been to solely work on the backend, I believe I would have been able to implement many more tools within this project. Unfortunately, I cannot go back in the past, but only look towards the future. In the future, I would love to see another honors student take on this honors thesis and continue to add on to it. This would look like adding more features and contributing to an extensive NLP toolset for those within our institution and beyond.

ARTIFACT
Deployed Application
	The deployed application can be found here: https://dashapp-umass.herokuapp.com 
Github Repository
	All code for the web application is found here: https://github.com/elinottonson/dashapp 
Current Status of Ownership **To change before submission
	Github: Eli Nottonson **already collaborator
	Heroku: Eli Nottonson  **change ownership here
	AWS: Eli Nottonson **change ownership here
