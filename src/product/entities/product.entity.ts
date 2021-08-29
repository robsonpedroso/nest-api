import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"products"})
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'title', type: 'varchar', length: 250 })
    title: string;

    @Column({ name: 'subtitle', type: 'varchar', length: 500 })
    subtitle: string;

    @Column({ name: 'detail', type: 'varchar', length: 2000 })
    detail: string;

    @Column({ name: 'summary', type: 'varchar', length: 1000 })
    summary: string;

    @Column({ name: 'price', type: 'decimal', precision: 13, scale: 2 })
    price: number;
}
