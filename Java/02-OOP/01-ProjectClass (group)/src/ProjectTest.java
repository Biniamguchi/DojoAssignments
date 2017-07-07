public class ProjectTest{
    public static void main(String[] args){
        Project p = new Project();
        p.setName("Test");
        p.setDescription("Here's a description.");
        p.setCost(2.50f);

        Project q = new Project("Test2");
        q.setCost(50.50f);

        Project r = new Project("Test3","ASKJHDASKJDH");
        r.setCost(15.50f);

        Portfolio portfolio = new Portfolio();
        portfolio.addProject(p);
        portfolio.addProject(q);
        portfolio.addProject(r);

        portfolio.showPortfolio();
    }
}
