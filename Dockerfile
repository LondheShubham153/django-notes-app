FROM python:3.9

WORKDIR /app/backend

COPY requirements.txt /app/backend
RUN pip install -r requirements.txt

# Add the additional pip install commands
RUN pip install --upgrade docker requests urllib3

COPY . /app/backend

EXPOSE 8000

CMD ["python", "/app/backend/manage.py", "runserver", "0.0.0.0:8000"]

