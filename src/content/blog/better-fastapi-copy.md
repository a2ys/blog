---
title: Building RESTful APIs with FastAPI, Better Version
tags: ["FastAPI", "Python", "API Development", "Backend"]
date: 2024-11-03
description: A beginner’s guide to building RESTful APIs using FastAPI in Python.
# author: Aayush Shukla
author: aayush-shukla
---

## Building RESTful APIs with FastAPI

In this tutorial, we'll explore the basics of FastAPI, an efficient and modern framework for building RESTful APIs in Python. You’ll learn how to set up FastAPI, create endpoints, handle requests, and integrate a database.

## Introduction

FastAPI is a high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints. It’s designed for speed and ease of use, supporting asynchronous request handling and automatic generation of OpenAPI and JSON Schema documentation.

## Prerequisites

Before starting, ensure you have the following:

- Basic knowledge of Python
- Python 3.7 or higher installed on your machine
- Familiarity with REST API concepts

## Setting Up FastAPI

To start using FastAPI, first install it with pip:

```bash
pip install fastapi uvicorn
```

`uvicorn` is an ASGI server for running FastAPI applications. You can start your FastAPI app by running `uvicorn` with the main file name.

## Creating a Basic API Endpoint

Define your first API endpoint to return a simple message. Create a file named main.py and add the following code:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, FastAPI!"}
```

Run this using the command:

```bash
uvicorn main:app --reload
```

Visit `http://127.0.0.1:8000` in your browser to see the JSON response.

The `@app.get` decorator defines a GET endpoint. FastAPI provides decorators like `@app.post`, `@app.put`, and `@app.delete` for different HTTP methods.

## Working with Path Parameters and Query Parameters

FastAPI allows defining path and query parameters in endpoints. Here’s an example:

```python
@app.get("/items/{item_id}")
async def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}
```

- `item_id` is a path parameter that’s required.
- `q` is an optional query parameter.

Test this by visiting `http://127.0.0.1:8000/items/5?q=example`.

## Creating CRUD Operations

A RESTful API typically includes CRUD operations: Create, Read, Update, and Delete. Here's how to set them up.

### Create a New Item (POST)

```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
async def create_item(item: Item):
    return {"item_name": item.name, "item_price": item.price}
```

### Read an Item (GET)

```python
@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id, "name": "Sample Item"}
```

### Update an Item (PUT)

```python
@app.put("/items/{item_id}")
async def update_item(item_id: int, item: Item):
    return {"item_id": item_id, "name": item.name, "price": item.price}
```

### Delete an Item (DELETE)

```python
@app.delete("/items/{item_id}")
async def delete_item(item_id: int):
    return {"item_id": item_id, "message": "Item deleted"}
```

## Integrating with a Database (PostgreSQL)

To persist data, let’s connect FastAPI to a PostgreSQL database using SQLAlchemy.

1. Install dependencies:

    ```bash
    pip install sqlalchemy databases psycopg2
    ```

2. Define the Database Configuration in `database.py`:

    ```python
    from sqlalchemy import create_engine
    from sqlalchemy.ext.declarative import declarative_base
    from sqlalchemy.orm import sessionmaker

    SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/dbname"

    engine = create_engine(SQLALCHEMY_DATABASE_URL)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
    Base = declarative_base()
    ```

3. Define a Model:

    ```python
    from sqlalchemy import Column, Integer, String
    from .database import Base

    class Item(Base):
        __tablename__ = "items"
        id = Column(Integer, primary_key=True, index=True)
        name = Column(String, index=True)
        price = Column(Float)
    ```

4. Use the Model in Endpoints. (Example: Create an Item)

    ```python
    from fastapi import FastAPI, Depends, HTTPException
    from sqlalchemy.orm import Session
    from .database import SessionLocal
    from .models import Item

    app = FastAPI()

    def get_db():
        db = SessionLocal()
        try:
            yield db
        finally:
            db.close()

    @app.post("/items/", response_model=Item)
    async def create_item(item: Item, db: Session = Depends(get_db)):
        db.add(item)
        try:
            db.commit()
            db.refresh(item)
        except Exception as e:
            db.rollback()  # Rollback the session in case of error
            raise HTTPException(status_code=400, detail=str(e))
        return item
    ```

## Error Handling and Validation

FastAPI includes robust error handling and data validation through Pydantic.

```python
from fastapi import HTTPException

@app.get("/items/{item_id}")
async def read_item(item_id: int):
    if item_id not in items_db:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"item_id": item_id}
```

## Testing Your API

FastAPI supports built-in testing using pytest. Here's a sample test for the GET endpoint:

```python
from fastapi.testclient import TestClient
from .main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, FastAPI!"}
```

Run the tests with:

```bash
pytest
```

## Conclusion

In this guide, you’ve learned how to create a RESTful API with FastAPI, including handling requests, defining CRUD operations, integrating with a database, and testing. FastAPI's speed and simplicity make it an excellent choice for backend development. Explore the official documentation for more advanced features and use cases.
