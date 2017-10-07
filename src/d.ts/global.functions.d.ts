declare namespace glFunctions {
  export interface global {
    test(): void;
  }
}

// declare module NodeJS  {
//   interface Global {
//     test(): void;
//   }
// }

declare var global: glFunctions.global;
