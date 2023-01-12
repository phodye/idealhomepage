DROP TABLE IF EXISTS cities cascade;

CREATE TABLE cities (
 id BIGSERIAL,
 name VARCHAR,
 latitude BIGSERIAL,
 longitude BIGSERIAL
);

ALTER TABLE cities ADD CONSTRAINT cities_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS forecasts cascade;

CREATE TABLE forecasts (
 id BIGSERIAL,
 cityname VARCHAR,
 statecode VARCHAR,
 currenttemp INT,
 hightemp INT,
 lowtemp INT,
 descriptor VARCHAR,
 weathericon VARCHAR
);

ALTER TABLE forecasts ADD CONSTRAINT forecasts_pkey PRIMARY KEY (id);
