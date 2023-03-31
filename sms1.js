import inquirer from "inquirer";
import chalk from "chalk";
async function SMS() {
    const student = [];
    let title = `------: Welcome To PIAIC Student Management System :------ \n\n`;
    console.log(chalk.greenBright.bold(title));
    let descriptionHead = `Description : `;
    console.log(chalk.redBright.bold(descriptionHead));
    let description = `Welcome to PIAIC ,\nWe offer a wide range of modern technology based courses that are future proof and will encourage and motivate the youth of Pakistan to prosper in International Market and show the world that Pakistan has also got some real talent. \n`;
    console.log(chalk.blueBright(description));
    let sData = await inquirer.prompt([
        {
            name: 'enrollPermission',
            type: 'confirm',
            message: 'Would you like to get enrolled in any of our courses ? Press Y for yes and N for no.'
        },
        {
            name: 'sName',
            type: 'input',
            message: 'Enter your full name: ',
        },
        {
            name: 'sFName',
            type: 'input',
            message: 'Enter father name: ',
        },
        {
            name: 'sCnicNum',
            type: 'number',
            message: 'Enter your CNIC number: ',
        },
        {
            name: 'courses',
            type: 'list',
            message: 'Select the course you wanna get enrolled: ',
            choices: ['Artificial Intelligence', 'Blockchain', 'Internet Of Things', 'Cloud Native Computing']
        },
        {
            name: 'studyType',
            type: 'list',
            message: 'Select the way you wanna learn: ',
            choices: ['Online Learning', 'Onsite Learning']
        }
    ]);
    if (sData.studyType == 'Online Learning') {
        let onlineFee = `$12000`;
        console.log(`For online learning process , Your annual fee is ${chalk.red(onlineFee)}. \n`);
    }
    else if (sData.studyType == 'Onsite Learning') {
        let onsiteFee = `$20000`;
        console.log(`For onsite learning process , Your annual fee would be ${chalk.red(onsiteFee)}. \n`);
    }
    let fdHead = `Fee Description: `;
    console.log(chalk.redBright.bold(fdHead));
    let feeDescription = `In order to get started with learning the upcoming top noch technologies with us you must have to pay the tution Fee first . Remember the fee structure for online and onsite learning may vary . After paying the tution fee you will be given a unqiue ID number which will be further used to identify your identity .  \n`;
    console.log(chalk.blueBright(feeDescription));
    let payFee = await inquirer.prompt([
        {
            name: 'feeOptions',
            type: 'list',
            message: 'You can pay the fee in two ways:',
            choices: ['One Time Annual Fee', 'Monthly Installments']
        },
    ]);
    if (payFee.feeOptions == 'One Time Annual Fee') {
        if (sData.studyType == 'Online Learning') {
            let onlineFee = `$12000`;
            console.log(`For online learning process , Your annual fee is ${chalk.red(onlineFee)}. \n`);
        }
        else if (sData.studyType == 'Onsite Learning') {
            let onsiteFee = `$20000`;
            console.log(`For onsite learning process , Your annual fee would be ${chalk.red(onsiteFee)}. \n`);
        }
    }
    else if (payFee.feeOptions == 'Monthly Installments') {
        if (sData.studyType == 'Online Learning') {
            let onlineFee = `$1000`;
            console.log(`For online learning process , Your monthly installment would be ${chalk.red(onlineFee)}. \n`);
        }
        else if (sData.studyType == 'Onsite Learning') {
            let onsiteFee = `$1700`;
            console.log(`For onsite learning process , Your monthly installment would be ${chalk.red(onsiteFee)}. \n`);
        }
    }
    let bankingOpt = await inquirer.prompt([
        {
            name: 'bankOptions',
            type: 'list',
            message: 'Select your bank: ',
            choices: ['Habib Bank', 'Meezan Bank', 'Askari Bank', 'National Bank']
        },
        {
            name: 'accNum',
            type: 'number',
            message: 'Enter your bank account number to pay tution fee: '
        }
    ]);
    let sID = Math.floor(Math.random() * 90000) + 100000;
    console.log(chalk.yellowBright.bold(`Congratulations! ${sData.sName} on getting enrolled in our ${sData.courses} course . Your Unique ID number is ${sID} . \n`));
    function showStatus() {
        console.log(`Student ID =  ${sID}`);
        console.log(`Student Name =  ${sData.sName}`);
        console.log(`Student Father Name =  ${sData.sFName}`);
        console.log(`Student CNIC Number =  ${sData.sCnicNum}`);
        console.log(`Course Enrolled =  ${sData.courses}`);
        console.log(`Learning platform =  ${sData.studyType}`);
        console.log(`Fee Status =  Paid\n\n`);
    }
    let students = student.push(sID.toString(), sData);
    console.log(student);
    let sDashboard = await inquirer.prompt([
        {
            name: 'dbOptions',
            type: 'list',
            message: `Welcome to student dashboard: `,
            choices: ['View Status', 'Course Detail', 'Fee Payment Record', 'Exit']
        }
    ]);
    if (sDashboard.dbOptions == 'View Status') {
        console.log(showStatus());
    }
    else if (sDashboard.dbOptions == 'Course Detail') {
        console.log(`Visit our official website piaic.com for course details.`);
    }
    else if (sDashboard.dbOptions == 'Fee Payment Record') {
        console.log(`Visit our official website piaic.com now for fee payment record.`);
    }
    else if (sDashboard.dbOptions == 'Exit') {
        console.log(chalk.redBright.bold(`Thanks for using Student Management System`));
    }
}
async function startAgain() {
    do {
        await SMS();
        var again = await inquirer.prompt([
            {
                name: 'restart',
                type: 'input',
                message: 'Would you like to visit again ? Press Y for yes and N for no.'
            }
        ]);
    } while (again.restart == 'Y' || again.restart == 'y' || again.restart == 'Yes' || again.restart == 'yes' || again.restart == 'YES');
}
startAgain();
