// let nombre = "Ada";    /* INFIERE EL TIPO DE DATO */

// nombre = 5;

// let nombre: Number = 44.3   /* LE DIGO YO QUE TIPO DE DATO ES */

// nombre = 44.5

// let isChecked: Boolean = true

// isChecked = false

// let isMayor: Function = () => {}

// let algo: undefined | String = 5 > 6 || 4 > 6 ? undefined : "djdsa"

// let cualquiera: null = null

// let param: any = 5

// function esIgual(n: any): any {   /* EVITAR TIPO ANY */
//   const num: any = 5 + n

//   return num
// }

// let param: number = 5

// function esIgual(n: number): number {   /* ASI SE DEBERIA TRABAJAR EN TYPESCRYPT */
//   const num: number = 5 + n

//   return num
// }

interface motorolaG {
  title: string;
  isChecked: boolean;
  quantity?: number;
}

let allTasks: Array<motorolaG> = [{ title: "Hacer algo", isChecked: true }];
