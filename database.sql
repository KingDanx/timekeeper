CREATE TABLE user_times(
    user_id int,
    FOREIGN KEY(user_id)
    REFERENCES users(user_id),
    start_time timestamp,
    end_time timestamp,
    for_customer VARCHAR(255)
);