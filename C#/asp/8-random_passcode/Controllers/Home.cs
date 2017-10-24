using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using System;

namespace _8_random_passcode{
	public class Home:Controller{
		static Random random = new Random();
		static string chars = "abcdefghijklmnopqrstuvwxyzABCDEFHGIJKLMNOPQRSTUVWXYZ0123456789";

		string genCode(int len){
			string res = "";
			for(;len>0;len--)
				res += chars[random.Next(0,chars.Length-1)];
			return res;
		}
		//mini session wrappers
		void setInt(string key,int value){HttpContext.Session.SetInt32(key,value);}
		//return an object so we can null check, casting later.
		object getInt(string key){return HttpContext.Session.GetInt32(key);}

		[Route("")]
		public IActionResult index(){
			if(getInt("attempts")==null)
				setInt("attempts",0);
			ViewBag.attempts = getInt("attempts");
			return View();
		}

		[Route("/generate")]
		public RedirectResult generate(){
			setInt("attempts",(int)getInt("attempts")+1);		
			TempData["passcode"] = genCode(random.Next(10,20));
			return Redirect("/");
		}
	}
}