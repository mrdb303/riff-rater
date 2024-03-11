CREATE TABLE rr_profiles (
id SERIAL PRIMARY KEY,
clerk_user_id text,
username text,
bio text
);


CREATE TABLE rr_reviews (
id SERIAL PRIMARY KEY,
album_title VARCHAR(225),
album_artist VARCHAR(225),
album_score INTEGER,
album_review TEXT,
user_id text
);

INSERT INTO rr_reviews (album_title, album_artist,album_score,album_review, user_id ) VALUES
('Syro',' Aphex Twin', 4 , 'This album was great' , 'user_2cay5RTJ1gTJacLlYox8bHhdNw3');

CREATE TABLE rr_comments (
    id SERIAL PRIMARY KEY,
    username text,
    content text,
    review_id INT REFERENCES rr_reviews(id),
    user_id text
);

INSERT INTO rr_comments (username, content, review_id, user_id) VALUES
('Myles','This is a comment on the first review', 1, 'user_2cay5RTJ1gTJacLlYox8bHhdNw3');


