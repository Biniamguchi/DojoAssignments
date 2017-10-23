using System;
using System.Collections.Generic;

namespace _8_deckofcards
{
    class Program
    {
        static void Main(string[] args)
        {
			Deck deck     = new Deck();
			deck.shuffle();

			List<Card> handOne = new List<Card>(){
				deck.deal(),
				deck.deal(),
				deck.deal(),
				deck.deal(),
				deck.deal(),
				deck.deal(),
				deck.deal()
			};

			Player player = new Player("Tony",handOne);
			player.reveal();
		}
    }
}
