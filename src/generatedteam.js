//Creating Manager card
const Engineer = require('../lib/Engineer');
const Intern  = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

const generateManager = function(manager){
    return`
    <div class="col-4">
    <div class="card h-auto">
        <div class="card-header bg-info text-white">
            <h2>Manager</h2>
            <h2>${manager.name}</h2>
            
        </div>
        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>    
    `;
}
//Creating Engineer card
const generateEngineer = function(engineer){
    return`
    <div class="col-4">
    <div class="card h-auto">
        <div class="card-header bg-info text-white">
            <h2>Engineer</h2>
            <h2>${engineer.name}</h2>
            
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
            <p class="office">Office Number: ${engineer.github}</p>
        </div>
    </div>
</div>    
    `;
}

//Creating Intern card
const generateIntern = function(intern){
    return`
    <div class="col-4">
    <div class="card h-auto">
        <div class="card-header bg-info text-white">
            <h2>Intern</h2>
            <h2>${intern.name}</h2>
            
        </div>
        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="${intern.email}">${intern.email}</a></p>
            <p class="office">Office Number: ${intern.school}</p>
        </div>
    </div>
</div>    
    `;
}

//Generate cards

generateTeamcards = (team) => {
    pageArray= [];

    for(let i=0; i<team.length; i++){
        const employee = team[i];
        const role = employee.getRole();


        if (role === 'Manager'){
            const managerCard = generateManager();
            pageArray.push(managerCard);
        }

        if (role === 'Engineer'){
            const engineerCard = generateEngineer();
            pageArray.push(engineerCard);
        }
        if (role === 'Intern'){
            const internCard = generateIntern();
            pageArray.push(internCard);
        }
    }

    //Joining the strings
    const employeeCard = pageArray.join('');

    //Returning the generated page
    const generateTeam = generatePage(employeeCard);
    return generateTeam;   

}

const generatePage = function (employeeCard){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>Team Builder</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    
    </head>
    <body>
        <header>
            <div class = "navbar" id ="navbar">
                <span class = "navbar-brand mb-0 h1 w-100 text-center bg-primary" 
                id = "navbar-title"><h1 class="fs-4 text-light">Team Builder</h1>
        </span>
    </div>
    </header>
        <main>
            <div class ="container">
                <div class ="row justify-content-center">
                    ${employeeCard}
                </div>
            </div>
        </main>
    </body>
    </html>
    
    `;
}


module.exports =generateTeamcards;

