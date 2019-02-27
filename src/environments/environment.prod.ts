export let BASE_URL = '';


export const environment = {
  production: true,
  BASE_URL: 'https://jd-intentserver.herokuapp.com'
};


switch (window.location.hostname){
  case 'https://ajj-intents.herokuapp.com':
    BASE_URL = 'https://jd-intentserver.herokuapp.com';
    break;
  default:
    BASE_URL = 'http://localhost:3000';
}