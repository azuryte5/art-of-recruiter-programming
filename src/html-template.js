module.exports = teamRoster => {
const main = teamRoster.filter(function(member){
    if (member.role === "Manager") {return true}
    });
    console.log(main)
    const [leader] = main;

const generateMain=leader => {    
const {name, id, email, role, officeNumber} =leader
return `<div class="column is-narrow">
<div class="card is-variable">
    <div class="card-content">
        <p class="title">
        ${name}
        </p>
        <p class="subtitle">
            Role: ${role} <br>
            ID: ${id}

        </p>
    </div>
    <footer class="card-footer">
        <p class="card-footer-item">
            <span>
                Office Id: ${officeNumber}
            </span>
        </p>
        <p class="card-footer-item">
            <span>
                Contact: <a href="mailto: ${email}">${email}</a>
            </span>
        </p>
    </footer>
</div>
</div>`
}

const engineer =teamRoster.filter(function(member){
    if (member.role === "Engineer") {return true}
});
console.log(engineer)
// const [second] = engineer
const generateEngine = engineer =>{

return `
        ${engineer.map(({name, id, email, role, github}) => {
        return `
<div class="column is-narrow">
<div class="card is-variable">
    <div class="card-content">
        <p class="title">
         ${name}
        </p>
        <p class="subtitle">
            Role: ${role} <br>
            ID: ${id}

        </p>
    </div>
    <footer class="card-footer">
    <p class="card-footer-item">
    Github:    
        <span>
             <a href="https://github.com/${github}">${github}</a>
        </span>
    </p>
    <p class="card-footer-item">
        Contact:     
        <span>
            <a href="mailto: ${email}"> ${email}</a>
        </span>
    </p>
</footer>
</div>
</div>
`;
})
.join('')}
`;
};
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
    ${generateMain(leader)}
    ${generateEngine(engineer)}    
    
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
           
        </div>
    </footer>
</body>

</html>
`   
}
