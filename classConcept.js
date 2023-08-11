class employee { // this is class

    constructor(id, name, age, salary, jobtitle, hiredate){
        this.id = id;           // properties
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.jobtitle = jobtitle;
        this.hiredate = hiredate;
    }

    getEmployeeID(){ //methods
        return this.employeeId;
    }

    getEmployeeName(){
        return this.name;
    }
    }

    const emp1 = new employee(1,"mohan", 34, 3500, "Automation Tester", "2023-08-10");
    const emp2 = new employee(2,"subash", 29, 8500, "Software engineer", "2022-01-23");

    console.log(emp1.age);
    console.log(emp1.getEmployeeIDget)

