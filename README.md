# React-SpringBoot-Android-Project
Backend: SpringBoot / Frontend: React &amp; Android /Skill: Account Register &amp; CRUD

### 해당 페이지는 아래의 DB TABLE을 생성하고 DB 뒤 정상적인 확인이 가능합니다.

```

--테이블 생성
create table MEMBER2(
    id varchar2(50) not null,
    pwd varchar(60) not null,
    name varchar(60) not null,
    auth number(1),
    constraint MEMBER2_pk primary key(id)
);

create table BBS(
    seq number(8),
    id varchar(50) not null,
    ref number(8),
    step number(8),
    depth number(8),
    title VARCHAR2(200),
    content VARCHAR2(4000),
    wdate date,
    del number(1),
    readcount number(8),
    constraint bbs_pk primary key(seq)
);

create table BBSCOMMENT(
    seq number(8),
    id varchar2(50),
    wdate date,
    content varchar2(4000)
);

ALTER TABLE MEMBER2 ADD CONSTRAINT MEMBER2_EMAIL_UN UNIQUE(email);
ALTER TABLE BBSCOMMENT ADD CONSTRAINT FK_COMMENT_ID FOREIGN KEY(id) REFERENCES MEMBER2(id);

--시퀀스추가
create sequence seq_bbs
start with 1
increment by 1;

--회원가입
INSERT INTO MEMBER2(ID, PWD, NAME, EMAIL, AUTH)
	VALUES('aaa', 'aaa', 'aaa', 'aaabbbcccddd@naver.com', 3);
INSERT INTO MEMBER2(ID, PWD, NAME, EMAIL, AUTH)
	VALUES('bbb', 'bbb', 'bbb', 'bbbbbbcccddd@naver.com', 3);
    
--테스트 게시글 작성
	INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'aaa', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test1', 'test1', SYSDATE, 0, 0);
                
    INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'aaa', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test2', 'test2', SYSDATE, 0, 0);
                
    INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'aaa', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test3', 'test3', SYSDATE, 0, 0);
                
    INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'bbb', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test4', 'test4', SYSDATE, 0, 0);
                
    INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'bbb', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test5', 'test5', SYSDATE, 0, 0);    
                
    INSERT INTO BBS(SEQ, ID, 
				REF, STEP, DEPTH, 
				TITLE, CONTENT, WDATE, DEL, READCOUNT)
	VALUES(		SEQ_BBS.NEXTVAL, 'bbb', 
				(SELECT NVL(MAX(REF)+1, 0) FROM BBS), 0, 0,
				'test6', 'test6', SYSDATE, 0, 0)                 
                
                
                        
```

### Spring Boot Fromt를 통해 웹 프론트 엔드를 확인 가능합니다.

1. SpringToolSuite로 SpringBootBack 폴더를 import하여 서버를 실행시킵니다.
2. eclipse로 SpringBootFront 폴더를 import하여 서버를 실행시킵니다.
3. 상기의 테이블을 생성하고 DB를 삽입했다면 아래의 계정으로 접속이 가능합니다.
>ID: aaa
>PW: 111

4. 상세글 보기를 클릭했을때 글 작성자와 로그인한 유저가 동일하면 
    글 삭제/수정 버튼이 보입니다. 유저가 동일하지 않으번 삭제/수정 버튼이 보이지 않습니다.
---

### Samples 를 통해 안드로이드 프론트엔드를 확인 가능합니다.

> C:\React-SpringBoot-Android-Project\Samples\src\screens\bbs 

상기 위치에 있는 Bbslist.tsx / Bbswrite.tsx 파일에는 YOUR IP ADDRESS 라는 부분이 있습니다.
YOUR IP ADDRESS 부분에 본인의 IP주소를 입력해야 합니다. 
프론트 엔드를 확인하려는 안드로이드 기계에도 똑같은 IP의 공유기를 연결해야지 접속이 됩니다.

상기의 테이블을 생성하고 DB를 삽입했다면 아래의 계정으로 접속이 가능합니다.
>ID: aaa
>PW: 111

