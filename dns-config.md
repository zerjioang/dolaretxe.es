Configuracion de DNS

Antes

```bash
dolaretxe.es     : 194.63.249.232
www.dolaretxe.es : 194.63.249.232
```

Informacion de la zona de DNS

```bash
dolaretxe.es.		3600	IN	SOA	ns1.hyp.net. hostmaster.domeneshop.no. 1576020066 14400 3600 777600 3600
dolaretxe.es.		86400	IN	NS	ns1.hyp.net.
dolaretxe.es.		86400	IN	NS	ns2.hyp.net.
dolaretxe.es.		86400	IN	NS	ns3.hyp.net.
dolaretxe.es.		3600	IN	MX	10 mx.domeneshop.no.
dolaretxe.es.		3600	IN	TXT	"v=spf1 include:_spf.domeneshop.no ~all"
dolaretxe.es.		3600	IN	A	194.63.249.232
ds201810._domainkey.dolaretxe.es. 3600 IN TXT	"v=DKIM1\; k=rsa\; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxa9tFYAH5f79KRmvfOea5jCdYWAsD/PcC/PHmIHLr5zngLQOaZVVdUYyWguHXSzv/yL6F7En16P26jJJE+h+F4SV6mCEpInkAgq9gRQRXPizsq/u92WtJDuQRc9Yx00bup5SvoLXHy1fGBH6GpePhAfm5nBkAlzHIVu2kJkKPV8hL9EoUfASBVywqJ1E9l9" "BrKPbKh4AJ8CWJUKU/yDNBc760yOTOlxZR8fFu3u57JzqHgBEtHnMTuJXvzlkY1BT17xC8/okAtPR5KZvf4Hfptqbvsfea3DsmuzDZg5cx5x3EMiWx60Mb/42289S8ypP4KLidN/aoaUWH/7UEHC+BwIDAQAB"
ds201912._domainkey.dolaretxe.es. 3600 IN TXT	"v=DKIM1\; k=rsa\; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxw9QgqjfC/v6aUikTgtHPiIjays1zGRrYGxdp8WH+/iarfdjJ1BjjE2jU/ec/yOtdlmUH2PpabgbaMQa3dODq5riOHGrXR8R3/ihWxWNyWQKzDZqMIMyUuWrJiaQGjKeRCkg53LAjP02Lq5N3h4ftVUCqgWBKvpxe8r4c/cYRB71yMfg/1SIORc1M8/T7/I" "ftreJiqxcPp9pkhE44WWkUh9FnRwFTKUeekIMzTN9L69H2dUEnDldw+1svqqUYEu/ip9D6z2i1hM0ItmvF6NSC/J97clLEdPLLSmNf+sbXStXMpdRAGEM6y3yUKOvzXKHpswt/cf2d+f5hjiXg7HR0wIDAQAB"
www.dolaretxe.es.	3600	IN	A	194.63.249.232
dolaretxe.es.		3600	IN	SOA	ns1.hyp.net. hostmaster.domeneshop.no. 1576020066 14400 3600 777600 3600
;; WHEN: Mon Jul 20 17:21:58 CEST 2020
;; XFR size: 11 records (messages 1, bytes 1181)
```

Informacion de zona DNS despues de los cambios

```bash
dolaretxe.es.		3600	IN	SOA	ns1.hyp.net. hostmaster.domeneshop.no. 1595260325 14400 3600 777600 3600
dolaretxe.es.		3600	IN	TXT	"v=spf1 include:_spf.domeneshop.no ~all"
dolaretxe.es.		3600	IN	A	185.199.108.153
dolaretxe.es.		3600	IN	A	185.199.109.153
dolaretxe.es.		3600	IN	A	185.199.110.153
dolaretxe.es.		3600	IN	A	185.199.111.153
dolaretxe.es.		3600	IN	MX	10 mx.domeneshop.no.
dolaretxe.es.		86400	IN	NS	ns1.hyp.net.
dolaretxe.es.		86400	IN	NS	ns2.hyp.net.
dolaretxe.es.		86400	IN	NS	ns3.hyp.net.
ds201912._domainkey.dolaretxe.es. 3600 IN TXT	"v=DKIM1\; k=rsa\; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAxw9QgqjfC/v6aUikTgtHPiIjays1zGRrYGxdp8WH+/iarfdjJ1BjjE2jU/ec/yOtdlmUH2PpabgbaMQa3dODq5riOHGrXR8R3/ihWxWNyWQKzDZqMIMyUuWrJiaQGjKeRCkg53LAjP02Lq5N3h4ftVUCqgWBKvpxe8r4c/cYRB71yMfg/1SIORc1M8/T7/I" "ftreJiqxcPp9pkhE44WWkUh9FnRwFTKUeekIMzTN9L69H2dUEnDldw+1svqqUYEu/ip9D6z2i1hM0ItmvF6NSC/J97clLEdPLLSmNf+sbXStXMpdRAGEM6y3yUKOvzXKHpswt/cf2d+f5hjiXg7HR0wIDAQAB"
old.dolaretxe.es.	3600	IN	A	194.63.249.232
www.dolaretxe.es.	3600	IN	CNAME	zerjioang.github.io.
dolaretxe.es.		3600	IN	SOA	ns1.hyp.net. hostmaster.domeneshop.no. 1595260325 14400 3600 777600 3600
;; WHEN: Mon Jul 20 17:55:14 CEST 2020
;; XFR size: 14 records (messages 1, bytes 833)
```