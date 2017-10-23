using System;
using System.Collections.Generic;

namespace _4
{
    class Program
    {
        static void Main(string[] args)
        {
        	List<object> stuff = new List<object>();
        	stuff.Add(7);
        	stuff.Add(28);
        	stuff.Add(-1);
        	stuff.Add(true);
        	stuff.Add("chair");

        	int sum = 0;
        	for(int i=0;i<stuff.Count;i++){
        		Console.WriteLine(stuff[i]);
 				
 				if(stuff[i] is int)
 					sum += (int) stuff[i];
        	}
        	Console.WriteLine("Sum: "+sum);
        }
    }
}
