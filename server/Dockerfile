FROM oven/bun:1
WORKDIR /app
COPY . .
RUN bun install

ENV PORT = 8080
EXPOSE 8080

CMD ["bun", "run", "dev"]

