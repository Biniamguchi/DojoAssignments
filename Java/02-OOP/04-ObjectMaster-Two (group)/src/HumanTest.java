public class HumanTest{
    public static void main(String[] args) {
        Wizard tim  = new Wizard("Tim");
        Human will  = new Human("Will");
        Ninja marco = new Ninja("Marco");
        Samurai minh = new Samurai("Minh");

        tim.attack(will);
        tim.fireball(will);
        tim.heal(will);

        marco.steal(tim);

        minh.deathBlow(tim);
        minh.meditate();

        System.out.println(Samurai.howMany());
    }
}
