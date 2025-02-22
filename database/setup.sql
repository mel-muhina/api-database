-- Check if it exists and destorys first
DROP TABLE IF EXISTS wrong;
DROP TABLE IF EXISTS person;

CREATE TABLE person (
    -- generated for us
    person_id INT GENERATED ALWAYS AS IDENTITY,
    -- name shouldnt exceed 50 characters and can't accept null as an option
    person_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (person_id)
);

-- this is seeding into table

INSERT INTO person (person_name)
VALUES ('Peter'), ('Susan'), ('Edmund'), ('Lucy');

CREATE TABLE wrong (
    wrong_id INT GENERATED ALWAYS AS IDENTITY,
    -- foreign keys refrerences person table
    perpetrator_id INT NOT NULL,
    victim_id INT NOT NULL,
    description VARCHAR(200),
    forgiven BOOLEAN DEFAULT FALSE,
    forgotten BOOLEAN DEFAULT FALSE,
    revenged BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (wrong_id),
    -- linked to perpertrator and victim id
    FOREIGN KEY (perpetrator_id) REFERENCES person(person_id),
    FOREIGN KEY (victim_id) REFERENCES person(person_id)
);

INSERT INTO wrong
    (perpetrator_id, victim_id, description)
VALUES
    (3, 2, 'Ate his pet chicken.');