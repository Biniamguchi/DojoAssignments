import java.util.HashMap;

public class Hashmatique{
    static HashMap<String,String> trackList = new HashMap<>();

    public static void getTracks(){
        for(HashMap.Entry<String,String>e:trackList.entrySet()){
            System.out.println("Track: "+e.getKey()+" Lyrics: "+e.getValue());
        }
    }

    public static void main(String[] args){
        trackList.put("Song1","Im no lyricist.");
        trackList.put("Song2","But I can try to be.");
        trackList.put("Song3","Theres no guarantee");
        trackList.put("Song4"," any of it will be good.");

        System.out.println(trackList.get("Song1"));

        getTracks();
    }
}
