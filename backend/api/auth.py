import os
import logging
from jose import jwt , JWTError
import httpx
from fastapi import Header , HTTPException
from dotenv import load_dotenv


load_dotenv()

logger = logging.getLogger('ats_resume_scorer')

SECRET_KEY_URL  = os.getenv("SECRET_KEY_URL")
ALGORITHM  = os.getenv("JWT_ALGORITHM")
JWKS_KEY = None

async def _get_secret_key():
    global JWKS_KEY
    if JWKS_KEY is None:
        async with httpx.AsyncClient() as client:
            response = await client.get(SECRET_KEY_URL)
            if response.status_code != 200:
                raise HTTPException(status_code=500, detail="Failed to fetch auth keys from Supabase")
            JWKS_KEY = response.json()
   


async def get_current_user(authorization : str = Header(...)):
    try:
        scheme, token = authorization.split()

        if scheme.lower() != "bearer":
            raise HTTPException(
                status_code=401,
                detail="Invalid auth scheme"
            )

    except ValueError:
        raise HTTPException(
            status_code=401,
            detail="Invalid Authorization header format"
        )

    payload = await verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid JWT Token"
        )
    
    return payload



async def verify_token(token : str):
    global JWKS_KEY
    await _get_secret_key()
    unverified_header = jwt.get_unverified_header(token)
    token_kid = unverified_header.get('kid')

    cached_kid = [key.get('kid') for key in JWKS_KEY.get('keys' , [])]
    if token_kid not in [cached_kid]:
        logger.info('Unknown key ID deteted Refreshing JWKS_CACHED')
        JWKS_KEY = None
        await _get_secret_key()


    try : 
        payload = jwt.decode(
            token,
            JWKS_KEY ,
            algorithms=[ALGORITHM],
            audience="authenticated"
        )

        return payload['sub']
    
    
    except JWTError:
        return None
