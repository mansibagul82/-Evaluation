
function Student(name, roll_no, classVal, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.classVal = classVal;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    this.printTop3Subjects = function () {
        const subjects = Object.keys(this.marks_of_5_subjects);
        subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
        const top3 = subjects.slice(0, 3);
        console.log("Top 3 Subjects:", top3);
    };
    this.printReportCard = function () {
        const percentage =
            (Object.values(this.marks_of_5_subjects).reduce((acc, curr) => acc + curr, 0) / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        console.log("+--------------------+");
        console.log("|     REPORT CARD    |");
        console.log("+--------------------+");
        console.log(`| Name     - ${this.name}    |`);
        console.log(`| Roll no. - ${this.roll_no}        |`);
        console.log(`| Class    - ${this.classVal}      |`);
        console.log(`| Section  - ${this.section}        |`);
        Object.keys(this.marks_of_5_subjects).forEach(subject => {
            console.log(`| ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${this.marks_of_5_subjects[subject]}      |`);
        });
        console.log(`| Percentage - ${percentage.toFixed(1)} % |`);
        console.log("+--------------------+");
    };
}
const student1 = new Student(
    "Mansi",
    1,
    "XII",
    "E",
    {
        science: 85,
        maths: 75,
        social_science: 69,
        english: 70,
        hindi: 66
    }
);

student1.printTop3Subjects();
student1.printReportCard();