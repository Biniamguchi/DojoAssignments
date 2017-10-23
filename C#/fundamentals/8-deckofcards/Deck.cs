using System;
using System.Collections.Generic;

namespace _8_deckofcards{
	public class Deck{
		private static string suits = "spades clubs diamonds hearts";
		private static string values = "2 3 4 5 6 7 8 9 Jack Queen King";
		private static Random random = new Random();
		public List<Card> cards;
		public Deck(){
			init();
		}

		public void init(){
			this.cards = new List<Card>();

			foreach(string suit in suits.Split(" ")){
				foreach(string val in values.Split(" "))
					this.cards.Add(new Card(suit,val));
			}			
		}

		public Card deal(){
			Card c = cards[cards.Count-1];
			cards.RemoveAt(cards.Count-1);
			return c;
		}

		public void reset(){init();}

		public void shuffle(){
			for(int i=0;i<cards.Count;i++){
				int rnd    = random.Next(0,this.cards.Count-1);				
				Card tmp   = cards[i];
				cards[i]   = cards[rnd];
				cards[rnd] = tmp;
			}
		}
	}
}