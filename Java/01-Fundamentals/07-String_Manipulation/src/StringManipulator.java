public class StringManipulator{
    public String trimAndConcat(String a,String b){
        return a.trim()+b.trim();
    }

    public Integer getIndexOrNull(String a,char c){
        return a.indexOf(c) == -1 ? null:a.indexOf(c);
    }

    public Integer getIndexOrNull(String a,String b){
        return a.indexOf(b) == -1 ? null:a.indexOf(b);
    }

    public String concatSubstring(String a,int numOne,int numTwo,String b){
        return a.substring(numOne,numTwo)+b;
    }
}
