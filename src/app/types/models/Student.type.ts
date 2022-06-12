import { Course } from "./Course.type"

export type Student = {
    id : number,
    name: string,
    lastName: string,
    birthday: Date,
    email: string,
    city: string,
    street: string,
    community:string,
    country: string,
    zipCode:  number,
    createBy: string,
    createdAt: Date,
    updateBy:string,
    updatedAt:Date,
}