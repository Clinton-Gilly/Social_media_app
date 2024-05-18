import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint('https://api.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('66102da99c1bacd215b6'); // Your project ID

const databases = new Databases(client);

export { client, databases };