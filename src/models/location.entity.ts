import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Model } from './model';

@Entity({ name: "Location" })
export class LocationEntity extends Model {

  @Column({ name: 'latitude' })
  @IsString()
  latitude!: number;

  @Column({ name: 'longitude' })
  @IsString()
  longitude!: number;

  @Column()
  @IsString()
  name!: string;

  @Column({ type: 'varchar', name: 'description', nullable: true })
  @IsString()
  description?: string;


}
