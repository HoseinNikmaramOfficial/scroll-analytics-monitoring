-- backend/src/database/schema.sql

CREATE TABLE metrics (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  transaction_volume INTEGER,
  block_time INTEGER,
  gas_fee INTEGER
);
