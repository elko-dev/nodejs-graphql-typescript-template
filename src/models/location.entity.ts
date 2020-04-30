import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Model } from './model';

@Entity({ name: "Location" })
export class LocationEntity extends Model {

  @Column({ name: 'latitude' })
  @IsString()
  latitude!: string;

  @Column({ name: 'longitude' })
  @IsString()
  longitude!: string;

  @Column()
  @IsString()
  name!: string;

  @Column({ type: 'varchar', name: 'description', nullable: true })
  @IsString()
  description?: string;


}
