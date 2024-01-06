# Email Spam Classification

This repository contains a machine learning model using semi-supervised techniques such as Label Propagation and Self-Learning to detect spam emails.

## Setup

1. Create and activate your virtual environment.

3. Install the required packages:

    ```bash
    pip install fastapi scikit-learn uvicorn imbalanced-learn
    ```

## Usage

1. Start the server:

    ```bash
    uvicorn spam_detection_api:app --reload
    ```

    Or: 

     ```bash
     uvicorn spam_detection_api:app --reload --port 8001
     ```


2. Open your web browser and navigate to `http://localhost:8000/docs` to access the API documentation (You can also test the api using this page).

3. Test the API by sending a POST request to `http://localhost:8000/predict` with the following JSON payload:

    ```json
    {
      "email": "This is a spam email!"
    }
    ```

    The API will respond with a JSON object containing true or false.
