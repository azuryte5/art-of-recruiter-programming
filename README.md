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
The URL of the GitHub repository: https://github.com/azuryte5/art-of-recruiter-programming

The link to the Screencastify video:

-----
## Usage
Function of the is application is to have a manager run the command line and input the data of themselves and their team.
-----
## Tech Used 

- Node js
- Jest
- Inquirer
- Bulma for html styling

-----
## Assignment Details

- Tests all pass
- Didn't need to use a css as html page has Bulma instead.
- Validation commands added to inquirer questions.

### User Story

```
AS A Manager

I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles

```

### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
[✔️]THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
[✔️]THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
[✔️]THEN that GitHub profile opens in a new tab
WHEN I start the application
[✔️]THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
[✔️]THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
[✔️]THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
[✔️]THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
[✔️]THEN I exit the application, and the HTML is generated
```
----
## Credits
Made by Andrew Lefebvre 📋

-----