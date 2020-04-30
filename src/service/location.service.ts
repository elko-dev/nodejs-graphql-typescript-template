import { MutationCreateLocationArgs, Location } from "../graphql/generated";
import { LocationEntity } from "../models/location.entity";
import { Repository, getRepository } from "typeorm";

export default class LocationService {
    private repo: Repository<LocationEntity> = getRepository(LocationEntity);
    public async getLocations(): Promise<Location[]> {
        const locations: LocationEntity[] = await this.repo.find();
        return locations.map((location) => {
            const loc: Location = {
                id: String(location.id),
                latitude: +location.latitude,
                longitude: +location.longitude,
                name: location.name,
                description: location.description,
            };
            return loc;
        });
    }
    public async createLocation(args: MutationCreateLocationArgs): Promise<Location> {
        const newLocation: LocationEntity = new LocationEntity();

        newLocation.latitude = String(args.latitude);
        newLocation.longitude = String(args.longitude);
        newLocation.name = args.name;
        newLocation.description = args.description!;
        const savedLocation: LocationEntity = await this.repo.save(newLocation);
        return {
            id: String(savedLocation.id),
            latitude: +savedLocation.latitude,
            longitude: +savedLocation.longitude,
            name: savedLocation.name,
            description: savedLocation.description
        };
    }

}