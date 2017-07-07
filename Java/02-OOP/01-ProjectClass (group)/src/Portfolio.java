import java.util.ArrayList;

public class Portfolio{
    private ArrayList<Project> projects = new ArrayList<>();

    public Portfolio(){

    }

    public void addProject(Project project){
        projects.add(project);
    }

    public ArrayList<Project> getProjects(){
        return projects;
    }

    public float getPortfolioCost(){
        float sum = 0;

        for(int i=0;i<projects.size();i++){
            sum +=  projects.get(i).getCost();
        }

        return sum;
    }

    public void showPortfolio(){
        for(int i=0;i<projects.size();i++){
            projects.get(i).elevatorPitch();
        }
        
        System.out.println("\nTotal Cost: $"+this.getPortfolioCost());
    }
}
