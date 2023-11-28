# LogBook

### Log Ingestor and Query Interface

## Objective

Develop a log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters.

Both the systems (the log ingestor and the query interface) can be built using any programming language of your choice.

The logs should be ingested (in the log ingestor) over HTTP, on port `3000`.

## Requirements

The requirements for the log ingestor and the query interface are specified below.

### Log Ingestor:

- Develop a mechanism to ingest logs in the provided format.
- Ensure scalability to handle high volumes of logs efficiently.
- Mitigate potential bottlenecks such as I/O operations, database write speeds, etc.
- Make sure that the logs are ingested via an HTTP server, which runs on port `3000` by default.

### Query Interface:

- Offer a user interface (Web UI) for full-text search across logs.
- Include filters based on:
    - level
    - message
    - resourceId
    - timestamp
    - traceId
    - spanId
    - commit
    - metadata.parentResourceId
- Aim for efficient and quick search results.

### Advanced Features:

- Implement search within specific date ranges.
- Utilize regular expressions for search.
- Allow combining multiple filters.
- Provide real-time log ingestion and searching capabilities.

### Sample Log Data Format:
The logs to be ingested will be sent in this format.
``` bash
{
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}
```

## Video Explanation

https://github.com/meet13552/LogBook/assets/8711235/8099a0bc-ae12-4fb0-9d13-e8a401b019b3

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

<img width="1088" alt="Screenshot 2023-11-19 at 12 57 55 PM" src="https://github.com/meet13552/LogBook/assets/8711235/63c48d82-9d08-4051-be5a-14168817943c">

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
