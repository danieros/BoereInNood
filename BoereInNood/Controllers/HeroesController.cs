using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BoereInNood.Controllers
{
    public class HeroesController : ApiController
    {
        private Models.FarmersInNeedDataContext db = new Models.FarmersInNeedDataContext();

        public List<Models.sp_GetHeroesResult> GetHeroes()
        {
            var Heroenames = db.sp_GetHeroes();

            return Heroenames.ToList();
        }
    }
}
