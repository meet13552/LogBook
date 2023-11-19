import requests
from data import data

base_url = "http://127.0.0.1:3000/"

for entry in data:

    response = requests.post(base_url, json=entry)

    if response.status_code == 200:
        print(f"Data successfully ingested for entry: {entry}")
    else:
        print(f"Failed to ingest data for entry: {entry}")
        print(f"Response status code: {response.status_code}")
        print(f"Response content: {response.text}")
