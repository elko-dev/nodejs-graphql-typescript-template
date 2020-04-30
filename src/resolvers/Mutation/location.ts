import { MutationCreateLocationArgs, LocationResponse, Error, Location } from "../../graphql/generated";
import LocationService from "../../service/location.service";

export const location = {
    async createLocation(_, args: MutationCreateLocationArgs): Promise<LocationResponse> {
        try {
          const locationService: LocationService = new LocationService();
    
          const location: Location = await locationService.createLocation(args);
          return {
            location: location,
            errors: []
          };
        }
        catch (error) {
          console.log(error);
          return {
            location: null,
            errors: [createError(error)]
          };
        }
      },
};


function createError(error: any): Error {
    return {
      message: error
    };
  }