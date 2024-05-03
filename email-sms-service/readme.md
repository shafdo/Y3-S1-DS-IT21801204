# Email & SMS API

## Setup docker

- Build and run docker container.

```
$ docker build -t ds-email-sms-service .
$ docker run -itd -p 8080:8080 ds-email-sms-service
```

## Documentation

**POST /api/v1/email/send**

```
{
  "from": "admin@sliit.lk",
  "recipient": "yugantha1468@gmail.com",
  "subject": "Confirmation Code",
  "emailBody": "<h2>Hello User,</h2><br>This is the email body content."
}
```

![](https://i.imgur.com/ocfDOO3.png)
