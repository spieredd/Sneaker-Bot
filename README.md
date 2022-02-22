# Sneaker-Bot
![](https://forthebadge.com/images/badges/for-robots.svg) ![](https://forthebadge.com/images/badges/powered-by-netflix.svg)
---
## About

Sneaker-Bot is an open-source software specialized for **[Snkrs](https://www.nike.com/fr/launch) raffle**.

## Get started

You will need to install **[Node.js](https://nodejs.org/)**.

***1. Clone the repository:***

    git clone https://github.com/science-math-guy/Sneaker-Bot.git
 
 ***2. Install the NPM dependecies:***
 
    npm install
 
***3. Run the bot:***

    npm start
 
 ## Contribute

Anyone can contribute to the project by **forking** the repository.

To run the project on **development mode**:

    npm run dev

## Deploy

1. Setup a Firebase function:

The best way to deploy this bot would be to set up a schedule Firebase function like the one below:

        exports.sneakerbot = functions.pubsub.schedule('every 1 minutes').timeZone('Europe/Paris').onRun(async(context) => {
            await axios.post('https://example.com', {}, {}).then((res) => {
                console.log(res.data);
            });
        });
        
For more about deployement by either visit the [Firebase Functions docs](https://firebase.google.com/docs/functions) or [contact me](##Contact).

## NPM Dependencies

- ***[Dotenv](https://www.npmjs.com/package/dotenv)***
- ***[Puppeteer-cluster](https://www.npmjs.com/package/puppeteer-cluster)***
- ***[Puppeteer-extra](https://www.npmjs.com/package/puppeteer-extra)***
- ***[Puppeteer-extra-plugin-stealth](https://www.npmjs.com/package/puppeteer-extra-plugin-stealth)***
- ***[Puppeteer-extra-plugin-recaptcha](https://www.npmjs.com/package/puppeteer-extra-plugin-recaptcha)***

### (Dev Dependencies)

- ***[Nodemon](https://www.npmjs.com/package/nodemon)***

## Contact

- **Github: [Science-math-guy](https://github.com/science-math-guy)**
- **Email:  [ad@one-design.fr](mailto:ad@one-design.fr)**
- **Instagram: [adrydmt](https://instagram/adrydmt)**
 
