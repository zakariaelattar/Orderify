SET serveroutput on
DECLARE 
    TYPE temp IS REF CURSOR;
    c temp;
    line                hr.emp%ROWTYPE;
    nombre_employes     NUMBER :=0;
    moyenne_salaire     hr.emp.sal%TYPE;
    numDEPT             Number;
    ligne               varchar(80) :='------------------------------------------------------------------------------';
  
   
BEGIN
        OPEN c FOR select * from hr.emp;
        DBMS_OUTPUT.PUT_LINE(ligne);
        DBMS_OUTPUT.PUT_LINE('NUM   NOM     PRENOM      SALAIRE     DEPT');
        DBMS_OUTPUT.PUT_LINE(ligne);

        LOOP
            fetch c into line;
            EXIT when c%NOTFOUND;
            DBMS_OUTPUT.PUT_LINE(
                line.empno||' '||
                line.ename||' '||
                line.job||' '||
                line.mgr||' '||
                line.hiredate||' '||
                line.sal||' '||line.comm);
        END LOOP;
        DBMS_OUTPUT.PUT_LINE(ligne);
        CLOSE c;

        ligne:= SUBSTR(ligne,1,25);
        OPEN c FOR SELECT COUNT(*),AVG(sal), deptno FROM hr.emp GROUP BY deptno;
        DBMS_OUTPUT.PUT_LINE(ligne);
        DBMS_OUTPUT.PUT_LINE('numDEPT   NBR_EMPS    MOY_SAL');
        DBMS_OUTPUT.PUT_LINE(ligne);

        LOOP
            fetch C into nombre_employes,moyenne_salaire,numDEPT;
            exit when c%NOTFOUND;
            DBMS_OUTPUT.PUT_LINE(numDEPT||'  '||nombre_employes||'  '||moyenne_salaire);
        END LOOP;
        DBMS_OUTPUT.PUT_LINE(ligne);
       

        CLOSE c;
END;
/
----------------------------

SET SERVEROUTPUT ON 
ACCEPT n PROMPT 'entrer la valeur de n'

DECLARE 

v_csal NUMBER;
v_cont NUMBER;
v_num NUMBER := &n;
v_ename scott.emp.ename%TYPE;
v_sal scott.emp.sal%TYPE;
CURSOR emp_cursor IS SELECT ename, sal FROM scott.emp ORDER BY sal DESC;
TYPE type_tab_emp IS TABLE OF emp_cursor%ROWTYPE INDEX BY BINARY_INTEGER;
tab_emp typ_tab_emp;

BEGIN
    SELECT COUNT(DISTINCT SAL), COUNT(SAL) INTO v_csal,v_count FROM scott.EMP;
    IF v_num=0 OR v_num>v_count THEN
         DBMS_OUTPUT.PUT_LINE('le nombre de salaire que vous avez entrer est refusé');
    ELSE
        OPEN emp_cursor;
        FETCH emp_cursor INTO v_ename, v_sal;
        WHILE emp_cursor%ROWCOUNT <= v_num AND emp_cursor%FOUND LOOP
            tab_emp(emp_cursor%ROWCOUNT).ename := v_ename;
            tab_emp(emp_cursor%ROWCOUNT).sal := v_sal;
            FETCH emp_cursor INTO v_ename, v_sal;
        END LOOP;
        CLOSE emp_cursor;
        FOR cpt IN 1..v_num LOOP
        DBMS_OUTPUT.PUT_LINE("Nom: "||' '||tab_emp(cpt).ename||' et salaire:'||tab_emp(cpt).sal);
        END LOOP;
        END IF;
END;
/