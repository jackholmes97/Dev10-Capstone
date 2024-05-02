drop database if exists haring;
create database haring;
use haring;

-- Element Type
create table elm_type (
    elm_type_id int primary key auto_increment,
    elm_type_name varchar(50) not null unique
);


-- Post

create table submission (
    submission_id int primary key auto_increment,
    submission_title varchar(50) not null,
    elm_type_id int not null,
    app_user_id int not null,
    constraint fk_submission_type_id
        foreign key (elm_type_id)
        references elm_type(elm_type_id),
    constraint fk_submission_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
);

-- Comment
create table comment (
    comment_id int primary key auto_increment,
    comment_text varchar(2048) not null,
    submission_id int not null,
    app_user_id int not null,
    constraint fk_comment_submission_id
        foreign key (submission_id)
        references submission(submission_id),
    constraint fk_comment_user_id
        foreign key (app_user_id)
        references app_user(app_user_id)
);
-- AppUser

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);