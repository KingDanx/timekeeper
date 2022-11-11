CREATE DATABASE timekeeper

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
)

CREATE TABLE user_times(
    time_id SERIAL,
    user_id int,
    FOREIGN KEY(user_id)
    REFERENCES users(user_id),
    start_time timestamp,
    end_time timestamp,
    for_customer VARCHAR(255)
);