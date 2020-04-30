import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { Model } from './model';

@Entity({ name: "Location" })
export class LocationEntity extends Model {

  @Column({ name: 'latitude', length: 51 })
  @IsString()
  latitude!: string;

  @Column({ name: 'longitude', length: 51 })
  @IsString()
  longitude!: string;

  @Column()
  @IsString()
  name!: string;

  @Column({ type: 'varchar', name: 'description', nullable: true })
  @IsString()
  description?: string;


}
