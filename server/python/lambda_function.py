import json
from bow import bow_maker

def lambda_handler(event, context):
    text = event['text']
    tokenizer = event['tokenizer']
    cap = event['cap']
    stop = event['stop']
    punct = event['punct']
    
    user_bow = bow_maker(text, tokenizer, cap, stop, punct)
    return {
        'statusCode': 200,
        'body': json.dumps(user_bow)
    }
