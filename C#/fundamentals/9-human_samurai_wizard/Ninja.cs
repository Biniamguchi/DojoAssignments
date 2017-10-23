using System;

namespace _9_human_samurai_wizard{
	class Ninja:Human{
		public Ninja(){
			dexterity = 175;
		}

		public void steal(object obj){
			Human victim = obj as Human;
			if(victim==null){
				Console.WriteLine("Steal Failed");
			}else{
				attack(victim);
				health += 10;
			}
		}

		public void getAway(){
			health -= 15;
		}
	}
}