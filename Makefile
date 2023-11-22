all: network spa app

network:
	docker network create scheduling_services || true


app:
	docker build . -t service_app -f ./docker/app/Dockerfile
	docker run --network=scheduling_services -dp 3000:3000 service_app

spa:
	docker build . -t service_spa -f ./docker/spa/Dockerfile
	docker run --network=scheduling_services -dp 80:80 service_spa
