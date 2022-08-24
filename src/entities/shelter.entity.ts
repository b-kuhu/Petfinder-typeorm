import { Entity,Column,PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import {Animal }from './animal.entity';
import {Owner} from './owner.entity';
@Entity()
export class Shelter{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    roomNo:number

    @Column({type:'date',nullable:true})
    dateOfArrival:string

    @Column({type:'date',nullable:true})
    dateOfAdoption:string

    @OneToOne(()=>Animal,(animal)=> animal.shelter,{cascade:true,eager:true})
    @JoinColumn({
        name:'animalId'
    })
    animal : Animal;
 
    @OneToOne(()=>Owner,owner => owner.shelter,{cascade:true,eager:true})
    @JoinColumn({
        name:'ownerId'
    })
    owner:Owner;


}