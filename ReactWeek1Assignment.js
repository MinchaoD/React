class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(bootcampname, level, students = []){
        this.bootcampname = bootcampname;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister){
        const checkStudent = this.students.filter(  student => student.email === studentToRegister.email ) ;
        // The below code also works
        // const checkStudent = this.students.filter( student => student.email.includes(studentToRegister.email );
        if (checkStudent.length === 0) {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the Bootcamp ${this.bootcampname}`)
        } else {
            console.log(`This student is alreay registered.`)
        }
        return this.students
        }
}

const student1 = new Student("Neo", "neo@matrix.org", "Seattle");
const student2 = new Student("Morpheus", "morpheus@matrix.org", "Tacoma");
const student3 = new Student("Trinity", "trinity@matrix.org", "Bellingham");

const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner");
const fullStack = new Bootcamp("Full Stack Web and Mobile Development", "Advanced");


