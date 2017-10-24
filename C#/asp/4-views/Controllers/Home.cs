using Microsoft.AspNetCore.Mvc;

namespace _4_views{
	public class Home:Controller{
		[Route("")]
		public IActionResult index(){
			return View();
		}
	}
}