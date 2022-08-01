import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class ProfilesService{
    async getProfile(id){
        const res = await api.get('api/profiles/'+id);
        AppState.activeProfile = res.data;
    }
   


}

export const profilesService = new ProfilesService();