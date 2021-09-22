'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question("q1 What's your name? Nicknames are also acceptable :) ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question("q2 What's an activity you like doing? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
const question3 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q3 What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question4 = () => {
  return new Promise((resolve, reject) => {
    rl.question('q4 Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question5 = () => {
  return new Promise((resolve, reject) => {
    rl.question("q5 What's your favourite thing to eat for that meal?", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
const question6 = () => {
  return new Promise((resolve, reject) => {
    rl.question("q6 Which sport is your absolute favourite?", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}
const question7 = () => {
  return new Promise((resolve, reject) => {
    rl.question("q7 What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  await question5()
  await question6()
  await question7()
  rl.close()
}

main()