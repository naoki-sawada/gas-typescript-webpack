declare namespace glFunctions {
  export interface global {
    test(): void;
  }
}

declare var global: glFunctions.global;