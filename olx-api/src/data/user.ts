export interface IUsers {
    id:number,
    login:string,
    email:string,
    password:string
}

export interface IUserCreate extends Omit<IUsers, "id"> {};

export const users:IUsers[] = []