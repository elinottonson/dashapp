import json
from collections import defaultdict
import sys
import os
import nltk

text = sys.argv[1]
bow = defaultdict(float)
tokens = text.split()
lowered_tokens = map(lambda t: t.lower(), tokens)
for token in lowered_tokens:
    bow[token] += 1.0
sorted = dict(sorted(bow.items(), key=lambda item: item[1]))
json_object = json.dumps(sorted, indent = 4) 
print(json_object)
sys.stdout.flush()

