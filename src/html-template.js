module.exports = teamRoster => {
   return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My team Roster</title>


    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section class="hero is-link">
        <div class="hero-body">
            <p class="title">
                Team Members
            </p>
            <p class="subtitle">
                Team contact information
            </p>
        </div>
    </section>

    <main class="container my-5">
        <div class="columns is-multiline is-variable is-centered is-mobile is-7-desktop is-tablet is-fullhd">
        <div class="column is-narrow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    ${teamRoster[0].name}
                </p>
                <p class="subtitle">
                    Role: ${teamRoster[0].role} <br>
                    ID: ${teamRoster[0].id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: ${teamRoster[0].officeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="mailto: ${teamRoster[0].email}">${teamRoster[0].email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
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
    <div class="column is-narrow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    ${teamRoster[3].name}
                </p>
                <p class="subtitle">
                    Role: ${teamRoster[3].role}<br>
                    ID: ${teamRoster[3].id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                School:    
                    <span>
                         ${teamRoster[3].school}
                    </span>
                </p>
                <p class="card-footer-item">
                Contact:   
                    <span>
                         <a href="mailto:  ${teamRoster[3].email}"> ${teamRoster[3].email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narrow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    ${teamRoster[4].name}
                </p>
                <p class="subtitle">
                    Role: ${teamRoster[4].role}<br>
                    ID: ${teamRoster[4].id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                School:    
                    <span>
                     ${teamRoster[4].school}
                    </span>
                </p>
                <p class="card-footer-item">
                Contact:    
                    <span>
                         <a href="mailto: ${teamRoster[4].email}"> ${teamRoster[4].email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
</div>
    </main>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Team Roster</strong> by ${teamRoster[0]}</a>
            </p>
            <span>${teamRoster[1]}${teamRoster[2]}${teamRoster[3]}${teamRoster[4]}</span>
        </div>
    </footer>
</body>

</html>
`   
}