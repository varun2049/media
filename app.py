from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', title="Home - Media Recommender")

@app.route('/search.html')
def search():
    query = request.args.get('query', '')
    return render_template('search.html', title="Search - Media Recommender", query=query)

@app.route('/media.html')
def media():
    title = request.args.get('title', '')
    return render_template('media.html', title="Media Details - Media Recommender", title_search=title)

if __name__ == '__main__':
    app.run(debug=True)
