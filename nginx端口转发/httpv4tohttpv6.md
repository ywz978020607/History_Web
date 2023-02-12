配置中增加：
```
# ipv4-http转ipv6-https
    server {
        listen *:9015;
        listen [::]:9015;
        charset 'utf-8';
        resolver [240c::6666] [2409:8014:2000::1] 211.137.32.178 valid=10s ipv6=on;
        location / {
            set $jumpdomain "ywz3.buaamc2.net";
            proxy_pass https://$jumpdomain:9010;
        }
    }
```