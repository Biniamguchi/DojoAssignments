public class Dragon extends Mammal{
    public Dragon(){this.setEnergy(300);}

    public void fly(){
        this.setEnergy(this.getEnergy()-50);
        System.out.println("Puff goes the magic dragon. Right up into the clouds.");
    }

    public void eatHuman(){
        this.setEnergy(this.getEnergy()+25);
        System.out.println("The dragon eats a civilian.");
    }

    public void attackTown(){
        System.out.println("Snap, crackle, pop. The Dragon burns down the whole town with his dank breath!");
        this.setEnergy(this.getEnergy()-100);
    }
}
