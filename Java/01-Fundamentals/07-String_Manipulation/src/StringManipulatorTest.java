public class StringManipulatorTest{
    public static void main(String[] args){
        StringManipulator strMan = new StringManipulator();
        System.out.println(strMan.trimAndConcat("Delete the middle "," space please."));
        
        System.out.println(strMan.getIndexOrNull("Hello",'e'));
        System.out.println(strMan.getIndexOrNull("Hello",'a'));
        
        System.out.println(strMan.getIndexOrNull("Hello World","Wo"));
        System.out.println(strMan.getIndexOrNull("Hello World","I will be null."));

        System.out.println(strMan.concatSubstring("Hello",1,2,"World"));
    }
}
