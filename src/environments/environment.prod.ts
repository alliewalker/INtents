export let BASE_URL = '';


export const environment = {
  production: true,
};


switch (window.location.hostname){
  case 'https://aw-intents.herokuapp.com/':
    BASE_URL = 'https://aw-intents-server.herokuapp.com/';
    break;
  default:
    BASE_URL = 'http://localhost:3000';
}