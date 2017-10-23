using System;

namespace _9_human_samurai_wizard{
	class Wizard:Human{
		Random random;

		public Wizard(){
			health = 50;
			intelligence = 25;
			random = new Random();
		}

		public void heal(){
			health += 10*intelligence;
		}

		public void fireball(object o){
			Human victim = o as Human;

			if(victim == null){
				Console.WriteLine("Fireball Failed.");
			}else{
				victim.health -= random.Next(20,50); 
			}
		}
	}
}