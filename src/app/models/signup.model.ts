import { lastValueFrom } from "rxjs";

export interface Signup {
    id: string;
    firstname: string;
    lastname : string;
    email:string;
    username: string;
    password:string;
}