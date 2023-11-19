from fastapi import APIRouter, HTTPException
from models.log import Log
from config.db import es

log = APIRouter()

@log.post("/")
async def create_log(log: Log):

    index_name = "logs"
    document = {
        "level": log.level,
        "message": log.message,
        "resourceId": log.resourceId,
        "timestamp": log.timestamp,
        "traceId": log.traceId,
        "spanId": log.spanId,
        "commit": log.commit,
        "metadata": log.metadata
    }

    try:
        es.index(index=index_name, body=document)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error ingesting log in Elasticsearch: {str(e)}")

    return {"message": "Log ingested successfully", "item": log.model_dump()}
