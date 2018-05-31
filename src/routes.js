// export const routes = {
//   home: {
//     about: {
//       intro: '/home/about/intro',
//       personal: '/home/about/personal',
//       interests: '/home/about/interests',
//       connect: '/home/about/connect'
//     },
//     preview: {
//       dynamo: '/home/preview/dynamo',
//       captis: '/home/preview/captis',
//       burris: '/home/preview/burris',
//       hackathon: '/home/preview/hackathon'
//     }
//   },
//   case: {
//     dynamo: '/case/dynamo',
//     captis: '/case/captis'
//   }
// }

export const HOME = '/home';

export const ABOUT = `${HOME}/about`;
export const INTRO = `${ABOUT}/intro`;
export const PERSONAL = `${ABOUT}/personal`;
export const INTERESTS = `${ABOUT}/interests`;
export const CONNECT = `${ABOUT}/connect`;

export const PREVIEW = `${HOME}/preview`;
export const DYNAMO_PREVIEW = `${PREVIEW}/dynamo`;
export const CAPTIS_PREVIEW = `${PREVIEW}/captis`;
export const BURRIS_PREVIEW = `${PREVIEW}/burris`;
export const HACKATHON_PREVIEW = `${PREVIEW}/hackathon`;

export const CASE = '/case';
export const DYNAMO_CASE = `${CASE}/dynamo`;
export const CAPTIS_CASE = `${CASE}/captis`;