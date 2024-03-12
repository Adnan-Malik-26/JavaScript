#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int rollno;

public:
    Student(string name, int rollno) : name(name), rollno(rollno) {
        cout << "Base class information \nName: " << name << "\nRoll No: " << rollno << endl;
    }
};

class Course : public Student {
private:
    string coursename;
    int credits;

public:
    Course(string name, int rollno) : Student(name, rollno) {
        cout << "\nChild class information\nName: " << name << " Roll No: " << rollno << endl;
    }

    void studentInfo() {
        cout << "\nEnter Course name and Credits: ";
        cin >> coursename >> credits;
        cout << "Information Entered by the user is: " << coursename << " " << credits << endl;
    }
};

int main() {
    string name;
    int r;
    cout << "Enter your name and roll number: ";
    cin >> name >> r;
    Course obj(name, r);
    obj.studentInfo();
    return 0;
}
