const OtpModel = require('../models/otpModel')

// TODO: validate email
const getCode = async (req, res) => {
  const email = req.body.email
  const existingOtp = await OtpModel.find({
    email,
    active: true
  })

  // if (existingOtp) {
  //   res.send(existingOtp)
  // } else {
  const otp = await OtpModel.create({ email })
  res.send(otp.ops[0])
  // }
}

const verify = async (req, res) => {
  const { email, code } = req.body
  const otp = await OtpModel.verify(email, code)
  console.log(otp);
  const status = otp.value ? "success" : "failed"
  res.send({ status })

}

module.exports = {
  getCode,
  verify
}