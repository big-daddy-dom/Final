using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Final.Models;
using Final.Repositories;

namespace Final.Services
{
    public class VaultsService
    {
        private readonly VaultsRepository _repo;

        public VaultsService(VaultsRepository repo)
        {
            _repo = repo;
        }
        // private Vault Validate(int id, string userId)
        // {
        //     Vault found = _repo.Get(id);

        //     if (found.CreatorId != userId)
        //     {
        //         throw new Exception("You can only edit vaults that you created.");
        //     }
        //     return found;
        // }

        internal List<Vault> Get()
        {
            List<Vault> vaults = _repo.Get();
            // return vaults.FindAll(v => v.IsPrivate == false || v.CreatorId == userId);
            return vaults;
        }

        internal Vault Get(int id)
        {
            Vault vaults = _repo.Get(id);
            if (vaults == null)
            {
                throw new Exception("Vault not found.");
            }
         

            return vaults;
        }





        internal Vault Create(Vault newVault)
        {
            // Vault found = _repo.FindExisting(newVault);
            // if (found != null)
            // {
            //     throw new Exception("Vault already exists.");
            // }
            return _repo.Create(newVault);
        }

        internal List<Vault> GetVaultsByUserId(string id)
        {
            List<Vault> vaults = _repo.GetVaultsByUserId(id);
            return vaults;
        }

        internal Vault Edit(Vault vaultData)
        {
            Vault original = Get(vaultData.Id);
            if (original.CreatorId != vaultData.CreatorId)
            {
                throw new Exception("You can only edit vaults that you created.");
            }
            original.Name = vaultData.Name ?? original.Name;
            original.Description = vaultData.Description ?? original.Description;
            original.IsPrivate = vaultData.IsPrivate;
            _repo.Edit(original);
            return original;
        }

        internal List<Vault> GetVaults(string id)
        {
            List<Vault> vaults = _repo.Get();
            return vaults;
        }

        internal void Delete(int id, string userId)
        {
            Vault original = Get(id);
            if (original.CreatorId != userId)
            {
                throw new Exception("You can only delete vaults that you created.");
            }

            _repo.Delete(id);
        }

    }
}