from flask import Flask, render_template, request, jsonify
from gensim import corpora, models

app = Flask(__name__)

# Render the single HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Route for processing user input and returning topics as JSON
@app.route('/process', methods=['POST'])
def process():
    user_input = request.json['user_text']
    tokenized_text = [user_input.split()]

    dictionary = corpora.Dictionary(tokenized_text)
    corpus = [dictionary.doc2bow(text) for text in tokenized_text]

    lda_model = models.LdaModel(corpus, num_topics=2, id2word=dictionary)
    topics = lda_model.print_topics()

    # Return topics as JSON
    return jsonify({'topics': topics})

if __name__ == '__main__':
    app.run(debug=True)
