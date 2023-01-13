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
