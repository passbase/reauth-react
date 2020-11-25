![alt text](https://passbase.com/assets-v2/images/meta.jpg "Passbase Header")

# Passbase Reauthentication Demo

This App shows an the reauthentication flow of Passbase in an React App. It was built with Next.js, TypeScript and Styled Components.

## Live Demo

You can check out our hosted [Live Demo](https://passbase-reauth.vercel.app/)

## Run Yourself

Before your try to run the App please sign up on our [developer platform](https://app.passbase.com/signup) and copy **your own publishabe API key**, which can be found in the [API settings](https://app.passbase.com/settings/api) section.

### Setup

Create a new environment file called `.env.local` based on `.env.example` and set the `NEXT_PUBLIC_PASSBASE_PUBLISHABLE_KEY` variable to your own public key. You can also use an own [Pusher](https://pusher.com/) API key, but I left mine since I'm on a free plan here. 

### Install

Now you can install all dependenciens by running `yarn` or `npm install` in your projects root directory in terminal.

### Run

To run the App, run `npm run dev` or `yarn run dev` in your projects root directory in terminal.
