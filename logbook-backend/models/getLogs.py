from typing import Optional
from pydantic import BaseModel

class MetaData(BaseModel):
    parentResourceId: Optional[str] = None

class GetLogs(BaseModel):
    level: Optional[str] = None
    message: Optional[str] = None
    resourceId: Optional[str] = None
    timestamp_gte: Optional[str] = None
    timestamp_lte: Optional[str] = None
    traceId: Optional[str] = None
    spanId: Optional[str] = None
    commit: Optional[str] = None
    metadata: Optional[MetaData] = None