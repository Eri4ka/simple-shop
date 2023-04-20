build:
	docker build -t eri4ka/simple-shop .
run:
	docker run -p 3000:3000 --rm --name simple-shop eri4ka/simple-shop
stop:
	docker stop simple-shop