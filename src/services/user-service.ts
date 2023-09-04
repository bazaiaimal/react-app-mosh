import create from "./http-service";

export interface userProps {
    id: number;
    name: string;
}


export default create('/users');