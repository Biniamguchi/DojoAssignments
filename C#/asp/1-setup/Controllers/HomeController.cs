using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
 
namespace _1_setup.Controllers{
    public class HomeController:Controller{
        [Route("")]
        public string Index(){
            return "Hello World!";
        }
    }
}
