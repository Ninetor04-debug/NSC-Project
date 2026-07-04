from fastapi import APIRouter
from pydantic import BaseModel
import httpx

router = APIRouter(prefix="/code", tags=["code"])

PISTON_URL = "https://emkc.org/api/v2/piston/execute"

class CodeSchema(BaseModel):
    source_code: str
    stdin: str = ""

class SubmitSchema(BaseModel):
    source_code: str
    expected_output: str
    stdin: str = ""

@router.post("/run")
def run_code(body: CodeSchema):
    payload = {
        "language": "python",
        "version": "*",
        "files": [
            {
                "name": "main.py",
                "content": body.source_code
            }
        ],
        "stdin": body.stdin
    }

    with httpx.Client() as client:
        res = client.post(PISTON_URL, json=payload, timeout=10)

    result = res.json()
    run = result.get("run", {})

    return {
        "stdout": run.get("stdout", ""),
        "stderr": run.get("stderr", ""),
        "status": "Error" if run.get("stderr") else "Success"
    }

@router.post("/submit")
def submit_code(body: SubmitSchema):
    payload = {
        "language": "python",
        "version": "*",
        "files": [
            {
                "name": "main.py",
                "content": body.source_code
            }
        ],
        "stdin": body.stdin
    }

    with httpx.Client() as client:
        res = client.post(PISTON_URL, json=payload, timeout=10)

    result = res.json()
    run = result.get("run", {})
    stdout = run.get("stdout", "").strip()
    stderr = run.get("stderr", "")
    is_correct = stdout == body.expected_output.strip() and not stderr

    return {
        "stdout": stdout,
        "stderr": stderr,
        "status": "Error" if stderr else "Success",
        "is_correct": is_correct
    }