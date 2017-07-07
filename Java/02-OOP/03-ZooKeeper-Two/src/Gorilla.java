public class Gorilla extends Mammal{
    public void throwItem(){
        System.out.println("Gorilla has thrown something. Probably fecal matter.");
        this.setEnergy(this.getEnergy()-5);
    }

    public void eatBananas(){
        System.out.println("The gorilla devours a banana, restoring his energy and potassium levels for maximum join lubrication.");
        this.setEnergy(this.getEnergy()+10);
    }

    public void climb(){
        System.out.println("The gorilla has climbed a tree, losing some energy.");
        this.setEnergy(this.getEnergy()-10);
    }
}
