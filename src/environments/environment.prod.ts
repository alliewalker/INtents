export const environment = {
  production: true
};

export let BASE_URL = '';


switch (window.location.hostname){
  case 'https://ajj-intents.herokuapp.com/':
    BASE_URL = 'https://jd-intentserver.herokuapp.com/'
    break;
  default:
    BASE_URL = 'http://localhost:3000';
}
