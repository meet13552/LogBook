from elasticsearch import Elasticsearch

# Initialize Elasticsearch connection
es = Elasticsearch([{'host': 'localhost', 'port': 9200, 'scheme':'http'}])