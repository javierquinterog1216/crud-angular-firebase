// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBXJek8xPH_lsMfwzb4Jjc38Zlyzyu_n-0',
    authDomain: 'crud-angular-firebase-6f5a4.firebaseapp.com',
    databaseURL: 'https://crud-angular-firebase-6f5a4.firebaseio.com',
    projectId: 'crud-angular-firebase-6f5a4',
    storageBucket: 'crud-angular-firebase-6f5a4.appspot.com',
    messagingSenderId: '889788450349'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
