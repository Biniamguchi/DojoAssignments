import re

def get_matching_words(regex):
    words   = ["aimlessness", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    matches = []

    for word in words:
        if re.search(regex,word):
            matches.append(word)
    
    return matches

# print get_matching_words(r'^v')
#print get_matching_words(r's{2}')
#print get_matching_words(r'e$')
print get_matching_words(r'b+[A-Za-z]+b')

# r = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')