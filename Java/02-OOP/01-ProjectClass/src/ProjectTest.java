public class ProjectTest{
    public static Portfolio portfolio = new Portfolio();

    public static void main(String[] args){
        portfolio.addProject(new Project("Bob's Web Fun","It'll be fun.",12.50F));
        portfolio.addProject(new Project("Piano","That piano I didn't finish yet.",15.00F));
        portfolio.addProject(new Project("BC","That one project I cant tell you about.",150.00F));
        portfolio.addProject(new Project("Java Project","One that hasnt begun yet.",2.50F));
    
        portfolio.showPortfolio();
    }
}
