# Loans.TypeScript

My solution (TypeScript version) to the Back-End BR "[loans](https://github.com/backend-br/desafios/blob/master/loans/PROBLEM.md)" challenge.

## Prerequisites

- [Docker Engine](https://docs.docker.com/engine/install/)

### Environment variables

In project's root directory, create a `.env` file:

```
cp .env.example .env
```

Then fill the values in your `.env` file accordingly.

| Variable            | Description                  |
| :------------------ | :--------------------------- |
| `SERVICE_NAME`      | String. Application's name.  |
| `SERVICE_HTTP_PORT` | Number. HTTP server port.    |

## Building and Running with Docker

### Build

```bash
docker build -t loans .
```

### Run

```bash
docker run --rm -it --name loans loans
```

### Access

```bash
docker exec -it loans /bin/sh
```

## REST API

| Method | URI               | Description                                     |
| :----- | :---------------- | :---------------------------------------------- |
| `POST` | `/match-profile`  | List loans that match a given customer profile. |

### Example Payload

```json
{
  "age": 26,
  "cpf": "275.484.389-23",
  "name": "Vuxaywua Zukiagou",
  "income": 7000.00,
  "location": "SP"
}
```
