public class Casting{
    public static void main(String[] args){
        double d = 1.337;
        double dd = 1.33337;
        // Explicit
        int i = (int) d;
        int ii = (int) dd;
        System.out.println(i);
        System.out.println(ii);

        //Implicit
        int iii = 123;
        float f = iii;
        System.out.println(f);
    }
}
