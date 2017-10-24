using Microsoft.AspNetCore.Mvc;
using System;

namespace _5_time_display{
	public class Home:Controller{
		[Route("")]
		public IActionResult index(){
			return View();
		}
	}
}