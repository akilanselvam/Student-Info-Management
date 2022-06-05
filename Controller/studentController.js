const fs = require('fs');
const students = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/dev-data/studentInfo.json`)
);

exports.quickcheck = (req, res, next, val) => {
  console.log(`The Id is ${val}`);
  const id = req.params.id * 1;
  if (id > students.length) {
    return res.status(404).json({
      status: 'failed to load',
      message: 'Failed to load the requested ID',
    });
  }
  next();
};

exports.getAllStudentsDetail = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAT: req.requesttime,
    results: students.length,
    data: {
      students,
    },
  });
};

exports.createStudentDetail = (req, res) => {
  console.log(req.body);
  const newId = students[students.length - 1].id + 1;
  const newStudent = Object.assign({ id: newId }, req.body);
  students.push(newStudent);
  fs.writeFile(
    `${__dirname}/data/dev-data/studentInfo.json`,
    JSON.stringify(students),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          students: newStudent,
        },
      });
    }
  );
};

exports.getStudentDetail = (req, res) => {
  const id = req.params.id * 1;
  console.log(req.params);
  if (id > students.length) {
    res.status(404).json({
      status: 'failure',
      message: 'Invalid Response',
    });
  }

  const student = students.find((el) => el.id == id);
  res.status(200).json({
    status: 'success',
    data: {
      student,
    },
  });
};

exports.updateStudentDetail = (req, res) => {
  const id = req.params.id * 1;
  if (id > students.length) {
    return res.status(404).json({
      status: 'failed to load',
      message: 'Failed to load the requested ID',
    });
  }
  res.status(200).json({
    status: 'Success',
    data: {
      tour: '<updated text will be here>',
    },
  });
};

exports.deleteStudentDetail = (req, res) => {
  const id = req.params.id * 1;
  if (id > students.length) {
    return res.status(404).json({
      status: 'failed to load',
      message: 'Failed to load the requested ID',
    });
  }
  res.status(204).json({
    status: 'Success',
    data: null,
  });
};
