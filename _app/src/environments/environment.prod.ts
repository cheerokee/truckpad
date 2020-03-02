// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
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
        host: 'truckpad.dev.br',
        get url() {
            return `${this.protocolo}://${this.host}/api`;
        }
    }
};
