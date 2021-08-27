import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"users"})
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'email', type: 'varchar', length: 100 })
    email: string;

    @Column({ name: 'password', type: 'varchar', length: 255 })
    password: string;

}
