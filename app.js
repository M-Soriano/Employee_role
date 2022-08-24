const inquirer = require('inquirer');
const fs = require('fs');
const generateteamlist = require('./src/generatedteam');
//const jest =require('jest');

const Engineer = require('./lib/Engineer');
const Intern  = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

 
//array for answer
const teamlist = [];

const Questions = async () => {
    const Answers =  await inquirer
    .prompt([
        {
            type: 'input',
            message: 'Name of Employee?',
            name: 'name',
            validate: username => {
                if (username) {
                    return true;
                }
                else {
                    console.log('Enter a name')
                }
            }
        },
        
        {
            type: 'input',
            message: 'what is their ID number?',
            name: 'id',
            validate: userid => {
                if (userid) {
                    return true;
                }
                else {
                    console.log('Enter an ID')
                }
            }
        },
        {
            type: 'input',
            message: 'What is their E-mail?',
            name: 'email',
            validate: useremail => {
                if (useremail) {
                    return true;
                }
                else {
                    console.log('Enter an E-mail')
                }
            }
        },
        {
            type: 'list',
            message: 'What is your role?',
            name: 'role',
            choices: ['Engineer','Intern','Manager'],
        },
    ])
    console.log('step1 check');
    //input for role

    if (Answers.role === 'Manager'){
        const Manageranswer = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your office number?',
                name: 'officenumber',
                validate: userofficenumber => {
                    if (userofficenumber) {
                        return true;
                    }
                    else {
                        console.log('Enter an office number')
                    }
                }
            },
            ])
            const newManager = new Manager(
                Answers.name,
                Answers.id,
                Answers.email,
                Manageranswer.officenumber
            );
            console.log(newManager);
            teamlist.push(newManager);
    }
    else if (Answers.role === 'Engineer'){
        const Engineeranswer = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your gitHub?',
                name: 'github',
            },
            ])
            const newEngineer = new Engineer(
                Answers.name,
                Answers.id,
                Answers.email,
                Engineeranswer.github
            );
            teamlist.push(newEngineer);
    }
    else if (Answers.role === 'Intern'){
        const Internanswer = await inquirer
        .prompt([
            {
                type: 'input',
                message: 'What University are you from?',
                name: 'school',
            },
            ])
            const newIntern = new Intern(
                Answers.name,
                Answers.id,
                Answers.email,
                Internanswer.school
            );
            teamlist.push(newIntern);
    }
};

async function promptQuestions(){
    await Questions();
    
    const addTeam = await inquirer
    .prompt([
        {
            
            type:'comfirm',
            name: 'addEmployee',
            message:'What would you like to add a member(Press Enter to write file)?'
              
            
        }
        
    ])
    console.log('stepone');
    if (addTeam.addEmployee){
        return promptQuestions();
    }
    else {
        console.log(teamlist);
        return maketeam();
    }
   

}

promptQuestions()

function maketeam(){
    console.log('step3')
    fs.writeFileSync(
        './dist/index.html',
        generateteamlist(teamlist),
        console.log('building'),
        (err) =>
        console.log('error')
    );

}



