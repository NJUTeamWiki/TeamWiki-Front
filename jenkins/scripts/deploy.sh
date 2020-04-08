docker stop teamwiki-web
docker rm teamwiki-web
docker run --name teamwiki-web --network teamwiki --detach \
 -p 80:80 \
 xuyangchen/teamwiki-web