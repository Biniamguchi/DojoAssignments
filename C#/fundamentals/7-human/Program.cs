using System;

namespace _7_human{
    class Program{
        static void Main(string[] args){
			Human bob = new Human("Bob");
			Human jim = new Human("Jim");
			
			Console.WriteLine(jim.health);
			bob.attack(jim);
			Console.WriteLine(jim.health);			
        }
    }
}
