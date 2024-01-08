/* eslint-disable comma-dangle */
const updateStudentGradeByCity = (students, city, newGrades) => {
  // 1. Filter the students by city
  const filteredStudents = students.filter(
    (student) => student.location === city
  );

  // 2. Update each student's grade with the new grades provided
  const updatedStudents = filteredStudents.map((student) => {
    const matchingGrade = newGrades.find(
      (grade) => grade.studentId === student.id
    );

    // If a matching grade is found, use the provided grade; otherwise, set the grade to 'N/A'
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    // Return a new object with the updated grade
    return { ...student, grade };
  });

  return updatedStudents;
};

export default updateStudentGradeByCity;
