SELECT * FROM Sopt.post;

use Sopt;

DELETE from post where author = '0';
INSERT INTO post (author, title, content, createdAt) VALUES (12, 'Girl Crazy', 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.', '2/6/2020');
INSERT INTO post (author, title, content, createdAt) VALUES (4, 'Survival Quest', 'Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.', '6/10/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (13, 'Botany of Desire, The', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '3/19/2020');
INSERT INTO post (author, title, content, createdAt) VALUES (4, 'Yeti: The Giant of the 20th Century', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.', '11/16/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (15, 'Eyes of a Stranger', 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.', '8/8/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (6, 'Logan''s Run', 'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '10/25/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (7, 'Cutie Honey', 'Integer a nibh. In quis justo.', '7/28/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (8, 'Bright Leaves', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.', '11/16/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (19, 'Kairat', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '9/17/2019');
INSERT INTO post (author, title, content, createdAt) VALUES (10, 'Tatsumi', 'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', '12/21/2019');

SELECT * FROM post;

/-- post 데이터의 개수 --/
SELECT COUNT(*) FROM post;
/-- post title만 가져오기 --/
SELECT title FROM post ORDER BY title;
/-- 아무 값이나 INSERT 해보기 --/
INSERT INTO post (author, title, content, createdAt) VALUES (5, 'life', 'my life', '12/21/2020');
/-- postIdx가 3인 데이터 조회하기 --/
SELECT * FROM post WHERE postIdx='3';
/-- postIdx가 4인 post 개체들을 모두 출력하기 --/
SELECT * FROM post WHERE postIdx='4';
/-- 선택 ) post.sql 17 ~ 26을 실행시켰다면 userIdx가 2인 post+user 개체를 JOIN으로 출력해보기 --/
SELECT * FROM user JOIN post ON user.userIdx= post.author WHERE user.userIdx = '2';
/-- postIdx가 2인 데이터 날짜 현재로 수정하기 --/
UPDATE post SET createdAt='05/16/2020' WHERE postIdx='2';
/-- postIdx가 4인 데이터 지우기 --/
DELETE FROM post WHERE postIdx='4';