配置中增加：
```
# ipv4-http转ipv6-https
    server {
        listen *:9013;
        listen [::]:9013;
        charset 'utf-8';
        resolver [240c::6666] [2409:8014:2000::1] 211.137.32.178 valid=10s ipv6=on;
        # 境外用 resolver [240c::6666] valid=10s ipv6=on;

        location / {
            set $jumpdomain "your.domain";
            rewrite ^/(.*) /uploadapi/openapi/$1  break;
            proxy_pass https://$jumpdomain:9010;
        }

        location ^~/other/ {
            set $jumpdomain2 "your.domain2";
            rewrite ^/other/(.*)$ /$1  break;
            proxy_pass https://$jumpdomain2;
        }

        # location / {
        #     deny all;
        # }
        # location /preapi/ {
        #     set $jumpdomain "your.domain";
        #     rewrite ^/preapi/(.*) /uploadapi/openapi/$1  break;
        #     proxy_pass https://$jumpdomain:9010;
        # }
    }
```
