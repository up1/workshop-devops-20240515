FROM mysql:8.4.0
# FROM mysql@sha256:4a4e5e2a19aab7a67870588952e8f401e17a330466ecfc55c9acf51196da5bd0
COPY table.sql /docker-entrypoint-initdb.d/1.sql
COPY data.sql /docker-entrypoint-initdb.d/2.sql