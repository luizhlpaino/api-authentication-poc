import { UUID } from 'crypto';
import { Column, Entity, ColumnOptions, PrimaryColumn } from 'typeorm';

@Entity('user')
export class User {        
    @PrimaryColumn('uuid')
    id: UUID;
    
    @Column('varchar')
    name: string;

    @Column('varchar')
    email: string;
}