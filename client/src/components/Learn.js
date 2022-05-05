import React from 'react';
class Learn extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
        }
    }
    render(){
        return (
            <div class="learn" style={{width: "calc(100% - 210px)", float: "right"}}>
                <p1 class="heading" >Foundations for Bag of Words:</p1>
                <div class="learning" style={{width:"97%"}}>
                    <div style={{width:"30%", float:"left"}}>
                    <p1 class="directions">Bag of Words:</p1>
                    <div class="aboutFeature">
                        A Bag of Words is a very important model to learn when starting to learn Natural Language Processing tools. It makes data out of a given text that can be manipulated by computers or interpreted by you. The simplist explanation is that it is a list of all words or tokens from your text and the count of how many times they appear.
                        Put your own sentances in to the right to see a how to make a Bag of Words in Python. More information can be found <a href="https://towardsdatascience.com/a-simple-explanation-of-the-bag-of-words-model-b88fc4f4971">here</a>.
                    </div>
                    </div>
                    <iframe src="https://trinket.io/embed/python/daef160027" width="70%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </div>
                <div class="learning" style={{width:"97%"}}>
                    <div style={{width:"30%", float:"left"}}>
                    <p1 class="directions">Tokenizer:</p1>
                    <div class="aboutFeature">
                        A tokenizer is how a text is broken up into smaller chunks called tokens. These tokens allow a text to start to be transformed into data that can be manipulated through Natural Language Processing tools. In the example to the right, you can choose 1 to break your text into words, or 2 to break your text into sentances.
                        In the Bag of Words tool on this app, you have the choice of 4 different types of tokenizers. Play around with them to see how they break apart your text differently. More information on tokenizers can be found <a href="https://www.analyticsvidhya.com/blog/2020/05/what-is-tokenization-nlp/">here</a>.
                    </div>
                    </div>
                    <iframe src="https://trinket.io/embed/python/ab00f7efe9" width="70%" height="356" frameborder="0" marginwidth="0" marginheight="0" float="right" allowfullscreen></iframe>
                </div>
                <div class="learning" style={{width:"97%"}}>
                    <div style={{width:"30%", float:"left"}}>
                    <p1 class="directions">Removing Punctuation:</p1>
                    <div class="aboutFeature">
                        Punctuation as a token can be very valuable to tell you about a text. When creating a bag of words for some texts though, punctuations drowns out the tokens you'd really like to see. To the right is an example of how to remove punctuation in your tokens. This is an option to turn on in the Bag of Words tool on this app. More information can be found <a href="https://likegeeks.com/python-remove-punctuation/">here</a>.
                    </div>
                    </div>
                    <iframe src="https://trinket.io/embed/python/f192a70d63" width="70%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </div>
                <div class="learning" style={{width:"97%"}}>
                    <div style={{width:"30%", float:"left"}}>
                    <p1 class="directions">Removing Stopwords:</p1>
                    <div class="aboutFeature">
                        Stopwords are common words in a text that does not add much information to the text. We like to filter these words out when we process a text as it leaves tokens that are actually relevent to text. See how your text is manpulated by removing stopwords to get a better idea of the types of words that aren't relevent to your text. More information can be found <a href="https://towardsdatascience.com/text-pre-processing-stop-words-removal-using-different-libraries-f20bac19929a">here</a>.
                    </div>
                    </div>
                    <iframe src="https://trinket.io/embed/python/449c0942df" width="70%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </div>
                <div class="learning" style={{width:"97%"}}>
                    <div style={{width:"30%", float:"left"}}>
                    <p1 class="directions">Decapitalizing Tokens:</p1>
                    <div class="aboutFeature">
                        Making tokens lowercase is a very important step when creating your tokens. A text can have the same words multiple times but some have capitals and some don't. By making all of them lowercase, tokens that are the same can be counted as such when a Bag of Words is made. The example to the right shows how to properly lower your tokens. More information can be found <a href="https://nlp.stanford.edu/IR-book/html/htmledition/capitalizationcase-folding-1.html">here</a>.
                    </div>
                    </div>
                    <iframe src="https://trinket.io/embed/python/dbe19c633d" width="70%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
                </div>
               
            </div>
        )
    }
}

export default Learn;
