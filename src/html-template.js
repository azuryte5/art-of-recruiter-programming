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

const intern =teamRoster.filter(function(member){
    if (member.role === "Intern") {return true}
});
console.log(intern)
const generateIntern = intern =>{
return `
        ${intern.map(({name, id, email, role, school}) => {
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
                School:    
                    <span>
                         ${school}
                    </span>
                </p>
                <p class="card-footer-item">
                Contact:   
                    <span>
                         <a href="mailto:  ${email}"> ${email}</a>
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
    ${generateIntern(intern)}
    </main>
    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Team Roster</strong> by ${leader.name}</a>
            </p>            
           
        </div>
    </footer>
</body>

</html>
`   
}
