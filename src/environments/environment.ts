// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDrf8tiZdmrspmQw-IWSjfe5E_hGJDCp98",
    authDomain: "jamboxmusicapp.firebaseapp.com",
    databaseURL: "https://jamboxmusicapp.firebaseio.com",
    projectId: "jamboxmusicapp",
    storageBucket: "jamboxmusicapp.appspot.com",
    messagingSenderId: "291849800543"
  },
  youTubeAPIKey: 'AIzaSyBwTqh7G-xV4WWZg_-QFB04K4vCPjLXzAY'
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
