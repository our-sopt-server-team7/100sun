USE Sopt;

/-- 필수 데이터를 다 넣어주었을 때에만 가능 --/
/-- INSERT INTO user 							VALUES ('Dacey Malecky', 'sA75idA11LX8', 'dmalecky0@thetime.co.uk', '353-738-8304'); --/
insert into user (name, password, email, phone) values ('Dietrich Bonsale', 'Cd90Gwp', 'dbonsale0@addtoany.com', '319-864-7251');
insert into user (name, password, email, phone) values ('Kelsey Hubback', 'b5RyJXiQVV', 'khubback1@hibu.com', '155-269-6882');
insert into user (name, password, email, phone) values ('Noel Tewnion', 'A7bl33NdQ', 'ntewnion2@google.pl', '796-671-8061');
insert into user (name, password, email, phone) values ('Meghann Veysey', 'QcN1jjLczEQM', 'mveysey3@skype.com', '477-621-4771');
insert into user (name, password, email, phone) values ('Gil Ranklin', 'kD6q51', 'granklin4@time.com', '157-617-5201');
insert into user (name, password, email, phone) values ('Paddy De Anesy', 'dkOiKrhKPt', 'pde5@oaic.gov.au', '231-433-8869');
insert into user (name, password, email, phone) values ('Ardisj Scamel', 'Qb46nvWTR', 'ascamel6@wunderground.com', '722-979-6611');
insert into user (name, password, email, phone) values ('Cherri Gooderidge', 'pPOHVCcND', 'cgooderidge7@360.cn', '866-366-4326');
insert into user (name, password, email, phone) values ('Papagena Matuszyk', 'TAfNj3', 'pmatuszyk8@artisteer.com', '772-322-3794');
insert into user (name, password, email, phone) values ('Ginnie Harriott', 'qFSt1Z3bOW', 'gharriott9@liveinternet.ru', '543-197-7410');
insert into user (name, password, email, phone) values ('Gonzalo Grigolon', 'f1s26jWpa', 'ggrigolona@phoca.cz', '924-431-7915');
insert into user (name, password, email, phone) values ('Armand Schusterl', 'MwNttRwEggDy', 'aschusterlb@geocities.jp', '623-295-4772');
insert into user (name, password, email, phone) values ('Anitra Cookes', 'F9vNW92kgN', 'acookesc@state.gov', '576-814-8971');
insert into user (name, password, email, phone) values ('Sadella Smale', 'hdX92nsmucwI', 'ssmaled@nhs.uk', '708-826-4872');
insert into user (name, password, email, phone) values ('Gal McTerlagh', 'cZVG4Xsl', 'gmcterlaghe@craigslist.org', '950-700-4932');
insert into user (name, password, email, phone) values ('Gianna Eidler', 'rRl6SpvjaB8d', 'geidlerf@stumbleupon.com', '999-956-0628');
insert into user (name, password, email, phone) values ('Madeleine Mussen', '1tlHaI', 'mmusseng@cnn.com', '627-158-2508');
insert into user (name, password, email, phone) values ('Tyrone Kamenar', 'QffItv7H', 'tkamenarh@i2i.jp', '900-802-9118');
insert into user (name, password, email, phone) values ('Mickie Wanka', 'Kck8W5L0eJV', 'mwankai@unc.edu', '890-948-8971');
insert into user (name, password, email, phone) values ('Glynda Florence', 'gjNZiSyb', 'gflorencej@github.com', '406-347-9194');

SELECT * FROM user;

SELECT COUNT(*) FROM user;
SELECT name FROM user ORDER BY name DESC;
SELECT DISTINCT name, email FROM user WHERE userIdx='5';

/-- 특정 Idx를 찾고 해서 사용자의 이름 바꾸기 --/
UPDATE user SET name='gngsn' WHERE userIdx='3';
SELECT * FROM user WHERE userIdx='3';

/-- 특정 Idx를 찾아서 사용자를 지우기 --/
DELETE FROM user WHERE userIdx='3';
SELECT * FROM user WHERE userIdx='3';