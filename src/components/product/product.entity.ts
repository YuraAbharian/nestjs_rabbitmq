import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

/** ProductEntity */
@Entity('products')
export class ProductEntity {
    /**
     * id - {string}
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * title: string;
     */
    @Column()
    title: string;

    /**
     * image: string;
     */
    @Column()
    image: string;

    /**
     * likes - {number}
     */
    @Column({ default: 0 })
    likes: number;
}
