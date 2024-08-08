from contextlib import asynccontextmanager

import uvicorn
from fastapi import FastAPI,Depends

from app.auth import register_auth, current_active_user, User


@asynccontextmanager
async def lifespan(app: FastAPI):
    await register_auth(app)
    yield


app = FastAPI(lifespan=lifespan)

@app.get("/test")
def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=9000, reload=True, log_level="info")