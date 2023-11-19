# LogBook

### Log Ingestor and Query Interface

## Objective

Develop a log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters.

Both the systems (the log ingestor and the query interface) can be built using any programming language of your choice.

The logs should be ingested (in the log ingestor) over HTTP, on port `3000`.

## Features

😊 &nbsp;User friendly Web UI

🔌 &nbsp;Allowing combination of multiple filters

🗓️ &nbsp;Implement search within specific date ranges

🤯 &nbsp;Utilize regular expressions for search.

⚡ &nbsp;Efficient

📈 &nbsp;Scalable

📊 &nbsp;Can handle massive volumes 


## Run Locally

Prerequesties: \
Python 3.11.5 or higher \
Node v18.17.1 or higher \
ElasticSearch 8.11.1

### Setting up ElasticSearch Database

Open terminal in ElasticSearch Foler and run following command to start ElasticSearch

MacOS:
``` bash
bin/elasticsearch -E xpack.security.enabled=false
```

Windows:
``` bash
bin\elasticsearch.bat -E xpack.security.enabled=false
```

### Setting up FastApi Backend Server

**Clone the project**
```bash
https://github.com/meet13552/
```

**Go to backend directory "logbook-backend" and make a virtual environment**
```bash
python -m venv LogBookEnv
```

**Activate virtual environment**

For MacOS:
```bash
source LogBookEnv/bin/activate
```

For Windows:
```bash
LogBookEnv\Scripts\activate.bat
```

**Install requirements**
```bash
pip install -r requirements.txt
```

**Run the createIndex.py script to create index in ElasticSearch**
```bash
python scripts/createIndex.py
```

**Start the FastApi Server**
```bash
uvicorn main:app --reload --port 3000
```
OR
```bash
python main.py
```

### Setting up React Frontend

**Go to frontend directory "logbook-frontend" and install dependencies**
```bash
npm i
```

**Start the app**
```bash
npm start
```

### System Design

Place system design image here

### Video Explanation

Place video explanation here

### Tech Stack

**Database:** ElasticSearch \
**Backend:** FastApi \
**Frontend:** React

### Issues / Future features that can be implemented

Filtering based on multiple values of multiple fields (n to n) \
Download logs as CSV

### Author

**Email:** meet.13552@gmail.com \
**Linkedin:** https://www.linkedin.com/in/meetmota/ \
**Github:** [@meet13552](https://www.github.com/meet13552)
