from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # tighten later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Temporary in-memory storage
# -----------------------------
early_access_emails = []

# -----------------------------
# Models
# -----------------------------
class EarlyAccessRequest(BaseModel):
    email: str

# -----------------------------
# Routes
# -----------------------------
@app.get("/")
def root():
    return {"status": "GullyVision backend running"}

@app.post("/early-access")
def early_access(data: EarlyAccessRequest):
    early_access_emails.append(data.email)
    return {
        "message": "Email added successfully",
        "total_signups": len(early_access_emails),
    }
