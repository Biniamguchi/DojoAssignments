using System;
using System.Collections.Generic;

namespace _8_deckofcards{
	public class Player{
		public string name;
		public List<Card> hand;
		public Player(string name,List<Card> hand){
			this.name = name;
			this.hand = hand;
		}
		public Card draw(Deck deck){
			Card c = deck.deal();
			hand.Add(c);
			return c;
		}

		public Card discard(int ind){
			if(hand[ind] != null){
				Card c = hand[ind];
				hand.RemoveAt(ind);
				return c;
			}else{
				return null;
			}
		}

		public void reveal(){
			foreach(Card c in hand){
				Console.WriteLine(c.value+" of "+c.suit);
			}
		}
	}
}