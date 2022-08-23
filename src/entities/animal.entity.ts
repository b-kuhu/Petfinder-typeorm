import { Entity,Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Shelter } from "./shelter.entity";
@Entity()

export class Animal{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string

    @Column()
    breed:string

    @OneToOne (()=>Shelter,shelter=>shelter.animal)
    shelter:Shelter;
}