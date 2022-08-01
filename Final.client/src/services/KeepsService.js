import { AppState } from "../AppState.js";
import { logger } from "../utils/logger.js";
import { api } from "./AxiosService.js";
import {profilesService} from "../services/ProfilesService.js"



class KeepsService{

   
    async createKeep(body){
        try{
            const res = await api.post('api/keeps',body);
            AppState.keeps.push(res.data);
        }catch(error){
            logger.error(error);
        }
    }
    async getKeeps(){
        try{
            const res = await api.get('api/keeps');
            logger.log('[getKeeps]',res.data);
            AppState.keeps=res.data;
        }catch(error){
            logger.error(error);
        }
    }
    async getKeepsByUserId(profile){
        // await profilesService.getProfile()

   
        const res = await api.get(`api/profiles/${profile.id}/keeps`)
        logger.log('[getKeepsByUserId]',res.data);
        AppState.profileKeeps = res.data;


    }


    async getKeep(id){
        try{
            const res = await api.get('api/keeps/'+id);
            logger.log('[getKeep]',res.data);
            AppState.activeKeep=res.data;
        }catch(error){
            logger.error(error);
        }
    }

    async updateKeep(body){
        try{
            const res = await api.put('api/keeps/'+body.id,body);
            logger.log('Keep updated',res.data);
            AppState.keeps=res.data;
        }catch(error){
            logger.error(error);
        }
    }
    async deleteKeep(keepId){
        try{
            const res = await api.delete('api/keeps/'+keepId);
            logger.log('Keep deleted',res.data);
            AppState.accountKeeps=AppState.accountKeeps.filter(keep=>keep.id!==keepId);
        }catch(error){
            logger.error(error);
        }
    }

    async setActive(keep){
        AppState.activeKeep=keep;
        const res = await api.get(`api/keeps/${keep.id}`);
        AppState.activeKeep=res.data;
    }
    async addToVault(keepId,vaultId){
        try{
            const res = await api.post(`api/vaults/${vaultId}/keeps`,{keepId});
            logger.log('Keep added to vault',res.data);
            AppState.vaultKeeps=res.data;
        }catch(error){
            logger.error(error);
        }
    }

}


export const keepsService = new KeepsService();