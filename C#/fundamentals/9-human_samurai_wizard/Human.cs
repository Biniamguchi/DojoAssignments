using System;

namespace _9_human_samurai_wizard{
	class Human{
		public string name;
		public int health;
		public int strength;
		public int intelligence;
		public int dexterity;

		public Human(){
		}

		public void attack(object obj){
			Human enemy  = obj as Human;
			if(enemy == null){
				Console.WriteLine("Attack Failed.");
			}else{
				enemy.health -= strength*5;
			}
		}
	}
}