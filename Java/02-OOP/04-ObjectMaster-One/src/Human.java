public class Human{
    private String name;
    private int strength;
    private int intelligence;
    private int stealth;
    private int health;

    public Human(String name){
        this.name         = name;
        this.strength     = 3;
        this.intelligence = 3;
        this.stealth      = 3;
        this.health       = 100;
    }

    public void setName(String name){this.name = name;}
    public String getName(){return name;}
    public void setHealth(int health){this.health = health;}
    public int getHealth(){return health;}

    public void attack(Human human){
        human.setHealth(human.getHealth()-strength);
        System.out.println(name+" dealt "+strength+" damage to "+human.getName());
    }
}
