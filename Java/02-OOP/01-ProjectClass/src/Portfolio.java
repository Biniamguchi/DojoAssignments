import java.util.ArrayList;

public class Portfolio{
    private ArrayList<Project> projects = new ArrayList<>();
    
    public Portfolio(){}

    public void addProject(Project project){
        projects.add(project);
    }//Cause setProjects doesnt make sense.

    public ArrayList<Project> getProjects(){
        return projects;
    }

    public float getPortfolioCost(){
        float sum = 0.0f;

        for(int i=0;i<this.projects.size();i++){
            sum += this.projects.get(i).getCost();
        }

        return sum;
    }

    public void showPortfolio(){
        for(int i=0;i<this.projects.size();i++){
            String pitch = this.projects.get(i).elevatorPitch();
            System.out.println(pitch);
        }

        System.out.println("\nTotal Portfolio Cost: $"+this.getPortfolioCost());
    }
}
