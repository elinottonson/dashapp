import nltk
from collections import defaultdict
from nltk.tokenize import word_tokenize, wordpunct_tokenize, sent_tokenize, TreebankWordTokenizer
import stopwords_list
nltk.data.path.append("/tmp")

nltk.download("punkt", download_dir = "/tmp")
nltk.data.path.append("/nltk_data")


def bow_maker(text, tokenizer, cap, stop, punct):
    user_text = text
    selected_tokenizer = select_tokenizer(tokenizer)
    if (cap=='y'):
        user_text = decap(text)
    user_tokens = selected_tokenizer(user_text)
    if (stop=='y'):
        user_tokens = remove_stop(user_tokens)
    if (punct=='y'):
        user_tokens = remove_punc(user_tokens)
    user_bow = create_bow(user_tokens)
    return user_bow
        
  
def select_tokenizer(tokenizer):
    if(tokenizer=='word'):
        return word_tokenize
    if(tokenizer=='wordpunc'):
        return wordpunct_tokenize
    if(tokenizer=='sentance'):
        return sent_tokenize
    if(tokenizer=='tree'):
        return TreebankWordTokenizer().tokenize       

def decap(to_decap_string):
    return to_decap_string.lower()
    
def remove_stop(tokens):
    stop_words = stopwords_list.get_stopwords()
    filtered_sentence = [w for w in tokens if not w.lower() in stop_words]
    return filtered_sentence

def remove_punc(tokens):
    punctations = ["+",",",".","-","'","\"","&","!","?",":",";","#","~","=","/","$","£","^","(",")","_","<",">", "..."]
    filtered_sentence = [w for w in tokens if not w.lower() in punctations]
    return filtered_sentence
    
def create_bow(tokens):
    user_bow = defaultdict(int)
    for token in tokens:
        user_bow[token]+=1
    return user_bow
