from fastapi import FastAPI
from routes.log import log
from routes.getLogs import getLogs
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(log)
app.include_router(getLogs)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=3000)
