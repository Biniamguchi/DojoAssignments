using System;
using System.Collections.Generic;

namespace _3
{
    class Program
    {
        static void Main(string[] args)
        {
			//Arrays:
			int[] nums = new int[]{0,1,2,3,4,5,6,7,8,9};
			string[] names = new string[]{"Tim","Martin","Nikki","Sara"};
			bool[] bools = new bool[10]{true,false,true,false,true,false,true,false,true,false};

			// Mul Table:
			int[,] arr = new int[10,10];
			for(int i=0;i<10;i++){
				for(int j=0;j<10;j++){
					arr[i,j] = (i+1)*(j+1);
				}
			}

			//Lists:
			List<string> flavors = new List<string>();
			flavors.Add("Vanilla");
			flavors.Add("Chocolate");
			flavors.Add("Strawberry");
			flavors.Add("Neapolitan");
			flavors.Add("Cholocate Mint");

			// Console.WriteLine(flavors.Count);

			// Console.WriteLine(flavors[2]);
			flavors.RemoveAt(2);

			// Console.WriteLine(flavors.Count);

        	//Dictionaries:
        	Dictionary<string,string> dict = new Dictionary<string,string>();

        	Random rand = new Random();

        	for(int i=0;i<names.Length;i++){
        		dict[names[i]] = flavors[rand.Next(0,flavors.Count)];
        	}

        	// foreach(KeyValuePair<string,string> pair in dict){
        	// 	Console.WriteLine(pair.Key+" - "+pair.Value);
        	// }
        }
    }
}
