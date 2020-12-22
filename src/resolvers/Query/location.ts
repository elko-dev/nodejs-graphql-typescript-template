import { QueryGetLocationsArgs, LocationsResponse, Location, Error } from "../../graphql/generated";
import LocationService from "../../service/location.service";

export const getLocation = {
    async getLocations(_, args: QueryGetLocationsArgs): Promise<LocationsResponse> {
        try {
            const locationService: LocationService = new LocationService();

            const locations: Location[] = await locationService.getLocations();
            return {
                errors: [],
                locations,
            };

        }
        catch (error) {
            console.log(error);
            const responseError: Error = createError(error);
            return {
                errors: [responseError],
                locations: null
            };
        }
    }
};

function createError(error: any): Error {
    return {
        message: error
    };
}
