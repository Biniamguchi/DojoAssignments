using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = JsonToFile<Artist>.ReadJson();
            List<Group> Groups = JsonToFile<Group>.ReadJson();

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?

			// Standard:
			// var res=from a in Artists
			// 		where a.Hometown == "Mount Vernon"
			// 		select new{a.ArtistName,a.Age};

			// Chaining:
			// var res = Artists.Where(a=>a.Hometown == "Mount Vernon").Select(x=>new{x.ArtistName,x.Age});
			
            //Who is the youngest artist in our collection of artists?

			// var res = Artists.Select(a=>new{a.ArtistName,a.Age})
			// .Min(a=>a.Age);

            //Display all artists with 'William' somewhere in their real name

			// var res = from artist in Artists
			// where artist.RealName.Contains("William")
			// select artist.RealName;

            //Display the 3 oldest artist from Atlanta

			// This took like an hour to figure out

			// var res = Artists.Select(a=>new{a.ArtistName,a.Age,a.Hometown})
			// .Where(x=>x.Hometown=="Atlanta")
			// .OrderByDescending(x=>x.Age)
			// .Take(3);

            //(Optional) Display the Group Name of all groups that have members that are not from New York City

			// var res = Groups.Join(
			// 	Artists.Where(x=>x.Hometown != "New York City"),
			// 	g=>g.Id,
			// 	a=>a.GroupId,
			// 	(g,a)=>{
			// 		return g.GroupName;
			// 	}
			// );

            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'

			// Left Join
			
			// var res = Artists.Join(
			// 	Groups.Where(x=>x.GroupName == "Wu-Tang Clan"),
			// 	a=>a.GroupId,
			// 	g=>g.Id,
			// 	(a,g)=>{
			// 		return a.ArtistName;		
			// 	}
			// );
        }
    }
}
