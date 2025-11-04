create table purchase (
	id serial primary key,
	name varchar(50) not null,
	price varchar(12) not null,
	description text,
	data_criacao TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
)