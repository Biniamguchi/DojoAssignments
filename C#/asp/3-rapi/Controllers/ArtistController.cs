using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace MusicApi.Controllers {

    
    public class ArtistController : Controller {

        private List<Artist> allArtists;

        public ArtistController() {
            allArtists = JsonToFile<Artist>.ReadJson();
        }

        //This method is shown to the user navigating to the default API domain name
        //It just display some basic information on how this API functions
        [Route("")]
        [HttpGet]
        public string Index() {
            //String describing the API functionality
            string instructions = "Welcome to the Music API~~\n========================\n";
            instructions += "    Use the route /artists/ to get artist info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *RealName/{string}\n";
            instructions += "       *Hometown/{string}\n";
            instructions += "       *GroupId/{int}\n\n";
            instructions += "    Use the route /groups/ to get group info.\n";
            instructions += "    End-points:\n";
            instructions += "       *Name/{string}\n";
            instructions += "       *GroupId/{int}\n";
            instructions += "       *ListArtists=?(true/false)\n";
            return instructions;
        }
		
		[Route("artists")]
		public JsonResult artists(){
			return Json(allArtists);
		}

		[Route("artists/name/{name}")]
		public JsonResult getArtistByName(string name){
			var res = allArtists.Where(x=>x.ArtistName==name);
			return Json(res);
		}

		[Route("artists/realname/{name}")]
		public JsonResult getArtistByRealName(string name){
			var res = allArtists.Where(x=>x.RealName==name);
			return Json(res);
		}

		[Route("artists/hometown/{town}")]
		public JsonResult getArtistByHometown(string town){
			var res = allArtists.Where(x=>x.Hometown==town);
			return Json(res);
		}		

		[Route("artists/groupid/{id}")]
		public JsonResult getArtistByGroupID(int id){
			var res = allArtists.Where(x=>x.GroupId==id);
			return Json(res);
		}
    }
}