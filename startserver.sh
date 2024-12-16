set -e

docker pull saicharan09/djangoapp

docker run -d -p 8000:8000 saicharan09/djangoapp
