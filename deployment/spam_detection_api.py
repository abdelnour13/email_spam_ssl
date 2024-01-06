from fastapi import FastAPI
from pydantic import BaseModel
from joblib import load

app = FastAPI()

class EmailInput(BaseModel):
    email_text: str

#loading the model
model_path = "spam_detection_model.joblib"
spam_model = load(model_path)

#rest api for spam detection
@app.post("/predict")
def detect_spam(email_input: EmailInput):
    email_text = email_input.email_text

    prediction = spam_model.predict([email_text])

    is_spam = bool(prediction[0])

    return {"is_spam": is_spam}
