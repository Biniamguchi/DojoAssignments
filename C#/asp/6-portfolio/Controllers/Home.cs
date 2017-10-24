using Microsoft.AspNetCore.Mvc;

namespace _6_portfolio{
	public class Home:Controller{
		[Route("")]
		public IActionResult home(){
			return View();
		}

		[Route("projects")]
		public IActionResult projects(){
			return View();
		}

		[Route("contact")]
		public IActionResult contact(){
			return View();
		}
	}
}