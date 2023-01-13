DROP TABLE IF EXISTS forecasts cascade;

CREATE TABLE forecasts (
 id BIGSERIAL,
 cityname VARCHAR,
 statecode VARCHAR,
 countrycode VARCHAR,
 currenttemp NUMERIC,
 hightemp NUMERIC,
 lowtemp NUMERIC,
 descriptor VARCHAR,
 weathericon VARCHAR,
 added TIMESTAMP DEFAULT (NOW() AT TIME ZONE 'EST')
);

ALTER TABLE forecasts ADD CONSTRAINT forecasts_pkey PRIMARY KEY (id);

CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.added = (NOW() AT TIME ZONE 'EST');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON forecasts
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();