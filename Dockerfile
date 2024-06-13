FROM python:3.9

WORKDIR /app/backend

COPY requirements.txt /app/backend
RUN pip install -r requirements.txt

COPY . /app/backend

EXPOSE 5000

CMD python /app/backend/manage.py runserver 0.0.0.0:5000
