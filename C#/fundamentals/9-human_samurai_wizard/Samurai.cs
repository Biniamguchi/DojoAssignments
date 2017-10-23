using System;

namespace _9_human_samurai_wizard{
	class Samurai:Human{
		private static int count = 0;

		public Samurai(){
			health = 200;
			count++;
		}

		public void deathBlow(object obj){
			attack(obj);
			Human victim = obj as Human;

			if(victim==null) Console.WriteLine("Deathblow Failed.");
			else{
				if(victim.health < 50)
					victim.health = 0;
			}
		}

		public void meditate(){
			health = 200;
		}

		public int howMany(){
			return count;
		}
	}
}