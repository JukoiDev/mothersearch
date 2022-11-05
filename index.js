#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const title = chalkAnimation.glitch(
    'I am going to search for Your mother! \n'
  )

  await sleep();
  title.stop();

  console.log(`
    ${chalk.bgBlue('HOW TO SEARCH FOR MOTHER')} 
    I am a process on your computer.
    I will search for YOUR MOTHER but only...
    If you will pass me her name
  `);

  await inquirer.prompt({
    name: 'motehr',
    type: 'input',
    message: 'What is your mothers name?',
    default() {
      return 'Karen';
    },
  });
}

async function search() {
    const title = chalkAnimation.radar(
        'SEARCHING FOR KAREN', 0.2
      )
    
      await sleep(7000);
      title.stop();

      console.log(chalk.bgBlue('SORRY, NO MOTHER NOR FATHER FOUND YOURE FATHERLESS UND MATHERLESS'));
}

console.clear();
await welcome();
await search ();