// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    api: {
        protocolo: 'http',
        host: 'back.truckpad.ddns.net',
        get url() {
            return `${this.protocolo}://${this.host}/api`;
        }
    }
};
