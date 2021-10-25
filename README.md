# art-of-recruiter-programming
Week 10 Challenge  - Team Roster Generator
# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. 
1. [Credits](#credits)
----
## Links
The URL of the GitHub repository:

The link to the Screencastify video:

-----
## Usage

-----
## Tech Used 
// This is engineer presentation code.
 <div class="column is-narrow" >
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    ${teamRoster[1].name}
                </p>
                <p class="subtitle">
                    Role: ${teamRoster[1].role} <br>
                    ID: ${teamRoster[1].id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                Github:    
                    <span>
                         <a href="https://github.com/${teamRoster[1].getGithub()}">${teamRoster[1].getGithub()}
                    </span>
                </p>
                <p class="card-footer-item">
                    Contact:     
                    <span>
                        <a href="mailto: ${teamRoster[1].email}"> ${teamRoster[1].email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narrow" >
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    ${teamRoster[2].name}
                </p>
                <p class="subtitle">
                    Role: ${teamRoster[2].role}<br>
                    ID: ${teamRoster[2].id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    Github:
                    <span>
                    <a href="https://github.com/${teamRoster[2].getGithub()}">${teamRoster[2].getGithub()}
                    </span>
                </p>
                <p class="card-footer-item">
                Contact:    
                    <span>
                         <a href="mailto:  ${teamRoster[2].email}"> ${teamRoster[2].email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>


-----
## Assignment Details

### User Story

```
AS A Manager

I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```

### Acceptance Criteria
✔️
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
[ ]THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
[ ]THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
[ ]THEN that GitHub profile opens in a new tab
WHEN I start the application
[ ]THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
[ ]THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
[ ]THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
[ ]THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
[ ]THEN I exit the application, and the HTML is generated
```
----
## Credits
Made by Andrew Lefebvre 📋

-----