# Scaife Zero

This is a minimalistic project that just has the basic layout of code.

Other projects could be based on this to add a reader, text providers, widgets and other pages. This project has no reader, library browsing, text search or user accounts.

For the full Scaife Viewer running the Perseus Digital Library in production, see <https://github.com/scaife-viewer/scaife-viewer>.

## Getting Started

```
npm install
pipenv run pip install pip==18.0
pipenv install
pipenv shell
./manage.py migrate
./manage.py loaddata sites
```

Then, in two different terminals:

```
npm start
./manage.py runserver
```

Browse to http://localhost:8000/
