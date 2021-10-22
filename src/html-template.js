module.exports = askManagerData => {
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
    <section class="hero is-info">
        <div class="hero-body ">
            <p class="title">
                Team Roster
            </p>
            <p class="subtitle">
                Quick Overview of team and contact information
            </p>
        </div>
    </section>

    <main class="container my-5">
        <div class="columns is-multiline is-variable is-centered is-mobile is-7-desktop is-tablet is-fullhd">
        <div class="column is-narrow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    Name: ${askManagerData.name}
                </p>
                <p class="subtitle">
                    Role: ${askManagerData.role}
                    Manager Id: ${askManagerData.id}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: ${askManagerData.officeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="mailto: ${askManagerData.email}">${askManagerData.email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narow" >
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    Name: {Name}
                </p>
                <p class="subtitle">
                    Role: {Manager}
                    Manager Id: {number}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: {OfficeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="{email}">{email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narow" >
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    Name: {Name}
                </p>
                <p class="subtitle">
                    Role: {Manager}
                    Manager Id: {number}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: {OfficeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="{email}">{email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    Name: {Name}
                </p>
                <p class="subtitle">
                    Role: {Manager}
                    Manager Id: {number}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: {OfficeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="{email}">{email}</a>
                    </span>
                </p>
            </footer>
        </div>
    </div>
    <div class="column is-narow">
        <div class="card is-variable">
            <div class="card-content">
                <p class="title">
                    Name: {Name}
                </p>
                <p class="subtitle">
                    Role: {Manager}
                    Manager Id: {number}

                </p>
            </div>
            <footer class="card-footer">
                <p class="card-footer-item">
                    <span>
                        Office Id: {OfficeNumber}
                    </span>
                </p>
                <p class="card-footer-item">
                    <span>
                        Contact: <a href="{email}">{email}</a>
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
                <strong>Team Roster</strong> by <a href="{email}">{Name}</a>
            </p>
        </div>
    </footer>
</body>

</html>
`   
}