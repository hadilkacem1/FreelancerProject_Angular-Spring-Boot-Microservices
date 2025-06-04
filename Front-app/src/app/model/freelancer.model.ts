import { Validators } from "@angular/forms";

export class freelancer {
    constructor(
      public freelancerId?: number,
      public name?: string,
      public family_name?: string,
      public gender?: string,
      public mdp?:string,
      public address?: string,
      public email?: string,
    ) {}

  
  }
  