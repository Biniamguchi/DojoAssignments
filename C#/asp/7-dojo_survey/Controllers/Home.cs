using Microsoft.AspNetCore.Mvc;

namespace _7_dojo_survey{
	public class Home:Controller{

		[Route("")]
		public IActionResult index(){
			return View();
		}

		[HttpPost]
		[Route("results")]
		public IActionResult results(string name,string location,string lang){
			ViewBag.name = name;
			ViewBag.location=location;
			ViewBag.lang=lang;

			return View();
		}
	}
}