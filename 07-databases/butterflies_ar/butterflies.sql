CREATE TABLE butterflies (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT,
	family TEXT,
	image TEXT, -- URL for a photo of a butterfly
	plant_id INTEGER
);

-- seed data

INSERT INTO butterflies (name, family) VALUES ('Monarch', 'Nymphalidae');
