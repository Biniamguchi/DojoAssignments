namespace _7_human{
	public class Human{
		public string name;
		public int strength;
		public int intelligence;
		public int dexterity;
		public int health;
		public Human(string name){
			this.name = name;
			strength = 3;
			intelligence = 3;
			dexterity = 3;
			health = 100;
		}
		public Human(string name,int strength,int intelligence,int dexterity,int health){
			this.name = name;
			this.strength = strength;
			this.intelligence = intelligence;
			this.dexterity = dexterity;
			this.health = health;
		}

		public void attack(Human victim){
			if(victim is Human){			
				victim = victim as Human;
				victim.health -= this.strength*5;
			}
		}
	}
}
