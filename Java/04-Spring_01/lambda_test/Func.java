public class Func{
    @FunctionalInterface
    public interface function{
        void __();
    }

    public static void main(String[] args){
        function func = ()->{
            System.out.println("There has to be a prettier way.");
        };
        
        func.__(); // Just func() would be nice, but its close enough.
    }
}
