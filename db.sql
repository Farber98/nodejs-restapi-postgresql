DROP DATABASE IF EXISTS pql-restapi-node

CREATE TABLE Users(
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(80),
    Email VARCHAR(80)
);

INSERT INTO Users(Name,Email) VALUES ('A','a@a.com');
INSERT INTO Users(Name,Email) VALUES ('B','b@b.com');
INSERT INTO Users(Name,Email) VALUES ('C','c@c.com');
INSERT INTO Users(Name,Email) VALUES ('D','d@d.com');
INSERT INTO Users(Name,Email) VALUES ('E','e@e.com');
INSERT INTO Users(Name,Email) VALUES ('F','f@f.com');
INSERT INTO Users(Name,Email) VALUES ('G','g@g.com');
INSERT INTO Users(Name,Email) VALUES ('H','h@h.com');
INSERT INTO Users(Name,Email) VALUES ('I','i@i.com');