import time
from fastapi import APIRouter, HTTPException
from models.getLogs import GetLogs
from utils.elasticsearchQueryBuilder import elasticsearchQueryBuilder
from config.db import es
from elasticsearch import helpers


getLogs = APIRouter()

@getLogs.post("/getLogs")
async def search_logs(getLogs: GetLogs):
    es_query = elasticsearchQueryBuilder(getLogs)

    try:
        response = helpers.scan(
            es,
            query=es_query,
            index="logs"
        )

        result = [hit["_source"] for hit in response]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error executing Elasticsearch query: {str(e)}")

    return {"message": "Logs retrieved successfully", "data": result}