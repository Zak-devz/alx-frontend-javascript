export default function createIteratorObject(report) {
  // eslint-disable-next-line wrap-iife
  return (function* _() {
    for (const department of Object.values(report.allEmployees)) {
      for (const employee of department) {
        yield employee;
      }
    }
  })();
}
