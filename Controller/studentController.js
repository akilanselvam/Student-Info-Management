const APIFeautres = require('./../utils/apifeatures');
const students = require('./../Models/studentModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllStudentsDetail = async (req, res) => {
  try {
    const features = new APIFeautres(students.find(), req.query)
      .filter()
      .sort()
      .limitfields()
      .pagination();
    const allStudents = await features.query;
    res.status(200).json({
      status: 'Success',
      result: allStudents.length,
      data: { allStudents },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Failure',
      message: err,
    });
  }
};

exports.createStudentDetail = catchAsync(async (req, res) => {
  const newStudent = await students.create(req.body);
  res.status(201).json({
    status: 'Success',
    data: {
      Students: newStudent,
    },
  });
});

exports.getStudentDetail = catchAsync(async (req, res) => {
  const Student = await students.findById(req.params.id);
  res.status(200).json({
    status: 'Success',
    data: { Student },
  });
});

exports.updateStudentDetail = catchAsync(async (req, res) => {
  const student = await students.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'Success',
    data: {
      student,
    },
  });
});

exports.deleteStudentDetail = catchAsync(async (req, res) => {
  await students.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: 'Success',
    data: null,
  });
});
