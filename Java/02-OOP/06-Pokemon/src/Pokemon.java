public class Pokemon{
    private String name;
    private int health;
    private String type;
    private static int numPokemon = 0;

    public Pokemon(){numPokemon++;}

    public Pokemon(String name,int health,String type){
        this();
        this.name = name;
        this.health = health;
        this.type = type;
    }

    public void setName(String name){this.name = name;}
    public String getName(){return name;}

    public void setHealth(int health){this.health = health;}
    public int getHealth(){return health;}

    public void setType(String type){this.type = type;}
    public String getType(){return type;}

    public static int getNumPokemon(){System.out.println("\nTotal Pokemon: "+numPokemon); return numPokemon;}
}
