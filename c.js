const code = document.querySelector(".code");
document.querySelector(".sub").addEventListener("click", () => {
  var str = document.querySelector(".roll").value;
  var str1;
  str1 = str.substring(3, str.length);
  console.log(str1);
  code.innerHTML = `create table EMPLOYEE${str1}(EMPNO NUMBER PRIMARY KEY,ENAME VARCHAR2(20),JOB VARCHAR2(20),HIREDATE DATE,MGR NUMBER,SAL NUMBER,COMM NUMBER,DEPTNO NUMBER(2));
  <br>

insert into EMPLOYEE${str1} values(7369,'SMITH','CLERK','17-DEC-80',7902,800,'',20);
<br>

insert into EMPLOYEE${str1} values(7499,'ALLEN','SALESMAN','20-FEB-81',7698,1600,300,30);
<br>
insert into EMPLOYEE${str1} values(7521,'WARD','SALESMAN','22-FEB-81',7698,1250,500,30);
<br>

insert into EMPLOYEE${str1} values(7566,'JONES','MANAGER','02-APR-81',7839,2975,'',20);
<br>
insert into EMPLOYEE${str1} values(7654,'MARTIN','SALESMAN','28-SEP-81',7698,1250,1400,30);
<br>
insert into EMPLOYEE${str1} values(7698,'BLAKE','MANAGER','01-MAY-81',7839,2850,'',30);
<br>

insert into EMPLOYEE${str1} values(7782,'CLARK','MANAGER','09-JUN-81',7839,2450,'',10);
<br>

insert into EMPLOYEE${str1} values(7788,'SCOTT','ANALYST','19-APR-87',7566,3000,'',20);

<br>
insert into EMPLOYEE${str1} values(7839,'KING','PRESIDENT','17-NOV-81','',5000,'',10);
<br>

insert into EMPLOYEE${str1} values(7844,'TURNER','SALESMAN','08-SEP-81',7698,1500,0,30);
<br>

insert into EMPLOYEE${str1} values(7876,'ADAMS','CLERK','23-MAY-87',7788,1100,'',20);
<br>
insert into EMPLOYEE${str1} values(7900,'JAMES','CLERK','03-DEC-81',7698,950,'',30);

<br>
insert into EMPLOYEE${str1} values(7902,'FORD','ANALYST','03-DEC-81',7566,3000,'',20);
<br>

insert into EMPLOYEE${str1} values(7934,'MILLER','CLERK','23-JAN-82',7782,1300,'',10);
<br>
commit;
<br>


 CREATE table DEPT${str1}(DEPTNO NUMBER(2),DNAME VARCHAR2(20),LOC VARCHAR2(20));
<br>

insert into DEPT${str1} values(10,'ACCOUNTING','NEW YORK');

<br>
insert into DEPT${str1} values(20,'RESEARCH','DALLAS');
<br>
insert into DEPT${str1} values(30,'SALES','CHICAGO');

<br>
insert into DEPT${str1} values(40,'OPERATIONS','BOSTON');
<br>
 commit;

`;
});
