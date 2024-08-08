from fastapi import FastAPI

from .db import User, create_db_and_tables
from .schemas import UserCreate, UserRead, UserUpdate
from .users import (
    SECRET,
    auth_backend,
    current_active_user,
    fastapi_users,
    google_oauth_client
)


async def register_auth(app: FastAPI):
    await create_db_and_tables()
    app.include_router(
        fastapi_users.get_auth_router(auth_backend, requires_verification=False),
        prefix="/auth/jwt",
        tags=["auth"]
    )

    app.include_router(
        fastapi_users.get_register_router(UserRead, UserCreate),
        prefix="/auth",
        tags=["auth"],
    )
    app.include_router(
        fastapi_users.get_reset_password_router(),
        prefix="/auth",
        tags=["auth"],
    )
    app.include_router(
        fastapi_users.get_verify_router(UserRead),
        prefix="/auth",
        tags=["auth"],
    )
    app.include_router(
        fastapi_users.get_users_router(UserRead, UserUpdate),
        prefix="/users",
        tags=["users"],
    )

    app.include_router(
        fastapi_users.get_oauth_router(google_oauth_client, auth_backend, SECRET),
        prefix="/auth/google",
        tags=["auth"],
    )