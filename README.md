# Projekt Kubernetes

Źródło:

> Aplikacja pochodzi z oficjalnego [repozytorium Dockera](https://github.com/docker/getting-started-app), natomiast podzielono ją na dwie aplikacje - frontend i backend

## Wdrożenie aplikacji kubernetes

1. Budowanie obrazów dockerowych

   ```
   docker build -t backend ./backend
   docker build -t frontend ./frontend
   ```

2. Zaloguj się do Docker Hub

   ```
   docker login
   ```

3. Utwórz tag dla repozytorium i wyślij obraz do Docker Hub

   ```
   docker image tag backend:latest normanmenescdv/backend:latest
   docker image tag frontend:latest normanmenescdv/frontend:latest

   docker push normanmenescdv/backend:latest
   docker push normanmenescdv/frontend:latest
   ```

4. Wdrożenie aplikacji w Kubernetes

   ```
   kubectl apply -f k8s/backend-deployment.yaml
   kubectl apply -f k8s/backend-service.yaml
   kubectl apply -f k8s/frontend-deployment.yaml
   kubectl apply -f k8s/frontend-service.yaml
   ```

5. Sprawdź uruchomione usłgu

   ```
   kubectl get pods           # wyświetl uruchomione pody
   kubectl get deployments    # wyświetl działające deploymenty
   kubectl get services       # wyświetl działające usługi
   ```

6. Uruchom minikube
   ```
   minikube start
   minikube dashboard
   ```
