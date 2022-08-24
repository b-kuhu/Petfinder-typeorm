import { Entity,Column,PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Shelter } from "./shelter.entity";
@Entity()
export class Owner{
    @PrimaryGeneratedColumn()
    owner_id:number;

    @Column()
    owner_name:string

    @Column({type:'bigint',nullable:true})
    contact:string

    @Column()
    address:string

    @OneToOne(()=>Shelter,shelter =>shelter.owner)
    shelter:Shelter;
}