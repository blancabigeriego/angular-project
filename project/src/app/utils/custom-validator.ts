import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static noCurse(control: AbstractControl): ValidationErrors | null {
    try {
      const value = control.value;

      if (typeof value === "string") {
        if (
          value.toLowerCase().includes("shit") ||
          value.toLowerCase().includes("cock") ||
          value.toLowerCase().includes("fuck") ||
          value.toLowerCase().includes("motherfucker") ||
          value.toLowerCase().includes("fucking") ||
          value.toLowerCase().includes("fucker") ||
          value.toLowerCase().includes("cunt") ||
          value.toLowerCase().includes("ballsack") ||
          value.toLowerCase().includes("wanker") ||
          value.toLowerCase().includes("arsehole") ||
          value.toLowerCase().includes("asshole") ||
          value.toLowerCase().includes("bullshit") ||
          value.toLowerCase().includes("nigga") ||
          value.toLowerCase().includes("nigger") ||
          value.toLowerCase().includes("twat") ||
          value.toLowerCase().includes("dick") ||
          value.toLowerCase().includes("knob") ||
          value.toLowerCase().includes("motherfucker") ||
          value.toLowerCase().includes("bellend") ||
          value.toLowerCase().includes("bitch") ||
          value.toLowerCase().includes("dickhead")
        ) {
          return { noCurse: true };
        }
        return null;
      } else {
        for (let line of value) {
          if (
            line.toLowerCase().includes("shit") ||
            line.toLowerCase().includes("cock") ||
            line.toLowerCase().includes("fuck") ||
            line.toLowerCase().includes("motherfucker") ||
            line.toLowerCase().includes("fucking") ||
            line.toLowerCase().includes("fucker") ||
            line.toLowerCase().includes("cunt") ||
            line.toLowerCase().includes("ballsack") ||
            line.toLowerCase().includes("wanker") ||
            line.toLowerCase().includes("arsehole") ||
            line.toLowerCase().includes("asshole") ||
            line.toLowerCase().includes("bullshit") ||
            line.toLowerCase().includes("nigga") ||
            line.toLowerCase().includes("nigger") ||
            line.toLowerCase().includes("twat") ||
            line.toLowerCase().includes("dick") ||
            line.toLowerCase().includes("knob") ||
            line.toLowerCase().includes("motherfucker") ||
            line.toLowerCase().includes("bellend") ||
            line.toLowerCase().includes("bitch") ||
            line.toLowerCase().includes("dickhead")
          ) {
            return { noCurse: true };
          }
        }
        return null;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
