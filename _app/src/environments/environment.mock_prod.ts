export const environment = {
  production: true,
  firebase: {
    apiKey: 'AIzaSyBcS0SlTGqlyIOjScRHCWJrX44ePVyZd3s',
    authDomain: 'saude-sys.firebaseapp.com',
    databaseURL: 'https://saude-sys.firebaseio.com',
    projectId: 'saude-sys',
    storageBucket: 'saude-sys.appspot.com',
    messagingSenderId: '792428214248',
    appId: "1:792428214248:web:4d5da73f2a1ebbdf97d65d"
  },
  api: {
    protocolo: 'http',
    host: 'backtruckpad.ddns.net',
    get url(){
      return `${this.protocolo}://${this.host}/api`
    }
  }
};
