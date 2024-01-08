const getStudentsByLocation = (students, city) => {
  const studentsInCity = students.filter(
    // eslint-disable-next-line comma-dangle
    (student) => student.location === city
  );
  return studentsInCity;
};

export default getStudentsByLocation;
