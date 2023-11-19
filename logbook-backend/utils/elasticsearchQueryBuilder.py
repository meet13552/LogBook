from models.getLogs import GetLogs

def elasticsearchQueryBuilder(getLogs: GetLogs):
    query = {
        "query": {
            "bool": {
                "filter": []
            }
        }
    }

    filter_list = query["query"]["bool"]["filter"]

    # Add term filters
    term_filters = ["level", "resourceId", "traceId", "spanId", "commit"]
    for field in term_filters:
        value = getattr(getLogs, field, None)
        if value is not None:
            filter_list.append({"term": {field: {"value": value}}})

    # Add match filter for message
    if getLogs.message is not None:

        if "*" in getLogs.message or "?" in getLogs.message:
            getLogs.message = getLogs.message.lower()
            filter_list.append({"wildcard": {"message": {"value": getLogs.message}}})
        else:
            filter_list.append({"match": {"message": {"query": getLogs.message}}})

    # Add range filter for timestamp
    if getLogs.timestamp_gte or getLogs.timestamp_lte:
        timestamp_range = {}
        if getLogs.timestamp_gte:
            timestamp_range["gte"] = getLogs.timestamp_gte
        else:
            timestamp_range["gte"] = getLogs.timestamp_lte

        if getLogs.timestamp_lte:
            timestamp_range["lte"] = getLogs.timestamp_lte
        else:
            timestamp_range["lte"] = getLogs.timestamp_gte

        filter_list.append({"range": {"timestamp": timestamp_range}})

    # Add term filter for metadata.parentResourceId
    if getLogs.metadata and getLogs.metadata.parentResourceId:
        filter_list.append({"term": {"metadata.parentResourceId": {"value": getLogs.metadata.parentResourceId}}})

    return query
