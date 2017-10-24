using Microsoft.AspNetCore.Mvc;

namespace _2_calling_card{
	public class IndexController:Controller{
		[Route("")]
		public string index(){
			return "Memes";
		}

		[Route("{first}/{last}/{age}/{col}")]
		public JsonResult info(string first,string last,int age,string col){
			return Json(new{
				first=first,
				last=last,
				age=age,
				col=col
			});
		}
	}
}