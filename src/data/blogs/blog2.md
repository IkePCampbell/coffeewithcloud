I spent 3 wonderful years at the University of Northern Iowa spanning from the fall of 2016 to the spring of 2019. We have a wonderful Computer Science undergraduate program with dedicated professors, resources, and courses that allowed me to discover many incredible things about the realm of computing
<br>

<br>
As my senior year was winding down, the nerves and anxieties of applying for jobs were in full effect. I discovered the diverse set of tools different corporations use. Even when I got my first job, I felt like I was miles behind my co-workers who had been using these tools for a lot longer.
<br><br/>

---
<br>
To help all of you students and young professionals, here are my top 3 open-source tools that will help you with your studies, and give you a leg up on your future career. An in depth series of each tool be provided later :)

<br>

## 1. [Git](https://git-scm.com/) <br>

<br>
Of the three tools I'll show today, Git is by far the easiest to learn. One of the great perks of Git is it will prevent you from chugging Mountain Dew at 3 a.m. because you have to re-write deleted code from your project due in 5 hours.

<br>

Git is free and open source, designed to handle your HelloWorld.py file to your complex senior project. In my opinion, Git is the top of the line version control system (or VCS for short). With Git you can store your code either locally or at a remote location such as [www.github.com](https://www.github.com). With Git you can work with branches, which helps with the development lifescyle. You can revert your code to a prior version in anything goes wrong. You can easily access your code from any machine in case your laptop breaks. Are you working on a project with that partner you haven't talked to in all your years of studying? Git is intended for code sharing, so you and your partner can make changes, and you can always ensure your professor will get the optimal working code. Knowing Git is vital for software development, as every company uses some form of VCS to manage their code.

<br>

## 2. [Docker](https://docker.com) <br>
<br>

The idea of containerization is one you cannot avoid in the information technology world. Many websites today are comprised of decoupled microservices as opposed to a monolithic system. In terms of imagining the difference between microservices and monolithc systems: picture very small pebbles in the back of a truck, then picture a very large boulder in that truck. Which truck would you prefer to unload with and carry up a hill?

<br>
Docker can be a very complex tool, so I will definitely be covering it more in the future. At its core, Docker uses OS-level virtualization to package up software in what is called a "container".

<br>
A container is an isolated environment with all the libraries, software and configuration files. The containers communicate with one another over channels. Because containers are run by a single operating system kernel, they have less of a complex setup. This means containers require less resources, time, and manpower than virtual machines. 

<br>
Say you are taking "Intro to Full-Stack Development" which is taught by the wonderful Professor Edoc. You will be designing a backend website using Python and MongoDB. On top of that, Edoc is also forcing you to use certain Git credentials that connects to his server so he can keep tabs on your work. Do you really want to have to install some new software AND change your already existing credentials every single time you have to work on homework for his class? Thats a lot to work with and frankly we don't have the time for life being too difficult.

<br>
What you could do is create a container and install Python and Git, and have another container with purely just MongoDB. That way if your MongoDB container fails for some reason, your Python and Git container wont be affected. Remember that the containers are isolated from eachother. All data, files, and configuration are stored and kept inside the container. Then when you ace that class like the boss you are, you can just delete the containers with 2 clicks! You dont have to worry about tracking down uninstall files or screwing up any existing environments.

<br>
In a future tutorial I will show you how to speed up some local development using Docker.

<br>

## 3. [Jenkins](https://jenkins.io) <br>
<br>

In my opinion, Jenkins is more for heavy group project scenarios, but you can definitely use it for a solo project! Jenkins is an automation server, primarily for help building, testing, and deploying. It is also a tool that produces continuous integration and continuous delivery or CI/CD. CI/CD are necessary practices, used every day in order to help developers release working builds for their products.

<br>
You can integrate Jenkins with Docker and Git as well as many other tools such as Azure and Kubernetes! There is a lot to explore with Jenkins with the various plugins and tools you can use so Jenkins can fit to exactly what you need or want for a specific project.

<br>

In a more applicable example, say you are working on a project with multiple students, two who have been known to break group projects with sloppy code. You can't be bothered to watch over their shoulders for every single code change they make, and you don't want any bad code being saved. With a little bit of Git and Jenkins magic, you can set up a testing suite within Jenkins to always run tests to ensure the code that is being built is up to your standards. You can even document, and run different kinds of analytics on the code being tested. Using Jenkins is a great way for you to almost guarantee your code is the best it can be. This will ensure that Bad-Code-Charlie and his brother wont be able to make your life miserable.

<br>

---


<br>
I hope that you can start implementing some of these tools in your courses or even just side projects. If you do create anything using some of these tools, I'd love to see it! 


