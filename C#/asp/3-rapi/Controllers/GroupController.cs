using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace MusicApi.Controllers {
    public class GroupController : Controller {
        List<Group> allGroups {get; set;}
        List<Artist> allArtists {get; set;}

        public GroupController() {
            allGroups  = JsonToFile<Group>.ReadJson();
			allArtists = JsonToFile<Artist>.ReadJson();
        }
		
		[Route("groups/{displayArtists}")]
		public JsonResult groups(bool displayArtists){
			if(displayArtists){// Yay Left Joins
				var res = allArtists.Join(
					allGroups,
					a=>a.GroupId,
					g=>g.Id,
					(a,g)=>{
						return a;
					}
				);
				return Json(res);
			}
			return Json(allGroups);
		}

		[Route("groups/name/{name}/{displayArtists}")]
		public JsonResult getGroupByName(string name,bool displayArtists){
			if(displayArtists){ // Left Join Again
				var join = allArtists.Join(
					allGroups.Where(x=>x.GroupName==name),
					a=>a.GroupId,
					g=>g.Id,
					(a,g)=>{
						return a;
					}
				);
				return Json(join);
			}
			var res = allGroups.Where(x=>x.GroupName==name);
			return Json(res);
		}

		[Route("groups/id/{id}/{displayArtists}")]
		public JsonResult getGroupById(int id,bool displayArtists){
			if(displayArtists){// Still a left join
				var join = allArtists.Join(
					allGroups.Where(x=>x.Id==id),
					a=>a.GroupId,
					g=>g.Id,
					(a,g)=>{
						return a;
					}
				);
				return Json(join);
			}
			var res = allGroups.Where(x=>x.Id==id);
			return Json(res);
		}
    }
}