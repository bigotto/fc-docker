FROM golang:1.19-alpine AS builder

WORKDIR /usr/src/app
COPY . .
RUN go build hello.go

FROM scratch
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/hello .
ENTRYPOINT [ "./hello" ]
