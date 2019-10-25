CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(75),
    profile_pic TEXT);

CREATE TABLE posts (
    posts_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img text,
    content text,
    author_id INTEGER REFERENCES users(user_id);
)