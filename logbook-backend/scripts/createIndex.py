from elasticsearch import Elasticsearch

# Connect to Elasticsearch
es = Elasticsearch([{'host': 'localhost', 'port': 9200, 'scheme':'http'}])

# Index
index_name = "logs"

# Create Elasticsearch index and mapping
if not es.indices.exists(index=index_name):
    es_index = {
                    "mappings": {
                        "properties": {
                        "level": {
                            "type": "keyword"
                        },
                        "message": {
                            "type": "text"
                        },
                        "resourceId": {
                            "type": "keyword"
                        },
                        "timestamp": {
                            "type": "keyword"
                        },
                        "traceId": {
                            "type": "keyword"
                        },
                        "spanId": {
                            "type": "keyword"
                        },
                        "commit": {
                            "type": "keyword"
                        },
                            "metadata": {
                                "properties": {
                                    "parentResourceId": {
                                        "type": "keyword"
                                    }
                                }
                            }
                        }
                    }
                }

    es.indices.create(index=index_name, body=es_index, ignore=[400])